import fs from "fs";
import path from "path";
import sitemap from "../src/config/sitemap-data";

async function generate() {
  console.log("Generating public/sitemap.xml...");
  const items = await sitemap();
  
  const urlsXml = items
    .map((item) => {
      const lastmod = (item.lastModified ? new Date(item.lastModified) : new Date()).toISOString();
      return `  <url>\n    <loc>${item.url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${item.changeFrequency || "weekly"}</changefreq>\n    <priority>${item.priority ?? 0.6}</priority>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>\n`;
  
  const outPath = path.join("d:/Templix-AI/public/sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf-8");
  console.log(`Successfully written ${items.length} URLs to ${outPath}`);
}

generate();
