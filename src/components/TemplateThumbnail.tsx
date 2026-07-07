import DocumentPaper from "./DocumentPaper";

// Card cover = a framed, scaled snapshot of the real live document preview, so
// the "first view" matches the detail page for every module.
//
// Both table-based (invoices) and text-only (resumes) documents use a
// 150%/scale(0.667) zoom so the content fills the card height without any
// blank whitespace at the bottom. Content selection is smart per doc type.

/**
 * Smart block selection for the thumbnail preview.
 *
 * For table-based documents (invoices, quotations):
 *   1. Find the first "table" block.
 *   2. Keep up to MAX_LEAD blocks before it (letterhead / meta context).
 *   3. Include the table trimmed to MAX_TABLE_ROWS data rows.
 *   4. Include up to MAX_TRAIL blocks AFTER the table (subtotal, tax, total,
 *      payment lines) so the lower card area is filled, not blank.
 *
 * For text-only documents (resumes, letters, contracts):
 *   - Return all blocks up to MAX_TEXT_BLOCKS so the card fills with content.
 *     bulletList items are individually capped so no single section
 *     dominates the preview — each list is trimmed to LIST_ITEM_CAP items.
 */
function selectThumbnailBlocks(blocks: any[]): any[] {
  const MAX_LEAD        = 5;  // lead blocks shown before the table
  const MAX_TABLE_ROWS  = 3;  // table data rows (+ 1 header) in thumbnail
  const MAX_TRAIL       = 4;  // trailing blocks shown after the table
  const MAX_TEXT_BLOCKS = 14; // total top-level blocks for text documents
  const LIST_ITEM_CAP   = 3;  // max bullet/ordered list items per list block

  const tableIdx = blocks.findIndex((b: any) => b.type === "table");

  // ── Table document (invoices, quotations, etc.) ──────────────────────────
  if (tableIdx !== -1) {
    const leadStart  = Math.max(0, tableIdx - MAX_LEAD);
    const leadBlocks = blocks.slice(leadStart, tableIdx);
    const tableBlock = blocks[tableIdx];
    const rows: any[] = tableBlock.content || [];
    const trimmedTable = {
      ...tableBlock,
      content: rows.slice(0, MAX_TABLE_ROWS + 1), // +1 for header row
    };
    // Include trailing blocks after the table (subtotal, tax, total, payment)
    // — these fill the lower portion of the card so no blank space appears.
    const trailBlocks = blocks.slice(tableIdx + 1, tableIdx + 1 + MAX_TRAIL);
    return [...leadBlocks, trimmedTable, ...trailBlocks];
  }

  // ── Text-only document (resumes, letters, contracts, etc.) ───────────────
  // Show more blocks but cap each list so one section can't eat the card.
  return blocks.slice(0, MAX_TEXT_BLOCKS).map((block: any) => {
    if (
      (block.type === "bulletList" || block.type === "orderedList") &&
      Array.isArray(block.content) &&
      block.content.length > LIST_ITEM_CAP
    ) {
      return { ...block, content: block.content.slice(0, LIST_ITEM_CAP) };
    }
    return block;
  });
}

export default function TemplateThumbnail({ template }: { template: any }) {
  const allBlocks: any[] = template?.content?.editorState?.content ?? [];
  const thumbnailBlocks = selectThumbnailBlocks(allBlocks);

  const truncatedTemplate = {
    ...template,
    content: template?.content ? {
      ...template.content,
      editorState: template.content.editorState ? {
        ...template.content.editorState,
        content: thumbnailBlocks,
      } : undefined,
    } : undefined,
  };

  // Both doc types use 150% width + scale(0.667): tight enough to fill the
  // card height with real content, avoiding blank space at the bottom.

  return (
    <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 p-2 sm:p-2.5">
      <div className="relative h-full w-full overflow-hidden rounded-md bg-white shadow-md ring-1 ring-black/5">
        <div
          className="origin-top-left pointer-events-none"
          style={{ width: "150%", transform: "scale(0.667)" }}
        >
          <DocumentPaper template={truncatedTemplate} />
        </div>
        {/* soft fade so cropped content tapers off gracefully */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
}
