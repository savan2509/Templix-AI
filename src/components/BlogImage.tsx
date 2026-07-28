"use client";

/**
 * BlogImage — a drop-in replacement for Next.js <Image> on blog post cards
 * and article hero panels.
 *
 * • Tries to load the post's own image first.
 * • On error (404 / missing file) it falls back to the category-specific
 *   cover image that always exists in /public/blog/.
 * • The category covers are AI-generated images tailored to each topic, so
 *   the UI still looks intentionally branded, never broken.
 */

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

// Category → a curated fallback that always lives in /public/blog/
const CATEGORY_FALLBACK: Record<string, string> = {
  Invoices:  "/blog/blog-cover-invoices.jpg",
  Resumes:   "/blog/blog-cover-resumes.jpg",
  Contracts: "/blog/blog-cover-contracts.jpg",
  Proposals: "/blog/blog-cover-proposals.jpg",
  Letters:   "/blog/blog-cover-letters.jpg",
  "AI Tools":"/blog/blog-cover-aitools.jpg",
  Guides:    "/blog/blog-cover-guides.jpg",
};

// Final safety net — never show a broken image
const DEFAULT_FALLBACK = "/blog/blog-invoice-freelancers.jpg";

interface BlogImageProps extends Omit<ImageProps, "src"> {
  src: string;
  category?: string;
}

export default function BlogImage({ src, category, alt, ...rest }: BlogImageProps) {
  const fallback =
    (category ? CATEGORY_FALLBACK[category] : undefined) ?? DEFAULT_FALLBACK;

  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => {
        // Only replace if it's not already the fallback (prevents infinite loop)
        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
    />
  );
}
