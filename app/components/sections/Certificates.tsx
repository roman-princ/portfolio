"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Trophy } from "lucide-react";
import { CERTIFICATES } from "@/app/constants";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-400/80 mb-4"
        >
          04 — Credentials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-16"
        >
          Proof,
          <span className="text-gradient-neon"> stamped.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATES.map((cert, index) => {
            const isAward = cert.issuer === "SOČ";
            const Wrapper = cert.link ? "a" : "div";
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  ease: easeOut,
                  delay: (index % 3) * 0.08,
                }}
                className={isAward ? "sm:col-span-2 lg:col-span-3" : ""}
              >
                <Wrapper
                  {...(cert.link
                    ? {
                        href: cert.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className={`group neon-card rounded-2xl p-6 flex flex-col h-full ${
                    isAward
                      ? "md:flex-row md:items-center gap-5 border-amber-300/20"
                      : ""
                  }`}
                >
                  <div
                    className={`shrink-0 rounded-xl p-3 w-fit ${
                      isAward
                        ? "bg-amber-400/10 text-amber-300"
                        : "bg-violet-400/10 text-violet-300"
                    }`}
                  >
                    {isAward ? (
                      <Trophy className="h-6 w-6" />
                    ) : (
                      <Award className="h-6 w-6" />
                    )}
                  </div>

                  <div className="flex-1 mt-4 md:mt-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className={`font-display font-bold text-white leading-snug mb-2 ${
                          isAward ? "text-xl md:text-2xl" : "text-base"
                        }`}
                      >
                        {cert.name}
                      </h3>
                      {cert.link && (
                        <ExternalLink className="h-4 w-4 text-white/30 group-hover:text-fuchsia-400 transition-colors shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-3">
                      {cert.issuer} — {cert.issueDate}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/45 border border-white/10 rounded-full px-2.5 py-0.5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
