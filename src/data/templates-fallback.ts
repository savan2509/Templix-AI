// Fallback template data — split into per-category modules so every template has
// rich, distinct document content (tables, sections, lists). Consumers keep using
// the single `allFallbackTemplates` export, so no call sites change.
import { invoicesTemplates } from "./templates/invoices";
import { resumesTemplates } from "./templates/resumes";
import { contractsTemplates } from "./templates/contracts";
import { proposalsTemplates } from "./templates/proposals";
import { lettersTemplates } from "./templates/letters";
import { reportsTemplates } from "./templates/reports";
import { businessPlansTemplates } from "./templates/business-plans";
import { quotationsTemplates } from "./templates/quotations";

// Second wave — 10 additional, distinct templates per category (different use
// cases from the originals) to broaden long-tail SEO coverage.
import { invoicesExtraTemplates } from "./templates/invoices-extra";
import { resumesExtraTemplates } from "./templates/resumes-extra";
import { contractsExtraTemplates } from "./templates/contracts-extra";
import { proposalsExtraTemplates } from "./templates/proposals-extra";
import { lettersExtraTemplates } from "./templates/letters-extra";
import { reportsExtraTemplates } from "./templates/reports-extra";
import { businessPlansExtraTemplates } from "./templates/business-plans-extra";
import { quotationsExtraTemplates } from "./templates/quotations-extra";

export const allFallbackTemplates: any[] = [
  ...invoicesTemplates,
  ...invoicesExtraTemplates,
  ...resumesTemplates,
  ...resumesExtraTemplates,
  ...contractsTemplates,
  ...contractsExtraTemplates,
  ...proposalsTemplates,
  ...proposalsExtraTemplates,
  ...lettersTemplates,
  ...lettersExtraTemplates,
  ...reportsTemplates,
  ...reportsExtraTemplates,
  ...businessPlansTemplates,
  ...businessPlansExtraTemplates,
  ...quotationsTemplates,
  ...quotationsExtraTemplates,
];
