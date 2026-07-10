import type { Dict } from "../locales";

const en = {
  // ── Listing page: hero ──
  heroBadge: "Templix AI Resource Library",
  heroTitle: "Document Templates Blog",
  heroSubtitle:
    "Practical guides on invoices, resumes, contracts, proposals, and AI writing tools — written for freelancers, businesses, and professionals.",
  statArticles: "Articles",
  statWeekly: "Weekly Updates",
  statFree: "Free Templates Included",

  // ── Category filter chips (display labels; logic still keys off English) ──
  categories: {
    All: "All",
    Invoices: "Invoices",
    Resumes: "Resumes",
    Contracts: "Contracts",
    Proposals: "Proposals",
    Letters: "Letters",
    "AI Tools": "AI Tools",
    Guides: "Guides",
  },

  // ── Listing page: content ──
  featuredLabel: "Featured Article",
  readFullArticle: "Read Full Article",
  allArticles: "All Articles",
  articleSingular: "article",
  articlePlural: "articles",
  inWord: "in",
  read: "Read",
  min: "min",
  minRead: "min read",
  emptyState: "No articles found in this category yet.",

  // ── Listing page: CTA banner ──
  ctaHeading: "Ready to Create Your Document?",
  ctaText:
    "Browse 180+ free professional templates. Customize online with our AI editor and download as PDF or Word — instantly, no account needed.",
  ctaInvoiceTemplates: "Invoice Templates →",

  // ── Listing page: SEO block ──
  seoHeading: "Professional Writing Directories & References",
  seoText1:
    "Our articles follow standard industry patterns for modern corporate formatting. When using our ",
  seoTemplatesLink: "free templates library",
  seoText2:
    ", you benefit from built-in standard variables. For standard guidelines on writing and invoicing compliance, consult the ",
  seoWikiLink: "Wikipedia Invoice Definition",
  seoText3: ", or check professional networking best practices via ",
  seoLinkedInLink: "LinkedIn Guides",
  seoText4: ".",

  // ── Article page ──
  blogBreadcrumb: "Blog",
  minuteRead: "minute read",
  backToBlog: "Back to Blog",
  foundHelpful: "Found this helpful?",
  shareNetwork: "Share it with your network",
  freeTemplatesLabel: "Free Templates",
  ctaPracticeHeading: "Ready to put this into practice?",
  ctaPracticeText:
    "Browse Templix AI's free professional templates. Customize online, edit with AI, and download as PDF or Word — in minutes.",
  browseAllTemplates: "Browse All Templates",
  templatesCta: {
    Invoices: "Invoice Templates",
    Resumes: "Resume Templates",
    Contracts: "Contract Templates",
    Proposals: "Proposal Templates",
    Letters: "Letter Templates",
    "AI Tools": "Resume Templates",
    Guides: "Invoice Templates",
  },
  aboutArticle: "About This Article",
  authorityResources: "Authority Resources",
  authoritySchema: "Schema.org Standard",
  authorityW3C: "W3C Document Standard",
  authorityWikipedia: "Wikipedia Business Docs",
  relatedArticles: "Related Articles",
  moreArticles: "More Articles",
  tocTitle: "Table of Content",

  // ── Article page: "Get in touch" side tab + modal ──
  getInTouch: {
    tab: "Get in Touch",
    title: "Get in Touch With Us",
    intro: "Submitting the form below will ensure a prompt response from us.",
    name: "Name*",
    email: "Email*",
    phone: "Number",
    message: "Your Message*",
    submit: "Submit",
    sending: "Sending…",
    close: "Close",
    successTitle: "Message sent!",
    successText: "Thanks for reaching out — we'll reply to your email shortly.",
    genericError: "Something went wrong. Please try again.",
    networkError: "Network error. Please try again.",
  },

  // ── Article page: timed "WAIT!" popup (desktop only, after ~30s) ──
  readPopup: {
    wait: "WAIT!",
    title: "Need a Template That Doesn't Exist Yet?",
    text: "Every business has document needs an off-the-shelf template can't cover — a branded invoice, a region-specific contract, or a bespoke proposal. Tell us what you need and our team will help you build it.",
    cta: "Share Your Idea",
    close: "Close",
  },
};

