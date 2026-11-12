from django.contrib.auth import get_user_model
from django.test import TestCase
from rest_framework.test import APIClient

from .models import ContactEnquiry


class ContactEnquiryApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.valid_payload = {
            "name": "Alex Morgan",
            "email": "alex@example.com",
            "phone": "+1 555 123 4567",
            "company": "Example Ltd",
            "service": "trademarks",
            "message": "I would like information about trademark services.",
        }

    def create_staff_user(self):
        staff_user = get_user_model().objects.create_user(
            username="contact-staff",
            password="test-password-for-tests",
            is_staff=True,
        )
        self.client.force_authenticate(user=staff_user)
        return staff_user

    def create_enquiry(self):
        return ContactEnquiry.objects.create(
            name="Alex Morgan",
            email="alex@example.com",
            company="Example Ltd",
            phone="+1 555 123 4567",
            service=ContactEnquiry.EnquiryType.GENERAL,
            message="Please contact me about your services.",
        )

    def test_api_home_returns_working_contact_endpoints(self):
        response = self.client.get("/")

        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.data["success"])
        self.assertEqual(response.data["status_code"], 200)
        self.assertEqual(
            response.data["endpoints"]["contact"],
            "http://testserver/api/contact/",
        )
        self.assertEqual(
            response.data["endpoints"]["contact_methods"]["methods"],
            ["GET", "POST"],
        )
        self.assertEqual(
            response.data["endpoints"]["contact_detail"]["methods"][:3],
            ["GET", "PUT", "PATCH"],
        )

    def test_public_contact_details_endpoint_returns_business_information(self):
        for endpoint in ("/api/contact/", "/api/contact/details/"):
            with self.subTest(endpoint=endpoint):
                response = self.client.get(endpoint)

                self.assertEqual(response.status_code, 200)
                self.assertTrue(response.data["success"])
                self.assertEqual(
                    response.data["data"]["email"],
                    "enquiry@habilesec.com",
                )
                self.assertEqual(
                    response.data["data"]["phone"],
                    "91-8870084429",
                )
                self.assertTrue(response.data["data"]["services"])

    def test_public_post_saves_contact_enquiry(self):
        response = self.client.post(
            "/api/contact/",
            self.valid_payload,
            format="json",
        )

        self.assertEqual(response.status_code, 201)
        enquiry = ContactEnquiry.objects.get()
        self.assertEqual(enquiry.name, "Alex Morgan")
        self.assertEqual(enquiry.company, "Example Ltd")
        self.assertEqual(enquiry.service, "trademarks")
        self.assertEqual(enquiry.status, ContactEnquiry.Status.NEW)
        self.assertEqual(response.data["data"]["id"], enquiry.pk)

    def test_post_rejects_missing_required_fields(self):
        response = self.client.post(
            "/api/contact/",
            {"name": "", "email": "", "message": ""},
            format="json",
        )

        self.assertEqual(response.status_code, 400)
        self.assertIn("name", response.data)
        self.assertIn("email", response.data)
        self.assertIn("message", response.data)
        self.assertEqual(ContactEnquiry.objects.count(), 0)

    def test_post_rejects_invalid_email_and_service(self):
        response = self.client.post(
            "/api/contact/",
            {
                **self.valid_payload,
                "email": "not-an-email",
                "service": "unavailable-service",
            },
            format="json",
        )

        self.assertEqual(response.status_code, 400)
        self.assertIn("email", response.data)
        self.assertIn("service", response.data)
        self.assertEqual(ContactEnquiry.objects.count(), 0)

    def test_enquiry_reads_and_updates_require_staff(self):
        enquiry = self.create_enquiry()

        self.assertEqual(self.client.get("/api/contact/list/").status_code, 403)
        self.assertEqual(
            self.client.get(f"/api/contact/{enquiry.pk}/").status_code,
            403,
        )
        self.assertEqual(
            self.client.patch(
                f"/api/contact/{enquiry.pk}/",
                {"name": "Changed Name"},
                format="json",
            ).status_code,
            403,
        )

        self.create_staff_user()
        list_response = self.client.get("/api/contact/list/")
        detail_response = self.client.get(f"/api/contact/{enquiry.pk}/")

        self.assertEqual(list_response.status_code, 200)
        self.assertEqual(list_response.data["data"][0]["id"], enquiry.pk)
        self.assertEqual(detail_response.status_code, 200)
        self.assertEqual(
            detail_response.data["data"]["name"],
            "Alex Morgan",
        )

    def test_staff_can_put_full_enquiry_and_patch_selected_fields(self):
        self.create_staff_user()
        enquiry = self.create_enquiry()

        patch_response = self.client.patch(
            f"/api/contact/{enquiry.pk}/",
            {"name": "Alexandra Morgan"},
            format="json",
        )
        self.assertEqual(patch_response.status_code, 200)
        enquiry.refresh_from_db()
        self.assertEqual(enquiry.name, "Alexandra Morgan")
        self.assertEqual(enquiry.email, "alex@example.com")

        put_response = self.client.put(
            f"/api/contact/{enquiry.pk}/",
            {
                **self.valid_payload,
                "name": "Taylor Morgan",
                "service_interested_in": "corporate",
            },
            format="json",
        )
        self.assertEqual(put_response.status_code, 200)
        self.assertTrue(put_response.data["success"])
        enquiry.refresh_from_db()
        self.assertEqual(enquiry.name, "Taylor Morgan")
        self.assertEqual(enquiry.service, "corporate")

    def test_staff_can_update_status_and_delete_enquiry(self):
        self.create_staff_user()
        enquiry = self.create_enquiry()

        status_response = self.client.patch(
            f"/api/contact/{enquiry.pk}/status/",
            {"status": ContactEnquiry.Status.RESPONDED},
            format="json",
        )
        self.assertEqual(status_response.status_code, 200)
        enquiry.refresh_from_db()
        self.assertEqual(enquiry.status, ContactEnquiry.Status.RESPONDED)

        delete_response = self.client.delete(f"/api/contact/{enquiry.pk}/")
        self.assertEqual(delete_response.status_code, 204)
        self.assertFalse(ContactEnquiry.objects.filter(pk=enquiry.pk).exists())
