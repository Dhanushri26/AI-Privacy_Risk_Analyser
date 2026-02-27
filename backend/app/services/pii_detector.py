import re
import spacy

nlp = spacy.load("en_core_web_sm")

def enrich_finding(entity_type, value, start, end):

    severity_map = {
        "EMAIL": "HIGH",
        "PHONE": "HIGH",
        "AADHAAR_LIKE": "CRITICAL",
        "PERSON": "MEDIUM",
        "GPE": "MEDIUM",
        "ORG": "LOW",
        "DATE": "LOW"
    }

    description_map = {
        "EMAIL": "Plaintext email address detected.",
        "PHONE": "Unmasked phone number found.",
        "AADHAAR_LIKE": "Government ID-like number exposed.",
        "PERSON": "Identifiable individual name detected.",
        "GPE": "Location information detected.",
        "ORG": "Organization reference detected.",
        "DATE": "Date reference detected."
    }

    recommendation_map = {
        "EMAIL": "Remove or anonymize email address before sharing.",
        "PHONE": "Mask phone number except last 4 digits.",
        "AADHAAR_LIKE": "Redact or tokenize government ID numbers.",
        "PERSON": "Consider anonymizing personal names.",
        "GPE": "Remove precise address/location details.",
        "ORG": "Check if organization disclosure is necessary.",
        "DATE": "Avoid exposing sensitive date references."
    }

    return {
        "category": entity_type,
        "value": value,
        "start": start,
        "end": end,
        "severity": severity_map.get(entity_type, "LOW"),
        "description": description_map.get(entity_type, ""),
        "recommendation": recommendation_map.get(entity_type, "")
    }

def detect_pii(text: str):

    results = []

    # -------- spaCy NER --------
    doc = nlp(text)

    for ent in doc.ents:
        if ent.label_ in ["PERSON", "GPE", "ORG", "DATE"]:
            results.append(
                enrich_finding(
                    ent.label_,
                    ent.text,
                    ent.start_char,
                    ent.end_char
    )
)
    # -------- Regex Patterns --------

    email_pattern = r"[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+"
    phone_pattern = r"\b\d{10}\b"
    aadhaar_pattern = r"\b\d{12}\b"

    for match in re.finditer(email_pattern, text):
        results.append(
            results.append(
                enrich_finding(
                    "EMAIL",
                    match.group(),
                    match.start(),
                    match.end()
    )
)
)

    for match in re.finditer(phone_pattern, text):
        results.append(
            enrich_finding(
                "PHONE",
                match.group(),
                match.start(),
                match.end()
    )
)

    for match in re.finditer(aadhaar_pattern, text):
        results.append(
            enrich_finding(
                "AADHAAR_LIKE",
                match.group(),
                match.start(),
                match.end()
    )
)

    return results