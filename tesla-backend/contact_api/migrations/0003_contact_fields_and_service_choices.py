from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("contact_api", "0002_enquiry_details_and_status"),
    ]

    operations = [
        migrations.RenameField(
            model_name="contactenquiry",
            old_name="full_name",
            new_name="name",
        ),
        migrations.RenameField(
            model_name="contactenquiry",
            old_name="company_name",
            new_name="company",
        ),
        migrations.RenameField(
            model_name="contactenquiry",
            old_name="enquiry_type",
            new_name="service",
        ),
        migrations.AlterField(
            model_name="contactenquiry",
            name="service",
            field=models.CharField(
                choices=[
                    ("general", "General Enquiry"),
                    ("intellectual-property", "Intellectual Property"),
                    ("patents", "Patents"),
                    ("trademarks", "Trademarks"),
                    ("industrial-designs", "Industrial Designs"),
                    ("global-ip", "Global Intellectual Property"),
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
