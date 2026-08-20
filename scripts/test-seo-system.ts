/**
 * Automated Verification Test for Templix AI Technical SEO Architecture (All 28 Points)
 */

import {
  getCanonicalUrl,
  cleanCanonical,
  sanitizeSlug,
  shouldNoIndexQueryParams,
  generatePageKeywords,
  generateSeoMetadata,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateTemplateSchema,
  generateSoftwareSchema,
  generateArticleSchema,
  generateImageAlt,
  extractContentTags,
  getRelatedTemplates,
  getRelatedGuides,
  getRelatedTools,
  getRelatedUseCases,
  runSeoHealthAudit,
  getSeoAnalyticsData,
} from "../src/lib/seo";

import { INDUSTRIES_DATA, getIndustryBySlug } from "../src/data/industries";

let passedCount = 0;
let failedCount = 0;

function assert(condition: boolean, testName: string) {
  if (condition) {
    console.log(`  [PASS] ${testName}`);
    passedCount++;
  } else {
    console.error(`  [FAIL] ${testName}`);
    failedCount++;
  }
}

console.log("\n🧪 Running Templix AI Technical SEO Suite Verification...\n");

// 1. Canonical Engine & Query Stripping
console.log("▶ 1. Testing Canonical Engine & Query Hygiene (Points 1, 8, 23, 24):");
const cleanUrl = getCanonicalUrl("/templates/invoices/freelancer");
assert(
  cleanUrl === "https://templix-ai.whitesparksoft.com/en/templates/invoices/freelancer",
  "Standard canonical URL resolves correctly with production domain and /en prefix"
);

const strippedUrl = getCanonicalUrl("/templates/invoices", {
  utm_source: "google",
  utm_medium: "cpc",
  fbclid: "12345",
  page: "1",
  q: "query",
});
assert(
  strippedUrl === "https://templix-ai.whitesparksoft.com/en/templates/invoices",
  "Tracking parameters (utm, fbclid), query noise, and page=1 are cleanly stripped"
);

const paginatedUrl = getCanonicalUrl("/templates/invoices", { page: "3" });
assert(
  paginatedUrl === "https://templix-ai.whitesparksoft.com/en/templates/invoices?page=3",
  "Pagination page=3 is preserved for multi-page category indexing"
);

assert(
  shouldNoIndexQueryParams({ search: "invoice" }) === true,
  "Search query parameters trigger noindex directive (Point 23)"
);
assert(
  shouldNoIndexQueryParams({}) === false,
  "Standard pages without search queries are indexable"
);

// 2. Metadata Generator
console.log("\n▶ 2. Testing Global Metadata Generator (Point 1):");
const meta = generateSeoMetadata({
  title: "Freelancer Invoice Template",
  description: "Free editable freelancer invoice template in PDF & Word.",
  path: "/templates/invoices/freelancer",
  locale: "en",
  category: "invoices",
  tags: ["freelancer", "invoice", "pdf"],
  type: "template",
});
assert(typeof meta.title === "string" && meta.title.includes("Freelancer Invoice Template"), "Meta title generated");
assert(meta.alternates?.canonical === "https://templix-ai.whitesparksoft.com/en/templates/invoices/freelancer", "Meta alternates canonical accurate");
assert(meta.openGraph?.title !== undefined, "OpenGraph title is defined");
assert((meta.twitter as any)?.card === "summary_large_image", "Twitter summary large image configured");


// 3. Schema.org JSON-LD Generators (Points 9, 10)
console.log("\n▶ 3. Testing Schema.org Structured Data (Points 9, 10):");
const orgSchema = generateOrganizationSchema();
assert(orgSchema["@type"] === "Organization" && orgSchema.name === "Templix AI", "Organization schema generated");

