"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 30,
  duration = 0.8,
  once = true,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const targetY = prefersReducedMotion ? 0 : y;
      const targetDuration = prefersReducedMotion ? 0.3 : duration;

      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: targetY },
        {
          opacity: 1,
          y: 0,
          duration: targetDuration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 92%",
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  childSelector?: string;
  stagger?: number;
  y?: number;
  duration?: number;
}

export function StaggerReveal({
  children,
  className = "",
  childSelector = ":scope > *",
  stagger = 0.1,
  y = 25,
  duration = 0.7,
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const targetY = prefersReducedMotion ? 0 : y;
      const targetDuration = prefersReducedMotion ? 0.3 : duration;

      let elements: Element[] = [];
      try {
        if (!childSelector || childSelector === "> *" || childSelector === ":scope > *") {
          elements = Array.from(containerRef.current.children);
        } else {
          const selector = childSelector.startsWith(">") ? `:scope ${childSelector}` : childSelector;
          elements = Array.from(containerRef.current.querySelectorAll(selector));
        }
      } catch {
        elements = Array.from(containerRef.current.children);
      }

      if (elements.length === 0) return;

      gsap.fromTo(
        elements,
        { opacity: 0, y: targetY },
        {
          opacity: 1,
          y: 0,
          duration: targetDuration,
          stagger: prefersReducedMotion ? 0.05 : stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
