"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import type { MacScreen } from "@/app/types";

/** A macOS desktop with one window on it, in greys; the content sized to the screen (cqw). */
function Window({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className="@container absolute inset-0 bg-[radial-gradient(120%_90%_at_30%_10%,#2a2a2d,#0b0b0c_70%)]">
      <div className={`absolute left-[7cqw] right-[7cqw] top-[7cqw] bottom-[6cqw] overflow-hidden rounded-[1.2cqw] border border-white/10 bg-[#141415]/95 shadow-[0_2cqw_6cqw_rgba(0,0,0,0.6)] ${className}`}>
        <div className="relative flex h-[4.2cqw] items-center gap-[0.9cqw] border-b border-white/[0.07] bg-[#1d1d1f] px-[1.6cqw]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[1.25cqw] w-[1.25cqw] rounded-full bg-[#3a3a3d]" />
          ))}
          <span className="absolute inset-x-0 text-center text-[1.5cqw] text-[#8e8e93]">{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

/** The project's own commands, typed one after another the first time it's seen, each followed by what it prints. */
function Terminal({ screen }: { screen: Extract<MacScreen, { kind: "terminal" }> }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const total = screen.lines.reduce((n, l) => n + l.cmd.length + 1, 0);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setTyped(total);
    const id = setInterval(() => setTyped((t) => (t >= total ? t : t + 1)), 38);
    return () => clearInterval(id);
  }, [inView, reduce, total]);

  let left = typed;
  return (
    <Window title={screen.title}>
      <div ref={ref} className="space-y-[1.2cqw] p-[2.4cqw] font-mono text-[1.7cqw] leading-[1.55] text-[#d1d1d6]">
        {screen.lines.map((line, i) => {
          const shown = Math.max(0, Math.min(line.cmd.length, left));
          const done = left > line.cmd.length;
          const started = left > 0;
          left -= line.cmd.length + 1;
          if (!started && i > 0) return null;
          return (
            <div key={i}>
              <div>
                <span className="text-[#8e8e93]">{screen.prompt} </span>
                {line.cmd.slice(0, shown)}
                {!done && <span className="ml-[0.2cqw] inline-block h-[1.9cqw] w-[0.9cqw] translate-y-[0.3cqw] animate-pulse bg-[#d1d1d6]" />}
              </div>
              {done && <div className="text-[#8e8e93]">{line.out}</div>}
            </div>
          );
        })}
      </div>
    </Window>
  );
}

const COLS = ["A", "B", "C", "D", "E", "F"];
const ITEMS = ["Revenue", "Costs", "Payroll", "Hosting", "Licences", "Travel", "Marketing", "Other"];

/** A spreadsheet drawn in the page (an illustration): a column of numbers that keep changing, and the totals under them
 *  recalculating, as an engine would. */
function Spreadsheet() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState([1840, 620, 940, 120, 260, 310, 480, 95]);
  const [hot, setHot] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      const i = Math.floor(Math.random() * values.length);
      setHot(i);
      setValues((v) => v.map((x, j) => (j === i ? Math.max(40, Math.round(x * (0.8 + Math.random() * 0.45))) : x)));
    }, 1400);
    return () => clearInterval(id);
  }, [reduce, values.length]);
  const sum = values.reduce((a, b) => a + b, 0);
  const rows: (string | number)[][] = ITEMS.map((name, i) => [name, values[i], Math.round(values[i] * 1.21), `${((values[i] / sum) * 100).toFixed(1)} %`, "", ""]);
  rows.push(["Total", sum, Math.round(sum * 1.21), "100.0 %", "", ""]);

  return (
    <Window title="budget.xlsx">
      <div className="flex h-[3.6cqw] items-center gap-[1.4cqw] border-b border-white/[0.07] px-[1.6cqw] font-mono text-[1.5cqw]">
        <span className="text-[#8e8e93]">B{hot + 2}</span>
        <span className="text-[#5e5e63]">fx</span>
        <span className="text-[#d1d1d6]">={values[hot]}</span>
        <span className="ml-auto text-[#5e5e63]">B10 =SUM(B2:B9)</span>
      </div>
      <table className="w-full border-collapse font-mono text-[1.45cqw] tabular-nums text-[#d1d1d6]">
        <thead>
          <tr className="text-[#5e5e63]">
            <th className="w-[3.4cqw] border border-white/[0.06] font-normal" />
            {COLS.map((c) => (
              <th key={c} className="border border-white/[0.06] py-[0.4cqw] font-normal">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-white/[0.06] text-center text-[#5e5e63]">1</td>
            {["Item", "Net", "Gross", "Share", "", ""].map((h, i) => (
              <td key={i} className="border border-white/[0.06] px-[0.8cqw] py-[0.45cqw] text-[#8e8e93]">{h}</td>
            ))}
          </tr>
          {rows.map((row, r) => (
            <tr key={r} className={r === rows.length - 1 ? "font-semibold text-white" : ""}>
              <td className="border border-white/[0.06] text-center text-[#5e5e63]">{r + 2}</td>
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`border border-white/[0.06] px-[0.8cqw] py-[0.45cqw] transition-colors duration-500 ${typeof cell === "number" ? "text-right" : ""} ${
                    c === 1 && r === hot ? "bg-white text-black" : ""
                  }`}
                >
                  {typeof cell === "number" ? cell.toLocaleString("en-US") : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Window>
  );
}

/** What a laptop shows: a screenshot, a terminal or a spreadsheet. */
export function MacScreenView({ screen, eager = false }: { screen: MacScreen; eager?: boolean }) {
  if (screen.kind === "terminal") return <Terminal screen={screen} />;
  if (screen.kind === "spreadsheet") return <Spreadsheet />;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={screen.src} alt={screen.alt} loading={eager ? "eager" : "lazy"} className="absolute inset-0 size-full object-cover object-top" />
  );
}
