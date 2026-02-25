from pypdf import PdfReader
import io

def extract_text(filename: str, content: bytes):

    if filename.endswith(".pdf"):
        pdf = PdfReader(io.BytesIO(content))
        text = ""
        for page in pdf.pages:
            text += page.extract_text() or ""
        return text

    elif filename.endswith(".txt"):
        return content.decode("utf-8")

    else:
        return "Unsupported file format"