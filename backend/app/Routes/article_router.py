from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.Controllers import article_controller
from app.Schemas.article import Article, ArticleCreate, ArticleUpdate
from app.database import get_db

router = APIRouter()


@router.get("/articles/", response_model=list[Article])
def read_articles(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return article_controller.get_articles(db, skip=skip, limit=limit)


@router.get("/articles/{article_id}", response_model=Article)
def read_article(article_id: int, db: Session = Depends(get_db)):
    db_article = article_controller.get_article(db, article_id=article_id)
    if db_article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return db_article


@router.post("/articles/", response_model=Article)
def create_article_view(article_create: ArticleCreate, db: Session = Depends(get_db)):
    return article_controller.create_article(db=db, article=article_create)


@router.put("/articles/{article_id}", response_model=Article)
def update_article(article_id: int, article: ArticleUpdate, db: Session = Depends(get_db)):
    db_article = article_controller.update_article(db, article_id=article_id, article=article)
    if db_article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    
    return db_article


@router.delete("/articles/{article_id}", response_model=Article)
def delete_article(article_id: int, db: Session = Depends(get_db)):
    db_article = article_controller.delete_article(db, article_id=article_id)
    if db_article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    
    return db_article