from fastapi import APIRouter
from pydantic import BaseModel
from app.services.pii_detector import detect_pii
from app.services.redactor import redact_text

router = APIRouter()

class TextInput(BaseModel):
    text: str

@router.post("/redact")
def redact(data: TextInput):

    findings = detect_pii(data.text)
    redacted = redact_text(data.text, findings)

    return {
        "original_length": len(data.text),
        "redacted_text": redacted
    }