import json
import os

with open("eslint-report.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for file_info in data:
    filepath = file_info.get("filePath", "")
    # Make filepath relative to the repo root if possible
    rel_path = os.path.relpath(filepath, os.getcwd()) if filepath else ""
    messages = file_info.get("messages", [])
    if messages:
        print(f"FILE: {rel_path}")
        for msg in messages:
            line = msg.get("line")
            col = msg.get("column")
            rule = msg.get("ruleId")
            text = msg.get("message")
            print(f"  Line {line}:{col} - [{rule}] - {text}")
        print()
