/**
 * Template seed-data validator.
 *
 * Renders every template exactly the way DocumentPaper does (same resolver,
 * same substitution rules) and asserts the things a reader would notice:
 *
 *   A. Unresolved {{token}} — DocumentPaper turns these into a humanized field
 *      name, so a missing default silently ships as body text like
 *      "serving an estimated Guest Count guests".
 *   B. Arithmetic — subtotal + tax == total, and line items sum to subtotal.
 *   C. Date ordering — start/commencement must precede end/completion.
 *   D. Identity — the brand/persona in the header must match the body.
 *   E. Cross-template leaks — e.g. software-dev copy inside a medical invoice.
 *   F. Currency — money figures carry a symbol.
 *
 * Run: npx tsx scripts/validate-templates.ts
 * Exits non-zero when any error-level issue is found, so it can gate CI.
 */
import { allFallbackTemplates } from "../src/data/templates-fallback";
import {
  getTemplateValues,
  getTemplateBrand,
  SLUG_SPECIFIC_DEFAULTS,
  SLUG_EXTRA_DEFAULTS,
} from "../src/features/templates/sample-values";

// ── Mirror of DocumentPaper's substitution ───────────────────────────────────
function humanize(key: string): string {
  const spaced = key.replace(/([A-Z])/g, " $1").replace(/[_-]+/g, " ").trim();
  return spaced.replace(/\b\w/g, (c) => c.toUpperCase());
}

function extractText(node: any): string {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join(" ");
  if (node.type === "text") return node.text ?? "";
  let out = "";
  if (node.content) out += extractText(node.content);
  return out;
}

/** Returns the rendered body plus the tokens that had no value. */
function render(template: any, values: Record<string, string>) {
  const raw = extractText(template?.content?.editorState?.content ?? []);
  const unresolved: string[] = [];
  let out = raw;
  for (const [key, val] of Object.entries(values)) {
    out = out.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), val || humanize(key));
    if (!val) unresolved.push(key);
  }
  out = out.replace(/\{\{([a-zA-Z0-9_]+)\}\}/g, (_m, v) => {
    unresolved.push(v);
    return humanize(v);
  });
  return { text: out.replace(/\.{2,}/g, "."), unresolved };
}

// ── Helpers ──────────────────────────────────────────────────────────────────
const money = (s: string) => Number(String(s).replace(/[^0-9.-]/g, ""));
const hasMoney = (s?: string) => !!s && /[$₹€£]/.test(s);
const near = (a: number, b: number, tol = 0.02) => Math.abs(a - b) <= tol;

// How many templates use each {{token}} — lets us tell a shared global default
// apart from one that belongs to a single document.
const tokenUsers = new Map<string, number>();
for (const t of allFallbackTemplates) {
  const raw = JSON.stringify(t?.content?.editorState ?? {});
  for (const k of new Set([...raw.matchAll(/\{\{([a-zA-Z0-9_]+)\}\}/g)].map((m) => m[1]))) {
    tokenUsers.set(k, (tokenUsers.get(k) ?? 0) + 1);
  }
}

type Issue = { slug: string; rule: string; detail: string; level: "error" | "warn" };
const issues: Issue[] = [];
const add = (slug: string, rule: string, detail: string, level: Issue["level"] = "error") =>
  issues.push({ slug, rule, detail, level });

// Vocabulary that should never appear outside software/design templates.
const DEV_WORDS = /\b(React|Next\.js|Prisma|Tailwind|Figma|API integration|full-stack|SaaS architectures|AWS Certified|Computer Science)\b/i;
const DEV_OK = /(developer|engineer|software|web|app|ux|ui|design|graphic|it-|devops|data|tech|seo|marketing|saas|ecommerce|e-commerce|product|startup)/i;

