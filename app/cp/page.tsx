import Link from "next/link";
import {
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Bike,
  ArrowRight,
  FileText,
  Target,
  Sparkles,
  Layers,
  HeartPulse,
} from "lucide-react";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import BatikBackground from "@/components/ui/BatikBackground";

export const metadata = {
  title: "Capaian Pembelajaran (CP) — E-Art Gallery of Emergency",
  description:
    "Kompetensi standar tanggap darurat jalan raya bagi mitra pengemudi ojek online: prinsip 3A, pertolongan perdarahan, pingsan, dan fraktur.",
};

const cpCompetencies = [
  {
    no: "01",
    title: "Identifikasi & Triase Awal di Lapangan",
    desc: "Mampu membedakan cepat tingkat keparahan insiden di jalan raya: membedakan 3 jenis perdarahan (arteri, vena, kapiler), mengenali sinkop vs henti napas, dan membedakan fraktur tertutup vs terbuka.",
    icon: Target,
    badge: "Kompetensi Analisis",
    badgeColor: "bg-red/10 text-red border-red/20",
  },
  {
    no: "02",
    title: "Penerapan Prinsip 3A & Keselamatan Diri",
    desc: "Memprioritaskan Aman Diri (penggunaan sarung tangan/APD motor, helm tetap terpasang jika cedera leher), Aman Lingkungan (tanda parkir darurat di aspal), dan Aman Korban sebelum tindakan medis lanjutan.",
    icon: ShieldCheck,
    badge: "Kompetensi Keselamatan",
    badgeColor: "bg-blue/10 text-blue border-blue/20",
  },
  {
    no: "03",
    title: "Tindakan Respon Cepat Sesuai SOP",
    desc: "Mampu mempraktikkan balut tekan kuat tanpa melepas kain pertama, membaringkan dan menaikkan kaki korban pingsan 30 cm, serta mengimobilisasi sendi patah tulang dengan bidai darurat tanpa meluruskan tulang paksa.",
    icon: HeartPulse,
    badge: "Kompetensi Psikomotorik",
    badgeColor: "bg-green/10 text-green-dark border-green/30",
  },
  {
    no: "04",
    title: "Komunikasi Presisi dengan Ambulans 119 / 112",
    desc: "Mampu melaporkan titik koordinat kejadian, kondisi vital korban (sadar/napas), serta mendampingi korban dengan aman hingga tim paramedis tiba di lokasi.",
    icon: Bike,
    badge: "Kompetensi Koordinasi",
    badgeColor: "bg-yellow/20 text-ink border-yellow/40",
  },
];

export default function CapaianPembelajaranPage() {
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
              <span className="font-semibold text-ink">Capaian Pembelajaran (CP)</span>
            </nav>

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-green-50 text-green-700 border border-green-200 mb-4 shadow-2xs">
                <GraduationCap className="w-4 h-4 text-green-600" />
                Standar Kompetensi Driver Siaga
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink mb-4">
                Capaian Pembelajaran{" "}
                <span className="font-handwritten text-green-600 text-5xl sm:text-6xl inline-block -rotate-1">
                  (CP)
                </span>
              </h1>
              <p className="text-base sm:text-lg text-ink-light leading-relaxed">
                Standar capaian kompetensi pertolongan pertama yang diharapkan dikuasai oleh setiap mitra pengemudi ojek online untuk menjadi garda terdepan penyelamatan di jalan raya.
              </p>
            </div>

            {/* Card Utama CP */}
            <div className="mb-12 rounded-3xl border border-ink/8 bg-white/95 backdrop-blur-sm p-7 sm:p-10 shadow-sm">
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-ink/5">
                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-green-700">
                    Deskripsi Capaian Pembelajaran Resmi
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-ink mt-0.5">
                    Kesiapsiagaan Tanggap Darurat Driver
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-ink-light leading-relaxed">
                <p className="p-4 rounded-2xl bg-cream/70 border border-ink/5 text-ink font-medium">
                  &ldquo;Mitra pengemudi ojek online mampu mengenali tanda-tanda kegawatdaruratan pada korban kecelakaan atau insiden medis di jalan raya, menerapkan prinsip 3A (Aman Diri, Aman Lingkungan, Aman Korban), mempraktikkan respon awal balut tekan luka perdarahan, elevasi tungkai 30 cm saat sinkop/pingsan, serta stabilisasi fraktur patah tulang tanpa tindakan berbahaya, sembari menghubungkan lokasi akurat ke ambulans 112/119.&rdquo;
                </p>
                <p className="text-xs text-ink-lighter">
                  *CP ini dirancang relevan dengan realitas lalu lintas jalanan Indonesia, peralatan P3K motor, dan batas kewenangan penolong awam terlatih.
                </p>
              </div>
            </div>

            {/* 4 Pilar Kompetensi CP */}
            <div className="mb-14">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-extrabold text-ink">
                  4 Pilar Indikator Capaian
                </h3>
                <p className="text-xs sm:text-sm text-ink-light mt-1">
                  Keterampilan nyata yang harus dikuasai setelah menyelesaikan modul belajar
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {cpCompetencies.map((comp) => {
                  const Icon = comp.icon;
                  return (
                    <div
                      key={comp.no}
                      className="rounded-2xl border border-ink/8 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${comp.badgeColor}`}>
                            {comp.badge}
                          </span>
                          <span className="text-xs font-mono font-black text-ink/20">
                            PILAR {comp.no}
                          </span>
                        </div>
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 text-ink">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h4 className="text-base font-bold text-ink leading-snug">
                            {comp.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                          {comp.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigasi Pembelajaran */}
            <div className="rounded-3xl bg-gradient-to-br from-ink to-ink-light text-white p-8 sm:p-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold text-yellow uppercase tracking-wider">
                  Langkah Selanjutnya
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">
                  Pelajari Alur Tujuan Pembelajaran (ATP)
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-lg">
                  Ketahui urutan logis langkah tanggap darurat tahap demi tahap dari TKP hingga rumah sakit.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/atp"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink font-bold text-sm hover:bg-yellow hover:text-ink transition-all shadow-md active:scale-95"
                >
                  <span>Buka Halaman ATP</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/materi"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20"
                >
                  <span>Modul Materi</span>
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

