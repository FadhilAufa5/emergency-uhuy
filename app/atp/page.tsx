import Link from "next/link";
import {
  Map,
  ArrowRight,
  ArrowLeft,
  Route,
  CheckCircle2,
  AlertTriangle,
  PhoneCall,
  Shield,
  Layers,
  HeartHandshake,
} from "lucide-react";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import BatikBackground from "@/components/ui/BatikBackground";
import { learningSteps } from "@/data/learning";

export const metadata = {
  title: "Alur Tujuan Pembelajaran (ATP) — E-Art Gallery of Emergency",
  description:
    "Tahapan belajar sistematis dari penilaian TKP jalan raya hingga koordinasi ambulans 119 bagi mitra pengemudi ojol.",
};

const atpDetails = [
  {
    step: "01",
    phase: "Fase 1: Deteksi Aspal",
    title: "Mengenali Kondisi Darurat di Jalan Raya",
    desc: "Mengidentifikasi cepat situasi kecelakaan lalu lintas, membedakan tanda perdarahan masif, korban pingsan (sinkop) akibat cuaca panas/lelah, serta dugaan patah tulang (fraktur).",
    action: "Kenali 3 kasus utama jalan raya tanpa panik.",
    badge: "Deteksi Awal",
    badgeColor: "bg-red/10 text-red border-red/20",
  },
  {
    step: "02",
    phase: "Fase 2: Proteksi 3A",
    title: "Menerapkan Prinsip 3A (Aman Diri, Jalan, Korban)",
    desc: "Memarkir sepeda motor di titik aman, memasang tanda darurat/hazard lalu lintas, memakai sarung tangan/plastik pelindung, dan memastikan area bebas dari bahaya kendaraan melintas.",
    action: "Jangan menolong jika diri sendiri masih terancam bahaya.",
    badge: "Prioritas Nyawa",
    badgeColor: "bg-blue/10 text-blue border-blue/20",
  },
  {
    step: "03",
    phase: "Fase 3: Tindakan Cepat",
    title: "Pertolongan Pertama Cepat & Tepat",
    desc: "Melakukan penekanan langsung (direct pressure) luka berdarah, membaringkan telentang & menaikkan kaki korban pingsan 30 cm, serta memfiksasi dua sendi patah tulang dengan bidai darurat.",
    action: "Gunakan peralatan P3K motor dan barang bersih di sekitar.",
    badge: "Aksi Lapangan",
    badgeColor: "bg-yellow/20 text-ink border-yellow/40",
  },
  {
    step: "04",
    phase: "Fase 4: Do No Harm",
    title: "Menghindari Tindakan Terlarang yang Berbahaya",
    desc: "Dilarang keras meluruskan paksa tulang bengkok, tidak menampar atau mengguyur air ke wajah korban pingsan, serta dilarang melepas helm korban tabrakan jika ada risiko cedera tulang leher.",
    action: "Mencegah kecacatan permanen dan cedera sekunder.",
    badge: "Disiplin Medis",
    badgeColor: "bg-rose-100 text-rose-700 border-rose-300",
  },
  {
    step: "05",
    phase: "Fase 5: Evakuasi Medis",
    title: "Komunikasi Ambulans 119 & Rujukan IGD",
    desc: "Menghubungi nomor darurat 119/112 dengan format laporan presisi (titik patokan jalan, jumlah korban, kondisi kesadaran/napas) dan mendampingi korban sampai tim medis mengambil alih.",
    action: "Serah terima informasi akurat kepada dokter/paramedis.",
    badge: "Rujukan Akhir",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-300",
  },
];

export default function AlurTujuanPembelajaranPage() {
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
              <span className="font-semibold text-ink">Alur Tujuan Pembelajaran (ATP)</span>
            </nav>

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200 mb-4 shadow-2xs">
                <Map className="w-4 h-4 text-purple-600" />
                Sistematika Belajar Bertahap
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink mb-4">
                Alur Tujuan Pembelajaran{" "}
                <span className="font-handwritten text-purple-600 text-5xl sm:text-6xl inline-block -rotate-1">
                  (ATP)
                </span>
              </h1>
              <p className="text-base sm:text-lg text-ink-light leading-relaxed">
                Rangkaian tahapan pembelajaran yang tersusun secara logis dan sistematis, memandu mitra pengemudi dari pengenalan awal bahaya hingga evakuasi medis terpadu.
              </p>
            </div>

            {/* Timeline Langkah-Langkah */}
            <div className="relative mb-16">
              {/* Garis tengah desktop */}
              <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-purple-200 -translate-x-1/2 rounded-full" />

              <div className="space-y-8 md:space-y-12">
                {atpDetails.map((item, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div
                      key={item.step}
                      className={`relative flex flex-col md:flex-row items-center gap-6 ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Kartu Konten */}
                      <div className="w-full md:w-[calc(50%-2.5rem)]">
                        <div className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-all">
                          <div className="flex items-center justify-between mb-3">
                            <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                            <span className="text-xs font-semibold text-purple-700">
                              {item.phase}
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-ink mb-2">
                            {item.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-ink-light leading-relaxed mb-4">
                            {item.desc}
                          </p>

                          <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-start gap-2 text-xs text-purple-900 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                            <span>{item.action}</span>
                          </div>
                        </div>
                      </div>

                      {/* Lingkaran Nomor di Tengah */}
                      <div className="hidden md:flex w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 text-white font-extrabold text-base items-center justify-center shrink-0 shadow-md shadow-purple-500/25 border-4 border-white z-10">
                        {item.step}
                      </div>

                      {/* Ruang kosong penyeimbang */}
                      <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigasi Pembelajaran */}
            <div className="rounded-3xl bg-gradient-to-br from-ink to-ink-light text-white p-8 sm:p-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Link
                  href="/cp"
                  className="hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                  title="Kembali ke Capaian Pembelajaran"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                  <span className="text-xs font-bold text-yellow uppercase tracking-wider">
                    Langkah Selanjutnya
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-0.5">
                    Tujuan Pembelajaran
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-0.5 max-w-lg">
                    Lihat sasaran kompetensi inti dan indikator kemampuan spesifik setelah belajar.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/tujuan"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink font-bold text-sm hover:bg-yellow hover:text-ink transition-all shadow-md active:scale-95"
                >
                  <span>Buka Halaman Tujuan</span>
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

