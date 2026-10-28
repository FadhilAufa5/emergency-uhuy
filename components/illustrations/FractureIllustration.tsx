"use client";

import { useEffect, useRef } from "react";

interface FractureIllustrationProps {
  type: "tertutup" | "terbuka";
  className?: string;
}

/** Animated SVG cross-section illustration for closed vs open fracture */
export default function FractureIllustration({
  type,
  className = "",
}: FractureIllustrationProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const anims = svgRef.current.querySelectorAll("animate, animateMotion, animateTransform");
    anims.forEach((a) => {
      try {
        (a as SVGAnimationElement).beginElement();
      } catch {
        // no-op
      }
    });
  }, [type]);

  if (type === "tertutup") {
    return <FrakturTertutup svgRef={svgRef} className={className} />;
  }
  return <FrakturTerbuka svgRef={svgRef} className={className} />;
}

/* ─────────────────────────────────────────────────────────────
   FRAKTUR TERTUTUP — skin intact, internal break, bruise/swelling
───────────────────────────────────────────────────────────── */
function FrakturTertutup({
  svgRef,
  className,
}: {
  svgRef: React.RefObject<SVGSVGElement | null>;
  className: string;
}) {
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      aria-label="Ilustrasi Fraktur Tertutup"
    >
      <defs>
        {/* Skin gradient */}
        <linearGradient id="skinGradC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDDCB5" />
          <stop offset="100%" stopColor="#F5B97E" />
        </linearGradient>
        {/* Bone gradient */}
        <linearGradient id="boneGradC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F0E8" />
          <stop offset="100%" stopColor="#E0D8C8" />
        </linearGradient>
        {/* Bruise/hematoma radial */}
        <radialGradient id="hemGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#4C1D95" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4C1D95" stopOpacity="0" />
        </radialGradient>
        {/* Swelling gradient */}
        <radialGradient id="swellGrad" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FCA5A5" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FDDCB5" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="320" height="240" rx="16" fill="#F0F9FF" />

      {/* Title */}
      <text x="160" y="22" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#1D4ED8" fontFamily="system-ui">
        FRAKTUR TERTUTUP — Kulit Utuh
      </text>

      {/* ── Limb silhouette (forearm cross-section, long view) ── */}
      {/* Outer skin */}
      <rect x="60" y="50" width="200" height="140" rx="70" fill="url(#skinGradC)" stroke="#F5B97E" strokeWidth="2" />

      {/* ── Swelling bump on top (pulsing) ── */}
      <ellipse cx="160" cy="52" rx="55" ry="18" fill="url(#swellGrad)">
        <animate attributeName="ry" values="12;20;12" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </ellipse>

      {/* Skin outline (stays intact — no break) */}
      <rect x="60" y="50" width="200" height="140" rx="70" fill="none" stroke="#E8A060" strokeWidth="2.5" />

      {/* ── Muscle layer ── */}
      <rect x="76" y="64" width="168" height="112" rx="56" fill="#F9A8A8" opacity="0.55" />

      {/* ── Bone shaft (tibia/radius shape) ── */}
      {/* Bone cortex */}
      <rect x="118" y="72" width="84" height="96" rx="18" fill="url(#boneGradC)" stroke="#C8BCA0" strokeWidth="2" />
      {/* Medullary canal */}
      <rect x="130" y="86" width="60" height="68" rx="12" fill="#EDE8DC" stroke="#C8BCA0" strokeWidth="1" />

      {/* ── FRACTURE LINE (zigzag crack — internal, not piercing skin) ── */}
      <polyline
        points="148,76 155,100 145,115 158,130 148,155 162,168"
        stroke="#B45309"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
      </polyline>
      {/* Secondary smaller crack */}
      <polyline
        points="162,80 168,100 158,118"
        stroke="#92400E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      >
        <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      </polyline>

      {/* ── Hematoma (internal bruise, pulsing purple under intact skin) ── */}
      <ellipse cx="153" cy="120" rx="38" ry="28" fill="url(#hemGrad)">
        <animate attributeName="rx" values="30;42;30" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
      </ellipse>

      {/* Surface bruise tinting (visible on skin) */}
      <ellipse cx="153" cy="90" rx="32" ry="16" fill="#7C3AED" opacity="0.12">
        <animate attributeName="opacity" values="0.08;0.18;0.08" dur="2s" repeatCount="indefinite" />
      </ellipse>

      {/* ── Skin intact indicator ── */}
      {/* Green checkmark badge on skin surface */}
      <circle cx="258" cy="85" r="14" fill="#D1FAE5" stroke="#34D399" strokeWidth="1.5" />
      <text x="258" y="90" textAnchor="middle" fontSize="13" fill="#059669">✓</text>
      <text x="258" y="104" textAnchor="middle" fontSize="7" fill="#059669" fontWeight="700">UTUH</text>

      {/* ── Deformity indicator arrow ── */}
      <g>
        <path d="M238 120 C252 112 260 118 255 128" stroke="#DC2626" strokeWidth="1.5" fill="none" strokeDasharray="3,2">
          <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="1s" repeatCount="indefinite" />
        </path>
        <text x="263" y="132" fontSize="7" fill="#DC2626" fontWeight="700" textAnchor="start">Deformitas</text>
      </g>

      {/* ── Labels ── */}
      {/* Fracture line label */}
      <line x1="152" y1="100" x2="80" y2="80" stroke="#B45309" strokeWidth="0.8" strokeDasharray="2,2" />
      <text x="72" y="76" fontSize="7.5" fill="#92400E" textAnchor="middle" fontWeight="600">Garis</text>
      <text x="72" y="86" fontSize="7.5" fill="#92400E" textAnchor="middle" fontWeight="600">Fraktur</text>

      {/* Hematoma label */}
      <line x1="153" y1="140" x2="85" y2="155" stroke="#7C3AED" strokeWidth="0.8" strokeDasharray="2,2" />
      <text x="60" y="151" fontSize="7.5" fill="#6D28D9" textAnchor="middle" fontWeight="600">Hematoma</text>
      <text x="60" y="161" fontSize="7.5" fill="#6D28D9" textAnchor="middle" fontWeight="600">Internal</text>

      {/* ── Bottom badge ── */}
      <rect x="64" y="204" width="192" height="22" rx="11" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1" />
      <text x="160" y="219" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1D4ED8" fontFamily="system-ui">
        🩹 Kulit Utuh — Bidai + Kompres Dingin
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   FRAKTUR TERBUKA — bone piercing skin, bleeding, high-risk
───────────────────────────────────────────────────────────── */
function FrakturTerbuka({
  svgRef,
  className,
}: {
  svgRef: React.RefObject<SVGSVGElement | null>;
  className: string;
}) {
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      aria-label="Ilustrasi Fraktur Terbuka"
    >
      <defs>
        <linearGradient id="skinGradO" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDDCB5" />
          <stop offset="100%" stopColor="#F5B97E" />
        </linearGradient>
        <linearGradient id="boneGradO" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F0E8" />
          <stop offset="100%" stopColor="#E0D8C8" />
        </linearGradient>
        <linearGradient id="bloodPoolGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <radialGradient id="woundGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7F1D1D" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#991B1B" stopOpacity="0.4" />
        </radialGradient>
        {/* Clip path for skin shape */}
        <clipPath id="limbClipO">
          <rect x="60" y="50" width="200" height="140" rx="70" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="320" height="240" rx="16" fill="#FFF5F5" />

      {/* Title */}
      <text x="160" y="22" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#DC2626" fontFamily="system-ui">
        FRAKTUR TERBUKA — Tulang Menembus
      </text>

      {/* ── Limb silhouette ── */}
      {/* Base skin — LEFT half (intact) */}
      <path d="M60 120 Q60 50 130 50 L130 190 Q60 190 60 120Z" fill="url(#skinGradO)" stroke="#E8A060" strokeWidth="2" />
      {/* Base skin — RIGHT half (intact) */}
      <path d="M190 50 Q260 50 260 120 Q260 190 190 190 L190 50Z" fill="url(#skinGradO)" stroke="#E8A060" strokeWidth="2" />

      {/* ── Wound / torn skin in center ── */}
      <path
        d="M130 58 Q140 40 155 52 Q165 40 175 55 Q190 42 190 58 L190 190 Q175 200 165 188 Q155 200 145 188 Q135 200 130 190 Z"
        fill="#FFF5F5"
        stroke="#E8A060"
        strokeWidth="1.5"
      />
      {/* Wound opening — torn skin edge */}
      <path
        d="M133 72 Q140 62 150 70 Q157 58 165 68 Q172 58 182 68 L185 175 Q178 185 168 176 Q160 186 152 176 Q144 186 136 175 Z"
        fill="url(#woundGrad)"
        opacity="0.85"
      />

      {/* ── Muscle exposed inside wound ── */}
      <path
        d="M136 78 Q143 68 152 76 Q160 66 168 74 Q176 66 182 74 L180 170 Q174 178 164 170 Q158 180 152 170 Q146 178 140 170 Z"
        fill="#F87171"
        opacity="0.6"
      />

      {/* ── Bone pieces ── */}
      {/* Left bone fragment */}
      <rect x="122" y="80" width="38" height="68" rx="12" fill="url(#boneGradO)" stroke="#C8BCA0" strokeWidth="1.5" />
      <rect x="128" y="92" width="26" height="50" rx="8" fill="#EDE8DC" stroke="#C8BCA0" strokeWidth="1" />

      {/* Right bone fragment */}
      <rect x="162" y="88" width="36" height="64" rx="12" fill="url(#boneGradO)" stroke="#C8BCA0" strokeWidth="1.5" />
      <rect x="168" y="100" width="24" height="46" rx="8" fill="#EDE8DC" stroke="#C8BCA0" strokeWidth="1" />

      {/* ── Bone spike piercing UP through skin ── */}
      <polygon
        points="150,78 158,30 166,78"
        fill="#F0EBE0"
        stroke="#C8BCA0"
        strokeWidth="1.5"
      />
      {/* Sharp tip highlight */}
      <line x1="158" y1="30" x2="155" y2="45" stroke="#E0D8C8" strokeWidth="1" />
      {/* Danger pulse on tip */}
      <circle cx="158" cy="30" r="5" fill="#FEF9C3" stroke="#FBBF24" strokeWidth="1">
        <animate attributeName="r" values="4;7;4" dur="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite" />
      </circle>

      {/* ── FRACTURE LINE between the two bone pieces ── */}
      <polyline
        points="158,84 150,105 163,118 152,138 158,155"
        stroke="#92400E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />

      {/* ── Bleeding — blood pooling at wound base ── */}
      <ellipse cx="158" cy="175" rx="28" ry="9" fill="url(#bloodPoolGrad)" opacity="0.8">
        <animate attributeName="rx" values="22;32;22" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
      </ellipse>

      {/* Dripping blood from wound */}
      {[148, 158, 168].map((cx, i) => (
        <circle key={i} cx={cx} r="3.5" fill="#DC2626">
          <animate
            attributeName="cy"
            values="168;195;195"
            dur={`${1.2 + i * 0.3}s`}
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur={`${1.2 + i * 0.3}s`}
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* ── Skin tear indicator — danger X badge ── */}
      <circle cx="62" cy="82" r="14" fill="#FEE2E2" stroke="#FCA5A5" strokeWidth="1.5" />
      <text x="62" y="87" textAnchor="middle" fontSize="13" fill="#DC2626">✗</text>
      <text x="62" y="101" textAnchor="middle" fontSize="7" fill="#DC2626" fontWeight="700">ROBEK</text>

      {/* ── Labels ── */}
      {/* Bone piercing label */}
      <line x1="158" y1="30" x2="200" y2="22" stroke="#B45309" strokeWidth="0.8" strokeDasharray="2,2" />
      <text x="216" y="19" fontSize="7.5" fill="#92400E" textAnchor="start" fontWeight="600">Ujung tulang</text>
      <text x="216" y="29" fontSize="7.5" fill="#92400E" textAnchor="start" fontWeight="600">menembus kulit</text>

      {/* Blood pool label */}
      <line x1="185" y1="175" x2="226" y2="168" stroke="#991B1B" strokeWidth="0.8" strokeDasharray="2,2" />
      <text x="228" y="165" fontSize="7.5" fill="#991B1B" textAnchor="start" fontWeight="600">Perdarahan</text>
      <text x="228" y="175" fontSize="7.5" fill="#991B1B" textAnchor="start" fontWeight="600">Aktif</text>

      {/* ── WARNING: Do NOT straighten label ── */}
      <rect x="36" y="196" width="248" height="30" rx="8" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
      <text x="160" y="210" textAnchor="middle" fontSize="9" fontWeight="700" fill="#DC2626" fontFamily="system-ui">
        ⛔ DILARANG KERAS: Jangan Luruskan / Dorong Tulang!
      </text>
      <text x="160" y="222" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#7F1D1D" fontFamily="system-ui">
        Tutup kassa steril, tekan di SEKITAR luka, hubungi 119
      </text>
    </svg>
  );
}

