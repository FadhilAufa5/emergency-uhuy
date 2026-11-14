interface FractureStepIllustrationProps {
  step: number;
  className?: string;
  priority?: boolean;
}

export const fractureStepImages: Record<
  number,
  { src: string; alt: string; title: string }
> = {
  1: {
    src: "/ilustrasi_fraktur/ilustrasi_01.png",
    alt: "Ilustrasi Langkah 1: Tenang & Amankan Lokasi",
    title: "Tenang & Amankan Lokasi",
  },
  2: {
    src: "/ilustrasi_fraktur/ilustrasi_02.png",
    alt: "Ilustrasi Langkah 2: Hubungi Layanan Darurat 112 / 119",
    title: "Hubungi Layanan Darurat 112 / 119",
  },
  3: {
    src: "/ilustrasi_fraktur/ilustrasi_03.png",
    alt: "Ilustrasi Langkah 3: Diamkan Bagian Cedera",
    title: "Diamkan Bagian Cedera",
  },
  4: {
    src: "/ilustrasi_fraktur/ilustrasi_04.png",
    alt: "Ilustrasi Langkah 4: Waspada Cedera Leher & Jangan Lepas Helm",
    title: "Waspada Cedera Leher & Jangan Lepas Helm",
  },
  5: {
    src: "/ilustrasi_fraktur/ilustrasi_05.png",
    alt: "Ilustrasi Langkah 5: Tutup Luka Fraktur Terbuka",
    title: "Tutup Luka Fraktur Terbuka",
  },
  6: {
    src: "/ilustrasi_fraktur/ilustrasi_06.png",
    alt: "Ilustrasi Langkah 6: Kompres Dingin Fraktur Tertutup",
    title: "Kompres Dingin Fraktur Tertutup",
  },
  7: {
    src: "/ilustrasi_fraktur/ilustrasi_07.png",
    alt: "Ilustrasi Langkah 7: Pasang Bidai Imobilisasi Jika Terlatih",
    title: "Pasang Bidai Imobilisasi (Jika Terlatih)",
  },
  8: {
    src: "/ilustrasi_fraktur/ilustrasi_08.png",
    alt: "Ilustrasi Langkah 8: Periksa Sirkulasi Ujung Jari",
    title: "Periksa Sirkulasi Ujung Jari",
  },
  9: {
    src: "/ilustrasi_fraktur/ilustrasi_09.png",
    alt: "Ilustrasi Langkah 9: Jaga Kehangatan & Pantau Tanda Vital",
    title: "Jaga Kehangatan & Pantau Tanda Vital",
  },
};

export default function FractureStepIllustration({
  step,
  className = "",
  priority = false,
}: FractureStepIllustrationProps) {
  const imageInfo = fractureStepImages[step] || fractureStepImages[1];

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-white flex items-center justify-center ${className}`}
    >
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
