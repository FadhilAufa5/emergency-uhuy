"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Printer,
  Eye,
  CheckCircle2,
  ArrowRight,
  Bike,
  FileCheck,
  X,
  Sparkles,
} from "lucide-react";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

interface LKPDDetail {
  id: string;
  number: string;
  title: string;
  topic: string;
  topicBadge: string;
  duration: string;
  target: string;
  description: string;
  objective: string;
  activities: {
    title: string;
    instructions: string[];
    reflection: string;
  }[];
}

const detailedLKPD: LKPDDetail[] = [
  {
    id: "lkpd-1",
    number: "01",
    title: "LKPD 1 — Respon Balut Tekan Kecelakaan Lalu Lintas",
    topic: "Perdarahan Jalan Raya",
    topicBadge: "bg-red/10 text-red border-red/20",
    duration: "30 Menit",
    target: "Mitra Pengemudi Ojek Online & Relawan Jalan Raya",
    description:
      "Aktivitas studi kasus penanganan perdarahan hebat pengendara di aspal, penerapan direct pressure dengan P3K motor, dan pencegahan syok sebelum ambulans tiba.",
    objective:
      "Mitra ojol mampu mengamankan TKP lalu lintas, mengidentifikasi perdarahan arteri vs vena, melakukan penekanan luka mantap tanpa panik, dan melaporkan titik koordinat presisi ke 119.",
    activities: [
      {
        title: "Aktivitas 1: Amankan Diri & Area Kecelakaan (3A)",
        instructions:
          [
            "Tepikan motor Anda di bahu jalan yang aman dan nyalakan lampu hazard.",
            "Gunakan sarung tangan atau plastik bersih sebelum menyentuh luka korban.",
            "Pastikan arus kendaraan sekitar melambat dan tidak ada bahaya tumpahan bensin/api.",
          ],
        reflection: "Mengapa keselamatan penolong (Aman Diri) harus diutamakan sebelum mendekati korban tabrakan?",
      },
      {
        title: "Aktivitas 2: Balut Tekan & Posisi Cegah Syok",
        instructions:
          [
            "Tekan langsung luka dengan kain bersih/kasa tebal secara kuat dan mantap.",
            "Jika kain basah darah, jangan dilepas; tambahkan kain baru di atasnya.",
            "Baringkan korban telentang dan tinggikan kaki 20–30 cm bila korban lemas dan pucat.",
            "Hubungi 119 dan share live location kepada operator.",
          ],
        reflection: "Mengapa kita tidak boleh sembarangan memasang ikatan torniket tanpa pelatihan medis resmi?",
      },
    ],
  },
  {
    id: "lkpd-2",
    number: "02",
    title: "LKPD 2 — Proteksi Penumpang & Warga Kejang di Ruang Publik",
    topic: "Kejang di Tepi Jalan",
    topicBadge: "bg-blue/10 text-blue border-blue/20",
    duration: "30 Menit",
    target: "Mitra Pengemudi Ojek Online & Relawan Jalan Raya",
    description:
      "Studi kasus pendampingan saat penumpang atau warga di pangkalan ojol tiba-tiba kejang: pengamanan kepala dari aspal dan penanganan jalan napas pascakejang.",
    objective:
      "Mitra ojol mampu bertindak tenang melindungi korban dari benturan keras, mematahkan mitos memasukkan sendok/benda ke mulut, dan memposisikan recovery position.",
    activities: [
      {
        title: "Aktivitas 1: Proteksi Fisik & Hilangkan Mitos",
        instructions:
          [
            "Segera hentikan motor dan bantu korban jika kejang terjadi saat berhenti di tepi jalan.",
            "Letakkan jaket ojol atau kain empuk di bawah kepala korban agar tidak terbentur aspal keras.",
            "Singkirkan motor, helm, dan benda tajam di sekitar korban.",
            "Larang siapa pun memasukkan sendok, kopi, atau jari ke dalam mulut korban.",
          ],
        reflection: "Apa bahaya fatal jika seseorang memasukkan benda keras ke mulut orang yang sedang kejang?",
      },
      {
        title: "Aktivitas 2: Posisi Miring Mantap (Recovery Position)",
        instructions:
          [
            "Setelah gerakan kejang berhenti, miringkan tubuh korban ke satu sisi dengan lembut.",
            "Pastikan jalan napas bersih dari cairan ludah atau muntahan.",
            "Dampingi korban hingga kesadarannya pulih utuh, dan hubungi 119 bila kejang lebih dari 5 menit.",
          ],
        reflection: "Kapan kondisi kejang di jalan raya wajib segera dilarikan ke IGD dengan ambulans?",
      },
    ],
  },
  {
    id: "lkpd-3",
    number: "03",
    title: "LKPD 3 — Simulasi Respon BHD & CPR untuk Driver Siaga",
    topic: "BHD Jalanan & Halte",
    topicBadge: "bg-green/10 text-green-dark border-green/30",
    duration: "35 Menit",
    target: "Mitra Pengemudi Ojek Online & Relawan Jalan Raya",
    description:
      "Panduan rantai keselamatan hidup saat menemukan korban kolaps mendadak tidak bernapas di pangkalan ojol, SPBU, atau trotoar jalan raya.",
    objective:
      "Mitra ojol memahami urutan cek respons korban, aktivasi cepat sistem 119/112, dan teknik kompresi dada tanpa henti (hands-only CPR) hingga tim medis tiba.",
    activities: [
      {
        title: "Aktivitas 1: Cek Respons & Panggilan Darurat 119",
        instructions:
          [
            "Tepuk kedua pundak korban dengan tegas dan panggil dengan suara lantang.",
            "Bila tidak ada respons dan napas berhenti/hanya megap-megap, langsung teriak minta bantuan rekan sekitar.",
            "Telepon 119: sebutkan nama driver, lokasi spesifik, dan laporkan 'korban tidak bernapas'.",
          ],
        reflection: "Mengapa kompresi dada harus segera dimulai tanpa menunda waktu dalam kasus henti jantung?",
      },
      {
        title: "Aktivitas 2: Kompresi Dada Berkualitas (Hands-Only CPR)",
        instructions:
          [
            "Letakkan tumit telapak tangan di tengah dada korban, kunci jari tangan satunya di atasnya.",
            "Posisi lengan tegak lurus, tekan dada sedalam 5-6 cm dengan kecepatan 100-120 kali per menit.",
            "Biarkan dada kembali mengembang sempurna setiap kali ditekan.",
            "Lakukan bergantian dengan rekan driver lain setiap 2 menit jika merasa lelah.",
          ],
        reflection: "Mengapa peran driver ojol sebagai penolong pertama sangat menentukan peluang selamat korban henti jantung?",
      },
    ],
  },
];

