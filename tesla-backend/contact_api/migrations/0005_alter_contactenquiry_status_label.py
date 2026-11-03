from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("contact_api", "0004_alter_contactenquiry_status"),
    ]

    operations = [
        migrations.AlterField(
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
    ]
