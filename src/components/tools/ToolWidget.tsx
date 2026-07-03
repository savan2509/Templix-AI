"use client";

import { useState, useEffect } from "react";

// Self-contained, client-side calculators. No network, no dependencies — all
// math runs in the browser. One entry component picks the widget by slug.

const CURRENCIES = ["$", "₹", "€", "£", "¥"];

function fmt(n: number): string {
  if (!isFinite(n)) return "—";
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function num(s: string): number {
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

const inputCls =
  "w-full h-11 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all";
const labelCls = "block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  );
}

function ResultRow({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex items-center justify-between py-2.5 ${strong ? "" : "border-b border-zinc-100 dark:border-zinc-800/60"}`}>
      <span className={`text-sm ${strong ? "font-bold text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"}`}>{label}</span>
      <span className={`${strong ? "text-lg font-black text-blue-600 dark:text-blue-400" : "font-semibold text-zinc-800 dark:text-zinc-200"}`}>{value}</span>
    </div>
  );
}

function CurrencySelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className={`${inputCls} cursor-pointer`}>
      {CURRENCIES.map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 sm:p-6 shadow-sm">
      {children}
    </div>
  );
}

/* ---------------- GST / Tax ---------------- */
function GstCalculator() {
  const [cur, setCur] = useState("$");
  const [amount, setAmount] = useState("1000");
  const [rate, setRate] = useState("18");
  const [mode, setMode] = useState<"add" | "remove">("add");

  const a = num(amount), r = num(rate);
  let net = 0, tax = 0, gross = 0;
  if (mode === "add") { net = a; tax = a * r / 100; gross = a + tax; }
  else { gross = a; net = a / (1 + r / 100); tax = gross - net; }

  return (
    <Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Amount"><input className={inputCls} inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} /></Field>
        <Field label="Tax / GST rate (%)"><input className={inputCls} inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} /></Field>
        <Field label="Currency"><CurrencySelect value={cur} onChange={setCur} /></Field>
        <Field label="Mode">
          <div className="grid grid-cols-2 gap-2">
            {(["add", "remove"] as const).map((m) => (
              <button key={m} onClick={() => setMode(m)} className={`h-11 rounded-xl text-sm font-semibold transition-colors ${mode === m ? "bg-blue-600 text-white" : "border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300"}`}>
                {m === "add" ? "Add tax" : "Remove tax"}
              </button>
            ))}
          </div>
        </Field>
      </div>
      <div className="mt-6">
        <ResultRow label="Net amount" value={`${cur}${fmt(net)}`} />
        <ResultRow label={`Tax (${fmt(r)}%)`} value={`${cur}${fmt(tax)}`} />
        <ResultRow label="Gross total" value={`${cur}${fmt(gross)}`} strong />
      </div>
    </Card>
  );
}

/* ---------------- Discount ---------------- */
function DiscountCalculator() {
  const [cur, setCur] = useState("$");
  const [price, setPrice] = useState("120");
  const [disc, setDisc] = useState("25");

  const p = num(price), d = num(disc);
  const save = p * d / 100;
  const final = p - save;

  return (
    <Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Original price"><input className={inputCls} inputMode="decimal" value={price} onChange={(e) => setPrice(e.target.value)} /></Field>
        <Field label="Discount (%)"><input className={inputCls} inputMode="decimal" value={disc} onChange={(e) => setDisc(e.target.value)} /></Field>
        <Field label="Currency"><CurrencySelect value={cur} onChange={setCur} /></Field>
      </div>
      <div className="mt-6">
        <ResultRow label="You save" value={`${cur}${fmt(save)}`} />
        <ResultRow label="Final price" value={`${cur}${fmt(final)}`} strong />
      </div>
    </Card>
  );
}

/* ---------------- Profit margin ---------------- */
function MarginCalculator() {
  const [cur, setCur] = useState("$");
  const [cost, setCost] = useState("60");
  const [price, setPrice] = useState("100");

  const c = num(cost), p = num(price);
  const profit = p - c;
  const margin = p ? (profit / p) * 100 : 0;
  const markup = c ? (profit / c) * 100 : 0;

  return (
    <Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Cost price"><input className={inputCls} inputMode="decimal" value={cost} onChange={(e) => setCost(e.target.value)} /></Field>
        <Field label="Selling price"><input className={inputCls} inputMode="decimal" value={price} onChange={(e) => setPrice(e.target.value)} /></Field>
        <Field label="Currency"><CurrencySelect value={cur} onChange={setCur} /></Field>
      </div>
      <div className="mt-6">
        <ResultRow label="Profit" value={`${cur}${fmt(profit)}`} />
        <ResultRow label="Markup" value={`${fmt(markup)}%`} />
        <ResultRow label="Profit margin" value={`${fmt(margin)}%`} strong />
      </div>
    </Card>
  );
}

/* ---------------- Invoice number generator ---------------- */
function InvoiceNumberGenerator() {
  const [prefix, setPrefix] = useState("INV");
  const [useDate, setUseDate] = useState(true);
  const [start, setStart] = useState("1");
  const [pad, setPad] = useState("4");
  // Compute the year-month on the client only, to avoid SSR/hydration mismatch.
  const [ym, setYm] = useState("");
  useEffect(() => {
    const d = new Date();
    setYm(`${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}`);
  }, []);

  const build = (n: number) => {
    const parts = [prefix.trim()].filter(Boolean);
    if (useDate && ym) parts.push(ym);
    parts.push(String(n).padStart(Math.max(0, Math.min(10, num(pad) | 0)), "0"));
    return parts.join("-");
  };

  const s = Math.max(0, num(start) | 0);
  const preview = [0, 1, 2, 3, 4].map((i) => build(s + i));

  return (
    <Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Prefix"><input className={inputCls} value={prefix} onChange={(e) => setPrefix(e.target.value)} /></Field>
        <Field label="Start number"><input className={inputCls} inputMode="numeric" value={start} onChange={(e) => setStart(e.target.value)} /></Field>
        <Field label="Zero padding"><input className={inputCls} inputMode="numeric" value={pad} onChange={(e) => setPad(e.target.value)} /></Field>
      </div>
      <label className="mt-4 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 cursor-pointer">
        <input type="checkbox" checked={useDate} onChange={(e) => setUseDate(e.target.checked)} className="h-4 w-4 rounded accent-blue-600" />
        Include current year &amp; month{ym ? ` (${ym})` : ""}
      </label>
      <div className="mt-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 p-4">
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Next invoice numbers</p>
        <div className="flex flex-wrap gap-2">
          {preview.map((p, i) => (
            <span key={i} className={`px-3 py-1.5 rounded-lg text-sm font-mono ${i === 0 ? "bg-blue-600 text-white font-bold" : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"}`}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

/* ---------------- Freelance hourly rate ---------------- */
function HourlyRateCalculator() {
  const [cur, setCur] = useState("$");
  const [income, setIncome] = useState("80000");
  const [expenses, setExpenses] = useState("10000");
  const [hours, setHours] = useState("30");
  const [weeks, setWeeks] = useState("46");

  const billable = num(hours) * num(weeks);
  const rate = billable ? (num(income) + num(expenses)) / billable : 0;
  const dayRate = rate * 8;

  return (
    <Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Target yearly income"><input className={inputCls} inputMode="decimal" value={income} onChange={(e) => setIncome(e.target.value)} /></Field>
        <Field label="Yearly business expenses"><input className={inputCls} inputMode="decimal" value={expenses} onChange={(e) => setExpenses(e.target.value)} /></Field>
        <Field label="Billable hours / week"><input className={inputCls} inputMode="decimal" value={hours} onChange={(e) => setHours(e.target.value)} /></Field>
        <Field label="Working weeks / year"><input className={inputCls} inputMode="decimal" value={weeks} onChange={(e) => setWeeks(e.target.value)} /></Field>
        <Field label="Currency"><CurrencySelect value={cur} onChange={setCur} /></Field>
      </div>
      <div className="mt-6">
        <ResultRow label="Billable hours / year" value={fmt(billable)} />
        <ResultRow label="Suggested day rate (8h)" value={`${cur}${fmt(dayRate)}`} />
        <ResultRow label="Hourly rate to charge" value={`${cur}${fmt(rate)}`} strong />
      </div>
    </Card>
  );
}

const WIDGETS: Record<string, () => React.ReactElement> = {
  "gst-calculator": GstCalculator,
  "discount-calculator": DiscountCalculator,
  "profit-margin-calculator": MarginCalculator,
  "invoice-number-generator": InvoiceNumberGenerator,
  "hourly-rate-calculator": HourlyRateCalculator,
};

export default function ToolWidget({ slug }: { slug: string }) {
  const Widget = WIDGETS[slug];
  if (!Widget) return null;
  return <Widget />;
}
