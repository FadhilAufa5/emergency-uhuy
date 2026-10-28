import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  PhoneCall,
  Share2,
  Bookmark,
  ShieldCheck,
  Info,
  Clock,
  Droplet,
  HeartPulse,
  Activity,
} from "lucide-react";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import { MedicalIllustration } from "@/components/illustrations/MedicalIllustration";
import BleedingTypesIllustration from "@/components/illustrations/BleedingTypesIllustration";
import FractureTypesIllustration from "@/components/illustrations/FractureTypesIllustration";
import { materials, MaterialDetail } from "@/data/materials";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const instant = false;

export async function generateStaticParams() {
  return materials.map((m) => ({
    slug: m.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const material = materials.find((m) => m.slug === slug);
  if (!material) return { title: "Materi Tidak Ditemukan" };

  return {
    title: `${material.title} — E-Art Gallery of Emergency`,
    description: material.description,
  };
}

export default async function MaterialDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const material = materials.find((m) => m.slug === slug);

  if (!material) {
    notFound();
  }

  const illuType =
    material.slug === "perdarahan"
      ? "bleeding"
      : material.slug === "pingsan"
      ? "pingsan"
      : material.slug === "fraktur"
      ? "fraktur"
      : "bleeding";

  const relatedMaterials = materials.filter((m) =>
    material.relatedSlugs.includes(m.slug)
  );

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-cream text-ink">
        <Navbar />

        <main className="pt-28 pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Top Navigation & Breadcrumb */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <nav className="flex items-center gap-2 text-xs text-ink-lighter">
                <Link href="/" className="hover:text-red transition-colors">
                  Beranda
                </Link>
                <span>/</span>
                <Link href="/materi" className="hover:text-red transition-colors">
                  Materi
                </Link>
                <span>/</span>
                <span className="font-semibold text-ink">{material.title}</span>
              </nav>

              <Link
                href="/materi"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-light hover:text-red transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Kembali ke Katalog Materi
              </Link>
            </div>

            {/* Header Hero Banner */}
            <div className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-10 lg:p-12 mb-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${material.categoryColor}`}
                  >
                    {material.category}
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink mb-4 leading-tight">
                    {material.title}
                  </h1>
                  <p className="text-lg sm:text-xl font-medium text-ink-light mb-4">
                    {material.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-ink-lighter leading-relaxed mb-6">
                    {material.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 text-xs font-semibold text-ink-light">
                      <ShieldCheck className="w-4 h-4 text-green-dark" />
                      Pedoman Pertolongan Pertama Medis
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 text-xs font-semibold text-ink-light">
                      <PhoneCall className="w-4 h-4 text-red" />
                      Panggilan Darurat: 112 / 119
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div
                    className={`w-full max-w-md h-72 sm:h-80 rounded-3xl ${material.bgColor} p-3 sm:p-4 flex items-center justify-center shadow-inner overflow-hidden`}
                  >
                    <MedicalIllustration
                      type={illuType}
                      className="w-full h-full object-cover rounded-2xl shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Layout: Sidebar TOC + Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Quick Table of Contents Sidebar */}
              <aside className="lg:col-span-3">
                <div className="sticky top-24 rounded-2xl border border-ink/8 bg-white p-5 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink-light">
                    Daftar Isi Modul
                  </h3>
                  <nav className="space-y-1.5 text-xs">
                    <a
                      href="#pengertian"
                      className="block px-3 py-2 rounded-lg font-medium text-ink-light hover:bg-cream hover:text-red transition-colors"
                    >
                      1. Pengertian
                    </a>
                    {material.slug === "perdarahan" && (
                      <a
                        href="#jenis-perdarahan"
                        className="block px-3 py-2 rounded-lg font-bold text-red hover:bg-red-light transition-colors"
                      >
                        • Ilustrasi 3 Jenis Perdarahan
                      </a>
                    )}
                    {material.slug === "pingsan" && (
                      <a
                        href="#kasus-pingsan"
                        className="block px-3 py-2 rounded-lg font-bold text-blue hover:bg-blue-light transition-colors"
                      >
                        • Ilustrasi Kasus Korban Pingsan
                      </a>
                    )}
                    {material.slug === "fraktur" && (
                      <a
                        href="#jenis-fraktur"
                        className="block px-3 py-2 rounded-lg font-bold text-green-dark hover:bg-green-light transition-colors"
                      >
                        • Ilustrasi Jenis Fraktur (Tertutup & Terbuka)
                      </a>
                    )}
                    <a
                      href="#tanda"
                      className="block px-3 py-2 rounded-lg font-medium text-ink-light hover:bg-cream hover:text-red transition-colors"
                    >
                      2. Tanda Kondisi
                    </a>
                    <a
                      href="#langkah"
                      className="block px-3 py-2 rounded-lg font-medium text-ink-light hover:bg-cream hover:text-red transition-colors"
                    >
                      3. Pertolongan Awal
                    </a>
                    <a
                      href="#hindari"
                      className="block px-3 py-2 rounded-lg font-medium text-ink-light hover:bg-cream hover:text-red transition-colors"
                    >
                      4. Yang Harus Dihindari
                    </a>
                    <a
                      href="#kapan-darurat"
                      className="block px-3 py-2 rounded-lg font-medium text-ink-light hover:bg-cream hover:text-red transition-colors"
                    >
                      5. Hubungi 112 / 119
                    </a>
                    <a
                      href="#ringkasan"
                      className="block px-3 py-2 rounded-lg font-medium text-ink-light hover:bg-cream hover:text-red transition-colors"
                    >
                      6. Ringkasan Kunci
                    </a>
                  </nav>

                  {/* Hotline Dial widget */}
                  <div className="pt-4 border-t border-ink/5">
                    <div className="rounded-xl bg-red-light p-3.5 text-center">
                      <div className="text-[11px] font-bold text-red uppercase tracking-wider">
                        Kondisi Darurat Medis
                      </div>
                      <div className="text-xl font-extrabold text-red-dark mt-0.5">
                        112 / 119
                      </div>
                      <p className="text-[10px] text-ink-lighter mt-1 leading-snug">
                        Layanan Tanggap Kedaruratan Bebas Pulsa 24 Jam.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content Articles */}
              <div className="lg:col-span-9 space-y-10">
                {/* 1. Pengertian */}
                <section
                  id="pengertian"
                  className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-9 scroll-mt-24 shadow-sm"
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-cream text-ink text-xs font-bold mb-3 border border-ink/10">
                    Bagian 01
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-4">
                    {material.pengertian.title}
                  </h2>
                  <p className="text-sm sm:text-base text-ink-light leading-relaxed">
                    {material.pengertian.content}
                  </p>
                  {material.pengertian.note && (
                    <div className="mt-4 p-4 rounded-2xl bg-cream/70 border border-ink/10 flex items-start gap-3">
                      <Info className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                        {material.pengertian.note}
                      </p>
                    </div>
                  )}
                </section>

                {/* Khusus Perdarahan: Tampilkan Ilustrasi Jenis Perdarahan (Arteri, Vena, Kapiler) */}
                {material.slug === "perdarahan" && (
                  <section id="jenis-perdarahan" className="scroll-mt-24">
                    <BleedingTypesIllustration />
                  </section>
                )}

                {/* Khusus Pingsan: Tampilkan Studi Kasus Ilustrasi Pingsan (Sinkop) */}
                {material.slug === "pingsan" && (
                  <section
                    id="kasus-pingsan"
                    className="scroll-mt-24 rounded-3xl border border-blue/20 bg-white p-6 sm:p-9 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-ink/8">
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue/10 text-blue border border-blue/20 mb-2">
                          <Activity className="w-3.5 h-3.5" />
                          Studi Kasus Lapangan
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
                          Identifikasi Situasi Korban Pingsan di Jalan Raya
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-lighter mt-1">
                          Pelajari skenario visual pengemudi yang kolaps akibat kelelahan dan penurunan perfusi serebral global sementara:
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-blue-light/30 rounded-3xl p-6 sm:p-8 border border-blue/15">
                      <div className="lg:col-span-5 flex flex-col items-center justify-center">
                        <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-ink/10 shadow-md group bg-white">
                          <img
                            src="/pingsan.jpg"
                            alt="Ilustrasi Kasus Korban Pingsan Jalan Raya"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                            <span className="text-[11px] font-bold text-blue-light uppercase tracking-wider">
                              Karya Seni Kedaruratan
                            </span>
                            <span className="text-white text-xs sm:text-sm font-bold leading-snug">
                              Pengemudi Tergeletak Akibat Dehidrasi & Kelelahan
                            </span>
                          </div>
                        </div>
                        <div className="text-center mt-3 text-xs font-medium text-ink-lighter">
                          Model Kasus: Sinkop dengan Kesadaran Menurun Sesaat
                        </div>
                      </div>

                      <div className="lg:col-span-7 space-y-4">
                        <div className="p-4 rounded-2xl bg-white border border-blue/20">
                          <h4 className="text-sm font-bold text-blue mb-1">
                            1. Tanda Sebelum Korban Terjatuh
                          </h4>
                          <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                            Mengantuk, menguap berulang, wajah terlihat sangat pucat, kepala pusing berkunang-kunang, dan seluruh tubuh terasa lemas tanpa tenaga.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-blue/20">
                          <h4 className="text-sm font-bold text-blue mb-1">
                            2. Tanda Saat Korban Tergeletak
                          </h4>
                          <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                            Tidak merespons saat dipanggil sesaat, napas dan denyut nadi masih teraba lemah, serta umumnya sadar kembali dalam kurun waktu kurang dari 1 menit.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-blue/20">
                          <h4 className="text-sm font-bold text-blue mb-1">
                            3. Respons Pertolongan Kritis
                          </h4>
                          <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                            Amankan area jalan dari lalu lintas motor, baringkan datar dan tinggikan kedua tungkai ±30 cm, longgarkan pakaian/helm, dan dilarang menampar atau memberi minum sampai sadar penuh.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {/* Khusus Fraktur: Tampilkan Ilustrasi Jenis Fraktur (Tertutup & Terbuka) */}
                {material.slug === "fraktur" && (
                  <section id="jenis-fraktur" className="scroll-mt-24">
                    <FractureTypesIllustration />
                  </section>
                )}

                {/* 2. Tanda yang Perlu Dikenali */}
                <section
                  id="tanda"
                  className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-9 scroll-mt-24 shadow-sm"
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-yellow-light text-ink text-xs font-bold mb-3 border border-yellow/30">
                    Bagian 02
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-2">
                    {material.tanda.title}
                  </h2>
                  <p className="text-xs text-ink-lighter mb-6">
                    Waspadai tanda-tanda berikut pada korban untuk segera mengambil tindakan pertolongan:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                    {material.tanda.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-cream/50 border border-ink/5"
                      >
                        <AlertTriangle className="w-4 h-4 text-red shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-ink-light font-medium leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {material.tanda.note && (
                    <div className="mt-4 p-4 rounded-2xl bg-yellow-light/60 border border-yellow/40 flex items-start gap-3">
                      <Info className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm font-bold text-ink leading-relaxed">
                        Catatan Penting: {material.tanda.note}
                      </p>
                    </div>
                  )}
                </section>

                {/* 3. Langkah Pertolongan Pertama */}
                <section
                  id="langkah"
                  className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-9 scroll-mt-24 shadow-sm"
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-light text-blue text-xs font-bold mb-3 border border-blue/20">
                    Bagian 03 — Panduan Langkah Pertolongan
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-2">
                    {material.langkah.title}
                  </h2>
                  <p className="text-xs text-ink-lighter mb-8">
                    Lakukan tindakan secara tenang, berurutan, dan prioritaskan keselamatan penolong serta korban:
                  </p>

                  <div className="space-y-4">
                    {material.langkah.steps.map((step) => (
                      <div
                        key={step.number}
                        className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-2xl bg-gray-50/80 border border-ink/5 hover:border-ink/15 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-ink text-white font-extrabold text-base flex items-center justify-center shrink-0 shadow-sm">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-bold text-ink mb-1">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Critical Action Banner */}
                  {material.langkah.criticalInstruction && (
                    <div className="mt-7 p-5 rounded-2xl bg-red-light/50 border border-red/30 flex items-start gap-4 shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-red text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-extrabold uppercase tracking-wider text-red">
                          Instruksi Kritis untuk Penolong
                        </div>
                        <p className="text-sm sm:text-base font-extrabold text-ink mt-0.5 leading-relaxed">
                          {material.langkah.criticalInstruction}
                        </p>
                      </div>
                    </div>
                  )}
                </section>

                {/* 4. Yang Harus Dihindari */}
                <section
                  id="hindari"
                  className="rounded-3xl border border-red/20 bg-red-light/20 p-7 sm:p-9 scroll-mt-24 shadow-sm"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red text-white text-xs font-bold mb-3">
                    <XCircle className="w-3.5 h-3.5" />
                    Penting: Jangan Lakukan Hal Ini
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-2">
                    {material.hindari.title}
                  </h2>
                  <p className="text-xs text-ink-lighter mb-6">
                    Tindakan yang keliru dapat membahayakan keselamatan korban. Hindari kesalahan berikut:
                  </p>

                  <div className="space-y-3">
                    {material.hindari.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white border border-red/15"
                      >
                        <XCircle className="w-4 h-4 text-red shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-ink-light font-medium leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 5. Kapan Membutuhkan Bantuan Darurat 112 / 119 */}
                <section
                  id="kapan-darurat"
                  className="rounded-3xl border border-yellow/40 bg-yellow-light/30 p-7 sm:p-9 scroll-mt-24 shadow-sm"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow text-ink text-xs font-bold mb-3">
                    <PhoneCall className="w-3.5 h-3.5" />
                    Kondisi Kritis
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-2">
                    {material.kapanDarurat.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-ink-light mb-4">
                    {material.kapanDarurat.content}
                  </p>

                  <ul className="space-y-2.5">
                    {material.kapanDarurat.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red shrink-0 mt-2" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* 6. Ringkasan Modul */}
                <section
                  id="ringkasan"
                  className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-9 scroll-mt-24 shadow-sm"
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-green-light text-green-dark text-xs font-bold mb-3 border border-green/30">
                    Ringkasan Modul
                  </div>
                  <h2 className="text-2xl font-bold text-ink mb-4">
                    Kesimpulan Pembelajaran
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-light leading-relaxed mb-6">
                    {material.ringkasan}
                  </p>

                  {/* Disclaimer banner */}
                  <div className="p-4 rounded-2xl bg-cream border border-ink/10 flex items-start gap-3">
                    <Info className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                    <p className="text-xs text-ink-lighter leading-relaxed">
                      <strong>Pemberitahuan Medis:</strong> Informasi ini disajikan murni untuk keperluan edukasi publik dan literasi pertolongan pertama, bukan pengganti sertifikasi resmi BHD/CPR atau penanganan medis profesional dari dokter dan tenaga kesehatan.
                    </p>
                  </div>
                </section>

                {/* Navigation to Quiz & Other Materials */}
                <div className="pt-8 border-t border-ink/10 space-y-6">
                  {/* Evaluasi CTA Banner */}
                  <div className="rounded-3xl bg-ink text-white p-7 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-red-light mb-2">
                        Evaluasi Pemahaman
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold">
                        Uji Pemahaman Melalui Kuis Evaluasi
                      </h3>
                      <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-lg">
                        Setelah mempelajari seluruh materi, ukur pemahaman Anda dengan 5 kuis interaktif berstandar kedaruratan.
                      </p>
                    </div>
                    <Link
                      href="/evaluasi"
                      className="shrink-0 px-6 py-3.5 rounded-2xl bg-red text-white text-xs sm:text-sm font-bold hover:bg-red-dark transition-colors shadow-md"
                    >
                      Buka Kuis Evaluasi
                    </Link>
                  </div>

                  {/* Related Materials Section */}
                  {relatedMaterials.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-4">
                        Modul Materi Lainnya
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {relatedMaterials.map((rel) => (
                          <Link
                            key={rel.slug}
                            href={`/materi/${rel.slug}`}
                            className="group p-5 rounded-2xl border border-ink/8 bg-white hover:border-ink/20 hover:shadow-md transition-all flex items-center justify-between"
                          >
                            <div>
                              <span className="text-[11px] font-bold text-red uppercase tracking-wider">
                                {rel.category}
                              </span>
                              <div className="text-base font-bold text-ink group-hover:text-red transition-colors">
                                {rel.title}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-ink-lighter group-hover:text-red group-hover:translate-x-1 transition-transform" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
