from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.database import engine, Base
Base.metadata.create_all(bind=engine)
from app.routes import auth, events, blogs, uploads, members, cohorts
from datetime import datetime
app = FastAPI()

app.mount("/static", StaticFiles(directory="uploads"), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
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