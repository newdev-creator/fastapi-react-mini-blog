from sqlalchemy.orm import Session
from app.Models.article import Article
from app.Schemas.article import ArticleCreate


def get_article(db: Session, article_id: int):
    return db.query(Article).filter(Article.id == article_id).first()


def get_article_by_email(db: Session, email: str):
    return db.query(Article).filter(Article.email == email).first()


def get_articles(db: Session, skip: int = 0, limit: int = 10):
    return db.query(Article).offset(skip).limit(limit).all()


def create_article(db: Session, article: ArticleCreate):
    db_article = Article(**article.dict())
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article
