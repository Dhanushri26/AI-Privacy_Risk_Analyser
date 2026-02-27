def calculate_risk(findings):

    weights = {
        "EMAIL": 10,
        "PHONE": 15,
        "PERSON": 5,
        "GPE": 10,
        "ORG": 5,
        "DATE": 5,
        "AADHAAR_LIKE": 40
    }

    score = 0

    for item in findings:
        score += weights.get(item["category"], 0)
    if score > 100:
        score = 100

    # Risk level classification
    if score <= 20:
        level = "LOW"
    elif score <= 50:
        level = "MEDIUM"
    elif score <= 80:
        level = "HIGH"
    else:
        level = "CRITICAL"

    return {
        "risk_score": score,
        "risk_level": level
    }