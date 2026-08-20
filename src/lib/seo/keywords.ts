/**
 * Keyword Generation & Semantic Clustering Engine for Templix AI
 */

export interface KeywordCluster {
  primary: string;
  secondary: string[];
  intent: "transactional" | "commercial" | "informational" | "navigational";
}

export const CORE_KEYWORD_CLUSTERS: Record<string, KeywordCluster> = {
  invoices: {
    primary: "free invoice templates",
    secondary: [
      "online invoice generator",
      "freelancer invoice template",
      "small business billing format",
      "downloadable invoice pdf",
      "editable word invoice",
      "professional tax invoice template",
    ],
    intent: "transactional",
  },
  resumes: {
    primary: "professional resume templates",
    secondary: [
      "ATS friendly resume format",
      "free CV template download",
      "software engineer resume template",
      "modern resume builder",
      "editable resume docx",
      "executive curriculum vitae format",
    ],
    intent: "commercial",
  },
  contracts: {
    primary: "legal agreement templates",
    secondary: [
      "freelance contract template",
      "non disclosure agreement nda",
      "independent contractor agreement",
      "service level agreement template",
      "consulting contract format",
      "editable legal contract pdf",
    ],
    intent: "transactional",
  },
  proposals: {
    primary: "business proposal templates",
    secondary: [
      "project proposal template",
      "freelance client proposal",
      "marketing proposal format",
      "web design proposal pdf",
      "commercial bid template",
    ],
    intent: "commercial",
  },
  tools: {
    primary: "free document tools online",
    secondary: [
      "free invoice generator",
      "online tax calculator",
      "word count utility",
      "pdf document converter",
      "document formatting tools",
    ],
    intent: "transactional",
  },
  industries: {
    primary: "industry document templates",
    secondary: [
      "construction invoice templates",
      "real estate agreements",
      "healthcare service templates",
      "tech freelancer contracts",
      "hospitality billing forms",
    ],
    intent: "commercial",
  },
};

/**
 * Dynamically extract and generate keyword arrays for pages based on category, title, tags, and type.
 */
export function generatePageKeywords(options: {
  title: string;
  category?: string;
  tags?: string[];
  type?: "template" | "tool" | "use-case" | "industry" | "blog" | "category" | "page";
}): string[] {

  const { title, category, tags = [], type = "template" } = options;
  const keywords = new Set<string>();

  // Add normalized title
  keywords.add(title.toLowerCase());

  // Add specific tags
  tags.forEach((tag) => keywords.add(tag.toLowerCase()));

  // Add category cluster if matching
  if (category) {
    const normCat = category.toLowerCase();
    const cluster = CORE_KEYWORD_CLUSTERS[normCat];
    if (cluster) {
      keywords.add(cluster.primary);
      cluster.secondary.slice(0, 4).forEach((kw) => keywords.add(kw));
    }
  }

  // Type-specific fallback enhancers
  if (type === "template") {
    keywords.add("free template download");
    keywords.add("editable document");
    keywords.add("pdf and word format");
  } else if (type === "tool") {
    keywords.add("free online tool");
    keywords.add("instant generator");
    keywords.add("no sign up required");
  } else if (type === "industry") {
    keywords.add("industry standard formats");
    keywords.add("commercial documentation");
  }

  return Array.from(keywords).slice(0, 12);
}
