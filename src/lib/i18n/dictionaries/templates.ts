import type { Dict } from "../locales";

const en = {
  // Breadcrumbs & detail header
  templatesBreadcrumb: "Templates",
  templateNoun: "Template",
  detailIntroExtra:
    "Adjust fields in the controller to customize variables dynamically. Open in our visual tiptap document workspace to edit text blocks, trigger AI assistant rewrites, and export as PDF/Word.",

  // Detail-page related resources
  exploreRelatedResources: "Explore Related Resources",
  relatedTemplates: "Related Templates",
  writingGuidesBlog: "Writing Guides & Blog Articles",
  popularCategories: "Popular Categories",

  // Listing hub heading/subtitle & assembly words
  hubHeading: "Free Professional Business Templates",
  hubSubtitle:
    "Choose from our curated library of dynamic templates. Seamlessly custom-tailor fields, styles, and values inside our built-in interactive editor canvas.",
  freeWord: "Free",
  templatesWord: "Templates",
  inWord: "in",

  // Sidebar
  allDocuments: "All Documents",
  documentTypes: "Document Types",
  relatedSearchesTitle: "Related Searches",
  rsForFreelancers: "for Freelancers",
  rsLegal: "Legal",
  rsInvoiceTemplates: "Invoice Templates",
  rsResumeLayouts: "Resume CV Layouts",
  rsFreelancerAgreements: "Freelancer Agreements",
  rsMarketingProposals: "Marketing Proposals",

  // Empty state
  noTemplatesFound: "No templates found",
  noTemplatesDesc:
    "We could not find templates matching the search parameters or filter queries. Try resetting your search.",

  // Card CTA
  previewDetails: "Preview Details",

  // Compliance block
  complianceHeading: "Corporate Document Compliance & Open Specifications",
  complianceP1:
    "All items compiled in this directory are optimized to support dynamic field injection and variable mapping. Users can customize, rewrite using our built-in ",
  complianceEditorLink: "AI-enabled document editor",
  complianceP2: ", and export to portable formats. We support the standard ",
  compliancePdfLink: "Adobe PDF Specifications",
  complianceP3:
    " for pixel-perfect printing and structured serialization. Learn more about schema definitions at ",
  complianceSchemaLink: "Schema.org",
  complianceP4: ".",

  // TemplateDetailView (client component)
  customizeVariables: "Customize variables",
  fillParams:
    "Fill in the parameters below. The preview paper will update dynamically in real time.",
  customizeInEditor: "Customize in Editor",
  customizeHint:
    "Tapping opens our full tiptap canvas where you can add signature, upload logo, export PDF.",
  qualityGuarantee: "Template Quality Guarantee",
  qualityAts: "Tested & optimized for major Applicant Tracking Systems (ATS).",
  qualityAudit: "Formatted to standard invoice audit configurations.",
  qualityStandard: "Formatted to professional industry standards.",
  qualityOffline: "Supports instant offline PDF & DOCX compilations.",
  livePreview: "Live Document Preview",
  liveLabel: "Live",
};

type Shape = typeof en;

