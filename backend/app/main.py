from fastapi import FastAPI
from .database import engine
from .Models import article, tag, user
from .Routes import user_router as user_route, article_router as article_route, tag_router as tag_route

user.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(user_route.router, prefix="", tags=["users"])
app.include_router(article_route.router, prefix="", tags=["articles"])
app.include_router(tag_route.router, prefix="", tags=["tags"])
