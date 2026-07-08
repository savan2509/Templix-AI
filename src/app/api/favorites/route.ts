import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// ── GET /api/favorites ────────────────────────────────────────────────────────
// Returns the list of template slugs that the current user has favorited.
export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ favorites: [] });
  }

  const { data, error } = await supabase
    .from("favorites")
    .select("template_slug")
    .eq("user_id", user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    favorites: (data ?? []).map((f: any) => f.template_slug),
  });
}

// ── POST /api/favorites ───────────────────────────────────────────────────────
// Toggles a favorite. Body: { templateSlug: string }
// Returns: { favorited: boolean }
export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { templateSlug } = await request.json();
  if (!templateSlug) {
    return NextResponse.json({ error: "templateSlug is required" }, { status: 400 });
  }

  // Check if already favorited
  const { data: existing } = await supabase
    .from("favorites")
    .select("id")
    .eq("user_id", user.id)
    .eq("template_slug", templateSlug)
    .single();

  if (existing) {
    // Remove favorite
    await supabase
      .from("favorites")
      .delete()
      .eq("user_id", user.id)
      .eq("template_slug", templateSlug);
    return NextResponse.json({ favorited: false });
  } else {
    // Add favorite
    await supabase
      .from("favorites")
      .insert({ user_id: user.id, template_slug: templateSlug });
    return NextResponse.json({ favorited: true });
  }
}
