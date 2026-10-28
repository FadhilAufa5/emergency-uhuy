"use client";

import { useEffect, useRef } from "react";

interface BloodVesselIllustrationProps {
  type: "arteri" | "vena" | "kapiler";
  className?: string;
}

/** Animated SVG cross-section illustrations for each blood vessel type */
export default function BloodVesselIllustration({
  type,
  className = "",
}: BloodVesselIllustrationProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Trigger re-animation whenever type changes
    if (!svgRef.current) return;
    const anims = svgRef.current.querySelectorAll("animate, animateMotion, animateTransform");
    anims.forEach((a) => {
      try {
        (a as SVGAnimationElement).beginElement();
      } catch {
        // no-op in environments that don't support beginElement
      }
    });
  }, [type]);

  if (type === "arteri") return <ArteriIllustration svgRef={svgRef} className={className} />;
  if (type === "vena") return <VenaIllustration svgRef={svgRef} className={className} />;
  return <KapilerIllustration svgRef={svgRef} className={className} />;
}

/* ─────────────────────────────────────────────────────────────
   ARTERI  —  thick-walled, bright red, pulsing jets
───────────────────────────────────────────────────────────── */
function ArteriIllustration({
  svgRef,
  className,
}: {
  svgRef: React.RefObject<SVGSVGElement | null>;
  className: string;
}) {
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      aria-label="Ilustrasi Pembuluh Arteri"
    >
      <defs>
        {/* Bright red gradient for oxygenated blood */}
        <linearGradient id="artGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#C0392B" />
        </linearGradient>
        <linearGradient id="artWallGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFC5C5" />
          <stop offset="50%" stopColor="#FFEDED" />
          <stop offset="100%" stopColor="#FFC5C5" />
        </linearGradient>
        <radialGradient id="artGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF4444" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FF4444" stopOpacity="0" />
        </radialGradient>
        {/* Clipping path for blood channel */}
        <clipPath id="artClip">
          <rect x="60" y="78" width="200" height="64" rx="32" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="320" height="220" rx="16" fill="#FFF5F5" />

      {/* Label */}
      <text x="160" y="22" textAnchor="middle" fontSize="13" fontWeight="800" fill="#C0392B" fontFamily="system-ui">
        ARTERI — Pembuluh Nadi
      </text>

      {/* ── Vessel Wall (thick, muscular) ── */}
      {/* Outer wall */}
      <rect x="44" y="64" width="232" height="92" rx="46" fill="#FFCDD2" stroke="#E57373" strokeWidth="2" />
      {/* Middle muscle layer */}
      <rect x="54" y="72" width="212" height="76" rx="38" fill="#FFABAB" stroke="#EF5350" strokeWidth="1.5" />
      {/* Inner endothelium */}
      <rect x="60" y="78" width="200" height="64" rx="32" fill="url(#artWallGrad)" stroke="#E53935" strokeWidth="1" />

      {/* ── Blood Lumen ── */}
      <rect x="66" y="84" width="188" height="52" rx="26" fill="url(#artGrad)" />

      {/* Pulsing glow on lumen */}
      <rect x="66" y="84" width="188" height="52" rx="26" fill="url(#artGlow)">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="0.8s" repeatCount="indefinite" />
      </rect>

      {/* ── Flowing blood cells (bright red circles) ── */}
      {[
        { cx: 80, delay: "0s" },
        { cx: 120, delay: "0.15s" },
        { cx: 160, delay: "0.3s" },
        { cx: 200, delay: "0.45s" },
        { cx: 240, delay: "0.6s" },
      ].map(({ cx, delay }, i) => (
        <circle key={i} cy="110" r="9" fill="#FF1744" opacity="0.85">
          <animate
            attributeName="cx"
            values={`${cx - 50};${cx + 50};${cx - 50}`}
            dur="1.6s"
            begin={delay}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;0.85;0.85;0"
            dur="1.6s"
            begin={delay}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* ── Gushing jet above vessel (injury indication) ── */}
      <g>
        {/* Jet arc 1 */}
        <path d="M160 78 Q150 40 130 20" stroke="#E53935" strokeWidth="3" strokeLinecap="round" fill="none">
          <animate attributeName="stroke-dasharray" values="0,80;80,0;0,80" dur="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite" />
        </path>
        {/* Jet arc 2 */}
        <path d="M160 78 Q170 35 192 18" stroke="#C62828" strokeWidth="2.5" strokeLinecap="round" fill="none">
          <animate attributeName="stroke-dasharray" values="0,80;80,0;0,80" dur="0.8s" begin="0.1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.8s" begin="0.1s" repeatCount="indefinite" />
        </path>
        {/* Droplets */}
        <circle cx="130" cy="20" r="4" fill="#E53935">
          <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" />
          <animate attributeName="cy" values="78;20;20" dur="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="192" cy="18" r="3" fill="#C62828">
          <animate attributeName="opacity" values="0;1;0" dur="0.8s" begin="0.1s" repeatCount="indefinite" />
          <animate attributeName="cy" values="78;18;18" dur="0.8s" begin="0.1s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ── Pulse-wave chevrons ── */}
      {[-30, 10, 50].map((offset, i) => (
        <g key={i} opacity="0">
          <path
            d={`M${100 + offset} 110 L${115 + offset} 95 L${130 + offset} 110`}
            stroke="#FF6B6B"
            strokeWidth="2"
            fill="none"
          />
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="0.8s"
            begin={`${i * 0.27}s`}
            repeatCount="indefinite"
            xlinkHref={`#pulse-${i}`}
          />
        </g>
      ))}

      {/* ── Layer labels ── */}
      <line x1="44" y1="60" x2="44" y2="56" stroke="#BDBDBD" strokeWidth="1" />
      <text x="36" y="54" fontSize="8" fill="#9E9E9E" textAnchor="middle">Tunika Adventisia</text>
      <line x1="55" y1="68" x2="30" y2="52" stroke="#BDBDBD" strokeWidth="0.8" strokeDasharray="2,2" />

      {/* Danger badge */}
      <rect x="88" y="188" width="144" height="22" rx="11" fill="#FFEBEE" stroke="#EF9A9A" strokeWidth="1" />
      <text x="160" y="203" textAnchor="middle" fontSize="10" fontWeight="700" fill="#C62828" fontFamily="system-ui">
        ⚡ KRITIS — Menyembur Seirama Jantung
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   VENA  —  thinner wall, dark red, steady flow
───────────────────────────────────────────────────────────── */
function VenaIllustration({
  svgRef,
  className,
}: {
  svgRef: React.RefObject<SVGSVGElement | null>;
  className: string;
}) {
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      aria-label="Ilustrasi Pembuluh Vena"
    >
      <defs>
        <linearGradient id="venaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B71C1C" />
          <stop offset="100%" stopColor="#7B0000" />
        </linearGradient>
        <linearGradient id="venaWallGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EF9A9A" />
          <stop offset="50%" stopColor="#FFCDD2" />
          <stop offset="100%" stopColor="#EF9A9A" />
        </linearGradient>
        <clipPath id="venaClip">
          <rect x="72" y="86" width="176" height="48" rx="24" />
        </clipPath>
      </defs>

      <rect width="320" height="220" rx="16" fill="#FFF8F8" />

      <text x="160" y="22" textAnchor="middle" fontSize="13" fontWeight="800" fill="#B71C1C" fontFamily="system-ui">
        VENA — Pembuluh Balik
      </text>

      {/* ── Vessel Wall (thin, collapsible) ── */}
      {/* Outer wall — thinner than artery */}
      <rect x="58" y="76" width="204" height="68" rx="34" fill="#FFCDD2" stroke="#E57373" strokeWidth="1.5" />
      {/* Thin muscle layer */}
      <rect x="64" y="82" width="192" height="56" rx="28" fill="#FFABAB" stroke="#EF5350" strokeWidth="1" />
      {/* Endothelium */}
      <rect x="70" y="86" width="180" height="48" rx="24" fill="url(#venaWallGrad)" stroke="#C62828" strokeWidth="1" />

      {/* ── Blood Lumen (dark, deoxygenated) ── */}
      <rect x="74" y="90" width="172" height="40" rx="20" fill="url(#venaGrad)" />

      {/* ── Valve (bicuspid flap inside vein) ── */}
      <g>
        {/* Left cusp */}
        <path d="M148 90 Q160 110 148 130" stroke="#8B0000" strokeWidth="1.5" fill="#991B1B" fillOpacity="0.4" />
        {/* Right cusp */}
        <path d="M172 90 Q160 110 172 130" stroke="#8B0000" strokeWidth="1.5" fill="#991B1B" fillOpacity="0.4" />
        <text x="160" y="116" textAnchor="middle" fontSize="7" fill="#FFE0E0" fontWeight="600">KATUP</text>
      </g>

      {/* ── Steady flow blood cells (dark red, uniform movement) ── */}
      {[
        { start: 30, delay: "0s" },
        { start: 90, delay: "0.4s" },
        { start: 150, delay: "0.8s" },
        { start: 210, delay: "1.2s" },
      ].map(({ start, delay }, i) => (
        <circle key={i} cy="110" r="7" fill="#7B0000" opacity="0.8">
          <animate
            attributeName="cx"
            values={`${start};${start + 200};${start + 200}`}
            dur="2.4s"
            begin={delay}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;0.8;0.8;0"
            dur="2.4s"
            begin={delay}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* ── Steady bleed (wound drip, no pulsing) ── */}
      <g>
        {/* Continuous stream downward */}
        <path d="M160 130 Q158 160 156 190" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" fill="none">
          <animate attributeName="stroke-dasharray" values="0,60;60,0;0,60" dur="1.2s" repeatCount="indefinite" />
        </path>
        {/* Drip drops */}
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={155 + i * 3} r="3.5" fill="#8B0000">
            <animate
              attributeName="cy"
              values="130;190;190"
              dur="1.2s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1.2s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>

      {/* Thin wall label */}
      <line x1="58" y1="76" x2="40" y2="60" stroke="#BDBDBD" strokeWidth="0.8" strokeDasharray="2,2" />
      <text x="38" y="56" fontSize="7.5" fill="#9E9E9E" textAnchor="middle">Dinding Tipis</text>
      <text x="38" y="65" fontSize="7.5" fill="#9E9E9E" textAnchor="middle">(kolaps mudah)</text>

      <rect x="72" y="188" width="176" height="22" rx="11" fill="#FCE4EC" stroke="#F48FB1" strokeWidth="1" />
      <text x="160" y="203" textAnchor="middle" fontSize="10" fontWeight="700" fill="#B71C1C" fontFamily="system-ui">
        ⚠ BAHAYA TINGGI — Aliran Stabil Terus
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   KAPILER  —  microscopic, thin, slow ooze
───────────────────────────────────────────────────────────── */
function KapilerIllustration({
  svgRef,
  className,
}: {
  svgRef: React.RefObject<SVGSVGElement | null>;
  className: string;
}) {
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      aria-label="Ilustrasi Pembuluh Kapiler"
    >
      <defs>
        <linearGradient id="kapGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EF5350" />
          <stop offset="100%" stopColor="#C62828" />
        </linearGradient>
        <radialGradient id="capPoolGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFCDD2" />
          <stop offset="100%" stopColor="#EF9A9A" stopOpacity="0.6" />
        </radialGradient>
      </defs>

      <rect width="320" height="220" rx="16" fill="#FFFAF9" />

      <text x="160" y="22" textAnchor="middle" fontSize="13" fontWeight="800" fill="#C62828" fontFamily="system-ui">
        KAPILER — Pembuluh Halus
      </text>

      {/* ── Network of tiny capillary tubes ── */}
      {/* Main horizontal tube */}
      <rect x="60" y="100" width="200" height="20" rx="10" fill="#FFCDD2" stroke="#EF9A9A" strokeWidth="1" />
      <rect x="62" y="102" width="196" height="16" rx="8" fill="url(#kapGrad)" opacity="0.7" />

      {/* Branching tubes */}
      <rect x="100" y="70" width="12" height="35" rx="6" fill="#FFCDD2" stroke="#EF9A9A" strokeWidth="0.8" />
      <rect x="101.5" y="72" width="9" height="31" rx="4.5" fill="url(#kapGrad)" opacity="0.6" />

      <rect x="155" y="60" width="10" height="45" rx="5" fill="#FFCDD2" stroke="#EF9A9A" strokeWidth="0.8" />
      <rect x="156.5" y="62" width="7" height="41" rx="3.5" fill="url(#kapGrad)" opacity="0.6" />

      <rect x="210" y="68" width="11" height="37" rx="5.5" fill="#FFCDD2" stroke="#EF9A9A" strokeWidth="0.8" />
      <rect x="211.5" y="70" width="8" height="33" rx="4" fill="url(#kapGrad)" opacity="0.6" />

      {/* Lower branches */}
      <rect x="115" y="115" width="10" height="30" rx="5" fill="#FFCDD2" stroke="#EF9A9A" strokeWidth="0.8" />
      <rect x="116.5" y="117" width="7" height="26" rx="3.5" fill="url(#kapGrad)" opacity="0.6" />

      <rect x="185" y="115" width="10" height="28" rx="5" fill="#FFCDD2" stroke="#EF9A9A" strokeWidth="0.8" />
      <rect x="186.5" y="117" width="7" height="24" rx="3.5" fill="url(#kapGrad)" opacity="0.6" />

      {/* Micro-cell in tube */}
      {[80, 130, 175, 220].map((cx, i) => (
        <ellipse key={i} cy="110" rx="5" ry="6" fill="#E53935" opacity="0.75">
          <animate
            attributeName="cx"
            values={`${cx - 30};${cx + 30};${cx - 30}`}
            dur={`${3 + i * 0.5}s`}
            begin={`${i * 0.6}s`}
            repeatCount="indefinite"
          />
        </ellipse>
      ))}

      {/* ── Skin surface seeping ── */}
      {/* Skin layer */}
      <rect x="40" y="52" width="240" height="18" rx="4" fill="#FFDAB9" opacity="0.6" />
      <text x="160" y="64" textAnchor="middle" fontSize="7" fill="#A0522D" fontWeight="600">
        LAPISAN KULIT
      </text>

      {/* Oozing through skin pores (tiny slow drops) */}
      {[105, 160, 215].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} r="2.5" fill="#EF5350" opacity="0.6">
            <animate
              attributeName="cy"
              values="70;90;90"
              dur={`${2.5 + i * 0.5}s`}
              begin={`${i * 0.8}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.7;0"
              dur={`${2.5 + i * 0.5}s`}
              begin={`${i * 0.8}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* Pool of blood forming on skin */}
      <ellipse cx="160" cy="47" rx="30" ry="8" fill="url(#capPoolGrad)">
        <animate attributeName="rx" values="20;32;20" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
      </ellipse>
      <text x="160" y="51" textAnchor="middle" fontSize="7" fill="#C62828" fontWeight="600">
        rembesan
      </text>

      {/* Microscope indicator */}
      <circle cx="275" cy="38" r="16" fill="none" stroke="#BDBDBD" strokeWidth="1.5" strokeDasharray="3,2" />
      <text x="275" y="34" textAnchor="middle" fontSize="7" fill="#9E9E9E">🔬</text>
      <text x="275" y="44" textAnchor="middle" fontSize="6" fill="#9E9E9E">mikro</text>

      {/* One-cell-thick wall label */}
      <line x1="60" y1="105" x2="40" y2="90" stroke="#BDBDBD" strokeWidth="0.8" strokeDasharray="2,2" />
      <text x="24" y="87" fontSize="7" fill="#9E9E9E" textAnchor="middle">1 sel</text>
      <text x="24" y="96" fontSize="7" fill="#9E9E9E" textAnchor="middle">tebal</text>

      <rect x="68" y="188" width="184" height="22" rx="11" fill="#FFF8E1" stroke="#FFD54F" strokeWidth="1" />
      <text x="160" y="203" textAnchor="middle" fontSize="10" fontWeight="700" fill="#795548" fontFamily="system-ui">
        ✓ RINGAN — Merembes Perlahan
      </text>
    </svg>
  );
}

