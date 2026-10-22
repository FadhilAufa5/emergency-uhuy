"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ClipboardCheck,
  CheckCircle2,
  HelpCircle,
  BookCheck,
  ArrowRight,
  ShieldCheck,
  Bike,
} from "lucide-react";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

interface EvaluasiRubric {
  id: string;
  topic: string;
  title: string;
  badgeColor: string;
  description: string;
  scenarios: {
    question: string;
    keyPoints: string[];
    criticalSafety: string;
  }[];
}

const evaluasiData: EvaluasiRubric[] = [
  {
    id: "eval-perdarahan",
    topic: "Perdarahan",
    title: "Evaluasi Kasus: Respon Perdarahan Akibat Kecelakaan Lalu Lintas",
    badgeColor: "bg-red/10 text-red border-red/20",
    description:
      "Uji pemahaman mitra pengemudi ojol mengenai teknik balut tekan luka robek di aspal, proteksi penolong dari patogen darah, dan pencegahan syok hipovolemik.",
    scenarios: [
      {
        question:
          "Skenario 1: Saat melintas, Anda melihat pengendara sepeda motor terjatuh di aspal dengan luka robek besar di tungkai bawah dan darah mengalir deras. Apa urutan tindakan Anda sebagai driver pertama di lokasi?",
        keyPoints: [
          "1. Aman Diri & Lalu Lintas: Parkir motor di bahu jalan yang aman, nyalakan hazard, pasang tanda agar kendaraan lain melambat.",
          "2. Gunakan sarung tangan medis atau plastik bersih dari kantong P3K motor sebelum menyentuh luka.",
          "3. Ambil kain kasa steril atau kain bersih tebal, letakkan tepat di atas luka, dan tekan secara kuat dan mantap (Direct Pressure).",
          "4. Jika tidak ada kecurigaan patah tulang terbuka, posisikan tungkai sedikit lebih tinggi dari dada korban.",
          "5. Jangan mencabut kain kasa pertama bila darah tembus; tambahkan lapisan baru di atasnya dan pertahankan tekanan.",
        ],
        criticalSafety:
          "Dilarang membersihkan luka dalam dengan bensin/alkohol keras, dan jangan pasang torniket sembarangan tanpa indikasi medis resmi.",
      },
      {
        question:
          "Skenario 2: Setelah luka ditekan beberapa menit, korban kecelakaan mulai mengeluh pusing berat, pandangan berkunang-kunang, dan kulitnya teraba dingin serta pucat di trotoar. Apa langkah mitigasi Anda?",
        keyPoints: [
          "Kenali ini sebagai tanda awal Syok Hipovolemik akibat kehilangan darah.",
          "Baringkan korban telentang di permukaan rata dan tinggikan kedua kakinya 20–30 cm bila tidak ada patah tulang punggung/kaki.",
          "Gunakan jaket driver Anda untuk menyelimuti korban agar suhu tubuh tetap terjaga hangat.",
          "Segera telepon ambulans 119, sebutkan patokan jalan presisi, dan laporkan tanda-tanda syok korban.",
        ],
        criticalSafety:
          "Jangan sekali-kali memberi minum atau makan kepada korban yang lemas di pinggir jalan karena berisiko tersedak ke paru-paru.",
      },
    ],
  },
  {
    id: "eval-kejang",
    topic: "Kejang",
    title: "Evaluasi Kasus: Penumpang atau Warga Mengalami Kejang Mendadak",
    badgeColor: "bg-blue/10 text-blue border-blue/20",
    description:
      "Uji ketepatan sikap driver ojol dalam melindungi kepala korban dari benturan aspal dan mengeliminasi mitos berbahaya saat kejang berlangsung.",
    scenarios: [
      {
        question:
          "Skenario 1: Penumpang ojek online Anda tiba-tiba terjatuh saat hendak turun di pangkalan dan mengalami kejang kelojotan. Warga sekitar panik dan ingin memasukkan gagang sendok serta minyak ke mulutnya. Bagaimana sikap tegas Anda?",
        keyPoints: [
          "Larang keras tindakan memasukkan sendok, kopi, atau benda apa pun ke mulut korban (dapat mematahkan gigi dan menyumbat total jalan napas).",
          "Singkirkan sepeda motor, helm, batu tajam, dan benda keras di sekitar korban.",
          "Lipat jaket driver Anda dan letakkan di bawah kepala korban sebagai bantalan empuk agar tidak mengalami gegar otak akibat benturan aspal.",
          "Longgarkan jaket atau pakaian ketat korban di area leher.",
          "Jangan menahan paksa gerakan tangan/kaki korban; biarkan kejang selesai dengan sendirinya.",
        ],
        criticalSafety:
          "Menahan paksa tubuh yang kejang dapat mengakibatkan dislokasi sendi dan patah tulang pada korban.",
      },
      {
        question:
          "Skenario 2: Fase kelojotan korban telah berhenti, namun korban masih belum sadar dan napasnya terdengar mendengkur (ngorok). Apa yang harus dilakukan driver?",
        keyPoints: [
          "Segera miringkan tubuh korban ke satu sisi (Posisi Miring Mantap / Recovery Position).",
          "Dengakkan sedikit dagu korban agar lidah tidak jatuh ke belakang menyumbat tenggorokan.",
          "Biarkan cairan liur atau muntahan mengalir keluar ke aspal.",
          "Catat durasi kejadian dan segera hubungi 119 bila kejang lebih dari 5 menit atau kejang berulang.",
        ],
        criticalSafety:
          "Selalu pantau apakah dada korban tetap naik-turun bernapas setelah fase kejang selesai.",
      },
    ],
  },
  {
    id: "eval-bhd",
    topic: "BHD",
    title: "Evaluasi Kasus: Korban Kolaps Henti Jantung di Tempat Umum",
    badgeColor: "bg-green/10 text-green-dark border-green/30",
    description:
      "Pedoman kesiapan driver ojol mengenai algoritma pengenalan henti jantung mendadak, panggilan darurat 119, dan resusitasi jantung paru berkualitas tinggi.",
    scenarios: [
      {
        question:
          "Skenario 1: Saat antre di SPBU atau pangkalan, Anda melihat seseorang tiba-tiba tumbang pingsan dan tidak bergerak sama sekali. Apa 3 langkah awal Anda dalam 10 detik pertama?",
        keyPoints: [
          "1. Pastikan Keamanan (Aman diri dan lingkungan dari lalu lintas kendaraan SPBU).",
          "2. Cek Respons: Tepuk kedua bahu korban dengan tegas dan panggil dengan lantang: 'Pak/Bu, apakah Anda sadar?'.",
          "3. Jika korban tidak merespons dan napasnya berhenti (atau hanya megap-megap seperti ikan / gasping), teriak minta bantuan rekan driver lain dan segera hubungi 119.",
        ],
        criticalSafety:
          "Jangan habiskan waktu mencari denyut nadi bila Anda ragu; jika tidak sadar dan napas tidak normal, anggap henti jantung dan segera minta bantuan 119.",
      },
      {
        question:
          "Skenario 2: Petugas 119 menginstruksikan Anda untuk melakukan kompresi dada (Hands-Only CPR). Apa saja parameter kualitas kompresi yang wajib Anda jaga?",
        keyPoints: [
          "Titik kompresi: Letakkan tumit tangan di tengah tulang dada korban, kunci jari tangan satunya di atasnya.",
          "Posisi tubuh driver: Berlutut di samping korban, siku lurus vertikal memanfaatkan beban tubuh atas.",
          "Kecepatan kompresi: 100 hingga 120 kali per menit (seperti tempo irama lagu 'Stayin Alive').",
          "Kedalaman kompresi: 5 hingga 6 cm pada orang dewasa.",
          "Full Recoil: Pastikan dada mengembang sempurna sebelum ditekan kembali.",
          "Lanjutkan kompresi tanpa henti hingga tim ambulans 119 tiba mengambil alih atau korban mulai bergerak sadar.",
        ],
        criticalSafety:
          "Kompresi dada yang tidak terputus adalah penentu utama mengalirnya oksigen ke otak korban yang henti jantung.",
      },
    ],
  },
];