type Shape = typeof en;

const es: Shape = {
  heroBadge: "Biblioteca de recursos de Templix AI",
  heroTitle: "Blog de plantillas de documentos",
  heroSubtitle:
    "Guías prácticas sobre facturas, currículums, contratos, propuestas y herramientas de escritura con IA, pensadas para autónomos, empresas y profesionales.",
  statArticles: "Artículos",
  statWeekly: "Actualizaciones semanales",
  statFree: "Plantillas gratuitas incluidas",

  categories: {
    All: "Todos",
    Invoices: "Facturas",
    Resumes: "Currículums",
    Contracts: "Contratos",
    Proposals: "Propuestas",
    Letters: "Cartas",
    "AI Tools": "Herramientas de IA",
    Guides: "Guías",
  },

  featuredLabel: "Artículo destacado",
  readFullArticle: "Leer artículo completo",
  allArticles: "Todos los artículos",
  articleSingular: "artículo",
  articlePlural: "artículos",
  inWord: "en",
  read: "Leer",
  min: "min",
  minRead: "min de lectura",
  emptyState: "Aún no hay artículos en esta categoría.",

  ctaHeading: "¿Listo para crear tu documento?",
  ctaText:
    "Explora más de 180 plantillas profesionales gratuitas. Personalízalas en línea con nuestro editor de IA y descárgalas en PDF o Word, al instante y sin necesidad de cuenta.",
  ctaInvoiceTemplates: "Plantillas de facturas →",

  seoHeading: "Directorios y referencias de redacción profesional",
  seoText1:
    "Nuestros artículos siguen patrones estándar del sector para el formato corporativo moderno. Al usar nuestra ",
  seoTemplatesLink: "biblioteca de plantillas gratuitas",
  seoText2:
    ", te beneficias de variables estándar integradas. Para conocer las pautas estándar sobre redacción y cumplimiento de facturación, consulta la ",
  seoWikiLink: "definición de factura en Wikipedia",
  seoText3:
    " o revisa las mejores prácticas de redes profesionales a través de ",
  seoLinkedInLink: "las guías de LinkedIn",
  seoText4: ".",

  blogBreadcrumb: "Blog",
  minuteRead: "minutos de lectura",
  backToBlog: "Volver al blog",
  foundHelpful: "¿Te resultó útil?",
  shareNetwork: "Compártelo con tu red",
  freeTemplatesLabel: "Plantillas gratuitas",
  ctaPracticeHeading: "¿Listo para ponerlo en práctica?",
  ctaPracticeText:
    "Explora las plantillas profesionales gratuitas de Templix AI. Personalízalas en línea, edítalas con IA y descárgalas en PDF o Word, en minutos.",
  browseAllTemplates: "Explorar todas las plantillas",
  templatesCta: {
    Invoices: "Plantillas de facturas",
    Resumes: "Plantillas de currículum",
    Contracts: "Plantillas de contratos",
    Proposals: "Plantillas de propuestas",
    Letters: "Plantillas de cartas",
    "AI Tools": "Plantillas de currículum",
    Guides: "Plantillas de facturas",
  },
  aboutArticle: "Acerca de este artículo",
  authorityResources: "Recursos de referencia",
  authoritySchema: "Estándar de Schema.org",
  authorityW3C: "Estándar de documentos del W3C",
  authorityWikipedia: "Documentos comerciales en Wikipedia",
  relatedArticles: "Artículos relacionados",
  moreArticles: "Más artículos",
  tocTitle: "Tabla de contenido",
  getInTouch: {
    tab: "Contáctanos",
    title: "Ponte en contacto con nosotros",
    intro: "Al enviar el siguiente formulario recibirás una respuesta rápida.",
    name: "Nombre*",
    email: "Correo electrónico*",
    phone: "Número",
    message: "Tu mensaje*",
    submit: "Enviar",
    sending: "Enviando…",
    close: "Cerrar",
    successTitle: "¡Mensaje enviado!",
    successText: "Gracias por escribirnos: responderemos a tu correo en breve.",
    genericError: "Algo salió mal. Inténtalo de nuevo.",
    networkError: "Error de red. Inténtalo de nuevo.",
  },
  readPopup: {
    wait: "¡ESPERA!",
    title: "¿Necesitas una plantilla que aún no existe?",
    text: "Cada empresa tiene necesidades documentales que una plantilla genérica no cubre: una factura con tu marca, un contrato adaptado a tu región o una propuesta a medida. Cuéntanos qué necesitas y nuestro equipo te ayudará a crearla.",
    cta: "Comparte tu idea",
    close: "Cerrar",
  },
};

