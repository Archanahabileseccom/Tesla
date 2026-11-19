from bson import ObjectId
from django.core.management.base import BaseCommand, CommandError
from pymongo.errors import PyMongoError

from mongodb import contact_collection


CONTACT_DETAILS_ID = ObjectId("6af40bbfc41a484a64bb1c5f")
CONTACT_DETAILS = {
    "company_name": "Tesla Innovation",
    "email": "gsnnaren@gmail.com",
    "phone": "91-8870084429",
    "address": {
        "building": "No.532",
        "street": "Muniyappan Kovil Street",
        "area": "Chinna Pudhur",
        "city": "Salem",
        "district": "Salem",
        "state": "Tamil Nadu",
        "pincode": "636007",
        "country": "India",
    },
    "contact_form": {
        "title": "Send us a message",
        "fields": [
            {"name": "name", "label": "Name", "required": True},
            {"name": "email", "label": "Email", "required": True},
            {"name": "company", "label": "Company", "required": False},
            {"name": "phone", "label": "Phone", "required": False},
            {
                "name": "service_interested_in",
                "label": "Service interested in",
                "required": False,
                "options": [
                    "Intellectual Property",
                    "Patent Services",
                    "Trademark Services",
                    "Global IP",
                    "Litigation",
                    "Corporate Advisory",
                ],
            },
            {"name": "message", "label": "Message", "required": True},
        ],
        "submit_button": "Send Message",
    },
    "status": "active",
}


class Command(BaseCommand):
    help = "Upsert Tesla Innovation contact details in MongoDB."

    def handle(self, *args, **options):
        try:
            result = contact_collection.update_one(
                {"_id": CONTACT_DETAILS_ID},
                {"$set": CONTACT_DETAILS},
                upsert=True,
            )
        except PyMongoError as exc:
            raise CommandError(
                "Could not save contact details to the configured MongoDB database."
            ) from exc

        if result.upserted_id is not None:
            message = f"Inserted contact details with id {result.upserted_id}."
        elif result.modified_count:
            message = f"Updated contact details with id {CONTACT_DETAILS_ID}."
        else:
            message = f"Contact details with id {CONTACT_DETAILS_ID} are already current."

        self.stdout.write(self.style.SUCCESS(message))
