"use client";

import { useState, useCallback } from "react";
import {
  Sliders,
  DollarSign,
  BookOpen,
  Layers,
  BarChart3,
  Search,
  AlertTriangle,
  Download,
  Eye,
  Globe2,
  TrendingUp,
} from "lucide-react";

interface CategoryItem {
  slug: string;
  name: string;
  templatesCount: number;
}

interface BlogItem {
  slug: string;
  title: string;
  published: boolean;
}

interface AdminSettingsClientProps {
  categories: CategoryItem[];
  blogs: BlogItem[];
}

export default function AdminSettingsClient({ categories, blogs }: AdminSettingsClientProps) {
  const [activeTab, setActiveTab] = useState<"ads" | "flags" | "blogs" | "categories" | "analytics">("analytics");

  // Local state representing monetization ads toggles
  const [adConfig, setAdConfig] = useState({
    headerAd: true,
    sidebarAd: false,
    betweenTemplates: true,
    blogAds: false,
    footerAd: true,
  });

  // Local state representing experimental feature flags
  const [featureFlags, setFeatureFlags] = useState({
    experimentalAi: false,
    betaTemplates: true,
    premiumExports: false,
  });

  const toggleAd = useCallback((key: keyof typeof adConfig) => {
    setAdConfig((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const toggleFlag = useCallback((key: keyof typeof featureFlags) => {
    setFeatureFlags((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start">
      {/* Sidebar navigation */}
      <div className="lg:col-span-3 p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-1 flex flex-col">
        <button
          onClick={() => setActiveTab("analytics")}
          className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left ${
            activeTab === "analytics"
              ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
              : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
          }`}
        >
          <BarChart3 className="h-4 w-4" />
          <span>Dashboard Analytics</span>
        </button>

        <button
          onClick={() => setActiveTab("ads")}
          className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left ${
            activeTab === "ads"
              ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
              : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
          }`}
        >
          <DollarSign className="h-4 w-4" />
          <span>Ads Manager</span>
        </button>

        <button
          onClick={() => setActiveTab("flags")}
          className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left ${
            activeTab === "flags"
              ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
              : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
          }`}
        >
          <Sliders className="h-4 w-4" />
          <span>Feature Flags</span>
        </button>

        <button
          onClick={() => setActiveTab("blogs")}
          className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left ${
            activeTab === "blogs"
              ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
              : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
          }`}
        >
          <BookOpen className="h-4 w-4" />
          <span>Blogs Manager</span>
        </button>

        <button
          onClick={() => setActiveTab("categories")}
          className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left ${
            activeTab === "categories"
              ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
              : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
          }`}
        >
          <Layers className="h-4 w-4" />
          <span>Categories</span>
        </button>
      </div>

      {/* Main tab panel area */}
      <div className="lg:col-span-9 p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm">
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                <span>Dashboard Analytics & Logs</span>
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                Real-time tracking of platform search metrics, visitor intent, and file conversions.
              </p>
            </div>

            {/* Core analytics indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-zinc-400">Total Visits</span>
                <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mt-1">42,500</p>
              </div>
              <div className="p-4 border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-zinc-400">Conversions</span>
                <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mt-1">24.5%</p>
              </div>
              <div className="p-4 border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-zinc-400">Downloads</span>
                <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mt-1">4,320</p>
              </div>
              <div className="p-4 border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-zinc-400">AI Rewrites</span>
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-1">1,820</p>
              </div>
            </div>

            {/* Search terms metrics */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Top searches */}
              <div className="space-y-3">
                <h4 className="font-bold text-xs uppercase text-zinc-400 flex items-center gap-1.5">
                  <Search className="h-4 w-4 text-blue-500" />
                  <span>Top Search Phrases</span>
                </h4>
                <div className="border border-zinc-100 dark:border-zinc-800 rounded-xl overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 font-semibold text-zinc-600">
                        <th className="p-2.5">Keyword</th>
                        <th className="p-2.5 text-right">Queries</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { keyword: "invoice template", count: "4,500" },
                        { keyword: "software engineer resume", count: "3,200" },
                        { keyword: "service agreement", count: "1,800" },
                        { keyword: "freelancer contract", count: "1,200" },
                      ].map((s) => (
                        <tr key={s.keyword} className="border-b border-zinc-100 dark:border-zinc-800 last:border-b-0">
                          <td className="p-2.5 font-medium text-zinc-800 dark:text-zinc-200">"{s.keyword}"</td>
                          <td className="p-2.5 text-right text-zinc-500 font-bold">{s.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Zero-result searches */}
              <div className="space-y-3">
                <h4 className="font-bold text-xs uppercase text-zinc-400 flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span>No Result Searches</span>
                </h4>
                <div className="border border-zinc-100 dark:border-zinc-800 rounded-xl overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 font-semibold text-zinc-600">
                        <th className="p-2.5">Missed Keyword</th>
                        <th className="p-2.5 text-right">Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { keyword: "excel spreadsheet tax planner", count: "420" },
                        { keyword: "corporate business plan slides", count: "310" },
                        { keyword: "medical charts checklist", count: "180" },
                        { keyword: "real estate agreement california", count: "90" },
                      ].map((s) => (
                        <tr key={s.keyword} className="border-b border-zinc-100 dark:border-zinc-800 last:border-b-0">
                          <td className="p-2.5 font-medium text-zinc-800 dark:text-zinc-200">"{s.keyword}"</td>
                          <td className="p-2.5 text-right text-zinc-500 font-bold">{s.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Template conversion lists */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs uppercase text-zinc-400 flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>Conversion Funnels (Templates Detail)</span>
              </h4>
              <div className="border border-zinc-100 dark:border-zinc-800 rounded-xl overflow-x-auto text-xs">
                <table className="w-full min-w-[480px] text-left">
                  <thead>
                    <tr className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 font-semibold text-zinc-600">
                      <th className="p-3">Template</th>
                      <th className="p-3 text-center">
                        <span className="flex items-center gap-1 justify-center"><Eye className="h-3 w-3" /> Views</span>
                      </th>
                      <th className="p-3 text-center">
                        <span className="flex items-center gap-1 justify-center"><Download className="h-3 w-3" /> Downloads</span>
                      </th>
                      <th className="p-3 text-right">Conversion Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { title: "Software Engineer Resume", views: "12,000", downloads: "2,500", rate: "20.8%" },
                      { title: "Professional Invoice", views: "9,000", downloads: "1,800", rate: "20.0%" },
                      { title: "Freelance Service Agreement", views: "4,500", downloads: "540", rate: "12.0%" },
                    ].map((t) => (
                      <tr key={t.title} className="border-b border-zinc-100 dark:border-zinc-800 last:border-b-0">
                        <td className="p-3 font-semibold text-zinc-800 dark:text-zinc-200">{t.title}</td>
                        <td className="p-3 text-center text-zinc-500">{t.views}</td>
                        <td className="p-3 text-center text-zinc-500 font-medium">{t.downloads}</td>
                        <td className="p-3 text-right font-bold text-green-600 dark:text-green-400">{t.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Demographics */}
            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="space-y-3">
                <h4 className="font-bold text-xs uppercase text-zinc-400 flex items-center gap-1.5">
                  <Globe2 className="h-4 w-4 text-purple-500" />
                  <span>Geographic Distribution (Country Traffic)</span>
                </h4>
                <div className="space-y-2 text-xs">
                  {[
                    { country: "United States (US)", share: "35%", width: "w-[35%]" },
                    { country: "United Kingdom (UK)", share: "18%", width: "w-[18%]" },
                    { country: "India (IN)", share: "15%", width: "w-[15%]" },
                    { country: "Germany (DE)", share: "9%", width: "w-[9%]" },
                  ].map((c) => (
                    <div key={c.country} className="space-y-1">
                      <div className="flex justify-between font-semibold">
                        <span>{c.country}</span>
                        <span>{c.share}</span>
                      </div>
                      <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                        <div className={`bg-purple-500 h-full ${c.width}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-xs uppercase text-zinc-400 flex items-center gap-1.5">
                  <Sliders className="h-4 w-4 text-blue-500" />
                  <span>AI Prompt Presets Share</span>
                </h4>
                <div className="space-y-2 text-xs">
                  {[
                    { prompt: "Professional Corporate Tone", share: "65%", width: "w-[65%]", color: "bg-blue-500" },
                    { prompt: "Brief & Concise Tone", share: "22%", width: "w-[22%]", color: "bg-indigo-500" },
                    { prompt: "Friendly & Warm Tone", share: "13%", width: "w-[13%]", color: "bg-pink-500" },
                  ].map((p) => (
                    <div key={p.prompt} className="space-y-1">
                      <div className="flex justify-between font-semibold">
                        <span>{p.prompt}</span>
                        <span>{p.share}</span>
                      </div>
                      <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full ${p.color} ${p.width}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ads" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                <DollarSign className="h-5 w-5 text-blue-500" />
                <span>Monetization Ads Manager</span>
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                Toggle Google AdSense responsive slots globally across Templix AI layouts.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              {Object.entries(adConfig).map(([key, enabled]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-3.5 border border-zinc-100 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-950/20"
                >
                  <div>
                    <span className="font-semibold text-sm capitalize text-zinc-800 dark:text-zinc-200">
                      {key.replace(/([A-Z])/g, " $1").trim()} Slot
                    </span>
                    <p className="text-[10px] text-zinc-400 mt-0.5">
                      Mounts script tags at the predefined placeholder boundaries.
                    </p>
                  </div>

                  <button
                    onClick={() => toggleAd(key as keyof typeof adConfig)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      enabled ? "bg-blue-600" : "bg-zinc-200 dark:bg-zinc-800"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                        enabled ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "flags" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                <Sliders className="h-5 w-5 text-purple-500" />
                <span>Beta Toggles & Feature Flags</span>
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                Control the visibility of experimental modules on production builds.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              {Object.entries(featureFlags).map(([key, enabled]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-3.5 border border-zinc-100 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-950/20"
                >
                  <div>
                    <span className="font-semibold text-sm capitalize text-zinc-800 dark:text-zinc-200">
                      {key.replace(/([A-Z])/g, " $1").trim()} Feature
                    </span>
                    <p className="text-[10px] text-zinc-400 mt-0.5">
                      Toggle active states without modifying config environment keys.
                    </p>
                  </div>

                  <button
                    onClick={() => toggleFlag(key as keyof typeof featureFlags)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      enabled ? "bg-purple-600" : "bg-zinc-200 dark:bg-zinc-800"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                        enabled ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "blogs" && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                <BookOpen className="h-5 w-5 text-green-500" />
                <span>SEO Content logs</span>
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                Lists all article directories mapped to the SEO programmatic content engine.
              </p>
            </div>

            <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-x-auto text-xs">
              <table className="w-full min-w-[420px] text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 font-semibold text-zinc-700 dark:text-zinc-300">
                    <th className="p-3">Title</th>
                    <th className="p-3">Slug</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((b) => (
                    <tr key={b.slug} className="border-b border-zinc-100 dark:border-zinc-800 last:border-b-0">
                      <td className="p-3 font-semibold text-zinc-800 dark:text-zinc-200">{b.title}</td>
                      <td className="p-3 text-zinc-500 dark:text-zinc-400">/{b.slug}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded font-bold text-[9px] uppercase tracking-wider ${
                          b.published
                            ? "bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400"
                            : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                        }`}>
                          {b.published ? "Published" : "Draft"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "categories" && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                <Layers className="h-5 w-5 text-indigo-500" />
                <span>Browse Category Taxonomy</span>
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                Taxonomies mapping templates and programmatic directory routes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <div
                  key={cat.slug}
                  className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-950/20 flex justify-between items-center"
                >
                  <div>
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm">{cat.name}</span>
                    <p className="text-[10px] text-zinc-400">Slug: /{cat.slug}</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-white dark:bg-zinc-900 text-xs border border-zinc-200 dark:border-zinc-800 font-bold">
                    {cat.templatesCount} templates
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
