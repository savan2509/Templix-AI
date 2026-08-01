import { comparisonPosts } from "../src/lib/blog/posts-comparisons";

const requestedSlugs = [
  "templix-ai-vs-notion",
  "templix-ai-vs-clickup",
  "templix-ai-vs-monday-com",
  "templix-ai-vs-asana",
  "templix-ai-vs-trello",
  "templix-ai-vs-airtable",
  "templix-ai-vs-slack-canvas",
  "templix-ai-vs-confluence",
  "templix-ai-vs-zoho-workplace",
  "templix-ai-vs-dropbox-sign",
  "templix-ai-vs-adobe-sign",
  "templix-ai-vs-xodo-pdf",
  "templix-ai-vs-updf",
  "templix-ai-vs-pdfgear",
  "templix-ai-vs-google-workspace",
  "templix-ai-vs-zoho-docs",
  "templix-ai-vs-miro",
  "templix-ai-vs-canva-docs",
  "templix-ai-vs-microsoft-word-online",
  "templix-ai-vs-google-docs",
];

console.log("Checking 20 requested comparison slugs...");
const existingSlugs = new Set(comparisonPosts.map((p) => p.slug));

requestedSlugs.forEach((slug) => {
  if (existingSlugs.has(slug)) {
    console.log(`✅ PRESENT: ${slug}`);
  } else {
    console.log(`❌ MISSING: ${slug}`);
  }
});
