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

  // ── Marketing AI ─────────────────────────────────────────────────────────────
  {
    slug: "product-description-generator",
    title: "Product Description Generator",
    short: "Product Description",
    description:
      "Free AI product description generator. Turn product features into persuasive, SEO-friendly descriptions for your store or marketplace.",
    keywords: ["product description generator", "ai product description", "ecommerce product description writer", "amazon product description generator"],
    icon: "Tag",
    category: "ai",
    group: "Marketing AI",
    inputLabel: "Product name & key features",
    inputPlaceholder: "e.g. Bamboo cutting board, 18x12in, antibacterial, dishwasher-safe, eco-friendly",
    outputLabel: "Product description",
    options: [TONE, LENGTH],
    promptTemplate:
      "Write a {length}, {tone} product description from the details below. Make it persuasive and benefit-focused, weave in relevant keywords naturally, and end with a short call to action. Return only the description.\n\n{input}",
  },
  {
    slug: "social-media-caption-generator",
    title: "Social Media Caption Generator",
    short: "Caption Generator",
    description:
      "Free AI caption generator for Instagram, Facebook and more. Describe your post and get scroll-stopping captions with hashtags.",
    keywords: ["social media caption generator", "instagram caption generator", "ai caption generator", "caption writer"],
    icon: "Hash",
    category: "ai",
    group: "Marketing AI",
    inputLabel: "What's the post about?",
    inputPlaceholder: "e.g. New summer collection launch, bright colors, limited edition drop",
    outputLabel: "Captions",
    options: [
      { key: "platform", label: "Platform", values: ["Instagram", "Facebook", "LinkedIn", "X (Twitter)", "TikTok"] },
      TONE,
    ],
    promptTemplate:
      "Write 3 scroll-stopping {platform} captions for the post described below in a {tone} tone. Include a few relevant hashtags and an emoji or two where natural. Number them 1-3. Return only the captions.\n\n{input}",
  },
  {
    slug: "linkedin-post-generator",
    title: "LinkedIn Post Generator",
    short: "LinkedIn Post",
    description:
      "Free AI LinkedIn post generator. Turn an idea or update into an engaging, professional LinkedIn post that drives comments.",
    keywords: ["linkedin post generator", "ai linkedin post generator", "linkedin content generator", "professional post writer"],
    icon: "TrendingUp",
    category: "ai",
    group: "Marketing AI",
    inputLabel: "Your idea, update or takeaway",
    inputPlaceholder: "e.g. Lessons from scaling our support team from 2 to 10 people",
    outputLabel: "LinkedIn post",
    options: [TONE],
    promptTemplate:
      "Write an engaging {tone} LinkedIn post from the idea below. Open with a strong one-line hook, use short punchy paragraphs with line breaks, share one concrete insight, and end with a question that invites comments. Return only the post.\n\n{input}",
  },
  {
    slug: "ad-copy-generator",
    title: "Ad Copy Generator",
    short: "Ad Copy Generator",
    description:
      "Free AI ad copy generator. Get high-converting headlines and copy for Google, Facebook and Instagram ads in seconds.",
    keywords: ["ad copy generator", "ai ad copy generator", "google ads copy generator", "facebook ad copy generator"],
    icon: "Megaphone",
    category: "ai",
    group: "Marketing AI",
    inputLabel: "Product/offer + audience",
    inputPlaceholder: "e.g. Online yoga classes, $15/month, for busy beginners who want to de-stress",
    outputLabel: "Ad copy",
    options: [
      { key: "platform", label: "Platform", values: ["Google Ads", "Facebook", "Instagram", "LinkedIn"] },
    ],
    promptTemplate:
      "Write high-converting {platform} ad copy for the offer below. Provide 3 headline options and 2 primary-text/description options, each benefit-driven with a clear call to action. Label them clearly. Return only the copy.\n\n{input}",
  },
  {
    slug: "slogan-generator",
    title: "Slogan & Tagline Generator",
    short: "Slogan Generator",
    description:
      "Free AI slogan generator. Describe your brand and get catchy, memorable slogans and taglines to choose from.",
    keywords: ["slogan generator", "tagline generator", "ai slogan generator", "business slogan generator"],
    icon: "Sparkles",
    category: "ai",
    group: "Marketing AI",
    inputLabel: "Brand/product & what makes it special",
    inputPlaceholder: "e.g. A meal-prep service for gym-goers, high protein, delivered fresh weekly",
    outputLabel: "Slogans",
    promptTemplate:
      "Generate 10 catchy, memorable slogans/taglines for the brand described below. Vary the style (punchy, clever, benefit-led). Keep each under 8 words. Number them 1-10. Return only the list.\n\n{input}",
  },
  {
    slug: "bio-generator",
    title: "Bio Generator",
    short: "Bio Generator",
    description:
      "Free AI bio generator. Create a professional or social bio for LinkedIn, Instagram, X or your website in seconds.",
    keywords: ["bio generator", "ai bio generator", "instagram bio generator", "professional bio generator"],
    icon: "Quote",
    category: "ai",
    group: "Marketing AI",
    inputLabel: "About you (role, interests, achievements)",
    inputPlaceholder: "e.g. Product designer, 7 years, coffee nerd, ex-Google, building in public",
    outputLabel: "Bio",
    options: [
      { key: "platform", label: "For", values: ["LinkedIn", "Instagram", "X (Twitter)", "Website / About", "TikTok"] },
      TONE,
    ],
    promptTemplate:
      "Write a {tone} bio for {platform} from the details below. Match that platform's typical length and style. Return only the bio.\n\n{input}",
  },

  // ── SEO AI ───────────────────────────────────────────────────────────────────
  {
    slug: "blog-title-generator",
    title: "Blog Title Generator",
    short: "Blog Title Generator",
    description:
      "Free AI blog title generator. Enter a topic and get catchy, click-worthy, SEO-friendly headline ideas.",
    keywords: ["blog title generator", "headline generator", "ai blog title generator", "seo title generator"],
    icon: "Newspaper",
    category: "ai",
    group: "SEO AI",
    inputLabel: "Blog topic or keyword",
    inputPlaceholder: "e.g. how to start freelancing with no experience",
    outputLabel: "Title ideas",
    promptTemplate:
      "Generate 10 catchy, click-worthy, SEO-friendly blog title options for the topic below. Mix formats (how-to, listicle, question, ultimate guide). Keep them under 60 characters where possible. Number them 1-10. Return only the titles.\n\n{input}",
  },
  {
    slug: "meta-description-generator",
    title: "Meta Description Generator",
    short: "Meta Description",
    description:
      "Free AI meta description generator. Paste your page content or topic and get an SEO-optimized meta description under 160 characters.",
    keywords: ["meta description generator", "ai meta description generator", "seo meta description generator", "meta tag generator"],
    icon: "Search",
    category: "ai",
    group: "SEO AI",
    inputLabel: "Page topic or content",
    inputPlaceholder: "e.g. A guide comparing the best free invoice templates for freelancers",
    outputLabel: "Meta description",
    promptTemplate:
      "Write 3 SEO-optimized meta description options for the page below. Each must be compelling, include the main keyword naturally, stay within 155 characters, and end with a subtle call to action. Number them 1-3. Return only the descriptions.\n\n{input}",
  },
  {
    slug: "blog-outline-generator",
    title: "Blog Outline Generator",
    short: "Blog Outline",
    description:
      "Free AI blog outline generator. Turn a topic into a structured outline with headings and subpoints ready to write from.",
    keywords: ["blog outline generator", "ai blog outline generator", "content outline generator", "article outline generator"],
    icon: "ListChecks",
    category: "ai",
    group: "SEO AI",
    inputLabel: "Blog topic or target keyword",
    inputPlaceholder: "e.g. email marketing tips for small businesses",
    outputLabel: "Blog outline",
    promptTemplate:
      "Create a detailed, SEO-friendly blog post outline for the topic below. Include a working title, an intro angle, 5-8 H2 sections each with 2-3 bullet subpoints, and a conclusion with a call to action. Return only the outline.\n\n{input}",
  },
  {
    slug: "faq-generator",
    title: "FAQ Generator",
    short: "FAQ Generator",
    description:
      "Free AI FAQ generator. Describe your product, service or topic and get clear, helpful frequently asked questions with answers.",
    keywords: ["faq generator", "ai faq generator", "faq schema generator", "questions and answers generator"],
    icon: "MessageSquare",
    category: "ai",
    group: "SEO AI",
    inputLabel: "Product, service or topic",
    inputPlaceholder: "e.g. A dog-walking service in Austin, $20/walk, insured, same-day booking",
    outputLabel: "FAQs",
    promptTemplate:
      "Generate 6-8 frequently asked questions with clear, helpful answers for the subject below. Anticipate real customer concerns (pricing, process, guarantees, timing). Format as Q: / A: pairs. Return only the FAQs.\n\n{input}",
  },

  // ── AI Writing (more) ────────────────────────────────────────────────────────
  {
    slug: "paragraph-generator",
    title: "Paragraph Generator",
    short: "Paragraph Generator",
    description:
      "Free AI paragraph generator. Enter a topic or an opening idea and get a well-structured paragraph in seconds.",
    keywords: ["paragraph generator", "ai paragraph generator", "paragraph writer", "free paragraph generator"],
    icon: "AlignLeft",
    category: "ai",
    group: "AI Writing",
    inputLabel: "Topic or opening idea",
    inputPlaceholder: "e.g. the benefits of drinking water first thing in the morning",
    outputLabel: "Paragraph",
    options: [TONE, LENGTH],
    promptTemplate:
      "Write a single well-structured {length} paragraph in a {tone} tone about the topic below. Use a clear topic sentence, supporting detail, and a closing thought. Return only the paragraph.\n\n{input}",
  },
  {
    slug: "text-expander",
    title: "Text Expander",
    short: "Text Expander",
    description:
      "Free AI text expander. Turn short notes or bullet points into full, well-written sentences and paragraphs.",
    keywords: ["text expander", "expand text ai", "sentence expander", "make text longer ai"],
    icon: "Wand2",
    category: "ai",
    group: "AI Writing",
    inputLabel: "Notes or bullet points",
    inputPlaceholder: "e.g. - met client\n- agreed scope\n- start next week",
    outputLabel: "Expanded text",
    options: [TONE],
    promptTemplate:
      "Expand the notes below into full, well-written {tone} prose. Add natural connective detail without inventing facts, and keep the original meaning. Return only the expanded text.\n\n{input}",
  },

  // ── Business AI (more) ───────────────────────────────────────────────────────
  {
    slug: "job-description-generator",
    title: "Job Description Generator",
    short: "Job Description",
    description:
      "Free AI job description generator. Enter a role and get a complete, professional job posting with responsibilities and requirements.",
    keywords: ["job description generator", "ai job description generator", "job posting generator", "jd generator"],
    icon: "Briefcase",
    category: "ai",
    group: "Business AI",
    inputLabel: "Role + key details",
    inputPlaceholder: "e.g. Remote Customer Success Manager, SaaS, 3+ years, based in EU",
    outputLabel: "Job description",
    promptTemplate:
      "Write a complete, professional job description from the details below. Include: role summary, key responsibilities (bullets), required qualifications (bullets), nice-to-haves, and a short closing about the role. Return only the job description.\n\n{input}",
  },
  {
    slug: "meeting-minutes-generator",
    title: "Meeting Minutes Generator",
    short: "Meeting Minutes",
    description:
      "Free AI meeting minutes generator. Paste rough notes and get clean, structured minutes with decisions and action items.",
    keywords: ["meeting minutes generator", "ai meeting minutes generator", "minutes of meeting generator", "meeting notes generator"],
    icon: "ClipboardCheck",
    category: "ai",
    group: "Business AI",
    inputLabel: "Rough meeting notes",
    inputPlaceholder: "Paste your rough notes from the meeting…",
    outputLabel: "Meeting minutes",
    promptTemplate:
      "Turn the rough notes below into clean, structured meeting minutes. Include: Date & Attendees (use placeholders if missing), Topics Discussed, Decisions Made, and Action Items (owner + due date where available). Return only the minutes.\n\n{input}",
  },

  // ── Resume AI (more) ─────────────────────────────────────────────────────────
  {
    slug: "resume-bullet-generator",
    title: "Resume Bullet Point Generator",
    short: "Resume Bullets",
    description:
      "Free AI resume bullet point generator. Turn a task or responsibility into strong, quantified achievement bullets.",
    keywords: ["resume bullet point generator", "ai resume bullet generator", "achievement bullet generator", "cv bullet point generator"],
    icon: "ScrollText",
    category: "ai",
    group: "Resume AI",
    inputLabel: "Your task or responsibility",
    inputPlaceholder: "e.g. handled customer support tickets and reduced response time",
    outputLabel: "Resume bullets",
    promptTemplate:
      "Rewrite the responsibility below into 3 strong resume bullet points. Start each with a powerful action verb, quantify impact with realistic placeholders like [X]% where numbers are missing, and keep each to one line. Return only the bullets.\n\n{input}",
  },
  {
    slug: "interview-questions-generator",
    title: "Interview Questions Generator",
    short: "Interview Questions",
    description:
      "Free AI interview questions generator. Enter a job role and get tailored interview questions for candidates or your own prep.",
    keywords: ["interview questions generator", "ai interview questions generator", "job interview questions generator", "interview prep ai"],
    icon: "Users",
    category: "ai",
    group: "Resume AI",
    inputLabel: "Job role (and level)",
    inputPlaceholder: "e.g. Mid-level Frontend Developer (React)",
    outputLabel: "Interview questions",
    promptTemplate:
      "Generate a set of tailored interview questions for the role below. Group them into: Technical/Role-specific, Behavioral, and Situational — 4-5 questions each. Return only the grouped questions.\n\n{input}",
  },
];

export function getAiTool(slug: string): AiToolMeta | undefined {
  return AI_TOOLS.find((t) => t.slug === slug);
}
