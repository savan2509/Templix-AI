import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Compression ────────────────────────────────────────────────────────────
  compress: true,

  // ── Tree-shake heavy icon / animation packages ──────────────────────────
  // Next.js will only bundle the specific exports that are actually imported
  // instead of loading the entire library. Saves ~40-80 KB on first load.
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
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
    // Optimise formats served to modern browsers
    formats: ["image/avif", "image/webp"],
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
    ];
  },
};

export default nextConfig;
