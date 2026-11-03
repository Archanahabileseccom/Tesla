from django.contrib import admin

from .models import ContactEnquiry


@admin.register(ContactEnquiry)
class ContactEnquiryAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "company",
        "service",
        "status",
        "created_at",
    )
    list_filter = ("status", "service", "created_at")
    search_fields = ("name", "email", "company", "message")
    readonly_fields = ("created_at", "updated_at")
    fieldsets = (
        ("Contact details", {"fields": ("name", "email", "company", "phone")}),
        ("Enquiry", {"fields": ("service", "subject", "message", "status")}),
        ("Submission details", {"fields": ("source_page", "created_at", "updated_at")}),
    )
    ordering = ("-created_at",)
    list_per_page = 25
