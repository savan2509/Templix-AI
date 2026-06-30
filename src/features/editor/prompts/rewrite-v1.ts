export const rewritePromptV1 = (text: string): string => {
  return `Rewrite the following text to make it sound more professional, clear, and grammatically correct:
"${text}"
Only return the rewritten text. Do not add intro greetings, post-explanations, or wrap the output in quotes.`;
};
