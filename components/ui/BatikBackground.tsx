import React from "react";

interface BatikBackgroundProps {
  /**
   * Tailwind opacity class (default: "opacity-15 sm:opacity-20")
   */
  opacity?: string;
  /**
   * Motif batik pilihan: 'kain' (Kain Gurdo), 'flora' (Batik Flora), 'megamendung' (Megamendung)
   */
  pattern?: "kain" | "flora" | "megamendung";
  /**
   * Menampilkan ornamen ilustrasi batik sudut & watermark artistik
   */
  withOrnaments?: boolean;
  /**
   * Apakah menyertakan gradasi vignette lembut dan peredam kontras teks
   */
  withVignette?: boolean;
  className?: string;
}

export default function BatikBackground({
  opacity = "opacity-15 sm:opacity-20",
  pattern = "kain",
  withOrnaments = true,
  withVignette = true,
  className = "",
}: BatikBackgroundProps) {
  const patternUrl =
    pattern === "flora"
      ? "/batik2.jpg"
      : pattern === "megamendung"
      ? "/batik%203.webp"
      : "/Kain-Batik.jpg";

  const isFixed = className.includes("fixed");
  const posClass = isFixed ? "fixed" : "absolute";
  const hasCustomZ = className.includes("z-") || className.includes("-z-");
  const zClass = hasCustomZ ? "" : "-z-20";

  return (
    <div
      aria-hidden="true"
      className={`${posClass} inset-0 pointer-events-none ${zClass} overflow-hidden select-none ${className.replace("fixed", "").trim()}`}
    >
      {/* ── 1. Tekstur Kain Batik Nusantara Utama (Jelas, Halus, & Elegan) ── */}
      <div
        className={`absolute inset-0 bg-repeat mix-blend-multiply ${opacity} transition-opacity duration-500`}
        style={{
          backgroundImage: `url('${patternUrl}')`,
          backgroundSize: "460px auto",
        }}
      />

      {/* ── 2. Gradasi Pelindung Keterbacaan Teks (Readability Mask) ── */}
      {withVignette && (
        <>
          {/* Perlindungan Vertikal: Halus di atas dan bawah agar transisi antar section mulus */}
          <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-transparent to-cream/90 pointer-events-none" />

          {/* Perlindungan Tengah (Radial Scrim): Meredam kontras di area teks/konten agar teks sangat mudah dibaca */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,248,240,0.78)_0%,rgba(255,248,240,0.38)_55%,transparent_90%)] pointer-events-none" />
        </>
      )}

      {/* ── 3. Pendaran Hangat Artistik (Sogan Gold, Terracotta, & Warm Amber Aura) ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-400/12 via-yellow-400/6 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-gradient-to-tr from-red-400/10 via-amber-400/6 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[650px] h-[450px] bg-gradient-to-tl from-amber-500/12 via-yellow-400/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* ── 4. Ilustrasi Ornamen Watermark Batik Artistik (Kawung Tradisional) ── */}
      {withOrnaments && (
        <>
          {/* Ornamen Batik Pojok Kanan Atas */}
          <div className="absolute -top-12 -right-12 w-72 h-72 sm:w-88 sm:h-88 opacity-[0.08] mix-blend-multiply pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-950">
              <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="1.2" />
              <ellipse cx="100" cy="60" rx="22" ry="38" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
              <ellipse cx="100" cy="140" rx="22" ry="38" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
              <ellipse cx="60" cy="100" rx="38" ry="22" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
              <ellipse cx="140" cy="100" rx="38" ry="22" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
              <circle cx="100" cy="100" r="14" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="6" fill="currentColor" />
            </svg>
          </div>

          {/* Ornamen Batik Pojok Kiri Bawah */}
          <div className="absolute -bottom-16 -left-16 w-80 h-80 sm:w-96 sm:h-96 opacity-[0.07] mix-blend-multiply pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-950">
              <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
              <ellipse cx="100" cy="55" rx="20" ry="35" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="100" cy="145" rx="20" ry="35" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="55" cy="100" rx="35" ry="20" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="145" cy="100" rx="35" ry="20" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="12" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}