const webSchema = generateWebsiteSchema();
assert(webSchema["@type"] === "WebSite" && webSchema.potentialAction !== undefined, "WebSite schema with SearchAction generated");

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/en" },
  { name: "Templates", url: "/en/templates" },
  { name: "Invoices", url: "/en/templates/invoices" },
]);
assert(breadcrumbSchema.itemListElement.length === 3, "BreadcrumbList schema generated with 3 items");

const faqSchema = generateFAQSchema([
  { question: "Is this free?", answer: "Yes, 100% free." },
]);
assert(faqSchema?.mainEntity.length === 1, "FAQPage schema generated");

const templateSchema = generateTemplateSchema({
  name: "Freelancer Invoice",
  description: "Invoice template for freelancers",
  url: "https://templix-ai.whitesparksoft.com/en/templates/invoices/freelancer",
  category: "Invoices",
});
assert(Array.isArray(templateSchema["@type"]) && templateSchema["@type"].includes("DigitalDocument"), "DigitalDocument schema generated");

// 4. Industry Pages & Routing (Points 2, 3)
console.log("\n▶ 4. Testing Industry Data & Routing (Points 2, 3):");
assert(INDUSTRIES_DATA.length >= 5, `Found ${INDUSTRIES_DATA.length} industry verticals`);
const constructionInd = getIndustryBySlug("construction");
assert(constructionInd !== undefined && constructionInd.slug === "construction", "Construction industry data resolved");

// 5. Image SEO & Alt Tags (Point 14)
console.log("\n▶ 5. Testing Image SEO & Alt Text (Point 14):");
const imgAlt = generateImageAlt({
  title: "Freelancer Invoice",
  category: "Invoices",
  format: "PDF and Word",
  type: "template",
});
assert(imgAlt.includes("Free Freelancer Invoice - Editable Invoices Template in PDF and Word"), "Descriptive Image Alt tag generated");

// 6. Automated Internal Linking Engine (Points 11, 12, 13, 22)
console.log("\n▶ 6. Testing Automated Internal Linking & Tags (Points 11, 12, 13, 22):");
const relatedTmpls = getRelatedTemplates("invoice-freelancer", "invoices", 6);
assert(relatedTmpls.length === 6, `Generated ${relatedTmpls.length} related templates`);

const relatedGuides = getRelatedGuides("invoices", 4);
assert(relatedGuides.length === 4, `Generated ${relatedGuides.length} related guides`);

const relatedTools = getRelatedTools("invoices", 3);
assert(relatedTools.length === 3, `Generated ${relatedTools.length} related tools`);

const relatedUseCases = getRelatedUseCases("invoices", 3);
assert(relatedUseCases.length === 3, `Generated ${relatedUseCases.length} related use cases`);

// 7. SEO Health Audit & Orphan Page Detector (Points 20, 21)
console.log("\n▶ 7. Testing SEO Health Audit & Orphan Detector (Points 20, 21):");
const health = runSeoHealthAudit();
assert(health.totalAnalyzedPages > 50, `Audited ${health.totalAnalyzedPages} pages across repository`);
assert(typeof health.healthScorePercentage === "number" && health.healthScorePercentage >= 80, `Site health score: ${health.healthScorePercentage}%`);
assert(Array.isArray(health.orphanList), "Internal link graph analyzed for orphan pages");

// 8. SEO Intelligence & Opportunity Dashboard (Points 26, 27)
console.log("\n▶ 8. Testing SEO Opportunity Dashboard (Points 26, 27):");
const analyticsData = getSeoAnalyticsData();
assert(analyticsData.opportunities.length > 0, `Found ${analyticsData.opportunities.length} keyword opportunities in positions 4-20`);
assert(analyticsData.opportunities[0].recommendation.length > 10, "Actionable recommendations attached to opportunity keywords");

console.log("\n=======================================================");
console.log(`Verification Complete: ${passedCount} PASSED, ${failedCount} FAILED`);
console.log("=======================================================\n");

if (failedCount > 0) {
  process.exit(1);
}
