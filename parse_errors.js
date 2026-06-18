const fs = require('fs');
const path = require('path');

try {
  const data = JSON.parse(fs.readFileSync('eslint-report.json', 'utf8'));
  for (const fileInfo of data) {
    const filePath = fileInfo.filePath;
    const relPath = path.relative(process.cwd(), filePath);
    const messages = fileInfo.messages || [];
    if (messages.length > 0) {
      console.log(`FILE: ${relPath}`);
      for (const msg of messages) {
        console.log(`  Line ${msg.line}:${msg.column} - [${msg.ruleId}] - ${msg.message}`);
      }
      console.log('');
    }
  }
} catch (err) {
  console.error(err);
}
