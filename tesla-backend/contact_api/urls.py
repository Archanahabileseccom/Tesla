from django.urls import path

from .views import (
    ContactEnquiryDetailView,
    ContactEnquiryCreateView,
    ContactEnquiryListView,
    ContactEnquiryStatusUpdateView,
    contact_details,
)

urlpatterns = [
    path("", ContactEnquiryCreateView.as_view(), name="contact-list-create"),
    path("details/", contact_details, name="contact-details"),
    path("list/", ContactEnquiryListView.as_view(), name="contact-list"),
    path("<int:pk>/", ContactEnquiryDetailView.as_view(), name="contact-detail"),
    path(
        "<int:pk>/status/",
        ContactEnquiryStatusUpdateView.as_view(),
        name="contact-status-update",
    ),
]