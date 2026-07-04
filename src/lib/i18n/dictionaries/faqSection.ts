import type { Dict } from "../locales";

// Heading for the homepage FAQ accordion. The Q&A items themselves are content
// (see @/data/faq) and are localized separately there.

const en = { heading: "Frequently Asked Questions" };
type Shape = typeof en;

const es: Shape = { heading: "Preguntas frecuentes" };
const de: Shape = { heading: "Häufig gestellte Fragen" };
const fr: Shape = { heading: "Questions fréquentes" };
const ar: Shape = { heading: "الأسئلة الشائعة" };

export const faqSection: Dict<Shape> = { en, es, de, fr, ar };
