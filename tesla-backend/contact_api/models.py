from django.db import models


class ContactEnquiry(models.Model):
    class Status(models.TextChoices):
        NEW = "new", "New"
        IN_PROGRESS = "in_progress", "In Progress"
        RESPONDED = "responded", "Responded"
        CLOSED = "closed", "Closed"

    class EnquiryType(models.TextChoices):
        GENERAL = "general", "General Enquiry"
        INTELLECTUAL_PROPERTY = "intellectual-property", "Intellectual Property"
        PATENTS = "patents", "Patents"
        TRADEMARKS = "trademarks", "Trademarks"
        INDUSTRIAL_DESIGNS = "industrial-designs", "Industrial Designs"
        GLOBAL_IP = "global-ip", "Global Intellectual Property"
        TECHNOLOGY = "technology", "Technology & Innovation"
        CORPORATE = "corporate", "Corporate Advisory"
        LITIGATION = "litigation", "Litigation"
        TRANSACTIONS = "transactions", "Transactions"
        OTHER = "other", "Other"

    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=25, blank=True)
    company = models.CharField(max_length=150, blank=True)
    subject = models.CharField(max_length=200, blank=True)
    service = models.CharField(
        max_length=40,
        choices=EnquiryType.choices,
        default=EnquiryType.GENERAL,
    )
    message = models.TextField(max_length=3000)
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.NEW,
        db_index=True,
    )
    source_page = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Contact Enquiry"
        verbose_name_plural = "Contact Enquiries"

    def __str__(self):
        return f"{self.name} - {self.subject or self.get_service_display()}"
