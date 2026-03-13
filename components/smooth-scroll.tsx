"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.08,
      smoothWheel: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
