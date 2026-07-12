import type { Dict } from "../locales";

const en = {
  // Hub page (tools/page.tsx)
  metaTitle: "Free PDF, Resume & Business Tools",
  metaDescription:
    "Free browser-based tools: merge & split PDF, JPG↔PDF, resume ATS checker, plus GST/tax, discount, margin and invoice calculators — no sign-up.",
  hubEyebrow: "Free Tools",
  hubTitle: "Free PDF, Resume & Business Tools",
  hubSubtitle:
    "Fast, free, no sign-up tools for PDFs, resumes, invoicing and pricing — everything runs right in your browser, nothing is uploaded.",
  openTool: "Open tool",
  needDocPre: "Need a document too? Browse our free ",
  needDocLink: "document templates",
  needDocPost: " — invoices, resumes, contracts, proposals, and more.",

  // Tool detail page (tools/[slug]/page.tsx)
  metaTitleSuffix: " — Free Online Tool",
  notFoundTitle: "Tool not found",
  toolEyebrow: "Free Tool",
  howToHeading: "How to use this tool",
  howToBody:
    "Everything runs right here in your browser — nothing is sent to a server, so it’s fast and completely private. Use it as many times as you like, free and without an account.",
  relatedHeading: "Related free tools",
  orCreatePre: "Or create a document with our free ",
  orCreateLink: "templates",
  orCreatePost: ".",
};

type Shape = typeof en;

const es: Shape = {
  metaTitle: "Herramientas y calculadoras gratuitas",
  metaDescription:
    "Herramientas gratuitas para autónomos y empresas: calculadoras de IVA/impuestos, descuento, margen de beneficio, número de factura y tarifa por hora.",
  hubEyebrow: "Herramientas gratuitas",
  hubTitle: "Herramientas y calculadoras para empresas",
  hubSubtitle:
    "Calculadoras rápidas, gratuitas y sin registro para facturación, precios y trabajo autónomo: todo se ejecuta directamente en tu navegador.",
  openTool: "Abrir herramienta",
  needDocPre: "¿Necesitas también un documento? Explora nuestras ",
  needDocLink: "plantillas de documentos",
  needDocPost: " gratuitas: facturas, currículums, contratos, propuestas y más.",

  metaTitleSuffix: " — Herramienta en línea gratuita",
  notFoundTitle: "Herramienta no encontrada",
  toolEyebrow: "Herramienta gratuita",
  howToHeading: "Cómo usar esta herramienta",
  howToBody:
    "Todo funciona aquí mismo en tu navegador: no se envía nada a ningún servidor, por lo que es rápido y totalmente privado. Úsala tantas veces como quieras, gratis y sin cuenta.",
  relatedHeading: "Herramientas gratuitas relacionadas",
  orCreatePre: "O crea un documento con nuestras ",
  orCreateLink: "plantillas",
  orCreatePost: " gratuitas.",
};

const de: Shape = {
  metaTitle: "Kostenlose Business-Tools & Rechner",
  metaDescription:
    "Kostenlose Tools für Freelancer und Unternehmen: MwSt./Steuer-, Rabatt-, Gewinnmargen-, Rechnungsnummer- und Stundensatzrechner — ohne Anmeldung.",
  hubEyebrow: "Kostenlose Tools",
  hubTitle: "Business-Tools & Rechner",
  hubSubtitle:
    "Schnelle, kostenlose Rechner ohne Anmeldung für Rechnungsstellung, Preisgestaltung und Freelancing – alles läuft direkt in deinem Browser.",
  openTool: "Tool öffnen",
  needDocPre: "Brauchst du auch ein Dokument? Durchstöbere unsere kostenlosen ",
  needDocLink: "Dokumentvorlagen",
  needDocPost: " – Rechnungen, Lebensläufe, Verträge, Angebote und mehr.",

  metaTitleSuffix: " – Kostenloses Online-Tool",
  notFoundTitle: "Tool nicht gefunden",
  toolEyebrow: "Kostenloses Tool",
  howToHeading: "So verwendest du dieses Tool",
  howToBody:
    "Alles läuft direkt hier in deinem Browser – es wird nichts an einen Server gesendet, daher ist es schnell und völlig privat. Nutze es so oft du möchtest, kostenlos und ohne Konto.",
  relatedHeading: "Verwandte kostenlose Tools",
  orCreatePre: "Oder erstelle ein Dokument mit unseren kostenlosen ",
  orCreateLink: "Vorlagen",
  orCreatePost: ".",
};

const fr: Shape = {
  metaTitle: "Outils et calculateurs gratuits",
  metaDescription:
    "Outils gratuits pour freelances et entreprises : calculateurs de TVA/taxes, remise, marge bénéficiaire, numéro de facture et taux horaire.",
  hubEyebrow: "Outils gratuits",
  hubTitle: "Outils et calculateurs pour entreprises",
  hubSubtitle:
    "Des calculateurs rapides, gratuits et sans inscription pour la facturation, la tarification et le freelancing — tout fonctionne directement dans votre navigateur.",
  openTool: "Ouvrir l’outil",
  needDocPre: "Besoin aussi d’un document ? Parcourez nos ",
  needDocLink: "modèles de documents",
  needDocPost: " gratuits — factures, CV, contrats, propositions et plus encore.",

  metaTitleSuffix: " — Outil en ligne gratuit",
  notFoundTitle: "Outil introuvable",
  toolEyebrow: "Outil gratuit",
  howToHeading: "Comment utiliser cet outil",
  howToBody:
    "Tout fonctionne directement dans votre navigateur — rien n’est envoyé à un serveur, c’est donc rapide et totalement privé. Utilisez-le autant de fois que vous le souhaitez, gratuitement et sans compte.",
  relatedHeading: "Outils gratuits associés",
  orCreatePre: "Ou créez un document avec nos ",
  orCreateLink: "modèles",
  orCreatePost: " gratuits.",
};

const ar: Shape = {
  metaTitle: "أدوات وحاسبات مجانية للأعمال",
  metaDescription:
    "أدوات مجانية عبر الإنترنت للمستقلين والشركات: حاسبة ضريبة القيمة المضافة/الضرائب، وحاسبة الخصم، وحاسبة هامش الربح، ومولّد أرقام الفواتير، وحاسبة الأجر بالساعة.",
  hubEyebrow: "أدوات مجانية",
  hubTitle: "أدوات وحاسبات للأعمال",
  hubSubtitle:
    "حاسبات سريعة ومجانية وبدون تسجيل للفوترة والتسعير والعمل الحر — كل شيء يعمل مباشرة في متصفحك.",
  openTool: "افتح الأداة",
  needDocPre: "هل تحتاج إلى مستند أيضًا؟ تصفح ",
  needDocLink: "قوالب المستندات",
  needDocPost: " المجانية — فواتير وسير ذاتية وعقود ومقترحات والمزيد.",

  metaTitleSuffix: " — أداة مجانية عبر الإنترنت",
  notFoundTitle: "الأداة غير موجودة",
  toolEyebrow: "أداة مجانية",
  howToHeading: "كيفية استخدام هذه الأداة",
  howToBody:
    "كل شيء يعمل مباشرة هنا في متصفحك — لا يُرسَل أي شيء إلى الخادم، لذا فهي سريعة وخاصة تمامًا. استخدمها كما تشاء، مجانًا وبدون حساب.",
  relatedHeading: "أدوات مجانية ذات صلة",
  orCreatePre: "أو أنشئ مستندًا باستخدام ",
  orCreateLink: "القوالب",
  orCreatePost: " المجانية.",
};

export const tools: Dict<Shape> = { en, es, de, fr, ar };
