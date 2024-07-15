from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.Controllers import tag_controller
from app.Schemas.tag import Tag, TagCreate, TagUpdate
from app.database import get_db

router = APIRouter()


@router.post("/tags/", response_model=Tag)
def create_tag_view(tag_create: TagCreate, db: Session = Depends(get_db)):
    return tag_controller.create_tag(db=db, tag=tag_create)


@router.get("/tags/", response_model=list[Tag])
def read_tags(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return tag_controller.get_tags(db, skip=skip, limit=limit)


@router.get("/tags/{tag_id}", response_model=Tag)
def read_tag(tag_id: int, db: Session = Depends(get_db)):
    db_tag = tag_controller.get_tag(db, tag_id=tag_id)
    if db_tag is None:
        raise HTTPException(status_code=404, detail="Tag not found")
    return db_tag


@router.put("/tags/{tag_id}", response_model=Tag)
def update_tag(tag_id: int, tag: TagUpdate, db: Session = Depends(get_db)):
    db_tag = tag_controller.update_tag(db, tag_id=tag_id, tag=tag)
    if db_tag is None:
        raise HTTPException(status_code=404, detail="Tag not found")
    
    return db_tag


@router.delete("/tags/{tag_id}", response_model=Tag)
def delete_tag(tag_id: int, db: Session = Depends(get_db)):
    db_tag = tag_controller.delete_tag(db, tag_id=tag_id)
    if db_tag is None:
        raise HTTPException(status_code=404, detail="Tag not found")
    
    return db_tag