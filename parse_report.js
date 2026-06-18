const fs = require('fs');

const data = JSON.parse(fs.readFileSync('eslint-report.json', 'utf8'));

const rules = {};
let total = 0;
for (const file of data) {
  for (const msg of file.messages || []) {
    const rule = msg.ruleId;
    if (rule) {
      rules[rule] = (rules[rule] || 0) + 1;
      total++;
    }
  }
}

console.log(`Total warnings/errors: ${total}`);
console.log("Warning/Error counts by rule:");
for (const [rule, count] of Object.entries(rules).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${rule}: ${count}`);
}
