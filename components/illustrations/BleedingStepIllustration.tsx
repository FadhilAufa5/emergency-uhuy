interface BleedingStepIllustrationProps {
  step: number;
  className?: string;
  priority?: boolean;
}

export const bleedingStepImages: Record<
  number,
  { src: string; alt: string; title: string }
> = {
  1: {
    src: "/ilustrasi_perdarahan/ilustrasi_01.png",
    alt: "Ilustrasi Langkah 1: Tenang & Proteksi Diri",
    title: "Tenang & Proteksi Diri",
  },
  2: {
    src: "/ilustrasi_perdarahan/ilustrasi_02.png",
    alt: "Ilustrasi Langkah 2: Hubungi Layanan Darurat",
    title: "Hubungi Layanan Darurat",
  },
  3: {
    src: "/ilustrasi_perdarahan/ilustrasi_03.png",
    alt: "Ilustrasi Langkah 3: Posisikan Korban",
    title: "Posisikan Korban",
  },
  4: {
    src: "/ilustrasi_perdarahan/ilustrasi_04.png",
    alt: "Ilustrasi Langkah 4: Tekan Langsung (Direct Pressure)",
    title: "Tekan Langsung (Direct Pressure)",
  },
  5: {
    src: "/ilustrasi_perdarahan/ilustrasi_05.png",
    alt: "Ilustrasi Langkah 5: Tambahkan Lapisan Baru",
    title: "Tambahkan Lapisan Baru",
  },
  6: {
    src: "/ilustrasi_perdarahan/ilustrasi_06.png",
    alt: "Ilustrasi Langkah 6: Tinggikan Bagian Cedera",
    title: "Tinggikan Bagian Cedera",
  },
  7: {
    src: "/ilustrasi_perdarahan/ilustrasi_07.png",
    alt: "Ilustrasi Langkah 7: Balut Luka Rapi & Pas",
    title: "Balut Luka Rapi & Pas",
  },
  8: {
    src: "/ilustrasi_perdarahan/ilustrasi_08.png",
    alt: "Ilustrasi Langkah 8: Jaga Benda Menancap",
    title: "Jaga Benda Menancap",
  },
  9: {
    src: "/ilustrasi_perdarahan/ilustrasi_09.png",
    alt: "Ilustrasi Langkah 9: Jaga Kehangatan & Pantau",
    title: "Jaga Kehangatan & Pantau",
  },
};

export default function BleedingStepIllustration({
  step,
  className = "",
  priority = false,
}: BleedingStepIllustrationProps) {
  const imageInfo = bleedingStepImages[step] || bleedingStepImages[1];

  return (
    <div className={`relative w-full h-full overflow-hidden bg-white flex items-center justify-center ${className}`}>
      <img
        src={imageInfo.src}
        alt={imageInfo.alt}
        className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
}
