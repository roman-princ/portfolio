import type Lenis from "lenis";

// Mutable, render-free channel between the DOM scroll (Lenis) and the R3F scene.
// Read inside useFrame — never triggers React re-renders.
export const scrollBus = {
  progress: 0, // 0..1 across the whole page
  velocity: 0,
  mouseX: 0, // -1..1
  mouseY: 0, // -1..1
};

export const lenisRef: { current: Lenis | null } = { current: null };
