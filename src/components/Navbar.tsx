"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/providers/theme-provider";
import { SUPPORTED_LOCALES } from "@/constants";
import { getDictionary } from "@/lib/i18n";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import {
  Sparkles,
  Globe,
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  LayoutGrid,
  LogIn,
  LogOut,
  User as UserIcon,
  Heart,
  LayoutDashboard,
} from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [mobileTemplatesOpen, setMobileTemplatesOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const langRef = useRef<HTMLDivElement>(null);
  const templatesRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Load Supabase user session on mount and keep in sync
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
    setTemplatesOpen(false);
    setMobileTemplatesOpen(false);
    setUserMenuOpen(false);
  }, [pathname]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (templatesRef.current && !templatesRef.current.contains(event.target as Node)) {
        setTemplatesOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
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

  const pathParts = pathname.split("/");
  const currentLocale = pathParts[1] || "en";
  const activeLocaleObj = SUPPORTED_LOCALES.find((l) => l.code === currentLocale) || SUPPORTED_LOCALES[0];
  const t = getDictionary(currentLocale).common;

  const handleLanguageChange = (localeCode: string) => {
    setLangDropdownOpen(false);
    if (localeCode === currentLocale) return;
    const isLocaleSegment = SUPPORTED_LOCALES.some((l) => l.code === pathParts[1]);
    const subPath = isLocaleSegment ? pathParts.slice(2).join("/") : pathParts.slice(1).join("/");
    const newPath = subPath ? `/${localeCode}/${subPath}` : `/${localeCode}`;
    router.push(newPath);
  };

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    setUserMenuOpen(false);
    router.push(`/${currentLocale}`);
    router.refresh();
  };

  // User avatar initials
  const userInitials = user?.user_metadata?.full_name
    ? (user.user_metadata.full_name as string).split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)
    : user?.email?.slice(0, 2).toUpperCase() ?? "U";

  const menuItems: {
    name: Record<string, string>;
    href: string;
    badge?: Record<string, string>;
  }[] = [
    { name: { en: "Invoices", es: "Facturas", de: "Rechnungen", fr: "Factures", ar: "الفواتير" }, href: `/${currentLocale}/templates/invoices` },
    { name: { en: "Resumes", es: "Currículums", de: "Lebensläufe", fr: "CVs", ar: "السير الذاتية" }, href: `/${currentLocale}/templates/resumes` },
    { name: { en: "Contracts", es: "Contratos", de: "Verträge", fr: "Contrats", ar: "العقود" }, href: `/${currentLocale}/templates/contracts` },
    { name: { en: "Proposals", es: "Propuestas", de: "Vorschläge", fr: "Propositions", ar: "المقترحات" }, href: `/${currentLocale}/templates/proposals` },
    { name: { en: "Letters", es: "Cartas", de: "Briefe", fr: "Lettres", ar: "الرسائل" }, href: `/${currentLocale}/templates/letters` },
    { name: { en: "Reports", es: "Informes", de: "Berichte", fr: "Rapports", ar: "التقارير" }, href: `/${currentLocale}/templates/reports` },
    { name: { en: "Tools", es: "Herramientas", de: "Tools", fr: "Outils", ar: "أدوات" }, href: `/${currentLocale}/tools` },
    { name: { en: "Blog", es: "Blog", de: "Blog", fr: "Blog", ar: "المدونة" }, href: `/${currentLocale}/blog` },
    { name: { en: "FAQ", es: "FAQ", de: "FAQ", fr: "FAQ", ar: "الأسئلة" }, href: `/${currentLocale}/faq` },
    { name: { en: "About", es: "Acerca de", de: "Über uns", fr: "À propos", ar: "من نحن" }, href: `/${currentLocale}/about` },
  ];

  const categoryItems = menuItems.slice(0, 6);
  const standaloneItems = menuItems.slice(6);
  const templatesLabel: Record<string, string> = {
    en: "Templates", es: "Plantillas", de: "Vorlagen", fr: "Modèles", ar: "القوالب",
  };
  const templatesLabelText = templatesLabel[currentLocale as keyof typeof templatesLabel] || templatesLabel.en;
  const localeName = (item: { name: Record<string, string> }) =>
    item.name[currentLocale as keyof typeof item.name] || item.name.en;
  const isTemplatesActive = pathname.startsWith(`/${currentLocale}/templates`);

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
              {/* Templates dropdown */}
              <div className="relative" ref={templatesRef}>
                <button
                  onClick={() => setTemplatesOpen((v) => !v)}
                  aria-expanded={templatesOpen}
                  aria-haspopup="menu"
                  className={`relative flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 py-1.5 px-1 rounded-md ${
                    isTemplatesActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  }`}
                >
                  <span>{templatesLabelText}</span>
                  <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition-transform duration-200 ${templatesOpen ? "rotate-180" : ""}`} />
                  {isTemplatesActive && (
                    <span className="absolute bottom-0 left-1 right-1 h-[2px] rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </button>
                {templatesOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 mt-2 w-56 z-50 origin-top-left rounded-2xl border border-zinc-200/65 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 p-1.5 shadow-xl backdrop-blur-md animate-in fade-in-50 slide-in-from-top-2 duration-200"
                  >
                    {categoryItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        onClick={() => setTemplatesOpen(false)}
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-xl transition-colors ${
                          pathname.startsWith(item.href)
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400"
                            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/70"
                        }`}
                      >
                        {localeName(item)}
                      </Link>
                    ))}
                    <div className="my-1 border-t border-zinc-100 dark:border-zinc-800" />
                    <Link
                      href={`/${currentLocale}/templates`}
                      role="menuitem"
                      onClick={() => setTemplatesOpen(false)}
                      className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-xl text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                    >
                      <LayoutGrid className="h-4 w-4" />
                      <span>{t.browseTemplates}</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Standalone links */}
              {standaloneItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 py-1.5 px-1 rounded-md ${
                    pathname.startsWith(item.href)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  }`}
                >
                  <span>{localeName(item)}</span>
                  {pathname.startsWith(item.href) && (
                    <span className="absolute bottom-0 left-1 right-1 h-[2px] rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
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

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
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

            {/* Auth: Sign In button OR user avatar */}
            {!mounted ? (
              <div className="h-9 w-20 rounded-xl bg-zinc-100 dark:bg-zinc-800 animate-pulse" />
            ) : user ? (
              /* ── User avatar dropdown ── */
              <div className="relative" ref={userMenuRef}>
                <button
                  id="user-menu-btn"
                  onClick={() => setUserMenuOpen((v) => !v)}
                  className="flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-black">
                    {userInitials}
                  </div>
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200 max-w-[120px] truncate">
                    {user.user_metadata?.full_name || user.email?.split("@")[0]}
                  </span>
                  <ChevronDown className={`h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ${userMenuOpen ? "rotate-180" : ""}`} />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 z-50 origin-top-right rounded-2xl border border-zinc-200/65 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 p-1.5 shadow-xl backdrop-blur-md animate-in fade-in-50 slide-in-from-top-2 duration-200">
                    <div className="px-3 py-2 mb-1 border-b border-zinc-100 dark:border-zinc-800">
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 truncate">{user.email}</p>
                    </div>
                    <Link
                      href={`/${currentLocale}/dashboard`}
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 transition-colors"
                    >
                      <LayoutDashboard className="h-4 w-4 text-zinc-400" />
                      Dashboard
                    </Link>
                    <Link
                      href={`/${currentLocale}/dashboard`}
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 transition-colors"
                    >
                      <Heart className="h-4 w-4 text-zinc-400" />
                      My Favorites
                    </Link>
                    <div className="my-1 border-t border-zinc-100 dark:border-zinc-800" />
                    <button
                      id="btn-signout"
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* ── Sign In button ── */
              <Link
                id="btn-signin-nav"
                href={`/${currentLocale}/login`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
            )}

            {/* Browse Templates CTA */}
            <Link
              href={`/${currentLocale}/templates`}
              className="flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-sm font-bold text-white dark:text-zinc-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <LayoutGrid className="h-4 w-4" />
              <span>{t.browseTemplates}</span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-3">
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200/60 dark:border-zinc-800/60 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-4 py-5 space-y-4 shadow-inner">
          <div className="space-y-1">
            {/* Templates group */}
            <button
              onClick={() => setMobileTemplatesOpen((v) => !v)}
              aria-expanded={mobileTemplatesOpen}
              className={`flex w-full items-center justify-between px-3.5 py-2.5 text-base font-bold rounded-xl transition-all ${
                isTemplatesActive
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400"
                  : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/50"
              }`}
            >
              <span>{templatesLabelText}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileTemplatesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileTemplatesOpen && (
              <div className="pl-3 space-y-1">
                {categoryItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-3.5 py-2 text-sm font-semibold rounded-xl transition-all ${
                      pathname.startsWith(item.href)
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400"
                        : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900/50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {localeName(item)}
                  </Link>
                ))}
                <Link
                  href={`/${currentLocale}/templates`}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold rounded-xl text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LayoutGrid className="h-4 w-4" />
                  <span>{t.browseTemplates}</span>
                </Link>
              </div>
            )}

            {/* Standalone links */}
            {standaloneItems.map((item) => (
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
                <span>{localeName(item)}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Language Selector */}
          <div className="border-t border-zinc-100 dark:border-zinc-850 pt-4">
            <p className="px-3.5 text-xs font-bold uppercase tracking-wider text-zinc-400">{t.selectRegion}</p>
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

          {/* Mobile auth */}
          <div className="border-t border-zinc-100 dark:border-zinc-850 pt-4 space-y-2">
            {user ? (
              <>
                <div className="flex items-center gap-3 px-3.5 py-2">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-black shrink-0">
                    {userInitials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-zinc-900 dark:text-white truncate">
                      {user.user_metadata?.full_name || user.email?.split("@")[0]}
                    </p>
                    <p className="text-xs text-zinc-400 truncate">{user.email}</p>
                  </div>
                </div>
                <Link
                  href={`/${currentLocale}/dashboard`}
                  className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-bold rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LayoutDashboard className="h-4 w-4" /> Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex w-full items-center gap-2 px-3.5 py-2.5 text-sm font-bold rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all"
                >
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </>
            ) : (
              <Link
                href={`/${currentLocale}/login`}
                className="flex w-full items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-md shadow-blue-500/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogIn className="h-5 w-5" />
                <span>Sign In / Create Account</span>
              </Link>
            )}
            <Link
              href={`/${currentLocale}/templates`}
              className="flex w-full items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LayoutGrid className="h-5 w-5" />
              <span>{t.browseTemplates}</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
