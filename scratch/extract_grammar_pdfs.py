import os
import fitz  # PyMuPDF
import pdfplumber

grammar_dir = r"d:\CODE\Random\Jp-Vocabulary\public\Grammar"
files = sorted([f for f in os.listdir(grammar_dir) if f.endswith(".pdf")])

print(f"Found {len(files)} files: {files}")

output_report = []

for f in files:
    path = os.path.join(grammar_dir, f)
    print(f"\n==================== FILE: {f} ====================")
    doc = fitz.open(path)
    print(f"Pages: {len(doc)}")
    full_text = []
    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text()
        full_text.append(f"--- Page {page_num+1} ---\n" + text)
    
    content = "\n".join(full_text)
    print(content[:500] if len(content) > 500 else content)
    output_report.append(f"\n==================== FILE: {f} (Pages: {len(doc)}) ====================\n" + content)

with open(r"d:\CODE\Random\Jp-Vocabulary\scratch\extracted_grammar_text.txt", "w", encoding="utf-8") as out:
    out.write("\n".join(output_report))

print("\nDone extracting text to scratch/extracted_grammar_text.txt")
