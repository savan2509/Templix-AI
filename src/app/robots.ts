import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Technical SEO Robots.txt Configuration
 *
 * Implements Point 7:
 * - Allows full indexing access to legitimate search engine bots for public content,
 *   CSS/JS chunks, fonts, and images.
 * - Intentionally disallows internal application endpoints: /admin/, /dashboard/,
 *   /editor/, /api/, /auth/, /confirm/, /reset/, /login/, /register/.
 * - Explicitly prevents AI scrapers from mass harvesting data while maintaining
 *   answer-engine visibility for conversational AI.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

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
        disallow: [
          "/admin/",
          "/dashboard/",
          "/editor/",
          "/api/",
          "/auth/",
          "/login/",
          "/register/",
          "/confirm/",
          "/reset/",
        ],
      },

      // ── Block AI training scrapers (bulk model harvesting) ────────────────
      { userAgent: "GPTBot", disallow: ["/"] },
      { userAgent: "ClaudeBot", disallow: ["/"] },
      { userAgent: "CCBot", disallow: ["/"] },
      { userAgent: "Bytespider", disallow: ["/"] },
      { userAgent: "Amazonbot", disallow: ["/"] },
      { userAgent: "FacebookBot", disallow: ["/"] },
      { userAgent: "cohere-ai", disallow: ["/"] },

      // ── Conversational Answer Engines (Allow crawl for citation, block internal APIs) ──
      { userAgent: "PerplexityBot", allow: ["/"], disallow: ["/api/", "/admin/", "/dashboard/"] },
      { userAgent: "Google-Extended", disallow: ["/admin/", "/dashboard/"] },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
