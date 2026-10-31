"use client";

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

export default function BatikLogoLoop() {
  return (
    <section
      aria-label="Motif Batik Nusantara Divider"
     
    >
      <div className="w-full overflow-hidden">
        <LogoLoop
          logos={BATIK_LOGOS}
          speed={40}
          hoverSpeed={10}
          pauseOnHover={true}
          gap={0}
          logoHeight={56}
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

