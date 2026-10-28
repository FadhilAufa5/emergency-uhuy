"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugins once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize Lenis — autoRaf: FALSE so we drive the loop ourselves via
    // GSAP's ticker (single RAF loop, no double-scheduling jank)
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.8,
      anchors: true,
      autoRaf: false, // ← driven by GSAP ticker below
    });

    lenisRef.current = lenis;

    // Single RAF loop: GSAP ticker drives Lenis + keeps ScrollTrigger in sync
    const handleTicker = (time: number) => {
      lenis.raf(time * 1000);
      ScrollTrigger.update();
    };
    gsap.ticker.add(handleTicker);
    gsap.ticker.lagSmoothing(0); // prevent large jumps after tab switch

    // Refresh ScrollTrigger once fonts & layout settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    // Anchor smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        try {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl as HTMLElement, { offset: -70 });
          }
        } catch {
          // ignore invalid hash selector
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      clearTimeout(refreshTimer);
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(handleTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
