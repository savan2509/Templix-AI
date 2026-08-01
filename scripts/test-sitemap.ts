import sitemap from "../src/app/sitemap";

async function runSitemapTest() {
  console.log("🔍 Running Sitemap Audit & Validation Test...");
  const entries = await sitemap();
  console.log(`\n✅ Total Sitemap Entries: ${entries.length}`);

  const urls = entries.map((e) => e.url);
  const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);

  if (duplicates.length > 0) {
    console.error(`❌ ERROR: Found ${duplicates.length} duplicate URLs in sitemap:`, duplicates);
    process.exit(1);
  } else {
    console.log("✅ 0 Duplicate URLs found.");
  }

  const invalidUrls = entries.filter(
    (e) => !e.url || typeof e.url !== "string" || e.url.includes("undefined") || e.url.includes("null")
  );

  if (invalidUrls.length > 0) {
    console.error("❌ ERROR: Found invalid URLs in sitemap:", invalidUrls);
    process.exit(1);
  } else {
    console.log("✅ All URLs are valid and formatted correctly.");
  }

  // Count breakdown by page type
  const templatesCount = entries.filter((e) => e.url.includes("/templates/")).length;
  const toolsCount = entries.filter((e) => e.url.includes("/tools/")).length;
  const blogCount = entries.filter((e) => e.url.includes("/blog/")).length;
  const faqCount = entries.filter((e) => e.url.includes("/faq/")).length;
  const useCaseCount = entries.filter((e) => e.url.includes("/use-cases/")).length;

  console.log("\n📊 Sitemap Breakdown by Section:");
  console.log(`- Template & Category Pages: ${templatesCount}`);
  console.log(`- Free & AI Tools Pages: ${toolsCount}`);
  console.log(`- Blog & Comparison Articles: ${blogCount}`);
  console.log(`- Dedicated FAQ Topic Pages: ${faqCount}`);
  console.log(`- Use Case Landing Pages: ${useCaseCount}`);
  console.log("\n🎉 Sitemap verification PASSED 100%!");
}

runSitemapTest().catch((err) => {
  console.error("❌ Sitemap test failed:", err);
  process.exit(1);
});
