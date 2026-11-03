

# Register your models here.

from django.contrib import admin
from .models import ChatMessage


@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "created_at")
    search_fields = ("name", "message")
    list_filter = ("created_at",)
    readonly_fields = ("created_at",)
