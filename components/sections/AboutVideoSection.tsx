"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Play,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const defaultYouTubeId = "ea1RJUOiNfQ";

  return (
    <section id="tentang-inisiatif" className="py-20 sm:py-28 bg-white/85 backdrop-blur-md relative overflow-hidden border-b border-ink/5">
      {/* Background radial soft aura */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-red-light/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-light/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Tentang Inisiatif & Profil Pengembang"
            title="Seni Visual untuk Pahlawan Kemanusiaan"
            highlight="Jalanan"
            description="Mengenal latar belakang, visi pembuatan, dan video pengantar media edukasi tanggap darurat bagi mitra pengemudi ojek online."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ── Left Column: Interactive Video Showcase ── */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.1}>
              <div className="relative rounded-3xl border border-ink/10 bg-ink text-white p-3 sm:p-4 shadow-xl overflow-hidden group">
                {/* Simulated macOS / Media Player Window Header */}
                <div className="flex items-center px-3 py-2 border-b border-white/10 mb-3 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green/80 inline-block" />
                  </div>
                </div>

                {/* Video Viewport Area */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                  {!isPlaying ? (
                    // Poster / Thumbnail Preview State
                    <div className="relative w-full h-full">
                      <img
                        src="/perdarahan.jpg"
                        alt="Thumbnail Video Edukasi Pertolongan Pertama Driver Ojol"
                        className="w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

                      {/* Play Button Overlay with Pulse */}
                      <button
                        type="button"
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-red text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer z-20 group/btn"
                        aria-label="Putar Video Pengantar"
                      >
                        <span className="absolute inset-0 rounded-full bg-red opacity-75 animate-ping -z-10" />
                        <Play className="w-8 h-8 fill-white translate-x-0.5 group-hover/btn:scale-105 transition-transform" />
                      </button>

                      {/* Video Title Card Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-red/90 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                          Tonton Video (3 Menit)
                        </span>
                        <h4 className="text-sm sm:text-base font-extrabold text-white leading-snug drop-shadow-sm">
                          Simulasi Tanggap Kedaruratan Medis: Panduan First Responder Driver
                        </h4>
                      </div>
                    </div>
                  ) : (
                    // Active Video Player State
                    <div className="relative w-full h-full">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${defaultYouTubeId}?autoplay=1&rel=0&modestbranding=1`}
                        title="Video Edukasi Pertolongan Pertama Jalan Raya"
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>

                {/* Close button when playing */}
                {isPlaying && (
                  <div className="flex justify-end pt-3 px-2">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(false)}
                      className="text-[11px] font-semibold text-red-light hover:text-white transition-colors cursor-pointer"
                    >
                      ✕ Tutup
                    </button>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right Column: About Me & Project Story ── */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal delay={0.2}>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
                Mengapa Website Ini Dibuat Khusus untuk Mitra Ojol?
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-ink-light leading-relaxed mt-4">
                <p>
                  Halo! Saya mengembangkan <strong>E-Art Gallery of Emergency</strong> sebagai media pembelajaran interaktif berbasis seni editorial untuk tugas akhir / skripsi. Proyek ini dilatarbelakangi oleh realitas lapangan: saat kecelakaan atau insiden medis terjadi di jalan raya, <strong>rekan-rekan pengemudi ojek online adalah pihak yang paling cepat berada di TKP</strong>.
                </p>
                <p>
                  Sayangnya, materi medis konvensional sering kali dipenuhi istilah rumit atau foto luka terbuka yang menimbulkan trauma visual dan kepanikan. Melalui platform ini, materi disederhanakan dengan <strong>ilustrasi vektor anatomi yang ramah mata, langkah taktis 3 kondisi kritis (Perdarahan, Pingsan, Fraktur), serta sentuhan budaya gotong royong Nusantara</strong>.
                </p>
              </div>

              {/* 3 Pillar Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="p-3.5 rounded-2xl bg-cream/70 border border-ink/8">
                  <div className="w-8 h-8 rounded-xl bg-red/10 text-red flex items-center justify-center mb-2">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-ink">Empati Lapangan</h4>
                  <p className="text-[11px] text-ink-lighter mt-0.5 leading-snug">
                    Dirancang sesuai ritme driver saat rehat di pangkalan.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-cream/70 border border-ink/8">
                  <div className="w-8 h-8 rounded-xl bg-blue/10 text-blue flex items-center justify-center mb-2">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-ink">Visual Non-Trauma</h4>
                  <p className="text-[11px] text-ink-lighter mt-0.5 leading-snug">
                    Ilustrasi anatomi teratur tanpa gambar menakutkan.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-cream/70 border border-ink/8">
                  <div className="w-8 h-8 rounded-xl bg-green/10 text-green-dark flex items-center justify-center mb-2">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-ink">Standar Medis</h4>
                  <p className="text-[11px] text-ink-lighter mt-0.5 leading-snug">
                    Rujukan panduan BHD & First Aid Kemenkes RI.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