const es: Shape = {
  templatesBreadcrumb: "Plantillas",
  templateNoun: "Plantilla",
  detailIntroExtra:
    "Ajusta los campos en el controlador para personalizar las variables dinámicamente. Ábrelo en nuestro espacio visual de documentos tiptap para editar bloques de texto, activar reescrituras con el asistente de IA y exportar a PDF/Word.",

  exploreRelatedResources: "Explora recursos relacionados",
  relatedTemplates: "Plantillas relacionadas",
  writingGuidesBlog: "Guías de redacción y artículos del blog",
  popularCategories: "Categorías populares",

  hubHeading: "Plantillas comerciales profesionales gratis",
  hubSubtitle:
    "Elige de nuestra biblioteca seleccionada de plantillas dinámicas. Personaliza campos, estilos y valores sin esfuerzo dentro de nuestro lienzo de edición interactivo integrado.",
  freeWord: "Gratis",
  templatesWord: "Plantillas",
  inWord: "en",

  allDocuments: "Todos los documentos",
  documentTypes: "Tipos de documentos",
  relatedSearchesTitle: "Búsquedas relacionadas",
  rsForFreelancers: "para autónomos",
  rsLegal: "Legales",
  rsInvoiceTemplates: "Plantillas de facturas",
  rsResumeLayouts: "Diseños de currículum y CV",
  rsFreelancerAgreements: "Contratos para autónomos",
  rsMarketingProposals: "Propuestas de marketing",

  noTemplatesFound: "No se encontraron plantillas",
  noTemplatesDesc:
    "No pudimos encontrar plantillas que coincidan con los parámetros de búsqueda o los filtros. Intenta restablecer tu búsqueda.",

  previewDetails: "Ver detalles",

  complianceHeading:
    "Cumplimiento de documentos corporativos y especificaciones abiertas",
  complianceP1:
    "Todos los elementos compilados en este directorio están optimizados para admitir la inyección dinámica de campos y el mapeo de variables. Los usuarios pueden personalizar, reescribir con nuestro ",
  complianceEditorLink: "editor de documentos con IA integrado",
  complianceP2: ", y exportar a formatos portátiles. Admitimos las ",
  compliancePdfLink: "especificaciones estándar de Adobe PDF",
  complianceP3:
    " para una impresión perfecta al píxel y una serialización estructurada. Obtén más información sobre las definiciones de esquema en ",
  complianceSchemaLink: "Schema.org",
  complianceP4: ".",

  customizeVariables: "Personalizar variables",
  fillParams:
    "Completa los parámetros a continuación. La vista previa se actualizará dinámicamente en tiempo real.",
  customizeInEditor: "Personalizar en el editor",
  customizeHint:
    "Al tocar se abre nuestro lienzo tiptap completo donde puedes añadir firma, subir logo y exportar a PDF.",
  qualityGuarantee: "Garantía de calidad de la plantilla",
  qualityAts:
    "Probada y optimizada para los principales sistemas de seguimiento de candidatos (ATS).",
  qualityAudit:
    "Formateada según configuraciones estándar de auditoría de facturas.",
  qualityStandard: "Formateada según estándares profesionales del sector.",
  qualityOffline:
    "Admite compilaciones instantáneas de PDF y DOCX sin conexión.",
  livePreview: "Vista previa en vivo del documento",
  liveLabel: "En vivo",
};

const de: Shape = {
  templatesBreadcrumb: "Vorlagen",
  templateNoun: "Vorlage",
  detailIntroExtra:
    "Passe die Felder im Controller an, um Variablen dynamisch zu personalisieren. Öffne es in unserem visuellen Tiptap-Dokumentbereich, um Textblöcke zu bearbeiten, KI-Assistenten-Umschreibungen auszulösen und als PDF/Word zu exportieren.",

  exploreRelatedResources: "Verwandte Ressourcen entdecken",
  relatedTemplates: "Ähnliche Vorlagen",
  writingGuidesBlog: "Schreibratgeber & Blog-Artikel",
  popularCategories: "Beliebte Kategorien",

  hubHeading: "Kostenlose professionelle Geschäftsvorlagen",
  hubSubtitle:
    "Wähle aus unserer kuratierten Bibliothek dynamischer Vorlagen. Passe Felder, Stile und Werte nahtlos in unserer integrierten interaktiven Editor-Leinwand an.",
  freeWord: "Kostenlose",
  templatesWord: "Vorlagen",
  inWord: "in",

  allDocuments: "Alle Dokumente",
  documentTypes: "Dokumenttypen",
  relatedSearchesTitle: "Verwandte Suchanfragen",
  rsForFreelancers: "für Freelancer",
  rsLegal: "Rechtliche",
  rsInvoiceTemplates: "Rechnungsvorlagen",
  rsResumeLayouts: "Lebenslauf-Layouts",
  rsFreelancerAgreements: "Freelancer-Verträge",
  rsMarketingProposals: "Marketing-Angebote",

  noTemplatesFound: "Keine Vorlagen gefunden",
  noTemplatesDesc:
    "Wir konnten keine Vorlagen finden, die den Suchparametern oder Filtern entsprechen. Setze deine Suche zurück und versuche es erneut.",

  previewDetails: "Details ansehen",

  complianceHeading:
    "Konformität von Geschäftsdokumenten & offene Spezifikationen",
  complianceP1:
    "Alle in diesem Verzeichnis zusammengestellten Elemente sind für dynamische Feldinjektion und Variablenzuordnung optimiert. Nutzer können anpassen, mit unserem integrierten ",
  complianceEditorLink: "KI-fähigen Dokumenteneditor",
  complianceP2:
    " umschreiben und in portable Formate exportieren. Wir unterstützen die standardmäßigen ",
  compliancePdfLink: "Adobe-PDF-Spezifikationen",
  complianceP3:
    " für pixelgenaues Drucken und strukturierte Serialisierung. Erfahre mehr über Schema-Definitionen bei ",
  complianceSchemaLink: "Schema.org",
  complianceP4: ".",

  customizeVariables: "Variablen anpassen",
  fillParams:
    "Fülle die folgenden Parameter aus. Die Vorschau wird dynamisch in Echtzeit aktualisiert.",
  customizeInEditor: "Im Editor anpassen",
  customizeHint:
    "Ein Tippen öffnet unsere vollständige Tiptap-Leinwand, wo du eine Signatur hinzufügen, ein Logo hochladen und als PDF exportieren kannst.",
  qualityGuarantee: "Qualitätsgarantie für Vorlagen",
  qualityAts:
    "Getestet und optimiert für gängige Bewerbermanagementsysteme (ATS).",
  qualityAudit:
    "Formatiert nach standardmäßigen Rechnungsprüfungskonfigurationen.",
  qualityStandard: "Nach professionellen Branchenstandards formatiert.",
  qualityOffline:
    "Unterstützt sofortige Offline-Kompilierungen als PDF & DOCX.",
  livePreview: "Live-Dokumentvorschau",
  liveLabel: "Live",
};

