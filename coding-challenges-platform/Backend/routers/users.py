from fastapi import APIRouter
from models.user import User
from services.firestore import db
from datetime import datetime

router = APIRouter()

@router.post("/users")
def add_user(user: User):
    user_data = {
        "email": user.email,
        "name": user.name,
        "created_at": datetime.now(),
    }
    doc_ref = db.collection("users").add(user_data)
    return {"message": "User added successfully", "id": doc_ref[1].id}
