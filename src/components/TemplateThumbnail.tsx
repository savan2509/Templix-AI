import DocumentPaper from "./DocumentPaper";

// Card cover = a framed, scaled snapshot of the real live document preview, so
// the "first view" matches the detail page for every module.
//
// The document is laid out at 200% width then scaled to 50% (effective width
// fills the paper) and top-aligned, so a large portion of the (now content-rich)
// document is visible at a readable size. A soft white fade at the bottom lets
// the preview end gracefully instead of hard-cutting the content mid-line. The
// paper sits on a tinted surface, matching the detail-page live preview.
export default function TemplateThumbnail({ template }: { template: any }) {
  const truncatedTemplate = {
    ...template,
    content: template?.content ? {
      ...template.content,
      editorState: template.content.editorState ? {
        ...template.content.editorState,
        content: template.content.editorState.content ? template.content.editorState.content.slice(0, 5) : []
      } : undefined
    } : undefined
  };

  return (
    <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 p-2 sm:p-2.5">
      <div className="relative h-full w-full overflow-hidden rounded-md bg-white shadow-md ring-1 ring-black/5">
        <div
          className="origin-top-left pointer-events-none"
          style={{ width: "200%", transform: "scale(0.5)" }}
        >
          <DocumentPaper template={truncatedTemplate} />
        </div>
        {/* soft fade so cropped content tapers off instead of a hard cut */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
}
