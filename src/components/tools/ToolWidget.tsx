"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getDictionary, INTL_LOCALE, type Locale } from "@/lib/i18n";
import { MergePdf, SplitPdf, JpgToPdf, PdfToJpg, ImageConverter, ResumeAtsChecker } from "./file-tools";
import {
  ProposalBuilder, PricingCalculator, ScopeGenerator, ContractGenerator, NdaGenerator,
  TermsGenerator, LetterGenerator, ResignationLetterGenerator, RecommendationLetterGenerator,
} from "./doc-tools";

// Self-contained, client-side calculators. No network, no dependencies — all
// math runs in the browser. One entry component picks the widget by slug.
// UI labels come from the i18n dictionary; number formatting follows the locale.

const CURRENCIES = ["$", "₹", "€", "£", "¥"];

// Shared per-render i18n handle for a widget: the translated labels + the
// BCP-47 tag used to format numbers for the active locale.
function useToolI18n() {
  const locale = (usePathname().split("/")[1] || "en") as Locale;
  return {
    t: getDictionary(locale).toolWidget,
    intl: INTL_LOCALE[locale] ?? "en-US",
  };
}

function fmt(n: number, intl: string): string {
  if (!isFinite(n)) return "—";
  return n.toLocaleString(intl, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function num(s: string): number {
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

const inputCls =
  "w-full h-11 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all";
const labelCls = "block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2";

// The label wraps the control so the two are implicitly associated. Previously
// it was a sibling <label> with no htmlFor and the input had no id, which left
// every calculator field unlabelled for screen readers across all tool pages.
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      {children}
    </label>
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
  const { t, intl } = useToolI18n();
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
        <Field label={t.amount}><input className={inputCls} inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} /></Field>
        <Field label={t.taxRate}><input className={inputCls} inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} /></Field>
        <Field label={t.currency}><CurrencySelect value={cur} onChange={setCur} /></Field>
        <Field label={t.mode}>
          <div className="grid grid-cols-2 gap-2">
            {(["add", "remove"] as const).map((m) => (
              <button key={m} onClick={() => setMode(m)} className={`h-11 rounded-xl text-sm font-semibold transition-colors ${mode === m ? "bg-blue-600 text-white" : "border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300"}`}>
                {m === "add" ? t.addTax : t.removeTax}
              </button>
            ))}
          </div>
        </Field>
      </div>
      <div className="mt-6">
        <ResultRow label={t.netAmount} value={`${cur}${fmt(net, intl)}`} />
        <ResultRow label={`${t.tax} (${fmt(r, intl)}%)`} value={`${cur}${fmt(tax, intl)}`} />
        <ResultRow label={t.grossTotal} value={`${cur}${fmt(gross, intl)}`} strong />
      </div>
    </Card>
  );
}

/* ---------------- Discount ---------------- */
function DiscountCalculator() {
  const { t, intl } = useToolI18n();
  const [cur, setCur] = useState("$");
  const [price, setPrice] = useState("120");
  const [disc, setDisc] = useState("25");

  const p = num(price), d = num(disc);
  const save = p * d / 100;
  const final = p - save;

  return (
    <Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label={t.originalPrice}><input className={inputCls} inputMode="decimal" value={price} onChange={(e) => setPrice(e.target.value)} /></Field>
        <Field label={t.discount}><input className={inputCls} inputMode="decimal" value={disc} onChange={(e) => setDisc(e.target.value)} /></Field>
        <Field label={t.currency}><CurrencySelect value={cur} onChange={setCur} /></Field>
      </div>
      <div className="mt-6">
        <ResultRow label={t.youSave} value={`${cur}${fmt(save, intl)}`} />
        <ResultRow label={t.finalPrice} value={`${cur}${fmt(final, intl)}`} strong />
      </div>
    </Card>
  );
}

/* ---------------- Profit margin ---------------- */
function MarginCalculator() {
  const { t, intl } = useToolI18n();
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
        <Field label={t.costPrice}><input className={inputCls} inputMode="decimal" value={cost} onChange={(e) => setCost(e.target.value)} /></Field>
        <Field label={t.sellingPrice}><input className={inputCls} inputMode="decimal" value={price} onChange={(e) => setPrice(e.target.value)} /></Field>
        <Field label={t.currency}><CurrencySelect value={cur} onChange={setCur} /></Field>
      </div>
      <div className="mt-6">
        <ResultRow label={t.profit} value={`${cur}${fmt(profit, intl)}`} />
        <ResultRow label={t.markup} value={`${fmt(markup, intl)}%`} />
        <ResultRow label={t.profitMargin} value={`${fmt(margin, intl)}%`} strong />
      </div>
    </Card>
  );
}

