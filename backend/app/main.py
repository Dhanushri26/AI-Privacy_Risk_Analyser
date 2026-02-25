from fastapi import FastAPI
from app.routes import upload, risk, redact

app = FastAPI()

app.include_router(upload.router)
app.include_router(risk.router)
app.include_router(redact.router)

@app.get("/")
def root():
    return {"message": "AI Privacy Analyzer Backend Running"}