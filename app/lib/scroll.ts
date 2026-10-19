import type Lenis from "lenis";

// The page's smooth scroll (set by SmoothScroll), for links that glide to a section.
export const lenisRef: { current: Lenis | null } = { current: null };

/** Glides to a section ("#projects") just under the nav, or to the top (0). */
export function scrollToTarget(target: string | number) {
  const lenis = lenisRef.current;
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === "string" ? -72 : 0 });
  } else if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
}
