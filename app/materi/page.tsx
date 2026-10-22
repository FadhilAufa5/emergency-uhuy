import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  AlertCircle,
  ShieldAlert,
  HeartPulse,
  PhoneCall,
  CheckCircle2,
  Bike,
  Sparkles,
  ClipboardCheck,
} from "lucide-react";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import { MedicalIllustration } from "@/components/illustrations/MedicalIllustration";
import { materials } from "@/data/materials";

export const metadata = {
  title: "Katalog Materi Kedaruratan — E-Art Gallery of Emergency",
  description:
    "Panduan materi pertolongan pertama komprehensif: Mengenal Kejang, Perdarahan Arteri/Vena/Kapiler, dan Bantuan Hidup Dasar (BHD) untuk penyelamatan darurat di jalan raya.",
};

export default function MateriPage() {
  const iconMap: Record<string, typeof AlertCircle> = {
    kejang: ShieldAlert,
    perdarahan: AlertCircle,
    bhd: HeartPulse,
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-cream text-ink">
        <Navbar />

        <main className="pt-28 pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-ink-lighter mb-8">
              <Link href="/" className="hover:text-red transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <span className="font-semibold text-ink">Materi Pertolongan Pertama</span>
            </nav>

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red/10 text-red border border-red/20 mb-4">
                <Bike className="w-3.5 h-3.5" />
                Materi Pelatihan Inti Driver Siaga
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink mb-4">
                Katalog Materi{" "}
                <span className="font-handwritten text-red text-5xl sm:text-6xl inline-block -rotate-1">
                  Kedaruratan
                </span>
              </h1>
              <p className="text-base sm:text-lg text-ink-light leading-relaxed">
                Pelajari 3 modul pertolongan pertama esensial: Penanganan Kejang, Manajemen Perdarahan (Arteri, Vena, Kapiler), dan Rantai Bantuan Hidup Dasar (BHD).
              </p>
            </div>

            {/* Emergency Hotline Banner */}
            <div className="mb-14 rounded-3xl bg-gradient-to-r from-red-dark via-red to-red-dark text-white p-6 sm:p-8 shadow-xl shadow-red/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <PhoneCall className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-red-light">
                    Kedaruratan Medis Bebas Pulsa Nasional
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Hubungi 112 atau 119
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 mt-0.5">
                    Sebutkan patokan jalan spesifik, arah jalur kendaraan, jumlah korban, dan kondisi kesadaran serta napas korban.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold">
                  24 Jam Siaga
                </div>
                <div className="px-4 py-2 rounded-xl bg-white text-ink text-xs font-bold">
                  Bebas Pulsa
                </div>
              </div>
            </div>

            {/* Materials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {materials.map((item) => {
                const Icon = iconMap[item.slug] || AlertCircle;
                const illuType =
                  item.slug === "perdarahan"
                    ? "bleeding"
                    : item.slug === "kejang"
                    ? "seizure"
                    : "cpr";

                return (
                  <div
                    key={item.slug}
                    className="flex flex-col rounded-3xl border border-ink/8 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-ink/20"
                  >
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${item.categoryColor}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {item.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-ink-lighter">
                        Materi 0{item.orderNumber}
                      </span>
                    </div>

                    {/* Illustration container */}
                    <div
                      className={`w-full h-48 rounded-2xl ${item.bgColor} p-4 flex items-center justify-center mb-6 overflow-hidden`}
                    >
                      <MedicalIllustration
                        type={illuType}
                        className="w-full h-full max-h-40 drop-shadow-sm transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-ink mb-1.5">
                      {item.title}
                    </h2>
                    <p className="text-xs font-semibold text-red mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-ink-light leading-relaxed mb-6 flex-1">
                      {item.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2.5 mb-6 pt-4 border-t border-ink/5">
                      <div className="text-xs font-bold text-ink-light uppercase tracking-wider">
                        Poin Kunci Pembelajaran:
                      </div>
                      <div className="flex items-center gap-2 text-xs text-ink/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-dark shrink-0" />
                        <span>{item.tanda.items.length} tanda kondisi yang perlu dikenali</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-ink/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-dark shrink-0" />
                        <span>{item.langkah.steps.length} langkah aman pertolongan awal</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-ink/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-dark shrink-0" />
                        <span>Tindakan berbahaya yang wajib dihindari</span>
                      </div>
                    </div>

                    {/* Action link */}
                    <Link
                      href={`/materi/${item.slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-2xl bg-ink text-white font-semibold text-sm hover:bg-red transition-all shadow-sm active:scale-95"
                    >
                      <span>Buka Modul Materi Lengkap</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Evaluasi Quiz Link Banner */}
            <div className="mb-14 rounded-3xl border border-ink/8 bg-gradient-to-br from-cream to-white p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red text-white flex items-center justify-center shrink-0 shadow-sm">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-red uppercase tracking-wider">
                    Uji Refleks Pertolongan
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-ink mt-0.5">
                    Sudah Mempelajari Seluruh Materi?
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-light mt-1 max-w-xl">
                    Uji pemahaman Anda melalui 5 kuis pilihan ganda evaluasi kesiapsiagaan darurat dengan penilaian otomatis dan pembahasan medis lengkap.
                  </p>
                </div>
              </div>

              <Link
                href="/evaluasi"
                className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-ink text-white font-bold text-sm hover:bg-red transition-all shadow-md active:scale-95"
              >
                <span>Mulai Kuis Evaluasi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Learning Philosophy Card */}
            <div className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <span className="text-xs font-bold text-blue uppercase tracking-wider">
                  Etika & Prinsip Keselamatan di Jalan Raya
                </span>
                <h3 className="text-2xl font-bold text-ink mt-1 mb-3">
                  Prinsip 3A untuk Penolong Pertama
                </h3>
                <p className="text-sm text-ink-light leading-relaxed mb-4">
                  Sebelum melakukan pertolongan, penolong wajib mengutamakan <strong>Aman Diri</strong> (gunakan sarung tangan/plastik bersih, waspadai lalu lintas), <strong>Aman Lingkungan</strong> (amankan area sekitar dari benda tajam, bahaya api, atau kendaraan), dan <strong>Aman Korban</strong> (posisikan korban dengan benar tanpa memperparah cedera).
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="px-3 py-1 rounded-full bg-red-light text-red border border-red/20">
                    1. Aman Diri
                  </span>
                  <span className="px-3 py-1 rounded-full bg-yellow-light text-ink border border-yellow/30">
                    2. Aman Lingkungan
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-light text-blue border border-blue/20">
                    3. Aman Korban
                  </span>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Link
                  href="/"
                  className="px-6 py-3.5 rounded-full bg-cream border border-ink/15 text-ink font-semibold text-sm hover:bg-ink hover:text-white transition-colors"
                >
                  Kembali ke Beranda
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
