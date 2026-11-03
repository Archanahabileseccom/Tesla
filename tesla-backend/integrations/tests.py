from django.contrib.auth import get_user_model
from django.test import TestCase, override_settings
from rest_framework.test import APIClient

from .models import ChatMessage


class IntegrationEndpointTests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_unauthenticated_chat_get_returns_empty_data(self):
        ChatMessage.objects.create(name="Alex", message="Private enquiry")
        response = self.client.get("/api/integrations/chat-messages/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, {"success": True, "data": []})

    def test_chat_post_saves_message(self):
        response = self.client.post(
            "/api/integrations/chat-messages/",
            {"name": "Alex", "message": "I need help."},
            format="json",
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(ChatMessage.objects.count(), 1)
        self.assertEqual(response.data["data"]["name"], "Alex")

    def test_chat_get_is_available_to_staff(self):
        ChatMessage.objects.create(name="Alex", message="Staff-only message")
        self.assertEqual(
            self.client.get("/api/integrations/chat-messages/").status_code,
            200,
        )

    def test_chat_messages_list_returns_empty_data_without_authentication(self):
        ChatMessage.objects.create(name="Alex", message="Private enquiry")
        response = self.client.get("/api/integrations/chat-messages/list/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, {"success": True, "data": []})

    def test_chat_messages_list_returns_messages_to_staff(self):
        ChatMessage.objects.create(name="Alex", message="Staff-only message")
        admin = get_user_model().objects.create_user(
            username="integration-list-admin",
            ******,
            is_staff=True,
        )
        self.client.force_authenticate(user=admin)
        response = self.client.get("/api/integrations/chat-messages/list/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["data"][0]["message"], "Staff-only message")

        admin = get_user_model().objects.create_user(
            username="integration-admin",
            password="test-password",
            is_staff=True,
        )
        self.client.force_authenticate(user=admin)
        self.assertEqual(
            self.client.get("/api/integrations/chat-messages/").status_code,
            200,
        )

    @override_settings(WHATSAPP_NUMBER="15551234567")
    def test_whatsapp_get_and_post_return_links(self):
        get_response = self.client.get("/api/integations/whatsapp/")
        post_response = self.client.post(
            "/api/integrations/whatsapp/",
            {"message": "Hello there"},
            format="json",
        )

        self.assertEqual(get_response.status_code, 200)
        self.assertTrue(get_response.data["url"].startswith("https://wa.me/"))
        self.assertEqual(
            post_response.data["url"],
            "https://wa.me/15551234567?text=Hello%20there",
        )
