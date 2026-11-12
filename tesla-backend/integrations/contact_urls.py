from django.urls import path

from .views import ContactEnquiryDetailView, ContactEnquiryListCreateView

urlpatterns = [
    path(
        "",
        ContactEnquiryListCreateView.as_view(),
        name="integration-contact-list-create",
    ),
    path(
        "<int:pk>/",
        ContactEnquiryDetailView.as_view(),
        name="integration-contact-detail",
    ),
]
