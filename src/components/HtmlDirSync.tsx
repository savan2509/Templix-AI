"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SUPPORTED_LOCALES } from "@/constants";

/**
 * Keeps <html lang/dir> in sync with the active locale on client-side
 * navigation (the root layout can't read the [locale] param, and the head
 * script only runs on full page loads). Ensures RTL locales like `ar` render
 * correctly when navigating between locales without a reload.
 */
export default function HtmlDirSync() {
  const pathname = usePathname();

  useEffect(() => {
    const seg = pathname.split("/")[1] || "en";
    const locale = SUPPORTED_LOCALES.find((l) => l.code === seg);
    if (!locale) return;
    document.documentElement.lang = locale.code;
    document.documentElement.dir = locale.dir;
  }, [pathname]);

  return null;
}
