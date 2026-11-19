from django.db import migrations, models


def map_existing_statuses(apps, schema_editor):
    ContactEnquiry = apps.get_model("contact_api", "ContactEnquiry")
    database = schema_editor.connection.alias
    status_mapping = {
        "in_progress": "pending",
        "responded": "contacted",
        "closed": "completed",
    }

    for old_status, new_status in status_mapping.items():
        ContactEnquiry.objects.using(database).filter(status=old_status).update(
            status=new_status
        )


def restore_existing_statuses(apps, schema_editor):
    ContactEnquiry = apps.get_model("contact_api", "ContactEnquiry")
    database = schema_editor.connection.alias
    status_mapping = {
        "pending": "in_progress",
        "contacted": "responded",
        "completed": "closed",
    }

    for new_status, old_status in status_mapping.items():
        ContactEnquiry.objects.using(database).filter(status=new_status).update(
            status=old_status
        )


class Migration(migrations.Migration):
    dependencies = [
        ("contact_api", "0005_alter_contactenquiry_status_label"),
    ]

    operations = [
        migrations.RunPython(map_existing_statuses, restore_existing_statuses),
        migrations.AlterField(
            model_name="contactenquiry",
            name="status",
            field=models.CharField(
                choices=[
                    ("new", "New"),
                    ("pending", "Pending"),
                    ("contacted", "Contacted"),
                    ("completed", "Completed"),
                ],
                db_index=True,
                default="new",
                max_length=20,
            ),
        ),
    ]
