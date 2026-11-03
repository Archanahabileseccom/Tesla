import re
from collections.abc import Mapping

from rest_framework import serializers

from .models import ContactEnquiry


class ContactEnquirySerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=100, trim_whitespace=True)
    email = serializers.EmailField(max_length=254, trim_whitespace=True)
    company = serializers.CharField(
        max_length=150, required=False, allow_blank=True, trim_whitespace=True
    )
    phone = serializers.CharField(
        max_length=25, required=False, allow_blank=True, trim_whitespace=True
    )
    service = serializers.ChoiceField(
        choices=ContactEnquiry.EnquiryType.choices,
        default=ContactEnquiry.EnquiryType.GENERAL,
    )
    message = serializers.CharField(max_length=3000, trim_whitespace=True)

    class Meta:
        model = ContactEnquiry
        fields = (
            "id",
            "name",
            "email",
            "company",
            "phone",
            "service",
            "message",
            "subject",
            "status",
            "source_page",
            "created_at",
            "updated_at",
        )
        read_only_fields = ("id", "status", "created_at", "updated_at")
        extra_kwargs = {
            "subject": {"required": False},
            "source_page": {"required": False},
        }

    def to_internal_value(self, data):
        if not isinstance(data, Mapping):
            return super().to_internal_value(data)

        data = data.copy()
        aliases = (
            ("full_name", "name"),
            ("company_name", "company"),
            ("enquiry_type", "service"),
        )
        for alias, field_name in aliases:
            if alias in data:
                alias_value = data[alias]
                if field_name in data and data[field_name] != alias_value:
                    raise serializers.ValidationError(
                        {alias: f"Provide either {alias} or {field_name}, not both."}
                    )
                data[field_name] = alias_value
                del data[alias]
        return super().to_internal_value(data)

    def validate_name(self, value):
        value = value.strip()
        if len(value) < 2:
            raise serializers.ValidationError(
                "Name must contain at least 2 characters."
            )
        return value

    def validate_phone(self, value):
        if value and (len(value) < 7 or not re.fullmatch(r"[0-9+().\-\s]+", value)):
            raise serializers.ValidationError(
                "Enter a valid phone number between 7 and 25 characters."
            )
        return value

    def validate_message(self, value):
        value = value.strip()
        if len(value) < 10:
            raise serializers.ValidationError(
                "Message must contain at least 10 characters."
            )
        return value


class ContactEnquiryStatusSerializer(serializers.ModelSerializer):
    status = serializers.ChoiceField(choices=ContactEnquiry.Status.choices)

    class Meta:
        model = ContactEnquiry
        fields = ("id", "status", "updated_at")
        read_only_fields = ("id", "updated_at")
