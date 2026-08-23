// ─────────────────────────────────────────────────────────────────────────────
// Templix AI — Strategic 2026 Keyword Growth Engine
// High-intent, categorized search queries driving programmatic SEO, metadata,
// internal link anchoring, and answer-engine (AEO) search discoverability.
// ─────────────────────────────────────────────────────────────────────────────

export interface KeywordCluster {
  id: string;
  category: "invoices" | "resumes" | "contracts" | "proposals" | "tools" | "ai" | "pdf";
  pillarKeyword: string;
  searchIntent: "transactional" | "commercial" | "informational" | "navigational";
  targetUrl: string;
  longTailQueries: string[];
  semanticLsiKeywords: string[];
  monthlyVolumeTier: "High" | "Very High" | "Medium";
  cpcValueTier: "$$$$" | "$$$" | "$$";
}

export const STRATEGIC_KEYWORD_CLUSTERS: KeywordCluster[] = [
  // ── INVOICE CLUSTER ────────────────────────────────────────────────────────
  {
    id: "kw-inv-01",
    category: "invoices",
    pillarKeyword: "free invoice generator",
    searchIntent: "transactional",
    targetUrl: "/en/tools/free-invoice-generator",
    longTailQueries: [
      "free online invoice generator no sign up",
      "invoice generator without watermark",
      "instant pdf invoice creator free",
      "multi currency tax invoice generator",
      "simple invoice maker for freelancers",
    ],
    semanticLsiKeywords: [
      "billable line items",
      "subtotal and tax calculation",
      "net 30 payment terms",
      "sequential invoice number format",
      "client billing statement",
    ],
    monthlyVolumeTier: "Very High",
    cpcValueTier: "$$$$",
  },
  {
    id: "kw-inv-02",
    category: "invoices",
    pillarKeyword: "invoice template word excel",
    searchIntent: "transactional",
    targetUrl: "/en/templates/invoices",
    longTailQueries: [
      "invoice template word docx free download",
      "invoice template excel spreadsheet with formulas",
      "google sheets invoice template cloud",
      "customs commercial invoice template shipping",
      "photographer shoot invoice template licensing",
    ],
    semanticLsiKeywords: [
      "editable docx billing format",
      "xlsx automated total cell formula",
      "harmonized tariff schedule hs code",
      "usage rights and licensing terms",
      "vat and gst invoice layout",
    ],
    monthlyVolumeTier: "Very High",
    cpcValueTier: "$$$",
  },
  {
    id: "kw-inv-03",
    category: "invoices",
    pillarKeyword: "gst tax invoice format",
    searchIntent: "commercial",
    targetUrl: "/en/templates/invoices/gst-invoice-format",
    longTailQueries: [
      "gst invoice format for freelancers india",
      "tax invoice format with cgst sgst igst",
      "freelance hsn sac code invoice format",
      "b2b gst compliant invoice generator",
    ],
    semanticLsiKeywords: [
      "gstin validation",
      "place of supply rules",
      "reverse charge mechanism",
      "e-invoicing format compliance",
    ],
    monthlyVolumeTier: "High",
    cpcValueTier: "$$$",
  },

  // ── RESUME CLUSTER ─────────────────────────────────────────────────────────
  {
    id: "kw-res-01",
    category: "resumes",
    pillarKeyword: "free resume builder ats",
    searchIntent: "transactional",
    targetUrl: "/en/tools/free-resume-builder",
    longTailQueries: [
      "free online resume builder no sign up",
      "ats friendly resume builder free pdf download",
      "resume builder without subscription paywall",
      "single column resume format for applicant tracking systems",
      "ai resume bullet point generator",
    ],
    semanticLsiKeywords: [
      "hrxml standard text parsing",
      "quantified achievement bullet points",
      "greenhouse workday taleo compatibility",
      "skills-first career transition format",
      "executive summary generator",
    ],
    monthlyVolumeTier: "Very High",
    cpcValueTier: "$$$$",
  },
  {
    id: "kw-res-02",
    category: "resumes",
    pillarKeyword: "ats resume template 2026",
    searchIntent: "commercial",
    targetUrl: "/en/templates/resumes",
    longTailQueries: [
      "best resume template for ats 2026",
      "career change resume template with transferable skills",
      "federal resume format usajobs 2 page",
      "software engineer resume template modern tech stack",
      "clinical healthcare nursing ats resume",
    ],
    semanticLsiKeywords: [
      "chronological hybrid resume structure",
      "semantic keyword match rate",
      "skills-based hiring framework",
      "opm civil service qualification standard",
      "ehr electronic health records certification",
    ],
    monthlyVolumeTier: "Very High",
    cpcValueTier: "$$$",
  },

  // ── CONTRACT CLUSTER ───────────────────────────────────────────────────────
  {
    id: "kw-con-01",
    category: "contracts",
    pillarKeyword: "free contract generator",
    searchIntent: "transactional",
    targetUrl: "/en/tools/contract-generator",
    longTailQueries: [
      "free independent contractor agreement 1099",
      "simple mutual non disclosure agreement nda online",
      "freelance service agreement contract generator",
      "web design and development contract terms",
      "digital marketing seo retainer contract template",
    ],
    semanticLsiKeywords: [
      "e-sign act legal validity",
      "indemnification and liability limits",
      "intellectual property rights transfer",
      "scope creep and kill fee clause",
      "governing state jurisdiction",
    ],
    monthlyVolumeTier: "High",
    cpcValueTier: "$$$$",
  },
  {
    id: "kw-con-02",
    category: "contracts",
    pillarKeyword: "independent contractor vs employee agreement",
    searchIntent: "informational",
    targetUrl: "/en/blog/independent-contractor-vs-employment-contract",
    longTailQueries: [
      "1099 contractor vs w2 employee legal differences",
      "irs common law worker classification rules",
      "subcontractor agreement template free docx",
      "what clauses belong in a freelance agreement",
    ],
    semanticLsiKeywords: [
      "behavioral control test",
      "financial independence and equipment",
      "worker misclassification penalty",
      "statement of work sow attachment",
    ],
    monthlyVolumeTier: "High",
    cpcValueTier: "$$$",
  },

  // ── PROPOSAL CLUSTER ───────────────────────────────────────────────────────
  {
    id: "kw-prop-01",
    category: "proposals",
    pillarKeyword: "business proposal generator",
    searchIntent: "transactional",
    targetUrl: "/en/tools/proposal-builder",
    longTailQueries: [
      "free business proposal template online",
      "how to write client proposal executive summary",
      "3 tier proposal pricing tables that win clients",
      "seo audit and digital strategy proposal",
      "commercial construction contractor bid proposal",
    ],
    semanticLsiKeywords: [
      "problem statement and strategic solution",
      "milestone pricing and deposit schedule",
      "acceptance and sign-off signature line",
      "guaranteed maximum price bid breakdown",
      "tiered packaging gold silver bronze",
    ],
    monthlyVolumeTier: "High",
    cpcValueTier: "$$$$",
  },

  // ── PDF & UTILITY TOOLS CLUSTER ────────────────────────────────────────────
  {
    id: "kw-pdf-01",
    category: "pdf",
    pillarKeyword: "pdf to word converter free",
    searchIntent: "transactional",
    targetUrl: "/en/tools/pdf-to-word",
    longTailQueries: [
      "convert pdf to editable word docx online free",
      "pdf to docx converter without email sign up",
      "word to pdf converter vector high resolution",
      "browser based private pdf editor no upload",
    ],
    semanticLsiKeywords: [
      "client side document processing",
      "zero server upload privacy",
      "pdf text extraction and formatting preservation",
      "high resolution docx export",
    ],
    monthlyVolumeTier: "Very High",
    cpcValueTier: "$$$",
  },

  // ── AI DOCUMENT WORKFLOWS CLUSTER ──────────────────────────────────────────
  {
    id: "kw-ai-01",
    category: "ai",
    pillarKeyword: "ai document editor",
    searchIntent: "commercial",
    targetUrl: "/en/services/ai-document-editing",
    longTailQueries: [
      "ai document editor free online",
      "rewrite contract with ai legally binding",
      "ai business document generator no sign up",
      "is it safe to use ai to write contracts privacy",
    ],
    semanticLsiKeywords: [
      "browser local confidential processing",
      "transient prompt execution without training",
      "tone and voice style adjustment",
      "automated clause clarification",
    ],
    monthlyVolumeTier: "High",
    cpcValueTier: "$$$$",
  },
];

/**
 * Returns all strategic keyword clusters.
 */
export function getAllKeywordClusters(): KeywordCluster[] {
  return STRATEGIC_KEYWORD_CLUSTERS;
}

/**
 * Returns keyword clusters by category.
 */
export function getKeywordClustersByCategory(category: string): KeywordCluster[] {
  return STRATEGIC_KEYWORD_CLUSTERS.filter((c) => c.category === category);
}

/**
 * Helper to match query terms against target URLs for automated internal linking.
 */
export function getRecommendedAnchorsForKeyword(keyword: string): { url: string; anchorText: string } | undefined {
  const kwLower = keyword.toLowerCase();
  for (const cluster of STRATEGIC_KEYWORD_CLUSTERS) {
    if (cluster.pillarKeyword.toLowerCase().includes(kwLower) || kwLower.includes(cluster.pillarKeyword.toLowerCase())) {
      return { url: cluster.targetUrl, anchorText: cluster.pillarKeyword };
    }
    for (const lt of cluster.longTailQueries) {
      if (lt.toLowerCase().includes(kwLower) || kwLower.includes(lt.toLowerCase())) {
        return { url: cluster.targetUrl, anchorText: lt };
      }
    }
  }
  return undefined;
}
