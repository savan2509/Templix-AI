import type { Dict } from "../locales";

const en = {
  // Hub page (tools/page.tsx)
  metaTitle: "Free Business Tools & Calculators",
  metaDescription:
    "Free online tools for freelancers and businesses: GST/tax calculator, discount calculator, profit margin calculator, invoice number generator, and hourly rate calculator.",
  hubEyebrow: "Free Tools",
  hubTitle: "Business Tools & Calculators",
  hubSubtitle:
    "Fast, free, no sign-up calculators for invoicing, pricing, and freelancing — everything runs right in your browser.",
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
    "Enter your values above and the result updates instantly — nothing is sent to a server, so it’s fast and completely private. Use it as many times as you like, free and without an account.",
  relatedHeading: "Related free tools",
  orCreatePre: "Or create a document with our free ",
  orCreateLink: "templates",
  orCreatePost: ".",
};

type Shape = typeof en;

const es: Shape = {
  metaTitle: "Herramientas y calculadoras gratuitas para empresas",
  metaDescription:
    "Herramientas en línea gratuitas para autónomos y empresas: calculadora de IVA/impuestos, calculadora de descuentos, calculadora de margen de beneficio, generador de números de factura y calculadora de tarifa por hora.",
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
    "Introduce tus valores arriba y el resultado se actualiza al instante: no se envía nada a ningún servidor, por lo que es rápido y totalmente privado. Úsala tantas veces como quieras, gratis y sin cuenta.",
  relatedHeading: "Herramientas gratuitas relacionadas",
  orCreatePre: "O crea un documento con nuestras ",
  orCreateLink: "plantillas",
  orCreatePost: " gratuitas.",
};

const de: Shape = {
  metaTitle: "Kostenlose Business-Tools & Rechner",
  metaDescription:
    "Kostenlose Online-Tools für Freelancer und Unternehmen: MwSt./Steuerrechner, Rabattrechner, Gewinnmargenrechner, Rechnungsnummerngenerator und Stundensatzrechner.",
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
    "Gib oben deine Werte ein und das Ergebnis wird sofort aktualisiert – es wird nichts an einen Server gesendet, daher ist es schnell und völlig privat. Nutze es so oft du möchtest, kostenlos und ohne Konto.",
  relatedHeading: "Verwandte kostenlose Tools",
  orCreatePre: "Oder erstelle ein Dokument mit unseren kostenlosen ",
  orCreateLink: "Vorlagen",
  orCreatePost: ".",
};

const fr: Shape = {
  metaTitle: "Outils et calculateurs gratuits pour entreprises",
  metaDescription:
    "Outils en ligne gratuits pour les freelances et les entreprises : calculateur de TVA/taxes, calculateur de remise, calculateur de marge bénéficiaire, générateur de numéros de facture et calculateur de taux horaire.",
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
    "Saisissez vos valeurs ci-dessus et le résultat se met à jour instantanément — rien n’est envoyé à un serveur, c’est donc rapide et totalement privé. Utilisez-le autant de fois que vous le souhaitez, gratuitement et sans compte.",
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
    "أدخل قيمك في الأعلى وستُحدَّث النتيجة فورًا — لا يُرسَل أي شيء إلى الخادم، لذا فهي سريعة وخاصة تمامًا. استخدمها كما تشاء، مجانًا وبدون حساب.",
  relatedHeading: "أدوات مجانية ذات صلة",
  orCreatePre: "أو أنشئ مستندًا باستخدام ",
  orCreateLink: "القوالب",
  orCreatePost: " المجانية.",
};

export const tools: Dict<Shape> = { en, es, de, fr, ar };
