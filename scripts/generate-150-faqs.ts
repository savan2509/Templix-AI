import * as fs from "fs";
import * as path from "path";

interface FAQItemData {
  slug: string;
  category: string;
  categoryTitle: string;
  question: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  contentHtml: string;
  internalLinks: { text: string; href: string }[];
  relatedFaqSlugs: string[];
}

const FAQ_RAW_DATA = [
  // ── RESUME FAQS (30) ────────────────────────────────────────────────────────
  {
    slug: "what-is-an-ats-friendly-resume",
    category: "resumes",
    categoryTitle: "Resume FAQs",
    question: "What is an ATS-friendly resume?",
    h1: "What Is an ATS-Friendly Resume? Complete Guide & Formatting Rules",
    metaTitle: "What Is an ATS-Friendly Resume? (Formatting & Checklist)",
    metaDescription: "Learn what an ATS-friendly resume is, how Applicant Tracking Systems scan CVs, and the exact formatting rules to pass automated hiring screeners.",
    keywords: ["what is an ats friendly resume", "ats resume formatting", "ats resume optimization", "ats friendly cv"],
    summary: "An ATS-friendly resume is a document specifically formatted and structured so Applicant Tracking Systems (ATS) can parse, read, and rank your candidate profile accurately.",
    relatedFaqSlugs: ["how-to-optimize-resume-for-ats", "what-are-ats-resume-keywords", "best-resume-templates", "how-do-recruiters-scan-resumes", "resume-mistakes-to-avoid"],
    internalLinks: [
      { text: "Free ATS Resume Checker", href: "/ats-resume-checker" },
      { text: "AI Resume Builder", href: "/ai-resume-builder" },
      { text: "Professional Resume Templates", href: "/resume-templates" },
      { text: "Templix AI vs Zety", href: "/blog/templix-ai-vs-zety" }
    ],
    sections: [
      {
        heading: "What Does ATS Stand For?",
        text: "Applicant Tracking System (ATS) is HR recruiting software used by over 98% of Fortune 500 companies to filter, organize, search, and rank job applications automatically before human recruiters review them."
      },
      {
        heading: "Why ATS Optimization Matters for Job Seekers",
        text: "When you submit a resume online, the ATS parses your contact details, work history, skills, and education into a structured candidate profile. If your resume uses incompatible fonts, multi-column tables, floating text boxes, or graphics, the parser fails to read your experience — resulting in instant automated rejection."
      },
      {
        heading: "Core Formatting Rules for an ATS-Friendly Resume",
        text: "<ul class='list-disc pl-6 space-y-2'><li><strong>Use standard section headings:</strong> Stick to universal titles like 'Work Experience', 'Education', 'Skills', and 'Summary'.</li><li><strong>Single-column layout:</strong> Multi-column layouts confuse ATS parsers by reading across columns instead of down.</li><li><strong>Standard fonts:</strong> Use web-safe clean fonts such as Inter, Arial, Helvetica, Calibri, or Roboto.</li><li><strong>Standard file format:</strong> Save as clean text-based PDF or Microsoft Word (.docx).</li><li><strong>No graphics or tables:</strong> Avoid progress bars, skill percentage charts, or embedded images.</li></ul>"
      },
      {
        heading: "How to Test If Your Resume Is ATS-Friendly",
        text: "You can test your document by copying all text and pasting it into a plain text editor (.txt). If the text appears jumbled, missing section headers, or out of order, the ATS will fail to parse it. Alternatively, upload your CV to Templix AI's Free ATS Resume Checker to receive an instant compliance score."
      }
    ]
  }
];

console.log("FAQ generator setup ready...");
