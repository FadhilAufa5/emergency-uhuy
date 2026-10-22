"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Heart, Shield, PhoneCall, Bike } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function CallToAction() {
  return (
    <section className="py-20 sm:py-28 bg-ink text-white relative overflow-hidden">
      {/* Colorful background radial orbs */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 rounded-full bg-red/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 rounded-full bg-blue/20 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-yellow/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-yellow-light mb-6">
            <Bike className="w-3.5 h-3.5 text-yellow" />
            <span>Driver Ojol: Pahlawan Kemanusiaan di Jalan Raya</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Belajar Hari Ini,{" "}
            <span className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-red block sm:inline-block rotate-[-1deg]">
              Siap Menolong
            </span>{" "}
            di Jalan Raya.
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed mb-10">
            Setiap detik sangat menentukan saat insiden terjadi di jalan raya. Sebagai mitra pengemudi yang paling dekat dengan denyut aspal kota, bekali diri Anda dengan respons pertolongan pertama yang terstruktur, tenang, dan siap menyelamatkan nyawa rekan maupun penumpang.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/materi/perdarahan"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red text-white text-base font-semibold transition-all hover:bg-red-dark hover:shadow-xl hover:shadow-red/30 active:scale-95"
            >
              Mulai Pelajari Modul Jalan
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/lkpd"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-base font-semibold transition-all active:scale-95"
            >
              Buka Lembar Kasus Driver (LKPD)
            </Link>
          </div>

          {/* 3 Trust pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-white/10 text-left">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-red/20 text-red flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Visual Art Ramah</div>
                <div className="text-[11px] text-gray-400">Belajar mudah tanpa gambar menakutkan</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-blue/20 text-blue flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Prinsip 3A Lalu Lintas</div>
                <div className="text-[11px] text-gray-400">Prioritaskan keselamatan diri di jalan</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-green/20 text-green-dark flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Koordinasi Ambulans 119</div>
                <div className="text-[11px] text-gray-400">Share lokasi akurat & evakuasi medis</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
