import DocumentPaper from "./DocumentPaper";

// Card cover = a framed, zoomed snapshot of the real live document preview, so
// the "first view" matches the detail page for every module.
//
// The card is a WIDE portrait box, but the documents (esp. invoices) are short.
// To FILL the cover instead of leaving white space, the document is laid out at
// 80% width (narrower → taller → portrait-shaped) then scaled UP to 125% so its
// effective width fills the paper and its height overflows the box — the bottom
// is cropped like a real template thumbnail. It sits on a tinted surface as a
// bordered paper, matching the detail-page live preview.
export default function TemplateThumbnail({ template }: { template: any }) {
  return (
    <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 p-2 sm:p-2.5">
      <div className="h-full w-full overflow-hidden rounded-md bg-white shadow-md ring-1 ring-black/5">
        <div
          className="origin-top-left pointer-events-none"
          style={{ width: "125%", transform: "scale(0.8)" }}
        >
          <DocumentPaper template={template} />
        </div>
      </div>
    </div>
  );
}
