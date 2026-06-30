"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
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
  Layout,
  LogIn,
  LogOut,
  User,
  Settings,
} from "lucide-react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Extract current locale from pathname
  const pathParts = pathname.split("/");
  const currentLocale = pathParts[1] || "en";
  const activeLocaleObj = SUPPORTED_LOCALES.find((l) => l.code === currentLocale) || SUPPORTED_LOCALES[0];

  const handleLanguageChange = (localeCode: string) => {
    setLangDropdownOpen(false);
    if (localeCode === currentLocale) return;

    // Reconstruct the path with the new locale segment.
    // If pathParts[1] is a known locale code, replace it; otherwise prepend.
    const isLocaleSegment = SUPPORTED_LOCALES.some((l) => l.code === pathParts[1]);
    const subPath = isLocaleSegment ? pathParts.slice(2).join("/") : pathParts.slice(1).join("/");
    const newPath = subPath ? `/${localeCode}/${subPath}` : `/${localeCode}`;
    router.push(newPath);
  };

  const getSubPath = () => {
    return pathParts.slice(2).join("/");
  };

  const menuItems = [
    { name: { en: "Templates", es: "Plantillas", de: "Vorlagen", fr: "Modèles", ar: "القوالب" }, href: `/${currentLocale}/templates` },
    { name: { en: "Blog", es: "Blog", de: "Blog", fr: "Blog", ar: "المدونة" }, href: `/${currentLocale}/blog` },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href={`/${currentLocale}`} className="flex items-center gap-2 font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400">
              <Sparkles className="h-6 w-6 text-blue-500 animate-pulse" />
              <span>Templix<span className="text-zinc-900 dark:text-white font-semibold">AI</span></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400 transition-colors"
                >
                  {item.name[currentLocale as keyof typeof item.name] || item.name.en}
                </Link>
              ))}
            </div>
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
              >
                <Globe className="h-4 w-4" />
                <span>{activeLocaleObj.name}</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-40 origin-top-right rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-1 shadow-lg">
                  {SUPPORTED_LOCALES.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => handleLanguageChange(locale.code)}
                      className={`flex w-full items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                        locale.code === currentLocale
                          ? "bg-blue-600 text-white"
                          : "text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700"
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
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              {!mounted ? (
                <span className="block h-4 w-4" />
              ) : theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* User Session Handler */}
            {status === "loading" ? (
              <div className="h-9 w-20 bg-zinc-100 dark:bg-zinc-800 animate-pulse rounded-lg" />
            ) : session?.user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {session.user.image ? (
                    <img
                      src={session.user.image}
                      alt={session.user.name || "User"}
                      className="h-8 w-8 rounded-full object-cover border border-zinc-200 dark:border-zinc-700"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                      {session.user.name?.charAt(0) || session.user.email?.charAt(0) || "U"}
                    </div>
                  )}
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-1.5 shadow-xl ring-1 ring-black/5">
                    <div className="px-3 py-2 border-b border-zinc-100 dark:border-zinc-800">
                      <p className="text-sm font-semibold truncate text-zinc-800 dark:text-zinc-200">
                        {session.user.name || "User"}
                      </p>
                      <p className="text-xs truncate text-zinc-500 dark:text-zinc-400">
                        {session.user.email}
                      </p>
                    </div>

                    <Link
                      href={`/${currentLocale}/dashboard`}
                      className="flex items-center gap-2 px-3 py-2 mt-1.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <Layout className="h-4 w-4 opacity-70" />
                      <span>Dashboard</span>
                    </Link>

                    {((session.user as any).role === "ADMIN" || (session.user as any).role === "OWNER") && (
                      <Link
                        href={`/${currentLocale}/admin`}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                        onClick={() => setUserDropdownOpen(false)}
                      >
                        <Settings className="h-4 w-4 opacity-70" />
                        <span>Admin Panel</span>
                      </Link>
                    )}

                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        signOut({ callbackUrl: `/${currentLocale}` });
                      }}
                      className="flex w-full items-center gap-2 px-3 py-2 mt-1 border-t border-zinc-100 dark:border-zinc-800 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={`/${currentLocale}/login`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-sm font-semibold text-white shadow-md shadow-blue-500/10 transition-all"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {!mounted ? (
                <span className="block h-4 w-4" />
              ) : theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-4 space-y-3 transition-all">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium rounded-lg text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name[currentLocale as keyof typeof item.name] || item.name.en}
              </Link>
            ))}
          </div>

          {/* Mobile Language selector */}
          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">Select Language</p>
            <div className="grid grid-cols-2 gap-1 mt-2">
              {SUPPORTED_LOCALES.map((locale) => (
                <button
                  key={locale.code}
                  onClick={() => handleLanguageChange(locale.code)}
                  className={`flex items-center px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    locale.code === currentLocale
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                  }`}
                >
                  {locale.name}
                </button>
              ))}
            </div>
          </div>

          {/* User Button */}
          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3">
            {session?.user ? (
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    {session.user.name?.charAt(0) || session.user.email?.charAt(0) || "U"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold truncate text-zinc-800 dark:text-zinc-200">
                      {session.user.name || "User"}
                    </p>
                    <p className="text-xs truncate text-zinc-500 dark:text-zinc-400">
                      {session.user.email}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/${currentLocale}/dashboard`}
                  className="flex items-center gap-2 px-3 py-2 text-base font-medium rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Layout className="h-5 w-5 opacity-70" />
                  <span>Dashboard</span>
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut({ callbackUrl: `/${currentLocale}` });
                  }}
                  className="flex w-full items-center gap-2 px-3 py-2 text-base font-medium rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <Link
                href={`/${currentLocale}/login`}
                className="flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogIn className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