/* ---------------- Invoice number generator ---------------- */
function InvoiceNumberGenerator() {
  const { t } = useToolI18n();
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
        <Field label={t.prefix}><input className={inputCls} value={prefix} onChange={(e) => setPrefix(e.target.value)} /></Field>
        <Field label={t.startNumber}><input className={inputCls} inputMode="numeric" value={start} onChange={(e) => setStart(e.target.value)} /></Field>
        <Field label={t.zeroPadding}><input className={inputCls} inputMode="numeric" value={pad} onChange={(e) => setPad(e.target.value)} /></Field>
      </div>
      <label className="mt-4 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 cursor-pointer">
        <input type="checkbox" checked={useDate} onChange={(e) => setUseDate(e.target.checked)} className="h-4 w-4 rounded accent-blue-600" />
        {t.includeYearMonth}{ym ? ` (${ym})` : ""}
      </label>
      <div className="mt-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 p-4">
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">{t.nextInvoiceNumbers}</p>
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
  const { t, intl } = useToolI18n();
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
        <Field label={t.targetYearlyIncome}><input className={inputCls} inputMode="decimal" value={income} onChange={(e) => setIncome(e.target.value)} /></Field>
        <Field label={t.yearlyExpenses}><input className={inputCls} inputMode="decimal" value={expenses} onChange={(e) => setExpenses(e.target.value)} /></Field>
        <Field label={t.billableHoursWeek}><input className={inputCls} inputMode="decimal" value={hours} onChange={(e) => setHours(e.target.value)} /></Field>
        <Field label={t.workingWeeksYear}><input className={inputCls} inputMode="decimal" value={weeks} onChange={(e) => setWeeks(e.target.value)} /></Field>
        <Field label={t.currency}><CurrencySelect value={cur} onChange={setCur} /></Field>
      </div>
      <div className="mt-6">
        <ResultRow label={t.billableHoursYear} value={fmt(billable, intl)} />
        <ResultRow label={t.suggestedDayRate} value={`${cur}${fmt(dayRate, intl)}`} />
        <ResultRow label={t.hourlyRate} value={`${cur}${fmt(rate, intl)}`} strong />
      </div>
    </Card>
  );
}

// Notice Period Calculator — last-working-day from a resignation date + notice
// length, with an optional leave adjustment. Runs entirely in the browser.
function NoticePeriodCalculator() {
  const [resignDate, setResignDate] = useState("");
  const [amount, setAmount] = useState("30");
  const [unit, setUnit] = useState<"days" | "months">("days");
  const [leaveOffset, setLeaveOffset] = useState("0");

  let lastDay = "";
  let totalDays = 0;
  if (resignDate) {
    const start = new Date(`${resignDate}T00:00:00`);
    if (!isNaN(start.getTime())) {
      const end = new Date(start);
      if (unit === "months") end.setMonth(end.getMonth() + Math.max(0, Math.round(num(amount))));
      else end.setDate(end.getDate() + Math.max(0, Math.round(num(amount))));
      end.setDate(end.getDate() - Math.max(0, Math.round(num(leaveOffset))));
      totalDays = Math.max(0, Math.round((end.getTime() - start.getTime()) / 86400000));
      lastDay = end.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    }
  }

  return (
    <Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Resignation / last-day-of-service date">
          <input type="date" className={inputCls} value={resignDate} onChange={(e) => setResignDate(e.target.value)} />
        </Field>
        <Field label="Notice period">
          <input className={inputCls} inputMode="numeric" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </Field>
        <Field label="Notice unit">
          <select value={unit} onChange={(e) => setUnit(e.target.value as "days" | "months")} className={`${inputCls} cursor-pointer`}>
            <option value="days">Days</option>
            <option value="months">Months</option>
          </select>
        </Field>
        <Field label="Leave to offset the notice (days)">
          <input className={inputCls} inputMode="numeric" value={leaveOffset} onChange={(e) => setLeaveOffset(e.target.value)} />
        </Field>
      </div>
      <div className="mt-6">
        <ResultRow label="Total notice days served" value={resignDate ? String(totalDays) : "—"} />
        <ResultRow label="Last working day" value={lastDay || "—"} strong />
      </div>
    </Card>
  );
}

