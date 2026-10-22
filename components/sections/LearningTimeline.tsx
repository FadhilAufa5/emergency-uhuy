"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { learningSteps } from "@/data/learning";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LearningTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!timelineRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const moveX = prefersReducedMotion ? 0 : 30;

      const items = timelineRef.current.querySelectorAll(".timeline-item");
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: i % 2 === 0 ? -moveX : moveX },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Animate the line
      const line = timelineRef.current.querySelector(".timeline-line");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: timelineRef }
  );

  return (
    <section id="alur-pembelajaran" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Alur Pembelajaran Driver"
            title="Alur Tanggap Darurat di Jalan Raya"
            highlight="Jalan Raya"
            description="Tahapan terstruktur bagi mitra pengemudi ojek online dari mengamankan TKP lalu lintas hingga serah terima korban ke ambulans 119."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-yellow-light/30 rounded-xl px-4 py-3 text-center mb-10 max-w-2xl mx-auto">
            <p className="text-xs text-ink-lighter leading-relaxed">
              📌 Alur berikut merupakan tahapan respon darurat lapangan yang disesuaikan dengan realitas keselamatan di jalan raya bagi driver ojol.
            </p>
          </div>
        </ScrollReveal>

        <div ref={timelineRef} className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="timeline-line absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-200 origin-top" />

          <div className="space-y-6">
            {learningSteps.map((step) => (
              <div
                key={step.number}
                className="timeline-item relative flex gap-4 sm:gap-6"
              >
                {/* Circle */}
                <div className={`relative z-10 shrink-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${step.bgColor} border-2 ${step.borderColor}`}>
                  <span className={`text-lg sm:text-xl font-extrabold ${step.color}`}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className={`flex-1 p-4 sm:p-5 rounded-xl border ${step.borderColor} ${step.bgColor} bg-opacity-30`}>
                  <h3 className="text-sm sm:text-base font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-ink-lighter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
