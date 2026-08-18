"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "templix_used_template_slugs";
export const FREE_TEMPLATE_LIMIT = 5;

export function useTemplateLimit() {
  const [usedSlugs, setUsedSlugs] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && active) {
          setUsedSlugs(parsed);
        }
      }
    } catch {
      // Silently handle SSR / localStorage errors
    } finally {
      if (active) {
        setIsLoaded(true);
      }
    }
    return () => {
      active = false;
    };
  }, []);

  const usedCount = usedSlugs.length;
  const remaining = Math.max(0, FREE_TEMPLATE_LIMIT - usedCount);
  const isLimitReached = usedCount >= FREE_TEMPLATE_LIMIT;

  /**
   * Registers a template usage.
   * Returns true if allowed, false if limit reached for a new template.
   */
  const registerTemplateUsage = (slug: string): boolean => {
    if (usedSlugs.includes(slug)) {
      return true; // Already unlocked for this guest session
    }
    if (usedSlugs.length >= FREE_TEMPLATE_LIMIT) {
      return false; // Free trial limit reached
    }
    const updated = [...usedSlugs, slug];
    setUsedSlugs(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Silently handle storage write error
    }
    return true;
  };

  const hasUsedTemplate = (slug: string): boolean => {
    return usedSlugs.includes(slug);
  };

  return {
    usedSlugs,
    usedCount,
    remaining,
    isLimitReached,
    isLoaded,
    registerTemplateUsage,
    hasUsedTemplate,
  };
}
