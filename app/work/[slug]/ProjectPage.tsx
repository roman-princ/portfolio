"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/app/types";
import { IPhone } from "@/app/components/devices/IPhone";
import { MacBook } from "@/app/components/devices/MacBook";
import { MacScreenView } from "@/app/components/devices/Screens";
import { Letters } from "@/app/components/common/Letters";
import { easeOut, Reveal } from "@/app/components/common/Reveal";
import { scrollToTarget } from "@/app/lib/scroll";

const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");
const linkLabel = (url: string) => (host(url) === "apps.apple.com" ? "App Store" : host(url) === "github.com" ? "GitHub" : host(url));

/** The devices, leaning a little toward the pointer. */
function Stage({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rx = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const lean = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 7);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 5);
  };
  const rest = () => {
    rx.set(0);
    ry.set(0);
  };
  const phones = project.phones ?? [];

  return (
    <div ref={ref} onPointerMove={lean} onPointerLeave={rest} className="[perspective:2000px]">
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative">
        {project.mac ? (
          <>
            <MacBook className={phones.length ? "md:w-[90%]" : "mx-auto md:w-[92%]"}>
              <MacScreenView screen={project.mac} eager />
            </MacBook>
            {phones[0] && (
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, ease: easeOut, delay: 0.5 }}
                className="absolute -bottom-[4%] right-0 w-[26%] md:w-[20%]"
              >
                <motion.div animate={reduce ? undefined : { y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                  <IPhone screen={phones[0]} eager />
                </motion.div>
              </motion.div>
            )}
          </>
        ) : (
          // only phones: side by side, the middle one higher, all three gently bobbing out of step
          <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 [scrollbar-width:none] md:mx-0 md:justify-center md:gap-10 md:overflow-visible md:px-0">
            {phones.map((screen, i) => (
              <motion.div
                key={screen.src}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.1, ease: easeOut, delay: 0.12 * i }}
                className={`w-[64%] shrink-0 snap-center md:w-[27%] ${phones.length === 3 && i === 1 ? "md:-translate-y-10" : "md:translate-y-6"}`}
              >
                <motion.div
                  animate={reduce ? undefined : { y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.9 }}
                >
                  <IPhone screen={screen} eager={i === 0} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function ProjectPage({ project, index, next }: { project: Project; index: number; next: Project }) {
  const [name, tagline] = project.title.split(" — ");
  const [nextName] = next.title.split(" — ");
  const live = project.demo || "";
  const source = project.github || "";
  const facts = [
    project.year && ["Year", project.year],
    project.role && ["Role", project.role],
    ["Stack", project.technologies.join(", ")],
  ].filter(Boolean) as [string, string][];
  const morePhones = project.mac && (project.phones?.length ?? 0) > 1 ? project.phones! : [];

  return (
    <main className="relative">
      <section className="px-5 pt-28 md:px-8 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: easeOut }}>
            <Link href="/#projects" className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              All work
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="mb-6 mt-14 flex items-center gap-3 text-sm text-muted md:mt-20"
          >
            <span className="font-mono text-dim">{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-line-strong" />
            <span>{project.year ?? "Project"}</span>
          </motion.p>

          <h1 className="display text-[clamp(3.25rem,10.5vw,8.5rem)]">
            <Letters text={name} delay={0.15} />
          </h1>
          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.5 }}
              className="title mt-4 text-[clamp(1.5rem,3.2vw,2.5rem)] text-muted"
            >
              {tagline}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.65 }}
            className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed text-muted md:text-xl">{project.description}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-black transition-transform duration-300 hover:scale-[1.03] active:scale-95"
                  >
                    {linkLabel(live) === host(live) ? `Visit ${host(live)}` : `Open on ${linkLabel(live)}`}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                )}
                {source && (
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium text-ink transition-colors hover:border-white"
                  >
                    Source on GitHub
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                )}
              </div>
            </div>
            <dl className="border-t border-line md:col-span-4 md:col-start-9">
              {facts.map(([term, value]) => (
                <div key={term} className="grid grid-cols-[5rem_1fr] gap-4 border-b border-line py-4 text-[15px]">
                  <dt className="text-dim">{term}</dt>
                  <dd className="text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {(project.mac || project.phones?.length) && (
        <section className="overflow-hidden px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Stage project={project} />
            {project.mac?.kind === "spreadsheet" && (
              <p className="mt-6 text-center text-sm text-dim">An illustration of what the engine does</p>
            )}
          </div>
        </section>
      )}

      {project.highlights?.length ? (
        <section className="px-5 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-4">
              <p className="mb-5 text-sm text-muted">What it does</p>
              <h2 className="display text-[clamp(2.5rem,5.5vw,4.25rem)]">The details.</h2>
            </Reveal>
            <ol className="border-t border-line md:col-span-7 md:col-start-6">
              {project.highlights.map((item, i) => (
                <li key={item} className="border-b border-line">
                  <Reveal y={14} delay={0.05 * i} className="grid grid-cols-[2.5rem_1fr] gap-4 py-6">
                    <span className="pt-1 font-mono text-sm text-dim">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-lg leading-relaxed text-ink md:text-xl">{item}</span>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {morePhones.length > 0 && (
        <section className="px-5 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="mb-5 text-sm text-muted">In your pocket</p>
              <h2 className="display mb-14 text-[clamp(2.5rem,5.5vw,4.25rem)] md:mb-20">On the phone.</h2>
            </Reveal>
            <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-10 md:overflow-visible md:px-0">
              {morePhones.map((screen, i) => (
                <Reveal key={screen.src} y={60} delay={0.1 * i} className={`w-[64%] shrink-0 snap-center md:w-auto ${i === 1 ? "md:mt-16" : ""}`}>
                  <motion.div whileHover={{ y: -10, rotate: i % 2 ? 1.5 : -1.5 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                    <IPhone screen={screen} />
                  </motion.div>
                  <p className="mt-6 text-sm leading-relaxed text-muted">{screen.alt}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-5 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Link href={`/work/${next.slug}`} className="group block border-t border-line py-16 md:py-24">
            <span className="text-sm text-muted">Next project</span>
            <span className="display mt-4 flex items-center justify-between gap-6 text-[clamp(3rem,9vw,7.5rem)] text-muted transition-colors duration-500 group-hover:text-ink">
              {nextName}
              <ArrowRight className="h-[0.55em] w-[0.55em] shrink-0 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-3 group-hover:-rotate-45" />
            </span>
          </Link>
        </div>
        <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-line py-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Roman Princ</span>
          <Link href="/#contact" className="transition-colors hover:text-ink">
            Start a project with me
          </Link>
          <button onClick={() => scrollToTarget(0)} className="self-start text-left transition-colors hover:text-ink sm:self-auto">
            Back to the top
          </button>
        </footer>
      </section>
    </main>
  );
}
