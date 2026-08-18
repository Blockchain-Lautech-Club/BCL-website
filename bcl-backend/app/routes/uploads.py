from fastapi import APIRouter, HTTPException, UploadFile, File, Depends
from app.utils.auth import get_admin_user
from app.config.settings import supabase_admin
import uuid
import aiofiles
import os
import base64

router = APIRouter()

# Create upload directories
os.makedirs("uploads/events", exist_ok=True)
os.makedirs("uploads/blogs", exist_ok=True)
os.makedirs("uploads/avatars", exist_ok=True)

@router.post("/{category}")
async def upload_file(category: str, file: UploadFile = File(...), admin: str = Depends(get_admin_user)):
    if category not in ["events", "blogs", "avatars"]:
        raise HTTPException(status_code=400, detail="Invalid upload category")
    
    allowed_types = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
    if file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Invalid file type. Only JPEG, JPG, PNG, and WebP are allowed.")
    
    file_extension = file.filename.split('.')[-1]
    unique_filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = f"uploads/{category}/{unique_filename}"
    
    content = await file.read()

    # Save to local disk
    async with aiofiles.open(file_path, 'wb') as f:
        await f.write(content)
    
    file_url = f"/static/{category}/{unique_filename}"

    # Try uploading to Supabase Storage for permanent cloud hosting on live site
    try:
        storage_bucket = "uploads"
        try:
            supabase_admin.storage.get_bucket(storage_bucket)
        except Exception:
            try:
                supabase_admin.storage.create_bucket(storage_bucket, options={"public": True})
            except Exception:
                pass
        
        storage_path = f"{category}/{unique_filename}"
        supabase_admin.storage.from_(storage_bucket).upload(
            path=storage_path,
            file=content,
            file_options={"content-type": file.content_type, "upsert": "true"}
        )
        public_url = supabase_admin.storage.from_(storage_bucket).get_public_url(storage_path)
        if public_url and len(public_url) <= 250:
            file_url = public_url
    except Exception as e:
        print(f"Supabase storage upload fallback to local static: {e}")
    
    return {"url": file_url, "filename": unique_filename}