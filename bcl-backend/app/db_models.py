# app/models.py
from sqlalchemy import Column, Integer, String, Boolean, Text, DateTime
from sqlalchemy.sql import func
from app.database import Base 
from datetime import datetime          


class CohortApplication(Base):
    __tablename__ = "cohort_applications"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    github_handle = Column(String, nullable=True)
    department = Column(String, nullable=False)
    level = Column(String, nullable=False)
    experience = Column(String, nullable=False)
    registering_for = Column(String, nullable=False)
    motivation = Column(Text, nullable=False)
    commitment = Column(Boolean, default=False)
    terms = Column(Boolean, default=False)
    applied_at = Column(DateTime(timezone=True), server_default=func.now())
    
class CohortSettings(Base):
    __tablename__ = "cohort_settings"

    id = Column(Integer, primary_key=True, default=1)
    applications_open = Column(Boolean, default=True, nullable=False)
    updated_at = Column(DateTime, default=datetime.now, onupdate=datetime.now)