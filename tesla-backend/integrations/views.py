from urllib.parse import quote

from django.conf import settings
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import ChatMessage
from .serializers import ChatMessageSerializer


DEFAULT_WHATSAPP_MESSAGE = (
    "Hello Tesla Innovation, I would like to know more about your services."
)


@api_view(["GET", "POST"])
def whatsapp_link(request):
    number = getattr(settings, "WHATSAPP_NUMBER", "")
    if isinstance(number, str):
        number = number.strip()
    if (
        not isinstance(number, str)
        or not number.isascii()
        or not number.isdigit()
        or not 10 <= len(number) <= 15
    ):
        return Response(
            {
                "success": False,
                "message": (
                    "Configure WHATSAPP_NUMBER with country code and digits only."
                ),
            },
            status=status.HTTP_503_SERVICE_UNAVAILABLE,
        )

    message = DEFAULT_WHATSAPP_MESSAGE
    if request.method == "POST":
        if not isinstance(request.data, dict):
            return Response(
                {"success": False, "message": "Request body must be a JSON object."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        message = request.data.get("message", DEFAULT_WHATSAPP_MESSAGE)
        if not isinstance(message, str) or not message.strip():
            return Response(
                {"success": False, "message": "A valid message is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        message = message.strip()

    return Response(
        {
            "success": True,
            "url": f"https://wa.me/{number}?text={quote(message)}",
        }
    )


@api_view(["GET"])
def chat_config(request):
    return Response(
        {
            "success": True,
            "provider": "botpress",
            "clientId": getattr(settings, "BOTPRESS_CLIENT_ID", ""),
        }
    )


class ChatMessageListCreateView(generics.ListCreateAPIView):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer

    def get_permissions(self):
        return [permissions.AllowAny()]

    def list(self, request, *args, **kwargs):
        if not request.user.is_authenticated or not request.user.is_staff:
            return Response({"success": True, "data": []}, status=status.HTTP_200_OK)

        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({"success": True, "data": serializer.data})

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {
                "success": True,
                "message": "Chat message saved successfully.",
                "data": serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )


class ChatMessageListView(generics.ListAPIView):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer

    def get_permissions(self):
        return [permissions.AllowAny()]

    def list(self, request, *args, **kwargs):
        if not request.user.is_authenticated or not request.user.is_staff:
            return Response({"success": True, "data": []}, status=status.HTTP_200_OK)

        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({"success": True, "data": serializer.data})
