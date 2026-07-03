"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function saveDocumentAction(
  docId: string,
  title: string,
  content: any
): Promise<{ success: boolean; id?: string }> {
  try {
    const session = await auth();

    // Login is disabled: without an account/database there is nothing to persist
    // to, so treat save as a successful no-op (the document lives in the editor).
    if (!session?.user?.id || !process.env.DATABASE_URL) {
      return { success: true };
    }

    // Check if docId is "new" - if so, create a new record
    const isNew = docId.startsWith("new") || docId === "new-doc-temp";

    if (isNew) {
      const doc = await db.document.create({
        data: {
          title,
          content: content as any,
          userId: session.user.id
        }
      });
      revalidatePath("/en/dashboard");
      return { success: true, id: doc.id };
    } else {
      await db.document.update({
        where: {
          id: docId,
          userId: session.user.id
        },
        data: {
          title,
          content: content as any
        }
      });
      return { success: true, id: docId };
    }
  } catch (error) {
    console.error("Failed to execute saveDocumentAction Server Action:", error);
    return { success: false };
  }
}

import { getRewritePrompt, PromptVersion } from "./prompts";

export async function rewriteTextAction(
  text: string,
  version: PromptVersion = "v2",
  tone: string = "professional"
): Promise<{ success: boolean; result?: string; error?: string }> {
  try {
    // Login is disabled: the AI assistant is available to everyone. It runs a
    // real rewrite when GEMINI_API_KEY is set, otherwise a local stub.
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("No GEMINI_API_KEY defined, running simulated response rewrite.");
      const cleanText = text.replace(/<\/?[^>]+(>|$)/g, ""); // Strip html tags for simple simulated return
      const simulatedText = `[AI ${tone} rewrite stub (Prompt ${version})] ${cleanText}`;
      return { success: true, result: simulatedText };
    }

    const promptText = getRewritePrompt(text, version, tone);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: promptText }]
          }
        ]
      })
    });

    if (!res.ok) {
      const errDetail = await res.text();
      throw new Error(`Gemini API error (Status ${res.status}): ${errDetail}`);
    }

    const data = await res.json();
    const output = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!output) {
      throw new Error("No content candidates returned from Gemini API.");
    }

    return { success: true, result: output.trim() };
  } catch (err: any) {
    console.error("Failed to execute rewriteTextAction Server Action:", err);
    return { success: false, error: err.message || "Failed to process text." };
  }
}
