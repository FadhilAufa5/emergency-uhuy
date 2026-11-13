import Image from "next/image";

interface IllustrationProps {
  type: "bleeding" | "seizure" | "cpr" | "hero" | "pingsan" | "fraktur";
  className?: string;
}

export function MedicalIllustration({ type, className = "" }: IllustrationProps) {
  switch (type) {
    case "hero":
      return <HeroIllustration className={className} />;
    case "bleeding":
      return (
        <Image
          src="/perdarahan.webp"
          alt="Ilustrasi Pertolongan Perdarahan di Jalan Raya"
          width={480}
          height={360}
          quality={85}
          className={`w-full h-full object-contain rounded-2xl ${className}`}
          loading="lazy"
        />
      );
    case "pingsan":
    case "seizure":
      return (
        <Image
          src="/pingsan1.jpg"
          alt="Ilustrasi Pertolongan Korban Pingsan (Sinkop)"
          width={480}
          height={360}
          quality={85}
          className={`w-full h-full object-contain rounded-2xl ${className}`}
          loading="lazy"
        />
      );
    case "fraktur":
    case "cpr":
      return (
        <Image
          src="/patahtulang1.jpg"
          alt="Ilustrasi Penanganan Fraktur (Patah Tulang)"
          width={480}
          height={360}
          quality={85}
          className={`w-full h-full object-contain rounded-2xl ${className}`}
          loading="lazy"
        />
      );
    default:
      return null;
  }
}

function HeroIllustration({ className }: { className: string }) {
  return (
    <Image
      src="/ojol.svg"
      alt="Ilustrasi Mitra Ojek Online"
      width={581}
      height={436}
      className={className}
      priority
    />
  );
}
