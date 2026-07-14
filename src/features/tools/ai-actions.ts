"use server";

import { AI_TOOLS } from "@/data/ai-tools";

export interface AiToolResult {
  ok: boolean;
  result?: string;
  error?: string;
}

// Runs an AI tool by slug: builds the prompt from the tool's template + the
// user's input/options, then calls Google Gemini (the same provider the editor
// AI uses). When GEMINI_API_KEY isn't set it returns a clear demo response so
// the tool still works end-to-end in development.
export async function runAiTool(
  slug: string,
  input: string,
  options: Record<string, string> = {},
): Promise<AiToolResult> {
  const tool = AI_TOOLS.find((t) => t.slug === slug);
  if (!tool) return { ok: false, error: "Unknown tool." };

  const text = (input || "").trim();
  if (!text) return { ok: false, error: "Please enter some text to work with." };
  if (text.length > 12000) return { ok: false, error: "That's a bit long — please keep it under 12,000 characters." };

  // Build the prompt: fill {input} and any {optionKey} placeholders.
  let prompt = tool.promptTemplate.replace(/\{input\}/g, text);
  for (const opt of tool.options || []) {
    const val = options[opt.key] || opt.values[0];
    prompt = prompt.replace(new RegExp(`\\{${opt.key}\\}`, "g"), val);
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      ok: true,
      result:
        `⚙️ Demo mode — set GEMINI_API_KEY to generate live results.\n\n` +
        `“${tool.title}” would process this input:\n\n${text.slice(0, 500)}${text.length > 500 ? "…" : ""}`,
    };
  }

  try {
    const url =
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.warn(`[ai-tool:${slug}] Gemini error ${res.status}: ${detail}`);
      return { ok: false, error: "The AI service is busy right now. Please try again in a moment." };
    }

    const data = await res.json();
    const output = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!output) return { ok: false, error: "No response was generated. Try rephrasing your input." };

    return { ok: true, result: String(output).trim() };
  } catch (err) {
    console.error(`[ai-tool:${slug}] failed:`, (err as Error).message);
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}
