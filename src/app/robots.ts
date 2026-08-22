import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Technical SEO Robots.txt Configuration
 *
 * Allows full indexing access to all search engines (Googlebot, Bingbot, etc.) and AI crawlers
 * while protecting private administrative and internal application endpoints.
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
      {
        userAgent: "*",
        allow: [
          "/",
          "/_next/static/",
          "/fonts/",
          "/badges/",
        ],
        disallow: privateDisallows,
      },
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: privateDisallows,
      },
      {
        userAgent: "Bingbot",
        allow: ["/"],
        disallow: privateDisallows,
      },
      {
        userAgent: "GPTBot",
        allow: ["/"],
        disallow: privateDisallows,
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/"],
        disallow: privateDisallows,
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/"],
        disallow: privateDisallows,
      },
      {
        userAgent: "cohere-ai",
        allow: ["/"],
        disallow: privateDisallows,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
