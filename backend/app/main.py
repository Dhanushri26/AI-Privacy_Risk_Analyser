from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import upload, risk, redact

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload.router)
app.include_router(risk.router)
app.include_router(redact.router)

@app.get("/")
def root():
    return {"message": "AI Privacy Analyzer Backend Running"}