import { NextResponse } from "next/server";

export async function GET() {
  const content = "# ads.txt for templix-ai.whitesparksoft.com\n# Authorized Digital Sellers\n";
  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, immutable",
    },
  });
}
