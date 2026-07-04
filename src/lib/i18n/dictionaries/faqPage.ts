import type { Dict } from "../locales";

const en = {
  eyebrow: "Help Center",
  title: "Frequently Asked Questions",
  subtitle:
    "Everything you need to know about Templix AI's templates, editor, AI assistant, and exports.",
  stillHavePre: "Still have questions? Visit our ",
  contactLink: "contact page",
  stillHavePost: " and we’ll be happy to help.",
};

type Shape = typeof en;

const es: Shape = {
  eyebrow: "Centro de ayuda",
  title: "Preguntas frecuentes",
  subtitle:
    "Todo lo que necesitas saber sobre las plantillas, el editor, el asistente de IA y las exportaciones de Templix AI.",
  stillHavePre: "¿Aún tienes preguntas? Visita nuestra ",
  contactLink: "página de contacto",
  stillHavePost: " y estaremos encantados de ayudarte.",
};

const de: Shape = {
  eyebrow: "Hilfe-Center",
  title: "Häufig gestellte Fragen",
  subtitle:
    "Alles, was du über die Vorlagen, den Editor, den KI-Assistenten und die Exporte von Templix AI wissen musst.",
  stillHavePre: "Hast du noch Fragen? Besuche unsere ",
  contactLink: "Kontaktseite",
  stillHavePost: " und wir helfen dir gerne weiter.",
};

const fr: Shape = {
  eyebrow: "Centre d’aide",
  title: "Questions fréquentes",
  subtitle:
    "Tout ce que vous devez savoir sur les modèles, l’éditeur, l’assistant IA et les exports de Templix AI.",
  stillHavePre: "Vous avez encore des questions ? Consultez notre ",
  contactLink: "page de contact",
  stillHavePost: " et nous serons ravis de vous aider.",
};

const ar: Shape = {
  eyebrow: "مركز المساعدة",
  title: "الأسئلة الشائعة",
  subtitle:
    "كل ما تحتاج معرفته عن قوالب Templix AI والمحرر ومساعد الذكاء الاصطناعي وعمليات التصدير.",
  stillHavePre: "هل لا تزال لديك أسئلة؟ تفضّل بزيارة ",
  contactLink: "صفحة الاتصال",
  stillHavePost: " وسيسعدنا مساعدتك.",
};

export const faqPage: Dict<Shape> = { en, es, de, fr, ar };
