import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const status: Record<string, any> = {
    timestamp: new Date().toISOString(),
    status: "UP",
    services: {
      database: { status: "UNKNOWN", message: "" },
      gemini_ai: { status: "UNKNOWN", message: "" },
      resend_email: { status: "UNKNOWN", message: "" },
      cloudinary_media: { status: "UNKNOWN", message: "" },
    },
  };

  let hasFailures = false;

  // 1. Verify PostgreSQL Database connection
  if (!process.env.DATABASE_URL) {
    status.services.database = {
      status: "DEGRADED",
      message: "DATABASE_URL is not set. Bypassing active DB connection checks.",
    };
  } else {
    try {
      // Run quick lightweight raw check query
      await db.$queryRaw`SELECT 1`;
      status.services.database = {
        status: "UP",
        message: "Database ping completed successfully.",
      };
    } catch (err: any) {
      hasFailures = true;
      status.services.database = {
        status: "DOWN",
        message: err.message || "Failed to query database.",
      };
    }
  }

  // 2. Verify Gemini AI configuration keys
  if (process.env.GEMINI_API_KEY) {
    status.services.gemini_ai = {
      status: "UP",
      message: "API key registered and ready.",
    };
  } else {
    status.services.gemini_ai = {
      status: "DEGRADED",
      message: "GEMINI_API_KEY is not defined. AI rewrites will execute in simulation mode.",
    };
  }

  // 3. Verify Resend Email configuration keys
  if (process.env.RESEND_API_KEY) {
    status.services.resend_email = {
      status: "UP",
      message: "SMTP API key registered.",
    };
  } else {
    status.services.resend_email = {
      status: "DEGRADED",
      message: "RESEND_API_KEY is not defined. Email magic links will fail to dispatch.",
    };
  }

  // 4. Verify Cloudinary configuration keys
  if (
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  ) {
    status.services.cloudinary_media = {
      status: "UP",
      message: "Media storage driver configured.",
    };
  } else {
    status.services.cloudinary_media = {
      status: "DEGRADED",
      message: "Cloudinary configuration variables are missing. Media uploads disabled.",
    };
  }

  // Set response status code based on failures
  if (hasFailures) {
    status.status = "DOWN";
    return NextResponse.json(status, { status: 500 });
  }

  return NextResponse.json(status, { status: 200 });
}
