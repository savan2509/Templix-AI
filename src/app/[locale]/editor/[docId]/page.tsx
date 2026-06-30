import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import EditorCanvas from "@/features/editor/components/EditorCanvas";

// Static fallback templates to load variables from if DB is absent
import { allFallbackTemplates } from '@/data/templates-fallback';

interface PageProps {
  params: Promise<{
    locale: string;
    docId: string;
  }>;
  searchParams: Promise<{
    template?: string;
    [key: string]: string | undefined;
  }>;
}

export default async function EditorRoutePage({ params, searchParams }: PageProps) {
  const { locale, docId } = await params;
  const resolvedSearchParams = await searchParams;
  const session = await auth();

  const isNew = docId === "new";
  const isLoggedIn = !!session?.user;

  // Protect loading existing documents, but allow guests to customize new templates!
  if (!isLoggedIn && !isNew) {
    redirect(`/${locale}/login`);
  }

  let initialTitle = "Untitled Document";
  let initialContent: any = {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [{ type: "text", text: "Start writing your document here..." }]
      }
    ]
  };

  const prefills: Record<string, string> = {};

  // Extract variables prefills from searchParams query
  Object.entries(resolvedSearchParams).forEach(([key, val]) => {
    if (key.startsWith("field_") && val) {
      prefills[key.replace("field_", "")] = val;
    }
  });

  if (isNew) {
    const templateSlug = resolvedSearchParams.template || "";
    let selectedTemplate: any = allFallbackTemplates.find((t) => t.slug === templateSlug) || null;

    if (process.env.DATABASE_URL) {
      try {
        const dbTemplate = await db.template.findUnique({
          where: { slug: templateSlug }
        });
        if (dbTemplate) {
          selectedTemplate = {
            slug: dbTemplate.slug,
            title: dbTemplate.title,
            content: dbTemplate.content as any
          };
        }
      } catch (err) {
        console.warn("DB template load bypass in editor.");
      }
    }

    if (selectedTemplate) {
      initialTitle = selectedTemplate.title;
      initialContent = selectedTemplate.content.editorState;
    }
  } else {
    // Load existing document from DB
    if (process.env.DATABASE_URL) {
      try {
        const doc = await db.document.findUnique({
          where: {
            id: docId,
            userId: session?.user?.id || ""
          }
        });

        if (doc) {
          initialTitle = doc.title;
          initialContent = doc.content;
        } else {
          // Document not found or doesn't belong to user
          redirect(`/${locale}/dashboard`);
        }
      } catch (err) {
        console.warn("DB load bypass in editor page.");
      }
    }
  }

  return (
    <EditorCanvas
      docId={docId}
      initialTitle={initialTitle}
      initialContent={initialContent}
      prefills={prefills}
      isLoggedIn={isLoggedIn}
    />
  );
}
