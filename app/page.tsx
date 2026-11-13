"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  GraduationCap,
  Map,
  Target,
  BookOpen,
  Trophy,
  Cross,
  ArrowRight,
  Sparkles,
  ShieldAlert,
} from "lucide-react";
import SplashScreen from "@/components/ui/SplashScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import BatikBackground from "@/components/ui/BatikBackground";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const menuItems = [
  {
    id: "cp",
    label: "Capaian Pembelajaran",
    abbr: "CP",
    desc: "Kompetensi yang dicapai peserta didik",
    icon: GraduationCap,
    href: "/cp",
    accent: "#22c55e",
    gradient: "from-[#16a34a] to-[#15803d]",
    cardBg: "from-white via-[#f0fdf4] to-[#dcfce7]/60",
    cardPatternColor: "#16a34a",
    iconBg: "bg-green-100/90 text-green-700 border border-green-200/80 shadow-2xs",
    iconColor: "text-green-700",
    badge: "bg-green-500",
    border: "border-green-200/90 hover:border-green-500 hover:shadow-green-500/20",
    num: "01",
  },
  {
    id: "atp",
    label: "Alur Tujuan Pembelajaran",
    abbr: "ATP",
    desc: "Urutan materi secara logis & sistematis",
    icon: Map,
    href: "/atp",
    accent: "#8b5cf6",
    gradient: "from-[#7c3aed] to-[#6d28d9]",
    cardBg: "from-white via-[#f5f3ff] to-[#ede9fe]/60",
    cardPatternColor: "#7c3aed",
    iconBg: "bg-violet-100/90 text-violet-700 border border-violet-200/80 shadow-2xs",
    iconColor: "text-violet-700",
    badge: "bg-violet-500",
    border: "border-violet-200/90 hover:border-violet-500 hover:shadow-violet-500/20",
    num: "02",
  },
  {
    id: "tujuan",
    label: "Tujuan Pembelajaran",
    abbr: "Tujuan",
    desc: "Sasaran akhir setiap sesi belajar",
    icon: Target,
    href: "/tujuan",
    accent: "#f43f5e",
    gradient: "from-[#e11d48] to-[#be123c]",
    cardBg: "from-white via-[#fff1f2] to-[#ffe4e6]/60",
    cardPatternColor: "#e11d48",
    iconBg: "bg-rose-100/90 text-rose-700 border border-rose-200/80 shadow-2xs",
    iconColor: "text-rose-700",
    badge: "bg-rose-500",
    border: "border-rose-200/90 hover:border-rose-500 hover:shadow-rose-500/20",
    num: "03",
  },
  {
    id: "materi",
    label: "Modul Materi",
    abbr: "Materi",
    desc: "Perdarahan, Pingsan & Fraktur",
    icon: BookOpen,
    href: "/materi",
    accent: "#ef4444",
    gradient: "from-[#dc2626] to-[#b91c1c]",
    cardBg: "from-white via-[#fef2f2] to-[#fee2e2]/60",
    cardPatternColor: "#dc2626",
    iconBg: "bg-red-100/90 text-red-700 border border-red-200/80 shadow-2xs",
    iconColor: "text-red-700",
    badge: "bg-red-500",
    border: "border-red-200/90 hover:border-red-500 hover:shadow-red-500/20",
    num: "04",
  },
  {
    id: "evaluasi",
    label: "Evaluasi & Kuis",
    abbr: "Evaluasi",
    desc: "Uji pemahaman kamu di sini",
    icon: Trophy,
    href: "/evaluasi",
    accent: "#64748b",
    gradient: "from-[#475569] to-[#334155]",
    cardBg: "from-white via-[#f8fafc] to-[#f1f5f9]/70",
    cardPatternColor: "#475569",
    iconBg: "bg-slate-100/90 text-slate-700 border border-slate-200/80 shadow-2xs",
    iconColor: "text-slate-700",
    badge: "bg-slate-500",
    border: "border-slate-200/90 hover:border-slate-500 hover:shadow-slate-500/20",
    num: "05",
  },
];

function MenuPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!pageRef.current) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.05 });

      tl.fromTo(".mp-logo", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.8)" })
        .fromTo(".mp-heading", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 }, "-=0.2")
        .fromTo(
          ".mp-card",
          { opacity: 0, y: 24, scale: 0.93 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: { amount: 0.35 }, ease: "back.out(1.5)" },
          "-=0.2"
        )
        .fromTo(".mp-footer-note", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.1");

      // Subtle floating on decorative blobs
      gsap.to(".mp-blob-1", { y: -18, x: 8, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".mp-blob-2", { y: 14, x: -10, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".mp-blob-3", { y: -12, duration: 5.5, repeat: -1, yoyo: true, ease: "sine.inOut" });

      // Hover shimmer on logo icon
      gsap.to(".mp-logo-icon", { rotate: 5, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    },
    { scope: pageRef }
  );

  return (
    <div ref={pageRef} className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ── Background Halaman (Batik Nusantara Jelas & Cantik) ── */}
      <BatikBackground
        pattern="kain"
        opacity="opacity-20 sm:opacity-25"
        withOrnaments={true}
        withVignette={true}
      />

      {/* ── Lapisan Pendaran Cahaya & Ornamen Latar ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
        {/* Soft Ambient Radial Lights */}
        <div className="mp-blob-1 absolute -top-32 -left-20 w-[620px] h-[620px] rounded-full bg-red-light/35 blur-3xl" />
        <div className="mp-blob-2 absolute -bottom-32 -right-20 w-[550px] h-[550px] rounded-full bg-blue-light/30 blur-3xl" />
        <div className="mp-blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[360px] rounded-full bg-yellow-light/30 blur-3xl" />

        {/* Pola Grid Halus */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #20232C 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ornamen Motif Tradisional Watermark Tambahan */}
        <div className="absolute top-24 left-8 w-44 h-44 opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-amber-950">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M50 5 Q50 50 95 50 Q50 50 50 95 Q50 50 5 50 Q50 50 50 5" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-8 w-48 h-48 opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-amber-950">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M50 5 Q50 50 95 50 Q50 50 50 95 Q50 50 50 5" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* ── Konten Utama ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-16">

        {/* ── Header Section ── */}
        <div className="flex flex-col items-center text-center mb-9 sm:mb-11">

          {/* Logo / Icon dengan Efek Layering & Glow */}
          <div className="mp-logo mb-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red to-rose-700 shadow-xl shadow-red/35" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent" />
              <div className="absolute inset-[2px] rounded-xl bg-gradient-to-br from-red to-rose-700 flex items-center justify-center">
                <Cross className="mp-logo-icon w-7 h-7 sm:w-9 sm:h-9 text-white drop-shadow-md" />
              </div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-red/40 blur-xl -z-10 scale-125" />
            </div>
          </div>

          {/* Title */}
          <h1 className="mp-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-tight">
            E-Art Gallery{" "}
            <span className="relative inline-block">
              <span className="text-red">of Emergency</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-yellow to-red rounded-full" />
            </span>
          </h1>

          <p className="mp-heading mt-2.5 text-sm sm:text-base text-ink-light font-medium max-w-md">
            Ruang belajar kreatif pertolongan pertama bagi mitra pengemudi ojek online di jalan raya
          </p>

          {/* Divider Aksen */}
          <div className="mp-heading mt-4 flex items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-ink/20 rounded-full" />
            <span className="text-[11px] font-bold text-ink-lighter uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-yellow" />
              Pilih Menu Pembelajaran
              <Sparkles className="w-3 h-3 text-yellow" />
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-ink/20 rounded-full" />
          </div>
        </div>

        {/* ── Grid 5 Kartu Menu dengan Layout & Alignment Presisi Rapi ── */}
        <div className="w-full max-w-5xl flex flex-wrap justify-center gap-3.5 sm:gap-4 items-stretch">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`mp-card group relative flex flex-col justify-between rounded-2xl border-2 ${item.border}
                  shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red/50
                  overflow-hidden w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] lg:w-[calc(20%-0.85rem)]
                  min-w-[155px] max-w-[260px] lg:max-w-none`}
              >
                {/* ── Background Khusus Card: Gradasi Warna + Tekstur Batik Halus ── */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.cardBg} transition-colors duration-300`} />

                {/* Tekstur Kain Batik di dalam Card */}
                <div
                  className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.11] mix-blend-multiply transition-opacity duration-300 pointer-events-none"
                  style={{
                    backgroundImage: `url('/Kain-Batik.jpg')`,
                    backgroundSize: "220px auto",
                  }}
                />

                {/* Ornamen Motif Air / Kawung di Sudut Kanan Bawah Card */}
                <div
                  className="absolute -bottom-3 -right-3 w-20 h-20 opacity-[0.08] group-hover:opacity-[0.18] transition-opacity duration-300 pointer-events-none"
                  style={{ color: item.cardPatternColor }}
                >
                  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <ellipse cx="50" cy="28" rx="10" ry="18" fill="currentColor" />
                    <ellipse cx="50" cy="72" rx="10" ry="18" fill="currentColor" />
                    <ellipse cx="28" cy="50" rx="18" ry="10" fill="currentColor" />
                    <ellipse cx="72" cy="50" rx="18" ry="10" fill="currentColor" />
                  </svg>
                </div>

                {/* Top Colored Bar with Gradient */}
                <div className={`relative h-1.5 w-full bg-gradient-to-r ${item.gradient} shrink-0`} />

                {/* Card Content Container - Flex Col dengan Distribusi Presisi */}
                <div className="relative z-10 p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  {/* Bagian Atas: Icon + Nomor Modul */}
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className={`${item.iconBg} w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                        <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-ink/5 text-ink/40 group-hover:bg-ink/10 group-hover:text-ink/70 tracking-wider transition-colors">
                        {item.num}
                      </span>
                    </div>

                    {/* Singkatan & Label Modul */}
                    <div className="mb-2">
                      <p className="text-xl sm:text-2xl font-black text-ink tracking-tight leading-none mb-1 group-hover:text-red transition-colors">
                        {item.abbr}
                      </p>
                      <p className="text-xs font-bold text-ink/75 leading-tight truncate">
                        {item.label}
                      </p>
                    </div>

                    {/* Deskripsi Singkat dengan Ketinggian Seragam */}
                    <p className="text-[11px] sm:text-xs text-ink-light leading-relaxed line-clamp-2 min-h-[2rem] sm:min-h-[2.25rem]">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bagian Bawah: Divider & CTA Action Rapi Terkunci di Bawah */}
                  <div className={`mt-4 pt-3 border-t border-ink/8 flex items-center justify-between text-[11px] sm:text-xs font-bold ${item.iconColor}`}>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      Buka Panduan
                    </span>
                    <div className="w-6 h-6 rounded-lg bg-ink/5 group-hover:bg-ink/10 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Shimmer / Hover Overlay Ring */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 pointer-events-none`} />
              </Link>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="mp-footer-note mt-9 text-xs text-ink-lighter font-medium text-center">
          Klik kartu untuk membuka materi • Dirancang khusus untuk Mitra Pengemudi Ojek Online
        </p>
      </main>
    </div>
  );
}

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onStart={() => setSplashDone(true)} />}
      <SmoothScroll>
        <div
          className="relative bg-cream selection:bg-red selection:text-white"
          style={{
            opacity: splashDone ? 1 : 0,
            transition: "opacity 0.6s ease",
            pointerEvents: splashDone ? "auto" : "none",
          }}
        >
          <Navbar />
          <MenuPage />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
