import json

with open("eslint-report.json", "r", encoding="utf-8") as f:
    data = json.load(f)

rules = {}
for file in data:
    for msg in file.get("messages", []):
        rule = msg.get("ruleId")
        if rule:
            rules[rule] = rules.get(rule, 0) + 1

print("Warning/Error counts by rule:")
for rule, count in sorted(rules.items(), key=lambda x: x[1], reverse=True):
    print(f"  {rule}: {count}")
