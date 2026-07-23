"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/app/constants";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-400/80 mb-4"
        >
          02 — Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-16"
        >
          Where I&apos;ve
          <span className="text-gradient-neon"> shipped.</span>
        </motion.h2>

        <div className="relative">
          {/* timeline spine */}
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-violet-500/40 to-fuchsia-500/60" />

          <div className="space-y-10">
            {EXPERIENCE.map((job, index) => (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.05 * index }}
                className="relative pl-10 md:pl-14"
              >
                {/* timeline dot */}
                <span
                  className={`absolute left-0 md:left-[2px] top-2 h-4 w-4 rounded-full border-2 ${
                    job.current
                      ? "pulse-dot bg-emerald-400 border-emerald-300"
                      : "bg-[#0b0618] border-violet-400/60"
                  }`}
                />

                <div className="neon-card rounded-2xl p-6 md:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                      {job.position}
                    </h3>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/40 tabular-nums">
                      {job.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-sm md:text-base text-gradient-neon font-semibold">
                      {job.company}
                    </span>
                    {job.current && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300 bg-emerald-400/10 border border-emerald-400/30 rounded-full px-2.5 py-0.5">
                        Now
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {job.description.map((line, i) => (
                      <li
                        key={i}
                        className="text-sm md:text-[15px] text-white/60 leading-relaxed flex gap-3"
                      >
                        <span className="text-fuchsia-400/70 mt-0.5">▹</span>
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/55 border border-white/10 bg-white/[0.03] rounded-full px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
