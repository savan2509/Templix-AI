// German (de) content translations for Templix AI.
// Keys are the exact slug strings from src/constants/index.ts (categories),
// src/data/tools.ts (TOOLS) and src/data/ai-tools.ts (AI_TOOLS).
// Slugs are never translated.

export const de = {
  categories: {
    "invoices": {
      name: "Rechnungen",
      description: "Rechnungsstellung, Belege & Zahlungsaufforderungen",
    },
    "resumes": {
      name: "Lebensläufe",
      description: "Bewerbungen & Karriereprofile",
    },
    "contracts": {
      name: "Verträge",
      description: "Vereinbarungen, NDAs & Leistungsbedingungen",
    },
    "proposals": {
      name: "Angebote",
      description: "Geschäftspräsentationen & Projektumfänge",
    },
    "letters": {
      name: "Briefe & E-Mails",
      description: "Anschreiben, formelle E-Mails & Memos",
    },
    "reports": {
      name: "Berichte",
      description: "Geschäfts-, Projekt- & Jahresberichte",
    },
    "business-plans": {
      name: "Businesspläne",
      description: "Startup-Pläne, Strategie & Finanzen",
    },
    "quotations": {
      name: "Kostenvoranschläge",
      description: "Preisangebote, Schätzungen & Ausschreibungen",
    },
  },
  tools: {
    // ── Rechnung & Business ──────────────────────────────────────────────
    "gst-calculator": {
      title: "MwSt.- & Steuerrechner",
      short: "MwSt.- / Steuerrechner",
      description:
        "Kostenloser Rechner für MwSt., Umsatzsteuer und Verkaufssteuer. Rechnen Sie Steuer zu einem Betrag hinzu oder heraus und sehen Sie sofort Netto-, Steuer- und Bruttobetrag.",
    },
    "discount-calculator": {
      title: "Rabattrechner",
      short: "Rabattrechner",
      description:
        "Kostenloser Rabattrechner. Geben Sie einen Preis und einen Rabatt in Prozent ein, um den Endpreis und Ihre genaue Ersparnis zu sehen.",
    },
    "profit-margin-calculator": {
      title: "Gewinnmargen-Rechner",
      short: "Gewinnmargen-Rechner",
      description:
        "Kostenloser Rechner für Gewinnmarge und Aufschlag. Geben Sie Ihre Kosten und den Verkaufspreis ein und erhalten Sie Gewinn, Margen- und Aufschlagsprozentsatz.",
    },
    "invoice-number-generator": {
      title: "Rechnungsnummern-Generator",
      short: "Rechnungsnummern-Generator",
      description:
        "Kostenloser Rechnungsnummern-Generator. Erstellen Sie professionelle, fortlaufende Rechnungsnummern mit individuellem Präfix, Datum und aufgefülltem Zähler.",
    },
    "hourly-rate-calculator": {
      title: "Stundensatz-Rechner für Freelancer",
      short: "Stundensatz-Rechner",
      description:
        "Kostenloser Stundensatz-Rechner für Freelancer. Ermitteln Sie den Stundensatz, den Sie verlangen müssen, um Ihr Einkommensziel mit Ihren abrechenbaren Stunden zu erreichen.",
    },
    // ── PDF-Tools ────────────────────────────────────────────────────────
    "merge-pdf": {
      title: "PDF-Dateien zusammenfügen",
      short: "PDF zusammenfügen",
      description:
        "Kostenloses Online-PDF-Zusammenführen. Verbinden Sie zwei oder mehr PDF-Dateien direkt im Browser zu einem einzigen Dokument. Seiten neu anordnen, kein Upload, kein Wasserzeichen.",
    },
    "split-pdf": {
      title: "PDF-Seiten teilen",
      short: "PDF teilen",
      description:
        "Kostenloses Online-PDF-Teilen. Extrahieren Sie einen Seitenbereich aus einer PDF in eine neue Datei – direkt im Browser. Kein Upload, kein Wasserzeichen, ohne Anmeldung.",
    },
    "jpg-to-pdf": {
      title: "JPG-zu-PDF-Konverter (jedes Bild zu PDF)",
      short: "Bild zu PDF",
      description:
        "Kostenloser Bild-zu-PDF-Konverter. Wandeln Sie JPG-, PNG-, WEBP-, GIF-, BMP- oder AVIF-Bilder direkt im Browser in eine einzige PDF um – ein Bild pro Seite. Kein Upload, kein Wasserzeichen, ohne Anmeldung.",
    },
    "pdf-to-jpg": {
      title: "PDF-zu-JPG-Konverter (JPG, PNG, WEBP)",
      short: "PDF zu JPG",
      description:
        "Kostenloser PDF-zu-Bild-Konverter. Wandeln Sie jede Seite einer PDF direkt im Browser in ein hochwertiges JPG-, PNG- oder WEBP-Bild zum Herunterladen um. Kein Upload nötig.",
    },
    "image-converter": {
      title: "Bildkonverter: PNG, JPG, WEBP & mehr",
      short: "Bildkonverter",
      description:
        "Kostenloser Bildkonverter – konvertieren Sie PNG zu JPG, JPG zu PNG, WEBP zu PNG, PNG zu WEBP, HEIC zu JPG sowie GIF, BMP, AVIF und SVG in jedes Format. Stapelkonvertierung und Qualitätsanpassung direkt im Browser. Kein Upload, kein Wasserzeichen, ohne Anmeldung.",
    },
    // ── Lebenslauf-Tools ─────────────────────────────────────────────────
    "resume-ats-checker": {
      title: "ATS-Score-Checker für Lebensläufe",
      short: "Lebenslauf-ATS-Checker",
      description:
        "Kostenloser ATS-Checker für Lebensläufe. Fügen Sie Ihren Lebenslauf ein und erhalten Sie sofort einen ATS-Score mit Prüfungen zu Abschnitten, Kontaktdaten, Aktionsverben und Kennzahlen.",
    },
    // ── Angebote ─────────────────────────────────────────────────────────
    "proposal-builder": {
      title: "Generator für Geschäftsangebote",
      short: "Angebots-Generator",
      description:
        "Kostenloser Generator für Geschäftsangebote. Füllen Sie ein kurzes Formular aus und laden Sie ein professionelles Kundenangebot als PDF oder Word herunter – ohne Anmeldung, kein Wasserzeichen.",
    },
    "pricing-calculator": {
      title: "Projekt-Preisrechner",
      short: "Preisrechner",
      description:
        "Kostenloser Projekt-Preisrechner. Fügen Sie Positionen mit Mengen und Sätzen hinzu, wenden Sie Rabatt und Steuer an und erhalten Sie sofort die Angebotssumme.",
    },
    "scope-generator": {
      title: "Generator für den Leistungsumfang",
      short: "Leistungsumfang-Generator",
      description:
        "Kostenloser Generator für den Leistungsumfang. Verwandeln Sie ein kurzes Formular in einen klaren Leistungsumfang mit Zielen, In-/Out-of-Scope, Liefergegenständen und Abnahmekriterien.",
    },
    // ── Verträge & Recht ─────────────────────────────────────────────────
    "contract-generator": {
      title: "Generator für Dienstleistungsverträge",
      short: "Vertrags-Generator",
      description:
        "Kostenloser Generator für Dienstleistungsverträge. Tragen Sie Parteien, Leistungen, Zahlung und Laufzeit ein und laden Sie einen professionellen Vertrag als PDF oder Word herunter.",
    },
    "nda-generator": {
      title: "NDA-Generator (Geheimhaltungsvereinbarung)",
      short: "NDA-Generator",
      description:
        "Kostenloser Generator für Geheimhaltungsvereinbarungen (NDA). Tragen Sie Parteien, Zweck und Laufzeit ein und laden Sie ein unterschriftsreifes NDA als PDF oder Word herunter.",
    },
    "terms-generator": {
      title: "Generator für Allgemeine Geschäftsbedingungen",
      short: "AGB-Generator",
      description:
        "Kostenloser Generator für Allgemeine Geschäftsbedingungen. Erstellen Sie aus einem kurzen Formular Standard-AGB für Ihre Website oder App und laden Sie sie als PDF oder Word herunter.",
    },
    // ── Briefe ───────────────────────────────────────────────────────────
    "letter-generator": {
      title: "Geschäftsbrief-Generator",
      short: "Brief-Generator",
      description:
        "Kostenloser Geschäftsbrief-Generator. Geben Sie Absender, Empfänger, Betreff und Text ein und erstellen Sie einen korrekt formatierten Brief zum Herunterladen oder Kopieren.",
    },
    "resignation-letter-generator": {
      title: "Kündigungsschreiben-Generator",
      short: "Kündigungsschreiben",
      description:
        "Kostenloser Kündigungsschreiben-Generator. Tragen Sie Ihre Position, das Unternehmen und Ihren letzten Arbeitstag ein und erstellen Sie in Sekunden ein höfliches, professionelles Kündigungsschreiben.",
    },
    "recommendation-letter-generator": {
      title: "Empfehlungsschreiben-Generator",
      short: "Empfehlungsschreiben",
      description:
        "Kostenloser Empfehlungsschreiben-Generator. Verwandeln Sie die Stärken einer Kandidatin oder eines Kandidaten in ein ausgefeiltes Referenzschreiben zum Download als PDF oder Word.",
    },
    // ── KI: Schreiben ────────────────────────────────────────────────────
    "ai-writer": {
      title: "KI-Autor",
      short: "KI-Autor",
      description:
        "Kostenloser KI-Autor. Beschreiben Sie, was Sie brauchen, und erstellen Sie in Sekunden ausgefeilte Inhalte – Blog-Abschnitte, Produkttexte, Beschreibungen.",
    },
    "ai-rewrite": {
      title: "KI-Umformulierung",
      short: "KI-Umformulierung",
      description:
        "Kostenloses KI-Paraphrasierungstool. Fügen Sie beliebigen Text ein und formulieren Sie ihn klarer und professioneller, ohne die Bedeutung zu verändern.",
    },
    "grammar-checker": {
      title: "Grammatikprüfung",
      short: "Grammatikprüfung",
      description:
        "Kostenlose KI-Grammatikprüfung. Korrigieren Sie Grammatik, Rechtschreibung und Zeichensetzung sofort. Text einfügen und eine korrigierte Version erhalten.",
    },
    "humanize-ai-text": {
      title: "KI-Text vermenschlichen",
      short: "KI-Text vermenschlichen",
      description:
        "Kostenloser KI-Humanizer. Lassen Sie KI-generierten Text natürlich und menschlich klingen – variieren Sie den Rhythmus, entfernen Sie roboterhafte Formulierungen und behalten Sie die Bedeutung bei.",
    },
    "ai-summarizer": {
      title: "KI-Zusammenfassung",
      short: "KI-Zusammenfassung",
      description:
        "Kostenlose KI-Zusammenfassung. Fügen Sie ein langes Dokument oder einen Artikel ein und erhalten Sie eine klare, prägnante Zusammenfassung der wichtigsten Punkte.",
    },
    "tone-changer": {
      title: "Tonfall-Änderer",
      short: "Tonfall-Änderer",
      description:
        "Kostenloser KI-Tonfall-Änderer. Formulieren Sie jede Nachricht in einem anderen Tonfall um – professionell, freundlich, überzeugend – ohne die Bedeutung zu verändern.",
    },
    "ai-translator": {
      title: "KI-Übersetzer",
      short: "KI-Übersetzer",
      description:
        "Kostenloser KI-Übersetzer. Übersetzen Sie Text natürlich in eine andere Sprache und bewahren Sie dabei Bedeutung und Tonfall. Ohne Anmeldung.",
    },
    "paragraph-generator": {
      title: "Absatz-Generator",
      short: "Absatz-Generator",
      description:
        "Kostenloser KI-Absatz-Generator. Geben Sie ein Thema oder einen einleitenden Gedanken ein und erhalten Sie in Sekunden einen gut strukturierten Absatz.",
    },
    "text-expander": {
      title: "Text-Erweiterer",
      short: "Text-Erweiterer",
      description:
        "Kostenloser KI-Text-Erweiterer. Verwandeln Sie kurze Notizen oder Stichpunkte in vollständige, gut formulierte Sätze und Absätze.",
    },
    // ── KI: Lebenslauf ───────────────────────────────────────────────────
    "ai-resume-summary-generator": {
      title: "Generator für Lebenslauf-Zusammenfassungen",
      short: "Lebenslauf-Zusammenfassung",
      description:
        "Kostenloser KI-Generator für Lebenslauf-Zusammenfassungen. Verwandeln Sie Ihre Position und Erfahrung in eine prägnante professionelle Zusammenfassung für den Kopf Ihres Lebenslaufs.",
    },
    "ai-cover-letter-generator": {
      title: "KI-Generator für Anschreiben",
      short: "KI-Anschreiben",
      description:
        "Kostenloser KI-Generator für Anschreiben. Geben Sie die Stelle und Ihren Hintergrund ein und erhalten Sie in Sekunden ein maßgeschneidertes, einseitiges Anschreiben.",
    },
    "resume-bullet-generator": {
      title: "Generator für Lebenslauf-Stichpunkte",
      short: "Lebenslauf-Stichpunkte",
      description:
        "Kostenloser KI-Generator für Lebenslauf-Stichpunkte. Verwandeln Sie eine Aufgabe oder Verantwortung in starke, quantifizierte Erfolgs-Stichpunkte.",
    },
    "interview-questions-generator": {
      title: "Generator für Interviewfragen",
      short: "Interviewfragen",
      description:
        "Kostenloser KI-Generator für Interviewfragen. Geben Sie eine Stelle ein und erhalten Sie maßgeschneiderte Interviewfragen für Kandidaten oder Ihre eigene Vorbereitung.",
    },
    // ── KI: Angebote ─────────────────────────────────────────────────────
    "ai-proposal-generator": {
      title: "KI-Generator für Angebote",
      short: "KI-Angebots-Generator",
      description:
        "Kostenloser KI-Generator für Geschäftsangebote. Beschreiben Sie das Projekt und erhalten Sie ein klares, überzeugendes Angebot mit Umfang, Zeitplan und Preisen.",
    },
    // ── KI: Business ─────────────────────────────────────────────────────
    "ai-email-generator": {
      title: "KI-E-Mail-Generator",
      short: "KI-E-Mail-Generator",
      description:
        "Kostenloser KI-E-Mail-Autor. Beschreiben Sie, was Sie sagen möchten, und erhalten Sie eine professionelle, versandfertige E-Mail mit Betreffzeile.",
    },
    "ai-business-plan-generator": {
      title: "KI-Businessplan-Generator",
      short: "Businessplan-Generator",
      description:
        "Kostenloser KI-Businessplan-Generator. Beschreiben Sie Ihre Idee und erhalten Sie einen strukturierten einseitigen Businessplan, auf dem Sie aufbauen können.",
    },
    "job-description-generator": {
      title: "Stellenbeschreibungs-Generator",
      short: "Stellenbeschreibung",
      description:
        "Kostenloser KI-Generator für Stellenbeschreibungen. Geben Sie eine Position ein und erhalten Sie eine vollständige, professionelle Stellenanzeige mit Aufgaben und Anforderungen.",
    },
    "meeting-minutes-generator": {
      title: "Protokoll-Generator",
      short: "Besprechungsprotokoll",
      description:
        "Kostenloser KI-Protokoll-Generator. Fügen Sie grobe Notizen ein und erhalten Sie ein sauberes, strukturiertes Protokoll mit Beschlüssen und Aufgaben.",
    },
    // ── KI: Marketing ────────────────────────────────────────────────────
    "product-description-generator": {
      title: "Generator für Produktbeschreibungen",
      short: "Produktbeschreibung",
      description:
        "Kostenloser KI-Generator für Produktbeschreibungen. Verwandeln Sie Produktmerkmale in überzeugende, SEO-freundliche Beschreibungen für Ihren Shop oder Marktplatz.",
    },
    "social-media-caption-generator": {
      title: "Social-Media-Bildunterschriften-Generator",
      short: "Bildunterschriften-Generator",
      description:
        "Kostenloser KI-Generator für Bildunterschriften für Instagram, Facebook und mehr. Beschreiben Sie Ihren Beitrag und erhalten Sie fesselnde Bildunterschriften mit Hashtags.",
    },
    "linkedin-post-generator": {
      title: "LinkedIn-Beitrags-Generator",
      short: "LinkedIn-Beitrag",
      description:
        "Kostenloser KI-Generator für LinkedIn-Beiträge. Verwandeln Sie eine Idee oder ein Update in einen fesselnden, professionellen LinkedIn-Beitrag, der Kommentare anregt.",
    },
    "ad-copy-generator": {
      title: "Werbetext-Generator",
      short: "Werbetext-Generator",
      description:
        "Kostenloser KI-Werbetext-Generator. Erhalten Sie in Sekunden konversionsstarke Überschriften und Texte für Google-, Facebook- und Instagram-Anzeigen.",
    },
    "slogan-generator": {
      title: "Slogan- & Claim-Generator",
      short: "Slogan-Generator",
      description:
        "Kostenloser KI-Slogan-Generator. Beschreiben Sie Ihre Marke und erhalten Sie einprägsame, unvergessliche Slogans und Claims zur Auswahl.",
    },
    "bio-generator": {
      title: "Bio-Generator",
      short: "Bio-Generator",
      description:
        "Kostenloser KI-Bio-Generator. Erstellen Sie in Sekunden eine professionelle oder gesellige Bio für LinkedIn, Instagram, X oder Ihre Website.",
    },
    // ── KI: SEO ──────────────────────────────────────────────────────────
    "blog-title-generator": {
      title: "Blogtitel-Generator",
      short: "Blogtitel-Generator",
      description:
        "Kostenloser KI-Blogtitel-Generator. Geben Sie ein Thema ein und erhalten Sie einprägsame, klickstarke, SEO-freundliche Überschriften-Ideen.",
    },
    "meta-description-generator": {
      title: "Meta-Description-Generator",
      short: "Meta-Description",
      description:
        "Kostenloser KI-Generator für Meta-Descriptions. Fügen Sie Ihren Seiteninhalt oder Ihr Thema ein und erhalten Sie eine SEO-optimierte Meta-Description mit unter 160 Zeichen.",
    },
    "blog-outline-generator": {
      title: "Blog-Gliederungs-Generator",
      short: "Blog-Gliederung",
      description:
        "Kostenloser KI-Generator für Blog-Gliederungen. Verwandeln Sie ein Thema in eine strukturierte Gliederung mit Überschriften und Unterpunkten, die zum Schreiben bereit ist.",
    },
    "faq-generator": {
      title: "FAQ-Generator",
      short: "FAQ-Generator",
      description:
        "Kostenloser KI-FAQ-Generator. Beschreiben Sie Ihr Produkt, Ihre Dienstleistung oder Ihr Thema und erhalten Sie klare, hilfreiche häufig gestellte Fragen samt Antworten.",
    },
  },
} as const;
