import {
  ShieldCheck,
  PhoneCall,
  Hand,
  AlertTriangle,
  Bandage,
  Snowflake,
  ShieldAlert,
  Activity,
  HeartPulse,
} from "lucide-react";
import FractureStepIllustration from "@/components/illustrations/FractureStepillustration";

export interface FractureStepItem {
  number: number;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  icon: React.ElementType;
}

export const fractureStepsList: FractureStepItem[] = [
  {
    number: 1,
    title: "Langkah 1: Tenang & Amankan Lokasi",
    badge: "Aman Diri & Korban",
    badgeColor: "bg-blue/10 text-blue border-blue/20",
    description:
      "Tetap tenang dan pastikan lokasi aman bagi penolong dan korban. Jangan memindahkan korban kecuali ada bahaya langsung (misalnya lalu lintas atau api).",
    icon: ShieldCheck,
  },
  {
    number: 2,
    title: "Langkah 2: Hubungi Layanan Darurat 112 / 119",
    badge: "Panggilan 112 / 119",
    badgeColor: "bg-red text-white border-red shadow-2xs",
    description:
      "Minta orang sekitar menghubungi layanan darurat (112 atau 119), terutama pada fraktur terbuka, perdarahan banyak, atau dugaan cedera kepala, leher, tulang belakang, panggul, atau paha.",
    icon: PhoneCall,
  },
  {
    number: 3,
    title: "Langkah 3: Diamkan Bagian Cedera",
    badge: "Jangan Gerakkan",
    badgeColor: "bg-red/10 text-red border-red/30",
    description:
      "Minta korban tetap diam dan jangan menggerakkan bagian yang cedera. Jangan mencoba meluruskan tulang atau memasukkan kembali tulang yang menonjol.",
    icon: Hand,
  },
  {
    number: 4,
    title: "Langkah 4: Waspada Cedera Leher & Jangan Lepas Helm",
    badge: "Proteksi Tulang Belakang",
    badgeColor: "bg-yellow/20 text-ink border-yellow/40",
    description:
      "Jika dicurigai cedera leher atau tulang belakang (misalnya jatuh dari motor, nyeri leher atau punggung, kesemutan), jangan gerakkan korban. Jangan melepas helm kecuali menghalangi jalan napas.",
    icon: AlertTriangle,
  },
  {
    number: 5,
    title: "Langkah 5: Tutup Luka Fraktur Terbuka",
    badge: "Cegah Infeksi & Pendarahan",
    badgeColor: "bg-red/10 text-red border-red/20",
    description:
      "Fraktur terbuka: Tutup luka dengan kain bersih atau kassa. Jika berdarah, tekan lembut di sekitar luka tanpa menekan ujung tulang yang menonjol.",
    icon: Bandage,
  },
  {
    number: 6,
    title: "Langkah 6: Kompres Dingin Fraktur Tertutup",
    badge: "Redakan Bengkak",
    badgeColor: "bg-blue-light text-blue border-blue/20",
    description:
      "Fraktur tertutup: Kompres dingin dengan es yang dibungkus kain pada area yang bengkak selama sekitar 20 menit. Jangan menempelkan es langsung ke kulit.",
    icon: Snowflake,
  },
  {
    number: 7,
    title: "Langkah 7: Pasang Bidai Imobilisasi (Jika Terlatih)",
    badge: "Imobilisasi 2 Sendi",
    badgeColor: "bg-yellow/10 text-yellow-dark border-yellow/30",
    description:
      "Jika terlatih dan bantuan lama datang, imobilisasi bagian yang cedera dengan bidai (papan, kayu, atau karton) yang mencakup sendi di atas dan di bawah patahan, lalu ikat tidak terlalu kencang.",
    icon: ShieldAlert,
  },
  {
    number: 8,
    title: "Langkah 8: Periksa Sirkulasi Ujung Jari",
    badge: "Cek Aliran Darah",
    badgeColor: "bg-green/10 text-green-dark border-green/30",
    description:
      "Periksa ujung anggota gerak di bawah bidai atau balutan: pastikan jari tetap hangat, berwarna merah muda, dan masih dapat merasakan sentuhan.",
    icon: Activity,
  },
  {
    number: 9,
    title: "Langkah 9: Jaga Kehangatan & Pantau Tanda Vital",
    badge: "Cegah Syok & Pantau",
    badgeColor: "bg-lavender/20 text-ink border-lavender/40",
    description:
      "Jaga korban tetap hangat, jangan beri makan atau minum, serta pantau kesadaran dan napasnya sampai bantuan medis datang.",
    icon: HeartPulse,
  },
];

export default function FractureStepsGuide() {
  return (
    <div className="space-y-4">
      {fractureStepsList.map((step) => {
        return (
          <div
            key={step.number}
            className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl bg-gray-50/80 border border-ink/5 hover:border-ink/15 transition-colors p-4 sm:p-5 gap-4 sm:gap-6"
          >
            {/* Left: Gambar Langkah 1:1 dari public/fraktur */}
            <div className="w-full sm:w-48 md:w-56 aspect-square rounded-xl overflow-hidden border border-ink/10 bg-white shrink-0 shadow-2xs">
              <FractureStepIllustration step={step.number} className="w-full h-full" />
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

