"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function SceneWrapper() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEnabled(true);
    }
  }, []);

  return enabled ? <Scene /> : null;
}
