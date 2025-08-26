LAUTECH Blockchain Club API
This is a FastAPI-based backend for the LAUTECH Blockchain Club, providing endpoints for managing events, blogs, file uploads, and admin authentication.
Folder Structure

app/: Core application code
main.py: FastAPI application entry point
config/: Configuration settings (e.g., environment variables, Supabase clients)
models/: Pydantic schemas for request/response validation
routes/: API endpoints for auth, events, blogs, and uploads
utils/: Utility functions for authentication and web scraping
middleware/: CORS middleware configuration


uploads/: Directory for storing uploaded files (events, blogs, avatars)
.env: Environment variables
requirements.txt: Project dependencies
run.py: Script to run the FastAPI app

Setup

Clone the repository:git clone <repository-url>
cd lautech-blockchain-club-api


Create a virtual environment and install dependencies:python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt


Set up environment variables in .env:
Update SUPABASE_URL, SUPABASE_KEY, SUPABASE_SERVICE_KEY, and JWT_SECRET_KEY with your Supabase and JWT credentials.


Run the application:python run.py



API Endpoints

Auth: /auth/login (POST)
Events: /events (GET, POST), /events/{event_id} (GET, PUT, DELETE)
Blogs: /blogs (GET, POST), /blogs/from-url (POST), /blogs/{blog_id} (GET, PUT, DELETE), /blogs/{blog_id}/like (POST)
Uploads: /upload/{category} (POST)
Health Check: /health (GET)

Dependencies
See requirements.txt for the full list of dependencies.
Notes

Ensure Supabase tables (events, blogs) are set up with appropriate schemas.
File uploads are stored locally in the uploads/ directory. Consider integrating with Supabase Storage for production.
Replace your-frontend-domain.com in CORS settings with your actual frontend domain.
