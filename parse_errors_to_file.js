const fs = require('fs');
const path = require('path');

try {
  const data = JSON.parse(fs.readFileSync('eslint-report.json', 'utf8'));
  let out = '';
  for (const fileInfo of data) {
    const filePath = fileInfo.filePath;
    const relPath = path.relative(process.cwd(), filePath);
    const messages = fileInfo.messages || [];
    if (messages.length > 0) {
      out += `FILE: ${relPath}\n`;
      for (const msg of messages) {
        out += `  Line ${msg.line}:${msg.column} - [${msg.ruleId}] - ${msg.message}\n`;
      }
      out += '\n';
    }
  }
  fs.writeFileSync('eslint-warnings-list.txt', out, 'utf8');
  console.log('Successfully wrote eslint-warnings-list.txt');
} catch (err) {
  console.error(err);
}
