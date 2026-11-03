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

    def test_api_home_returns_working_contact_endpoints(self):
        response = self.client.get("/")

        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.data["success"])
        self.assertEqual(response.data["status_code"], 200)
        self.assertEqual(
            response.data["endpoints"]["contact"],
            "http://testserver/api/contact/",
        )

    def test_public_contact_details_endpoint_returns_business_information(self):
        for endpoint in ("/api/contact/", "/api/contact/details/"):
            with self.subTest(endpoint=endpoint):
                response = self.client.get(endpoint)

                self.assertEqual(response.status_code, 200)
                self.assertTrue(response.data["success"])
                self.assertEqual(response.data["data"]["email"], "enquiry@habilesec.com")
                self.assertEqual(response.data["data"]["phone"], "91-8870084429")
                self.assertEqual(
                    response.data["data"]["head_office"],
                    {
                        "address": "No.532, Muniyappan Kovil Street, Chinna Pudhur",
                        "city": "Salem",
                        "country": "India",
                        "postal_code": "636007",
                    },
                )
                self.assertEqual(
                    response.data["data"]["other_locations"],
                    [
                        {"city": "Bangalore", "department": "Engineering"},
                        {"city": "Ahmedabad", "department": "Advisory"},
                        {"city": "Bhilwara", "department": "Delivery"},
                        {"city": "Hyderabad", "department": "Operations"},
                    ],
                )
                self.assertTrue(response.data["data"]["services"])

    def test_public_post_saves_contact_enquiry(self):
        response = self.client.post(
            "/api/contact/",
            self.valid_payload,
            format="json",
        )

        self.assertEqual(response.status_code, 200)
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
        payload = {
            **self.valid_payload,
            "email": "not-an-email",
            "service": "unavailable-service",
        }

        response = self.client.post("/api/contact/", payload, format="json")

        self.assertEqual(response.status_code, 400)
        self.assertIn("email", response.data)
        self.assertIn("service", response.data)
        self.assertEqual(ContactEnquiry.objects.count(), 0)

    def test_post_rejects_invalid_phone_length_or_characters(self):
        for phone in ("123", "call me"):
            with self.subTest(phone=phone):
                response = self.client.post(
                    "/api/contact/",
                    {**self.valid_payload, "phone": phone},
                    format="json",
                )
                self.assertEqual(response.status_code, 400)
                self.assertIn("phone", response.data)

    def test_enquiry_listing_and_detail_require_staff(self):
        enquiry = ContactEnquiry.objects.create(
            name="Alex Morgan",
            email="alex@example.com",
            service=ContactEnquiry.EnquiryType.GENERAL,
            message="Please contact me about your services.",
        )

        public_response = self.client.get("/api/contact/")
        self.assertEqual(public_response.status_code, 200)
        self.assertNotIn("name", public_response.data["data"])
        public_list_response = self.client.get("/api/contact/list/")
        self.assertEqual(public_list_response.status_code, 200)
        self.assertEqual(public_list_response.data, {"success": True, "data": []})
        public_detail_response = self.client.get(f"/api/contact/{enquiry.pk}/")
        self.assertEqual(public_detail_response.status_code, 200)
        self.assertEqual(public_detail_response.data, {"success": True, "data": {}})
        status_info_response = self.client.get(
            f"/api/contact/{enquiry.pk}/status/"
        )
        self.assertEqual(status_info_response.status_code, 200)
        self.assertTrue(status_info_response.data["success"])
        self.assertEqual(status_info_response.data["methods"], ["PATCH"])
        self.assertEqual(
            self.client.patch(
                f"/api/contact/{enquiry.pk}/",
                {"status": ContactEnquiry.Status.RESPONDED},
                format="json",
            ).status_code,
            403,
        )
        self.assertEqual(
            self.client.patch(
                f"/api/contact/{enquiry.pk}/status/",
                {"status": ContactEnquiry.Status.RESPONDED},
                format="json",
            ).status_code,
            403,
        )
        self.assertEqual(self.client.delete(f"/api/contact/{enquiry.pk}/").status_code, 403)

        self.create_staff_user()
        staff_list_response = self.client.get("/api/contact/list/")
        self.assertEqual(staff_list_response.status_code, 200)
        self.assertEqual(staff_list_response.data["data"][0]["id"], enquiry.pk)
        detail = self.client.get(f"/api/contact/{enquiry.pk}/")
        self.assertEqual(detail.status_code, 200)
        self.assertEqual(detail.data["id"], enquiry.pk)
        self.assertEqual(detail.data["name"], "Alex Morgan")

    def test_staff_can_update_status_and_delete_enquiry(self):
        self.create_staff_user()
        enquiry = ContactEnquiry.objects.create(
            name="Alex Morgan",
            email="alex@example.com",
            service=ContactEnquiry.EnquiryType.GENERAL,
            message="Please contact me about your services.",
        )

        response = self.client.patch(
            f"/api/contact/{enquiry.pk}/",
            {"status": ContactEnquiry.Status.RESPONDED},
            format="json",
        )

        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.data["success"])
        enquiry.refresh_from_db()
        self.assertEqual(enquiry.status, ContactEnquiry.Status.RESPONDED)

        status_response = self.client.patch(
            f"/api/contact/{enquiry.pk}/status/",
            {"status": ContactEnquiry.Status.CLOSED},
            format="json",
        )
        self.assertEqual(status_response.status_code, 200)
        self.assertTrue(status_response.data["success"])
        enquiry.refresh_from_db()
        self.assertEqual(enquiry.status, ContactEnquiry.Status.CLOSED)

        delete_response = self.client.delete(f"/api/contact/{enquiry.pk}/")
        self.assertEqual(delete_response.status_code, 204)
        self.assertFalse(ContactEnquiry.objects.filter(pk=enquiry.pk).exists())
