import re
import spacy

nlp = spacy.load("en_core_web_sm")

def detect_pii(text: str):

    results = []

    # -------- spaCy NER --------
    doc = nlp(text)

    for ent in doc.ents:
        if ent.label_ in ["PERSON", "GPE", "ORG", "DATE"]:
            results.append({
                "type": ent.label_,
                "value": ent.text,
                "start": ent.start_char,
                "end": ent.end_char
            })

    # -------- Regex Patterns --------

    email_pattern = r"[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+"
    phone_pattern = r"\b\d{10}\b"
    aadhaar_pattern = r"\b\d{12}\b"

    for match in re.finditer(email_pattern, text):
        results.append({
            "type": "EMAIL",
            "value": match.group(),
            "start": match.start(),
            "end": match.end()
        })

    for match in re.finditer(phone_pattern, text):
        results.append({
            "type": "PHONE",
            "value": match.group(),
            "start": match.start(),
            "end": match.end()
        })

    for match in re.finditer(aadhaar_pattern, text):
        results.append({
            "type": "AADHAAR_LIKE",
            "value": match.group(),
            "start": match.start(),
            "end": match.end()
        })

    return results