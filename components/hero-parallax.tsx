"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type HeroParallaxProps = {
  src: string;
  alt: string;
};

export function HeroParallax({ src, alt }: HeroParallaxProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateParallax = () => {
      frameRef.current = null;

      if (!wrapperRef.current) {
        return;
      }

      const heroHeight = window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
      const translateY = progress * -10;

      wrapperRef.current.style.transform = `translate3d(0, ${translateY}%, 0) scale(1.12)`;
    };

    const onScroll = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-[-8%_0] will-change-transform"
      style={{ transform: "translate3d(0, 0, 0) scale(1.12)" }}
    >
      <Image src={src} alt={alt} fill priority className="object-cover object-[76%_center]" />
    </div>
  );
}
