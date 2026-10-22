interface IllustrationProps {
  type: "bleeding" | "seizure" | "cpr" | "hero";
  className?: string;
}

export function MedicalIllustration({ type, className = "" }: IllustrationProps) {
  switch (type) {
    case "hero":
      return <HeroIllustration className={className} />;
    case "bleeding":
      return <BleedingIllustration className={className} />;
    case "seizure":
      return <SeizureIllustration className={className} />;
    case "cpr":
      return <CPRIllustration className={className} />;
    default:
      return null;
  }
}

function HeroIllustration({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background shapes */}
      <circle cx="250" cy="200" r="160" fill="#FFF8F0" />
      <ellipse cx="250" cy="200" rx="140" ry="135" fill="#FEE4E2" opacity="0.4" />

      {/* Person 1 - Helper */}
      <ellipse cx="200" cy="340" rx="60" ry="12" fill="#20232C" opacity="0.05" />
      {/* Body */}
      <rect x="175" y="200" width="50" height="80" rx="12" fill="#3978F6" />
      {/* Head */}
      <circle cx="200" cy="180" r="28" fill="#FBBF94" />
      {/* Hair */}
      <path d="M175 175 Q180 155 200 150 Q220 155 225 175 Q225 165 215 160 Q200 155 185 160 Q175 165 175 175Z" fill="#4A3728" />
      {/* Arms reaching */}
      <path d="M175 220 Q150 230 145 260 Q143 270 150 270" stroke="#FBBF94" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M225 220 Q250 230 260 250" stroke="#FBBF94" strokeWidth="12" strokeLinecap="round" fill="none" />
      {/* Legs */}
      <rect x="182" y="280" width="14" height="45" rx="7" fill="#20232C" />
      <rect x="204" y="280" width="14" height="45" rx="7" fill="#20232C" />
      {/* Shoes */}
      <ellipse cx="189" cy="328" rx="12" ry="6" fill="#F04438" />
      <ellipse cx="211" cy="328" rx="12" ry="6" fill="#F04438" />

      {/* Person 2 - Patient sitting */}
      <ellipse cx="310" cy="345" rx="50" ry="10" fill="#20232C" opacity="0.05" />
      {/* Body */}
      <rect x="285" y="230" width="50" height="65" rx="12" fill="#FFD166" />
      {/* Head */}
      <circle cx="310" cy="210" r="26" fill="#FBBF94" />
      {/* Hair */}
      <path d="M286 205 Q290 185 310 180 Q330 185 334 205 Q330 195 310 192 Q290 195 286 205Z" fill="#2D1810" />
      {/* Arm with bandage */}
      <path d="M285 250 Q265 265 260 280" stroke="#FBBF94" strokeWidth="11" strokeLinecap="round" fill="none" />
      <rect x="252" y="270" width="20" height="12" rx="4" fill="white" stroke="#F04438" strokeWidth="1.5" />
      {/* Legs */}
      <rect x="292" y="295" width="13" height="40" rx="6" fill="#20232C" />
      <rect x="312" y="295" width="13" height="40" rx="6" fill="#20232C" />
      <ellipse cx="298" cy="338" rx="11" ry="5" fill="#9FE3C2" />
      <ellipse cx="318" cy="338" rx="11" ry="5" fill="#9FE3C2" />

      {/* Medical cross */}
      <g transform="translate(140, 130)">
        <rect x="8" y="0" width="10" height="26" rx="3" fill="#F04438" />
        <rect x="0" y="8" width="26" height="10" rx="3" fill="#F04438" />
      </g>

      {/* Floating decorations */}
      <circle cx="380" cy="120" r="14" fill="#C7B5F5" opacity="0.6" />
      <circle cx="100" cy="140" r="8" fill="#FFD166" opacity="0.7" />
      <circle cx="420" cy="250" r="10" fill="#9FE3C2" opacity="0.6" />

      {/* Star sticker */}
      <g transform="translate(360, 160)">
        <polygon points="15,0 19,11 30,11 21,18 24,29 15,22 6,29 9,18 0,11 11,11" fill="#FFD166" />
      </g>

      {/* Heart */}
      <g transform="translate(110, 250)">
        <path d="M10 6 Q10 0 15 0 Q20 0 20 6 Q20 0 25 0 Q30 0 30 6 Q30 15 20 22 Q10 15 10 6Z" fill="#F04438" opacity="0.5" />
      </g>

      {/* Small plus signs */}
      <g transform="translate(400, 300)" opacity="0.3">
        <rect x="4" y="0" width="4" height="12" rx="2" fill="#3978F6" />
        <rect x="0" y="4" width="12" height="4" rx="2" fill="#3978F6" />
      </g>

      {/* Dotted arc decoration */}
      <path d="M130 300 Q180 280 230 300" stroke="#C7B5F5" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.5" />
    </svg>
  );
}

