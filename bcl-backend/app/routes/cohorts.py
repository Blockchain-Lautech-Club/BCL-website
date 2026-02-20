from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
# 1. Fixed Model Import (Pointing to the actual file)
from app.db_models import CohortApplication 
# 2. Fixed Schema Import (Aliased as 'schemas' to fix your NameError)
from app.models import schemas as schemas       
from datetime import datetime

router = APIRouter()

@router.post("/applications", response_model=schemas.CohortResponse)
async def register_cohort_member(
    payload: schemas.CohortCreate, 
    db: Session = Depends(get_db)
):
    # 3. Use the class name directly since we imported it specifically
    existing_app = db.query(CohortApplication).filter(
        CohortApplication.email == payload.email
    ).first()
    
    if existing_app:
        raise HTTPException(
            status_code=400, 
            detail="You have already submitted an application for this cohort."
        )

    # 4. Map Pydantic data to SQLAlchemy Model
    new_application = CohortApplication(
        first_name=payload.first_name,
        last_name=payload.last_name,
        email=payload.email,
        github_handle=payload.github_handle,
        department=payload.department,
        level=payload.level,
        experience=payload.experience,
        registering_for=payload.registering_for,
        motivation=payload.motivation,
        commitment=payload.commitment,
        applied_at=datetime.now()
    )
    try:
        db.add(new_application)
        db.commit()
        db.refresh(new_application)
        return new_application
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Database error occurred.")