export default function EvaluasiPage() {
  const [activeTab, setActiveTab] = useState<string>("eval-perdarahan");

  const currentRubric = evaluasiData.find((r) => r.id === activeTab) || evaluasiData[0];

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
              <span className="font-semibold text-ink">Evaluasi Driver Siaga</span>
            </nav>

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gray-100 text-ink border border-gray-200 mb-4">
                <Bike className="w-3.5 h-3.5 text-red" />
                Instrumen Evaluasi Formatif Driver Ojol
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink mb-4">
                Evaluasi{" "}
                <span className="font-handwritten text-red text-5xl sm:text-6xl inline-block -rotate-1">
                  Kesiapsiagaan
                </span>{" "}
                di Jalan
              </h1>
              <p className="text-base sm:text-lg text-ink-light leading-relaxed">
                Tolak ukur intuisi dan penalaran taktis mitra pengemudi ojek online menghadapi situasi darurat di jalan raya melalui skenario kasus nyata dan rubrik keselamatan.
              </p>
            </div>

            {/* Educational Model Information Notice */}
            <div className="mb-12 rounded-2xl bg-white border border-ink/8 p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center shrink-0 text-green-dark">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Refleksi Kesiapan Tanpa Tekanan Nilai</h4>
                  <p className="text-xs text-ink-lighter mt-0.5">
                    Instrumen ini dirancang sebagai panduan telaah insiden aspal bagi komunitas pengemudi ojek online, tanpa tes otomatis atau sistem nilai skor kaku.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/lkpd"
                  className="px-4 py-2 rounded-xl bg-gray-50 border border-ink/10 text-xs font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
                >
                  Buka Kasus LKPD
                </Link>
              </div>
            </div>

            {/* Subject Selector Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {evaluasiData.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? "bg-ink text-white shadow-md scale-105"
                        : "bg-white text-ink-light border border-ink/10 hover:border-ink/20 hover:bg-cream"
                    }`}
                  >
                    Kasus: {item.topic}
                  </button>
                );
              })}
            </div>

            {/* Active Rubric Showcase */}
            <div className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-10 mb-16 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-ink/8">
                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-2 ${currentRubric.badgeColor}`}
                  >
                    Skenario Driver: {currentRubric.topic}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
                    {currentRubric.title}
                  </h2>
                </div>
                <div className="text-xs text-ink-lighter font-mono">
                  {currentRubric.scenarios.length} Skenario Lapangan
                </div>
              </div>

              <p className="text-sm text-ink-light leading-relaxed mb-8">
                {currentRubric.description}
              </p>

              {/* Scenarios and Answers Guide */}
              <div className="space-y-8">
                {currentRubric.scenarios.map((sc, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-ink/10 bg-cream/20 p-6 sm:p-7 space-y-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-red text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-ink leading-snug">
                        {sc.question}
                      </h3>
                    </div>

                    {/* Key Rubric Points */}
                    <div className="bg-white p-5 rounded-2xl border border-ink/5 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink-light flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-green-dark" />
                        Poin Kunci Respons Driver yang Tepat:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-ink-light">
                        {sc.keyPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-ink-lighter shrink-0 mt-2" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Critical safety caveat */}
                    <div className="p-4 rounded-xl bg-red-light/30 border border-red/20 text-xs sm:text-sm text-red-dark flex items-start gap-2.5">
                      <HelpCircle className="w-4 h-4 text-red shrink-0 mt-0.5" />
                      <div>
                        <strong>Fokus Keselamatan (Critical Safety):</strong> {sc.criticalSafety}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Checklist of Self-Competency */}
            <div className="rounded-3xl border border-ink/10 bg-gradient-to-br from-cream to-white p-8 sm:p-10 mb-16">
              <h3 className="text-2xl font-bold text-ink mb-4">
                Daftar Periksa Kesiapan Driver Ojol di Jalan Raya
              </h3>
              <p className="text-xs sm:text-sm text-ink-lighter mb-6">
                Gunakan daftar ini untuk mengevaluasi kesiapan pribadi Anda sebagai penolong pertama di jalanan:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  "Saya menyimpan nomor panggilan darurat 119 dan tahu cara share lokasi presisi di jalan.",
                  "Saya selalu mengutamakan prinsip 3A (tepikan motor & amankan arus kendaraan) sebelum menolong.",
                  "Saya membawa perlengkapan P3K sederhana (kain kasa/perban/sarung tangan) di bagasi motor.",
                  "Saya paham cara balut tekan langsung pada luka perdarahan tanpa melepas lapisan kain pertama.",
                  "Saya tahu cara melindungi kepala korban kejang dengan jaket tanpa menahan paksa tubuhnya.",
                  "Saya tidak akan memasukkan sendok, kopi, atau benda apa pun ke mulut orang yang kejang.",
                  "Saya memahami posisi miring mantap (recovery position) untuk membebaskan jalan napas.",
                  "Saya siap melakukan kompresi dada RJP berkualitas tinggi sambil menunggu ambulans tiba.",
                ].map((check, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-ink/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-dark shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-ink-light font-medium">{check}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="text-center">
              <Link
                href="/materi"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white font-semibold text-sm hover:bg-red transition-all shadow-md active:scale-95"
              >
                Ulas Kembali Modul Kedaruratan Driver
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
