"use client";

import { motion } from "framer-motion";
import { easeOut } from "./Reveal";

/** Words, their letters rising in one after another, each one hopping when the pointer touches it. A line breaks only
 *  between words. */
export function Letters({ text, delay = 0 }: { text: string; delay?: number }) {
  let n = 0; // the letter's place in the whole text, for its delay
  return (
    // the padding above (taken back by the margin) is room for a letter's hop inside the mask it rises through
    <span className="-mt-[0.2em] block overflow-hidden pb-[0.06em] pt-[0.2em]" aria-label={text}>
      {text.split(" ").map((word, w) => (
        <span key={w} aria-hidden="true">
          {w > 0 && " "}
          <span className="inline-block whitespace-nowrap">
            {[...word].map((ch, i) => {
              const at = n++;
              return (
                <motion.span
                  key={i}
                  className="inline-block will-change-transform"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: easeOut, delay: delay + at * 0.045 }}
                  whileHover={{ y: "-0.14em", rotate: at % 2 ? 7 : -7, transition: { type: "spring", stiffness: 500, damping: 12 } }}
                  whileTap={{ scale: 0.92 }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        </span>
      ))}
    </span>
  );
}
