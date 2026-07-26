import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SWC Compiler & Tree-Shaking Optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@supabase/supabase-js",
      "clsx",
      "tailwind-merge",
      "@tiptap/react",
      "@tiptap/starter-kit",
      "@tiptap/extension-table",
      "@tiptap/extension-table-cell",
      "@tiptap/extension-table-header",
      "@tiptap/extension-table-row",
    ],
  },

  // ── Images ──────────────────────────────────────────────────────────────────
  // Allow images served from Templix AI CDN and other trusted sources.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "templix.ai",
      },
      {
        protocol: "https",
        hostname: "cdn.templix.ai",
      },
    ],
    // Optimise formats served to modern browsers & 1-year CDN cache
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },

  // ── HTTP headers: security + caching ──────────────────────────────────────
  async headers() {
    const securityHeaders = [
      // Prevent the site from being embedded in iframes (clickjacking).
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      // Stop browsers from MIME-sniffing responses away from the declared type.
      { key: "X-Content-Type-Options", value: "nosniff" },
      // Send only the origin as referrer on cross-origin requests.
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      // Lock down powerful browser features by default.
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
      // Opt every browser into HTTPS for a year (safe on Vercel's HTTPS domains).
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      // Reduce DNS-prefetch leakage.
      { key: "X-DNS-Prefetch-Control", value: "on" },
    ];

    return [
      {
        // Apply security headers to every route.
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Cache custom fonts for 1 year.
        source: "/fonts/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache static badges for 1 year.
        source: "/badges/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache Next static JS/CSS chunks on CDN for 1 year.
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.templix-ai.whitesparksoft.com",
          },
        ],
        destination: "https://templix-ai.whitesparksoft.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
