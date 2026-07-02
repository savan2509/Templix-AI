// Fallback template data — split into per-category modules so every template has
// rich, distinct document content (tables, sections, lists). Consumers keep using
// the single `allFallbackTemplates` export, so no call sites change.
import { invoicesTemplates } from "./templates/invoices";
import { resumesTemplates } from "./templates/resumes";
import { contractsTemplates } from "./templates/contracts";
import { proposalsTemplates } from "./templates/proposals";
import { lettersTemplates } from "./templates/letters";

export const allFallbackTemplates: any[] = [
  ...invoicesTemplates,
  ...resumesTemplates,
  ...contractsTemplates,
  ...proposalsTemplates,
  ...lettersTemplates,
];