const fr: Shape = {
  templatesBreadcrumb: "Modèles",
  templateNoun: "Modèle",
  detailIntroExtra:
    "Ajustez les champs dans le contrôleur pour personnaliser les variables de façon dynamique. Ouvrez-le dans notre espace documentaire visuel tiptap pour modifier des blocs de texte, déclencher des réécritures par l’assistant IA et exporter en PDF/Word.",

  exploreRelatedResources: "Explorer les ressources associées",
  relatedTemplates: "Modèles associés",
  writingGuidesBlog: "Guides de rédaction et articles de blog",
  popularCategories: "Catégories populaires",

  hubHeading: "Modèles professionnels gratuits pour entreprises",
  hubSubtitle:
    "Choisissez dans notre bibliothèque sélectionnée de modèles dynamiques. Personnalisez champs, styles et valeurs en toute fluidité dans notre canevas d’édition interactif intégré.",
  freeWord: "Gratuits",
  templatesWord: "Modèles",
  inWord: "à",

  allDocuments: "Tous les documents",
  documentTypes: "Types de documents",
  relatedSearchesTitle: "Recherches associées",
  rsForFreelancers: "pour freelances",
  rsLegal: "Juridiques",
  rsInvoiceTemplates: "Modèles de factures",
  rsResumeLayouts: "Mises en page de CV",
  rsFreelancerAgreements: "Contrats de freelance",
  rsMarketingProposals: "Propositions marketing",

  noTemplatesFound: "Aucun modèle trouvé",
  noTemplatesDesc:
    "Nous n’avons trouvé aucun modèle correspondant aux paramètres de recherche ou aux filtres. Essayez de réinitialiser votre recherche.",

  previewDetails: "Voir les détails",

  complianceHeading:
    "Conformité des documents d’entreprise et spécifications ouvertes",
  complianceP1:
    "Tous les éléments compilés dans ce répertoire sont optimisés pour prendre en charge l’injection dynamique de champs et le mappage de variables. Les utilisateurs peuvent personnaliser, réécrire à l’aide de notre ",
  complianceEditorLink: "éditeur de documents assisté par IA intégré",
  complianceP2:
    ", et exporter vers des formats portables. Nous prenons en charge les ",
  compliancePdfLink: "spécifications standard Adobe PDF",
  complianceP3:
    " pour une impression au pixel près et une sérialisation structurée. En savoir plus sur les définitions de schéma sur ",
  complianceSchemaLink: "Schema.org",
  complianceP4: ".",

  customizeVariables: "Personnaliser les variables",
  fillParams:
    "Renseignez les paramètres ci-dessous. L’aperçu se mettra à jour dynamiquement en temps réel.",
  customizeInEditor: "Personnaliser dans l’éditeur",
  customizeHint:
    "Un appui ouvre notre canevas tiptap complet où vous pouvez ajouter une signature, importer un logo et exporter en PDF.",
  qualityGuarantee: "Garantie de qualité du modèle",
  qualityAts:
    "Testé et optimisé pour les principaux systèmes de suivi des candidatures (ATS).",
  qualityAudit:
    "Formaté selon les configurations d’audit de factures standard.",
  qualityStandard: "Formaté selon les normes professionnelles du secteur.",
  qualityOffline:
    "Prend en charge les compilations PDF et DOCX instantanées hors ligne.",
  livePreview: "Aperçu du document en direct",
  liveLabel: "En direct",
};

