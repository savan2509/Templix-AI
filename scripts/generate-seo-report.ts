import { allFallbackTemplates } from "../src/data/templates-fallback";
import { CATEGORIES } from "../src/constants";
import { ALL_TOOLS } from "../src/data/tools";
import { INDUSTRIES_DATA } from "../src/data/industries";
import { STATIC_BLOG_POSTS } from "../src/lib/blog-data";
import { CATEGORY_HUBS } from "../src/data/categories";
import { PRODUCTS_DATA } from "../src/data/products";
import { SERVICES_DATA } from "../src/data/services";
import { ALL_USE_CASE_SLUGS } from "../src/lib/use-case-data";
import { ALL_MASTER_LANDING_SLUGS } from "../src/lib/landing-page-data";
import { FAQ_TOPIC_SLUGS } from "../src/data/faq-topics";
import { professionRoutes, getProfessionsByCategory } from "../src/features/templates/profession-content";
import { siteConfig } from "../src/config/site";

interface ReportOutput {
  generatedAt: string;
  siteUrl: string;
  freshnessTimestamp: string;
  totalIndexablePages: number;
  catalogBreakdown: Record<string, number>;
  categoryVariantsBreakdown: Record<string, { categoryName: string; templatesCount: number; roleVariantsCount: number; sampleVariants: string[] }>;
  growthRoadmapMilestones: { dayRange: string; focus: string; targetMultiplier: string }[];
}

export function generateSeoReport(): ReportOutput {
  const seenTemplates = new Set<string>();
  const uniqueTemplates = allFallbackTemplates.filter((t) => {
    const key = `${t.categorySlug}/${t.slug}`;
    if (seenTemplates.has(key)) return false;
    seenTemplates.add(key);
    return true;
  });

  const pRoutes = professionRoutes();

  const catalogBreakdown: Record<string, number> = {
    "Document Templates (Unique)": uniqueTemplates.length,
    "Programmatic Role & Industry Variants": pRoutes.length,
    "Category Hubs": CATEGORY_HUBS.length,
    "Dedicated Software Products": PRODUCTS_DATA.length,
    "Document & AI Services": SERVICES_DATA.length,
    "Free Productivity Tools": ALL_TOOLS.length,
    "Industry Landing Pages": INDUSTRIES_DATA.length,
    "Blog Articles & Comparison Guides": STATIC_BLOG_POSTS.length,
    "Dedicated Use Case Pages": ALL_USE_CASE_SLUGS.length,
    "Master SEO Landing Pages": ALL_MASTER_LANDING_SLUGS.length,
    "FAQ Topic Collections": FAQ_TOPIC_SLUGS.length,
  };

  const totalIndexable = Object.values(catalogBreakdown).reduce((sum, count) => sum + count, 0);

  const categoryVariantsBreakdown: Record<string, any> = {};

  CATEGORIES.forEach((cat) => {
    const matchingTemplates = uniqueTemplates.filter((t) => t.categorySlug === cat.slug);
    const variants = getProfessionsByCategory(cat.slug);

    categoryVariantsBreakdown[cat.slug] = {
      categoryName: cat.name,
      templatesCount: matchingTemplates.length,
      roleVariantsCount: variants.length,
      sampleVariants: variants.map((v) => v.entry.profession),
    };
  });

  const growthRoadmapMilestones = [
    { dayRange: "Day 1 - 14", focus: "Phase 1: Canonicalization & Indexing Fixes", targetMultiplier: "Baseline (1.0x)" },
    { dayRange: "Day 14 - 30", focus: "Phase 2: Early Programmatic Crawl & Discovery", targetMultiplier: "1.5x - 2.0x Impressions" },
    { dayRange: "Day 30 - 60", focus: "Phase 3: Content Engine & Long-Tail Indexation", targetMultiplier: "3.0x - 5.0x Impressions / 2.5x Clicks" },
    { dayRange: "Day 60 - 90", focus: "Phase 4: Backlink Authority & Mid-Tail Climb", targetMultiplier: "5.0x - 8.0x Impressions / 5.0x Clicks" },
    { dayRange: "Day 90 - 120", focus: "Full Compounding: 10x Goal Realization", targetMultiplier: "10.0x Total Impressions & Clicks" },
  ];

  return {
    generatedAt: new Date().toISOString(),
    siteUrl: siteConfig.url,
    freshnessTimestamp: siteConfig.contentUpdated,
    totalIndexablePages: totalIndexable,
    catalogBreakdown,
    categoryVariantsBreakdown,
    growthRoadmapMilestones,
  };
}

if (require.main === module) {
  const report = generateSeoReport();
  console.log("================================================================================");
  console.log(`TEMPLIX AI — SEO & CATALOG TELEMETRY REPORT`);
  console.log(`Generated: ${report.generatedAt} | Site URL: ${report.siteUrl}`);
  console.log(`Content Freshness Timestamp: ${report.freshnessTimestamp}`);
  console.log(`Total Verified Indexable URL Assets: ${report.totalIndexablePages}`);
  console.log("================================================================================");
  console.log("\n📊 CATALOG BREAKDOWN:");
  Object.entries(report.catalogBreakdown).forEach(([entity, count]) => {
    console.log(`  • ${entity.padEnd(42)} : ${count}`);
  });

  console.log("\n🎯 CATEGORY & PROGRAMMATIC VARIANTS BREAKDOWN (Phase 2):");
  Object.entries(report.categoryVariantsBreakdown).forEach(([catSlug, data]: [string, any]) => {
    console.log(`  • ${data.categoryName.padEnd(20)} [${catSlug}]: ${data.templatesCount} templates, ${data.roleVariantsCount} role variants`);
    if (data.sampleVariants.length > 0) {
      console.log(`    ↳ Variants: ${data.sampleVariants.join(", ")}`);
    }
  });

  console.log("\n🚀 10X GROWTH ROADMAP MILESTONES:");
  report.growthRoadmapMilestones.forEach((m) => {
    console.log(`  [${m.dayRange.padEnd(14)}] ${m.focus.padEnd(48)} -> Target: ${m.targetMultiplier}`);
  });
  console.log("================================================================================");
}
