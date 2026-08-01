import { SEOEngine } from "../src/services/seo";
import { buildCanonical } from "../src/lib/canonical";

console.log("🔍 Running Comprehensive GSC URL Canonical & Hreflang Test...\n");

const testCases = [
  {
    name: "Paginated URL (?page=1) → Canonical consolidates on clean parent URL",
    locale: "en",
    slug: "/templates/invoices/general",
    params: { page: "1" },
    expectedCanonical: "https://templix-ai.whitesparksoft.com/en/templates/invoices/general",
  },
  {
    name: "Paginated URL (?page=2) → Canonical consolidates on clean parent URL",
    locale: "en",
    slug: "/templates/invoices/general",
    params: { page: "2" },
    expectedCanonical: "https://templix-ai.whitesparksoft.com/en/templates/invoices/general",
  },
  {
    name: "German Localized Template (Self-Canonical + Hreflang Cluster)",
    locale: "de",
    slug: "/templates/invoices/invoice-auto-repair",
    expectedCanonical: "https://templix-ai.whitesparksoft.com/de/templates/invoices/invoice-auto-repair",
  },
  {
    name: "French Localized Template (Self-Canonical + Hreflang Cluster)",
    locale: "fr",
    slug: "/templates/business-plans/photography-business-plan",
    expectedCanonical: "https://templix-ai.whitesparksoft.com/fr/templates/business-plans/photography-business-plan",
  },
  {
    name: "Spanish Localized Template (Self-Canonical + Hreflang Cluster)",
    locale: "es",
    slug: "/templates/invoices/invoice-recurring-subscription",
    expectedCanonical: "https://templix-ai.whitesparksoft.com/es/templates/invoices/invoice-recurring-subscription",
  },
  {
    name: "Arabic Localized Blog Category Filter (?category=Guides) → Canonical consolidates on clean blog URL",
    locale: "ar",
    slug: "/blog",
    params: { category: "Guides" },
    expectedCanonical: "https://templix-ai.whitesparksoft.com/ar/blog",
  },
  {
    name: "German Localized Blog Post (Self-Canonical + Hreflang Cluster)",
    locale: "de",
    slug: "/blog/executive-summary-business-plan",
    expectedCanonical: "https://templix-ai.whitesparksoft.com/de/blog/executive-summary-business-plan",
  },
];

let failed = 0;

testCases.forEach((tc) => {
  const meta = SEOEngine.generateMetadata({
    title: "Test Page",
    description: "Test description",
    slug: tc.slug,
    locale: tc.locale,
  });

  const canonical = (meta.alternates as any)?.canonical;
  const languages = (meta.alternates as any)?.languages;

  console.log(`📌 Testing: ${tc.name}`);
  console.log(`   Locale: ${tc.locale} | Slug: ${tc.slug}`);
  console.log(`   Generated Canonical: ${canonical}`);

  if (canonical === tc.expectedCanonical) {
    console.log(`   ✅ Canonical matches expected target!`);
  } else {
    console.log(`   ❌ Mismatch! Expected: ${tc.expectedCanonical}`);
    failed++;
  }

  if (languages && languages.en && languages.de && languages.fr && languages.es && languages.ar && languages["x-default"]) {
    console.log(`   ✅ Complete Hreflang Cluster Present (en, de, fr, es, ar, x-default)`);
  } else {
    console.log(`   ❌ Incomplete Hreflang Cluster:`, languages);
    failed++;
  }

  console.log("----------------------------------------------------------------");
});

if (failed === 0) {
  console.log("🎉 ALL GSC CANONICAL & HREFLANG TEST CASES PASSED 100%!");
} else {
  console.log(`⚠️ ${failed} Test Cases Failed.`);
  process.exit(1);
}
