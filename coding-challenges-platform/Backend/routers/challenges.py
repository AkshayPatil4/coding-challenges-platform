from fastapi import APIRouter
from models.challenge import Challenge
from services.firestore import db

router = APIRouter()

@router.post("/challenges")
def add_challenge(challenge: Challenge):
    challenge_data = {
        "title": challenge.title,
        "description": challenge.description,
        "difficulty": challenge.difficulty,
        "test_cases": challenge.test_cases,
    }
    doc_ref = db.collection("challenges").add(challenge_data)
    return {"message": "Challenge added successfully", "id": doc_ref[1].id}

@router.get("/challenges")
def get_challenges():
    challenges = db.collection("challenges").stream()
    return [doc.to_dict() for doc in challenges]
