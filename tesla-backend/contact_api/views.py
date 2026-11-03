from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view
from rest_framework.throttling import AnonRateThrottle
from rest_framework.response import Response

from .models import ContactEnquiry
from .serializers import (
    ContactEnquirySerializer,
    ContactEnquiryStatusSerializer,
)


def get_contact_details_data():
    return {
        "email": "enquiry@habilesec.com",
        "phone": "91-8870084429",
        "head_office": {
            "address": "No.532, Muniyappan Kovil Street, Chinna Pudhur",
            "city": "Salem",
            "country": "India",
            "postal_code": "636007",
        },
        "other_locations": [
            {"city": "Bangalore", "department": "Engineering"},
            {"city": "Ahmedabad", "department": "Advisory"},
            {"city": "Bhilwara", "department": "Delivery"},
            {"city": "Hyderabad", "department": "Operations"},
        ],
        "services": [
            {"value": value, "label": label}
            for value, label in ContactEnquiry.EnquiryType.choices
        ],
    }


@api_view(["GET"])
def contact_details(request):
    return Response(
        {"success": True, "data": get_contact_details_data()},
        status=status.HTTP_200_OK,
    )


class ContactEnquiryCreateView(generics.CreateAPIView):
    serializer_class = ContactEnquirySerializer
    throttle_classes = [AnonRateThrottle]

    def get_permissions(self):
        if self.request.method in ("GET", "POST"):
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    def get(self, request, *args, **kwargs):
        return Response(
            {"success": True, "data": get_contact_details_data()},
            status=status.HTTP_200_OK,
        )

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {
                "success": True,
                "message": "Contact enquiry submitted successfully.",
                "data": serializer.data,
            },
            status=status.HTTP_200_OK,
        )


class ContactEnquiryListView(generics.ListAPIView):
    queryset = ContactEnquiry.objects.all()
    serializer_class = ContactEnquirySerializer

    def get_permissions(self):
        return [permissions.AllowAny()]

    def list(self, request, *args, **kwargs):
        if not request.user.is_authenticated or not request.user.is_staff:
            return Response(
                {"success": True, "data": []},
                status=status.HTTP_200_OK,
            )

        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({"success": True, "data": serializer.data})


class ContactEnquiryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactEnquiry.objects.all()
    http_method_names = ["get", "patch", "delete", "options", "head"]

    def get_permissions(self):
        if self.request.method == "GET":
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    def retrieve(self, request, *args, **kwargs):
        if not request.user.is_authenticated or not request.user.is_staff:
            return Response(
                {"success": True, "data": {}},
                status=status.HTTP_200_OK,
            )
        return super().retrieve(request, *args, **kwargs)

    def get_serializer_class(self):
        if self.request.method == "PATCH":
            return ContactEnquiryStatusSerializer
        return ContactEnquirySerializer

    def patch(self, request, *args, **kwargs):
        response = super().partial_update(request, *args, **kwargs)
        return Response(
            {
                "success": True,
                "message": "Enquiry status updated successfully.",
                "data": response.data,
            },
            status=response.status_code,
        )


class ContactEnquiryStatusUpdateView(generics.UpdateAPIView):
    queryset = ContactEnquiry.objects.all()
    serializer_class = ContactEnquiryStatusSerializer
    http_method_names = ["get", "patch", "options", "head"]

    def get_permissions(self):
        if self.request.method == "GET":
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    def get(self, request, *args, **kwargs):
        return Response(
            {
                "success": True,
                "message": "Use PATCH to update an enquiry status.",
                "methods": ["PATCH"],
                "access": "staff only",
            },
            status=status.HTTP_200_OK,
        )

    def partial_update(self, request, *args, **kwargs):
        response = super().partial_update(request, *args, **kwargs)
        return Response(
            {
                "success": True,
                "message": "Enquiry status updated successfully.",
                "data": response.data,
            },
            status=response.status_code,
        )
