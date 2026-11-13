"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, HeartPulse, Bike, Sparkles, BookOpen } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

interface SplashScreenProps {
  onStart: () => void;
}

export default function SplashScreen({ onStart }: SplashScreenProps) {
  const splashRef = useRef<HTMLDivElement>(null);
  const [isExiting, setIsExiting] = useState(false);

  useGSAP(
    () => {
      if (!splashRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".sp-bg",
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }
      )
        .fromTo(
          ".sp-badge",
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          ".sp-title",
          { opacity: 0, y: 32, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.13 },
          "-=0.2"
        )
        .fromTo(
          ".sp-desc",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.25"
        )
        .fromTo(
          ".sp-btn",
          { opacity: 0, scale: 0.72 },
          { opacity: 1, scale: 1, duration: 0.55, ease: "back.out(2)" },
          "-=0.15"
        )
        .fromTo(
          ".sp-illus",
          { opacity: 0, x: 40, scale: 0.92 },
          { opacity: 1, x: 0, scale: 1, duration: 0.75, ease: "back.out(1.3)" },
          "-=0.65"
        )
        .fromTo(
          ".sp-sticker",
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.45, stagger: 0.09, ease: "back.out(2.5)" },
          "-=0.35"
        );

      // Floating: ilustrasi ojol
      gsap.to(".sp-illus-bob", {
        y: -12,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating: stiker kanan atas
      gsap.to(".sp-float-1", {
        y: -10,
        x: 4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating: stiker kiri bawah
      gsap.to(".sp-float-2", {
        y: 9,
        x: -4,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating: ornamen dot
      gsap.to(".sp-float-3", {
        y: -8,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Pulse tombol START
      gsap.to(".sp-btn-ring", {
        scale: 1.15,
        opacity: 0,
        duration: 1.4,
        repeat: -1,
        ease: "power1.out",
      });
    },
    { scope: splashRef }
  );

  const handleStart = () => {
    if (isExiting) return;
    setIsExiting(true);
    gsap.to(splashRef.current, {
      opacity: 0,
      scale: 1.02,
      duration: 0.45,
      ease: "power2.in",
      onComplete: onStart,
    });
  };

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 z-50 overflow-hidden flex items-center"
      style={{
        background: "linear-gradient(150deg, #FFF5F0 0%, #FFFBF0 45%, #F0F5FF 100%)",
      }}
    >
      {/* ── Background ── */}
      <div className="sp-bg absolute inset-0 pointer-events-none">
        {/* Tekstur batik */}
        <div
          className="absolute inset-0 opacity-[0.13] mix-blend-multiply"
          style={{
            backgroundImage: `url('/Kain-Batik.jpg')`,
            backgroundSize: "400px auto",
          }}
        />
        {/* Gradasi pelindung keterbacaan */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/60 to-cream/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-transparent to-cream/70" />
        {/* Glow blobs */}
        <div className="absolute -top-32 -left-20 w-[600px] h-[480px] bg-red-light/25 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[460px] bg-yellow-light/35 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[280px] bg-blue-light/20 rounded-full blur-3xl" />
        {/* Ornamen dot dekorasi */}
        <div className="sp-float-3 absolute top-[18%] left-[42%] w-10 h-10 rounded-full bg-yellow/30 blur-sm" />
        <div className="sp-float-3 absolute top-[55%] left-[38%] w-7 h-7 rounded-full bg-red/15 blur-sm" />
      </div>

      {/* ── Grid 2 Kolom: Kiri = Teks, Kanan = Ilustrasi ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-screen lg:min-h-0">

          {/* ══ Kolom Kiri: Badge + Judul + Deskripsi + Tombol ══ */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start justify-center pt-16 lg:pt-0 pb-12 lg:pb-0">

            {/* Badge Eyebrow */}
            <div className="sp-badge">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-red/20 shadow-sm text-xs font-bold text-red">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red" />
                </span>
                <Bike className="w-3.5 h-3.5" />
                Garda Tanggap Darurat • Mitra Ojek Online
              </span>
            </div>

            {/* Judul */}
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-6xl font-extrabold text-ink leading-[1.1] tracking-tight">
              <span className="sp-title block">Kenali Kondisi</span>
              <span className="sp-title block">Darurat di Jalan,</span>
              <span className="sp-title block mt-1">
                Pelajari{" "}
                <span
                  className="font-handwritten text-red text-5xl sm:text-6xl lg:text-7xl inline-block relative"
                  style={{ transform: "rotate(-2deg)" }}
                >
                  Cara Menolong.
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-2 bg-yellow/45 rounded-full -z-10"
                    style={{ transform: "rotate(-0.5deg)" }}
                  />
                </span>
              </span>
            </h1>

            {/* Deskripsi */}
            <p className="sp-desc mt-4 text-sm sm:text-base text-ink-light leading-relaxed max-w-md font-medium">
              Ruang belajar kreatif bagi mitra pengemudi ojek online untuk memahami
              pertolongan pertama di jalan raya—perdarahan, pingsan, &amp; fraktur.
            </p>

            {/* Tombol START */}
            <div className="sp-btn mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={handleStart} 
                className="group relative focus:outline-none"
                aria-label="Mulai Belajar"
              >
                {/* Ripple ring */}
                <span className="sp-btn-ring absolute inset-0 rounded-full bg-red/30 pointer-events-none" />
                {/* Tombol */}
                <span className="relative flex items-center gap-2.5 px-8 py-3.5 sm:px-10 sm:py-4 bg-red text-white font-extrabold text-lg sm:text-xl rounded-full shadow-xl shadow-red/30 hover:bg-red-dark hover:shadow-red/40 active:scale-[0.97] transition-all duration-200 select-none">
                  <span>Mulai</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              {/* <span className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-white/90 border border-ink/10 text-sm font-semibold text-ink-light shadow-xs select-none">
                <BookOpen className="w-4 h-4" />
                Gratis • Tanpa Daftar
              </span> */}
            </div>
          </div>

          {/* ══ Kolom Kanan: Panggung Ilustrasi Ojol ══ */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-end justify-center lg:justify-end h-full">

            {/* Area Panggung */}
            <div className="sp-illus relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[520px]">

              {/* Lingkaran cahaya lembut di belakang ilustrasi */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-light/50 via-red-light/20 to-blue-light/30 blur-3xl -z-10 rounded-full scale-90 pointer-events-none" />

              {/* Stiker Apung 1 — Kanan Atas */}
              <div className="sp-sticker sp-float-1 absolute -top-3 right-2 sm:right-6 z-20">
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-yellow-light border border-yellow/40 shadow-md text-xs font-semibold text-ink"
                  style={{ transform: "rotate(3deg)" }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-yellow" />
                  <span>Tanggap di Jalan Raya</span>
                </div>
              </div>

              {/* Stiker Apung 2 — Kiri Tengah-Bawah */}
              <div className="sp-sticker sp-float-2 absolute bottom-[22%] -left-4 sm:-left-6 z-20">
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/95 border border-red/20 shadow-md text-xs font-semibold text-red"
                  style={{ transform: "rotate(-3deg)" }}
                >
                  <HeartPulse className="w-3.5 h-3.5" />
                  <span>Siap Menolong</span>
                </div>
              </div>

              {/* Stiker Apung 3 — Kanan Bawah */}
              <div className="sp-sticker sp-float-1 absolute bottom-[8%] right-0 sm:right-4 z-20">
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-lavender-light border border-lavender/40 shadow-md text-xs font-semibold text-ink"
                  style={{ transform: "rotate(2deg)" }}
                >
                  <span>♡ Driver Penolong Pertama</span>
                </div>
              </div>

              {/* Ilustrasi Ojol — full visible, tidak terpotong */}
              <div className="sp-illus-bob px-4 pt-6 pb-0 lg:pt-10">
                <Image
                  src="/ojol.svg"
                  alt="Ilustrasi Mitra Ojek Online Tanggap Darurat"
                  width={580}
                  height={436}
                  priority
                  className="w-full h-auto object-contain drop-shadow-2xl select-none"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
