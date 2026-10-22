"use client";

import Link from "next/link";
import { ClipboardCheck, ArrowRight, BookCheck } from "lucide-react";
import { evaluasiItems } from "@/data/learning";
import { ScrollReveal, StaggerReveal } from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EvaluasiPreviewSection() {
  return (
    <section id="evaluasi" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Uji Kesiapsiagaan Driver"
            title="Evaluasi Respon Cepat"
            highlight="Jalan Raya"
            description="Tinjau kesiapan pemahaman konsep, skenario tanggap darurat kecelakaan, dan proteksi keselamatan jalan melalui instrumen evaluasi mandiri."
            align="center"
          />
        </ScrollReveal>

        <StaggerReveal stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {evaluasiItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative flex flex-col rounded-3xl border border-ink/8 bg-cream/20 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/5 hover:border-ink/15"
            >
              {/* Top icon and tag */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-2xl bg-white border border-ink/10 flex items-center justify-center text-ink shadow-sm group-hover:scale-105 transition-transform">
                  <ClipboardCheck className="w-5 h-5 text-red" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-ink/5 text-ink-light">
                  Kasus 0{index + 1}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-red transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-ink-lighter leading-relaxed mb-6 flex-1">
                {item.description}
              </p>

              {/* Topics badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {item.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white border border-ink/5 text-ink-light font-medium"
                  >
                    #{topic}
                  </span>
                ))}
              </div>

              {/* Call to action inside card */}
              <Link
                href="/evaluasi"
                className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-ink text-white text-xs font-semibold group-hover:bg-red transition-colors"
              >
                <span>Lihat Rubrik & Skenario</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </StaggerReveal>

        {/* Informational reassurance notice */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="rounded-2xl border border-blue/20 bg-blue-light/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue/20 flex items-center justify-center shrink-0 text-blue">
                <BookCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-ink">Evaluasi Praktis Berbasis Refleksi Lapangan</h4>
                <p className="text-xs text-ink-lighter mt-0.5">
                  Instrumen dirancang untuk driver ojek online mengasah intuisi pertolongan pertama di jalan, tanpa tekanan ujian atau sistem nilai kaku.
                </p>
              </div>
            </div>
            <Link
              href="/evaluasi"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-blue text-white text-xs font-semibold hover:bg-blue-dark transition-colors shadow-sm"
            >
              Buka Halaman Evaluasi Driver
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
