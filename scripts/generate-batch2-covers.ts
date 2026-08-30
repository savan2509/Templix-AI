import fs from "fs";
import path from "path";
import sharp from "sharp";

interface PostCoverSpec {
  filename: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  theme: {
    bg1: string;
    bg2: string;
    accent: string;
    accentGlow: string;
    badgeBg: string;
    badgeText: string;
    iconSvg: string;
  };
}

const covers: PostCoverSpec[] = [
  // 1. Invoice Template Excel
  {
    filename: "blog-invoice-template-excel.jpg",
    title: "Invoice Template Excel",
    subtitle: "Free Download + Auto-Calculating Formulas (VAT, GST & Totals)",
    category: "INVOICES & SPREADSHEETS",
    badge: "EXCEL FORMULAS",
    theme: {
      bg1: "#064e3b",
      bg2: "#022c22",
      accent: "#10b981",
      accentGlow: "rgba(16, 185, 129, 0.35)",
      badgeBg: "#059669",
      badgeText: "#ffffff",
      iconSvg: `<rect x="60" y="60" width="80" height="80" rx="12" fill="#10b981" opacity="0.2"/><path d="M75 80h50M75 100h50M75 120h30" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>`
    }
  },
  // 2. Invoice Template for Virtual Assistants
  {
    filename: "blog-invoice-template-for-virtual-assistants.jpg",
    title: "Virtual Assistant Invoicing",
    subtitle: "Hourly Tracking vs. Fixed Monthly Retainer Billing Guide",
    category: "FREELANCE & VA BILLING",
    badge: "RETAINER GUIDE",
    theme: {
      bg1: "#0f172a",
      bg2: "#0369a1",
      accent: "#38bdf8",
      accentGlow: "rgba(56, 189, 248, 0.35)",
      badgeBg: "#0284c7",
      badgeText: "#ffffff",
      iconSvg: `<circle cx="100" cy="100" r="40" fill="#38bdf8" opacity="0.2"/><path d="M100 80v20l15 15" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>`
    }
  },
  // 3. Commercial Invoice Template
  {
    filename: "blog-commercial-invoice-template.jpg",
    title: "Commercial Invoice Explained",
    subtitle: "Customs Declarations, HS Tariff Codes & Incoterms 2026",
    category: "GLOBAL TRADE & SHIPPING",
    badge: "CUSTOMS COMPLIANT",
    theme: {
      bg1: "#1e1b4b",
      bg2: "#312e81",
      accent: "#818cf8",
      accentGlow: "rgba(129, 140, 248, 0.35)",
      badgeBg: "#4f46e5",
      badgeText: "#ffffff",
      iconSvg: `<rect x="65" y="70" width="70" height="60" rx="8" fill="#818cf8" opacity="0.2"/><path d="M65 90h70M90 70v60" stroke="#818cf8" stroke-width="3" stroke-linecap="round"/>`
    }
  },
  // 4. How to Add Sales Tax to Invoice
  {
    filename: "blog-how-to-add-sales-tax-to-invoice.jpg",
    title: "Sales Tax on Invoices",
    subtitle: "Single-State vs. Multi-State Nexus & Tax Calculation Breakdown",
    category: "TAX COMPLIANCE & ACCOUNTING",
    badge: "TAX CALCULATIONS",
    theme: {
      bg1: "#18181b",
      bg2: "#27272a",
      accent: "#eab308",
      accentGlow: "rgba(234, 179, 8, 0.35)",
      badgeBg: "#ca8a04",
      badgeText: "#ffffff",
      iconSvg: `<circle cx="100" cy="100" r="38" fill="#eab308" opacity="0.2"/><path d="M90 90l20 20M92 90h16M92 110h16" stroke="#eab308" stroke-width="4" stroke-linecap="round"/>`
    }
  },
  // 5. Freelance Invoice Checklist
  {
    filename: "blog-freelance-invoice-template.jpg",
    title: "Freelance Invoice Checklist",
    subtitle: "8 Essential Details Clients Need to Release Payment Fast",
    category: "FREELANCE CASH FLOW",
    badge: "GET PAID FASTER",
    theme: {
      bg1: "#0f766e",
      bg2: "#134e4a",
      accent: "#2dd4bf",
      accentGlow: "rgba(45, 212, 191, 0.35)",
      badgeBg: "#0d9488",
      badgeText: "#ffffff",
      iconSvg: `<rect x="65" y="65" width="70" height="70" rx="14" fill="#2dd4bf" opacity="0.2"/><path d="M80 100l15 15 25-25" stroke="#2dd4bf" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`
    }
  },

  // 6. Federal Resume Format
  {
    filename: "blog-federal-resume-format.jpg",
    title: "Federal Resume Format",
    subtitle: "USAJOBS Guide: GS Pay Scale, KSA Metrics & 3-5 Page Hierarchy",
    category: "GOVERNMENT CAREERS",
    badge: "USAJOBS COMPLIANT",
    theme: {
      bg1: "#1e293b",
      bg2: "#0f172a",
      accent: "#38bdf8",
      accentGlow: "rgba(56, 189, 248, 0.35)",
      badgeBg: "#0284c7",
      badgeText: "#ffffff",
      iconSvg: `<path d="M100 65l25 15v30l-25 15-25-15v-30z" fill="#38bdf8" opacity="0.2" stroke="#38bdf8" stroke-width="3"/>`
    }
  },
  // 7. Career Change Resume
  {
    filename: "blog-career-change-resume.jpg",
    title: "Career Change Resume",
    subtitle: "Lead with Transferable Skills & Hybrid Resume Architecture",
    category: "CAREER PIVOT & ATS",
    badge: "HYBRID FORMAT",
    theme: {
      bg1: "#4a044e",
      bg2: "#701a75",
      accent: "#f472b6",
      accentGlow: "rgba(244, 114, 182, 0.35)",
      badgeBg: "#c026d3",
      badgeText: "#ffffff",
      iconSvg: `<circle cx="85" cy="100" r="25" fill="#f472b6" opacity="0.2"/><circle cx="115" cy="100" r="25" fill="#f472b6" opacity="0.2"/>`
    }
  },
  // 8. First Job Resume (No Experience)
  {
    filename: "blog-resume-for-first-job-no-experience.jpg",
    title: "First Job Resume Guide",
    subtitle: "Build a Standout Entry-Level Resume with Zero Work History",
    category: "ENTRY LEVEL & STUDENTS",
    badge: "NO EXPERIENCE",
    theme: {
      bg1: "#065f46",
      bg2: "#047857",
      accent: "#6ee7b7",
      accentGlow: "rgba(110, 231, 183, 0.35)",
      badgeBg: "#059669",
      badgeText: "#ffffff",
      iconSvg: `<path d="M70 120v-30a10 10 0 0110-10h40a10 10 0 0110 10v30" fill="#6ee7b7" opacity="0.2" stroke="#6ee7b7" stroke-width="4"/>`
    }
  },
  // 9. Healthcare Resume ATS
  {
    filename: "blog-healthcare-resume-ats.jpg",
    title: "Healthcare ATS Keywords",
    subtitle: "Epic, Cerner, Clinical Certifications & HIPAA Scoring Terms",
    category: "HEALTHCARE & NURSING",
    badge: "CLINICAL ATS",
    theme: {
      bg1: "#0c4a6e",
      bg2: "#075985",
      accent: "#38bdf8",
      accentGlow: "rgba(56, 189, 248, 0.35)",
      badgeBg: "#0284c7",
      badgeText: "#ffffff",
      iconSvg: `<path d="M90 70h20v60H90zM70 90h60v20H70z" fill="#38bdf8" opacity="0.3" stroke="#38bdf8" stroke-width="2"/>`
    }
  },
  // 10. Resume vs CV Difference
  {
    filename: "blog-resume-vs-cv-difference.jpg",
    title: "Resume vs. CV: Real Differences",
    subtitle: "Country-by-Country Breakdown: US, UK, Canada, Australia & EU",
    category: "GLOBAL CAREER GUIDE",
    badge: "GLOBAL COMPARISON",
    theme: {
      bg1: "#311042",
      bg2: "#1e1b4b",
      accent: "#a78bfa",
      accentGlow: "rgba(167, 139, 250, 0.35)",
      badgeBg: "#7c3aed",
      badgeText: "#ffffff",
      iconSvg: `<rect x="65" y="70" width="30" height="60" rx="4" fill="#a78bfa" opacity="0.2" stroke="#a78bfa" stroke-width="3"/><rect x="105" y="70" width="30" height="60" rx="4" fill="#a78bfa" opacity="0.4" stroke="#a78bfa" stroke-width="3"/>`
    }
  },

  // 11. Freelance Contract Checklist
  {
    filename: "blog-freelance-contract-checklist.jpg",
    title: "Freelance Contract Checklist",
    subtitle: "7 Essential Clauses: Scope, Retainers, IP Transfer & Late Fees",
    category: "LEGAL & CONTRACTS",
    badge: "LEGAL CHECKLIST",
    theme: {
      bg1: "#3f2c00",
      bg2: "#1c1917",
      accent: "#f59e0b",
      accentGlow: "rgba(245, 158, 11, 0.35)",
      badgeBg: "#d97706",
      badgeText: "#ffffff",
      iconSvg: `<path d="M75 70h50v60H75z" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="3"/><path d="M85 85h30M85 100h30M85 115h15" stroke="#f59e0b" stroke-width="3"/>`
    }
  },
  // 12. Web Design Contract Template
  {
    filename: "blog-web-design-contract-template.jpg",
    title: "Web Design Contract Template",
    subtitle: "Scope Boundaries, Revision Limits, Browser Support & Source Code",
    category: "WEB DEV & DESIGN",
    badge: "DEVELOPER CONTRACT",
    theme: {
      bg1: "#111827",
      bg2: "#1f2937",
      accent: "#60a5fa",
      accentGlow: "rgba(96, 165, 250, 0.35)",
      badgeBg: "#2563eb",
      badgeText: "#ffffff",
      iconSvg: `<rect x="65" y="70" width="70" height="50" rx="6" fill="#60a5fa" opacity="0.2" stroke="#60a5fa" stroke-width="3"/><path d="M65 85h70M80 120h40" stroke="#60a5fa" stroke-width="3"/>`
    }
  },
  // 13. Simple NDA Template
  {
    filename: "blog-simple-nda-template-free.jpg",
    title: "Simple NDA Template",
    subtitle: "Mutual vs. Unilateral Agreements & When You Actually Need One",
    category: "CONFIDENTIALITY & IP",
    badge: "FREE NDA GUIDE",
    theme: {
      bg1: "#450a0a",
      bg2: "#1c1917",
      accent: "#f87171",
      accentGlow: "rgba(248, 113, 113, 0.35)",
      badgeBg: "#dc2626",
      badgeText: "#ffffff",
      iconSvg: `<path d="M100 65c15 15 25 15 25 15v25c0 20-25 30-25 30s-25-10-25-30V80s10 0 25-15z" fill="#f87171" opacity="0.2" stroke="#f87171" stroke-width="3"/>`
    }
  },
  // 14. Contract Termination Clause
  {
    filename: "blog-contract-termination-clause.jpg",
    title: "Contract Termination Clauses",
    subtitle: "How to Structure Fair Exit Terms for Cause vs. Convenience",
    category: "CONTRACT RISK & EXIT",
    badge: "EXIT STRATEGY",
    theme: {
      bg1: "#292524",
      bg2: "#44403c",
      accent: "#fb923c",
      accentGlow: "rgba(251, 146, 60, 0.35)",
      badgeBg: "#ea580c",
      badgeText: "#ffffff",
      iconSvg: `<circle cx="100" cy="100" r="35" fill="#fb923c" opacity="0.2" stroke="#fb923c" stroke-width="3"/><path d="M88 88l24 24M112 88l-24 24" stroke="#fb923c" stroke-width="4"/>`
    }
  },

  // 15. Consulting Proposal Template
  {
    filename: "blog-consulting-proposal-template.jpg",
    title: "Consulting Proposal Template",
    subtitle: "Framework for Scoping Deliverables, Discovery & Advisory Retainers",
    category: "CONSULTING & ADVISORY",
    badge: "HIGH-TICKET PITCH",
    theme: {
      bg1: "#1e1b4b",
      bg2: "#3b0764",
      accent: "#c084fc",
      accentGlow: "rgba(192, 132, 252, 0.35)",
      badgeBg: "#9333ea",
      badgeText: "#ffffff",
      iconSvg: `<path d="M70 120l20-40 20 20 20-35" stroke="#c084fc" stroke-width="4" stroke-linecap="round" fill="none"/>`
    }
  },
  // 16. Sponsorship Proposal Template
  {
    filename: "blog-sponsorship-proposal-template.jpg",
    title: "Sponsorship Proposal Template",
    subtitle: "Audience Demographics, Deliverable Packages & Brand ROI",
    category: "SPONSORSHIP & EVENTS",
    badge: "BRAND PARTNERSHIP",
    theme: {
      bg1: "#831843",
      bg2: "#500724",
      accent: "#f472b6",
      accentGlow: "rgba(244, 114, 182, 0.35)",
      badgeBg: "#db2777",
      badgeText: "#ffffff",
      iconSvg: `<path d="M100 70l8 16 18 3-13 13 3 18-16-9-16 9 3-18-13-13 18-3z" fill="#f472b6" opacity="0.3" stroke="#f472b6" stroke-width="3"/>`
    }
  },
  // 17. Quote vs Invoice vs Estimate
  {
    filename: "blog-quote-vs-invoice-vs-estimate.jpg",
    title: "Quote vs. Invoice vs. Estimate",
    subtitle: "The Legal & Practical Differences Between All Three Documents",
    category: "FINANCIAL WORKFLOWS",
    badge: "BUSINESS GUIDE",
    theme: {
      bg1: "#0f172a",
      bg2: "#1e3a8a",
      accent: "#60a5fa",
      accentGlow: "rgba(96, 165, 250, 0.35)",
      badgeBg: "#2563eb",
      badgeText: "#ffffff",
      iconSvg: `<circle cx="75" cy="100" r="15" fill="#60a5fa" opacity="0.3"/><circle cx="100" cy="100" r="15" fill="#60a5fa" opacity="0.5"/><circle cx="125" cy="100" r="15" fill="#60a5fa" opacity="0.8"/>`
    }
  },
  // 18. Construction Bid Proposal
  {
    filename: "blog-construction-bid-proposal.jpg",
    title: "Win Construction Bids",
    subtitle: "Proposal Checklist: Labor Margins, Materials, Permits & Schedules",
    category: "CONSTRUCTION & TRADES",
    badge: "CONTRACTOR PROPOSAL",
    theme: {
      bg1: "#78350f",
      bg2: "#451a03",
      accent: "#fbbf24",
      accentGlow: "rgba(251, 191, 36, 0.35)",
      badgeBg: "#d97706",
      badgeText: "#ffffff",
      iconSvg: `<path d="M70 120V90l30-20 30 20v30z" fill="#fbbf24" opacity="0.2" stroke="#fbbf24" stroke-width="3"/><rect x="90" y="100" width="20" height="20" fill="#fbbf24" opacity="0.4"/>`
    }
  },

  // 19. PDF to Word Converter Free
  {
    filename: "blog-PDF-to-Word-converter-free.jpg",
    title: "Best Free PDF to Word Converters",
    subtitle: "2026 Comparison: Table Formatting Fidelity, OCR & Browser Privacy",
    category: "AI & PRODUCTIVITY TOOLS",
    badge: "CONVERTER TESTED",
    theme: {
      bg1: "#1e1b4b",
      bg2: "#311042",
      accent: "#a855f7",
      accentGlow: "rgba(168, 85, 247, 0.35)",
      badgeBg: "#9333ea",
      badgeText: "#ffffff",
      iconSvg: `<rect x="65" y="70" width="30" height="40" rx="4" fill="#a855f7" opacity="0.3" stroke="#a855f7" stroke-width="2"/><path d="M100 85l10 10-10 10M110 95H85" stroke="#a855f7" stroke-width="3" stroke-linecap="round"/><rect x="105" y="90" width="30" height="40" rx="4" fill="#a855f7" opacity="0.5" stroke="#a855f7" stroke-width="2"/>`
    }
  },
  // 20. Why No Sign-Up Tools Are Winning
  {
    filename: "blog-online-document-maker-no-sign-up.jpg",
    title: "Why \"No Sign-Up\" Tools Win",
    subtitle: "The 2026 Shift to Client-Side Privacy, Zero Paywalls & Speed",
    category: "PRODUCTIVITY & PRIVACY",
    badge: "NO SIGN-UP REVOLUTION",
    theme: {
      bg1: "#0f172a",
      bg2: "#0284c7",
      accent: "#38bdf8",
      accentGlow: "rgba(56, 189, 248, 0.35)",
      badgeBg: "#0369a1",
      badgeText: "#ffffff",
      iconSvg: `<path d="M80 85a20 20 0 0140 0v10h5a5 5 0 015 5v25a5 5 0 01-5 5H75a5 5 0 01-5-5V100a5 5 0 015-5h5V85z" fill="#38bdf8" opacity="0.2" stroke="#38bdf8" stroke-width="3"/><path d="M90 85a10 10 0 0120 0" stroke="#38bdf8" stroke-width="3"/>`
    }
  },
];

