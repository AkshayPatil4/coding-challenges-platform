from pydantic import BaseModel

class Submission(BaseModel):
    user_id: str
    challenge_id: str
    code: str
    status: str