function BleedingIllustration({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="300" rx="20" fill="#FEE4E2" />

      {/* Background shapes */}
      <circle cx="320" cy="60" r="40" fill="#F04438" opacity="0.08" />
      <circle cx="80" cy="240" r="30" fill="#F04438" opacity="0.06" />

      {/* Person */}
      <ellipse cx="200" cy="265" rx="70" ry="12" fill="#20232C" opacity="0.04" />
      {/* Body */}
      <rect x="175" y="145" width="55" height="75" rx="14" fill="#3978F6" />
      {/* Head */}
      <circle cx="202" cy="122" r="30" fill="#FBBF94" />
      <path d="M175 115 Q180 95 202 90 Q224 95 229 115 Q225 105 202 100 Q180 105 175 115Z" fill="#4A3728" />
      {/* Smile */}
      <path d="M193 130 Q202 137 211 130" stroke="#20232C" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="192" cy="120" r="3" fill="#20232C" />
      <circle cx="212" cy="120" r="3" fill="#20232C" />

      {/* Arms */}
      <path d="M175 165 Q145 175 130 195 Q125 200 130 205" stroke="#FBBF94" strokeWidth="13" strokeLinecap="round" fill="none" />
      <path d="M230 165 Q260 175 270 195" stroke="#FBBF94" strokeWidth="13" strokeLinecap="round" fill="none" />

      {/* Bandage on arm */}
      <rect x="120" y="190" width="28" height="18" rx="5" fill="white" stroke="#F04438" strokeWidth="2" />
      <line x1="128" y1="192" x2="128" y2="206" stroke="#F04438" strokeWidth="1.5" />
      <line x1="140" y1="192" x2="140" y2="206" stroke="#F04438" strokeWidth="1.5" />

      {/* Legs */}
      <rect x="185" y="220" width="14" height="35" rx="7" fill="#20232C" />
      <rect x="207" y="220" width="14" height="35" rx="7" fill="#20232C" />

      {/* Medical cross */}
      <g transform="translate(290, 80)">
        <circle cx="18" cy="18" r="18" fill="white" />
        <rect x="12" y="6" width="12" height="24" rx="3" fill="#F04438" />
        <rect x="6" y="12" width="24" height="12" rx="3" fill="#F04438" />
      </g>

      {/* Bandage roll */}
      <g transform="translate(70, 70)">
        <ellipse cx="20" cy="20" rx="18" ry="18" fill="white" stroke="#D1D5DB" strokeWidth="1.5" />
        <ellipse cx="20" cy="20" rx="8" ry="8" fill="#F3F4F6" />
        <path d="M38 20 Q50 18 60 22" stroke="white" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Stars */}
      <polygon points="320,200 323,208 331,208 325,213 327,221 320,216 313,221 315,213 309,208 317,208" fill="#FFD166" opacity="0.6" />
      <polygon points="100,160 102,165 107,165 103,168 104,173 100,170 96,173 97,168 93,165 98,165" fill="#C7B5F5" opacity="0.5" />
    </svg>
  );
}

function SeizureIllustration({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="300" rx="20" fill="#D1E0FF" />

      {/* Background */}
      <circle cx="320" cy="250" r="50" fill="#3978F6" opacity="0.06" />
      <circle cx="60" cy="60" r="35" fill="#3978F6" opacity="0.08" />

      {/* Person lying down */}
      <ellipse cx="200" cy="240" rx="120" ry="10" fill="#20232C" opacity="0.04" />
      {/* Body */}
      <rect x="120" y="185" width="75" height="40" rx="12" fill="#FFD166" transform="rotate(-5, 155, 205)" />
      {/* Head */}
      <circle cx="110" cy="190" r="25" fill="#FBBF94" />
      <path d="M88 185 Q92 170 110 165 Q128 170 132 185" fill="#2D1810" />
      {/* Closed eyes - peaceful */}
      <path d="M100 188 Q105 192 110 188" stroke="#20232C" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M115 186 Q120 190 125 186" stroke="#20232C" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Pillow under head */}
      <ellipse cx="110" cy="205" rx="30" ry="10" fill="#C7B5F5" opacity="0.6" />

      {/* Legs */}
      <rect x="190" y="195" width="45" height="14" rx="7" fill="#20232C" transform="rotate(-3, 210, 200)" />
      <rect x="190" y="215" width="45" height="14" rx="7" fill="#20232C" transform="rotate(2, 210, 220)" />

      {/* Helper person kneeling */}
      <g transform="translate(250, 100)">
        {/* Body */}
        <rect x="15" y="55" width="45" height="60" rx="12" fill="#9FE3C2" />
        {/* Head */}
        <circle cx="38" cy="38" r="24" fill="#FBBF94" />
        <path d="M17 33 Q20 18 38 13 Q56 18 59 33 Q55 25 38 22 Q20 25 17 33Z" fill="#8B6914" />
        {/* Eyes */}
        <circle cx="30" cy="35" r="2.5" fill="#20232C" />
        <circle cx="46" cy="35" r="2.5" fill="#20232C" />
        {/* Smile */}
        <path d="M30 45 Q38 50 46 45" stroke="#20232C" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* Arms reaching toward patient */}
        <path d="M15 75 Q-10 90 -20 110" stroke="#FBBF94" strokeWidth="11" strokeLinecap="round" fill="none" />
        {/* Kneeling legs */}
        <rect x="22" y="115" width="12" height="30" rx="6" fill="#20232C" />
        <rect x="40" y="115" width="12" height="25" rx="6" fill="#20232C" />
      </g>

      {/* Shield/safety icon */}
      <g transform="translate(50, 100)">
        <path d="M18 5 L30 0 L42 5 L42 22 Q36 35 30 38 Q24 35 18 22Z" fill="white" stroke="#3978F6" strokeWidth="2" />
        <path d="M27 15 L30 20 L37 12" stroke="#3978F6" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Clock icon */}
      <g transform="translate(310, 60)">
        <circle cx="16" cy="16" r="14" fill="white" stroke="#FFD166" strokeWidth="2" />
        <line x1="16" y1="16" x2="16" y2="8" stroke="#20232C" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="16" x2="22" y2="16" stroke="#20232C" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Hearts */}
      <g transform="translate(320, 160)">
        <path d="M8 5 Q8 0 12 0 Q16 0 16 5 Q16 0 20 0 Q24 0 24 5 Q24 12 16 18 Q8 12 8 5Z" fill="#F04438" opacity="0.4" />
      </g>
    </svg>
  );
}

