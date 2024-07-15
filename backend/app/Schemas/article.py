from pydantic import BaseModel
from .tag import Tag


class ArticleBase(BaseModel):
    title: str
    description: str


class ArticleCreate(ArticleBase):
    owner_id: int
    tags: list[Tag] = []


class ArticleUpdate(BaseModel):
    title: str = None
    description: str = None
    owner_id: int = None
    tags: list[Tag] = []


class Article(ArticleBase):
    id: int
    owner_id: int
    tags: list[Tag] = []

    class Config:
        orm_mode = True
