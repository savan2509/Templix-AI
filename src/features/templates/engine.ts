export class TemplateEngine {
  /**
   * Recursively scans document content to parse all unique {{variableName}} patterns.
   */
  static parseVariables(content: any): string[] {
    if (!content) return [];
    const rawText = typeof content === "string" ? content : JSON.stringify(content);
    const pattern = /\{\{([a-zA-Z0-9_]+)\}\}/g;
    const variables = new Set<string>();
    
    let match;
    while ((match = pattern.exec(rawText)) !== null) {
      if (match[1]) {
        variables.add(match[1]);
      }
    }
    return Array.from(variables);
  }

  /**
   * Replaces dynamic variables in the content with values from the prefill dictionary.
   */
  static renderTemplate(content: any, prefills: Record<string, string>): any {
    if (!content) return content;
    const rawText = typeof content === "string" ? content : JSON.stringify(content);
    let renderedText = rawText;

    Object.entries(prefills).forEach(([key, val]) => {
      // If val is empty, leave a placeholder marker
      const replacement = val !== undefined && val !== "" ? val : `[${key}]`;
      renderedText = renderedText.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), replacement);
    });

    if (typeof content === "string") {
      return renderedText;
    }

    try {
      return JSON.parse(renderedText);
    } catch (e) {
      console.warn("TemplateEngine failed to parse rendered JSON, returning original content block", e);
      return content;
    }
  }
}