const de: Shape = {
  heroBadge: "Templix AI Ressourcenbibliothek",
  heroTitle: "Blog für Dokumentvorlagen",
  heroSubtitle:
    "Praktische Anleitungen zu Rechnungen, Lebensläufen, Verträgen, Angeboten und KI-Schreibwerkzeugen – geschrieben für Freelancer, Unternehmen und Fachleute.",
  statArticles: "Artikel",
  statWeekly: "Wöchentliche Updates",
  statFree: "Kostenlose Vorlagen inklusive",

  categories: {
    All: "Alle",
    Invoices: "Rechnungen",
    Resumes: "Lebensläufe",
    Contracts: "Verträge",
    Proposals: "Angebote",
    Letters: "Briefe",
    "AI Tools": "KI-Tools",
    Guides: "Ratgeber",
  },

  featuredLabel: "Empfohlener Artikel",
  readFullArticle: "Ganzen Artikel lesen",
  allArticles: "Alle Artikel",
  articleSingular: "Artikel",
  articlePlural: "Artikel",
  inWord: "in",
  read: "Lesen",
  min: "Min.",
  minRead: "Min. Lesezeit",
  emptyState: "In dieser Kategorie gibt es noch keine Artikel.",

  ctaHeading: "Bereit, dein Dokument zu erstellen?",
  ctaText:
    "Durchstöbere über 180 kostenlose professionelle Vorlagen. Passe sie online mit unserem KI-Editor an und lade sie sofort als PDF oder Word herunter – ohne Konto.",
  ctaInvoiceTemplates: "Rechnungsvorlagen →",

  seoHeading: "Verzeichnisse und Referenzen für professionelles Schreiben",
  seoText1:
    "Unsere Artikel folgen branchenüblichen Mustern für modernes Unternehmensformat. Wenn du unsere ",
  seoTemplatesLink: "kostenlose Vorlagenbibliothek",
  seoText2:
    " nutzt, profitierst du von integrierten Standardvariablen. Für allgemeine Richtlinien zum Schreiben und zur Rechnungskonformität konsultiere die ",
  seoWikiLink: "Wikipedia-Definition von Rechnung",
  seoText3:
    " oder informiere dich über bewährte Praktiken zum beruflichen Networking über ",
  seoLinkedInLink: "die LinkedIn-Ratgeber",
  seoText4: ".",

  blogBreadcrumb: "Blog",
  minuteRead: "Minuten Lesezeit",
  backToBlog: "Zurück zum Blog",
  foundHelpful: "War das hilfreich?",
  shareNetwork: "Teile ihn mit deinem Netzwerk",
  freeTemplatesLabel: "Kostenlose Vorlagen",
  ctaPracticeHeading: "Bereit, das in die Praxis umzusetzen?",
  ctaPracticeText:
    "Durchstöbere die kostenlosen professionellen Vorlagen von Templix AI. Passe sie online an, bearbeite sie mit KI und lade sie in Minuten als PDF oder Word herunter.",
  browseAllTemplates: "Alle Vorlagen durchsuchen",
  templatesCta: {
    Invoices: "Rechnungsvorlagen",
    Resumes: "Lebenslaufvorlagen",
    Contracts: "Vertragsvorlagen",
    Proposals: "Angebotsvorlagen",
    Letters: "Briefvorlagen",
    "AI Tools": "Lebenslaufvorlagen",
    Guides: "Rechnungsvorlagen",
  },
  aboutArticle: "Über diesen Artikel",
  authorityResources: "Fachquellen",
  authoritySchema: "Schema.org-Standard",
  authorityW3C: "W3C-Dokumentstandard",
  authorityWikipedia: "Geschäftsdokumente bei Wikipedia",
  relatedArticles: "Ähnliche Artikel",
  moreArticles: "Weitere Artikel",
  tocTitle: "Inhaltsverzeichnis",
  getInTouch: {
    tab: "Kontakt",
    title: "Nehmen Sie Kontakt mit uns auf",
    intro: "Wenn Sie das folgende Formular absenden, antworten wir Ihnen umgehend.",
    name: "Name*",
    email: "E-Mail*",
    phone: "Nummer",
    message: "Ihre Nachricht*",
    submit: "Absenden",
    sending: "Wird gesendet…",
    close: "Schließen",
    successTitle: "Nachricht gesendet!",
    successText: "Danke für Ihre Nachricht — wir antworten Ihnen in Kürze per E-Mail.",
    genericError: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    networkError: "Netzwerkfehler. Bitte versuchen Sie es erneut.",
  },
  readPopup: {
    wait: "MOMENT!",
    title: "Brauchen Sie eine Vorlage, die es noch nicht gibt?",
    text: "Jedes Unternehmen hat Dokumentanforderungen, die eine Standardvorlage nicht abdeckt — eine gebrandete Rechnung, einen regionsspezifischen Vertrag oder ein maßgeschneidertes Angebot. Sagen Sie uns, was Sie brauchen, und unser Team hilft Ihnen, es zu erstellen.",
    cta: "Idee teilen",
    close: "Schließen",
  },
};

