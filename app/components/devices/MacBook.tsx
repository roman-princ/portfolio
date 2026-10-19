"use client";

import { motion } from "framer-motion";
import { easeOut } from "../common/Reveal";

/** A MacBook drawn in the page, everything sized to its width (cqw): a black bezel with the notch, a 16:10 screen, and
 *  the silver base with its thumb notch. The lid opens the first time it scrolls into view. */
export function MacBook({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`@container [perspective:2600px] ${className}`}>
      <motion.div
        initial={{ rotateX: -78, opacity: 0.4 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.6, ease: easeOut }}
        style={{ transformOrigin: "50% 100%" }}
        className="relative mx-auto w-[84%] rounded-t-[2.4cqw] bg-[#0a0a0b] p-[1.25cqw] pb-[1.7cqw] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-[0.5cqw] bg-black">{children}</div>
        <span aria-hidden="true" className="absolute left-1/2 top-[1.25cqw] h-[1.5cqw] w-[10cqw] -translate-x-1/2 rounded-b-[0.6cqw] bg-[#0a0a0b]" />
      </motion.div>
      <div aria-hidden="true" className="relative h-[1.9cqw] w-full rounded-b-[1.8cqw] rounded-t-[0.3cqw] bg-gradient-to-b from-[#ececee] via-[#b9b9bd] to-[#6e6e73]">
        <span className="absolute left-1/2 top-0 h-[0.65cqw] w-[13cqw] -translate-x-1/2 rounded-b-[0.9cqw] bg-gradient-to-b from-[#8c8c91] to-[#b4b4b8]" />
      </div>
      {/* its reflection on the dark floor */}
      <div aria-hidden="true" className="mx-auto mt-[0.6cqw] h-[3cqw] w-[92%] rounded-[50%] bg-white/[0.06] blur-[2cqw]" />
    </div>
  );
}
