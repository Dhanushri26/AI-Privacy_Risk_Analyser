from fastapi import APIRouter, UploadFile, File
from app.utils.file_handler import extract_text
from app.services.pii_detector import detect_pii
from app.services.risk_scorer import calculate_risk

router = APIRouter()

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):

    content = await file.read()

    text = extract_text(file.filename, content)

    findings = detect_pii(text)
    risk = calculate_risk(findings)

    print("File received:", file.filename)
    print("Extracted text length:", len(text))
    print("Total findings:", len(findings))
    print("Risk score:", risk["risk_score"])

    return {
        "filename": file.filename,
        "text_preview": text[:500],
        "total_flags": len(findings),
        "risk_score": risk["risk_score"],
        "risk_level": risk["risk_level"],
        "findings": findings
    }


