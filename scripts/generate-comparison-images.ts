import fs from "fs";
import path from "path";
import sharp from "sharp";
import { comparisonPosts } from "../src/lib/blog/posts-comparisons";

const PUBLIC_BLOG_DIR = path.join(process.cwd(), "public", "blog");

const COMPETITOR_COLORS: Record<string, { bg: string; accent: string }> = {
  chatgpt:           { bg: "#064e3b", accent: "#10b981" },
  canva:             { bg: "#0e7490", accent: "#06b6d4" },
  "canva-docs":       { bg: "#0e7490", accent: "#06b6d4" },
  notion:            { bg: "#1e1b4b", accent: "#818cf8" },
  "notion-ai":        { bg: "#1e1b4b", accent: "#818cf8" },
  zety:              { bg: "#3b0764", accent: "#c084fc" },
  enhancv:           { bg: "#4c1d95", accent: "#a855f7" },
  rezi:              { bg: "#1e293b", accent: "#38bdf8" },
  "resume-io":        { bg: "#1e3a8a", accent: "#60a5fa" },
  novoresume:        { bg: "#0284c7", accent: "#38bdf8" },
  "google-docs":      { bg: "#15803d", accent: "#4ade80" },
  "microsoft-word":   { bg: "#1e40af", accent: "#60a5fa" },
  "microsoft-365":    { bg: "#1e40af", accent: "#3b82f6" },
  "adobe-acrobat":   { bg: "#991b1b", accent: "#f87171" },
  "adobe-express":   { bg: "#991b1b", accent: "#fb7185" },
  pandadoc:          { bg: "#047857", accent: "#34d399" },
  docusign:          { bg: "#1d4ed8", accent: "#60a5fa" },
  smallpdf:          { bg: "#b91c1c", accent: "#fca5a5" },
  grammarly:         { bg: "#047857", accent: "#34d399" },
  jasper:            { bg: "#6d28d9", accent: "#c084fc" },
};

