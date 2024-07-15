from sqlalchemy.orm import Session
from app.Models.tag import Tag
from app.Schemas.tag import TagCreate, TagUpdate


def get_tag(db: Session, tag_id: int):
    return db.query(Tag).filter(Tag.id == tag_id).first()


def get_tags(db: Session, skip: int = 0, limit: int = 10):
    return db.query(Tag).offset(skip).limit(limit).all()


def create_tag(db: Session, tag: TagCreate):
    db_tag = Tag(**tag.model_dump())
    db.add(db_tag)
    db.commit()
    db.refresh(db_tag)
    return db_tag


def update_tag(db: Session, tag_id: int, tag: TagUpdate):
    db_tag = db.query(Tag).filter(Tag.id == tag_id).first()
    if db_tag:
        for key, value in tag.model_dump(exclude_unset=True).items():
            setattr(db_tag, key, value)
        db.commit()
        db.refresh(db_tag)
        return db_tag
    
    return None


def delete_tag(db: Session, tag_id: int):
    db_tag = db.query(Tag).filter(Tag.id == tag_id).first()
    if db_tag:
        # for article in db_tag.articles:
        #     db.delete(article)
        db.delete(db_tag)
        db.commit()
        return db_tag
    
    return None