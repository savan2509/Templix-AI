// AI-powered tools. Unlike the client-side calculators in ./tools, these send a
// prompt to an LLM (Google Gemini — see src/features/tools/ai-actions.ts) and
// return generated text. Pure data here (safe to import from sitemap/server);
// icons are mapped in the UI and the prompt runs server-side.
//
// Adding a tool = adding one object below. The prompt template supports {input}
// (the user's text) and {optionKey} placeholders that map to the option values.

import type { ToolMeta } from "./tools";

export interface AiToolOption {
  key: string;                 // placeholder name used in promptTemplate, e.g. "tone"
  label: string;               // UI label
  values: string[];            // selectable values (first is default)
}

export interface AiToolMeta extends ToolMeta {
  category: "ai";
  group: string;               // sub-group for organisation, e.g. "AI Writing"
  inputLabel: string;
  inputPlaceholder: string;
  outputLabel: string;
  options?: AiToolOption[];
  promptTemplate: string;      // {input} + {optionKey} placeholders
}

const TONE: AiToolOption = {
  key: "tone",
  label: "Tone",
  values: ["Professional", "Friendly", "Persuasive", "Confident", "Casual"],
};
const LENGTH: AiToolOption = {
  key: "length",
  label: "Length",
  values: ["Short", "Medium", "Detailed"],
};

