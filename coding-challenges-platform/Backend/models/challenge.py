from pydantic import BaseModel
from typing import List, Dict

class Challenge(BaseModel):
    title: str
    description: str
    difficulty: str
    test_cases: List[Dict]
