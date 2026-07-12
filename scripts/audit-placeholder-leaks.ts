/* Finds every template whose preview would render a humanized field name
 * (a "leaked placeholder" like "Guest Count") because a {{variable}} used in
 * its editorState has no sample value. Mirrors DocumentPaper's resolution:
 * vals = getTemplateDefaults ⊕ (non-empty getTemplateValues). */
import { allFallbackTemplates } from "../src/data/templates-fallback";
import { getTemplateValues, getTemplateDefaults } from "../src/features/templates/sample-values";

function resolved(t: any): Record<string, string> {
  const vals: Record<string, string> = { ...getTemplateDefaults(t) };
  for (const [k, v] of Object.entries(getTemplateValues(t))) if (v) vals[k] = v;
  return vals;
}

let total = 0;
const rows: { slug: string; leaks: string[] }[] = [];
for (const t of allFallbackTemplates) {
  const json = JSON.stringify(t.content?.editorState ?? {});
  const vars = [...json.matchAll(/\{\{([a-zA-Z0-9_]+)\}\}/g)].map((m) => m[1]);
  const vals = resolved(t);
  const leaks = [...new Set(vars)].filter((v) => !vals[v] || !String(vals[v]).trim());
  if (leaks.length) { rows.push({ slug: t.slug, leaks }); total += leaks.length; }
}

rows.sort((a, b) => a.slug.localeCompare(b.slug));
for (const r of rows) console.log(`${r.slug}: ${r.leaks.join(", ")}`);
console.log(`\n${rows.length} templates leak a placeholder (${total} distinct field leaks)`);
if (rows.length) process.exit(1);
