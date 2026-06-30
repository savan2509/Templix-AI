const fs = require('fs');

const file = 'd:\\\\Templix-AI\\\\src\\\\data\\\\templates-fallback.ts';
let content = fs.readFileSync(file, 'utf8');

const lineEnding = content.includes('\r\n') ? '\r\n' : '\n';
const lines = content.split(lineEnding);

let startIdx = -1;
let endIdx = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id: "resume-software-engineer"')) {
    // Find the opening brace { of this object
    for (let j = i; j >= 0; j--) {
      if (lines[j].trim() === '{') {
        startIdx = j;
        break;
      }
    }
  }
  if (lines[i].includes('id: "freelance-agreement"')) {
    // Find the opening brace { of this object
    for (let j = i; j >= 0; j--) {
      if (lines[j].trim() === '{') {
        endIdx = j;
        break;
      }
    }
  }
}

console.log('Detected Start Index:', startIdx, 'Line content:', lines[startIdx]);
console.log('Detected End Index:', endIdx, 'Line content:', lines[endIdx]);

if (startIdx !== -1 && endIdx !== -1) {
  const before = lines.slice(0, startIdx);
  const after = lines.slice(endIdx);
  
  // Read the payload from the text file
  const payload = fs.readFileSync('d:\\\\Templix-AI\\\\scratch\\\\resumes_payload.txt', 'utf8');
  
  const newFullContent = before.join(lineEnding) + lineEnding + payload + lineEnding + after.join(lineEnding);
  fs.writeFileSync(file, newFullContent, 'utf8');
  console.log('Replaced resumes fallback templates cleanly!');
} else {
  console.log('ERROR: Start or end token index not found.');
}
