# -*- coding: utf-8 -*-
import json
import re

# Load new lessons from json
with open('scratch/new_lessons.json', 'r', encoding='utf-8') as f:
    new_lessons = json.load(f)

# Read existing data.js
with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Build the JS string for new lessons
new_lessons_js = ",\n" + ",\n".join([
    f"      {{\n"
    f"        id: {json.dumps(l['id'], ensure_ascii=False)},\n"
    f"        title: {json.dumps(l['title'], ensure_ascii=False)},\n"
    f"        description: {json.dumps(l['description'], ensure_ascii=False)},\n"
    f"        words: [\n" +
    ",\n".join([
        f"          {{ kanji: {json.dumps(w['kanji'], ensure_ascii=False)}, hiragana: {json.dumps(w['hiragana'], ensure_ascii=False)}, vietnamese: {json.dumps(w['vietnamese'], ensure_ascii=False)}" +
        (f", group: {w['group']}" if 'group' in w else "") + " }"
        for w in l['words']
    ]) +
    f"\n        ]\n      }}"
    for l in new_lessons
])

# Replace in data.js after n5_b6
# Find closing bracket of n5_b6
b6_end_pattern = r'(id:\s*"n5_b6"[\s\S]*?words:\s*\[[\s\S]*?\]\s*\n\s*\})'
match = re.search(b6_end_pattern, data_content)
if not match:
    print("Error: Could not find n5_b6 in data.js")
    exit(1)

insert_pos = match.end()
updated_content = data_content[:insert_pos] + new_lessons_js + data_content[insert_pos:]

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Successfully updated js/data.js with new lessons!")
