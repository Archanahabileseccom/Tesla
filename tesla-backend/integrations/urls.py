
from django.urls import path

from .views import (
    whatsapp_link,
    chat_config,
    ChatMessageListCreateView,
    ChatMessageListView,
)

urlpatterns = [
    path("whatsapp/", whatsapp_link, name="whatsapp-link"),
    path("chat-config/", chat_config, name="chat-config"),
    path(
        "chat-messages/",
        ChatMessageListCreateView.as_view(),
        name="chat-message-create",
    ),
    path("chat-messages/list/", ChatMessageListView.as_view(), name="chat-message-list"),
]
