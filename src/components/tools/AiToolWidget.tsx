"use client";

import { useState } from "react";
import { Sparkles, Loader2, Copy, Check, AlertCircle } from "lucide-react";
import { runAiTool } from "@/features/tools/ai-actions";
import type { AiToolOption } from "@/data/ai-tools";

interface Props {
  slug: string;
  inputLabel: string;
  inputPlaceholder: string;
  outputLabel: string;
  options?: AiToolOption[];
}

const field =
  "w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all";
const labelCls = "block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2";

export default function AiToolWidget({ slug, inputLabel, inputPlaceholder, outputLabel, options = [] }: Props) {
  const [input, setInput] = useState("");
  const [opts, setOpts] = useState<Record<string, string>>(
    () => Object.fromEntries(options.map((o) => [o.key, o.values[0]])),
  );
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function generate() {
    if (!input.trim() || loading) return;
    setLoading(true);
    setError(null);
    setOutput("");
    setCopied(false);
    try {
      const res = await runAiTool(slug, input, opts);
      if (res.ok && res.result) setOutput(res.result);
      else setError(res.error || "Something went wrong. Please try again.");
    } catch {
      setError("Couldn't reach the AI service. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function copyOut() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 sm:p-6 shadow-sm">
      <label className={labelCls} htmlFor="ai-input">{inputLabel}</label>
      <textarea
        id="ai-input"
        className={`${field} px-4 py-3 min-h-[130px] resize-y leading-relaxed`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={inputPlaceholder}
        maxLength={12000}
      />

      {options.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {options.map((o) => (
            <div key={o.key}>
              <label className={labelCls} htmlFor={`opt-${o.key}`}>{o.label}</label>
              <select
                id={`opt-${o.key}`}
                className={`${field} h-11 px-3 cursor-pointer`}
                value={opts[o.key]}
                onChange={(e) => setOpts((p) => ({ ...p, [o.key]: e.target.value }))}
              >
                {o.values.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={generate}
        disabled={loading || !input.trim()}
        className="mt-5 w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-bold transition-colors"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
        {loading ? "Generating…" : "Generate"}
      </button>

      {error && (
        <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-400 text-sm px-4 py-3">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {output && (
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <span className={labelCls} style={{ marginBottom: 0 }}>{outputLabel}</span>
            <button
              onClick={copyOut}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-3.5 text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed whitespace-pre-wrap">
            {output}
          </div>
        </div>
      )}
    </div>
  );
}
