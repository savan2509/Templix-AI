import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Public health probe. Intentionally minimal: it never discloses which
// integrations exist, whether their keys are configured, or internal error
// details — that information would let an attacker fingerprint the deployment.
// It reports only overall liveness.
export async function GET() {
  let healthy = true;

  // Only run a DB liveness check when a database is actually configured.
  if (process.env.DATABASE_URL) {
    try {
      await db.$queryRaw`SELECT 1`;
    } catch {
      healthy = false;
    }
  }

  return NextResponse.json(
    { status: healthy ? "ok" : "error" },
    { status: healthy ? 200 : 503 }
  );
}
