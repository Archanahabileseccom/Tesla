from django.db import migrations, models


def normalize_enquiry_types(apps, schema_editor):
    ContactEnquiry = apps.get_model("contact_api", "ContactEnquiry")
    allowed_types = {
        "general",
        "intellectual-property",
        "technology",
        "corporate",
        "litigation",
        "transactions",
        "other",
    }
    legacy_labels = {
        "general-enquiry": "general",
        "technology-&-innovation": "technology",
        "corporate-advisory": "corporate",
    }
    for enquiry in ContactEnquiry.objects.all().only("id", "enquiry_type").iterator():
        value = (enquiry.enquiry_type or "").strip().lower().replace(" ", "-")
        value = legacy_labels.get(value, value)
        if value not in allowed_types:
            value = "general"
        ContactEnquiry.objects.filter(pk=enquiry.pk).update(enquiry_type=value)


class Migration(migrations.Migration):
    dependencies = [
        ("contact_api", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="contactenquiry",
            old_name="name",
            new_name="full_name",
        ),
        migrations.RenameField(
            model_name="contactenquiry",
            old_name="service",
            new_name="enquiry_type",
        ),
        migrations.AddField(
            model_name="contactenquiry",
            name="company_name",
            field=models.CharField(blank=True, max_length=150),
        ),
        migrations.AddField(
            model_name="contactenquiry",
            name="subject",
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name="contactenquiry",
            name="status",
            field=models.CharField(
                choices=[
                    ("new", "New"),
                    ("in_progress", "In Progress"),
                    ("responded", "Responded"),
                    ("closed", "Closed"),
                ],
                db_index=True,
                default="new",
                max_length=20,
            ),
        ),
        migrations.AddField(
            model_name="contactenquiry",
            name="source_page",
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name="contactenquiry",
            name="updated_at",
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.RunPython(normalize_enquiry_types, migrations.RunPython.noop),
        migrations.AlterField(
            model_name="contactenquiry",
            name="enquiry_type",
            field=models.CharField(
                choices=[
                    ("general", "General Enquiry"),
                    ("intellectual-property", "Intellectual Property"),
                    ("technology", "Technology & Innovation"),
                    ("corporate", "Corporate Advisory"),
                    ("litigation", "Litigation"),
                    ("transactions", "Transactions"),
                    ("other", "Other"),
                ],
                default="general",
                max_length=40,
            ),
        ),
    ]
