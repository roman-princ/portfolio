"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { scrollBus, lenisRef } from "@/app/lib/scrollBus";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const updateProgress = () => {
      const limit = document.documentElement.scrollHeight - window.innerHeight;
      scrollBus.progress = limit > 0 ? window.scrollY / limit : 0;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let lenis: Lenis | null = null;
    let raf = 0;

    if (!prefersReduced) {
      lenis = new Lenis({ lerp: 0.09, touchMultiplier: 1.4 });
      lenisRef.current = lenis;
      lenis.on("scroll", (e: { velocity: number }) => {
        scrollBus.velocity = e.velocity;
      });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      cancelAnimationFrame(raf);
      lenis?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
