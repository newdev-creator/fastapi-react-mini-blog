from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine
from .Models import article, tag, user
from .Routes import user_router as user_route, article_router as article_route, tag_router as tag_route

user.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Configurer CORS
origins = [
   "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_route.router, prefix="", tags=["users"])
app.include_router(article_route.router, prefix="", tags=["articles"])
app.include_router(tag_route.router, prefix="", tags=["tags"])
