"use client";

// Global error boundary (HTTP 500 equivalent). Catches errors thrown in the
// root layout/render. It must render its own <html> and <body> because it
// replaces the root layout when it activates.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fafafa",
            padding: "1rem",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 440 }}>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563eb" }}>
              Error 500
            </p>
            <h1 style={{ margin: "8px 0 0", fontSize: 32, fontWeight: 800, color: "#18181b" }}>
              Something went wrong
            </h1>
            <p style={{ margin: "12px 0 0", color: "#71717a", lineHeight: 1.6 }}>
              An unexpected error occurred on our end. Please try again — if the problem persists, come
              back in a little while.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => reset()}
                style={{
                  padding: "10px 20px",
                  borderRadius: 12,
                  border: "none",
                  background: "#2563eb",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                Try again
              </button>
              <a
                href="/"
                style={{
                  padding: "10px 20px",
                  borderRadius: 12,
                  border: "1px solid #e4e4e7",
                  background: "#fff",
                  color: "#27272a",
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Back to home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
