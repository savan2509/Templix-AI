import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Every app route is locale-prefixed (/en/admin, /de/dashboard, …), so the
      // disallow patterns must use a wildcard segment to actually match them.
      disallow: [
        "/api/",
        "/*/admin",
        "/*/editor",
        "/*/dashboard",
        "/*/login",
        "/*/auth/",
        // Token-based, one-time transactional URLs — private and worthless to
        // index (they expire), so keep crawlers out of them.
        "/*/confirm/",
        "/*/reset/",
        // Search-result URLs are infinite, thin variants — keep them out of the
        // index. Paginated ?page= URLs are intentionally left crawlable.
        "/*?q=",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
