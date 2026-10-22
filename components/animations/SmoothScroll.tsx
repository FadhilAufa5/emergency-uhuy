"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize Lenis with autoRaf: true for guaranteed continuous smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.8,
      anchors: true,
      autoRaf: true,
    });

    lenisRef.current = lenis;

    // Connect Lenis scroll events directly with GSAP ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Also connect with GSAP ticker for precision synchronization
    const handleTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(handleTicker);
    gsap.ticker.lagSmoothing(0);

    // Expose on window for easy developer verification in console
    (window as any).lenis = lenis;
    (window as any).gsap = gsap;
    (window as any).ScrollTrigger = ScrollTrigger;

    console.log("🎨 [E-Art Gallery] GSAP & Lenis aktif & terintegrasi!", {
      gsapVersion: gsap.version,
      scrollTrigger: !!ScrollTrigger,
      lenis: true,
    });

    // Refresh ScrollTrigger after DOM & fonts settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    // Anchor smooth scroll fallback
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
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
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      clearTimeout(refreshTimer);
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(handleTicker);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as any).lenis;
    };
  }, []);

  return <>{children}</>;
}
