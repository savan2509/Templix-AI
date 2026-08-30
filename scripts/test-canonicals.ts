import fs from "fs";
import path from "path";

const checkRoutes = [
  { file: ".next/server/app/en.html", expected: "https://templix-ai.whitesparksoft.com/en" },
  { file: ".next/server/app/en/compare/templix-ai-vs-chatgpt.html", expected: "https://templix-ai.whitesparksoft.com/en/compare/templix-ai-vs-chatgpt" },
  { file: ".next/server/app/en/category/resume.html", expected: "https://templix-ai.whitesparksoft.com/en/category/resume" },
  { file: ".next/server/app/en/use-cases/resume-builder-for-freshers.html", expected: "https://templix-ai.whitesparksoft.com/en/use-cases/resume-builder-for-freshers" },
  { file: ".next/server/app/en/products/ai-resume-builder.html", expected: "https://templix-ai.whitesparksoft.com/en/products/ai-resume-builder" }
];

console.log("Checking canonical tags across static routes...");

let passCount = 0;
for (const item of checkRoutes) {
  const fullPath = path.join(process.cwd(), item.file);
  if (!fs.existsSync(fullPath)) {
    console.log(`[SKIP] File not found: ${item.file}`);
    continue;
  }
  const content = fs.readFileSync(fullPath, "utf-8");
  const hasCanonical = content.includes(`href="${item.expected}"`) && content.includes(`rel="canonical"`);
  if (hasCanonical) {
    console.log(`[PASS] ${item.expected}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${item.file} missing expected canonical: ${item.expected}`);
  }
}

console.log(`\nCanonical validation: ${passCount} / ${checkRoutes.length} passed.`);
