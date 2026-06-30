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

  // ── HTTP caching headers ──────────────────────────────────────────────────
  // Static assets get a 1-year immutable cache; API routes stay fresh.
  async headers() {
    return [
      {
        // Cache custom fonts for 1 year
        source: "/fonts/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
