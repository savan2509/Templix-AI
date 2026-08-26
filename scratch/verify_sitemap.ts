import sitemap from "../src/app/sitemap";

async function verifySitemap() {
  console.log("Analyzing sitemap output...");
  const entries = await sitemap();
  console.log(`Total URLs generated in sitemap.xml: ${entries.length}`);

  const breakdown: Record<string, number> = {};
  for (const entry of entries) {
    const url = entry.url;
    const clean = url.replace("https://templix-ai.whitesparksoft.com/en", "");
    const segment = clean.split("/")[1] || "root";
    breakdown[segment] = (breakdown[segment] || 0) + 1;
  }

  console.log("Breakdown by section:", JSON.stringify(breakdown, null, 2));

  // Check for any null or invalid URLs
  const invalid = entries.filter((e) => !e.url || !e.url.startsWith("https://templix-ai.whitesparksoft.com/en"));
  console.log(`Invalid URLs: ${invalid.length}`);
}

verifySitemap().catch(console.error);
