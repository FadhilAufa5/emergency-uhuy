"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, BookOpen, ShieldAlert, Bike, Sparkles } from "lucide-react";
import Image from "next/image";
import RawLogoLoop from "@/components/LogoLoop";

const LogoLoop = RawLogoLoop as React.ComponentType<any>;

const BATIK_LOGOS = [
  {
    src: "/batik2.jpg",
    alt: "Batik Flora Nusantara",
  },
  {
    src: "/Kain-Batik.jpg",
    alt: "Kain Batik Gurdo",
  },
  {
    src: "/batik 3.webp",
    alt: "Batik Megamendung",
  },
  {
    src: "/batik2.jpg",
    alt: "Batik Flora Nusantara",
  },
  {
    src: "/Kain-Batik.jpg",
    alt: "Kain Batik Gurdo",
  },
  {
    src: "/batik 3.webp",
    alt: "Batik Megamendung",
  },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const speed = prefersReducedMotion ? 0.3 : 1;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

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

      // Floating animations for decorations
      gsap.to(".hero-float-1", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-float-2", {
        y: 10,
        x: -5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-float-3", {
        y: -8,
        x: 5,
        duration: 3.5,
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
      className="relative min-h-[90vh] flex flex-col justify-between pt-20 pb-4 overflow-hidden"
    >
      {/* Background decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-deco hero-float-1 absolute top-24 right-[10%] w-20 h-20 rounded-full bg-yellow opacity-20" />
        <div className="hero-deco hero-float-2 absolute top-1/3 left-[5%] w-16 h-16 rounded-full bg-blue opacity-15" />
        <div className="hero-deco hero-float-3 absolute bottom-1/4 right-[15%] w-14 h-14 rounded-full bg-green opacity-20" />
        <div className="hero-deco absolute bottom-20 left-[15%] w-24 h-24 blob-shape bg-lavender opacity-10" />
        <div className="hero-deco absolute top-40 right-[30%] w-10 h-10 rounded-full bg-red opacity-10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            <div className="hero-eyebrow">
              <span className="sticker bg-red-light text-red border-red/20 mb-6 flex items-center gap-1.5">
                <Bike className="w-3.5 h-3.5" />
                Garda Tanggap Darurat • Mitra Ojek Online
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.1] tracking-tight mt-6">
              <span className="hero-title-line block">
                Kenali Kondisi Darurat di Jalan,
              </span>
              <span className="hero-title-line block mt-2">
                Pelajari{" "}
                <span
                  className="font-handwritten text-red inline-block"
                  style={{ transform: "rotate(-2deg)" }}
                >
                  Cara Menolong.
                </span>
              </span>
            </h1>

            <p className="hero-description mt-6 text-base sm:text-lg text-ink-lighter leading-relaxed max-w-md">
              Ruang belajar kreatif bagi mitra pengemudi ojek online untuk memahami pertolongan pertama di jalan raya—mulai dari luka perdarahan kecelakaan, korban pingsan (sinkop), hingga penanganan fraktur patah tulang.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="#materi"
                className="hero-cta inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-red rounded-full hover:bg-red-dark transition-all hover:shadow-lg hover:shadow-red/20 active:scale-95"
              >
                Mulai Belajar Modul Jalan
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lkpd"
                className="hero-cta inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-ink bg-white rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95"
              >
                Kasus Lapangan (LKPD)
              </Link>
            </div>

            {/* Stats */}

          </div>

          {/* Right: Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="hero-illustration relative">
              <Image
                src="/ojol.svg"
                alt="Ilustrasi Mitra Ojek Online Tanggap Darurat"
                width={581}
                height={436}
                priority
                className="w-full max-w-md lg:max-w-lg mx-auto h-auto object-contain drop-shadow-sm select-none"
              />
            </div>

            {/* Floating stickers around illustration */}
            <div className="hero-deco hero-float-1 absolute top-4 right-4 sm:right-8">
              <div className="sticker bg-yellow-light text-ink border-yellow/30 text-xs shadow-sm" style={{ transform: "rotate(3deg)" }}>
                ✦ Tanggap di Jalan Raya
              </div>
            </div>
            <div className="hero-deco hero-float-2 absolute bottom-8 left-0 sm:left-4">
              <div className="sticker bg-lavender-light text-ink border-lavender/30 text-xs shadow-sm" style={{ transform: "rotate(-3deg)" }}>
                ♡ Driver Penolong
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LogoLoop Batik di bawah hero */}
      <div className="w-full overflow-hidden">
        <LogoLoop
          logos={BATIK_LOGOS}
          speed={40}
          hoverSpeed={10}
          pauseOnHover={true}
          gap={0}
          logoHeight={54}
          fadeOut={true}
          fadeOutWidth={0.12}
          draggable={true}
          intro={false}
          ariaLabel="Logo Motif Batik Nusantara"
        />
      </div>
    </section>
  );
}
