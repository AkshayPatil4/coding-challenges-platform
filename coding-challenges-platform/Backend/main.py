from fastapi import FastAPI
from routers import users, challenges, submissions

app = FastAPI()

# Include routers
app.include_router(users.router, prefix="/api", tags=["Users"])
app.include_router(challenges.router, prefix="/api", tags=["Challenges"])
app.include_router(submissions.router, prefix="/api", tags=["Submissions"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Coding Challenges Platform API!"}
