import Link from "next/link";
import {
  Palette,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  AlertCircle,
  Bike,
  ShieldCheck,
  Heart,
} from "lucide-react";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const metadata = {
  title: "Tentang Kami — E-Art Gallery of Emergency untuk Driver Ojol",
  description:
    "Mengenal inisiatif E-Art Gallery of Emergency: galeri seni edukatif pertolongan pertama yang didedikasikan bagi mitra pengemudi ojek online sebagai pahlawan respon cepat di jalan raya.",
};

const colorPalette = [
  { name: "Warm Cream", hex: "#FFF8F0", role: "Dasar kanvas galeri yang hangat dan ramah." },
  { name: "Emergency Red", hex: "#F04438", role: "Aksen pertolongan pertama & tindakan krusial." },
  { name: "Cobalt Blue", hex: "#3978F6", role: "Struktur, kejelasan informasi, dan ketenangan." },
  { name: "Sunshine Yellow", hex: "#FFD166", role: "Optimisme, peringatan keselamatan, & energi." },
  { name: "Mint Green", hex: "#9FE3C2", role: "Pemulihan, keharmonisan, & langkah aman." },
  { name: "Lavender", hex: "#C7B5F5", role: "Dukungan psikologis & instrumen refleksi." },
  { name: "Deep Ink", hex: "#20232C", role: "Tipografi tegas, kontras tinggi, & keterbacaan." },
];