const ar: Shape = {
  templatesBreadcrumb: "قوالب",
  templateNoun: "قالب",
  detailIntroExtra:
    "اضبط الحقول في وحدة التحكم لتخصيص المتغيرات ديناميكيًا. افتحه في مساحة عمل المستندات المرئية tiptap لتحرير كتل النص وتشغيل عمليات إعادة الصياغة بمساعد الذكاء الاصطناعي والتصدير إلى PDF/Word.",

  exploreRelatedResources: "استكشف الموارد ذات الصلة",
  relatedTemplates: "قوالب ذات صلة",
  writingGuidesBlog: "أدلة الكتابة ومقالات المدونة",
  popularCategories: "الفئات الشائعة",

  hubHeading: "قوالب أعمال احترافية مجانية",
  hubSubtitle:
    "اختر من مكتبتنا المنسقة من القوالب الديناميكية. خصّص الحقول والأنماط والقيم بسلاسة داخل لوحة المحرر التفاعلية المدمجة.",
  freeWord: "مجانية",
  templatesWord: "قوالب",
  inWord: "في",

  allDocuments: "جميع المستندات",
  documentTypes: "أنواع المستندات",
  relatedSearchesTitle: "عمليات بحث ذات صلة",
  rsForFreelancers: "للمستقلين",
  rsLegal: "قانونية",
  rsInvoiceTemplates: "قوالب الفواتير",
  rsResumeLayouts: "تصاميم السير الذاتية",
  rsFreelancerAgreements: "اتفاقيات المستقلين",
  rsMarketingProposals: "مقترحات التسويق",

  noTemplatesFound: "لم يتم العثور على قوالب",
  noTemplatesDesc:
    "لم نتمكن من العثور على قوالب تطابق معايير البحث أو عوامل التصفية. حاول إعادة ضبط بحثك.",

  previewDetails: "معاينة التفاصيل",

  complianceHeading: "امتثال مستندات الشركات والمواصفات المفتوحة",
  complianceP1:
    "جميع العناصر المجمّعة في هذا الدليل محسّنة لدعم إدخال الحقول الديناميكي وتعيين المتغيرات. يمكن للمستخدمين التخصيص وإعادة الصياغة باستخدام ",
  complianceEditorLink: "محرر المستندات المدعوم بالذكاء الاصطناعي المدمج",
  complianceP2: "، والتصدير إلى تنسيقات محمولة. نحن ندعم ",
  compliancePdfLink: "مواصفات Adobe PDF القياسية",
  complianceP3:
    " للطباعة الدقيقة والتسلسل المنظم. تعرّف على المزيد حول تعريفات المخطط في ",
  complianceSchemaLink: "Schema.org",
  complianceP4: ".",

  customizeVariables: "تخصيص المتغيرات",
  fillParams:
    "املأ المعلمات أدناه. ستتحدث المعاينة ديناميكيًا في الوقت الفعلي.",
  customizeInEditor: "التخصيص في المحرر",
  customizeHint:
    "يفتح النقر لوحة tiptap الكاملة حيث يمكنك إضافة توقيع ورفع شعار وتصدير PDF.",
  qualityGuarantee: "ضمان جودة القالب",
  qualityAts: "مُختبرة ومُحسّنة لأنظمة تتبع المتقدمين الرئيسية (ATS).",
  qualityAudit: "منسّقة وفق إعدادات تدقيق الفواتير القياسية.",
  qualityStandard: "منسّق وفق المعايير المهنية للقطاع.",
  qualityOffline: "تدعم إنشاء ملفات PDF وDOCX الفوري دون اتصال.",
  livePreview: "معاينة حية للمستند",
  liveLabel: "مباشر",
};

export const templates: Dict<Shape> = { en, es, de, fr, ar };
