import DocumentPaper from "./DocumentPaper";
import { getTemplateValues } from "@/features/templates/sample-values";

/**
 * Block selection for card thumbnail preview.
 *
 * For invoice/quotation documents:
 *   - Include lead blocks + table + subtotal & total blocks.
 *
 * For ALL other documents (business plans, reports, proposals, contracts, resumes, letters):
 *   - Return ALL content blocks (up to 60 blocks) so the live document layout
 *     flows continuously from top to bottom, filling 100% of the thumbnail card
 *     height without any blank whitespace gap at the bottom!
 */
function selectThumbnailBlocks(blocks: any[], categorySlug?: string): any[] {
  const MAX_TEXT_BLOCKS = 60; // Include all top-level blocks to fill the full card height
  const LIST_ITEM_CAP   = 5;  // max list items per list block

  const tableIdx = blocks.findIndex((b: any) => b.type === "table");

  if ((categorySlug === "invoices" || categorySlug === "quotations") && tableIdx !== -1 && tableIdx <= 3) {
    const MAX_LEAD  = 3;
    const MAX_TRAIL = 4;
    const leadStart  = Math.max(0, tableIdx - MAX_LEAD);
    const leadBlocks = blocks.slice(leadStart, tableIdx);
    const tableBlock = blocks[tableIdx];
    const trailBlocks = blocks.slice(tableIdx + 1, tableIdx + 1 + MAX_TRAIL);
    return [...leadBlocks, tableBlock, ...trailBlocks];
  }

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
  const categorySlug = template?.categorySlug ?? "";
  const thumbnailBlocks = selectThumbnailBlocks(allBlocks, categorySlug);

  const values = getTemplateValues(template);

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

  return (
    <div className="absolute inset-0 bg-white dark:bg-zinc-900 p-0 overflow-hidden" aria-hidden="true">
      <div className="relative h-full w-full overflow-hidden bg-white">
        <div
          className="origin-top-left pointer-events-none min-h-[140%] bg-white w-full"
          style={{ width: "135%", minHeight: "140%", transform: "scale(0.741)" }}
        >
          <DocumentPaper template={truncatedTemplate} values={values} />
        </div>
        {/* Soft bottom gradient fade so document gracefully tapers off into the card border */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-zinc-900 dark:via-zinc-900/80" />
      </div>
    </div>
  );
}
