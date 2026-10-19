"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { EXPERIENCE } from "@/app/constants";
import { Reveal, SectionHead } from "../common/Reveal";

export default function Experience() {
  // the current job opens with the page; a row opens and closes on a click
  const [open, setOpen] = useState<string | null>(EXPERIENCE[0]?.id ?? null);

  return (
    <section id="experience" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="03" label="Experience">
          Where I&apos;ve shipped.
        </SectionHead>

        <ul className="border-t border-line">
          {EXPERIENCE.map((job, i) => {
            const isOpen = open === job.id;
            return (
              <li key={job.id} className="border-b border-line">
                <Reveal y={16} delay={0.04 * i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : job.id)}
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-7 text-left md:grid-cols-12 md:gap-8"
                  >
                    <span className="col-span-2 flex items-center gap-2 text-sm tabular-nums text-dim md:col-span-3">
                      {job.current && <span className="pulse-dot" />}
                      {job.period.replace(" - ", " — ")}
                    </span>
                    <span className="md:col-span-8">
                      <span className="title block text-2xl transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1.5 md:text-3xl">
                        {job.position}
                      </span>
                      <span className="mt-1 block text-muted">{job.company}</span>
                    </span>
                    <span className="flex justify-end md:col-span-1">
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-full border transition-all duration-500 ease-[var(--ease-out-expo)] ${
                          isOpen ? "rotate-45 border-white bg-white text-black" : "border-line-strong text-ink group-hover:border-white"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </span>
                  </button>
                  {/* closed, the details stay in the page (for search engines too), folded to no height */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out-expo)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                    inert={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <div className="grid pb-9 md:grid-cols-12 md:gap-8">
                        <div className="md:col-span-8 md:col-start-4">
                          <ul className="mb-6 space-y-2.5 text-muted">
                            {job.description.map((line) => (
                              <li key={line} className="flex gap-3 leading-relaxed">
                                <span className="mt-[0.7em] h-px w-3 shrink-0 bg-dim" />
                                {line}
                              </li>
                            ))}
                          </ul>
                          <p className="font-mono text-xs uppercase tracking-[0.08em] text-dim">
                            {job.technologies.join("  ·  ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
