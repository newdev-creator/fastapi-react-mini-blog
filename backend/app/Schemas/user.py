from pydantic import BaseModel
from .article import Article


class UserBase(BaseModel):
  email: str


class UserCreate(UserBase):
    password: str


class UserUpdate(BaseModel):
    email: str = None
    password: str = None
    is_active: bool = None
    

class User(UserBase):
    id: int
    is_active: bool
    articles: list[Article] = []

    class Config:
        orm_mode = True
