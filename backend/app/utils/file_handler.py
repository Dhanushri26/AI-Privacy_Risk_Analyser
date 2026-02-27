from pypdf import PdfReader
import io

import re

def extract_text(filename: str, content: bytes):

    if filename.endswith(".pdf"):
        pdf = PdfReader(io.BytesIO(content))
        text = ""
        for page in pdf.pages:
            page_text = page.extract_text() or ""
            text += page_text

        # 🔥 FIX SPACED CHARACTERS
        text = text.replace("\n", " ")
        text = " ".join(text.split())
        text = re.sub(r'\s+', ' ', text)
        text = re.sub(r'(\b\w\s)+\w\b', lambda m: m.group(0).replace(" ", ""), text)

        return text

    elif filename.endswith(".txt"):
        return content.decode("utf-8")

    else:
        return "Unsupported file format"