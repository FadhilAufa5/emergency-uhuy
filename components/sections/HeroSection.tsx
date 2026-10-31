"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  Bike,
  Sparkles,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // ── Timeline Masuk: Halus, Bertenaga, & Lengkap ──
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-title-line",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
          "-=0.3"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.2"
        )
        .fromTo(
          ".hero-illustration",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" },
          "-=0.6"
        )
        .fromTo(
          ".hero-deco",
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "back.out(2)" },
          "-=0.4"
        );

      // ── Animasi Melayang Kontinu GSAP (Selalu Aktif & Halus) ──
      // 1. Ilustrasi Driver Ojol melayang halus
      gsap.to(".hero-art-bob", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Stiker Apung Kanan Atas ("Tanggap di Jalan Raya")
      gsap.to(".hero-float-1", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Stiker Apung Kiri Bawah ("Driver Penolong Pertama")
      gsap.to(".hero-float-2", {
        y: 10,
        x: -5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 4. Ornamen Geometris Latar Belakang
      gsap.to(".hero-float-3", {
        y: -8,
        x: 5,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-float-4", {
        y: 10,
        x: -4,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative flex items-center pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10 lg:pb-12 overflow-hidden"
    >
      {/* ── Latar Belakang Batik Nusantara (JELAS TERLIHAT & ESTETIS) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
        {/* Tekstur Kain Batik Asli (Opacity 20% sm:25% mix-blend-multiply) */}
        <div
          className="absolute inset-0 bg-repeat opacity-20 sm:opacity-25 mix-blend-multiply transition-opacity duration-300"
          style={{
            backgroundImage: `url('/Kain-Batik.jpg')`,
            backgroundSize: "440px auto",
          }}
        />

        {/* Gradasi Lembut untuk Melindungi Keterbacaan Teks */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/75 to-cream/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-transparent to-cream/75" />

        {/* Pendaran Cahaya Hangat Artistik */}
        <div className="absolute -top-24 -left-20 w-[600px] h-[500px] bg-red-light/25 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[500px] bg-yellow-light/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[450px] h-[300px] bg-blue-light/20 rounded-full blur-3xl" />

        {/* Ornamen Lembut di Latar Belakang dengan Animasi GSAP Masuk & Melayang */}
        <div className="hero-deco hero-float-3 absolute top-20 right-[12%] w-16 h-16 rounded-full bg-yellow/25 blur-xs" />
        <div className="hero-deco hero-float-4 absolute top-1/3 left-[5%] w-14 h-14 rounded-full bg-blue/20 blur-xs" />
        <div className="hero-deco hero-float-3 absolute bottom-1/4 right-[15%] w-12 h-12 rounded-full bg-green/25 blur-xs" />
        <div className="hero-deco hero-float-4 absolute bottom-16 left-[18%] w-14 h-14 rounded-full bg-lavender/25 blur-xs" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ── Kolom Kiri: Teks & Informasi ── */}
          <div className="lg:col-span-7 max-w-xl lg:max-w-2xl">
            {/* Eyebrow Badge */}
            <div className="hero-eyebrow">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-red/20 shadow-xs text-xs font-semibold text-red">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red" />
                </span>
                <Bike className="w-3.5 h-3.5" />
                <span>Garda Tanggap Darurat • Mitra Ojek Online</span>
              </span>
            </div>

            {/* Headline Utama */}
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold text-ink leading-[1.12] tracking-tight">
              <span className="hero-title-line block">
                Kenali Kondisi Darurat di Jalan,
              </span>
              <span className="hero-title-line block mt-1 text-ink">
                Pelajari{" "}
                <span className="relative inline-block">
                  <span
                    className="font-handwritten text-red text-5xl sm:text-6xl lg:text-7xl inline-block"
                    style={{ transform: "rotate(-2deg)" }}
                  >
                    Cara Menolong.
                  </span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-2 bg-yellow/45 rounded-full -z-10"
                    style={{ transform: "rotate(-0.5deg)" }}
                  />
                </span>
              </span>
            </h1>

            {/* Subtitle Naratif */}
            <p className="hero-description mt-3.5 text-base sm:text-lg text-ink-light leading-relaxed max-w-lg font-medium">
              Ruang belajar kreatif bagi mitra pengemudi ojek online untuk memahami pertolongan pertama di jalan raya—mulai dari luka perdarahan kecelakaan, korban pingsan (sinkop), hingga penanganan fraktur patah tulang.
            </p>

            {/* Tombol CTA */}
            <div className="flex flex-wrap items-center gap-3.5 mt-6">
              <Link
                href="#materi"
                className="hero-cta group inline-flex items-center gap-2.5 px-7 py-3 text-sm font-bold text-white bg-red rounded-full hover:bg-red-dark transition-all duration-200 hover:shadow-lg hover:shadow-red/25 active:scale-[0.97]"
              >
                <span>Mulai Belajar Modul</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/lkpd"
                className="hero-cta inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-ink bg-white/95 backdrop-blur-sm rounded-full border border-ink/10 hover:border-ink/20 hover:bg-white transition-all duration-200 shadow-xs active:scale-[0.97]"
              >
                <BookOpen className="w-4 h-4 text-ink-lighter" />
                <span>Kasus Lapangan (LKPD)</span>
              </Link>
            </div>
          </div>

          {/* ── Kolom Kanan: Panggung Ilustrasi Driver (Bersih Tanpa Lingkaran Batik) ── */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] lg:max-w-[460px]">

              {/* Pendaran Cahaya Lembut */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-light/40 via-red-light/20 to-blue-light/30 blur-3xl -z-10 rounded-3xl pointer-events-none" />

              {/* Wrapper Masuk Ilustrasi (GSAP Entrance: .hero-illustration) */}
              <div className="hero-illustration relative z-10">
                {/* Wrapper Gerak Melayang (GSAP Continuous Floating: .hero-art-bob) */}
                <div className="hero-art-bob py-2 px-1">
                  <Image
                    src="/ojol.svg"
                    alt="Ilustrasi Mitra Ojek Online Tanggap Darurat"
                    width={581}
                    height={436}
                    priority
                    className="w-full h-auto object-contain select-none drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Stiker Apung 1: Kanan Atas */}
              <div className="hero-deco hero-float-1 absolute -top-1.5 right-1 sm:right-4 z-20">
                <div>
                  <div
                    className="sticker bg-yellow-light text-ink border-yellow/40 text-xs shadow-md"
                    style={{ transform: "rotate(3deg)" }}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-yellow" />
                    <span>Tanggap di Jalan Raya</span>
                  </div>
                </div>
              </div>

              {/* Stiker Apung 2: Kiri Bawah */}
              <div className="hero-deco hero-float-2 absolute -bottom-1.5 left-1 sm:left-3 z-20">
                <div>
                  <div
                    className="sticker bg-lavender-light text-ink border-lavender/40 text-xs shadow-md"
                    style={{ transform: "rotate(-3deg)" }}
                  >
                    <span>♡ Driver Penolong Pertama</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
