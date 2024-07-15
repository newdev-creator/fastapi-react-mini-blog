from pydantic import BaseModel


class TagBase(BaseModel):
    title: str


class TagCreate(TagBase):
    pass


class TagUpdate(BaseModel):
    title: str = None


class Tag(TagBase):
    id: int

    class Config:
        orm_mode = True
