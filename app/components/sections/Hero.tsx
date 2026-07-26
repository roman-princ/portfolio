"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO, CONTACT_INFO } from "@/app/constants";
import { lenisRef } from "@/app/lib/scrollBus";

const ROLES = [
  "Full-Stack Engineer",
  "Mobile Developer",
  "Freelance Problem-Solver",
  "SWE Student @ CTU Prague",
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  const scrollTo = (href: string) => {
    const lenis = lenisRef.current;
    if (lenis) lenis.scrollTo(href, { offset: -72 });
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="pulse-dot inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="text-xs md:text-sm font-medium uppercase tracking-[0.28em] text-white/60">
            Available for freelance — {PERSONAL_INFO.location}
          </span>
        </motion.div>

        <h1 className="font-display font-extrabold leading-[0.9] tracking-tight mb-8">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.25 }}
            className="block text-[clamp(3.5rem,14vw,11rem)] text-gradient-soft"
          >
            ROMAN
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.4 }}
            className="block text-[clamp(3.5rem,14vw,11rem)] text-outline"
          >
            PRINC
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.6 }}
          className="max-w-2xl"
        >
          <div className="h-9 md:h-10 mb-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 36, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -36, opacity: 0 }}
                transition={{ duration: 0.45, ease: easeOut }}
                className="block font-display text-2xl md:text-3xl font-bold text-gradient-neon"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-10">
            {PERSONAL_INFO.yearsOfExperience}+ years turning ambitious ideas
            into shipped products — B2C platforms in production, an
            award-winning IoT app, and engines that crunch numbers fast.
            Currently sharpening the craft at CTU Prague.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-xl shadow-fuchsia-900/40 hover:shadow-fuchsia-800/50 hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white/80 border border-white/15 hover:border-white/40 hover:text-white transition-all hover:-translate-y-0.5"
            >
              See the work
              <ArrowDown className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1 sm:ml-2">
              {[
                { href: CONTACT_INFO.github, icon: Github, label: "GitHub" },
                {
                  href: CONTACT_INFO.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: `mailto:${CONTACT_INFO.email}`,
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href?.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
