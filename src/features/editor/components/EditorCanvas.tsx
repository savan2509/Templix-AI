"use client";

import { useEffect, useState, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TableKit } from "@tiptap/extension-table";
import { exportToDocx, exportToPdf } from "../services";
import { saveDocumentAction, rewriteTextAction } from "../actions";
import { useRouter, usePathname } from "next/navigation";
import { TemplateEngine } from "@/features/templates/engine";
import {
  Bold,
  Italic,
  List,
  Heading1,
  Heading2,
  FileDown,
  ArrowLeft,
  Sparkles,
  CloudLightning,
  RefreshCw,
  Copy,
} from "lucide-react";

interface EditorCanvasProps {
  docId: string;
  initialTitle: string;
  initialContent: any;
  prefills?: Record<string, string>;
  isLoggedIn?: boolean;
}

export default function EditorCanvas({
  docId,
  initialTitle,
  initialContent,
  prefills = {},
  isLoggedIn = false,
}: EditorCanvasProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const [title, setTitle] = useState(initialTitle);
  const [saveStatus, setSaveStatus] = useState<"saved" | "saving" | "error">("saved");
  // Default closed so the mobile full-screen overlay panel never hides the
  // document on first load; users open it via the AI Assistant button.
  const [aiSidebarOpen, setAiSidebarOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // AI Configurations and Processing States
  const [aiLoading, setAiLoading] = useState(false);
  const [selectedTone, setSelectedTone] = useState("professional");
  const [selectedPromptVersion, setSelectedPromptVersion] = useState<"v1" | "v2">("v2");

  // Active docId tracking in case it updates on first save
  const activeDocIdRef = useRef(docId);
  const titleRef = useRef(title);

  const handleAIRewrite = async () => {
    if (!isLoggedIn) {
      setLoginModalOpen(true);
      return;
    }

    const { from, to } = editor.state.selection;
    const selectedText = editor.state.doc.textBetween(from, to, " ");

    if (!selectedText.trim()) {
      alert("Please select some text inside the editor canvas first!");
      return;
    }

    setAiLoading(true);
    try {
      const res = await rewriteTextAction(selectedText, selectedPromptVersion, selectedTone);
      if (res.success && res.result) {
        editor.chain().focus().insertContentAt({ from, to }, res.result).run();
      } else {
        alert(res.error || "AI failed to rewrite selected text.");
      }
    } catch (err) {
      alert("Could not establish connection to AI Rewrite service.");
    } finally {
      setAiLoading(false);
    }
  };

  const handleSave = async (json: any, currentTitle: string) => {
    // If guest user, skip DB auto-saves
    if (!isLoggedIn) {
      setSaveStatus("saved");
      return;
    }

    setSaveStatus("saving");
    try {
      const res = await saveDocumentAction(activeDocIdRef.current, currentTitle, json);
      if (res.success) {
        setSaveStatus("saved");
        // If it was a new doc creation, update the dynamic docId in client state and URL
        if (res.id && res.id !== activeDocIdRef.current) {
          activeDocIdRef.current = res.id;
          window.history.replaceState(null, "", `/${currentLocale}/editor/${res.id}`);
        }
      } else {
        setSaveStatus("error");
      }
    } catch (err) {
      setSaveStatus("error");
    }
  };

  const editor = useEditor({
    extensions: [StarterKit, TableKit],
    content: TemplateEngine.renderTemplate(initialContent, prefills),
    editorProps: {
      attributes: {
        class:
          "prose prose-sm md:prose-base focus:outline-none w-full max-w-none bg-white p-4 sm:p-8 md:p-12 min-h-[1056px] shadow-sm border border-zinc-200 dark:border-zinc-800 text-zinc-900 rounded-2xl mx-auto",
      },
    },
    onUpdate({ editor }) {
      const json = editor.getJSON();
      handleSave(json, titleRef.current);
    },
  });

  // Track title updates and trigger save
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    titleRef.current = newTitle;
    if (editor) {
      handleSave(editor.getJSON(), newTitle);
    }
  };

  if (!editor) return null;

  const handleExportPDF = () => {
    if (!isLoggedIn) {
      setLoginModalOpen(true);
      return;
    }
    exportToPdf(editor.getJSON(), title);
  };

  const handleExportDOCX = () => {
    if (!isLoggedIn) {
      setLoginModalOpen(true);
      return;
    }
    exportToDocx(editor.getJSON(), title);
  };

  const handleCopyText = () => {
    const text = editor.getText();
    navigator.clipboard.writeText(text);
    alert("Document text copied to clipboard!");
  };

  const handleBack = () => {
    router.push(`/${currentLocale}/dashboard`);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors">
      {/* Editor sub-header / control row */}
      <header className="flex flex-wrap h-auto min-h-14 items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 sm:px-6 py-2 shrink-0 shadow-sm">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-500 hover:text-zinc-950 transition-colors shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="min-w-0 flex-1 max-w-[45vw] sm:max-w-none font-bold text-sm sm:text-base bg-transparent border-0 border-b border-transparent hover:border-zinc-200 focus:border-blue-500 focus:ring-0 p-1 focus:outline-none rounded"
          />

          <div className="flex items-center gap-1.5 text-xs font-semibold">
            {saveStatus === "saving" && (
              <span className="flex items-center gap-1 text-zinc-400">
                <RefreshCw className="h-3 w-3 animate-spin" />
                <span>Saving...</span>
              </span>
            )}
            {saveStatus === "saved" && (
              <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
                <span>Saved</span>
              </span>
            )}
            {saveStatus === "error" && (
              <span className="text-red-500">Error saving changes</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap justify-end">
          {/* Export items dropdown */}
          <button
            onClick={handleExportPDF}
            className="flex items-center gap-1.5 h-9 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300"
          >
            <FileDown className="h-4 w-4" />
            <span className="hidden sm:inline">Export PDF</span>
          </button>
          <button
            onClick={handleExportDOCX}
            className="flex items-center gap-1.5 h-9 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300"
          >
            <FileDown className="h-4 w-4" />
            <span className="hidden sm:inline">Export Word</span>
          </button>

          <button
            onClick={() => setAiSidebarOpen(!aiSidebarOpen)}
            className={`flex items-center gap-1.5 h-9 px-3 rounded-lg text-xs font-bold transition-all shadow-sm ${
              aiSidebarOpen
                ? "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                : "border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            }`}
          >
            <Sparkles className="h-4 w-4 animate-bounce" />
            <span className="hidden sm:inline">AI Assistant</span>
          </button>
        </div>
      </header>

      {/* Editor Body Area */}
      <div className="relative flex flex-1 w-full overflow-hidden">
        {/* Editor Main Canvas */}
        <div className="flex-1 min-w-0 flex flex-col items-center overflow-y-auto p-3 sm:p-8 border-r border-zinc-200 dark:border-zinc-800 relative">
          {/* Floating formatting toolbar */}
          <div className="mb-4 flex flex-wrap items-center gap-1 p-1.5 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-xl shadow-md shrink-0">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                editor.isActive("bold") ? "text-blue-500 bg-blue-50 dark:bg-blue-950/40" : "text-zinc-600 dark:text-zinc-400"
              }`}
            >
              <Bold className="h-4 w-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                editor.isActive("italic") ? "text-blue-500 bg-blue-50 dark:bg-blue-950/40" : "text-zinc-600 dark:text-zinc-400"
              }`}
            >
              <Italic className="h-4 w-4" />
            </button>
            <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800 mx-1"></div>
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={`p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                editor.isActive("heading", { level: 1 }) ? "text-blue-500 bg-blue-50 dark:bg-blue-950/40" : "text-zinc-600 dark:text-zinc-400"
              }`}
            >
              <Heading1 className="h-4 w-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={`p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                editor.isActive("heading", { level: 2 }) ? "text-blue-500 bg-blue-50 dark:bg-blue-950/40" : "text-zinc-600 dark:text-zinc-400"
              }`}
            >
              <Heading2 className="h-4 w-4" />
            </button>
            <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800 mx-1"></div>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                editor.isActive("bulletList") ? "text-blue-500 bg-blue-50 dark:bg-blue-950/40" : "text-zinc-600 dark:text-zinc-400"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
            <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800 mx-1"></div>
            <button
              onClick={handleCopyText}
              className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center gap-1"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>

          {/* Actual Tiptap Document Paper Canvas */}
          <div className="w-full flex-1 max-w-4xl">
            <EditorContent editor={editor} />
          </div>
        </div>

        {/* AI Assistant Side Panel (Phase 2 Preview) */}
        {aiSidebarOpen && (
          <aside className="absolute inset-0 z-20 w-full sm:static sm:inset-auto sm:z-auto sm:w-80 border-l border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 sm:p-6 flex flex-col justify-between shrink-0 overflow-y-auto">
            <div className="space-y-6">
              <div>
                <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase tracking-wider">
                  Phase 2 Integration
                </span>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white mt-1.5 flex items-center gap-1.5">
                  <Sparkles className="h-5 w-5 text-blue-500 animate-spin" />
                  <span>AI Writing Assistant</span>
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1 leading-relaxed">
                  Select text inside the document canvas and trigger real-time AI transformations.
                </p>
              </div>

              {/* AI Operations panel */}
              <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {/* Prompt Version selector tabs */}
                <div className="space-y-2">
                  <span className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    Prompt Config (Version)
                  </span>
                  <div className="flex gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-[10px] font-semibold">
                    <button
                      onClick={() => setSelectedPromptVersion("v1")}
                      className={`flex-1 py-1.5 rounded-lg transition-all text-center ${
                        selectedPromptVersion === "v1"
                          ? "bg-white text-zinc-950 shadow-sm dark:bg-zinc-900 dark:text-white"
                          : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                      }`}
                    >
                      Prompt V1 (Simple)
                    </button>
                    <button
                      onClick={() => setSelectedPromptVersion("v2")}
                      className={`flex-1 py-1.5 rounded-lg transition-all text-center ${
                        selectedPromptVersion === "v2"
                          ? "bg-white text-zinc-950 shadow-sm dark:bg-zinc-900 dark:text-white"
                          : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                      }`}
                    >
                      Prompt V2 (Smart)
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    Operations
                  </span>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={handleAIRewrite}
                      disabled={aiLoading}
                      className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 text-xs font-bold transition-all shadow-sm disabled:opacity-50"
                    >
                      {aiLoading ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span>Generating Draft...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4" />
                          <span>Rewrite selected text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    Change tone
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { key: "professional", label: "Professional Corporate" },
                      { key: "friendly", label: "Friendly & Warm" },
                      { key: "concise", label: "Brief & Concise" },
                    ].map((tone) => (
                      <button
                        key={tone.key}
                        onClick={() => setSelectedTone(tone.key)}
                        className={`flex items-center justify-between w-full h-10 px-3 rounded-lg border text-xs font-medium transition-all text-left ${
                          selectedTone === tone.key
                            ? "border-blue-500 text-blue-600 bg-blue-50/30 dark:bg-blue-950/20"
                            : "border-zinc-100 hover:border-blue-500/50 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300"
                        }`}
                      >
                        <span>{tone.label}</span>
                        <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/30 space-y-2">
              <CloudLightning className="h-5 w-5 text-blue-500" />
              <h4 className="font-bold text-xs text-zinc-800 dark:text-zinc-200">Gemini-Powered Workspace</h4>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Connect your API key in environment variables to enable generative drafts directly within the visual editor.
              </p>
            </div>
          </aside>
        )}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <span className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto text-xl font-bold">
                🔒
              </span>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Create Free Account to Save
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Save your customized templates, unlock premium PDF and DOCX document downloads, and access AI Generative writing.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  const returnUrl = encodeURIComponent(window.location.pathname + window.location.search);
                  router.push(`/${currentLocale}/login?redirect=${returnUrl}`);
                }}
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md transition-colors"
              >
                Create Account / Sign In
              </button>
              <button
                onClick={() => setLoginModalOpen(false)}
                className="w-full h-11 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-semibold text-sm text-zinc-700 dark:text-zinc-300 rounded-xl transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2005/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