const fr: Shape = {
  heroBadge: "Bibliothèque de ressources Templix AI",
  heroTitle: "Blog des modèles de documents",
  heroSubtitle:
    "Des guides pratiques sur les factures, CV, contrats, propositions et outils de rédaction IA, rédigés pour les indépendants, les entreprises et les professionnels.",
  statArticles: "Articles",
  statWeekly: "Mises à jour hebdomadaires",
  statFree: "Modèles gratuits inclus",

  categories: {
    All: "Tous",
    Invoices: "Factures",
    Resumes: "CV",
    Contracts: "Contrats",
    Proposals: "Propositions",
    Letters: "Lettres",
    "AI Tools": "Outils IA",
    Guides: "Guides",
  },

  featuredLabel: "Article à la une",
  readFullArticle: "Lire l’article complet",
  allArticles: "Tous les articles",
  articleSingular: "article",
  articlePlural: "articles",
  inWord: "dans",
  read: "Lire",
  min: "min",
  minRead: "min de lecture",
  emptyState: "Aucun article dans cette catégorie pour le moment.",

  ctaHeading: "Prêt à créer votre document ?",
  ctaText:
    "Parcourez plus de 180 modèles professionnels gratuits. Personnalisez-les en ligne avec notre éditeur IA et téléchargez-les en PDF ou Word, instantanément et sans compte.",
  ctaInvoiceTemplates: "Modèles de factures →",

  seoHeading: "Répertoires et références de rédaction professionnelle",
  seoText1:
    "Nos articles suivent les standards du secteur pour un formatage professionnel moderne. En utilisant notre ",
  seoTemplatesLink: "bibliothèque de modèles gratuits",
  seoText2:
    ", vous bénéficiez de variables standard intégrées. Pour les directives standard sur la rédaction et la conformité de facturation, consultez la ",
  seoWikiLink: "définition de facture sur Wikipédia",
  seoText3:
    ", ou découvrez les bonnes pratiques de réseautage professionnel via ",
  seoLinkedInLink: "les guides LinkedIn",
  seoText4: ".",

  blogBreadcrumb: "Blog",
  minuteRead: "minutes de lecture",
  backToBlog: "Retour au blog",
  foundHelpful: "Cet article vous a été utile ?",
  shareNetwork: "Partagez-le avec votre réseau",
  freeTemplatesLabel: "Modèles gratuits",
  ctaPracticeHeading: "Prêt à mettre cela en pratique ?",
  ctaPracticeText:
    "Parcourez les modèles professionnels gratuits de Templix AI. Personnalisez-les en ligne, modifiez-les avec l’IA et téléchargez-les en PDF ou Word, en quelques minutes.",
  browseAllTemplates: "Parcourir tous les modèles",
  templatesCta: {
    Invoices: "Modèles de factures",
    Resumes: "Modèles de CV",
    Contracts: "Modèles de contrats",
    Proposals: "Modèles de propositions",
    Letters: "Modèles de lettres",
    "AI Tools": "Modèles de CV",
    Guides: "Modèles de factures",
  },
  aboutArticle: "À propos de cet article",
  authorityResources: "Ressources de référence",
  authoritySchema: "Norme Schema.org",
  authorityW3C: "Norme documentaire du W3C",
  authorityWikipedia: "Documents commerciaux sur Wikipédia",
  relatedArticles: "Articles connexes",
  moreArticles: "Plus d’articles",
  tocTitle: "Table des matières",
  getInTouch: {
    tab: "Nous contacter",
    title: "Entrez en contact avec nous",
    intro: "En envoyant le formulaire ci-dessous, vous recevrez une réponse rapide.",
    name: "Nom*",
    email: "E-mail*",
    phone: "Numéro",
    message: "Votre message*",
    submit: "Envoyer",
    sending: "Envoi en cours…",
    close: "Fermer",
    successTitle: "Message envoyé !",
    successText: "Merci de nous avoir contactés — nous répondrons à votre e-mail sous peu.",
    genericError: "Une erreur est survenue. Veuillez réessayer.",
    networkError: "Erreur réseau. Veuillez réessayer.",
  },
  readPopup: {
    wait: "ATTENDEZ !",
    title: "Besoin d'un modèle qui n'existe pas encore ?",
    text: "Chaque entreprise a des besoins documentaires qu'un modèle standard ne couvre pas — une facture à votre image, un contrat adapté à votre région ou une proposition sur mesure. Dites-nous ce qu'il vous faut et notre équipe vous aidera à le créer.",
    cta: "Partagez votre idée",
    close: "Fermer",
  },
};

