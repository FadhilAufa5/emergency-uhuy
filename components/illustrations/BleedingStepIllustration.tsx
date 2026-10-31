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
    src: "/perdarahan/1_Langkah_1_Tenang_dan_Proteksi_Diri.jpg",
    alt: "Ilustrasi Langkah 1: Tenang & Proteksi Diri",
    title: "Tenang & Proteksi Diri",
  },
  2: {
    src: "/perdarahan/2_Langkah_2_Hubungi_Layanan_Darurat.jpg",
    alt: "Ilustrasi Langkah 2: Hubungi Layanan Darurat",
    title: "Hubungi Layanan Darurat",
  },
  3: {
    src: "/perdarahan/3_Langkah_3_Posisikan_Korban.jpg",
    alt: "Ilustrasi Langkah 3: Posisikan Korban",
    title: "Posisikan Korban",
  },
  4: {
    src: "/perdarahan/4_Langkah_4_Tekan_Langsung.jpg",
    alt: "Ilustrasi Langkah 4: Tekan Langsung (Direct Pressure)",
    title: "Tekan Langsung (Direct Pressure)",
  },
  5: {
    src: "/perdarahan/5_Langkah_5_Tambahkan_Lapisan_Baru.jpg",
    alt: "Ilustrasi Langkah 5: Tambahkan Lapisan Baru",
    title: "Tambahkan Lapisan Baru",
  },
  6: {
    src: "/perdarahan/6_Langkah_6_Tinggikan_Bagian_Cedera.jpg",
    alt: "Ilustrasi Langkah 6: Tinggikan Bagian Cedera",
    title: "Tinggikan Bagian Cedera",
  },
  7: {
    src: "/perdarahan/7_Langkah_7_Balut_Luka_Rapi_dan_Pas.jpg",
    alt: "Ilustrasi Langkah 7: Balut Luka Rapi & Pas",
    title: "Balut Luka Rapi & Pas",
  },
  8: {
    src: "/perdarahan/8_Langkah_8_Jaga_Benda_Menancap.jpg",
    alt: "Ilustrasi Langkah 8: Jaga Benda Menancap",
    title: "Jaga Benda Menancap",
  },
  9: {
    src: "/perdarahan/9_Langkah_9_Jaga_Kehangatan_dan_Pantau.jpg",
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