export default function LkpdPage() {
  const [selectedLKPD, setSelectedLKPD] = useState<LKPDDetail | null>(null);

  const handlePrint = () => {
    window.print();
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
              <span className="font-semibold text-ink">Lembar Kerja Driver (LKPD)</span>
            </nav>

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-lavender-light text-ink border border-lavender/30 mb-4">
                <Bike className="w-3.5 h-3.5" />
                Studi Kasus Kedaruratan Lapangan Ojol
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink mb-4">
                Lembar Studi Kasus{" "}
                <span className="font-handwritten text-blue text-5xl sm:text-6xl inline-block -rotate-1">
                  Driver Siaga
                </span>
              </h1>
              <p className="text-base sm:text-lg text-ink-light leading-relaxed">
                Koleksi skenario nyata di aspal untuk melatih kecepatan berpikir dan ketepatan tindakan mitra pengemudi ojek online menghadapi insiden kecelakaan, kejang penumpang, dan kolaps di jalan raya.
              </p>
            </div>

            {/* Information Alert */}
            <div className="mb-12 rounded-2xl bg-white border border-ink/8 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center shrink-0 text-blue">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Panduan Siap Baca di Ponsel Driver</h4>
                  <p className="text-xs text-ink-lighter mt-0.5">
                    Klik <strong>&ldquo;Buka Studi Kasus&rdquo;</strong> untuk mempelajari langkah taktis, panduan diskusi di pangkalan (basecamp), atau mencetaknya sebagai pegangan komunitas relawan ojol.
                  </p>
                </div>
              </div>
              <div className="text-xs text-ink-lighter font-mono">
                Total: 3 Kasus Jalan Raya
              </div>
            </div>

            {/* LKPD Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {detailedLKPD.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col rounded-3xl border border-ink/8 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-ink/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${item.topicBadge}`}
                    >
                      {item.topic}
                    </span>
                    <span className="text-xs font-mono font-bold text-ink-lighter">
                      LKPD {item.number}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-ink mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-ink-lighter leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-ink/5 text-xs text-ink-light">
                    <div className="flex items-center justify-between">
                      <span className="text-ink-lighter">Waktu Baca:</span>
                      <span className="font-semibold">{item.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ink-lighter">Sasaran Pengguna:</span>
                      <span className="font-semibold truncate max-w-[170px]">Driver Ojol & Relawan</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ink-lighter">Fokus Skenario:</span>
                      <span className="font-semibold">{item.activities.length} Tindakan Kunci</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedLKPD(item)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-ink text-white font-semibold text-xs hover:bg-blue transition-colors shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Buka Studi Kasus
                    </button>
                    <button
                      onClick={() => {
                        setSelectedLKPD(item);
                        setTimeout(() => window.print(), 300);
                      }}
                      title="Cetak Panduan"
                      className="p-3 rounded-xl border border-ink/10 bg-gray-50 hover:bg-ink hover:text-white transition-colors text-ink"
                    >
                      <Printer className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pedoman Komunitas & Basecamp Driver */}
            <div className="rounded-3xl border border-yellow/30 bg-yellow-light/30 p-8 sm:p-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink mb-3">
                <Sparkles className="w-4 h-4 text-yellow" />
                Panduan untuk Koordinator Basecamp & Komunitas Driver
              </div>
              <h3 className="text-2xl font-bold text-ink mb-3">
                Memanfaatkan LKPD dalam Kopdar & Briefing Komunitas Ojol
              </h3>
              <p className="text-sm text-ink-light leading-relaxed mb-6 max-w-4xl">
                Lembar studi kasus ini didesain agar mudah dibahas saat kumpul santai di pangkalan (*basecamp/kopdar*). Jadikan skenario ini bahan simulasi role-play: siapa yang memarkir motor pengaman lalu lintas, siapa yang menekan luka pendarahan, dan siapa yang menelepon 119 sambil mengabarkan patokan jalan terdekat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/materi"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ink text-white text-xs font-semibold hover:bg-red transition-colors"
                >
                  Pelajari Modul Kedaruratan Jalan
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/evaluasi"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-ink/10 text-xs font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
                >
                  Uji Kasus di Evaluasi
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Modal Viewer for LKPD */}
        {selectedLKPD && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl border border-ink/10 shadow-2xl flex flex-col overflow-hidden">
              {/* Modal Header */}
              <div className="p-6 border-b border-ink/10 flex items-center justify-between bg-cream/40">
                <div>
                  <span
                    className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold border mb-2 ${selectedLKPD.topicBadge}`}
                  >
                    {selectedLKPD.topic} — Panduan Lapangan Driver
                  </span>
                  <h3 className="text-xl font-extrabold text-ink leading-tight">
                    {selectedLKPD.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-ink text-white text-xs font-semibold hover:bg-blue transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    Cetak
                  </button>
                  <button
                    onClick={() => setSelectedLKPD(null)}
                    className="p-2 rounded-xl text-ink-light hover:bg-gray-100 transition-colors"
                    aria-label="Tutup modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body Scrollable */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-ink">
                {/* Meta details */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-gray-50 border border-ink/5 text-xs">
                  <div>
                    <span className="text-ink-lighter block">Waktu:</span>
                    <strong className="text-ink">{selectedLKPD.duration}</strong>
                  </div>
                  <div>
                    <span className="text-ink-lighter block">Target:</span>
                    <strong className="text-ink">{selectedLKPD.target}</strong>
                  </div>
                  <div>
                    <span className="text-ink-lighter block">Kesiapan:</span>
                    <strong className="text-green-dark">Siap Praktik Lapangan</strong>
                  </div>
                </div>

                {/* Tujuan */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-lighter mb-1.5">
                    Tujuan Respon Driver:
                  </h4>
                  <p className="text-sm text-ink-light bg-blue-light/20 p-4 rounded-2xl border border-blue/15 leading-relaxed">
                    {selectedLKPD.objective}
                  </p>
                </div>

                {/* Activities */}
                <div className="space-y-6">
                  {selectedLKPD.activities.map((act, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-ink/10 p-5 bg-white space-y-4"
                    >
                      <h4 className="text-base font-bold text-ink flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-ink text-white text-xs flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        {act.title}
                      </h4>

                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-ink-lighter uppercase">
                          Langkah Operasional Driver:
                        </div>
                        <ul className="space-y-1.5">
                          {act.instructions.map((inst, i) => (
                            <li
                              key={i}
                              className="text-xs sm:text-sm text-ink-light flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0 mt-2" />
                              <span>{inst}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-ink/5 bg-cream/40 p-3.5 rounded-xl">
                        <div className="text-xs font-bold text-red uppercase tracking-wider mb-1">
                          Pertimbangan Kritis Keselamatan di Jalan:
                        </div>
                        <p className="text-xs sm:text-sm italic text-ink-light">
                          &ldquo;{act.reflection}&rdquo;
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <div className="p-4 rounded-xl bg-gray-50 border border-ink/5 text-[11px] text-ink-lighter">
                  * Instrumen LKPD ini disesuaikan sebagai simulasi tanggap darurat jalan raya bagi komunitas pengemudi ojek online pada platform E-Art Gallery of Emergency.
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-ink/10 bg-gray-50 flex justify-end">
                <button
                  onClick={() => setSelectedLKPD(null)}
                  className="px-5 py-2 rounded-xl bg-ink text-white text-xs font-semibold hover:bg-gray-800 transition-colors"
                >
                  Tutup Lembar Kasus
                </button>
              </div>
            </div>
          </div>
        )}

        <Footer />
        <BackToTop />
      </div>
    </SmoothScroll>
  );
}
