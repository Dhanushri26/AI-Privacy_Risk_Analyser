def mask_value(value, pii_type):

    if pii_type == "PHONE":
        return "XXXXXX" + value[-4:]

    if pii_type == "AADHAAR_LIKE":
        return "XXXXXXXX" + value[-4:]

    if pii_type == "EMAIL":
        return "hidden@email.com"

    if pii_type in ["PERSON", "GPE", "ORG"]:
        return "[REDACTED]"

    return "[REDACTED]"


def redact_text(text, findings):

    redacted_text = text

    # Sort in reverse order so indexes don't shift
    findings_sorted = sorted(findings, key=lambda x: x["start"], reverse=True)

    for item in findings_sorted:
        start = item["start"]
        end = item["end"]
        replacement = mask_value(item["value"], item["type"])

        redacted_text = (
            redacted_text[:start] +
            replacement +
            redacted_text[end:]
        )

    return redacted_text