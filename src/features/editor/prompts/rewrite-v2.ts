export const rewritePromptV2 = (text: string, tone: string = "professional"): string => {
  return `You are an expert editor. Rewrite the following text to align with a "${tone}" tone:
"${text}"

Rules:
1. STRICTLY preserve any HTML tag boundaries (e.g. <strong>, <em>, <a>) or variable curly brackets (e.g. {{companyName}}) embedded in the text.
2. Maintain matching sentence structures and length unless they contain errors.
3. Return ONLY the rewritten text. Do not include quotes around the output, conversational prefaces, or explanations.`;
};
