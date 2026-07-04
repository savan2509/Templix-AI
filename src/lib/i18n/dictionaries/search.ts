import type { Dict } from "../locales";

// SearchHero. `quickTags` keep their `q` search term in the component; only the
// visible label is translated here (order matches the component array).

const en = {
  placeholder: "Search invoice templates, resumes, agreements...",
  search: "Search",
  popular: "Popular:",
  tagInvoice: "Invoice",
  tagResume: "Resume",
  tagContract: "Contract",
  tagProposal: "Proposal",
  tagCoverLetter: "Cover Letter",
};

type Shape = typeof en;

const es: Shape = {
  placeholder: "Busca plantillas de facturas, currículums, acuerdos...",
  search: "Buscar",
  popular: "Popular:",
  tagInvoice: "Factura",
  tagResume: "Currículum",
  tagContract: "Contrato",
  tagProposal: "Propuesta",
  tagCoverLetter: "Carta de presentación",
};

const de: Shape = {
  placeholder: "Rechnungsvorlagen, Lebensläufe, Verträge suchen...",
  search: "Suchen",
  popular: "Beliebt:",
  tagInvoice: "Rechnung",
  tagResume: "Lebenslauf",
  tagContract: "Vertrag",
  tagProposal: "Angebot",
  tagCoverLetter: "Anschreiben",
};

const fr: Shape = {
  placeholder: "Rechercher des modèles de factures, CV, accords...",
  search: "Rechercher",
  popular: "Populaire :",
  tagInvoice: "Facture",
  tagResume: "CV",
  tagContract: "Contrat",
  tagProposal: "Proposition",
  tagCoverLetter: "Lettre de motivation",
};

const ar: Shape = {
  placeholder: "ابحث عن قوالب الفواتير والسير الذاتية والاتفاقيات...",
  search: "بحث",
  popular: "شائع:",
  tagInvoice: "فاتورة",
  tagResume: "سيرة ذاتية",
  tagContract: "عقد",
  tagProposal: "مقترح",
  tagCoverLetter: "خطاب تقديم",
};

export const search: Dict<Shape> = { en, es, de, fr, ar };
