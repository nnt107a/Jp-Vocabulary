import os
import pymupdf

grammar_dir = r"d:\CODE\Random\Jp-Vocabulary\public\Grammar"
img_out_dir = r"d:\CODE\Random\Jp-Vocabulary\scratch\grammar_images"
os.makedirs(img_out_dir, exist_ok=True)

files = sorted([f for f in os.listdir(grammar_dir) if f.endswith(".pdf")])

for f in files:
    path = os.path.join(grammar_dir, f)
    doc = pymupdf.open(path)
    print(f"File {f}: {len(doc)} pages")
    for i, page in enumerate(doc):
        pix = page.get_pixmap(dpi=200)
        img_name = f"{f.replace('.pdf', '')}_p{i+1}.png"
        img_path = os.path.join(img_out_dir, img_name)
        pix.save(img_path)
        print(f"Saved {img_path} ({pix.width}x{pix.height})")

print("All pages rendered to images.")
