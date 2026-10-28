"use client";

import { useState } from "react";
import { AlertTriangle, ShieldCheck, Activity, Info, Sparkles, ShieldAlert, CheckCircle2 } from "lucide-react";
import FractureIllustration from "./FractureIllustration";

export interface FractureTypeData {
  id: "tertutup" | "terbuka";
  name: string;
  definisi: string;
  kondisiKulit: string;
  tanda: string[];
  tingkatBahaya: string;
  badgeBahaya: string;
  warnaTema: string;
  tindakanUtama: string;
  pantangan: string;
}

export const fractureTypesData: FractureTypeData[] = [
  {
    id: "tertutup",
    name: "Fraktur Tertutup (Closed Fracture)",
    definisi:
      "Fraktur tertutup tidak ada fragmen tulang yang menembus kulit dan karena itu lokasi fraktur tidak terkontaminasi oleh lingkungan kulit luar.",
    kondisiKulit: "Kulit Utuh (Tidak Ada Luka Tembus)",
    tanda: [
      "Nyeri hebat di area benturan",
      "Bengkak dan kemerahan / memar (hematoma)",
      "Bentuk anggota tubuh tampak berubah (deformitas)",
      "Sulit atau tidak dapat digerakkan",
    ],
    tingkatBahaya:
      "Risiko infeksi lebih rendah, tetapi tetap membutuhkan penanganan medis karena dapat merusak pembuluh darah dan saraf di dalam jaringan.",
    badgeBahaya: "bg-blue/10 text-blue border-blue/20",
    warnaTema: "border-blue/30 bg-blue-light/30",
    tindakanUtama:
      "Kompres dingin dengan es yang dibungkus kain selama sekitar 20 menit pada area bengkak, lalu imobilisasi dengan bidai jika terlatih.",
    pantangan:
      "Jangan menempelkan es langsung ke kulit dan jangan menggerakkan atau memijat bagian yang patah.",
  },
  {
    id: "terbuka",
    name: "Fraktur Terbuka (Open / Compound Fracture)",
    definisi:
      "Fraktur terbuka adalah fraktur dimana relasi melalui kondisi eksternal terjadi pada kulit (fragmen tulang menembus keluar atau terdapat luka robek mencapai tulang).",
    kondisiKulit: "Kulit Robek / Tulang Menembus Keluar",
    tanda: [
      "Perdarahan aktif di area patahan",
      "Ujung tulang terlihat menonjol keluar menembus kulit",
      "Nyeri hebat yang mendalam",
      "Bengkak dan perubahan bentuk ekstremitas",
    ],
    tingkatBahaya:
      "Lebih berat karena risiko perdarahan banyak dan infeksi tulang (osteomielitis) tinggi, sehingga membutuhkan pertolongan medis bedah segera.",
    badgeBahaya: "bg-red/10 text-red border-red/20",
    warnaTema: "border-red/30 bg-red-light/30",
    tindakanUtama:
      "Tutup luka dengan kain bersih atau kassa steril. Tekan lembut di sekitar luka untuk kendalikan perdarahan tanpa menekan ujung tulang.",
    pantangan:
      "DILARANG KERAS mencoba meluruskan tulang atau memasukkan kembali ujung tulang yang menonjol ke dalam kulit!",
  },
];

export default function FractureTypesIllustration() {
  const [selectedType, setSelectedType] = useState<"tertutup" | "terbuka">("tertutup");
  const activeData = fractureTypesData.find((f) => f.id === selectedType)!;

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-9 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow/10 text-yellow-dark border border-yellow/40 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-yellow" />
            Ilustrasi Medis Komparatif
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-ink">
            Mengenali Fraktur Tertutup vs Fraktur Terbuka
          </h3>
          <p className="text-xs sm:text-sm text-ink-lighter mt-1">
            Pahami perbedaan karakteristik klinis, risiko komplikasi, dan prosedur pertolongan pertama di lapangan.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 p-1 bg-cream rounded-2xl border border-ink/10 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setSelectedType("tertutup")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedType === "tertutup"
                ? "bg-blue text-white shadow-sm"
                : "text-ink-light hover:text-ink hover:bg-white/60"
            }`}
          >
            Fraktur Tertutup
          </button>
          <button
            type="button"
            onClick={() => setSelectedType("terbuka")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedType === "terbuka"
                ? "bg-red text-white shadow-sm"
                : "text-ink-light hover:text-ink hover:bg-white/60"
            }`}
          >
            Fraktur Terbuka
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Animated SVG Fracture Illustration */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-ink/10 shadow-md bg-white">
            <FractureIllustration
              type={selectedType}
              className="w-full"
            />
          </div>
          <span className="text-[11px] font-semibold text-ink-lighter mt-2.5 text-center">
            {selectedType === "tertutup"
              ? "Ilustrasi Kasus: Fraktur Tertutup — Imobilisasi bidai & kompres dingin kain 20 menit"
              : "Ilustrasi Kasus: Fraktur Terbuka — Tutup kassa steril & larangan meluruskan tulang"}
          </span>
        </div>

        {/* Right: Detailed Characteristics & Actions */}
        <div className="lg:col-span-7 space-y-4">
          <div className={`p-4 rounded-2xl border ${activeData.warnaTema}`}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${activeData.badgeBahaya}`}>
                {activeData.kondisiKulit}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-ink leading-relaxed">
              {activeData.definisi}
            </p>
          </div>

          {/* Tanda-tanda */}
          <div className="p-4 rounded-2xl bg-cream/40 border border-ink/5">
            <h5 className="text-xs font-bold text-ink uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-red" />
              Tanda-Tanda Klinis:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeData.tanda.map((t, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-ink-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-red shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bahaya & Penanganan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-xs">
              <div className="font-bold text-ink mb-1 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-green-dark" />
                Tindakan Utama:
              </div>
              <p className="text-ink-lighter leading-relaxed">
                {activeData.tindakanUtama}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-red-light/30 border border-red/20 shadow-xs">
              <div className="font-bold text-red mb-1 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-red" />
                Larangan Keras:
              </div>
              <p className="text-ink-light leading-relaxed">
                {activeData.pantangan}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
