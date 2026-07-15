"use client";

// Client-side file tools — everything runs in the browser, nothing is uploaded.
// PDF manipulation uses pdf-lib; PDF → JPG rasterization uses pdfjs-dist.
import { useCallback, useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";
import {
  UploadCloud, Download, X, Loader2, GripVertical, FileText, Image as ImageIcon,
  CheckCircle2, AlertTriangle, XCircle,
} from "lucide-react";

// ── shared UI ────────────────────────────────────────────────────────────────
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 sm:p-6 shadow-sm">
      {children}
    </div>
  );
}
const btnPrimary =
  "inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 transition-colors";
const input =
  "w-full h-11 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all";

function download(bytes: Uint8Array | string, name: string, type: string) {
  // Copy into a fresh, ArrayBuffer-backed view so the Blob typings are satisfied.
  const part: BlobPart = typeof bytes === "string" ? bytes : new Uint8Array(bytes);
  const url = URL.createObjectURL(new Blob([part], { type }));
  const a = document.createElement("a");
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function DropZone({ accept, multiple, onFiles, hint }: {
  accept: string; multiple?: boolean; onFiles: (f: File[]) => void; hint: string;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);
  const take = (list: FileList | null) => {
    if (!list) return;
    const arr = [...list].filter((f) => new RegExp(accept.replace(/\./g, "\\.").replace(/,/g, "|").replace(/\*/g, ".*")).test(f.name) || accept.includes(f.type));
    if (arr.length) onFiles(arr);
  };
  return (
    <button
      type="button"
      onClick={() => ref.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => { e.preventDefault(); setOver(false); take(e.dataTransfer.files); }}
      className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors ${over ? "border-blue-500 bg-blue-50/60 dark:bg-blue-950/30" : "border-zinc-300 dark:border-zinc-700 hover:border-blue-400"}`}
    >
      <UploadCloud className="h-8 w-8 text-blue-500" />
      <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">Click to choose or drag files here</span>
      <span className="text-xs text-zinc-400">{hint}</span>
      <input ref={ref} type="file" accept={accept} multiple={multiple} className="hidden" onChange={(e) => take(e.target.files)} />
    </button>
  );
}

function ErrorNote({ msg }: { msg: string }) {
  return (
    <p className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-400">
      <AlertTriangle className="h-4 w-4 shrink-0" /> {msg}
    </p>
  );
}
const fmtSize = (b: number) => (b < 1024 * 1024 ? `${(b / 1024).toFixed(0)} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`);

// Decode any browser-supported image (PNG, JPG, WEBP, GIF, BMP, AVIF, SVG…) into
// a loaded <img>. Rejects with the filename so callers can name the culprit.
function decodeImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const el = new Image();
    el.onload = () => resolve(el);
    el.onerror = () => { URL.revokeObjectURL(url); reject(new Error(file.name)); };
    el.src = url;
  });
}
// pdf-lib can only embed PNG/JPG, so rasterize any other format to PNG bytes via
// a canvas first — lets the "image → PDF" tool accept every image format.
async function fileToPngBytes(file: File): Promise<Uint8Array> {
  const img = await decodeImage(file);
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth || img.width;
  canvas.height = img.naturalHeight || img.height;
  canvas.getContext("2d")!.drawImage(img, 0, 0);
  const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/png"));
  if (!blob) throw new Error(file.name);
  return new Uint8Array(await blob.arrayBuffer());
}
const IMG_ACCEPT = "image/*,.png,.jpg,.jpeg,.webp,.gif,.bmp,.avif,.svg,.ico,.tiff";

// Encodable output formats shared by the image tools (canvas.toBlob targets).
const IMG_FORMATS = [
  { key: "image/png", label: "PNG", ext: "png" },
  { key: "image/jpeg", label: "JPG", ext: "jpg" },
  { key: "image/webp", label: "WEBP", ext: "webp" },
] as const;
type ImgFormatKey = (typeof IMG_FORMATS)[number]["key"];

// ── Merge PDF ────────────────────────────────────────────────────────────────
export function MergePdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const move = (i: number, dir: -1 | 1) => setFiles((f) => {
    const j = i + dir; if (j < 0 || j >= f.length) return f;
    const c = [...f]; [c[i], c[j]] = [c[j], c[i]]; return c;
  });

  const merge = useCallback(async () => {
    setErr(null); setBusy(true);
    try {
      const out = await PDFDocument.create();
      for (const file of files) {
        const src = await PDFDocument.load(await file.arrayBuffer());
        const pages = await out.copyPages(src, src.getPageIndices());
        pages.forEach((p) => out.addPage(p));
      }
      download(await out.save(), "merged.pdf", "application/pdf");
    } catch {
      setErr("Couldn't merge these files. One of them may be password-protected or not a valid PDF.");
    } finally { setBusy(false); }
  }, [files]);

  return (
    <Card>
      <DropZone accept=".pdf,application/pdf" multiple hint="Add two or more PDF files" onFiles={(f) => setFiles((p) => [...p, ...f])} />
      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((f, i) => (
            <li key={i} className="flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 px-3 py-2 text-sm">
              <GripVertical className="h-4 w-4 text-zinc-300" />
              <FileText className="h-4 w-4 shrink-0 text-blue-500" />
              <span className="min-w-0 flex-1 truncate">{f.name}</span>
              <span className="text-xs text-zinc-400">{fmtSize(f.size)}</span>
              <button onClick={() => move(i, -1)} disabled={i === 0} className="px-1 text-zinc-400 disabled:opacity-30" aria-label="Move up">↑</button>
              <button onClick={() => move(i, 1)} disabled={i === files.length - 1} className="px-1 text-zinc-400 disabled:opacity-30" aria-label="Move down">↓</button>
              <button onClick={() => setFiles((p) => p.filter((_, k) => k !== i))} className="text-zinc-400 hover:text-red-500" aria-label="Remove"><X className="h-4 w-4" /></button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={merge} disabled={files.length < 2 || busy} className={`${btnPrimary} mt-5 w-full sm:w-auto`}>
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
        {busy ? "Merging…" : `Merge ${files.length || ""} PDFs`}
      </button>
      {err && <ErrorNote msg={err} />}
    </Card>
  );
}

// Parse "1-3, 5, 8-10" against a page count → zero-based indices (deduped, in order).
function parseRanges(spec: string, count: number): number[] {
  const out: number[] = [];
  for (const part of spec.split(",").map((s) => s.trim()).filter(Boolean)) {
    const m = part.match(/^(\d+)\s*-\s*(\d+)$/);
    if (m) {
      const a = Math.max(1, +m[1]), b = Math.min(count, +m[2]);
      for (let p = a; p <= b; p++) out.push(p - 1);
    } else if (/^\d+$/.test(part)) {
      const p = +part; if (p >= 1 && p <= count) out.push(p - 1);
    }
  }
  return [...new Set(out)];
}

// ── Split PDF (extract a page range) ─────────────────────────────────────────
export function SplitPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [count, setCount] = useState(0);
  const [spec, setSpec] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const load = useCallback(async (f: File) => {
    setErr(null); setFile(f); setCount(0);
    try {
      const doc = await PDFDocument.load(await f.arrayBuffer());
      setCount(doc.getPageCount()); setSpec(`1-${doc.getPageCount()}`);
    } catch {
      setErr("Couldn't read this PDF — it may be password-protected or corrupted.");
      setFile(null);
    }
  }, []);

  const extract = useCallback(async () => {
    if (!file) return;
    setErr(null); setBusy(true);
    try {
      const src = await PDFDocument.load(await file.arrayBuffer());
      const idx = parseRanges(spec, src.getPageCount());
      if (!idx.length) { setErr("Enter valid page numbers, e.g. 1-3, 5."); return; }
      const out = await PDFDocument.create();
      const pages = await out.copyPages(src, idx);
      pages.forEach((p) => out.addPage(p));
      download(await out.save(), "split.pdf", "application/pdf");
    } catch {
      setErr("Couldn't split this PDF.");
    } finally { setBusy(false); }
  }, [file, spec]);

  return (
    <Card>
      <DropZone accept=".pdf,application/pdf" hint="Choose one PDF, then pick the pages to keep" onFiles={(f) => load(f[0])} />
      {file && count > 0 && (
        <div className="mt-4 space-y-3">
          <p className="text-sm text-zinc-500 dark:text-zinc-400"><span className="font-semibold text-zinc-800 dark:text-zinc-200">{file.name}</span> — {count} pages</p>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Pages to extract</label>
          <input className={input} value={spec} onChange={(e) => setSpec(e.target.value)} placeholder="e.g. 1-3, 5, 8-10" />
          <button onClick={extract} disabled={busy} className={`${btnPrimary} w-full sm:w-auto`}>
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            {busy ? "Splitting…" : "Extract pages"}
          </button>
        </div>
      )}
      {err && <ErrorNote msg={err} />}
    </Card>
  );
}

// ── JPG / PNG → PDF ──────────────────────────────────────────────────────────
export function JpgToPdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const build = useCallback(async () => {
    setErr(null); setBusy(true);
    try {
      const doc = await PDFDocument.create();
      for (const file of files) {
        const name = file.name.toLowerCase();
        const isJpg = /jpe?g$/.test(file.type) || /\.jpe?g$/.test(name);
        const isPng = /png$/.test(file.type) || /\.png$/.test(name);
        // JPG/PNG embed straight from bytes; every other format (WEBP, GIF, BMP,
        // AVIF, SVG…) is rasterized to PNG first so pdf-lib can embed it.
        const img = isJpg
          ? await doc.embedJpg(await file.arrayBuffer())
          : isPng
            ? await doc.embedPng(await file.arrayBuffer())
            : await doc.embedPng(await fileToPngBytes(file));
        const page = doc.addPage([img.width, img.height]);
        page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
      }
      download(await doc.save(), "images.pdf", "application/pdf");
    } catch (e) {
      const which = e instanceof Error && e.message ? `“${e.message}”` : "an image";
      setErr(`Couldn't add ${which}. Most image formats work; HEIC/HEIF only decode in Safari — re-save it as PNG or JPG.`);
    } finally { setBusy(false); }
  }, [files]);

  return (
    <Card>
      <DropZone accept={IMG_ACCEPT} multiple hint="Add JPG, PNG, WEBP, GIF, BMP, AVIF or SVG images — one per page" onFiles={(f) => setFiles((p) => [...p, ...f])} />
      {files.length > 0 && (
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {files.map((f, i) => (
            <li key={i} className="flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 px-3 py-2 text-xs">
              <ImageIcon className="h-4 w-4 shrink-0 text-blue-500" />
              <span className="min-w-0 flex-1 truncate">{f.name}</span>
              <button onClick={() => setFiles((p) => p.filter((_, k) => k !== i))} className="text-zinc-400 hover:text-red-500" aria-label="Remove"><X className="h-3.5 w-3.5" /></button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={build} disabled={files.length < 1 || busy} className={`${btnPrimary} mt-5 w-full sm:w-auto`}>
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
        {busy ? "Building…" : "Create PDF"}
      </button>
      {err && <ErrorNote msg={err} />}
    </Card>
  );
}

// ── PDF → JPG (rasterize each page) ──────────────────────────────────────────
export function PdfToJpg() {
  const [pages, setPages] = useState<string[]>([]);
  const [target, setTarget] = useState<ImgFormatKey>("image/jpeg");
  const [lastFile, setLastFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const fmt = IMG_FORMATS.find((f) => f.key === target)!;

  const convert = useCallback(async (file: File, format: ImgFormatKey) => {
    setErr(null); setBusy(true); setPages([]); setLastFile(file);
    try {
      const pdfjs: any = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
      const doc = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise;
      const out: string[] = [];
      for (let n = 1; n <= doc.numPages; n++) {
        const page = await doc.getPage(n);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width; canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;
        // JPG has no alpha — paint white behind the page so it isn't transparent.
        if (format === "image/jpeg") { ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, canvas.width, canvas.height); }
        await page.render({ canvasContext: ctx, viewport }).promise;
        out.push(canvas.toDataURL(format, 0.92));
      }
      setPages(out);
    } catch {
      setErr("Couldn't render this PDF — it may be password-protected or corrupted.");
    } finally { setBusy(false); }
  }, []);

  const pickFormat = (key: ImgFormatKey) => {
    setTarget(key);
    if (lastFile) convert(lastFile, key); // re-render the current PDF in the new format
  };

  return (
    <Card>
      <div className="mb-4">
        <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">Export pages as</label>
        <div className="inline-flex rounded-xl border border-zinc-200 dark:border-zinc-800 p-1">
          {IMG_FORMATS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => pickFormat(f.key)}
              className={`h-9 px-4 rounded-lg text-sm font-bold transition-colors ${target === f.key ? "bg-blue-600 text-white" : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <DropZone accept=".pdf,application/pdf" hint={`Choose a PDF — each page becomes a downloadable ${fmt.label}`} onFiles={(f) => convert(f[0], target)} />
      {busy && <p className="mt-4 flex items-center gap-2 text-sm text-zinc-500"><Loader2 className="h-4 w-4 animate-spin" /> Rendering pages…</p>}
      {pages.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {pages.map((src, i) => (
            <div key={i} className="space-y-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Page ${i + 1}`} className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800" />
              <a href={src} download={`page-${i + 1}.${fmt.ext}`} className="flex items-center justify-center gap-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-2 text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700">
                <Download className="h-3.5 w-3.5" /> Page {i + 1}
              </a>
            </div>
          ))}
        </div>
      )}
      {err && <ErrorNote msg={err} />}
    </Card>
  );
}

