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
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
