// One-off audit: resolves every invoice template's real preview values and
// checks that the numbers a reader sees actually reconcile. Run with:
//   npx tsx scripts/audit-invoice-math.ts
import { allFallbackTemplates } from "../src/data/templates-fallback";
import { getTemplateValues } from "../src/features/templates/sample-values";

const num = (s: string | undefined) => {
  if (!s) return NaN;
  return parseFloat(String(s).replace(/[^\d.-]/g, ""));
};
const money = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Walk the content tree collecting every paragraph's resolved plain text and the
// table's last-cell amounts (what computeInvoiceTotals sums).
function analyze(tpl: any) {
  const values = getTemplateValues(tpl);
  const resolve = (t: string) =>
    t.replace(/\{\{(\w+)\}\}/g, (_, k) => (values[k] ?? `{{${k}}}`));

  const content = tpl?.content?.editorState?.content || [];
  const table = content.find((n: any) => n.type === "table");
  let rowAmounts: number[] = [];
  if (table) {
    for (let i = 1; i < table.content.length; i++) {
      const row = table.content[i];
      const lastCell = row.content[row.content.length - 1];
      const txt = resolve(extractText(lastCell));
      const v = num(txt);
      if (!isNaN(v)) rowAmounts.push(v);
    }
  }
  const rowSum = rowAmounts.reduce((a, b) => a + b, 0);

  // Pull the resolved summary paragraphs that mention money.
  const summaryLines: string[] = [];
  for (const node of content) {
    if (node.type === "paragraph") {
      const txt = resolve(extractText(node));
      if (/(subtotal|total|labor|parts|material|equipment|shipping|tax|grand)/i.test(txt) && /[\d]/.test(txt)) {
        summaryLines.push(txt.replace(/\s+/g, " ").trim());
      }
    }
  }

  const fields: string[] = tpl?.content?.fields || [];
  return { values, rowAmounts, rowSum, summaryLines, fields };
}

function extractText(node: any): string {
  if (!node) return "";
  if (node.type === "text") return node.text || "";
  if (Array.isArray(node.content)) return node.content.map(extractText).join("");
  return "";
}

const invoices = allFallbackTemplates.filter((t) => t.categorySlug === "invoices");
let problems = 0;

for (const tpl of invoices) {
  const { values, rowSum, summaryLines, fields } = analyze(tpl);
  const subtotal = num(values.subtotal);
  const total = num(values.total ?? values.grandTotal ?? values.amountDue);
  const tax = num(values.taxAmount);
  const shipping = num(values.shippingCost);
  const discount = num(values.discount);

  const issues: string[] = [];

  // 1. Displayed subtotal should equal the summed line items (when both exist).
  if (!isNaN(subtotal) && rowSum > 0 && Math.abs(subtotal - rowSum) > 0.01) {
    issues.push(`subtotal ${money(subtotal)} != line items ${money(rowSum)}`);
  }

  // 2. Total should equal subtotal + tax + shipping - discount (all that apply).
  //    Legal services intentionally deducts a retainer instead of adding tax.
  if (!isNaN(total) && !isNaN(subtotal)) {
    let expected: number;
    if (tpl.slug === "invoice-legal-services") {
      expected = subtotal - (num(values.retainerApplied) || 0);
    } else {
      expected = subtotal;
      if (!isNaN(tax)) expected += tax;
      if (fields.includes("shippingCost") && !isNaN(shipping)) expected += shipping;
      if (fields.includes("discount") && !isNaN(discount)) expected -= discount;
    }
    if (Math.abs(expected - total) > 0.01) {
      issues.push(`total ${money(total)} != expected ${money(expected)}`);
    }
  }

  // 3. A component breakdown line (Labor / Parts / Materials / Equipment) must
  //    sum to the subtotal — otherwise the reader sees parts that don't add up.
  const componentValues: number[] = [];
  for (const line of summaryLines) {
    // Include lines that break the bill into components (Labor/Parts/Materials/
    // Equipment). Don't exclude on the bare word "Subtotal" — "Labor Subtotal"
    // is itself a component line — only skip the pure grand-total / tax / shipping rows.
    if (/(labor|parts|material|equipment)/i.test(line) &&
        !/(grand\s*total|total\s*due|sales\s*tax|shipping:)/i.test(line)) {
      for (const m of line.matchAll(/[₹$]\s*[\d,]+(?:\.\d+)?/g)) componentValues.push(num(m[0]));
    }
  }
  if (componentValues.length >= 2 && !isNaN(subtotal)) {
    const compSum = componentValues.reduce((a, b) => a + b, 0);
    if (Math.abs(compSum - subtotal) > 0.01) {
      issues.push(`component breakdown ${componentValues.map(money).join(" + ")} = ${money(compSum)} != subtotal ${money(subtotal)}`);
    }
  }

  if (issues.length) {
    problems++;
    console.log(`\n❌ ${tpl.slug}`);
    for (const s of summaryLines) console.log(`     summary: ${s}`);
    console.log(`     line-item sum: ${money(rowSum)}`);
    for (const i of issues) console.log(`     ⚠️  ${i}`);
  }
}

console.log(`\n${problems === 0 ? "✅ all invoices reconcile" : `❌ ${problems} invoice(s) with math issues`} (of ${invoices.length})`);
process.exit(problems === 0 ? 0 : 1);
