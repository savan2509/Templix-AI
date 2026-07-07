import { allFallbackTemplates } from "../src/data/templates-fallback";
import { getTemplateValues, getTemplateDefaults, SLUG_BRAND } from "../src/features/templates/sample-values";

// Helper to extract text content from a rich text node
function extractText(node: any): string {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node.text !== undefined) return node.text;
  if (node.content) return extractText(node.content);
  return "";
}

// Convert money string to number
function moneyToNum(str: string): number {
  return parseFloat(str.replace(/[^\d.-]/g, ""));
}

let failed = false;

function assert(condition: boolean, msg: string, template: any) {
  if (!condition) {
    console.error(`🔴 [FAIL] Template: ${template.slug} (${template.categorySlug}) - ${msg}`);
    failed = true;
  }
}

console.log(`🚀 Starting validation of ${allFallbackTemplates.length} templates...\n`);

for (const template of allFallbackTemplates) {
  const values = getTemplateValues(template);
  const defaults = getTemplateDefaults(template);
  const merged = { ...defaults, ...values };

  const slug = template.slug;
  const category = template.categorySlug;

  // 1. Check template metadata & persona name alignment
  if (category === "resumes") {
    const brandName = SLUG_BRAND[slug];
    assert(!!brandName, `Missing SLUG_BRAND entry for resume`, template);
    assert(merged.fullName === brandName, `fullName mismatch: expected "${brandName}", got "${merged.fullName}"`, template);
  }

  // 2. Check for leftover/unresolved placeholder text
  for (const [key, value] of Object.entries(merged)) {
    if (typeof value === "string") {
      assert(!value.includes("{{") && !value.includes("}}"), `Contains unreplaced template double curlies: "${key}: ${value}"`, template);
      assert(!value.toLowerCase().includes("springfield"), `Contains Springfield placeholder address: "${key}: ${value}"`, template);
      assert(!value.toLowerCase().includes("guest count"), `Contains placeholder "Guest Count": "${key}: ${value}"`, template);
      assert(!value.toLowerCase().includes("owner name"), `Contains placeholder "Owner Name": "${key}: ${value}"`, template);
      assert(!value.toLowerCase().includes("royalty rate"), `Contains placeholder "Royalty Rate": "${key}: ${value}"`, template);
    }
  }

  // 3. Invoice mathematical validation
  if (category === "invoices") {
    const table = template.content?.editorState?.content?.find((node: any) => node.type === "table");
    if (table && table.content) {
      let expectedSubtotal = 0;
      const rows = table.content;

      // Sum table last column
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row && row.content && row.content.length > 0) {
          const lastCell = row.content[row.content.length - 1];
          let cellText = extractText(lastCell).trim();

          // Resolve variables
          Object.entries(merged).forEach(([k, v]) => {
            if (cellText.includes(`{{${k}}}`)) {
              cellText = cellText.replace(new RegExp(`\\{\\{${k}\\}\\}`, "g"), v || "0");
            }
          });

          const val = moneyToNum(cellText);
          if (!isNaN(val)) {
            expectedSubtotal += val;
          }
        }
      }

      if (expectedSubtotal > 0) {
        const subtotal = moneyToNum(merged.subtotal || "0");
        const total = moneyToNum(merged.total || "0");
        const taxVal = merged.tax || "8%";
        const taxRate = parseFloat(taxVal.replace(/[^\d.-]/g, "")) / 100;
        
        let expectedTotal = expectedSubtotal + (expectedSubtotal * taxRate);
        
        if (slug === "invoice-legal-services") {
          const retainer = moneyToNum(merged.retainerApplied || "2500");
          expectedTotal = expectedSubtotal - retainer;
        }

        // Assert subtotal matches table items
        assert(Math.abs(subtotal - expectedSubtotal) < 0.05, `Subtotal mismatch: expected ${expectedSubtotal}, got ${subtotal}`, template);
        
        // Assert total math
        assert(Math.abs(total - expectedTotal) < 0.05, `Total mismatch: expected ${expectedTotal}, got ${total}`, template);

        // Assert currency formatting ($ prefix exists)
        assert(merged.subtotal.startsWith("$"), `Subtotal missing "$" prefix: "${merged.subtotal}"`, template);
        assert(merged.total.startsWith("$"), `Total missing "$" prefix: "${merged.total}"`, template);
        assert(merged.amountDue.startsWith("$"), `amountDue missing "$" prefix: "${merged.amountDue}"`, template);
      }
    }
  }

  // 4. Date Logic Validation
  const dateKeys = [
    ["startDate", "endDate"],
    ["leaseStartDate", "leaseEndDate"],
    ["startDate", "completionDate"],
    ["commencementDate", "terminationDate"]
  ];

  const fields = template.content?.fields || [];
  for (const [startKey, endKey] of dateKeys) {
    if (fields.includes(startKey) && fields.includes(endKey)) {
      const startVal = merged[startKey];
      const endVal = merged[endKey];
      
      const startD = new Date(startVal);
      const endD = new Date(endVal);

      if (!isNaN(startD.getTime()) && !isNaN(endD.getTime())) {
        assert(endD > startD, `Date logic error: end date "${endVal}" is not after start date "${startVal}"`, template);
      }
    }
  }
}

if (failed) {
  console.log("\n❌ Validation failed. See errors above.");
  process.exit(1);
} else {
  console.log("\n🟢 All template validations passed successfully!");
  process.exit(0);
}
