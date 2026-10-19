"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;

/** Rises into place the first time it scrolls into view. */
export function Reveal({
  delay = 0,
  y = 28,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: easeOut, delay }}
      {...props}
    />
  );
}

/** A section's opening: its number and name in small type, then its heading, big. */
export function SectionHead({
  index,
  label,
  children,
  aside,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal className="flex items-center gap-3 text-sm text-muted mb-5">
        <span className="font-mono text-dim">{index}</span>
        <span className="h-px w-8 bg-line-strong" />
        <span>{label}</span>
      </Reveal>
      <div className="flex items-end justify-between gap-6">
        <Reveal delay={0.05}>
          <h2 className="display text-[clamp(2.75rem,7vw,5.5rem)]">{children}</h2>
        </Reveal>
        {aside && (
          <Reveal delay={0.1} className="hidden md:block shrink-0 pb-2 text-muted">
            {aside}
          </Reveal>
        )}
      </div>
    </div>
  );
}
