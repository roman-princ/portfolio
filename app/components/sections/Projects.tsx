"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { WORK } from "@/app/constants";
import { Reveal, SectionHead } from "../common/Reveal";

const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="01" label="Selected work" aside={<span className="font-mono text-sm">{String(WORK.length).padStart(2, "0")} projects</span>}>
          Things I&apos;ve built.
        </SectionHead>

        <ul className="border-t border-line">
          {WORK.map((project, i) => {
            const link = project.demo || project.github;
            return (
              <li key={project.id} className="border-b border-line">
                <Reveal y={20} delay={0.04 * (i % 3)}>
                  {/* the row inverts on hover: white rises behind it, the type turns black; the name is the link to the
                      project's page, its layer spread over the row */}
                  <article className="group relative isolate grid gap-4 py-9 md:grid-cols-12 md:gap-8 md:px-6 md:py-11">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 origin-bottom scale-y-0 rounded-3xl bg-white transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100"
                    />
                    <span className="font-mono text-sm text-dim transition-colors duration-300 group-hover:text-black/40 md:col-span-1 md:pt-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="md:col-span-8">
                      <h3 className="title mb-3 text-[clamp(1.75rem,3.4vw,2.75rem)] transition-colors duration-300 group-hover:text-black">
                        <Link
                          href={`/work/${project.slug}`}
                          className="after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-white"
                        >
                          {project.title}
                        </Link>
                      </h3>
                      <p className="mb-5 max-w-2xl leading-relaxed text-muted transition-colors duration-300 group-hover:text-black/60">
                        {project.description}
                      </p>
                      <p className="font-mono text-xs uppercase tracking-[0.08em] text-dim transition-colors duration-300 group-hover:text-black/45">
                        {project.technologies.join("  ·  ")}
                      </p>
                    </div>
                    {link && (
                      // the live project, a link of its own above the row's
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 flex w-fit items-center gap-2 text-sm text-muted transition-colors duration-300 hover:underline group-hover:text-black md:col-span-3 md:justify-self-end md:self-start md:pt-3"
                      >
                        {host(link)}
                        <span className="grid h-9 w-9 place-items-center rounded-full border border-line-strong transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45 group-hover:border-black group-hover:bg-black group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </a>
                    )}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
