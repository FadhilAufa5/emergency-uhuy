interface SinkopeStepIllustrationProps {
  step: number;
  className?: string;
  priority?: boolean;
}

export const sinkopeStepImages: Record<
  number,
  { src: string; alt: string; title: string }
> = {
  1: {
    src: "/sinkop/langkah_01.png",
    alt: "Ilustrasi Langkah 1: Tetap Tenang & Amankan Lokasi",
    title: "Tetap Tenang & Amankan Lokasi",
  },
  2: {
    src: "/sinkop/langkah_02.png",
    alt: "Ilustrasi Langkah 2: Periksa Respons & Napas",
    title: "Periksa Respons & Napas",
  },
  3: {
    src: "/sinkop/langkah_03.png",
    alt: "Ilustrasi Langkah 3: Hubungi Layanan Darurat 112 / 119",
    title: "Hubungi Layanan Darurat 112 / 119",
  },
  4: {
    src: "/sinkop/langkah_04.png",
    alt: "Ilustrasi Langkah 4: Baringkan & Tinggikan Tungkai ±30 cm",
    title: "Baringkan & Tinggikan Tungkai ±30 cm",
  },
  5: {
    src: "/sinkop/langkah_05.png",
    alt: "Ilustrasi Langkah 5: Longgarkan Pakaian & Beri Udara Segar",
    title: "Longgarkan Pakaian & Beri Udara Segar",
  },
  6: {
    src: "/sinkop/langkah_06.png",
    alt: "Ilustrasi Langkah 6: Miringkan Tubuh Jika Muntah",
    title: "Miringkan Tubuh Jika Muntah",
  },
  7: {
    src: "/sinkop/langkah_07.png",
    alt: "Ilustrasi Langkah 7: Dilarang Menampar / Mengguyur Air",
    title: "Dilarang Menampar / Mengguyur Air",
  },
  8: {
    src: "/sinkop/langkah_08.png",
    alt: "Ilustrasi Langkah 8: Bantu Duduk Perlahan & Minum Manis",
    title: "Bantu Duduk Perlahan & Minum Manis",
  },
  9: {
    src: "/sinkop/langkah_09.png",
    alt: "Ilustrasi Langkah 9: Periksa Luka Jatuh & Pantau Napas",
    title: "Periksa Luka Jatuh & Pantau Napas",
  },
};

export default function SinkopeStepIllustration({
  step,
  className = "",
  priority = false,
}: SinkopeStepIllustrationProps) {
  const imageInfo = sinkopeStepImages[step] || sinkopeStepImages[1];

  return (
    <div className={`relative w-full h-full overflow-hidden bg-cream/40 flex items-center justify-center ${className}`}>
      <img
        src={imageInfo.src}
        alt={imageInfo.alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
