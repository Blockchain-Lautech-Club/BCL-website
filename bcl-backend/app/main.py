from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
Base.metadata.create_all(bind=engine)
from app.routes import auth, events, blogs, uploads, members, cohorts
from datetime import datetime
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "https://blockchainlautech.club",
    "https://www.blockchainlautech.club",  # ← add this
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)
# Mount routes
app.include_router(auth.router, prefix="/auth")
app.include_router(events.router, prefix="/events")
app.include_router(blogs.router, prefix="/blogs")
app.include_router(uploads.router, prefix="/uploads")
app.include_router(members.router, prefix="/members")
app.include_router(cohorts.router, prefix="/cohorts", tags=["Cohorts"])

# In app/main.py
@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}
@app.get("/")
async def root():
    return {"message": "Welcome to the Blockchain Club API"}