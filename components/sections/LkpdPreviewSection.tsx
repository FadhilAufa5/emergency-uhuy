"use client";

import Link from "next/link";
import { FileText, ArrowRight, CheckCircle2, Eye } from "lucide-react";
import { lkpdItems } from "@/data/learning";
import { ScrollReveal, StaggerReveal } from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function LkpdPreviewSection() {
  return (
    <section id="lkpd" className="py-20 sm:py-28 bg-cream/50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Panduan Kasus Lapangan Driver"
            title="Lembar Studi Kasus"
            highlight="Insiden Jalan"
            description="Latih kesiapan mental dan tindakan terarah melalui studi kasus insiden aspal: luka kecelakaan, kejang penumpang, dan kolaps di pangkalan."
            align="center"
          />
        </ScrollReveal>

        <StaggerReveal stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {lkpdItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative flex flex-col rounded-3xl border border-ink/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/5 hover:border-ink/15"
            >
              {/* Document header badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-lavender-light text-ink border border-lavender/30">
                  <FileText className="w-3.5 h-3.5 text-ink-light" />
                  {item.format}
                </span>
                <span className="text-xs font-mono font-bold text-ink-lighter">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Topic */}
              <div className="mb-4">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold mb-2 border ${item.topicColor}`}
                >
                  {item.topic}
                </span>
                <h3 className="text-xl font-bold text-ink group-hover:text-blue transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-ink-lighter leading-relaxed mb-6 flex-1">
                {item.description}
              </p>

              {/* Simulated worksheet features list */}
              <div className="space-y-2 mb-6 pt-4 border-t border-ink/5">
                <div className="flex items-center gap-2 text-xs text-ink/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-mint-green text-green-dark" />
                  <span>Skenario nyata di jalan raya & pangkalan</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-mint-green text-green-dark" />
                  <span>Panduan aman diri & amankan lalu lintas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-mint-green text-green-dark" />
                  <span>Format siap baca di smartphone driver</span>
                </div>
              </div>

              {/* Card action */}
              <Link
                href="/lkpd"
                className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-gray-50 border border-ink/10 text-xs font-semibold text-ink group-hover:bg-ink group-hover:text-white transition-all"
              >
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  Buka Kasus Driver
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </StaggerReveal>

        {/* Explore all LKPD button */}
        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <Link
            href="/lkpd"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue text-white font-semibold text-sm hover:bg-blue-dark transition-all hover:shadow-lg hover:shadow-blue/20 active:scale-95"
          >
            Akses Seluruh Modul Kasus Driver (LKPD)
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
