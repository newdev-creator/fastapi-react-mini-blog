from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.Controllers import user_controller
from app.Schemas.user import User, UserCreate, UserUpdate
from app.Schemas.article import Article, ArticleCreate
from app.database import get_db

router = APIRouter()


@router.get("/users/", response_model=list[User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = user_controller.get_users(db, skip=skip, limit=limit)
    return users


@router.get("/users/{user_id}", response_model=User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = user_controller.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@router.post("/users/", response_model=User)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = user_controller.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return user_controller.create_user(db=db, user=user)


@router.post("/users/{user_id}/article/", response_model=Article)
def create_article_for_user(
    user_id: int, article: ArticleCreate, db: Session = Depends(get_db)
):
    return user_controller.create_user_article(db=db, article=article, user_id=user_id)


@router.put("/users/{user_id}", response_model=User)
def update_user(user_id: int, user: UserUpdate, db: Session = Depends(get_db)):
    db_user = user_controller.update_user(db, user_id=user_id, user=user)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    return db_user


@router.delete("/users/{user_id}", response_model=User)
def delete_user(user_id: int, db: Session = Depends(get_db)):
    db_user = user_controller.delete_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    return db_user