// ── Image Converter (any image → PNG / JPG / WEBP, fully in-browser) ──────────
// Decodes whatever the browser can read (PNG, JPG, WEBP, GIF, BMP, AVIF, SVG…)
// via an <img>, repaints onto a canvas and re-encodes to the chosen format with
// canvas.toBlob — so a single tool covers every format pair people search for.
type ConvertedImage = { name: string; url: string; size: number };

export function ImageConverter() {
  const [files, setFiles] = useState<File[]>([]);
  const [target, setTarget] = useState<ImgFormatKey>("image/png");
  const [quality, setQuality] = useState(0.92);
  const [results, setResults] = useState<ConvertedImage[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const fmt = IMG_FORMATS.find((f) => f.key === target)!;
  const lossy = target !== "image/png"; // PNG is lossless — no quality control

  const convert = useCallback(async () => {
    setErr(null);
    setBusy(true);
    // Free the object URLs from the previous run before starting a new one.
    setResults((prev) => {
      prev.forEach((r) => URL.revokeObjectURL(r.url));
      return [];
    });
    try {
      const out: ConvertedImage[] = [];
      for (const file of files) {
        const img = await new Promise<HTMLImageElement>((resolve, reject) => {
          const url = URL.createObjectURL(file);
          const el = new Image();
          el.onload = () => resolve(el);
          el.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error(file.name));
          };
          el.src = url;
        });
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext("2d")!;
        // JPG has no alpha channel — flatten transparency onto white so PNGs with
        // transparent backgrounds don't come out black.
        if (target === "image/jpeg") {
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(img, 0, 0);
        const blob = await new Promise<Blob | null>((res) =>
          canvas.toBlob(res, target, lossy ? quality : undefined)
        );
        if (!blob) throw new Error(file.name);
        const base = file.name.replace(/\.[^./\\]+$/, "");
        out.push({ name: `${base}.${fmt.ext}`, url: URL.createObjectURL(blob), size: blob.size });
      }
      setResults(out);
    } catch (e) {
      const which = e instanceof Error && e.message ? `“${e.message}”` : "an image";
      setErr(
        `Couldn't convert ${which}. Most formats work, but HEIC/HEIF only decode in Safari — re-save it as PNG or JPG and try again.`
      );
    } finally {
      setBusy(false);
    }
  }, [files, target, quality, lossy, fmt.ext]);

  return (
    <Card>
      <DropZone
        accept="image/*,.png,.jpg,.jpeg,.webp,.gif,.bmp,.avif,.svg,.ico,.tiff"
        multiple
        hint="Add PNG, JPG, WEBP, GIF, BMP, AVIF or SVG images — convert them to any format"
        onFiles={(f) => setFiles((p) => [...p, ...f])}
      />
      {files.length > 0 && (
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {files.map((f, i) => (
            <li key={i} className="flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 px-3 py-2 text-xs">
              <ImageIcon className="h-4 w-4 shrink-0 text-blue-500" />
              <span className="min-w-0 flex-1 truncate">{f.name}</span>
              <button onClick={() => setFiles((p) => p.filter((_, k) => k !== i))} className="text-zinc-400 hover:text-red-500" aria-label="Remove"><X className="h-3.5 w-3.5" /></button>
            </li>
          ))}
        </ul>
      )}

      {/* Output format + quality */}
      <div className="mt-5 flex flex-wrap items-end gap-5">
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">Convert to</label>
          <div className="inline-flex rounded-xl border border-zinc-200 dark:border-zinc-800 p-1">
            {IMG_FORMATS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setTarget(f.key)}
                className={`h-9 px-4 rounded-lg text-sm font-bold transition-colors ${target === f.key ? "bg-blue-600 text-white" : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        {lossy && (
          <div className="min-w-[180px] flex-1">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">Quality — {Math.round(quality * 100)}%</label>
            <input type="range" min={0.3} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-blue-600" />
          </div>
        )}
      </div>

      <button onClick={convert} disabled={files.length < 1 || busy} className={`${btnPrimary} mt-5 w-full sm:w-auto`}>
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
        {busy ? "Converting…" : `Convert to ${fmt.label}`}
      </button>

      {results.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {results.map((r, i) => (
            <div key={i} className="space-y-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.url} alt={r.name} className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800" />
              <a href={r.url} download={r.name} className="flex items-center justify-center gap-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-2 text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700">
                <Download className="h-3.5 w-3.5" /> {r.name.length > 16 ? `${fmt.label} · ${fmtSize(r.size)}` : `${r.name} · ${fmtSize(r.size)}`}
              </a>
            </div>
          ))}
        </div>
      )}
      {err && <ErrorNote msg={err} />}
    </Card>
  );
}

// ── Resume ATS / Score Checker (rule-based, offline) ─────────────────────────
const ACTION_VERBS = ["led","built","designed","launched","managed","improved","increased","reduced","delivered","created","developed","implemented","achieved","drove","owned","shipped","optimized","grew","cut","automated","mentored","analyzed","negotiated"];
const SECTIONS = [
  { key: "summary", label: "Professional summary", re: /\b(summary|profile|objective)\b/i },
  { key: "experience", label: "Work experience", re: /\b(experience|employment|work history)\b/i },
  { key: "education", label: "Education", re: /\b(education|university|bachelor|master|degree|b\.?s\.?|m\.?s\.?)\b/i },
  { key: "skills", label: "Skills", re: /\b(skills|technologies|competencies|proficient)\b/i },
];

type Check = { label: string; status: "pass" | "warn" | "fail"; detail: string };

export function ResumeAtsChecker() {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const checks: Check[] = (() => {
    if (!words) return [];
    const lower = text.toLowerCase();
    const email = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i.test(text);
    const phone = /(\+?\d[\d\s().-]{7,}\d)/.test(text);
    const bullets = (text.match(/^[\s]*[•\-*]\s+/gm) || []).length;
    const verbs = ACTION_VERBS.filter((v) => new RegExp(`\\b${v}\\b`, "i").test(lower)).length;
    const quantified = (text.match(/\b\d+%|\$\s?\d|\b\d{2,}\b/g) || []).length;
    const sectionsFound = SECTIONS.filter((s) => s.re.test(text));
    const list: Check[] = [];
    list.push(email && phone
      ? { label: "Contact details", status: "pass", detail: "Email and phone found — recruiters can reach you." }
      : { label: "Contact details", status: email || phone ? "warn" : "fail", detail: `Add a ${email ? "phone number" : phone ? "professional email" : "professional email and phone number"}.` });
    for (const s of SECTIONS) {
      const has = sectionsFound.includes(s);
      list.push({ label: s.label, status: has ? "pass" : "warn", detail: has ? "Section detected." : `Add a clearly-labelled "${s.label}" section — ATS parse by heading.` });
    }
    list.push(words >= 400 && words <= 900
      ? { label: "Length", status: "pass", detail: `${words} words — a healthy one-to-two-page length.` }
      : { label: "Length", status: "warn", detail: `${words} words. Aim for ~400–900; ${words < 400 ? "add detail" : "trim to the most relevant"}.` });
    list.push(bullets >= 5
      ? { label: "Bullet points", status: "pass", detail: `${bullets} bullets — scannable formatting.` }
      : { label: "Bullet points", status: "warn", detail: "Use bullet points for achievements — dense paragraphs parse and read poorly." });
    list.push(verbs >= 5
      ? { label: "Strong action verbs", status: "pass", detail: `${verbs} action verbs (led, built, improved…).` }
      : { label: "Strong action verbs", status: "warn", detail: "Start bullets with action verbs like led, built, increased, reduced." });
    list.push(quantified >= 3
      ? { label: "Quantified impact", status: "pass", detail: "Numbers and metrics found — quantified results stand out." }
      : { label: "Quantified impact", status: "warn", detail: "Add metrics (%, $, counts) — “cut costs 30%” beats “cut costs”." });
    return list;
  })();

  const score = checks.length
    ? Math.round((checks.reduce((a, c) => a + (c.status === "pass" ? 1 : c.status === "warn" ? 0.5 : 0), 0) / checks.length) * 100)
    : 0;
  const band = score >= 80 ? "Strong" : score >= 60 ? "Needs work" : "At risk";
  const bandColor = score >= 80 ? "text-emerald-600 dark:text-emerald-400" : score >= 60 ? "text-amber-600 dark:text-amber-400" : "text-red-600 dark:text-red-400";

  return (
    <Card>
      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Paste your resume text</label>
      <textarea
        value={text} onChange={(e) => setText(e.target.value)} rows={8}
        placeholder="Paste the full text of your resume here (from your PDF or Word file)…"
        className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 p-4 text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
      />
      {checks.length > 0 && (
        <>
          <div className="mt-5 flex items-center gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
            <div className="text-3xl font-black text-blue-600 dark:text-blue-400">{score}<span className="text-base text-zinc-400">/100</span></div>
            <div>
              <p className={`text-sm font-bold ${bandColor}`}>ATS readiness: {band}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Rule-based check — no data leaves your browser.</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2.5">
            {checks.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                {c.status === "pass" ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  : c.status === "warn" ? <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  : <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />}
                <span><span className="font-semibold text-zinc-800 dark:text-zinc-200">{c.label}:</span> <span className="text-zinc-500 dark:text-zinc-400">{c.detail}</span></span>
              </li>
            ))}
          </ul>
        </>
      )}
    </Card>
  );
}