function CPRIllustration({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="300" rx="20" fill="#D1FAE5" />

      {/* Background */}
      <circle cx="340" cy="60" r="45" fill="#6EE7A8" opacity="0.15" />
      <circle cx="60" cy="250" r="35" fill="#6EE7A8" opacity="0.1" />

      {/* Manekin on mat */}
      <rect x="80" y="210" width="160" height="15" rx="5" fill="#3978F6" opacity="0.2" />
      {/* Manekin body */}
      <rect x="110" y="180" width="60" height="30" rx="8" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5" />
      {/* Manekin head */}
      <circle cx="100" cy="195" r="18" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5" />

      {/* Person performing CPR */}
      <g transform="translate(220, 80)">
        {/* Body */}
        <rect x="10" y="50" width="50" height="65" rx="14" fill="#F04438" />
        {/* Head */}
        <circle cx="35" cy="32" r="26" fill="#FBBF94" />
        <path d="M12 27 Q15 12 35 7 Q55 12 58 27 Q53 18 35 15 Q17 18 12 27Z" fill="#4A3728" />
        {/* Eyes focused */}
        <circle cx="27" cy="30" r="2.5" fill="#20232C" />
        <circle cx="43" cy="30" r="2.5" fill="#20232C" />
        {/* Concentrated expression */}
        <path d="M28 40 Q35 42 42 40" stroke="#20232C" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* Arms pushing down */}
        <path d="M10 70 Q-20 90 -50 100" stroke="#FBBF94" strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M10 80 Q-15 95 -45 105" stroke="#FBBF94" strokeWidth="12" strokeLinecap="round" fill="none" />
        {/* Hands on chest */}
        <circle cx="-50" cy="103" r="8" fill="#FBBF94" />
        {/* Kneeling legs */}
        <rect x="18" y="115" width="14" height="35" rx="7" fill="#20232C" />
        <rect x="38" y="115" width="14" height="30" rx="7" fill="#20232C" />
      </g>

      {/* Compression arrows */}
      <g transform="translate(155, 150)">
        <path d="M10 0 L10 20 M5 15 L10 22 L15 15" stroke="#F04438" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(175, 150)">
        <path d="M10 0 L10 20 M5 15 L10 22 L15 15" stroke="#F04438" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Heart with pulse */}
      <g transform="translate(290, 140)">
        <path d="M15 8 Q15 0 22 0 Q30 0 30 8 Q30 0 37 0 Q45 0 45 8 Q45 20 30 28 Q15 20 15 8Z" fill="#F04438" opacity="0.7" />
        {/* Pulse line */}
        <path d="M5 35 L15 35 L20 25 L25 42 L30 30 L35 35 L50 35" stroke="#F04438" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* AED device */}
      <g transform="translate(310, 200)">
        <rect x="0" y="0" width="40" height="35" rx="5" fill="white" stroke="#FFD166" strokeWidth="2" />
        <path d="M12 12 L20 5 L28 12" stroke="#F04438" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M20 5 L20 25" stroke="#F04438" strokeWidth="2" strokeLinecap="round" />
        <text x="10" y="32" fontSize="7" fill="#20232C" fontWeight="bold">AED</text>
      </g>

      {/* Stars and decorations */}
      <polygon points="80,60 83,68 91,68 85,73 87,81 80,76 73,81 75,73 69,68 77,68" fill="#FFD166" opacity="0.6" />
      <circle cx="340" cy="250" r="6" fill="#C7B5F5" opacity="0.5" />

      {/* 119 badge */}
      <g transform="translate(45, 90)">
        <rect x="0" y="0" width="40" height="22" rx="11" fill="#F04438" />
        <text x="20" y="15" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">119</text>
      </g>
    </svg>
  );
}
