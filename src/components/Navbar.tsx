"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/providers/theme-provider";
import { SUPPORTED_LOCALES } from "@/constants";
import {
  Sparkles,
  Globe,
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  LayoutGrid,
} from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  }, [pathname]);

  // Click outside to close dropdowns (non-blocking)
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleTheme = () => {
    if (theme === "system") {
      const isSystemDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isSystemDark ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  const isDarkTheme =
    mounted &&
    (theme === "dark" ||
      (theme === "system" &&
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches));

  // Extract current locale from pathname
  const pathParts = pathname.split("/");
  const currentLocale = pathParts[1] || "en";
  const activeLocaleObj = SUPPORTED_LOCALES.find((l) => l.code === currentLocale) || SUPPORTED_LOCALES[0];

  const handleLanguageChange = (localeCode: string) => {
    setLangDropdownOpen(false);
    if (localeCode === currentLocale) return;

    const isLocaleSegment = SUPPORTED_LOCALES.some((l) => l.code === pathParts[1]);
    const subPath = isLocaleSegment ? pathParts.slice(2).join("/") : pathParts.slice(1).join("/");
    const newPath = subPath ? `/${localeCode}/${subPath}` : `/${localeCode}`;
    router.push(newPath);
  };

  const menuItems: {
    name: Record<string, string>;
    href: string;
    badge?: Record<string, string>;
  }[] = [
    { 
      name: { en: "Invoices", es: "Facturas", de: "Rechnungen", fr: "Factures", ar: "الفواتير" }, 
      href: `/${currentLocale}/templates/invoices`
    },
    { 
      name: { en: "Resumes", es: "Currículums", de: "Lebensläufe", fr: "CVs", ar: "السير الذاتية" }, 
      href: `/${currentLocale}/templates/resumes`
    },
    { 
      name: { en: "Contracts", es: "Contratos", de: "Verträge", fr: "Contrats", ar: "العقود" }, 
      href: `/${currentLocale}/templates/contracts`
    },
    { 
      name: { en: "Proposals", es: "Propuestas", de: "Vorschläge", fr: "Propositions", ar: "المقترحات" }, 
      href: `/${currentLocale}/templates/proposals`
    },
    {
      name: { en: "Letters", es: "Cartas", de: "Briefe", fr: "Lettres", ar: "الرسائل" },
      href: `/${currentLocale}/templates/letters`
    },
    {
      name: { en: "Reports", es: "Informes", de: "Berichte", fr: "Rapports", ar: "التقارير" },
      href: `/${currentLocale}/templates/reports`
    },
    {
      name: { en: "Blog", es: "Blog", de: "Blog", fr: "Blog", ar: "المدونة" },
      href: `/${currentLocale}/blog`
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl transition-all duration-300 shadow-sm">
      {/* Decorative top colored line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center gap-8">
            <Link 
              href={`/${currentLocale}`} 
              className="group flex items-center gap-2 font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400"
            >
              <div className="relative flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="h-5 w-5 text-white animate-pulse" />
              </div>
              <span className="transition-all duration-200 group-hover:translate-x-0.5">
                Templix<span className="text-zinc-900 dark:text-white font-extrabold">AI</span>
              </span>
            </Link>

            {/* Desktop Menu items */}
            <div className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 py-1.5 px-1 rounded-md ${
                    pathname.startsWith(item.href)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  }`}
                >
                  <span>{item.name[currentLocale as keyof typeof item.name] || item.name.en}</span>
                  {item.badge && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-sm shadow-blue-500/10">
                      {item.badge[currentLocale as keyof typeof item.badge] || item.badge.en}
                    </span>
                  )}
                  {pathname.startsWith(item.href) && (
                    <span className="absolute bottom-0 left-1 right-1 h-[2px] rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-700 dark:text-zinc-200 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <Globe className="h-4 w-4 text-zinc-500" />
                <span>{activeLocaleObj.name}</span>
                <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 z-50 origin-top-right rounded-2xl border border-zinc-200/65 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 p-1.5 shadow-xl backdrop-blur-md animate-in fade-in-50 slide-in-from-top-2 duration-200">
                  {SUPPORTED_LOCALES.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => handleLanguageChange(locale.code)}
                      className={`flex w-full items-center px-3 py-2 text-xs font-semibold rounded-xl transition-colors ${
                        locale.code === currentLocale
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                          : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
                      }`}
                    >
                      {locale.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              aria-label="Toggle theme"
            >
              {!mounted ? (
                <span className="block h-4 w-4" />
              ) : isDarkTheme ? (
                <Sun className="h-4 w-4 text-amber-400 rotate-0 scale-100 transition-all duration-300" />
              ) : (
                <Moon className="h-4 w-4 text-indigo-500 rotate-0 scale-100 transition-all duration-300" />
              )}
            </button>

            {/* Primary CTA — browse templates (no account needed) */}
            <Link
              href={`/${currentLocale}/templates`}
              className="flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <LayoutGrid className="h-4 w-4" />
              <span>Browse Templates</span>
            </Link>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mobile Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/50"
              aria-label="Toggle theme"
            >
              {!mounted ? (
                <span className="block h-4 w-4" />
              ) : isDarkTheme ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-indigo-500" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-850 text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/50 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200/60 dark:border-zinc-800/60 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-4 py-5 space-y-4 shadow-inner">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 text-base font-bold rounded-xl transition-all ${
                  pathname.startsWith(item.href)
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400"
                    : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{item.name[currentLocale as keyof typeof item.name] || item.name.en}</span>
                {item.badge && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-blue-600 text-white animate-pulse">
                    {item.badge[currentLocale as keyof typeof item.badge] || item.badge.en}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Language Selector */}
          <div className="border-t border-zinc-100 dark:border-zinc-850 pt-4">
            <p className="px-3.5 text-xs font-bold uppercase tracking-wider text-zinc-400">Select Region</p>
            <div className="grid grid-cols-2 gap-2 mt-2.5">
              {SUPPORTED_LOCALES.map((locale) => (
                <button
                  key={locale.code}
                  onClick={() => handleLanguageChange(locale.code)}
                  className={`flex items-center justify-center px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                    locale.code === currentLocale
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900"
                  }`}
                >
                  {locale.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile primary CTA — browse templates (no account needed) */}
          <div className="border-t border-zinc-100 dark:border-zinc-850 pt-4">
            <Link
              href={`/${currentLocale}/templates`}
              className="flex w-full items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-md shadow-blue-500/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LayoutGrid className="h-5 w-5" />
              <span>Browse Templates</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
