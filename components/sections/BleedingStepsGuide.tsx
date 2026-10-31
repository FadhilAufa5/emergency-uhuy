import {
  ShieldCheck,
  PhoneCall,
  Bed,
  HandMetal,
  Layers,
  TrendingUp,
  Bandage,
  AlertOctagon,
  HeartPulse,
} from "lucide-react";
import BleedingStepIllustration from "@/components/illustrations/BleedingStepIllustration";

export interface BleedingStepItem {
  number: number;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  icon: React.ElementType;
}

export const bleedingStepsList: BleedingStepItem[] = [
  {
    number: 1,
    title: "Langkah 1: Tenang & Proteksi Diri",
    badge: "Prioritas Aman Diri",
    badgeColor: "bg-blue/10 text-blue border-blue/20",
    description:
      "Tetap tenang dan pastikan lokasi aman bagi penolong dan korban. Jika ada, gunakan sarung tangan atau plastik bersih sebagai pelindung dari darah.",
    icon: ShieldCheck,
  },
  {
    number: 2,
    title: "Langkah 2: Hubungi Layanan Darurat",
    badge: "Panggilan 112 / 119",
    badgeColor: "bg-red/10 text-red border-red/20",
    description:
      "Minta orang sekitar menghubungi layanan darurat (112 atau 119), terutama jika darah memancar, perdarahan banyak, atau korban tampak lemas dan pucat.",
    icon: PhoneCall,
  },
  {
    number: 3,
    title: "Langkah 3: Posisikan Korban",
    badge: "Cegah Jatuh",
    badgeColor: "bg-green/10 text-green-dark border-green/30",
    description:
      "Baringkan atau dudukkan korban agar nyaman dan tidak terjatuh.",
    icon: Bed,
  },
  {
    number: 4,
    title: "Langkah 4: Tekan Langsung (Direct Pressure)",
    badge: "Tekanan Kuat & Kontinu",
    badgeColor: "bg-red text-white border-red shadow-2xs",
    description:
      "Tekan langsung luka menggunakan kain bersih, kassa, atau handuk dengan tekanan kuat dan terus-menerus.",
    icon: HandMetal,
  },
  {
    number: 5,
    title: "Langkah 5: Tambahkan Lapisan Baru",
    badge: "Jangan Lepas Kain Lama",
    badgeColor: "bg-yellow/20 text-ink border-yellow/40",
    description:
      "Jika kain basah oleh darah, jangan dilepas. Tambahkan lapisan kain baru di atasnya dan tetap tekan.",
    icon: Layers,
  },
  {
    number: 6,
    title: "Langkah 6: Tinggikan Bagian Cedera",
    badge: "Lebih Tinggi dari Jantung",
    badgeColor: "bg-green-light text-green-dark border-green/30",
    description:
      "Jika luka berada di lengan atau tungkai dan tidak dicurigai patah tulang, tinggikan bagian tubuh yang terluka lebih tinggi dari jantung.",
    icon: TrendingUp,
  },
  {
    number: 7,
    title: "Langkah 7: Balut Luka Rapi & Pas",
    badge: "Cek Sirkulasi Jari",
    badgeColor: "bg-lavender/20 text-ink border-lavender/40",
    description:
      "Setelah perdarahan berkurang, balut luka dengan perban atau kain yang cukup kencang, tetapi tidak sampai menghambat aliran darah (jari tetap hangat dan berwarna merah muda).",
    icon: Bandage,
  },
  {
    number: 8,
    title: "Langkah 8: Jaga Benda Menancap",
    badge: "Dilarang Mencabut",
    badgeColor: "bg-red/10 text-red border-red/30",
    description:
      "Jangan mencabut benda yang tertancap pada luka. Tekan di sekitar benda tersebut dan stabilkan agar tidak bergerak.",
    icon: AlertOctagon,
  },
  {
    number: 9,
    title: "Langkah 9: Jaga Kehangatan & Pantau",
    badge: "Cegah Hipotermia & Syok",
    badgeColor: "bg-blue-light text-blue border-blue/20",
    description:
      "Jaga korban tetap hangat dengan selimut atau jaket, dan pantau kesadaran serta napasnya sampai bantuan medis datang.",
    icon: HeartPulse,
  },
];

export default function BleedingStepsGuide() {
  return (
    <div className="space-y-4">
      {bleedingStepsList.map((step) => {
        return (
          <div
            key={step.number}
            className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl bg-gray-50/80 border border-ink/5 hover:border-ink/15 transition-colors p-4 sm:p-5 gap-4 sm:gap-6"
          >
            {/* Left: Gambar Langkah dari public/perdarahan */}
            <div className="w-full sm:w-48 md:w-56 aspect-[4/3] rounded-xl overflow-hidden border border-ink/10 bg-white shrink-0 shadow-2xs">
              <BleedingStepIllustration step={step.number} className="w-full h-full" />
            </div>

            {/* Right: Deskripsi & Judul Langkah */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-7 h-7 rounded-lg bg-ink text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                  {step.number}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${step.badgeColor}`}>
                  {step.badge}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-ink mb-1">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
