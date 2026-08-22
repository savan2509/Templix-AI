import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Technical SEO Robots.txt Configuration
 *
 * - Allows full indexing access to search engine and AI search bots (GPTBot, ClaudeBot, Cohere, Perplexity, etc.)
 *   for public content, CSS/JS chunks, fonts, and images so content is cited and ranked.
 * - Protects private application endpoints: /admin/, /dashboard/, /editor/, /api/, /auth/, /confirm/, /reset/, /login/, /register/.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  const privateDisallows = [
    "/admin/",
    "/dashboard/",
    "/editor/",
    "/api/",
    "/auth/",
    "/login/",
    "/register/",
    "/confirm/",
    "/reset/",
  ];

  return {
    rules: [
      // ── Primary rule: allow all legitimate search engine bots ─────────────
      {
        userAgent: "*",
        allow: [
          "/",
          "/_next/static/", // JS/CSS chunks — essential for client hydration
          "/fonts/",
          "/badges/",
        ],
        disallow: privateDisallows,
      },

      // ── AI Search & Answer Engines (Permit public crawl for search citations & LLM search) ──
      { userAgent: "cohere-ai", allow: ["/"], disallow: privateDisallows },
      { userAgent: "GPTBot", allow: ["/"], disallow: privateDisallows },
      { userAgent: "ChatGPT-User", allow: ["/"], disallow: privateDisallows },
      { userAgent: "ClaudeBot", allow: ["/"], disallow: privateDisallows },
      { userAgent: "Claude-Web", allow: ["/"], disallow: privateDisallows },
      { userAgent: "PerplexityBot", allow: ["/"], disallow: privateDisallows },
      { userAgent: "Google-Extended", allow: ["/"], disallow: privateDisallows },
      { userAgent: "Applebot-Extended", allow: ["/"], disallow: privateDisallows },
      { userAgent: "Meta-ExternalAgent", allow: ["/"], disallow: privateDisallows },
      { userAgent: "Amazonbot", allow: ["/"], disallow: privateDisallows },

      // ── Bulk dataset training scrapers (no search value) ──
      { userAgent: "CCBot", disallow: ["/"] },
      { userAgent: "Bytespider", disallow: ["/"] },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
