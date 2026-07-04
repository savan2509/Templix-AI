import type { Dict } from "../locales";

// Shared, cross-page UI copy: primary CTAs, generic labels, and the translated
// category names/descriptions (the canonical English names live in
// `@/constants` CATEGORIES; these are the display translations keyed by slug).

const en = {
  browseTemplates: "Browse Templates",
  customizeTemplate: "Customize Template",
  viewAll: "View All",
  viewAllArticles: "View All Articles",
  readArticle: "Read Article",
  free: "Free",
  templatesLabel: "templates",
  backToHome: "Back to Home",
  selectRegion: "Select Region",
  categoryNames: {
    invoices: "Invoices",
    resumes: "Resumes & CVs",
    contracts: "Contracts",
    proposals: "Proposals",
    letters: "Letters & Emails",
    reports: "Reports",
    "business-plans": "Business Plans",
    quotations: "Quotations",
  },
  categoryDescriptions: {
    invoices: "Billing, receipts & payment requests",
    resumes: "Job applications & career profiles",
    contracts: "Agreements, NDAs & service terms",
    proposals: "Business pitches & project scopes",
    letters: "Cover letters, formal emails & memos",
    reports: "Business, project & annual reports",
    "business-plans": "Startup plans, strategy & financials",
    quotations: "Price quotes, estimates & bids",
  },
};

type Shape = typeof en;

const es: Shape = {
  browseTemplates: "Explorar plantillas",
  customizeTemplate: "Personalizar plantilla",
  viewAll: "Ver todo",
  viewAllArticles: "Ver todos los artículos",
  readArticle: "Leer artículo",
  free: "Gratis",
  templatesLabel: "plantillas",
  backToHome: "Volver al inicio",
  selectRegion: "Seleccionar región",
  categoryNames: {
    invoices: "Facturas",
    resumes: "Currículums y CV",
    contracts: "Contratos",
    proposals: "Propuestas",
    letters: "Cartas y correos",
    reports: "Informes",
    "business-plans": "Planes de negocio",
    quotations: "Cotizaciones",
  },
  categoryDescriptions: {
    invoices: "Facturación, recibos y solicitudes de pago",
    resumes: "Solicitudes de empleo y perfiles profesionales",
    contracts: "Acuerdos, NDA y términos de servicio",
    proposals: "Presentaciones comerciales y alcances de proyecto",
    letters: "Cartas de presentación, correos formales y memorandos",
    reports: "Informes comerciales, de proyectos y anuales",
    "business-plans": "Planes de startup, estrategia y finanzas",
    quotations: "Presupuestos, estimaciones y ofertas",
  },
};

const de: Shape = {
  browseTemplates: "Vorlagen durchsuchen",
  customizeTemplate: "Vorlage anpassen",
  viewAll: "Alle ansehen",
  viewAllArticles: "Alle Artikel ansehen",
  readArticle: "Artikel lesen",
  free: "Kostenlos",
  templatesLabel: "Vorlagen",
  backToHome: "Zurück zur Startseite",
  selectRegion: "Region auswählen",
  categoryNames: {
    invoices: "Rechnungen",
    resumes: "Lebensläufe & CVs",
    contracts: "Verträge",
    proposals: "Angebote",
    letters: "Briefe & E-Mails",
    reports: "Berichte",
    "business-plans": "Businesspläne",
    quotations: "Kostenvoranschläge",
  },
  categoryDescriptions: {
    invoices: "Abrechnung, Quittungen & Zahlungsanforderungen",
    resumes: "Bewerbungen & Karriereprofile",
    contracts: "Vereinbarungen, NDAs & Servicebedingungen",
    proposals: "Geschäftspräsentationen & Projektumfänge",
    letters: "Anschreiben, formelle E-Mails & Memos",
    reports: "Geschäfts-, Projekt- & Jahresberichte",
    "business-plans": "Startup-Pläne, Strategie & Finanzen",
    quotations: "Preisangebote, Schätzungen & Gebote",
  },
};

const fr: Shape = {
  browseTemplates: "Parcourir les modèles",
  customizeTemplate: "Personnaliser le modèle",
  viewAll: "Tout voir",
  viewAllArticles: "Voir tous les articles",
  readArticle: "Lire l’article",
  free: "Gratuit",
  templatesLabel: "modèles",
  backToHome: "Retour à l’accueil",
  selectRegion: "Sélectionner la région",
  categoryNames: {
    invoices: "Factures",
    resumes: "CV et curriculums",
    contracts: "Contrats",
    proposals: "Propositions",
    letters: "Lettres et e-mails",
    reports: "Rapports",
    "business-plans": "Plans d’affaires",
    quotations: "Devis",
  },
  categoryDescriptions: {
    invoices: "Facturation, reçus et demandes de paiement",
    resumes: "Candidatures et profils professionnels",
    contracts: "Accords, NDA et conditions de service",
    proposals: "Présentations commerciales et périmètres de projet",
    letters: "Lettres de motivation, e-mails formels et notes",
    reports: "Rapports d’activité, de projet et annuels",
    "business-plans": "Plans de startup, stratégie et finances",
    quotations: "Devis, estimations et offres",
  },
};

const ar: Shape = {
  browseTemplates: "تصفح القوالب",
  customizeTemplate: "تخصيص القالب",
  viewAll: "عرض الكل",
  viewAllArticles: "عرض جميع المقالات",
  readArticle: "قراءة المقال",
  free: "مجاني",
  templatesLabel: "قالبًا",
  backToHome: "العودة إلى الرئيسية",
  selectRegion: "اختر المنطقة",
  categoryNames: {
    invoices: "الفواتير",
    resumes: "السير الذاتية",
    contracts: "العقود",
    proposals: "المقترحات",
    letters: "الرسائل والبريد الإلكتروني",
    reports: "التقارير",
    "business-plans": "خطط العمل",
    quotations: "عروض الأسعار",
  },
  categoryDescriptions: {
    invoices: "الفوترة والإيصالات وطلبات الدفع",
    resumes: "طلبات التوظيف والملفات المهنية",
    contracts: "الاتفاقيات واتفاقيات عدم الإفصاح وشروط الخدمة",
    proposals: "العروض التجارية ونطاقات المشاريع",
    letters: "خطابات التقديم والبريد الرسمي والمذكرات",
    reports: "التقارير التجارية وتقارير المشاريع والتقارير السنوية",
    "business-plans": "خطط الشركات الناشئة والاستراتيجية والتمويل",
    quotations: "عروض الأسعار والتقديرات والمناقصات",
  },
};

export const common: Dict<Shape> = { en, es, de, fr, ar };