// Salary Breakup / CTC → In-Hand Calculator (India). Breaks an annual CTC into
// the standard components and estimates monthly take-home. Runs in the browser.
function SalaryBreakupCalculator() {
  const [ctc, setCtc] = useState("1200000");
  const [metro, setMetro] = useState(true);
  const c = num(ctc);
  const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

  // Standard Indian CTC structure.
  const basic = c * 0.5;                          // Basic = 50% of CTC
  const hra = basic * (metro ? 0.5 : 0.4);        // HRA = 50% (metro) / 40% (non-metro) of Basic
  const employerPf = Math.min(basic, 180000) * 0.12; // employer PF (part of CTC)
  const gratuity = basic * 0.0481;                // ~4.81% of Basic
  const special = Math.max(0, c - basic - hra - employerPf - gratuity);

  const grossAnnual = basic + hra + special;      // paid monthly (employer PF/gratuity are CTC, not paid out)
  const employeePf = Math.min(basic, 180000) * 0.12;
  const profTax = 2400;                           // ₹200/month (varies by state)

  // Simplified new-regime (FY 2025-26) income-tax estimate: ₹75k standard
  // deduction, 87A rebate up to ₹12L taxable, then slabs + 4% cess.
  const taxable = Math.max(0, grossAnnual - 75000);
  let tax = 0;
  const brackets: [number, number][] = [
    [400000, 0], [800000, 0.05], [1200000, 0.1], [1600000, 0.15],
    [2000000, 0.2], [2400000, 0.25], [Infinity, 0.3],
  ];
  let prev = 0;
  for (const [cap, rate] of brackets) {
    if (taxable <= prev) break;
    tax += (Math.min(taxable, cap) - prev) * rate;
    prev = cap;
  }
  if (taxable <= 1200000) tax = 0; // Section 87A rebate under the new regime
  tax *= 1.04;                     // 4% health & education cess

  const inHandMonthly = (grossAnnual - employeePf - profTax - tax) / 12;

  return (
    <Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Annual CTC (₹)">
          <input className={inputCls} inputMode="decimal" value={ctc} onChange={(e) => setCtc(e.target.value)} />
        </Field>
        <Field label="City">
          <select value={metro ? "metro" : "non"} onChange={(e) => setMetro(e.target.value === "metro")} className={`${inputCls} cursor-pointer`}>
            <option value="metro">Metro (50% HRA)</option>
            <option value="non">Non-metro (40% HRA)</option>
          </select>
        </Field>
      </div>
      <div className="mt-6">
        <ResultRow label="Basic (50% of CTC)" value={inr(basic)} />
        <ResultRow label="HRA" value={inr(hra)} />
        <ResultRow label="Special allowance" value={inr(special)} />
        <ResultRow label="Employer PF (in CTC)" value={inr(employerPf)} />
        <ResultRow label="Gratuity (in CTC)" value={inr(gratuity)} />
        <ResultRow label="Less: Employee PF" value={inr(employeePf)} />
        <ResultRow label="Less: Professional tax" value={inr(profTax)} />
        <ResultRow label="Less: Income tax (est., new regime)" value={inr(tax)} />
        <ResultRow label="Estimated in-hand / month" value={inr(inHandMonthly)} strong />
      </div>
      <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
        Estimate only. Actual tax depends on your regime, declarations and investments; the exact Basic/HRA split and PF/gratuity terms vary by employer.
      </p>
    </Card>
  );
}

const WIDGETS: Record<string, () => React.ReactElement> = {
  "gst-calculator": GstCalculator,
  "notice-period-calculator": NoticePeriodCalculator,
  "salary-breakup-calculator": SalaryBreakupCalculator,
  "discount-calculator": DiscountCalculator,
  "profit-margin-calculator": MarginCalculator,
  "invoice-number-generator": InvoiceNumberGenerator,
  "hourly-rate-calculator": HourlyRateCalculator,
  // Client-side file tools (pdf-lib / pdfjs) — see ./file-tools.
  "merge-pdf": MergePdf,
  "split-pdf": SplitPdf,
  "jpg-to-pdf": JpgToPdf,
  "pdf-to-jpg": PdfToJpg,
  "image-converter": ImageConverter,
  "resume-ats-checker": ResumeAtsChecker,
  // Document generators (form → PDF/Word/copy) — see ./doc-tools.
  "proposal-builder": ProposalBuilder,
  "pricing-calculator": PricingCalculator,
  "scope-generator": ScopeGenerator,
  "contract-generator": ContractGenerator,
  "nda-generator": NdaGenerator,
  "terms-generator": TermsGenerator,
  "letter-generator": LetterGenerator,
  "resignation-letter-generator": ResignationLetterGenerator,
  "recommendation-letter-generator": RecommendationLetterGenerator,
};

export default function ToolWidget({ slug }: { slug: string }) {
  const Widget = WIDGETS[slug];
  if (!Widget) return null;
  return <Widget />;
}
