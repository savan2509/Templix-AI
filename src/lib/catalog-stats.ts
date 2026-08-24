import { allFallbackTemplates } from "@/data/templates-fallback";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { ALL_TOOLS } from "@/data/tools";
import { ALL_USE_CASE_SLUGS } from "@/lib/use-case-data";
import { PRODUCTS_DATA } from "@/data/products";
import { SERVICES_DATA } from "@/data/services";
import { FAQ_TOPIC_SLUGS } from "@/data/faq-topics";
import { INDUSTRIES_DATA } from "@/data/industries";
import { CATEGORIES } from "@/constants";

/**
 * Single source of truth for all catalog and inventory metrics across Templix AI.
 * Always dynamically derived from active data structures — never hardcoded.
 */
export const CATALOG_STATS = {
  get totalTemplates(): number {
    return allFallbackTemplates.length;
  },
  get totalTemplatesRounded(): string {
    return `${Math.floor(allFallbackTemplates.length / 10) * 10}+`;
  },
  get totalBlogPosts(): number {
    return STATIC_BLOG_POSTS.length;
  },
  get totalBlogPostsRounded(): string {
    return `${Math.floor(STATIC_BLOG_POSTS.length / 10) * 10}+`;
  },
  get totalTools(): number {
    return ALL_TOOLS.length;
  },
  get totalToolsRounded(): string {
    return `${Math.floor(ALL_TOOLS.length / 10) * 10}+`;
  },
  get totalUseCases(): number {
    return ALL_USE_CASE_SLUGS.length;
  },
  get totalUseCasesRounded(): string {
    return `${Math.floor(ALL_USE_CASE_SLUGS.length / 10) * 10}+`;
  },
  get totalProducts(): number {
    return PRODUCTS_DATA.length;
  },
  get totalServices(): number {
    return SERVICES_DATA.length;
  },
  get totalFaqTopics(): number {
    return FAQ_TOPIC_SLUGS.length;
  },
  get totalIndustries(): number {
    return INDUSTRIES_DATA.length;
  },
  get totalCategories(): number {
    return CATEGORIES.length;
  },
};
