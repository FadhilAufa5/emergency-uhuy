"use client";

import Link from "next/link";
import { ArrowRight, AlertCircle, ShieldAlert, HeartPulse, Bike } from "lucide-react";
import { materials } from "@/data/materials";
import { MedicalIllustration } from "@/components/illustrations/MedicalIllustration";
import { ScrollReveal, StaggerReveal } from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function MaterialSection() {
  const iconMap: Record<string, typeof AlertCircle> = {
    perdarahan: AlertCircle,
    pingsan: ShieldAlert,
    fraktur: HeartPulse,
  };

  return (
    <section id="materi" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background subtle accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-light/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-light/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Modul Pelatihan Driver"
            title="3 Pilar Kedaruratan"
            highlight="Jalan Raya"
            description="Panduan tindakan cepat dan terukur bagi mitra pengemudi ojek online menghadapi insiden kritis di jalanan, pangkalan, atau ruang publik."
            align="center"
          />
        </ScrollReveal>

        <StaggerReveal stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {materials.map((item) => {
            const Icon = iconMap[item.slug] || AlertCircle;
            const illuType =
              item.slug === "perdarahan"
                ? "bleeding"
                : item.slug === "pingsan"
                ? "pingsan"
                : "fraktur";

            return (
              <div
                key={item.slug}
                className="group relative flex flex-col rounded-3xl border border-ink/8 bg-cream/30 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-ink/5 hover:border-ink/15 overflow-hidden"
              >
                {/* Visual badge top */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${item.categoryColor}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-ink-lighter">
                    {item.langkah.steps.length} Langkah Kunci
                  </span>
                </div>

                {/* Illustration Preview */}
                <div
                  className={`w-full h-44 rounded-2xl ${item.bgColor} p-3 flex items-center justify-center mb-6 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]`}
                >
                  <MedicalIllustration
                    type={illuType}
                    className="w-full h-full max-h-36 drop-shadow-sm"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-lighter leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                {/* Quick key actions pills */}
                <div className="mb-6 space-y-1.5">
                  <div className="text-xs font-semibold text-ink-light uppercase tracking-wider mb-2">
                    Langkah Kunci Driver:
                  </div>
                  {item.langkah.steps.slice(0, 3).map((step) => (
                    <div
                      key={step.number}
                      className="flex items-center gap-2 text-xs text-ink/80 bg-white/80 py-1.5 px-2.5 rounded-lg border border-ink/5"
                    >
                      <span className="w-4 h-4 rounded-full bg-ink/10 text-ink text-[10px] font-bold flex items-center justify-center shrink-0">
                        {step.number}
                      </span>
                      <span className="truncate">{step.title}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom link button */}
                <Link
                  href={`/materi/${item.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-ink text-white text-sm font-semibold transition-all group-hover:bg-red shadow-sm group-hover:shadow-md"
                >
                  Pelajari Selengkapnya
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </StaggerReveal>

        {/* Bottom banner notice */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="rounded-2xl border border-yellow/40 bg-yellow-light/40 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow/30 flex items-center justify-center shrink-0 text-ink">
                <Bike className="w-5 h-5 text-ink" />
              </div>
              <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                <strong>Protokol Driver Siaga:</strong> Selalu utamakan keselamatan diri (parkir motor di bahu jalan yang aman, matikan kontak mesin, dan amankan arus lalu lintas) sebelum menolong, lalu segera hubungi <strong>119</strong>.
              </p>
            </div>
            <Link
              href="/materi"
              className="shrink-0 px-4 py-2 rounded-xl bg-white border border-ink/10 text-xs font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
            >
              Lihat Katalog Lengkap
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
