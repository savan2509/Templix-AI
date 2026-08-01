import fs from "fs";
import path from "path";
import sharp from "sharp";
import { STATIC_BLOG_POSTS } from "../src/lib/blog-data";

const PUBLIC_BLOG_DIR = path.join(process.cwd(), "public", "blog");

function escapeXml(unsafe: string | undefined | null): string {
  if (!unsafe) return "";
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function wrapText(text: string, maxCharsPerLine: number = 32): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    if ((currentLine + " " + word).trim().length <= maxCharsPerLine) {
      currentLine = (currentLine + " " + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines.slice(0, 3);
}

function getSlugHash(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Generate distinct layout SVGs based on Category & Topic
function renderBlogSvg(post: { slug: string; category: string; title: string; readTime?: number; description?: string }) {
  const hash = getSlugHash(post.slug);
  const cat = (post.category || "Guides").toLowerCase();

  const titleEsc = escapeXml(post.title);
  const catEsc = escapeXml(post.category || "Guide");
  const readTime = post.readTime || 7;

  const titleLines = wrapText(titleEsc, 32);

  // Dynamic visual parameters driven by slug hash for 100% uniqueness
  const orbX = 750 + (hash % 300);
  const orbY = 150 + (hash % 250);
  const orbRadius = 180 + (hash % 120);
  const angle = (hash % 360);

  // Layout 1: Resumes (Executive Paper & ATS Score Badge)
  if (cat.includes("resume")) {
    return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#3b0764" />
    </linearGradient>
    <radialGradient id="glow" cx="${orbX}px" cy="${orbY}px" r="${orbRadius}px" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#c084fc" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.03" />
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#bg)" />
  <rect width="1200" height="675" fill="url(#glow)" />

  <!-- Background Decorative Shapes -->
  <circle cx="950" cy="337" r="220" fill="none" stroke="#a855f7" stroke-opacity="0.15" stroke-width="2" stroke-dasharray="8 8" />
  <circle cx="950" cy="337" r="160" fill="none" stroke="#c084fc" stroke-opacity="0.25" stroke-width="1.5" />

  <!-- Right Side Illustration: ATS Resume Sheet -->
  <g transform="translate(780, 140)">
    <rect width="320" height="400" rx="20" fill="url(#paperGrad)" stroke="#a855f7" stroke-opacity="0.4" stroke-width="2" />
    <!-- Avatar circle -->
    <circle cx="60" cy="60" r="24" fill="#a855f7" fill-opacity="0.8" />
    <!-- Text wireframe lines -->
    <rect x="100" y="45" width="160" height="12" rx="6" fill="#ffffff" fill-opacity="0.8" />
    <rect x="100" y="65" width="100" height="8" rx="4" fill="#c084fc" fill-opacity="0.6" />

    <line x1="30" y1="110" x2="290" y2="110" stroke="#ffffff" stroke-opacity="0.1" stroke-width="2" />

    <rect x="30" y="130" width="220" height="10" rx="5" fill="#ffffff" fill-opacity="0.5" />
    <rect x="30" y="150" width="240" height="8" rx="4" fill="#ffffff" fill-opacity="0.3" />
    <rect x="30" y="168" width="180" height="8" rx="4" fill="#ffffff" fill-opacity="0.3" />

    <rect x="30" y="200" width="200" height="10" rx="5" fill="#ffffff" fill-opacity="0.5" />
    <rect x="30" y="220" width="250" height="8" rx="4" fill="#ffffff" fill-opacity="0.3" />
    <rect x="30" y="238" width="210" height="8" rx="4" fill="#ffffff" fill-opacity="0.3" />

    <!-- ATS Score Badge -->
    <g transform="translate(160, 270)">
      <rect width="130" height="100" rx="16" fill="#0f172a" fill-opacity="0.9" stroke="#a855f7" stroke-width="2" />
      <text x="65" y="40" font-family="sans-serif" font-size="28" font-weight="900" fill="#38bdf8" text-anchor="middle">98%</text>
      <text x="65" y="65" font-family="sans-serif" font-size="11" font-weight="800" fill="#c084fc" text-anchor="middle" letter-spacing="1">ATS MATCH</text>
      <text x="65" y="82" font-family="sans-serif" font-size="10" font-weight="600" fill="#94a3b8" text-anchor="middle">PASSED</text>
    </g>
  </g>

  <!-- Left Content -->
  <g transform="translate(80, 80)">
    <rect width="180" height="38" rx="19" fill="#a855f7" fill-opacity="0.2" stroke="#c084fc" stroke-opacity="0.5" stroke-width="1.5" />
    <text x="90" y="24" font-family="sans-serif" font-size="13" font-weight="800" fill="#c084fc" text-anchor="middle" letter-spacing="1.5">RESUME GUIDE</text>

    <g transform="translate(0, 100)">
      ${titleLines.map((line, idx) => `
        <text x="0" y="${idx * 56}" font-family="sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.5">${escapeXml(line)}</text>
      `).join("\n")}
    </g>

    <g transform="translate(0, 360)">
      <rect width="600" height="120" rx="16" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
      <text x="30" y="45" font-family="sans-serif" font-size="15" font-weight="700" fill="#c084fc">✓ 100% HRXML Compliant Single-Column Layouts</text>
      <text x="30" y="80" font-family="sans-serif" font-size="14" font-weight="600" fill="#cbd5e1">✓ AI Bullet Point Rewriter  •  ✓ Instant PDF &amp; Word Download</text>
    </g>

    <text x="0" y="520" font-family="sans-serif" font-size="13" font-weight="800" fill="#94a3b8" letter-spacing="1">TEMPLIX-AI.WHITESPARKSOFT.COM</text>
  </g>
</svg>`;
  }

  // Layout 2: Invoices (Financial Matrix & Tax Calculator Card)
  if (cat.includes("invoice")) {
    return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#022c22" />
    </linearGradient>
    <radialGradient id="glow" cx="${orbX}px" cy="${orbY}px" r="${orbRadius}px" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#022c22" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#bg)" />
  <rect width="1200" height="675" fill="url(#glow)" />

  <!-- Matrix Bars Illustration -->
  <g transform="translate(800, 160)">
    <rect width="320" height="380" rx="20" fill="#065f46" fill-opacity="0.4" stroke="#10b981" stroke-width="2" />

    <text x="30" y="50" font-family="sans-serif" font-size="18" font-weight="800" fill="#34d399">INVOICE BREAKDOWN</text>

    <!-- Bar Chart -->
    <rect x="30" y="100" width="40" height="180" rx="6" fill="#10b981" fill-opacity="0.3" />
    <rect x="30" y="160" width="40" height="120" rx="6" fill="#10b981" />

    <rect x="90" y="100" width="40" height="180" rx="6" fill="#10b981" fill-opacity="0.3" />
    <rect x="90" y="120" width="40" height="160" rx="6" fill="#34d399" />

    <rect x="150" y="100" width="40" height="180" rx="6" fill="#10b981" fill-opacity="0.3" />
    <rect x="150" y="200" width="40" height="80" rx="6" fill="#6ee7b7" />

    <!-- Summary Box -->
    <rect x="30" y="300" width="260" height="50" rx="10" fill="#022c22" stroke="#34d399" stroke-width="1.5" />
    <text x="45" y="332" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff">TOTAL: $8,640.00</text>
    <text x="210" y="332" font-family="sans-serif" font-size="11" font-weight="800" fill="#34d399">TAX 8%</text>
  </g>

  <!-- Left Content -->
  <g transform="translate(80, 80)">
    <rect width="190" height="38" rx="19" fill="#10b981" fill-opacity="0.2" stroke="#34d399" stroke-opacity="0.5" stroke-width="1.5" />
    <text x="95" y="24" font-family="sans-serif" font-size="13" font-weight="800" fill="#34d399" text-anchor="middle" letter-spacing="1.5">INVOICE GUIDE</text>

    <g transform="translate(0, 100)">
      ${titleLines.map((line, idx) => `
        <text x="0" y="${idx * 56}" font-family="sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.5">${escapeXml(line)}</text>
      `).join("\n")}
    </g>

    <g transform="translate(0, 360)">
      <rect width="620" height="120" rx="16" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
      <text x="30" y="45" font-family="sans-serif" font-size="15" font-weight="700" fill="#34d399">✓ Automatic Subtotal &amp; Tax Calculation Engine</text>
      <text x="30" y="80" font-family="sans-serif" font-size="14" font-weight="600" fill="#cbd5e1">✓ GST / VAT / Tax Splits  •  ✓ Instant PDF &amp; Word Export</text>
    </g>

    <text x="0" y="520" font-family="sans-serif" font-size="13" font-weight="800" fill="#94a3b8" letter-spacing="1">TEMPLIX-AI.WHITESPARKSOFT.COM</text>
  </g>
</svg>`;
  }

  // Layout 3: Contracts & Legal (Wax Seal & Security Shield)
  if (cat.includes("contract") || cat.includes("agreement")) {
    return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#451a03" />
      <stop offset="100%" stop-color="#1c1917" />
    </linearGradient>
    <radialGradient id="glow" cx="${orbX}px" cy="${orbY}px" r="${orbRadius}px" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#1c1917" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#bg)" />
  <rect width="1200" height="675" fill="url(#glow)" />

  <!-- Shield & Wax Seal Illustration -->
  <g transform="translate(800, 160)">
    <rect width="320" height="380" rx="20" fill="#78350f" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2" />

    <!-- Shield Icon -->
    <path d="M160 60 L240 100 V180 C240 240 160 280 160 280 C160 280 80 240 80 180 V100 Z" fill="#f59e0b" fill-opacity="0.2" stroke="#fbbf24" stroke-width="3" />

    <!-- Seal Stamp -->
    <circle cx="160" cy="160" r="45" fill="#b45309" stroke="#fef3c7" stroke-width="2" />
    <text x="160" y="165" font-family="serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">VERIFIED</text>

    <text x="160" y="320" font-family="sans-serif" font-size="14" font-weight="800" fill="#fbbf24" text-anchor="middle">LEGAL BLUEPRINT</text>
    <text x="160" y="345" font-family="sans-serif" font-size="11" font-weight="600" fill="#cbd5e1" text-anchor="middle">STANDARD NDA &amp; SOW</text>
  </g>

  <!-- Left Content -->
  <g transform="translate(80, 80)">
    <rect width="190" height="38" rx="19" fill="#f59e0b" fill-opacity="0.2" stroke="#fbbf24" stroke-opacity="0.5" stroke-width="1.5" />
    <text x="95" y="24" font-family="sans-serif" font-size="13" font-weight="800" fill="#fbbf24" text-anchor="middle" letter-spacing="1.5">CONTRACT GUIDE</text>

    <g transform="translate(0, 100)">
      ${titleLines.map((line, idx) => `
        <text x="0" y="${idx * 56}" font-family="serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.5">${escapeXml(line)}</text>
      `).join("\n")}
    </g>

    <g transform="translate(0, 360)">
      <rect width="620" height="120" rx="16" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
      <text x="30" y="45" font-family="sans-serif" font-size="15" font-weight="700" fill="#fbbf24">✓ Enforceable Legal Templates &amp; NDA Clauses</text>
      <text x="30" y="80" font-family="sans-serif" font-size="14" font-weight="600" fill="#cbd5e1">✓ Custom Scope of Work  •  ✓ Instant PDF &amp; Word Download</text>
    </g>

    <text x="0" y="520" font-family="sans-serif" font-size="13" font-weight="800" fill="#94a3b8" letter-spacing="1">TEMPLIX-AI.WHITESPARKSOFT.COM</text>
  </g>
</svg>`;
  }

  // Layout 4: Proposals & Business Plans (Ascending Rocket Growth)
  if (cat.includes("proposal")) {
    return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c4a6e" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <radialGradient id="glow" cx="${orbX}px" cy="${orbY}px" r="${orbRadius}px" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#bg)" />
  <rect width="1200" height="675" fill="url(#glow)" />

  <!-- Rocket Launch Illustration -->
  <g transform="translate(800, 160)">
    <rect width="320" height="380" rx="20" fill="#0369a1" fill-opacity="0.3" stroke="#06b6d4" stroke-width="2" />

    <!-- Wave line -->
    <path d="M30 300 Q90 200 160 220 T290 100" fill="none" stroke="#22d3ee" stroke-width="4" stroke-dasharray="6 6" />
    <circle cx="290" cy="100" r="16" fill="#06b6d4" stroke="#ffffff" stroke-width="3" />

    <text x="160" y="320" font-family="sans-serif" font-size="16" font-weight="900" fill="#22d3ee" text-anchor="middle">WINNING PROPOSAL</text>
    <text x="160" y="345" font-family="sans-serif" font-size="12" font-weight="600" fill="#cbd5e1" text-anchor="middle">CLIENT &amp; PITCH READY</text>
  </g>

  <!-- Left Content -->
  <g transform="translate(80, 80)">
    <rect width="200" height="38" rx="19" fill="#06b6d4" fill-opacity="0.2" stroke="#22d3ee" stroke-opacity="0.5" stroke-width="1.5" />
    <text x="100" y="24" font-family="sans-serif" font-size="13" font-weight="800" fill="#22d3ee" text-anchor="middle" letter-spacing="1.5">PROPOSAL GUIDE</text>

    <g transform="translate(0, 100)">
      ${titleLines.map((line, idx) => `
        <text x="0" y="${idx * 56}" font-family="sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.5">${escapeXml(line)}</text>
      `).join("\n")}
    </g>

    <g transform="translate(0, 360)">
      <rect width="620" height="120" rx="16" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
      <text x="30" y="45" font-family="sans-serif" font-size="15" font-weight="700" fill="#22d3ee">✓ High-Converting Business Proposals &amp; Pitches</text>
      <text x="30" y="80" font-family="sans-serif" font-size="14" font-weight="600" fill="#cbd5e1">✓ Scope, Pricing &amp; Timeline Templates  •  ✓ Free Download</text>
    </g>

    <text x="0" y="520" font-family="sans-serif" font-size="13" font-weight="800" fill="#94a3b8" letter-spacing="1">TEMPLIX-AI.WHITESPARKSOFT.COM</text>
  </g>
</svg>`;
  }

  // Layout 5: AI Tools (Neural Network & AI Spark Nodes)
  if (cat.includes("ai") || cat.includes("tool")) {
    return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <radialGradient id="glow" cx="${orbX}px" cy="${orbY}px" r="${orbRadius}px" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#090d16" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#bg)" />
  <rect width="1200" height="675" fill="url(#glow)" />

  <!-- Neural Nodes Illustration -->
  <g transform="translate(800, 160)">
    <rect width="320" height="380" rx="20" fill="#312e81" fill-opacity="0.3" stroke="#6366f1" stroke-width="2" />

    <!-- Connected nodes -->
    <line x1="80" y1="100" x2="160" y2="180" stroke="#818cf8" stroke-width="3" opacity="0.6" />
    <line x1="240" y1="100" x2="160" y2="180" stroke="#818cf8" stroke-width="3" opacity="0.6" />
    <line x1="160" y1="180" x2="160" y2="260" stroke="#818cf8" stroke-width="3" opacity="0.6" />

    <circle cx="80" cy="100" r="16" fill="#6366f1" />
    <circle cx="240" cy="100" r="16" fill="#a855f7" />
    <circle cx="160" cy="180" r="24" fill="#818cf8" stroke="#ffffff" stroke-width="3" />
    <circle cx="160" cy="260" r="16" fill="#38bdf8" />

    <text x="160" y="320" font-family="sans-serif" font-size="16" font-weight="900" fill="#818cf8" text-anchor="middle">AI GENERATOR</text>
    <text x="160" y="345" font-family="sans-serif" font-size="12" font-weight="600" fill="#cbd5e1" text-anchor="middle">LLM &amp; SMART FORMATTING</text>
  </g>

  <!-- Left Content -->
  <g transform="translate(80, 80)">
    <rect width="180" height="38" rx="19" fill="#6366f1" fill-opacity="0.2" stroke="#818cf8" stroke-opacity="0.5" stroke-width="1.5" />
    <text x="90" y="24" font-family="sans-serif" font-size="13" font-weight="800" fill="#818cf8" text-anchor="middle" letter-spacing="1.5">AI TOOL GUIDE</text>

    <g transform="translate(0, 100)">
      ${titleLines.map((line, idx) => `
        <text x="0" y="${idx * 56}" font-family="sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.5">${escapeXml(line)}</text>
      `).join("\n")}
    </g>

    <g transform="translate(0, 360)">
      <rect width="620" height="120" rx="16" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
      <text x="30" y="45" font-family="sans-serif" font-size="15" font-weight="700" fill="#818cf8">✓ Smart AI Writing &amp; Professional Formatting</text>
      <text x="30" y="80" font-family="sans-serif" font-size="14" font-weight="600" fill="#cbd5e1">✓ Instant Document Generation  •  ✓ 100% Free Access</text>
    </g>

    <text x="0" y="520" font-family="sans-serif" font-size="13" font-weight="800" fill="#94a3b8" letter-spacing="1">TEMPLIX-AI.WHITESPARKSOFT.COM</text>
  </g>
</svg>`;
  }

  // Layout 6: Generic Guides & Tutorials (Executive Notebook Blueprint)
  return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <radialGradient id="glow" cx="${orbX}px" cy="${orbY}px" r="${orbRadius}px" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#bg)" />
  <rect width="1200" height="675" fill="url(#glow)" />

  <g transform="translate(800, 160)">
    <rect width="320" height="380" rx="20" fill="#1e3a8a" fill-opacity="0.3" stroke="#3b82f6" stroke-width="2" />
    <circle cx="160" cy="150" r="50" fill="#3b82f6" fill-opacity="0.2" stroke="#60a5fa" stroke-width="3" />
    <text x="160" y="158" font-family="sans-serif" font-size="32" font-weight="900" fill="#ffffff" text-anchor="middle">📑</text>
    <text x="160" y="320" font-family="sans-serif" font-size="16" font-weight="900" fill="#60a5fa" text-anchor="middle">EXPERT GUIDE</text>
    <text x="160" y="345" font-family="sans-serif" font-size="12" font-weight="600" fill="#cbd5e1" text-anchor="middle">TEMPLIX AI KNOWLEDGE</text>
  </g>

  <!-- Left Content -->
  <g transform="translate(80, 80)">
    <rect width="160" height="38" rx="19" fill="#3b82f6" fill-opacity="0.2" stroke="#60a5fa" stroke-opacity="0.5" stroke-width="1.5" />
    <text x="80" y="24" font-family="sans-serif" font-size="13" font-weight="800" fill="#60a5fa" text-anchor="middle" letter-spacing="1.5">BLOG GUIDE</text>

    <g transform="translate(0, 100)">
      ${titleLines.map((line, idx) => `
        <text x="0" y="${idx * 56}" font-family="sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.5">${escapeXml(line)}</text>
      `).join("\n")}
    </g>

    <g transform="translate(0, 360)">
      <rect width="620" height="120" rx="16" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
      <text x="30" y="45" font-family="sans-serif" font-size="15" font-weight="700" fill="#60a5fa">✓ Complete Step-by-Step Writing &amp; Template Guide</text>
      <text x="30" y="80" font-family="sans-serif" font-size="14" font-weight="600" fill="#cbd5e1">✓ Practical Examples  •  ✓ Free Document Downloads</text>
    </g>

    <text x="0" y="520" font-family="sans-serif" font-size="13" font-weight="800" fill="#94a3b8" letter-spacing="1">TEMPLIX-AI.WHITESPARKSOFT.COM</text>
  </g>
</svg>`;
}

async function main() {
  console.log(`🚀 Generating 100% unique & diverse images for all ${STATIC_BLOG_POSTS.length} blog posts...`);
  if (!fs.existsSync(PUBLIC_BLOG_DIR)) {
    fs.mkdirSync(PUBLIC_BLOG_DIR, { recursive: true });
  }

  let count = 0;
  for (const post of STATIC_BLOG_POSTS) {
    const svgContent = renderBlogSvg(post);
    const outPath = path.join(PUBLIC_BLOG_DIR, `blog-${post.slug}.jpg`);
    await sharp(Buffer.from(svgContent)).jpeg({ quality: 90 }).toFile(outPath);
    count++;
    if (count % 20 === 0 || count === STATIC_BLOG_POSTS.length) {
      console.log(`✅ Generated ${count}/${STATIC_BLOG_POSTS.length} distinct blog images...`);
    }
  }

  console.log(`🎉 All ${STATIC_BLOG_POSTS.length} distinct blog images successfully generated!`);
}

main().catch((err) => {
  console.error("❌ Blog image generation failed:", err);
  process.exit(1);
});
