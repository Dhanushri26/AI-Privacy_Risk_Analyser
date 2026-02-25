from fastapi import APIRouter
from pydantic import BaseModel
from app.services.pii_detector import detect_pii
from app.services.risk_scorer import calculate_risk

router = APIRouter()

class TextInput(BaseModel):
    text: str

@router.post("/analyze")
def analyze_text(data: TextInput):

    findings = detect_pii(data.text)
    risk = calculate_risk(findings)

    return {
        "total_flags": len(findings),
        "risk_score": risk["risk_score"],
        "risk_level": risk["risk_level"],
        "findings": findings
    }