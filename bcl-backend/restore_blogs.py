import json
import os
from supabase import create_client

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

if not SUPABASE_URL or not SUPABASE_SERVICE_KEY:
    print("Error: SUPABASE_URL and SUPABASE_SERVICE_KEY must be set.")
    exit(1)

supabase_admin = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

def restore_blogs():
    with open("../bcl_blogs_backup.json", "r") as f:
        blogs = json.load(f)
    
    print(f"Found {len(blogs)} blogs to restore.")
    
    for blog in blogs:
        try:
            # Ensure views exists in the data
            if "views" not in blog:
                blog["views"] = 0
                
            result = supabase_admin.table("blogs").insert(blog).execute()
            print(f"Restored: {blog.get('title')}")
        except Exception as e:
            print(f"Failed to restore '{blog.get('title')}': {e}")
            
    print("Restore complete!")

if __name__ == "__main__":
    restore_blogs()