const ar: Shape = {
  heroBadge: "مكتبة موارد Templix AI",
  heroTitle: "مدونة قوالب المستندات",
  heroSubtitle:
    "أدلة عملية حول الفواتير والسير الذاتية والعقود والمقترحات وأدوات الكتابة بالذكاء الاصطناعي، مكتوبة للمستقلين والشركات والمحترفين.",
  statArticles: "مقالات",
  statWeekly: "تحديثات أسبوعية",
  statFree: "قوالب مجانية مضمّنة",

  categories: {
    All: "الكل",
    Invoices: "الفواتير",
    Resumes: "السير الذاتية",
    Contracts: "العقود",
    Proposals: "المقترحات",
    Letters: "الرسائل",
    "AI Tools": "أدوات الذكاء الاصطناعي",
    Guides: "الأدلة",
  },

  featuredLabel: "مقال مميز",
  readFullArticle: "قراءة المقال كاملًا",
  allArticles: "جميع المقالات",
  articleSingular: "مقال",
  articlePlural: "مقالات",
  inWord: "في",
  read: "اقرأ",
  min: "دقيقة",
  minRead: "دقيقة قراءة",
  emptyState: "لا توجد مقالات في هذه الفئة حتى الآن.",

  ctaHeading: "هل أنت مستعد لإنشاء مستندك؟",
  ctaText:
    "تصفح أكثر من 180 قالبًا احترافيًا مجانيًا. خصصها عبر الإنترنت باستخدام محرر الذكاء الاصطناعي وحمّلها بصيغة PDF أو Word فورًا وبدون حساب.",
  ctaInvoiceTemplates: "قوالب الفواتير →",

  seoHeading: "أدلة ومراجع الكتابة الاحترافية",
  seoText1:
    "تتبع مقالاتنا الأنماط القياسية في القطاع لتنسيق الشركات الحديث. عند استخدام ",
  seoTemplatesLink: "مكتبة القوالب المجانية",
  seoText2:
    " لدينا، تستفيد من متغيرات قياسية مدمجة. للاطلاع على الإرشادات القياسية حول الكتابة والامتثال في الفوترة، راجع ",
  seoWikiLink: "تعريف الفاتورة في ويكيبيديا",
  seoText3: "، أو تعرف على أفضل ممارسات التواصل المهني عبر ",
  seoLinkedInLink: "أدلة LinkedIn",
  seoText4: ".",

  blogBreadcrumb: "المدونة",
  minuteRead: "دقيقة قراءة",
  backToBlog: "العودة إلى المدونة",
  foundHelpful: "هل كان هذا مفيدًا؟",
  shareNetwork: "شاركه مع شبكتك",
  freeTemplatesLabel: "قوالب مجانية",
  ctaPracticeHeading: "هل أنت مستعد لتطبيق ذلك عمليًا؟",
  ctaPracticeText:
    "تصفح قوالب Templix AI الاحترافية المجانية. خصصها عبر الإنترنت وحررها بالذكاء الاصطناعي وحمّلها بصيغة PDF أو Word في دقائق.",
  browseAllTemplates: "تصفح جميع القوالب",
  templatesCta: {
    Invoices: "قوالب الفواتير",
    Resumes: "قوالب السير الذاتية",
    Contracts: "قوالب العقود",
    Proposals: "قوالب المقترحات",
    Letters: "قوالب الرسائل",
    "AI Tools": "قوالب السير الذاتية",
    Guides: "قوالب الفواتير",
  },
  aboutArticle: "عن هذا المقال",
  authorityResources: "مصادر موثوقة",
  authoritySchema: "معيار Schema.org",
  authorityW3C: "معيار مستندات W3C",
  authorityWikipedia: "المستندات التجارية في ويكيبيديا",
  relatedArticles: "مقالات ذات صلة",
  moreArticles: "المزيد من المقالات",
  tocTitle: "جدول المحتويات",
  getInTouch: {
    tab: "تواصل معنا",
    title: "تواصل معنا",
    intro: "بإرسال النموذج أدناه ستحصل على رد سريع منا.",
    name: "الاسم*",
    email: "البريد الإلكتروني*",
    phone: "رقم الهاتف",
    message: "رسالتك*",
    submit: "إرسال",
    sending: "جارٍ الإرسال…",
    close: "إغلاق",
    successTitle: "تم إرسال الرسالة!",
    successText: "شكرًا لتواصلك معنا — سنرد على بريدك الإلكتروني قريبًا.",
    genericError: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    networkError: "خطأ في الشبكة. يرجى المحاولة مرة أخرى.",
  },
  readPopup: {
    wait: "انتظر!",
    title: "هل تحتاج إلى قالب غير موجود بعد؟",
    text: "كل شركة لديها احتياجات مستندية لا يغطيها القالب الجاهز — فاتورة تحمل علامتك التجارية، أو عقد يناسب منطقتك، أو عرض مخصّص. أخبرنا بما تحتاجه وسيساعدك فريقنا في إنشائه.",
    cta: "شارك فكرتك",
    close: "إغلاق",
  },
};

export const blog: Dict<Shape> = { en, es, de, fr, ar };
