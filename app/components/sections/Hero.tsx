"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO, PERSONAL_INFO } from "@/app/constants";
import { scrollToTarget } from "@/app/lib/scroll";
import { easeOut } from "../common/Reveal";

const BUILDS = ["web apps", "mobile apps", "backends", "whole products"];

/** A word, its letters rising in one after another, each one hopping when the pointer touches it. */
function Letters({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    // the padding above (taken back by the margin) is room for a letter's hop inside the mask it rises through
    <span className="-mt-[0.2em] block overflow-hidden pb-[0.06em] pt-[0.2em]" aria-label={text}>
      {[...text].map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block will-change-transform"
          initial={{ y: "105%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: delay + i * 0.045 }}
          whileHover={{ y: "-0.14em", rotate: i % 2 ? 7 : -7, transition: { type: "spring", stiffness: 500, damping: 12 } }}
          whileTap={{ scale: 0.92 }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/** "14:32", Prague's time now, its colon ticking. */
function PragueTime() {
  const [time, setTime] = useState<[string, string] | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Prague", hour: "2-digit", minute: "2-digit" });
    const tick = () => setTime(fmt.format(new Date()).split(":") as [string, string]);
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, []);
  if (!time) return null;
  return (
    <span className="tabular-nums text-ink">
      {time[0]}
      <span className="animate-pulse">:</span>
      {time[1]}
    </span>
  );
}

export default function Hero() {
  const [build, setBuild] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setBuild((i) => (i + 1) % BUILDS.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted md:mb-10"
        >
          <span className="pulse-dot" />
          <span className="text-ink">Available for freelance</span>
          <span className="text-dim">·</span>
          <span>
            Prague <PragueTime />
          </span>
        </motion.div>

        <h1 className="display mb-10 text-[clamp(4.25rem,17vw,13.5rem)] md:mb-14">
          <Letters text="Roman" delay={0.25} />{" "}
          <Letters text="Princ." delay={0.45} />
        </h1>

        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.9 }}
            className="md:col-span-7"
          >
            <p className="title mb-6 text-[clamp(1.6rem,3.2vw,2.5rem)] text-muted">
              Full-stack engineer.
              <br />I build{" "}
              <span className="relative inline-flex h-[1.08em] overflow-hidden align-bottom text-ink">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={BUILDS[build]}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.6, ease: easeOut }}
                    className="block whitespace-nowrap"
                  >
                    {BUILDS[build]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
            <p className="max-w-xl text-[17px] leading-relaxed text-muted md:text-lg">
              {PERSONAL_INFO.yearsOfExperience}+ years turning ambitious ideas into shipped products: B2C platforms in
              production, an award-winning IoT app, and engines that crunch numbers fast. Currently studying Software
              Engineering at CTU Prague.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 1.05 }}
            className="flex flex-col gap-6 md:col-span-5 md:items-end"
          >
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToTarget("#contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-black transition-transform duration-300 hover:scale-[1.03] active:scale-95"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-45" />
              </button>
              <button
                onClick={() => scrollToTarget("#projects")}
                className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium text-ink transition-colors hover:border-white"
              >
                See my work
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            </div>
            <div className="flex gap-6 text-sm text-muted">
              <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="draw pb-0.5 transition-colors hover:text-ink">
                GitHub
              </a>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="draw pb-0.5 transition-colors hover:text-ink">
                LinkedIn
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="draw pb-0.5 transition-colors hover:text-ink">
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
