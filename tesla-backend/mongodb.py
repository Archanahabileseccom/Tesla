
import os
from pathlib import Path

from dotenv import load_dotenv
from pymongo import MongoClient


BACKEND_DIR = Path(__file__).resolve().parent
load_dotenv(BACKEND_DIR / ".env")

MONGODB_URI = os.getenv("MONGODB_URI")
if not MONGODB_URI:
    raise ValueError("MONGODB_URI is not set")

MONGODB_NAME = os.getenv("MONGODB_NAME", "Tesla").strip()
if not MONGODB_NAME:
    raise ValueError("MONGODB_NAME cannot be empty.")

client = MongoClient(MONGODB_URI)
db = client[MONGODB_NAME]

# Keep these existing collection names for legacy integrations.
contact_collection = db["contact-details"]
whatsapp_collection = db["whatsapp_integrations"]
message_collection = db["whatsapp_messages"]
