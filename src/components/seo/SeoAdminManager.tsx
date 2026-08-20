"use client";

import React, { useState, useEffect } from "react";

import {
  Search,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Layout,
  Wrench,
  BookOpen,
  Building2,
  Sliders,
  TrendingUp,
  Activity,
  Plus,
  Trash2,
  Save,
  RefreshCw,
  ExternalLink,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { SeoHealthReport } from "@/lib/seo/health-audit";
import { SeoAnalyticsSummary, SeoOpportunity } from "@/lib/seo/analytics";

interface SeoPageItem {
  id: string;
  slug: string;
  title: string;
  type: string;
  category?: string;
  url: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  focusKeyword: string;
  seoContent: string;
  faqs: { question: string; answer: string }[];
  isIndexed: boolean;
}

interface SeoAdminManagerProps {
  initialTemplates?: SeoPageItem[];
  initialCategories?: SeoPageItem[];
  initialIndustries?: SeoPageItem[];
  initialTools?: SeoPageItem[];
  initialBlogs?: SeoPageItem[];
  healthAudit?: SeoHealthReport;
  analytics?: SeoAnalyticsSummary;
}

export default function SeoAdminManager({
  initialTemplates = [],
  initialCategories = [],
  initialIndustries = [],
  initialTools = [],
  initialBlogs = [],
  healthAudit: initialHealthAudit,
  analytics: initialAnalytics,
}: SeoAdminManagerProps) {
  const [activeTab, setActiveTab] = useState<"editor" | "health" | "opportunities">("editor");
  const [activeSubSection, setActiveSubSection] = useState<"templates" | "categories" | "industries" | "tools" | "blogs">("templates");

  // Dynamic client state loaded on-demand
  const [templates, setTemplates] = useState<SeoPageItem[]>(initialTemplates);
  const [categories, setCategories] = useState<SeoPageItem[]>(initialCategories);
  const [industries, setIndustries] = useState<SeoPageItem[]>(initialIndustries);
  const [tools, setTools] = useState<SeoPageItem[]>(initialTools);
  const [blogs, setBlogs] = useState<SeoPageItem[]>(initialBlogs);
  const [healthAudit, setHealthAudit] = useState<SeoHealthReport | undefined>(initialHealthAudit);
  const [analytics, setAnalytics] = useState<SeoAnalyticsSummary | undefined>(initialAnalytics);
  const [isLoading, setIsLoading] = useState(initialTemplates.length === 0);

  useEffect(() => {
    if (templates.length === 0) {
      setIsLoading(true);
      fetch("/api/admin/seo")
        .then((res) => res.json())
        .then((res) => {
          if (res?.data) {
            setTemplates(res.data.templates || []);
            setCategories(res.data.categories || []);
            setIndustries(res.data.industries || []);
            setTools(res.data.tools || []);
            setBlogs(res.data.blogs || []);
            setHealthAudit(res.data.healthAudit);
            setAnalytics(res.data.analytics);
            if (res.data.templates?.[0]) {
              setSelectedItem(res.data.templates[0]);
              setEditForm({ ...res.data.templates[0], faqs: res.data.templates[0].faqs ? [...res.data.templates[0].faqs] : [] });
            }
          }
        })
        .catch((err) => console.error("Error fetching SEO data:", err))
        .finally(() => setIsLoading(false));
    }
  }, [templates.length]);

  // Current list
  const currentList =
    activeSubSection === "templates"
      ? templates
      : activeSubSection === "categories"
      ? categories
      : activeSubSection === "industries"
      ? industries
      : activeSubSection === "tools"
      ? tools
      : blogs;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<SeoPageItem | null>(currentList[0] || null);
  const [editForm, setEditForm] = useState<SeoPageItem | null>(currentList[0] || null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);

  const filteredItems = currentList.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectItem = (item: SeoPageItem) => {
    setSelectedItem(item);
    setEditForm({ ...item, faqs: item.faqs ? [...item.faqs] : [] });
    setSaveSuccess(null);
  };

  const handleSubSectionChange = (section: typeof activeSubSection) => {
    setActiveSubSection(section);
    let nextList = templates;
    if (section === "categories") nextList = categories;
    if (section === "industries") nextList = industries;
    if (section === "tools") nextList = tools;
    if (section === "blogs") nextList = blogs;

    if (nextList.length > 0) {
      setSelectedItem(nextList[0]);
      setEditForm({ ...nextList[0], faqs: nextList[0].faqs ? [...nextList[0].faqs] : [] });
    } else {
      setSelectedItem(null);
      setEditForm(null);
    }
  };

  const handleAddFaq = () => {

    if (!editForm) return;
    setEditForm({
      ...editForm,
      faqs: [...(editForm.faqs || []), { question: "", answer: "" }],
    });
  };

  const handleRemoveFaq = (index: number) => {
    if (!editForm) return;
    const nextFaqs = editForm.faqs.filter((_, idx) => idx !== index);
    setEditForm({ ...editForm, faqs: nextFaqs });
  };

  const handleUpdateFaq = (index: number, field: "question" | "answer", val: string) => {
    if (!editForm) return;
    const nextFaqs = [...editForm.faqs];
    nextFaqs[index] = { ...nextFaqs[index], [field]: val };
    setEditForm({ ...editForm, faqs: nextFaqs });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editForm) return;
    setIsSaving(true);
    setSaveSuccess(null);

    try {
      const res = await fetch("/api/admin/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      const data = await res.json();
      if (res.ok) {
        setSaveSuccess(`Successfully updated SEO configuration for "${editForm.title}"!`);
      } else {
        alert(data.error || "Failed to save SEO config");
      }
    } catch (err: any) {
      alert("Error saving: " + err?.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Level SEO Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3">
        <button
          onClick={() => setActiveTab("editor")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-sm transition-all ${
            activeTab === "editor"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
              : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
          }`}
        >
          <Sliders className="h-4 w-4" />
          SEO Page Management
        </button>

        <button
          onClick={() => setActiveTab("health")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-sm transition-all ${
            activeTab === "health"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
              : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
          }`}
        >
          <Activity className="h-4 w-4" />
          SEO Health & Orphan Detector
          {healthAudit && (
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-extrabold">
              {healthAudit.healthScorePercentage}%
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab("opportunities")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-sm transition-all ${
            activeTab === "opportunities"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
              : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
          }`}
        >
          <TrendingUp className="h-4 w-4" />
          Opportunity Matrix (Pos 4–20)
        </button>
      </div>

      {/* ── TAB 1: SEO Page Editor ────────────────────────────────────────── */}
      {activeTab === "editor" && (
        <div className="space-y-6">
          {/* Sub-Section Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: "templates", label: "Templates", count: initialTemplates.length, icon: FileText },
              { key: "categories", label: "Categories", count: initialCategories.length, icon: Layout },
              { key: "industries", label: "Industries", count: initialIndustries.length, icon: Building2 },
              { key: "tools", label: "Tools", count: initialTools.length, icon: Wrench },
              { key: "blogs", label: "Blog & Guides", count: initialBlogs.length, icon: BookOpen },
            ].map((sec) => {
              const Icon = sec.icon;
              return (
                <button
                  key={sec.key}
                  onClick={() => handleSubSectionChange(sec.key as any)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    activeSubSection === sec.key
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{sec.label}</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
                    {sec.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sidebar list */}
            <div className="lg:col-span-4 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-sm space-y-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder={`Search ${activeSubSection}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="max-h-[560px] overflow-y-auto space-y-2 pr-1">
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectItem(item)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all text-xs flex flex-col justify-between ${
                      selectedItem?.id === item.id
                        ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 shadow-xs"
                        : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold line-clamp-1">{item.title}</span>
                      <span
                        className={`h-2 w-2 rounded-full shrink-0 ${
                          item.isIndexed ? "bg-emerald-500" : "bg-amber-500"
                        }`}
                        title={item.isIndexed ? "Indexed" : "NoIndex"}
                      />
                    </div>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1 font-mono line-clamp-1">
                      {item.url}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Editor panel */}
            <div className="lg:col-span-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:p-8 shadow-sm">
              {editForm ? (
                <form onSubmit={handleSave} className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded-md">
                        {editForm.type} SEO Config
                      </span>
                      <h2 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                        {editForm.title}
                      </h2>
                    </div>
                    <a
                      href={editForm.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-500 hover:text-blue-600 transition-colors"
                    >
                      <span>Preview Page</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {saveSuccess && (
                    <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{saveSuccess}</span>
                    </div>
                  )}

                  {/* SEO Title */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
                      <span>SEO Title (Max 60 chars)</span>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        {editForm.metaTitle.length}/60
                      </span>
                    </label>
                    <input
                      type="text"
                      value={editForm.metaTitle}
                      onChange={(e) => setEditForm({ ...editForm, metaTitle: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Meta Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
                      <span>Meta Description (Max 160 chars)</span>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        {editForm.metaDescription.length}/160
                      </span>
                    </label>
                    <textarea
                      rows={3}
                      value={editForm.metaDescription}
                      onChange={(e) =>
                        setEditForm({ ...editForm, metaDescription: e.target.value })
                      }
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Canonical URL */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                        Canonical URL
                      </label>
                      <input
                        type="text"
                        value={editForm.canonicalUrl}
                        onChange={(e) =>
                          setEditForm({ ...editForm, canonicalUrl: e.target.value })
                        }
                        className="w-full px-3.5 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 font-mono"
                      />
                    </div>

                    {/* Focus Keyword */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                        Focus Keyword
                      </label>
                      <input
                        type="text"
                        value={editForm.focusKeyword}
                        onChange={(e) =>
                          setEditForm({ ...editForm, focusKeyword: e.target.value })
                        }
                        className="w-full px-3.5 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* SEO Content */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                      SEO Bottom Content / Introductory Copy
                    </label>
                    <textarea
                      rows={3}
                      value={editForm.seoContent}
                      onChange={(e) => setEditForm({ ...editForm, seoContent: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* FAQ Manager */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                        FAQ Rich Snippets ({editForm.faqs?.length || 0})
                      </label>
                      <button
                        type="button"
                        onClick={handleAddFaq}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-500"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        Add Question
                      </button>
                    </div>

                    <div className="space-y-3">
                      {editForm.faqs?.map((faq, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30 space-y-2"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <input
                              type="text"
                              placeholder="Question..."
                              value={faq.question}
                              onChange={(e) => handleUpdateFaq(idx, "question", e.target.value)}
                              className="w-full px-3 py-1.5 rounded-xl text-xs bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 font-semibold"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveFaq(idx)}
                              className="p-1.5 text-zinc-400 hover:text-rose-500 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <textarea
                            rows={2}
                            placeholder="Answer..."
                            value={faq.answer}
                            onChange={(e) => handleUpdateFaq(idx, "answer", e.target.value)}
                            className="w-full px-3 py-1.5 rounded-xl text-xs bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Index Status toggle */}
                  <div className="pt-2 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800">
                    <label className="flex items-center gap-2 text-xs font-bold text-zinc-800 dark:text-zinc-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={editForm.isIndexed}
                        onChange={(e) =>
                          setEditForm({ ...editForm, isIndexed: e.target.checked })
                        }
                        className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>Allow Search Engine Indexing (index, follow)</span>
                    </label>

                    <button
                      type="submit"
                      disabled={isSaving}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all disabled:opacity-50"
                    >
                      {isSaving ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                      <span>Save SEO Settings</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-20 text-zinc-400 text-sm">
                  Select an item to edit its SEO metadata
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: SEO Health & Orphan Detector ───────────────────────────── */}
      {activeTab === "health" && healthAudit && (
        <div className="space-y-6">
          {/* Health Score Card */}
          <div className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-r from-blue-900 via-indigo-950 to-zinc-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
                SEO Audit Summary
              </span>
              <h3 className="text-2xl font-extrabold mt-1">Site Health Overview</h3>
              <p className="text-xs text-blue-200/80 mt-1 max-w-lg">
                Audited {healthAudit.totalAnalyzedPages} pages across templates, categories, tools, and blog posts.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md">
              <div className="text-center">
                <span className="text-3xl font-black text-emerald-400">
                  {healthAudit.healthScorePercentage}%
                </span>
                <p className="text-[10px] uppercase font-bold text-zinc-300 mt-0.5">Health Score</p>
              </div>
            </div>
          </div>

          {/* Audit Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
              <span className="text-[10px] text-zinc-400 font-bold uppercase">Orphan Pages</span>
              <p className={`text-xl font-bold mt-1 ${healthAudit.orphanPages > 0 ? "text-amber-500" : "text-emerald-500"}`}>
                {healthAudit.orphanPages}
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
              <span className="text-[10px] text-zinc-400 font-bold uppercase">Missing Titles</span>
              <p className="text-xl font-bold mt-1 text-zinc-900 dark:text-white">
                {healthAudit.missingMetaTitles}
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
              <span className="text-[10px] text-zinc-400 font-bold uppercase">Missing Descriptions</span>
              <p className="text-xl font-bold mt-1 text-zinc-900 dark:text-white">
                {healthAudit.missingDescriptions}
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
              <span className="text-[10px] text-zinc-400 font-bold uppercase">Broken Links</span>
              <p className="text-xl font-bold mt-1 text-emerald-500">
                {healthAudit.brokenLinks}
              </p>
            </div>
          </div>

          {/* Orphan Page Detection Table */}
          <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                  Internal Link Graph Analysis
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Every page requires incoming internal links to ensure search engine indexation and crawl efficiency.
                </p>
              </div>
            </div>

            <div className="divide-y divide-zinc-100 dark:divide-zinc-800 text-xs">
              {healthAudit.orphanList && healthAudit.orphanList.length > 0 ? (
                healthAudit.orphanList.map((orphan, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between gap-4">
                    <div>
                      <span className="font-bold text-zinc-900 dark:text-white">{orphan.title}</span>
                      <p className="text-zinc-400 font-mono text-[10px]">{orphan.url}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 text-[10px] font-bold">
                      0 Incoming Links (Orphan)
                    </span>
                  </div>
                ))
              ) : (
                <div className="py-6 text-center text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Zero orphan pages detected! All content is linked across the site.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 3: SEO Opportunity Dashboard ──────────────────────────────── */}
      {activeTab === "opportunities" && analytics && (
        <div className="space-y-6">
          {/* Metrics summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
              <span className="text-[10px] text-zinc-400 font-bold uppercase">Organic Impressions</span>
              <p className="text-2xl font-black text-zinc-900 dark:text-white mt-1">
                {analytics.organicImpressions.toLocaleString()}
              </p>
            </div>
            <div className="p-5 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
              <span className="text-[10px] text-zinc-400 font-bold uppercase">Organic Clicks</span>
              <p className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">
                {analytics.organicClicks.toLocaleString()}
              </p>
            </div>
            <div className="p-5 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
              <span className="text-[10px] text-zinc-400 font-bold uppercase">Average CTR</span>
              <p className="text-2xl font-black text-emerald-500 mt-1">{analytics.averageCtr}%</p>
            </div>
            <div className="p-5 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
              <span className="text-[10px] text-zinc-400 font-bold uppercase">Avg Position</span>
              <p className="text-2xl font-black text-indigo-500 mt-1">{analytics.averagePosition}</p>
            </div>
          </div>

          {/* Opportunity Matrix Table */}
          <div className="p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  High-Impact Keyword Opportunities (Positions 4–20)
                </h3>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Pages ranking on striking distance with high search volume and low click-through rates. Improving these yields the fastest traffic growth.
              </p>
            </div>

            <div className="space-y-4">
              {analytics.opportunities.map((opp, idx) => (
                <div
                  key={idx}
                  className="p-4 md:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-zinc-900 dark:text-white">
                        {opp.keyword}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                        Pos {opp.position}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 font-mono">{opp.pageUrl}</p>
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 pt-1 font-medium flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                      <span>{opp.recommendation}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-bold shrink-0">
                    <div className="text-right">
                      <span className="text-zinc-400 text-[10px] uppercase block">Impressions</span>
                      <span>{opp.impressions.toLocaleString()}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-zinc-400 text-[10px] uppercase block">CTR</span>
                      <span className="text-emerald-600 dark:text-emerald-400">{opp.ctr}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
