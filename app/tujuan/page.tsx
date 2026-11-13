import Link from "next/link";
import {
  Target,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Phone,
  BookOpen,
  ClipboardCheck,
  ShieldAlert,
  Flame,
} from "lucide-react";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import BatikBackground from "@/components/ui/BatikBackground";
import { learningObjectives } from "@/data/learning";

export const metadata = {
  title: "Tujuan Pembelajaran — E-Art Gallery of Emergency",
  description:
    "Tiga sasaran kompetensi kunci pertolongan pertama bagi mitra pengemudi ojek online: deteksi dini, tindakan lapangan, dan komunikasi 119.",
};

const objectivesExtended = [
  {
    id: "obj-1",
    no: "01",
    title: "Deteksi Dini Insiden Jalan Raya",
    desc: "Mitra pengemudi ojek online mampu mengenali dan membedakan tanda-tanda kritis pada korban kecelakaan lalu lintas, gejala sebelum dan saat pingsan, serta tanda patah tulang terbuka dan tertutup.",
    indicators: [
      "Mengidentifikasi 3 jenis aliran darah (arteri memancar, vena mengalir, kapiler merembes)",
      "Mengenali tanda syok (kulit dingin, pucat, napas cepat)",
      "Mendeteksi durasi pingsan > 1 menit sebagai kondisi darurat medis",
      "Membedakan deformitas fraktur terbuka dan tertutup di jalan raya",
    ],
    icon: AlertTriangle,
    accent: "text-red",
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "Deteksi & Analisis",
    badgeColor: "bg-red/10 text-red border-red/20",
  },
  {
    id: "obj-2",
    no: "02",
    title: "Keterampilan Respon Pertama Lapangan",
    desc: "Mitra ojol mampu menerapkan teknik balut tekan perdarahan secara kuat, pertolongan pingsan dengan posisi telentang dan elevasi kaki 30 cm, serta fiksasi bidai pada patah tulang tanpa tindakan membahayakan.",
    indicators: [
      "Melakukan direct pressure tanpa melepas lapisan kain pertama",
      "Memposisikan kaki korban pingsan lebih tinggi dari jantung (±30 cm)",
      "Memasang bidai darurat melewati dua sendi yang berdekatan",
      "Menghindari tindakan fatal: dilarang menampar korban & dilarang meluruskan paksa tulang",
    ],
    icon: Heart,
    accent: "text-blue",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "Praktik Medis Lapangan",
    badgeColor: "bg-blue/10 text-blue border-blue/20",
  },
  {
    id: "obj-3",
    no: "03",
    title: "Komunikasi Cepat & Koordinasi 119",
    desc: "Mitra ojol mampu menghubungi layanan darurat 119/112 dengan informasi titik lokasi presisi, mengamankan lalu lintas sekitar dengan rambu darurat, dan mendampingi korban hingga tim ambulans tiba.",
    indicators: [
      "Melaporkan patokan jalan spesifik dan arah jalur kendaraan",
      "Menginformasikan jumlah korban serta status kesadaran dan napas",
      "Memasang pengaman segitiga/hazard sepeda motor di jarak aman",
      "Serah terima kondisi korban kepada dokter/perawat ambulans secara runtut",
    ],
    icon: Phone,
    accent: "text-green-dark",
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "Manajemen Kedaruratan",
    badgeColor: "bg-green/10 text-green-dark border-green/30",
  },
];

export default function TujuanPembelajaranPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-cream text-ink">
        <BatikBackground opacity="opacity-15 sm:opacity-20" />
        <Navbar />

        <main className="pt-28 pb-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-ink-lighter mb-8">
              <Link href="/" className="hover:text-red transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <span className="font-semibold text-ink">Tujuan Pembelajaran</span>
            </nav>

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200 mb-4 shadow-2xs">
                <Target className="w-4 h-4 text-rose-600" />
                Sasaran Hasil Pelatihan
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink mb-4">
                Tujuan{" "}
                <span className="font-handwritten text-rose-600 text-5xl sm:text-6xl inline-block -rotate-1">
                  Pembelajaran
                </span>
              </h1>
              <p className="text-base sm:text-lg text-ink-light leading-relaxed">
                Tiga sasaran keterampilan utama yang harus dikuasai mitra pengemudi ojol agar mampu bertindak secara tenang, berani, dan terstandar saat menghadapi korban di jalan raya.
              </p>
            </div>

            {/* 3 Tujuan Cards */}
            <div className="space-y-8 mb-16">
              {objectivesExtended.map((obj) => {
                const Icon = obj.icon;
                return (
                  <div
                    key={obj.id}
                    className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-9 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-ink/5">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl ${obj.bg} ${obj.accent} flex items-center justify-center shrink-0 shadow-2xs`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${obj.badgeColor}`}>
                              {obj.badge}
                            </span>
                            <span className="text-xs font-mono font-bold text-ink-lighter">
                              SASARAN #{obj.no}
                            </span>
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold text-ink">
                            {obj.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-ink-light leading-relaxed mb-6">
                      {obj.desc}
                    </p>

                    <div>
                      <div className="text-xs font-bold text-ink uppercase tracking-wider mb-3">
                        Indikator Ketercapaian Kemampuan:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {obj.indicators.map((ind, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-ink/5 text-xs text-ink/80 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-dark shrink-0 mt-0.5" />
                            <span>{ind}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigasi Pembelajaran */}
            <div className="rounded-3xl bg-gradient-to-br from-red to-rose-700 text-white p-8 sm:p-10 shadow-xl shadow-red/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Link
                  href="/atp"
                  className="hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                  title="Kembali ke Alur Tujuan Pembelajaran"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                  <span className="text-xs font-bold text-yellow-light uppercase tracking-wider">
                    Siap Memulai?
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-0.5">
                    Masuk ke Modul Materi Lengkap
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 mt-0.5 max-w-lg">
                    Pelajari langkah pertolongan visual untuk luka perdarahan, korban pingsan, dan fraktur.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/materi"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-red font-bold text-sm hover:bg-yellow hover:text-ink transition-all shadow-md active:scale-95"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Buka Modul Materi</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/evaluasi"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20"
                >
                  <ClipboardCheck className="w-4 h-4" />
                  <span>Kuis Evaluasi</span>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </SmoothScroll>
  );
}

