"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/providers/theme-provider";
import { SUPPORTED_LOCALES } from "@/constants";
import { getDictionary } from "@/lib/i18n";
import { createClient } from "@/lib/supabase/client";
import { logoAlt } from "@/lib/image-alt";
import { TOOL_CATEGORIES, toolsByCategory } from "@/data/tools";
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
  Wrench,
  LogIn,
  LogOut,
  Heart,
  LayoutDashboard,
  GitCompare,
  Users,
  Briefcase,
  Package,
  FolderTree,
  HelpCircle,
} from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [mobileTemplatesOpen, setMobileTemplatesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [aiToolsOpen, setAiToolsOpen] = useState(false);
  const [mobileAiToolsOpen, setMobileAiToolsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const langRef = useRef<HTMLDivElement>(null);
  const templatesRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const aiToolsRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Load Supabase user session on mount and keep in sync
  useEffect(() => {
    const supabase = createClient();
    if (!supabase) return; // Supabase not configured — stay signed-out
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
    setToolsOpen(false);
    setMobileToolsOpen(false);
    setAiToolsOpen(false);
    setMobileAiToolsOpen(false);
    setExploreOpen(false);
    setMobileExploreOpen(false);
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
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
      if (aiToolsRef.current && !aiToolsRef.current.contains(event.target as Node)) {
        setAiToolsOpen(false);
      }
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setExploreOpen(false);
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
    if (supabase) await supabase.auth.signOut();
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
    { name: { en: "Resumes & CVs", es: "Currículums", de: "Lebensläufe", fr: "CVs", ar: "السير الذاتية" }, href: `/${currentLocale}/templates/resumes` },
    { name: { en: "Contracts", es: "Contratos", de: "Verträge", fr: "Contrats", ar: "العقود" }, href: `/${currentLocale}/templates/contracts` },
    { name: { en: "Proposals", es: "Propuestas", de: "Vorschläge", fr: "Propositions", ar: "المقترحات" }, href: `/${currentLocale}/templates/proposals` },
    { name: { en: "Letters & Memos", es: "Cartas", de: "Briefe", fr: "Lettres", ar: "الرسائل" }, href: `/${currentLocale}/templates/letters` },
    { name: { en: "Reports", es: "Informes", de: "Berichte", fr: "Rapports", ar: "التقارير" }, href: `/${currentLocale}/templates/reports` },
    { name: { en: "Business Plans", es: "Planes de negocio", de: "Businesspläne", fr: "Plans d'affaires", ar: "خطط العمل" }, href: `/${currentLocale}/templates/business-plans` },
    { name: { en: "Quotations", es: "Cotizaciones", de: "Angebote", fr: "Devis", ar: "عروض الأسعار" }, href: `/${currentLocale}/templates/quotations` },
    { name: { en: "Tools", es: "Herramientas", de: "Tools", fr: "Outils", ar: "أدوات" }, href: `/${currentLocale}/tools` },
    { name: { en: "Services", es: "Servicios", de: "Dienste", fr: "Services", ar: "الخدمات" }, href: `/${currentLocale}/services` },
    { name: { en: "Products", es: "Productos", de: "Produkte", fr: "Produits", ar: "المنتجات" }, href: `/${currentLocale}/products` },
    { name: { en: "Categories", es: "Categorías", de: "Kategorien", fr: "Catégories", ar: "الفئات" }, href: `/${currentLocale}/category` },
    { name: { en: "Blog", es: "Blog", de: "Blog", fr: "Blog", ar: "المدونة" }, href: `/${currentLocale}/blog` },
    { name: { en: "FAQ", es: "FAQ", de: "FAQ", fr: "FAQ", ar: "الأسئلة" }, href: `/${currentLocale}/faq` },
    { name: { en: "About", es: "Acerca de", de: "Über uns", fr: "À propos", ar: "من نحن" }, href: `/${currentLocale}/about` },
    { name: { en: "Contact", es: "Contacto", de: "Kontakt", fr: "Contact", ar: "اتصل بنا" }, href: `/${currentLocale}/contact` },
  ];

  const categoryItems = menuItems.slice(0, 8);
  const toolsItem = menuItems[8]; // "Tools" — rendered as its own dropdown
  const standaloneItems = [menuItems[12], menuItems[14], menuItems[15]]; // Blog, About, Contact

  const catalogItems = [
    {
      href: `/${currentLocale}/services`,
      name: { en: "Services", es: "Servicios", de: "Dienste", fr: "Services", ar: "الخدمات" },
      desc: { en: "AI development & professional services", es: "Servicios de desarrollo y soluciones IA", de: "KI-Entwicklung & Dienste", fr: "Services de développement IA", ar: "خدمات التطوير والذكاء الاصطناعي" },
      icon: Briefcase,
    },
    {
      href: `/${currentLocale}/products`,
      name: { en: "Products", es: "Productos", de: "Produkte", fr: "Produits", ar: "المنتجات" },
      desc: { en: "Explore our full suite of AI product tools", es: "Explora nuestra suite de productos de IA", de: "Entdecken Sie unsere KI-Produktpalette", fr: "Découvrez notre suite de produits IA", ar: "استكشف مجموعتنا الكاملة من أدوات الذكاء الاصطناعي" },
      icon: Package,
    },
    {
      href: `/${currentLocale}/category`,
      name: { en: "Categories", es: "Categorías", de: "Kategorien", fr: "Catégories", ar: "الفئات" },
      desc: { en: "Browse by document & tool categories", es: "Explorar por categorías de documentos y herramientas", de: "Nach Kategorien durchsuchen", fr: "Parcourir par catégories", ar: "تصفح حسب فئات المستندات والأدوات" },
      icon: FolderTree,
    },
    {
      href: `/${currentLocale}/faq`,
      name: { en: "FAQ & Help", es: "FAQ y Ayuda", de: "FAQ & Hilfe", fr: "FAQ & Aide", ar: "الأسئلة الشائعة" },
      desc: { en: "Frequently asked questions & guidance", es: "Preguntas frecuentes y ayuda", de: "Häufig gestellte Fragen", fr: "Foire aux questions", ar: "الأسئلة المتكررة والتعليمات" },
      icon: HelpCircle,
    },
  ];

  const templatesLabel: Record<string, string> = {
    en: "Templates", es: "Plantillas", de: "Vorlagen", fr: "Modèles", ar: "القوالب",
  };
  const templatesLabelText = templatesLabel[currentLocale as keyof typeof templatesLabel] || templatesLabel.en;
  const localeName = (item: { name: Record<string, string> }) =>
    item.name[currentLocale as keyof typeof item.name] || item.name.en;
  const isTemplatesActive = pathname.startsWith(`/${currentLocale}/templates`);

  // Tools dropdown
  const toolsHref = `/${currentLocale}/tools`;
  const toolsLabelText = localeName(toolsItem);
  const isToolsActive = pathname.startsWith(toolsHref);
  const catLabel = (rec: Record<string, string>) => rec[currentLocale] || rec.en;
  const allToolsLabel: Record<string, string> = {
    en: "All tools", es: "Todas las herramientas", de: "Alle Tools", fr: "Tous les outils", ar: "جميع الأدوات",
  };
  const allToolsText = allToolsLabel[currentLocale as keyof typeof allToolsLabel] || allToolsLabel.en;

  // Dedicated AI Tools dropdown
  const aiTools = toolsByCategory("ai");
  const aiToolsLabel: Record<string, string> = {
    en: "AI Tools", es: "Herramientas IA", de: "KI-Tools", fr: "Outils IA", ar: "أدوات الذكاء الاصطناعي",
  };
  const aiToolsText = aiToolsLabel[currentLocale as keyof typeof aiToolsLabel] || aiToolsLabel.en;
  const aiToolsHref = `${toolsHref}#ai`;
  const isAiActive = aiTools.some((tl) => pathname === `/${currentLocale}/tools/${tl.slug}`);
  const allAiToolsLabel: Record<string, string> = {
    en: "All AI tools", es: "Todas las herramientas IA", de: "Alle KI-Tools", fr: "Tous les outils IA", ar: "جميع أدوات الذكاء الاصطناعي",
  };
  const allAiToolsText = allAiToolsLabel[currentLocale as keyof typeof allAiToolsLabel] || allAiToolsLabel.en;

  const masterLandingItems = [
    { title: "AI Resume Builder", slug: "ai-resume-builder" },
    { title: "ATS Resume Checker", slug: "ats-resume-checker" },
    { title: "Resume Templates", slug: "resume-templates" },
    { title: "AI Invoice Generator", slug: "ai-invoice-generator" },
    { title: "GST Invoice Generator", slug: "gst-invoice-generator" },
    { title: "Invoice Templates", slug: "invoice-templates" },
    { title: "AI Cover Letter Generator", slug: "ai-cover-letter-generator" },
    { title: "AI Business Proposal", slug: "business-proposal-generator" },
    { title: "AI Contract Generator", slug: "ai-contract-generator" },
    { title: "NDA Generator", slug: "nda-generator" },
    { title: "AI Letter Generator", slug: "ai-letter-generator" },
    { title: "AI Email Writer", slug: "ai-email-writer" },
    { title: "AI Blog Generator", slug: "ai-blog-generator" },
    { title: "AI Content Generator", slug: "ai-content-generator" },
  ];

  const isExploreActive =
    masterLandingItems.some((item) => pathname.endsWith(item.slug)) ||
    pathname.startsWith(`/${currentLocale}/compare`) ||
    pathname.startsWith(`/${currentLocale}/use-cases`) ||
    catalogItems.some((item) => pathname.startsWith(item.href));

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl transition-all duration-300 shadow-sm">
      {/* Decorative top colored line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo Brand — fixed on the far left, never squeezed or hidden */}
          <div className="flex items-center gap-2 shrink-0 min-w-fit">
            <Link
              href={`/${currentLocale}`}
              className="group flex items-center gap-2 font-bold text-lg xl:text-xl tracking-tight text-blue-600 dark:text-blue-400 shrink-0"
            >
              {/* Theme-aware logo: light mark in light mode, dark mark in dark mode */}
              <Image
                src="/Templix-ai-light.png"
                alt={logoAlt("light")}
                title="Templix AI Logo"
                width={44}
                height={44}
                priority
                loading="eager"
                className="h-11 w-11 rounded-xl object-contain dark:hidden shrink-0 group-hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/Templix-ai-dark.png"
                alt={logoAlt("dark")}
                title="Templix AI Logo"
                width={44}
                height={44}
                priority
                loading="eager"
                aria-hidden="true"
                className="hidden h-11 w-11 rounded-xl object-contain dark:block shrink-0 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="font-extrabold text-base xl:text-lg tracking-tight text-zinc-900 dark:text-white shrink-0">
                Templix AI
              </span>
            </Link>
          </div>

          {/* Desktop Menu items */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            {/* Templates dropdown */}
            <div className="relative" ref={templatesRef}>
              <button
                onClick={() => setTemplatesOpen((v) => !v)}
                aria-expanded={templatesOpen}
                aria-haspopup="menu"
                className={`relative flex items-center gap-1 text-xs xl:text-sm font-semibold transition-all duration-200 py-1.5 px-1 rounded-md whitespace-nowrap shrink-0 ${
                  isTemplatesActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                }`}
              >
                <span className="whitespace-nowrap">{templatesLabelText}</span>
                <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition-transform duration-200 shrink-0 ${templatesOpen ? "rotate-180" : ""}`} />
                {isTemplatesActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-[2px] rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </button>
              {templatesOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-64 z-50 origin-top-left rounded-2xl border border-zinc-200/65 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 p-1.5 shadow-xl backdrop-blur-md animate-in fade-in-50 slide-in-from-top-2 duration-200"
                >
                  {categoryItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setTemplatesOpen(false)}
                      className={`flex items-center px-3 py-2 text-xs font-semibold rounded-xl transition-colors ${
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
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                  >
                    <LayoutGrid className="h-4 w-4 shrink-0" />
                    <span>{t.browseTemplates}</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Tools dropdown */}
            <div className="relative" ref={toolsRef}>
              <button
                onClick={() => setToolsOpen((v) => !v)}
                aria-expanded={toolsOpen}
                aria-haspopup="menu"
                className={`relative flex items-center gap-1 text-xs xl:text-sm font-semibold transition-all duration-200 py-1.5 px-1 rounded-md whitespace-nowrap shrink-0 ${
                  isToolsActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                }`}
              >
                <span className="whitespace-nowrap">{toolsLabelText}</span>
                <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition-transform duration-200 shrink-0 ${toolsOpen ? "rotate-180" : ""}`} />
                {isToolsActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-[2px] rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </button>
              {toolsOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-56 z-50 origin-top-left rounded-2xl border border-zinc-200/65 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 p-1.5 shadow-xl backdrop-blur-md animate-in fade-in-50 slide-in-from-top-2 duration-200"
                >
                  {TOOL_CATEGORIES.map((cat) => {
                    const isAi = cat.key === "ai";
                    return (
                      <Link
                        key={cat.key}
                        href={`${toolsHref}#${cat.key}`}
                        role="menuitem"
                        onClick={() => setToolsOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-xl transition-colors ${isAi ? "text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950/30" : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/70"}`}
                      >
                        <span>{catLabel(cat.label)}</span>
                        {isAi && (
                          <span className="ml-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                            AI
                          </span>
                        )}
                      </Link>
                    );
                  })}
                  <div className="my-1 border-t border-zinc-100 dark:border-zinc-800" />
                  <Link
                    href={toolsHref}
                    role="menuitem"
                    onClick={() => setToolsOpen(false)}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                  >
                    <Wrench className="h-4 w-4 shrink-0" />
                    <span>{allToolsText}</span>
                  </Link>
                </div>
              )}
            </div>

            {/* AI Tools dropdown */}
            <div className="relative" ref={aiToolsRef}>
              <button
                onClick={() => setAiToolsOpen((v) => !v)}
                aria-expanded={aiToolsOpen}
                aria-haspopup="menu"
                className={`relative flex items-center gap-1 text-xs xl:text-sm font-semibold transition-all duration-200 py-1.5 px-1 rounded-md whitespace-nowrap shrink-0 ${
                  isAiActive
                    ? "text-violet-600 dark:text-violet-400"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5 text-violet-500 shrink-0" />
                <span className="whitespace-nowrap">{aiToolsText}</span>
                <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition-transform duration-200 shrink-0 ${aiToolsOpen ? "rotate-180" : ""}`} />
                {isAiActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-[2px] rounded-full bg-violet-600 dark:bg-violet-400" />
                )}
              </button>
              {aiToolsOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-64 max-h-[70vh] overflow-y-auto z-50 origin-top-left rounded-2xl border border-violet-200/70 dark:border-violet-900/60 bg-white/95 dark:bg-zinc-900/95 p-1.5 shadow-xl backdrop-blur-md animate-in fade-in-50 slide-in-from-top-2 duration-200"
                >
                  {aiTools.map((tl) => (
                    <Link
                      key={tl.slug}
                      href={`/${currentLocale}/tools/${tl.slug}`}
                      role="menuitem"
                      onClick={() => setAiToolsOpen(false)}
                      className={`flex items-center px-3 py-2 text-xs font-semibold rounded-xl transition-colors ${
                        pathname === `/${currentLocale}/tools/${tl.slug}`
                          ? "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300"
                          : "text-zinc-700 dark:text-zinc-300 hover:bg-violet-50 dark:hover:bg-violet-950/30 hover:text-violet-700 dark:hover:text-violet-300"
                      }`}
                    >
                      {tl.title}
                    </Link>
                  ))}
                  <div className="my-1 border-t border-zinc-100 dark:border-zinc-800" />
                  <Link
                    href={aiToolsHref}
                    role="menuitem"
                    onClick={() => setAiToolsOpen(false)}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors"
                  >
                    <Sparkles className="h-4 w-4 shrink-0" />
                    <span>{allAiToolsText}</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Combined Explore Mega Dropdown (Services, Products, FAQ, Landing Pages, Use Cases & Comparisons) */}
            <div className="relative" ref={exploreRef}>
              <button
                onClick={() => setExploreOpen((v) => !v)}
                aria-expanded={exploreOpen}
                aria-haspopup="menu"
                className={`relative flex items-center gap-1 text-xs xl:text-sm font-semibold transition-all duration-200 py-1.5 px-1.5 rounded-md whitespace-nowrap shrink-0 ${
                  isExploreActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                <span className="whitespace-nowrap font-bold">Explore</span>
                <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition-transform duration-200 shrink-0 ${exploreOpen ? "rotate-180" : ""}`} />
                {isExploreActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-[2px] rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </button>
              {exploreOpen && (
                <div
                  role="menu"
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-[1040px] max-h-[85vh] overflow-y-auto z-50 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 p-5 shadow-2xl backdrop-blur-xl animate-in fade-in-50 slide-in-from-top-2 duration-200 grid grid-cols-4 gap-5"
                >
                  {/* Column 1: Services, Products & FAQ */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 pb-1 border-b border-zinc-100 dark:border-zinc-800">
                      <Briefcase className="h-4 w-4 text-blue-500 shrink-0" />
                      <span>Services & Products</span>
                    </div>
                    <div className="space-y-1.5">
                      {catalogItems.map((item) => {
                        const IconComponent = item.icon;
                        const isActive = pathname.startsWith(item.href);
                        const title = item.name[currentLocale as keyof typeof item.name] || item.name.en;
                        const description = item.desc[currentLocale as keyof typeof item.desc] || item.desc.en;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setExploreOpen(false)}
                            className={`flex items-start gap-2.5 p-2 rounded-xl transition-all ${
                              isActive
                                ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                                : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/70"
                            }`}
                          >
                            <div className={`p-1.5 rounded-lg shrink-0 ${
                              isActive
                                ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                            }`}>
                              <IconComponent className="h-3.5 w-3.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-bold truncate">{title}</div>
                              <div className="text-[10px] text-zinc-500 dark:text-zinc-400 line-clamp-1 font-normal">
                                {description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Column 2: Landing Pages */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 pb-1 border-b border-zinc-100 dark:border-zinc-800">
                      <LayoutGrid className="h-4 w-4 text-blue-500 shrink-0" />
                      <span>Landing Pages</span>
                    </div>
                    <div className="space-y-1">
                      {[
                        { title: "AI Resume Builder", slug: "ai-resume-builder" },
                        { title: "ATS Resume Checker", slug: "ats-resume-checker" },
                        { title: "Resume Templates", slug: "resume-templates" },
                        { title: "AI Invoice Generator", slug: "ai-invoice-generator" },
                        { title: "GST Invoice Generator", slug: "gst-invoice-generator" },
                        { title: "Invoice Templates", slug: "invoice-templates" },
                        { title: "AI Cover Letter Generator", slug: "ai-cover-letter-generator" },
                        { title: "AI Business Proposal", slug: "business-proposal-generator" },
                        { title: "AI Contract Generator", slug: "ai-contract-generator" },
                        { title: "NDA Generator", slug: "nda-generator" },
                      ].map((item) => (
                        <Link
                          key={item.slug}
                          href={`/${currentLocale}/${item.slug}`}
                          onClick={() => setExploreOpen(false)}
                          className="block px-2.5 py-1.5 text-xs font-semibold rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                      <Link
                        href={`/${currentLocale}/use-cases`}
                        onClick={() => setExploreOpen(false)}
                        className="block px-2.5 py-2 text-xs font-extrabold text-blue-600 dark:text-blue-400 hover:underline pt-2 border-t border-zinc-100 dark:border-zinc-800"
                      >
                        All 30 Landing Pages →
                      </Link>
                    </div>
                  </div>

                  {/* Column 3: Use Cases */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 pb-1 border-b border-zinc-100 dark:border-zinc-800">
                      <Users className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Use Cases</span>
                    </div>
                    <div className="space-y-1">
                      {[
                        { title: "Resume Builder for Students", slug: "use-cases/resume-builder-for-students" },
                        { title: "Resume Builder for Software Engineers", slug: "use-cases/resume-builder-for-software-engineers" },
                        { title: "Resume Builder for Freshers", slug: "use-cases/resume-builder-for-freshers" },
                        { title: "Resume Builder for Teachers", slug: "use-cases/resume-builder-for-teachers" },
                        { title: "Invoice Generator for Freelancers", slug: "use-cases/invoice-generator-for-freelancers" },
                        { title: "Invoice Generator for Small Business", slug: "use-cases/invoice-generator-for-small-business" },
                        { title: "Invoice Generator for Consultants", slug: "use-cases/invoice-generator-for-consultants" },
                        { title: "GST Invoice Generator India", slug: "use-cases/gst-invoice-generator-india" },
                        { title: "Proposal Generator for Agencies", slug: "use-cases/proposal-generator-for-marketing-agencies" },
                        { title: "Contract Generator for Freelancers", slug: "use-cases/contract-generator-for-freelancers" },
                      ].map((item) => (
                        <Link
                          key={item.slug}
                          href={`/${currentLocale}/${item.slug}`}
                          onClick={() => setExploreOpen(false)}
                          className="block px-2.5 py-1.5 text-xs font-semibold rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                      <Link
                        href={`/${currentLocale}/use-cases`}
                        onClick={() => setExploreOpen(false)}
                        className="block px-2.5 py-2 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline pt-2 border-t border-zinc-100 dark:border-zinc-800"
                      >
                        All 93 Use Cases →
                      </Link>
                    </div>
                  </div>

                  {/* Column 4: Software Comparisons */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 pb-1 border-b border-zinc-100 dark:border-zinc-800">
                      <GitCompare className="h-4 w-4 text-indigo-500 shrink-0" />
                      <span>Software Comparisons</span>
                    </div>
                    <div className="space-y-1">
                      {[
                        { title: "Templix AI vs Canva", slug: "templix-ai-vs-canva" },
                        { title: "Templix AI vs Microsoft 365", slug: "templix-ai-vs-microsoft-365" },
                        { title: "Templix AI vs ChatGPT", slug: "templix-ai-vs-chatgpt" },
                        { title: "Templix AI vs Google Docs", slug: "templix-ai-vs-google-docs" },
                        { title: "Templix AI vs Notion AI", slug: "templix-ai-vs-notion-ai" },
                        { title: "Templix AI vs Adobe Express", slug: "templix-ai-vs-adobe-express" },
                        { title: "Templix AI vs Zety", slug: "templix-ai-vs-zety" },
                        { title: "Templix AI vs PandaDoc", slug: "templix-ai-vs-pandadoc" },
                        { title: "Templix AI vs DocuSign", slug: "templix-ai-vs-docusign" },
                        { title: "Templix AI vs GrammarlyGO", slug: "templix-ai-vs-grammarlygo" },
                      ].map((item) => (
                        <Link
                          key={item.slug}
                          href={`/${currentLocale}/compare/${item.slug}`}
                          onClick={() => setExploreOpen(false)}
                          className="block px-2.5 py-1.5 text-xs font-semibold rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                      <Link
                        href={`/${currentLocale}/compare`}
                        onClick={() => setExploreOpen(false)}
                        className="block px-2.5 py-2 text-xs font-extrabold text-indigo-600 dark:text-indigo-400 hover:underline pt-2 border-t border-zinc-100 dark:border-zinc-800"
                      >
                        All 86 Comparisons →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Standalone links */}
            {standaloneItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-1 text-xs xl:text-sm font-semibold transition-all duration-200 py-1.5 px-1 rounded-md whitespace-nowrap shrink-0 ${
                  pathname.startsWith(item.href)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                }`}
              >
                <span className="whitespace-nowrap">{localeName(item)}</span>
                {pathname.startsWith(item.href) && (
                  <span className="absolute bottom-0 left-1 right-1 h-[2px] rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector — hidden while only one locale is served */}
            {SUPPORTED_LOCALES.length > 1 && (
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
            )}

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
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{user.email}</p>
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
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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
              // Icon-only trigger: it needs an explicit name, expanded state and
              // a visible focus ring (focus:outline-none left keyboard users
              // with no indicator). dark:border-zinc-850 was a no-op — Tailwind
              // has no 850 step — so the dark border never rendered.
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-zinc-200/60 dark:border-zinc-800/60 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-4 py-5 space-y-4 shadow-inner">
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

            {/* Tools group */}
            <button
              onClick={() => setMobileToolsOpen((v) => !v)}
              aria-expanded={mobileToolsOpen}
              className={`flex w-full items-center justify-between px-3.5 py-2.5 text-base font-bold rounded-xl transition-all ${
                isToolsActive
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400"
                  : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/50"
              }`}
            >
              <span>{toolsLabelText}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileToolsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileToolsOpen && (
              <div className="pl-3 space-y-1">
                {TOOL_CATEGORIES.map((cat) => {
                  const isAi = cat.key === "ai";
                  return (
                    <Link
                      key={cat.key}
                      href={`${toolsHref}#${cat.key}`}
                      className={`flex items-center justify-between px-3.5 py-2 text-sm font-semibold rounded-xl transition-all ${isAi ? "text-violet-700 hover:bg-violet-50 dark:text-violet-300 dark:hover:bg-violet-950/30" : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900/50"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{catLabel(cat.label)}</span>
                      {isAi && (
                        <span className="ml-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                          AI
                        </span>
                      )}
                    </Link>
                  );
                })}
                <Link
                  href={toolsHref}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold rounded-xl text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Wrench className="h-4 w-4" />
                  <span>{allToolsText}</span>
                </Link>
              </div>
            )}

            {/* AI Tools group */}
            <button
              onClick={() => setMobileAiToolsOpen((v) => !v)}
              aria-expanded={mobileAiToolsOpen}
              className={`flex w-full items-center justify-between px-3.5 py-2.5 text-base font-bold rounded-xl transition-all ${
                isAiActive
                  ? "bg-violet-50 text-violet-600 dark:bg-violet-950/30 dark:text-violet-400"
                  : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/50"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-violet-500" />
                {aiToolsText}
                <span aria-hidden="true" className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">AI</span>
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileAiToolsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileAiToolsOpen && (
              <div className="pl-3 space-y-1">
                {aiTools.map((tl) => (
                  <Link
                    key={tl.slug}
                    href={`/${currentLocale}/tools/${tl.slug}`}
                    className={`flex items-center px-3.5 py-2 text-sm font-semibold rounded-xl transition-all ${
                      pathname === `/${currentLocale}/tools/${tl.slug}`
                        ? "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300"
                        : "text-zinc-600 hover:bg-violet-50 hover:text-violet-700 dark:text-zinc-400 dark:hover:bg-violet-950/30 dark:hover:text-violet-300"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {tl.title}
                  </Link>
                ))}
                <Link
                  href={aiToolsHref}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold rounded-xl text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>{allAiToolsText}</span>
                </Link>
              </div>
            )}

            {/* Explore group (Services, Products, FAQ, Landing Pages, Use Cases & Comparisons) */}
            <button
              onClick={() => setMobileExploreOpen((v) => !v)}
              aria-expanded={mobileExploreOpen}
              className={`flex w-full items-center justify-between px-3.5 py-2.5 text-base font-bold rounded-xl transition-all ${
                isExploreActive
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400"
                  : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/50"
              }`}
            >
              <span className="flex items-center gap-2">
                <LayoutGrid className="h-4 w-4 text-blue-500" />
                Explore
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileExploreOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileExploreOpen && (
              <div className="pl-3 space-y-4 pt-1">
                {/* 1. Services & Products */}
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-3.5 py-1">
                    Services & Products
                  </div>
                  <div className="space-y-1">
                    {catalogItems.map((item) => {
                      const IconComponent = item.icon;
                      const title = item.name[currentLocale as keyof typeof item.name] || item.name.en;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-blue-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <IconComponent className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                          <span>{title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Landing Pages */}
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-3.5 py-1">
                    Landing Pages
                  </div>
                  <div className="space-y-1">
                    {masterLandingItems.slice(0, 6).map((item) => (
                      <Link
                        key={item.slug}
                        href={`/${currentLocale}/${item.slug}`}
                        className="block px-3.5 py-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                    <Link
                      href={`/${currentLocale}/use-cases`}
                      className="block px-3.5 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All 30 Landing Pages →
                    </Link>
                  </div>
                </div>

                {/* 3. Use Cases */}
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3.5 py-1">
                    Use Cases
                  </div>
                  <div className="space-y-1">
                    {[
                      { title: "For Students", slug: "use-cases/resume-builder-for-students" },
                      { title: "For Software Engineers", slug: "use-cases/resume-builder-for-software-engineers" },
                      { title: "For Freelancers", slug: "use-cases/invoice-generator-for-freelancers" },
                      { title: "For Small Business", slug: "use-cases/invoice-generator-for-small-business" },
                      { title: "GST Invoice (India)", slug: "use-cases/gst-invoice-generator-india" },
                    ].map((item) => (
                      <Link
                        key={item.slug}
                        href={`/${currentLocale}/${item.slug}`}
                        className="block px-3.5 py-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                    <Link
                      href={`/${currentLocale}/use-cases`}
                      className="block px-3.5 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All 93 Use Cases →
                    </Link>
                  </div>
                </div>

                {/* 4. Software Comparisons */}
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 px-3.5 py-1">
                    Software Comparisons
                  </div>
                  <div className="space-y-1">
                    {[
                      { title: "vs Canva", slug: "templix-ai-vs-canva" },
                      { title: "vs Microsoft 365", slug: "templix-ai-vs-microsoft-365" },
                      { title: "vs ChatGPT", slug: "templix-ai-vs-chatgpt" },
                      { title: "vs Google Docs", slug: "templix-ai-vs-google-docs" },
                      { title: "vs Zety", slug: "templix-ai-vs-zety" },
                    ].map((item) => (
                      <Link
                        key={item.slug}
                        href={`/${currentLocale}/compare/${item.slug}`}
                        className="block px-3.5 py-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Templix AI {item.title}
                      </Link>
                    ))}
                    <Link
                      href={`/${currentLocale}/compare`}
                      className="block px-3.5 py-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All 86 Comparisons →
                    </Link>
                  </div>
                </div>
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

          {/* Mobile Language Selector — hidden while only one locale is served */}
          {SUPPORTED_LOCALES.length > 1 && (
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
          )}

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
