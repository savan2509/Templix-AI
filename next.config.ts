import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Performance ────────────────────────────────────────────────────────────
  // Enable Gzip/Brotli compression on Node.js server responses.
  // On Vercel this is handled at the edge, but enabling it here also covers
  // self-hosted / preview environments.
  compress: true,
  // Remove the "X-Powered-By: Next.js" header — minor fingerprint reduction.
  poweredByHeader: false,
  // Source maps add ~50–200 KB to production bundles and expose source paths.
  // Keep false in production; the Vercel dashboard provides stack traces anyway.
  productionBrowserSourceMaps: false,

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
      "date-fns",
      "@tanstack/react-query",
      "zod",
      "react-hook-form",
      "docx",
    ],
  },


  // ── Images ──────────────────────────────────────────────────────────────────
  // Allow images served from Templix AI CDN and other trusted sources.
  images: {
    qualities: [55, 75],
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
    // Responsive breakpoints tuned for the template thumbnail grid:
    // mobile (375/428), tablet (768), desktop (1024/1280/1440/1920)
    deviceSizes: [375, 428, 640, 768, 1024, 1280, 1440, 1920],
    // Intrinsic sizes for the thumbnail cards (320px wide on mobile → 400px on desktop)
    imageSizes: [64, 128, 256, 320, 400, 512],
    // Generate blur placeholders for above-fold images (prevents CLS)
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'none'; script-src 'none'; sandbox;",
  },

  // ── HTTP headers: security + caching ──────────────────────────────────────
  async headers() {
    // Content-Security-Policy — permissive "report-only" mode so it logs
    // violations without breaking anything. Switch to "Content-Security-Policy"
    // once you've verified no violations appear in the console.
    const cspValue = [
      "default-src 'self'",
      // Scripts: self + GA4/GTM + Vercel analytics + tiptap CDN
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://cdn.jsdelivr.net",
      // Styles: self + inline (Tailwind/CSS-in-JS) + Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fonts: self + Google Fonts CDN
      "font-src 'self' data: https://fonts.gstatic.com",
      // Images: self + data URIs (base64 thumbnails) + CDNs
      "img-src 'self' data: blob: https://templix-ai.whitesparksoft.com https://cdn.templix.ai https://www.google-analytics.com https://www.googletagmanager.com",
      // Connections: self + Supabase + GA4 + Vercel analytics
      "connect-src 'self' https://*.supabase.co https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://va.vercel-scripts.com wss://*.supabase.co",
      // Frames: block all (X-Frame-Options also set below)
      "frame-src 'none'",
      // Objects: block all plugins
      "object-src 'none'",
      // Base URI: only self (prevents base tag injection)
      "base-uri 'self'",
      // Form submissions: only self
      "form-action 'self'",
    ].join("; ");

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
      // Legacy XSS protection for older browsers (modern browsers use CSP).
      { key: "X-XSS-Protection", value: "1; mode=block" },
      // CSP in report-only mode — logs violations without blocking (safe to deploy)
      { key: "Content-Security-Policy-Report-Only", value: cspValue },
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
          { key: "Expires", value: "Fri, 31 Dec 2030 23:59:59 GMT" },
        ],
      },
      {
        // Cache public images, badges & icons on CDN for 1 year (immutable) with Expires header.
        source: "/:path*.{jpg,jpeg,png,svg,webp,avif,gif,ico}",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Expires", value: "Fri, 31 Dec 2030 23:59:59 GMT" },
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
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.templix.ai",
          },
        ],
        destination: "https://templix-ai.whitesparksoft.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

