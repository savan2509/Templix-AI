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

// India-format documents — high-volume, low-competition local formats
import { indiaLettersTemplates } from "./templates/india-letters";
import { indiaInvoicesTemplates } from "./templates/india-invoices";
import { indiaContractsTemplates } from "./templates/india-contracts";
import { indiaExtraTemplates } from "./templates/india-extra";

// Third wave — 10 more per category.
import { invoicesExtra2Templates } from "./templates/invoices-extra2";
import { resumesExtra2Templates } from "./templates/resumes-extra2";
import { contractsExtra2Templates } from "./templates/contracts-extra2";
import { proposalsExtra2Templates } from "./templates/proposals-extra2";
import { lettersExtra2Templates } from "./templates/letters-extra2";
import { reportsExtra2Templates } from "./templates/reports-extra2";
import { businessPlansExtra2Templates } from "./templates/business-plans-extra2";
import { quotationsExtra2Templates } from "./templates/quotations-extra2";

// Fourth wave — Week 2 (70 new templates)
import { invoicesExtra3Templates } from "./templates/invoices-extra3";
import { invoicesExtra4Templates } from "./templates/invoices-extra4";
import { resumesExtra3Templates } from "./templates/resumes-extra3";
import { resumesExtra4Templates } from "./templates/resumes-extra4";
import { contractsExtra3Templates } from "./templates/contracts-extra3";
import { contractsExtra4Templates } from "./templates/contracts-extra4";
import { proposalsExtra3Templates } from "./templates/proposals-extra3";
import { lettersExtra3Templates } from "./templates/letters-extra3";
import { reportsExtra3Templates } from "./templates/reports-extra3";
import { businessPlansExtra3Templates } from "./templates/business-plans-extra3";
import { expansionTemplates } from "./templates/expansion-templates";
import { trending2026Templates } from "./templates/trending-2026-templates";

const rawFallbackTemplates: any[] = [
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
  ...indiaLettersTemplates,
  ...indiaInvoicesTemplates,
  ...indiaContractsTemplates,
  ...indiaExtraTemplates,
  ...invoicesExtra2Templates,
  ...resumesExtra2Templates,
  ...contractsExtra2Templates,
  ...proposalsExtra2Templates,
  ...lettersExtra2Templates,
  ...reportsExtra2Templates,
  ...businessPlansExtra2Templates,
  ...quotationsExtra2Templates,
  ...invoicesExtra3Templates,
  ...invoicesExtra4Templates,
  ...resumesExtra3Templates,
  ...resumesExtra4Templates,
  ...contractsExtra3Templates,
  ...contractsExtra4Templates,
  ...proposalsExtra3Templates,
  ...lettersExtra3Templates,
  ...reportsExtra3Templates,
  ...businessPlansExtra3Templates,
  ...expansionTemplates,
  ...trending2026Templates,
];

const seenTemplates = new Set<string>();
export const allFallbackTemplates: any[] = rawFallbackTemplates.filter((t) => {
  const key = `${t.categorySlug}/${t.slug}`;
  if (seenTemplates.has(key)) return false;
  seenTemplates.add(key);
  return true;
});
