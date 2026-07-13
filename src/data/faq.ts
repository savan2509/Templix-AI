export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What is Templix AI and how does it work?",
    answer: "Templix AI is a production-grade document productivity platform that provides professionally designed business templates (invoices, resumes, contracts, proposals). You can search for a template, customize it in our interactive rich-text editor, use AI to rewrite it for different tones, and export it instantly to PDF or DOCX formats."
  },
  {
    question: "Can I customize template fields automatically?",
    answer: "Yes! Every template has fill-in fields (e.g. {{companyName}}, {{clientName}}). Fill them in once to update the whole document, or edit any text directly in the editor."
  },
  {
    question: "Are document downloads in PDF and DOCX formats free?",
    answer: "Yes! Every single template, customization tool, AI writing assistant, and document exporter (PDF, DOCX, TXT) on Templix AI is 100% free to use without any limitations or hidden fees."
  },
  {
    question: "How does the AI Document Workspace help write better documents?",
    answer: "Our built-in AI assistant uses advanced language models to rewrite paragraphs, adjust tone (professional, friendly, brief, long), translate text across languages, and check grammar, keeping editing efficient and error-free."
  }
];

// FAQ JSON-LD schema — exported so server components can inject it
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