export const AI_TOOLS: AiToolMeta[] = [
  // ── AI Writing ──────────────────────────────────────────────────────────────
  {
    slug: "ai-writer",
    title: "AI Writer",
    short: "AI Writer",
    description:
      "Free AI writer. Describe what you need and generate polished content — blog sections, product copy, descriptions — in seconds.",
    keywords: ["ai writer", "ai content generator", "free ai writing tool", "ai text generator"],
    icon: "Sparkles",
    category: "ai",
    group: "AI Writing",
    inputLabel: "What should I write?",
    inputPlaceholder: "e.g. A 3-paragraph intro for a blog post about remote work productivity",
    outputLabel: "Generated content",
    options: [TONE, LENGTH],
    promptTemplate:
      "Write a {length}-length piece of {tone}-tone content for the request below. Return only the finished content, with no preamble, headings-about-the-task, or explanation.\n\nRequest: {input}",
  },
  {
    slug: "ai-rewrite",
    title: "AI Rewrite",
    short: "AI Rewrite",
    description:
      "Free AI paraphrasing tool. Paste any text and rewrite it more clearly and professionally while keeping the meaning.",
    keywords: ["ai rewrite", "paraphrasing tool", "rewrite text ai", "free paraphraser"],
    icon: "PenLine",
    category: "ai",
    group: "AI Writing",
    inputLabel: "Text to rewrite",
    inputPlaceholder: "Paste the text you want to rewrite…",
    outputLabel: "Rewritten text",
    options: [TONE],
    promptTemplate:
      "Rewrite the text below in a {tone} tone. Improve clarity and flow while preserving the original meaning. Return only the rewritten text.\n\n{input}",
  },
  {
    slug: "grammar-checker",
    title: "Grammar Checker",
    short: "Grammar Checker",
    description:
      "Free AI grammar checker. Fix grammar, spelling and punctuation instantly. Paste your text and get a corrected version.",
    keywords: ["grammar checker", "free grammar check", "ai grammar corrector", "punctuation checker"],
    icon: "SpellCheck",
    category: "ai",
    group: "AI Writing",
    inputLabel: "Text to check",
    inputPlaceholder: "Paste the text to correct…",
    outputLabel: "Corrected text",
    promptTemplate:
      "Correct all grammar, spelling and punctuation errors in the text below. Preserve the author's meaning and style. Return only the corrected text, with no notes.\n\n{input}",
  },
  {
    slug: "humanize-ai-text",
    title: "Humanize AI Text",
    short: "Humanize AI Text",
    description:
      "Free AI humanizer. Make AI-generated text sound natural and human — vary the rhythm, remove robotic phrasing, keep the meaning.",
    keywords: ["humanize ai text", "ai humanizer", "make ai text sound human", "bypass ai detector"],
    icon: "Wand2",
    category: "ai",
    group: "AI Writing",
    inputLabel: "AI-generated text",
    inputPlaceholder: "Paste the AI text you want to humanize…",
    outputLabel: "Humanized text",
    promptTemplate:
      "Rewrite the following text so it reads as if written by a thoughtful human: vary sentence length, use natural phrasing, cut filler and robotic transitions, and keep the meaning intact. Return only the rewritten text.\n\n{input}",
  },
  {
    slug: "ai-summarizer",
    title: "AI Summarizer",
    short: "AI Summarizer",
    description:
      "Free AI summarizer. Paste a long document or article and get a clear, concise summary of the key points.",
    keywords: ["ai summarizer", "text summarizer", "summarize text online", "free summary generator"],
    icon: "FileText",
    category: "ai",
    group: "AI Writing",
    inputLabel: "Text to summarize",
    inputPlaceholder: "Paste the long text you want summarized…",
    outputLabel: "Summary",
    options: [LENGTH],
    promptTemplate:
      "Summarize the text below into a {length} summary that captures the key points accurately. Return only the summary.\n\n{input}",
  },
  {
    slug: "tone-changer",
    title: "Tone Changer",
    short: "Tone Changer",
    description:
      "Free AI tone changer. Rewrite any message in a different tone — professional, friendly, persuasive — without changing the meaning.",
    keywords: ["tone changer", "change tone of text ai", "rewrite tone", "text tone converter"],
    icon: "Palette",
    category: "ai",
    group: "AI Writing",
    inputLabel: "Text to adjust",
    inputPlaceholder: "Paste the text and pick a tone…",
    outputLabel: "Adjusted text",
    options: [TONE],
    promptTemplate:
      "Rewrite the text below in a {tone} tone. Do not change the underlying meaning or facts. Return only the rewritten text.\n\n{input}",
  },
  {
    slug: "ai-translator",
    title: "AI Translator",
    short: "AI Translator",
    description:
      "Free AI translator. Translate text into another language naturally, preserving meaning and tone. No sign-up.",
    keywords: ["ai translator", "translate text online free", "document translator", "language translator ai"],
    icon: "Languages",
    category: "ai",
    group: "AI Writing",
    inputLabel: "Text to translate",
    inputPlaceholder: "Paste the text to translate…",
    outputLabel: "Translation",
    options: [
      { key: "language", label: "Translate to", values: ["Spanish", "French", "German", "Hindi", "Arabic", "Portuguese", "Chinese", "Japanese", "English"] },
    ],
    promptTemplate:
      "Translate the text below into {language}. Produce a natural, fluent translation that preserves meaning and tone — not a word-for-word rendering. Return only the translation.\n\n{input}",
  },

  // ── Resume AI ───────────────────────────────────────────────────────────────
  {
    slug: "ai-resume-summary-generator",
    title: "Resume Summary Generator",
    short: "Resume Summary Generator",
    description:
      "Free AI resume summary generator. Turn your role and experience into a punchy professional summary for the top of your CV.",
    keywords: ["resume summary generator", "professional summary generator", "cv summary ai", "resume profile generator"],
    icon: "ScrollText",
    category: "ai",
    group: "Resume AI",
    inputLabel: "Your role & key experience",
    inputPlaceholder: "e.g. Marketing manager, 6 years, grew organic traffic 3x, led a team of 4…",
    outputLabel: "Resume summary",
    promptTemplate:
      "Write a punchy 2-3 sentence professional resume summary based on the details below. Lead with the strongest, most quantified point. Use the first person implied (no 'I'). Return only the summary.\n\n{input}",
  },
  {
    slug: "ai-cover-letter-generator",
    title: "AI Cover Letter Generator",
    short: "AI Cover Letter",
    description:
      "Free AI cover letter generator. Enter the role and your background to get a tailored, one-page cover letter in seconds.",
    keywords: ["ai cover letter generator", "cover letter writer", "free cover letter ai", "cover letter generator"],
    icon: "Mail",
    category: "ai",
    group: "Resume AI",
    inputLabel: "Role + your background",
    inputPlaceholder: "e.g. Applying for Senior Nurse at St. Mary's. 8 years ICU experience, BLS/ACLS certified…",
    outputLabel: "Cover letter",
    options: [TONE],
    promptTemplate:
      "Write a concise, {tone} one-page cover letter based on the details below. Open with a strong hook, connect the candidate's experience to the role, and close with a clear call to action. Use placeholders like [Hiring Manager] only where a real detail is missing. Return only the letter.\n\n{input}",
  },

  // ── Proposal AI ─────────────────────────────────────────────────────────────
  {
    slug: "ai-proposal-generator",
    title: "AI Proposal Generator",
    short: "AI Proposal Generator",
    description:
      "Free AI business proposal generator. Describe the project and get a clear, persuasive proposal with scope, timeline and pricing.",
    keywords: ["ai proposal generator", "business proposal generator", "project proposal ai", "free proposal writer"],
    icon: "FileSignature",
    category: "ai",
    group: "Proposal AI",
    inputLabel: "Project details",
    inputPlaceholder: "e.g. Website redesign for a dental clinic, 6-week timeline, $8,000 budget, includes SEO…",
    outputLabel: "Business proposal",
    promptTemplate:
      "Write a clear, persuasive business proposal from the project details below. Include these sections: Executive Summary, Scope of Work, Timeline, Pricing, and Next Steps. Keep it professional and client-ready. Return only the proposal.\n\n{input}",
  },

  // ── Business AI ─────────────────────────────────────────────────────────────
  {
    slug: "ai-email-generator",
    title: "AI Email Generator",
    short: "AI Email Generator",
    description:
      "Free AI email writer. Describe what you need to say and get a professional, ready-to-send email with a subject line.",
    keywords: ["ai email generator", "email writer ai", "professional email generator", "free email writer"],
    icon: "MessageSquare",
    category: "ai",
    group: "Business AI",
    inputLabel: "What's the email about?",
    inputPlaceholder: "e.g. Follow up with a client who hasn't paid invoice #1042, due 2 weeks ago…",
    outputLabel: "Email",
    options: [TONE],
    promptTemplate:
      "Write a {tone} professional email based on the request below. Include a clear Subject line and a natural greeting and sign-off. Keep it concise. Return only the email.\n\n{input}",
  },
  {
    slug: "ai-business-plan-generator",
    title: "AI Business Plan Generator",
    short: "Business Plan Generator",
    description:
      "Free AI business plan generator. Describe your idea and get a structured one-page business plan you can build on.",
    keywords: ["ai business plan generator", "business plan writer", "one page business plan", "free business plan ai"],
    icon: "Briefcase",
    category: "ai",
    group: "Business AI",
    inputLabel: "Your business idea",
    inputPlaceholder: "e.g. A subscription box for eco-friendly pet products, targeting urban millennials…",
    outputLabel: "Business plan",
    promptTemplate:
      "Write a structured one-page business plan from the idea below. Include: Overview, Target Market, Products/Services, Revenue Model, Marketing Strategy, and Key Milestones. Keep each section short and concrete. Return only the plan.\n\n{input}",
  },
];

export function getAiTool(slug: string): AiToolMeta | undefined {
  return AI_TOOLS.find((t) => t.slug === slug);
}
