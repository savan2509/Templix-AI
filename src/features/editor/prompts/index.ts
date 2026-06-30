import { rewritePromptV1 } from "./rewrite-v1";
import { rewritePromptV2 } from "./rewrite-v2";

export type PromptVersion = "v1" | "v2";

export function getRewritePrompt(
  text: string,
  version: PromptVersion = "v2",
  tone: string = "professional"
): string {
  if (version === "v1") {
    return rewritePromptV1(text);
  }
  return rewritePromptV2(text, tone);
}
