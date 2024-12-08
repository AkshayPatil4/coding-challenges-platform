from fastapi import APIRouter
from models.submission import Submission
from services.firestore import db
from datetime import datetime

router = APIRouter()

@router.post("/submissions")
def add_submission(submission: Submission):
    submission_data = {
        "user_id": submission.user_id,
        "challenge_id": submission.challenge_id,
        "code": submission.code,
        "status": submission.status,
        "submitted_at": datetime.now(),
    }
    doc_ref = db.collection("submissions").add(submission_data)
    return {"message": "Submission added successfully", "id": doc_ref[1].id}

@router.get("/submissions/{user_id}")
def get_user_submissions(user_id: str):
    submissions = db.collection("submissions").where("user_id", "==", user_id).stream()
    return [doc.to_dict() for doc in submissions]
