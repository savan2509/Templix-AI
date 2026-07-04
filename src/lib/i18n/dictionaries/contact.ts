import type { Dict } from "../locales";

const en = {
  metaTitle: "Contact Us",
  metaDescription:
    "Get in touch with the Templix AI team for support, feedback, or partnership inquiries. We usually reply within one business day.",

  eyebrow: "We’re here to help",
  title: "Contact Us",
  subtitle:
    "Have a question, found a bug, or want to partner with us? Reach out — we usually reply within one business day.",

  channelSupportTitle: "General & Support",
  channelSupportText: "Questions, bugs, or feedback about the product.",
  channelPartnershipsTitle: "Partnerships",
  channelPartnershipsText: "Collaborations, press, and business inquiries.",
  channelLegalTitle: "Privacy & Legal",
  channelLegalText: "Data requests and legal questions.",

  beforeEmailHeading: "Before you email",
  beforeEmailPre: "Many common questions are answered on our ",
  faqLink: "FAQ page",
  beforeEmailMid: " and in our ",
  guidesLink: "guides",
  beforeEmailPost:
    ". For the fastest help, include the template name and a short description of the issue.",
};

type Shape = typeof en;

const es: Shape = {
  metaTitle: "Contáctanos",
  metaDescription:
    "Ponte en contacto con el equipo de Templix AI para obtener soporte, enviar comentarios o consultas de colaboración. Normalmente respondemos en un día hábil.",

  eyebrow: "Estamos aquí para ayudarte",
  title: "Contáctanos",
  subtitle:
    "¿Tienes una pregunta, encontraste un error o quieres colaborar con nosotros? Escríbenos: normalmente respondemos en un día hábil.",

  channelSupportTitle: "General y soporte",
  channelSupportText: "Preguntas, errores o comentarios sobre el producto.",
  channelPartnershipsTitle: "Colaboraciones",
  channelPartnershipsText: "Colaboraciones, prensa y consultas comerciales.",
  channelLegalTitle: "Privacidad y legal",
  channelLegalText: "Solicitudes de datos y cuestiones legales.",

  beforeEmailHeading: "Antes de escribirnos",
  beforeEmailPre: "Muchas preguntas comunes se responden en nuestra ",
  faqLink: "página de preguntas frecuentes",
  beforeEmailMid: " y en nuestras ",
  guidesLink: "guías",
  beforeEmailPost:
    ". Para obtener ayuda más rápida, incluye el nombre de la plantilla y una breve descripción del problema.",
};

const de: Shape = {
  metaTitle: "Kontakt",
  metaDescription:
    "Kontaktieren Sie das Templix-AI-Team für Support, Feedback oder Partnerschaftsanfragen. Wir antworten in der Regel innerhalb eines Werktags.",

  eyebrow: "Wir sind für Sie da",
  title: "Kontakt",
  subtitle:
    "Haben Sie eine Frage, einen Fehler gefunden oder möchten Sie mit uns zusammenarbeiten? Melden Sie sich — wir antworten in der Regel innerhalb eines Werktags.",

  channelSupportTitle: "Allgemein & Support",
  channelSupportText: "Fragen, Fehler oder Feedback zum Produkt.",
  channelPartnershipsTitle: "Partnerschaften",
  channelPartnershipsText: "Kooperationen, Presse und Geschäftsanfragen.",
  channelLegalTitle: "Datenschutz & Recht",
  channelLegalText: "Datenanfragen und rechtliche Fragen.",

  beforeEmailHeading: "Bevor Sie schreiben",
  beforeEmailPre: "Viele häufige Fragen werden auf unserer ",
  faqLink: "FAQ-Seite",
  beforeEmailMid: " und in unseren ",
  guidesLink: "Anleitungen",
  beforeEmailPost:
    " beantwortet. Für schnellste Hilfe geben Sie bitte den Vorlagennamen und eine kurze Beschreibung des Problems an.",
};

const fr: Shape = {
  metaTitle: "Nous contacter",
  metaDescription:
    "Contactez l’équipe Templix AI pour obtenir de l’assistance, envoyer des commentaires ou des demandes de partenariat. Nous répondons généralement sous un jour ouvré.",

  eyebrow: "Nous sommes là pour vous aider",
  title: "Nous contacter",
  subtitle:
    "Vous avez une question, trouvé un bug ou souhaitez collaborer avec nous ? Écrivez-nous — nous répondons généralement sous un jour ouvré.",

  channelSupportTitle: "Général et assistance",
  channelSupportText: "Questions, bugs ou commentaires sur le produit.",
  channelPartnershipsTitle: "Partenariats",
  channelPartnershipsText: "Collaborations, presse et demandes commerciales.",
  channelLegalTitle: "Confidentialité et mentions légales",
  channelLegalText: "Demandes de données et questions juridiques.",

  beforeEmailHeading: "Avant de nous écrire",
  beforeEmailPre: "De nombreuses questions courantes trouvent leur réponse sur notre ",
  faqLink: "page FAQ",
  beforeEmailMid: " et dans nos ",
  guidesLink: "guides",
  beforeEmailPost:
    ". Pour une aide plus rapide, indiquez le nom du modèle et une brève description du problème.",
};

const ar: Shape = {
  metaTitle: "اتصل بنا",
  metaDescription:
    "تواصل مع فريق Templix AI للحصول على الدعم أو إرسال الملاحظات أو استفسارات الشراكة. نرد عادةً خلال يوم عمل واحد.",

  eyebrow: "نحن هنا للمساعدة",
  title: "اتصل بنا",
  subtitle:
    "هل لديك سؤال أو اكتشفت خطأً أو ترغب في التعاون معنا؟ تواصل معنا — نرد عادةً خلال يوم عمل واحد.",

  channelSupportTitle: "عام والدعم",
  channelSupportText: "أسئلة أو أخطاء أو ملاحظات حول المنتج.",
  channelPartnershipsTitle: "الشراكات",
  channelPartnershipsText: "التعاون والصحافة والاستفسارات التجارية.",
  channelLegalTitle: "الخصوصية والشؤون القانونية",
  channelLegalText: "طلبات البيانات والأسئلة القانونية.",

  beforeEmailHeading: "قبل أن ترسل بريدًا إلكترونيًا",
  beforeEmailPre: "تتم الإجابة على العديد من الأسئلة الشائعة في ",
  faqLink: "صفحة الأسئلة الشائعة",
  beforeEmailMid: " وفي ",
  guidesLink: "أدلتنا",
  beforeEmailPost:
    ". للحصول على مساعدة أسرع، أدرِج اسم القالب ووصفًا موجزًا للمشكلة.",
};

export const contact: Dict<Shape> = { en, es, de, fr, ar };