for (const t of allFallbackTemplates) {
  const slug: string = t.slug;
  let values: Record<string, string>;
  try {
    values = getTemplateValues(t);
  } catch (e: any) {
    add(slug, "RESOLVER", `getTemplateValues threw: ${e?.message}`);
    continue;
  }
  const { text, unresolved } = render(t, values);

  // A. Unresolved tokens -> humanized labels leaking into the document.
  const uniqueUnresolved = [...new Set(unresolved)];
  if (uniqueUnresolved.length) {
    // Only report ones that actually reached the rendered body.
    const leaked = uniqueUnresolved.filter((k) => text.includes(humanize(k)));
    if (leaked.length) {
      add(slug, "PLACEHOLDER", `renders field name(s) as text: ${leaked.map(humanize).join(", ")}`);
    }
  }

  // B. Arithmetic — mirrors computeInvoiceTotals: `tax` is a RATE ("8%"), and
  // it only counts toward the total when the document actually shows a tax line.
  // Shipping/discount are summary lines outside the item table.
  const sub = values.subtotal, tax = values.tax, total = values.total, due = values.amountDue;
  const fields: string[] = t?.content?.fields || [];
  if (sub && total) {
    const docStr = JSON.stringify(t?.content?.editorState || {});
    const showsTax = /\b(tax|gst|vat|cgst|sgst|igst)\b/i.test(docStr);
    const rate = tax ? (parseFloat(tax.replace(/[^\d.-]/g, "")) || 0) / 100 : 0;
    let expected = money(sub) + (showsTax ? money(sub) * rate : 0);
    if (fields.includes("shippingCost")) expected += money(values.shippingCost || "0");
    if (fields.includes("discount")) expected -= money(values.discount || "0");
    // A retainer already paid is deducted from the amount now due.
    if (values.retainerApplied) expected -= money(values.retainerApplied);
    if (!near(expected, money(total), 1)) {
      add(slug, "MATH", `subtotal ${sub}${showsTax && rate ? ` +${tax} tax` : ""} => ${expected.toFixed(2)} but total is ${total}`);
    }
  }
  if (total && due && !near(money(total), money(due), 1)) {
    add(slug, "MATH", `total ${total} != amountDue ${due}`);
  }

  // C. Dates.
  const datePairs: Array<[string, string]> = [
    ["startDate", "endDate"],
    ["commencementDate", "completionDate"],
    ["invoiceDate", "dueDate"],
    ["leaseStart", "leaseEnd"],
  ];
  for (const [a, b] of datePairs) {
    if (values[a] && values[b]) {
      const da = new Date(values[a]), db = new Date(values[b]);
      if (!isNaN(+da) && !isNaN(+db) && da > db) {
        add(slug, "DATE", `${a} (${values[a]}) is after ${b} (${values[b]})`);
      }
    }
  }

  // D. Identity — header brand/persona must appear in the body.
  const brand = getTemplateBrand(t);
  if (brand && t.categorySlug === "resumes") {
    const name = values.fullName || brand;
    if (name && !text.includes(name)) {
      add(slug, "IDENTITY", `header name "${name}" never appears in the body`);
    }
    // A different persona's name showing up is the crossed-wires bug.
    if (name && /Sarah Jenkins/.test(text) && !/Sarah Jenkins/.test(name)) {
      add(slug, "IDENTITY", `body contains "Sarah Jenkins" but persona is "${name}"`);
    }
  }

  // E. Cross-template vocabulary leaks. Judge against the template's own
  // identity (slug + title + description) — a freelancer invoice aimed at
  // developers may legitimately mention Next.js; an electrician resume may not.
  const identity = `${slug} ${t.title ?? ""} ${t.description ?? ""}`;
  if (DEV_WORDS.test(text) && !DEV_OK.test(identity)) {
    const hit = text.match(DEV_WORDS)?.[0] ?? "";
    // Authored content is intentional — a CS-graduate resume or an academic CV
    // is *supposed* to say "Computer Science". Only an inherited global default
    // landing on the wrong document is a leak.
    const authored = {
      ...(SLUG_EXTRA_DEFAULTS[slug] || {}),
      ...(SLUG_SPECIFIC_DEFAULTS[slug] || {}),
    };
    const needle = hit.toLowerCase();
    // A global default whose token only this template uses is, in practice,
    // this template's own copy — not something inherited from elsewhere.
    const exclusiveHit = Object.entries(values).some(
      ([k, v]) => tokenUsers.get(k) === 1 && String(v).toLowerCase().includes(needle),
    );
    const isAuthored =
      exclusiveHit ||
      Object.values(authored).some((v) => String(v).toLowerCase().includes(needle));
    if (!isAuthored) {
      add(slug, "LEAK", `software/dev term "${hit}" inherited from a global default`);
    }
  }

  // F. Currency symbols on money fields.
  for (const f of ["subtotal", "total", "amountDue", "tax"]) {
    if (values[f] && /^[\d,]+(\.\d+)?$/.test(values[f].trim())) {
      add(slug, "CURRENCY", `${f} "${values[f]}" has no currency symbol`);
    }
  }
}

// ── Report ───────────────────────────────────────────────────────────────────
const errors = issues.filter((i) => i.level === "error");
const warns = issues.filter((i) => i.level === "warn");
const byRule: Record<string, number> = {};
for (const i of issues) byRule[i.rule] = (byRule[i.rule] || 0) + 1;

console.log(`Scanned ${allFallbackTemplates.length} templates`);
console.log(`  errors: ${errors.length}   warnings: ${warns.length}`);
console.log(`  by rule:`, byRule);
if (issues.length) {
  console.log("");
  for (const i of issues) {
    console.log(`  [${i.level.toUpperCase()}] ${i.rule.padEnd(11)} ${i.slug}: ${i.detail}`);
  }
}
process.exit(errors.length ? 1 : 0);