function escapeXml(unsafe: string | undefined | null): string {
  if (!unsafe) return "";
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getSlugHash(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function renderComparisonSvg(post: { slug: string; name?: string; category: string; title: string }) {
  const hash = getSlugHash(post.slug);
  const name = post.name || post.slug.replace("templix-ai-vs-", "").replace(/-/g, " ");
  const competitorSlugKey = post.slug.replace("templix-ai-vs-", "");

  const compBrand = COMPETITOR_COLORS[competitorSlugKey] || { bg: "#1e293b", accent: "#94a3b8" };

  const nameEsc = escapeXml(name);
  const catEsc = escapeXml(post.category || "AI Tools");

  // Dynamic visual variance
  const strokeDash = (hash % 10) + 4;
  const opacityVal = 0.15 + ((hash % 20) / 100);

  return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgLeft" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>

    <linearGradient id="bgRight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${compBrand.bg}" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>

    <linearGradient id="vsRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="${compBrand.accent}" />
    </linearGradient>
  </defs>

  <!-- Left Side Background -->
  <rect width="600" height="675" fill="url(#bgLeft)" />

  <!-- Right Side Background -->
  <rect x="600" width="600" height="675" fill="url(#bgRight)" />

  <!-- Diagonal Dividing Beam -->
  <path d="M560 0 L640 0 L600 675 L520 675 Z" fill="#3b82f6" fill-opacity="0.3" />
  <line x1="580" y1="0" x2="540" y2="675" stroke="#38bdf8" stroke-width="3" />

  <!-- Background Geometry -->
  <circle cx="250" cy="337" r="240" fill="none" stroke="#6366f1" stroke-opacity="${opacityVal}" stroke-width="2" stroke-dasharray="${strokeDash} ${strokeDash}" />
  <circle cx="950" cy="337" r="240" fill="none" stroke="${compBrand.accent}" stroke-opacity="${opacityVal}" stroke-width="2" stroke-dasharray="${strokeDash} ${strokeDash}" />

  <!-- Top Category Tag -->
  <g transform="translate(60, 60)">
    <rect width="200" height="38" rx="19" fill="#3b82f6" fill-opacity="0.2" stroke="#60a5fa" stroke-opacity="0.5" stroke-width="1.5" />
    <text x="100" y="24" font-family="sans-serif" font-size="13" font-weight="800" fill="#60a5fa" text-anchor="middle" letter-spacing="1.5">${catEsc.toUpperCase()} DUEL</text>
  </g>

  <g transform="translate(940, 60)">
    <rect width="200" height="38" rx="19" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1" />
    <text x="100" y="24" font-family="sans-serif" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">2026 COMPARISON</text>
  </g>

  <!-- Left Product Card: Templix AI -->
  <g transform="translate(80, 140)">
    <rect width="420" height="420" rx="24" fill="#ffffff" fill-opacity="0.06" stroke="#3b82f6" stroke-width="2" />

    <!-- Brand Header -->
    <rect x="30" y="30" width="160" height="40" rx="12" fill="#3b82f6" />
    <text x="110" y="56" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">Templix AI</text>

    <!-- Winner Crown Badge -->
    <g transform="translate(240, 30)">
      <rect width="150" height="32" rx="16" fill="#10b981" fill-opacity="0.3" stroke="#34d399" stroke-width="1.5" />
      <text x="75" y="21" font-family="sans-serif" font-size="11" font-weight="800" fill="#34d399" text-anchor="middle">★ 100% FREE WINNER</text>
    </g>

    <!-- Checklist -->
    <g transform="translate(30, 110)">
      <text x="0" y="30" font-family="sans-serif" font-size="16" font-weight="800" fill="#38bdf8">✓ Zero Subscription / 100% Free</text>
      <text x="0" y="80" font-family="sans-serif" font-size="16" font-weight="800" fill="#38bdf8">✓ Automatic Subtotal &amp; Tax Engine</text>
      <text x="0" y="130" font-family="sans-serif" font-size="16" font-weight="800" fill="#38bdf8">✓ Single-Column ATS HRXML Resumes</text>
      <text x="0" y="180" font-family="sans-serif" font-size="16" font-weight="800" fill="#38bdf8">✓ Native PDF &amp; Word Document Export</text>
      <text x="0" y="230" font-family="sans-serif" font-size="16" font-weight="800" fill="#38bdf8">✓ Zero Account Registration Needed</text>
    </g>
  </g>

  <!-- Center VS Emblem -->
  <g transform="translate(600, 337)">
    <circle cx="0" cy="0" r="50" fill="#0f172a" stroke="url(#vsRingGrad)" stroke-width="4" />
    <text x="0" y="10" font-family="sans-serif" font-size="28" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="-1">VS</text>
  </g>

  <!-- Right Product Card: Competitor -->
  <g transform="translate(700, 140)">
    <rect width="420" height="420" rx="24" fill="#ffffff" fill-opacity="0.04" stroke="${compBrand.accent}" stroke-opacity="0.4" stroke-width="1.5" />

    <!-- Brand Header -->
    <rect x="30" y="30" width="180" height="40" rx="12" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1" />
    <text x="120" y="56" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">${nameEsc}</text>

    <!-- Checklist -->
    <g transform="translate(30, 110)">
      <text x="0" y="30" font-family="sans-serif" font-size="16" font-weight="600" fill="#cbd5e1">→ General Workspace / Software</text>
      <text x="0" y="80" font-family="sans-serif" font-size="16" font-weight="600" fill="#cbd5e1">→ Monthly Paid Subscription Fee</text>
      <text x="0" y="130" font-family="sans-serif" font-size="16" font-weight="600" fill="#cbd5e1">→ Manual Document Formatting</text>
      <text x="0" y="180" font-family="sans-serif" font-size="16" font-weight="600" fill="#cbd5e1">→ Account Login Required</text>
      <text x="0" y="230" font-family="sans-serif" font-size="16" font-weight="600" fill="#cbd5e1">→ Variable PDF Margin Output</text>
    </g>
  </g>

  <!-- Footer Brand Bar -->
  <g transform="translate(600, 620)">
    <text x="0" y="0" font-family="sans-serif" font-size="13" font-weight="800" fill="#94a3b8" text-anchor="middle" letter-spacing="1">TEMPLIX-AI.WHITESPARKSOFT.COM</text>
  </g>
</svg>`;
}

async function main() {
  console.log(`🚀 Generating 100% unique & distinct comparison images for all ${comparisonPosts.length} comparison posts...`);
  if (!fs.existsSync(PUBLIC_BLOG_DIR)) {
    fs.mkdirSync(PUBLIC_BLOG_DIR, { recursive: true });
  }

  let count = 0;
  for (const post of comparisonPosts) {
    const svgContent = renderComparisonSvg(post);
    const outPath = path.join(PUBLIC_BLOG_DIR, `blog-${post.slug}.jpg`);
    await sharp(Buffer.from(svgContent)).jpeg({ quality: 90 }).toFile(outPath);
    count++;
    if (count % 10 === 0 || count === comparisonPosts.length) {
      console.log(`✅ Generated ${count}/${comparisonPosts.length} distinct comparison images...`);
    }
  }

  console.log(`🎉 All ${comparisonPosts.length} distinct comparison images successfully generated!`);
}

main().catch((err) => {
  console.error("❌ Comparison image generation failed:", err);
  process.exit(1);
});
