"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT_INFO } from "@/app/constants";
import { scrollToTarget } from "@/app/lib/scroll";
import { easeOut } from "./Reveal";

const LINKS = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

/** "rp." that opens into "roman princ." under the pointer. */
function Wordmark() {
  const part = "inline-block max-w-0 overflow-hidden align-bottom whitespace-pre transition-[max-width] duration-500 ease-[var(--ease-out-expo)] group-hover:max-w-[5ch] group-focus-visible:max-w-[5ch]";
  return (
    <button
      onClick={() => scrollToTarget(0)}
      aria-label="Roman Princ, back to the top"
      className="group text-[17px] font-semibold tracking-[-0.03em] text-ink"
    >
      r<span className={part}>oman </span>p<span className={part}>rinc</span>.
    </button>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => scrollToTarget(href), open ? 350 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled && !open ? "bg-black/70 backdrop-blur-xl backdrop-saturate-150 border-b border-line" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8" aria-label="Sections">
          <Wordmark />

          <div className="hidden md:flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
            {LINKS.slice(0, 3).map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                onMouseEnter={() => setHovered(link.href)}
                className="relative isolate px-4 py-2 text-sm text-muted transition-colors hover:text-ink"
              >
                {hovered === link.href && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                {link.name}
              </button>
            ))}
            <button
              onClick={() => go("#contact")}
              className="ml-3 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.04] active:scale-95"
            >
              Let&apos;s talk
            </button>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close the menu" : "Open the menu"}
            aria-expanded={open}
            className="md:hidden relative -mr-2 grid h-10 w-10 place-items-center"
          >
            <span className={`absolute h-[1.5px] w-5 bg-ink transition-transform duration-500 ease-[var(--ease-out-expo)] ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
            <span className={`absolute h-[1.5px] w-5 bg-ink transition-transform duration-500 ease-[var(--ease-out-expo)] ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
          </button>
        </nav>
      </motion.header>

      {/* a phone: the menu fills the screen, its links big */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-black px-5 pt-28 pb-10 md:hidden"
          >
            <ul className="space-y-2">
              {LINKS.map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <motion.button
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.6, ease: easeOut, delay: 0.05 + i * 0.05 }}
                    onClick={() => go(link.href)}
                    className="display block text-[3.25rem] leading-[1.1] text-ink active:text-muted"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
              className="space-y-1 text-muted"
            >
              <a href={`mailto:${CONTACT_INFO.email}`} className="block text-ink">{CONTACT_INFO.email}</a>
              <div className="flex gap-5">
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