export default function TentangPage() {
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
              <span className="font-semibold text-ink">Tentang Inisiatif Driver Siaga</span>
            </nav>

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red/10 text-red border border-red/20 mb-4">
                <Bike className="w-3.5 h-3.5" />
                Visi & Dedikasi untuk Mitra Ojol
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink mb-4">
                Tentang{" "}
                <span className="font-handwritten text-red text-5xl sm:text-6xl inline-block -rotate-1">
                  E-Art Gallery
                </span>{" "}
                of Emergency
              </h1>
              <p className="text-base sm:text-lg text-ink-light leading-relaxed">
               E-Art Gallery of Emergency merupakan media edukasi digital yang menyajikan informasi pertolongan pertama pada kondisi kegawatdaruratan melalui ilustrasi, infografis, teks singkat, dan panduan langkah demi langkah.

              </p>
            </div>

            {/* Core Mission Banner */}
            <div className="rounded-3xl border border-ink/8 bg-white p-8 sm:p-12 mb-16 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-blue uppercase tracking-wider">
                    Mengapa Khusus Pengemudi Ojek Online?
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
                    Driver Ojol: Saksi Mata Pertama & Penolong Garda Depan Jalanan
                  </h2>
                  <p className="text-sm sm:text-base text-ink-light leading-relaxed">
                    Setiap hari, jutaan mitra pengemudi ojek online menjelajahi jalanan kota hingga pelosok. Di lapangan, saat kecelakaan lalu lintas terjadi, korban pingsan akibat keletihan, atau pengendara mengalami patah tulang, <strong>driver ojek onlinelah yang paling sering tiba pertama kali di tempat kejadian perkara (TKP)</strong> jauh sebelum mobil ambulans dapat menembus kemacetan.
                  </p>
                  <p className="text-sm sm:text-base text-ink-light leading-relaxed">
                    Namun, materi medis formal kerap disajikan dengan istilah rumit atau foto luka berdarah yang memicu kepanikan. <strong>E-Art Gallery of Emergency</strong> hadir dengan pendekatan seni editorial: ramah mata, kaya ilustrasi bermakna, dan fokus pada protokol tindakan praktis yang relevan dengan kondisi jalan raya.
                  </p>
                </div>
                <div className="lg:col-span-5 bg-cream/70 rounded-3xl p-6 sm:p-8 border border-ink/5 space-y-4">
                  <h3 className="text-base font-bold text-ink flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow" />
                    3 Nilai Inti untuk Pengemudi:
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-ink-light">
                    <div className="p-3 bg-white rounded-xl border border-ink/5">
                      <strong className="text-ink block mb-0.5">1. Utamakan 3A (Traffic Safety)</strong>
                      Keselamatan driver dan pengamanan arus lalu lintas adalah nomor satu.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-ink/5">
                      <strong className="text-ink block mb-0.5">2. Respon Berbasis Ilustrasi</strong>
                      Visual yang mudah diingat cepat saat menghadapi situasi panik di aspal.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-ink/5">
                      <strong className="text-ink block mb-0.5">3. Kolaborasi Cepat 119</strong>
                      Menjadi mata dan telinga petugas medis dengan share lokasi akurat.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Palette Visual Identity */}
            <div className="rounded-3xl border border-ink/8 bg-white p-8 sm:p-12 mb-16 shadow-sm">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold text-ink-lighter uppercase tracking-wider">
                  Identitas Visual
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mt-1">
                  Palet Warna Berkarakter
                </h2>
                <p className="text-xs sm:text-sm text-ink-lighter mt-2">
                  Setiap warna dipilih secara harmonis untuk menyampaikan pesan ketenangan, keselamatan, dan energi positif.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {colorPalette.map((c) => (
                  <div
                    key={c.name}
                    className="p-4 rounded-2xl border border-ink/8 bg-cream/30 flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="w-full h-16 rounded-xl border border-ink/10 mb-3 shadow-inner"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div className="text-sm font-bold text-ink">{c.name}</div>
                      <div className="text-xs font-mono text-ink-lighter mb-2">{c.hex}</div>
                    </div>
                    <p className="text-xs text-ink-light leading-relaxed">{c.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Institutional / Creator Credits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-9 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-blue/10 text-blue flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">
                  Inisiatif & Solidaritas Komunitas
                </h3>
                <p className="text-sm text-ink-light leading-relaxed mb-4">
                  Website ini dibangun sebagai dedikasi terhadap komunitas jutaan mitra pengemudi ojek online di Indonesia yang setiap hari berjuang di jalan raya dan berpotensi menjadi pahlawan kemanusiaan penyelamat sesama.
                </p>
                <div className="p-3.5 rounded-xl bg-gray-50 border border-ink/5 text-xs text-ink-lighter">
                  Kolaborasi: Tim Kreatif Desain Edukasi & Penggerak Komunitas Relawan Lapangan
                </div>
              </div>

              <div className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-9 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-red/10 text-red flex items-center justify-center mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">
                  Rujukan Prosedur Medis
                </h3>
                <p className="text-sm text-ink-light leading-relaxed mb-4">
                  Seluruh urutan tindakan disesuaikan dengan protokol pertolongan pertama awam terlatih (First Aid) dan Basic Life Support (BLS) standar SPGDT Kementerian Kesehatan Republik Indonesia.
                </p>
                <div className="p-3.5 rounded-xl bg-gray-50 border border-ink/5 text-xs text-ink-lighter">
                  Rujukan: Standar SPGDT Kemenkes RI & Protokol First Responder Kedaruratan
                </div>
              </div>
            </div>

            {/* Medical Disclaimer Section */}
            <div className="rounded-3xl border border-red/25 bg-red-light/30 p-8 sm:p-10 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red text-white flex items-center justify-center shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-ink">
                    Pemberitahuan Hukum & Medis (Medical Disclaimer)
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                    Seluruh konten visual, ringkasan materi, LKPD, dan evaluasi di website ini semata-mata ditujukan untuk <strong>edukasi umum dan panduan respon pertama bagi pengemudi ojek online</strong>. Informasi ini <strong>bukan pengganti sertifikasi resmi medis profesional atau penanganan medis definitif di rumah sakit</strong>.
                  </p>
                  <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                    Saat menghadapi kecelakaan parah di jalan raya, pastikan keselamatan Anda terlindungi, jangan memindahkan korban cedera leher sembarangan, dan segera hubungi <strong>Pusat Panggilan Darurat Medis 119 / 112</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation back */}
            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white font-semibold text-sm hover:bg-red transition-all shadow-md active:scale-95"
              >
                Mulai Jelajahi Modul Driver
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </SmoothScroll>
  );
}
