"use client";

import { ArrowUpRight } from "lucide-react";
import { CERTIFICATES } from "@/app/constants";
import { Reveal, SectionHead } from "../common/Reveal";

export default function Certificates() {
  const award = CERTIFICATES.find((c) => c.issuer === "SOČ");
  const certs = CERTIFICATES.filter((c) => c !== award);

  return (
    <section id="certificates" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="04" label="Recognition">
          Proof, stamped.
        </SectionHead>

        {award && (
          <Reveal className="mb-16 grid gap-6 border-y border-line py-10 md:grid-cols-12 md:gap-8 md:py-14">
            <span className="display text-[clamp(5rem,12vw,9rem)] md:col-span-3">5th</span>
            <div className="md:col-span-8 md:col-start-5 md:self-center">
              <p className="title mb-3 text-[clamp(1.5rem,2.8vw,2.25rem)]">{award.name}</p>
              <p className="text-muted">
                {award.issuer} {award.issueDate} · {award.skills.join(", ")}
              </p>
            </div>
          </Reveal>
        )}

        <ul className="grid gap-x-12 md:grid-cols-2">
          {certs.map((cert, i) => (
            <li key={cert.id} className="border-b border-line">
              <Reveal y={14} delay={0.04 * (i % 2)}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 py-6"
                >
                  <span>
                    <span className="block text-lg text-ink transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1">
                      {cert.name}
                    </span>
                    <span className="mt-1 block text-sm text-dim">
                      {cert.issuer} · {cert.issueDate}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-dim transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45 group-hover:text-ink" />
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
