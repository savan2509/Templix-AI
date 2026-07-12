// Reusable JSON-LD renderer. Emits one <script type="application/ld+json"> per
// schema object and centralizes the `<` → `<` escaping so serialized data
// can never break out of the script tag. Pass a single schema or an array.
//
// Usage:
//   <Schema data={organizationSchema} />
//   <Schema data={[organizationSchema, websiteSchema, faqSchema]} />
export default function Schema({ data }: { data: object | (object | null | undefined)[] }) {
  const blocks = (Array.isArray(data) ? data : [data]).filter(Boolean) as object[];
  if (blocks.length === 0) return null;
  return (
    <>
      {blocks.map((block, i) => (
        <script
          // Index keys are stable here: the block order is fixed per page render.
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
