import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;
  return {
    rules: [
      // ── Primary rule: allow all legitimate search engine bots ─────────────
      {
        userAgent: "*",
        allow: [
          "/",
          "/_next/static/",  // JS/CSS chunks — must be crawlable for rendering
          "/fonts/",
          "/badges/",
        ],
        disallow: [
          "/api/",
        ],
      },

      // ── Block AI training scrapers ────────────────────────────────────────
      // OpenAI GPTBot
      { userAgent: "GPTBot", disallow: ["/"] },
      // Anthropic ClaudeBot
      { userAgent: "ClaudeBot", disallow: ["/"] },
      // Common Crawl (bulk training data harvesting)
      { userAgent: "CCBot", disallow: ["/"] },
      // ByteDance / TikTok crawler
      { userAgent: "Bytespider", disallow: ["/"] },
      // Amazon Alexa / Kendra
      { userAgent: "Amazonbot", disallow: ["/"] },
      // Meta AI
      { userAgent: "FacebookBot", disallow: ["/"] },
      // Cohere AI training
      { userAgent: "cohere-ai", disallow: ["/"] },
      // PerplexityBot (AI answer engine — allow crawl but not training)
      // — kept crawlable so Perplexity can surface Templix AI as an answer
      { userAgent: "PerplexityBot", allow: ["/"], disallow: ["/api/"] },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