async function generateCover(spec: PostCoverSpec) {
  const outPath = path.join(process.cwd(), "public", "blog", spec.filename);

  const svg = `
  <svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${spec.theme.bg1}"/>
        <stop offset="100%" stop-color="${spec.theme.bg2}"/>
      </linearGradient>
      <radialGradient id="glow" cx="80%" cy="20%" r="60%">
        <stop offset="0%" stop-color="${spec.theme.accentGlow}"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      </pattern>
    </defs>

    <!-- Background -->
    <rect width="1200" height="675" fill="url(#bgGrad)"/>
    <rect width="1200" height="675" fill="url(#glow)"/>
    <rect width="1200" height="675" fill="url(#grid)"/>

    <!-- Decorative Top Bar -->
    <rect x="0" y="0" width="1200" height="8" fill="${spec.theme.accent}"/>

    <!-- Header Brand & Category -->
    <g transform="translate(80, 80)">
      <!-- Category Badge -->
      <rect x="0" y="0" width="220" height="34" rx="17" fill="${spec.theme.badgeBg}"/>
      <text x="110" y="22" fill="${spec.theme.badgeText}" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" text-anchor="middle" letter-spacing="1.5">${escapeXml(spec.badge)}</text>

      <!-- Category Label -->
      <text x="240" y="23" fill="rgba(255,255,255,0.7)" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" letter-spacing="2">${escapeXml(spec.category)}</text>
    </g>

    <!-- Main Title -->
    <g transform="translate(80, 240)">
      <text x="0" y="0" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="54" font-weight="900" letter-spacing="-1">
        ${escapeXml(spec.title)}
      </text>
      <!-- Subtitle -->
      <text x="0" y="70" fill="rgba(255,255,255,0.85)" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500" width="850">
        ${escapeXml(spec.subtitle)}
      </text>
    </g>

    <!-- Right Side Graphic Icon -->
    <g transform="translate(920, 200) scale(2.2)">
      ${spec.theme.iconSvg}
    </g>

    <!-- Bottom Footer Bar -->
    <g transform="translate(80, 560)">
      <rect x="0" y="0" width="48" height="48" rx="12" fill="rgba(255,255,255,0.1)"/>
      <path d="M14 24h20M24 14l10 10-10 10" stroke="${spec.theme.accent}" stroke-width="3" stroke-linecap="round"/>
      <text x="65" y="32" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="800">Templix AI</text>
      <text x="175" y="32" fill="rgba(255,255,255,0.6)" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500">| 100% Free Document Blueprint &amp; Guide</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(outPath);

  console.log(`Generated: ${spec.filename}`);
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

async function main() {
  console.log("Generating 20 unique high-resolution blog cover images...");
  for (const cover of covers) {
    await generateCover(cover);
  }
  console.log("All 20 unique blog covers generated successfully!");
}

main().catch(console.error);
