
from django.urls import include, path, reverse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def home(request):
    contact_detail_url = f"{request.build_absolute_uri('/api/contact/')}{{id}}/"
    integration_contact_detail_url = (
        f"{request.build_absolute_uri('/api/integrations/contact/')}{{id}}/"
    )
    return Response(
        {
            "success": True,
            "status_code": status.HTTP_200_OK,
            "message": "Tesla Innovation API is available.",
            "endpoints": {
                "contact": request.build_absolute_uri(
                    reverse("contact-list-create")
                ),
                "contact_methods": {
                    "url": request.build_absolute_uri(
                        reverse("contact-list-create")
                    ),
                    "methods": ["GET", "POST"],
                    "get_access": "public contact details; enquiry list for staff",
                    "post_access": "public",
                },
                "contact_list": request.build_absolute_uri(
                    reverse("contact-list")
                ),
                "contact_detail": {
                    "url_template": contact_detail_url,
                    "methods": ["GET", "PUT", "PATCH", "DELETE"],
                    "access": "staff only",
                },
                "contact_status_update": {
                    "url_template": f"{contact_detail_url}status/",
                    "methods": ["GET", "PATCH"],
                    "get_access": "public; endpoint information only",
                    "patch_access": "staff only",
                },
                "integration_contact": {
                    "url": request.build_absolute_uri(
                        reverse("integration-contact-list-create")
                    ),
                    "methods": ["GET", "POST"],
                    "get_access": "staff only",
                    "post_access": "public",
                },
                "integration_contact_detail": {
                    "url_template": integration_contact_detail_url,
                    "methods": ["GET", "PUT", "PATCH"],
                    "access": "staff only",
                },
                "whatsapp": request.build_absolute_uri(reverse("whatsapp-link")),
                "chat_config": request.build_absolute_uri(reverse("chat-config")),
                "chat_messages": request.build_absolute_uri(
                    reverse("chat-message-create")
                ),
                "chat_messages_list": request.build_absolute_uri(
                    reverse("chat-message-list")
                ),
            },
        },
        status=status.HTTP_200_OK,
    )


urlpatterns = [
    path("", home, name="home"),
    path("api/contact/", include("contact_api.urls")),
    path(
        "api/integrations/contact/",
        include("integrations.contact_urls"),
    ),
    path("api/integrations/", include("integrations.urls")),
]
