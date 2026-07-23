"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { lenisRef } from "@/app/lib/scrollBus";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Certs", href: "#certificates" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(href, { offset: -72 });
        return;
      }
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const scrollToTop = () => {
    const lenis = lenisRef.current;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-4 inset-x-0 z-50 px-4"
    >
      <div
        className={`max-w-3xl mx-auto rounded-2xl px-4 sm:px-6 transition-all duration-500 ${
          isScrolled || isOpen
            ? "bg-[#0b0618]/70 backdrop-blur-apple border border-white/10 shadow-lg shadow-purple-950/30"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <button
            onClick={scrollToTop}
            className="font-display font-bold text-lg tracking-tight text-white hover:text-gradient-neon transition-colors"
          >
            rp<span className="text-fuchsia-400">.</span>
          </button>

          <div className="hidden md:flex items-center gap-7">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[13px] font-medium uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("#contact")}
              className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-fuchsia-900/40"
            >
              Hire me
            </button>

            <button
              className="md:hidden p-2 text-white/80 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-3 space-y-1 border-t border-white/10">
                {[...navigation, { name: "Contact", href: "#contact" }].map(
                  (item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.2, delay: index * 0.06 }}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-3 py-2.5 text-sm uppercase tracking-[0.18em] text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {item.name}
                    </motion.button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
