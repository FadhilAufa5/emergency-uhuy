import {
  ShieldCheck,
  HeartPulse,
  PhoneCall,
  ArrowUpFromLine,
  Wind,
  RotateCcw,
  Ban,
  CupSoda,
  Stethoscope,
} from "lucide-react";
import SinkopeStepIllustration from "@/components/illustrations/SinkopeStepIllustration";

export interface SinkopeStepItem {
  number: number;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  icon: React.ElementType;
}

export const sinkopeStepsList: SinkopeStepItem[] = [
  {
    number: 1,
    title: "Langkah 1: Tetap Tenang & Amankan Lokasi",
    badge: "Prioritas Aman Diri",
    badgeColor: "bg-blue/10 text-blue border-blue/20",
    description:
      "Tetap tenang dan pastikan lokasi aman bagi penolong dan korban (misalnya jauhkan dari lalu lintas).",
    icon: ShieldCheck,
  },
  {
    number: 2,
    title: "Langkah 2: Periksa Respons & Napas (Maks 10 Detik)",
    badge: "Cek Kesadaran",
    badgeColor: "bg-red/10 text-red border-red/20",
    description:
      "Periksa respons korban dengan menepuk bahunya dan memanggil dengan keras, lalu periksa napas maksimal 10 detik. Jika korban tidak bernapas atau napas tidak normal, segera lakukan Bantuan Hidup Dasar (BHD).",
    icon: HeartPulse,
  },
  {
    number: 3,
    title: "Langkah 3: Hubungi Layanan Darurat 112 / 119",
    badge: "Panggilan 112 / 119",
    badgeColor: "bg-red text-white border-red shadow-2xs",
    description:
      "Minta orang sekitar menghubungi layanan darurat (112 atau 119) jika korban tidak sadar lebih dari 1 menit, mengalami cedera, atau tampak sakit berat.",
    icon: PhoneCall,
  },
  {
    number: 4,
    title: "Langkah 4: Baringkan & Tinggikan Tungkai ±30 cm",
    badge: "Posisi Recovery",
    badgeColor: "bg-green/10 text-green-dark border-green/30",
    description:
      "Baringkan korban telentang pada permukaan datar, lalu tinggikan kedua tungkai sekitar 30 cm (lebih tinggi dari jantung) jika tidak ada dugaan cedera tulang.",
    icon: ArrowUpFromLine,
  },
  {
    number: 5,
    title: "Langkah 5: Longgarkan Pakaian & Beri Udara Segar",
    badge: "Sirkulasi Udara",
    badgeColor: "bg-blue-light text-blue border-blue/20",
    description:
      "Longgarkan pakaian yang ketat (kerah, ikat pinggang) dan pastikan korban mendapat udara segar. Beri ruang dan jangan biarkan korban dikerumuni.",
    icon: Wind,
  },
  {
    number: 6,
    title: "Langkah 6: Miringkan Tubuh Jika Muntah",
    badge: "Cegah Aspirasi",
    badgeColor: "bg-yellow/20 text-ink border-yellow/40",
    description:
      "Jika korban muntah atau tetap tidak sadar tetapi bernapas normal, miringkan tubuhnya agar muntahan tidak masuk ke saluran pernapasan.",
    icon: RotateCcw,
  },
  {
    number: 7,
    title: "Langkah 7: Dilarang Menampar / Mengguyur Air",
    badge: "Dilarang Keras",
    badgeColor: "bg-red/10 text-red border-red/30",
    description:
      "Jangan menampar, mengguyur dengan air, atau memberi makan dan minum selama korban belum sadar penuh.",
    icon: Ban,
  },
  {
    number: 8,
    title: "Langkah 8: Bantu Duduk Perlahan & Minum Manis",
    badge: "Pemulihan Sadar",
    badgeColor: "bg-green-light text-green-dark border-green/30",
    description:
      "Setelah korban sadar, bantu duduk perlahan, lalu berikan air minum atau minuman manis sedikit demi sedikit. Jangan langsung membantunya berdiri atau berkendara.",
    icon: CupSoda,
  },
  {
    number: 9,
    title: "Langkah 9: Periksa Luka Jatuh & Pantau Napas",
    badge: "Evaluasi & Pantau",
    badgeColor: "bg-lavender/20 text-ink border-lavender/40",
    description:
      "Periksa apakah ada luka akibat terjatuh, serta pantau kesadaran dan napas sampai bantuan medis datang.",
    icon: Stethoscope,
  },
];

export default function SinkopeStepsGuide() {
  return (
    <div className="space-y-4">
      {sinkopeStepsList.map((step) => {
        return (
          <div
            key={step.number}
            className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl bg-gray-50/80 border border-ink/5 hover:border-ink/15 transition-colors p-4 sm:p-5 gap-4 sm:gap-6"
          >
            {/* Left: Gambar Langkah dari public/sinkop */}
            <div className="w-full sm:w-48 md:w-56 aspect-square rounded-xl overflow-hidden border border-ink/10 bg-white shrink-0 shadow-2xs">
              <SinkopeStepIllustration step={step.number} className="w-full h-full" />
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

