"use client";

import { useState } from "react";
import { Droplet, Activity, AlertTriangle, ShieldAlert, HeartCrack, Sparkles } from "lucide-react";
import BloodVesselIllustration from "./BloodVesselIllustration";

export interface BleedingTypeData {
  id: "arteri" | "vena" | "kapiler";
  name: string;
  pembuluh: string;
  karakteristik: string;
  warna: string;
  hexColor: string;
  aliran: string;
  tingkatBahaya: string;
  badgeBahaya: string;
  urgensi: string;
  deskripsi: string;
}

export const bleedingTypesData: BleedingTypeData[] = [
  {
    id: "arteri",
    name: "Perdarahan Arteri",
    pembuluh: "Pembuluh Nadi (Arteri)",
    karakteristik: "Darah berwarna merah cerah",
    warna: "Merah Cerah (Kaya Oksigen)",
    hexColor: "#F04438",
    aliran: "Memancar atau menyembur keluar mengikuti detak jantung",
    tingkatBahaya: "Paling parah dan sulit dikendalikan karena tekanan darah tinggi",
    badgeBahaya: "bg-red/10 text-red border-red/30",
    urgensi: "Kritis — Butuh Penanganan Segera",
    deskripsi:
      "Arteri membawa darah bertekanan tinggi dari jantung ke seluruh tubuh. Jika arteri robek, darah akan menyembur kuat seirama dengan detak jantung, menyebabkan korban kehilangan banyak darah dalam waktu sangat singkat.",
  },
  {
    id: "vena",
    name: "Perdarahan Vena",
    pembuluh: "Pembuluh Balik (Vena)",
    karakteristik: "Darah berwarna merah tua atau gelap",
    warna: "Merah Tua / Gelap (Rendah Oksigen)",
    hexColor: "#991B1B",
    aliran: "Mengalir secara stabil dan terus-menerus (tidak menyembur)",
    tingkatBahaya:
      "Bisa mengancam nyawa jika pembuluh darah besar rusak, tetapi umumnya lebih mudah dikendalikan daripada arteri",
    badgeBahaya: "bg-red-dark/10 text-red-dark border-red-dark/30",
    urgensi: "Bahaya Tinggi — Balut Tekan Kuat",
    deskripsi:
      "Vena membawa darah kembali ke jantung dengan tekanan lebih rendah. Alirannya konsisten dan tidak menyembur. Kerusakan pada vena besar (seperti di leher atau paha) tetap dapat mengancam nyawa jika tidak segera dibalut tekan.",
  },
  {
    id: "kapiler",
    name: "Perdarahan Kapiler",
    pembuluh: "Pembuluh Halus (Kapiler)",
    karakteristik: "Darah berwarna merah",
    warna: "Merah Sedang (Luka Permukaan)",
    hexColor: "#DC2626",
    aliran: "Merembes secara perlahan dari permukaan kulit (seperti pada luka lecet)",
    tingkatBahaya:
      "Paling ringan, mudah dihentikan, dan sering kali terasa lebih nyeri",
    badgeBahaya: "bg-yellow/20 text-ink border-yellow/40",
    urgensi: "Ringan — Bersihkan & Tutup Luka",
    deskripsi:
      "Kapiler adalah pembuluh darah mikroskopis di permukaan kulit. Perdarahan kapiler biasa terjadi pada luka lecet aspal atau goresan. Alirannya hanya merembes perlahan dan mudah dihentikan dengan sedikit penekanan kain bersih.",
  },
];

export default function BleedingTypesIllustration() {
  const [activeTab, setActiveTab] = useState<"arteri" | "vena" | "kapiler">("arteri");
  const activeType = bleedingTypesData.find((b) => b.id === activeTab) || bleedingTypesData[0];

  return (
    <div className="rounded-3xl border border-red/20 bg-white p-6 sm:p-9 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-ink/8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red/10 text-red border border-red/20 mb-2">
            <Droplet className="w-3.5 h-3.5 fill-red" />
            Ilustrasi Identifikasi Jenis Perdarahan
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
            Mengenal Perbedaan 3 Jenis Pembuluh Darah
          </h3>
          <p className="text-xs sm:text-sm text-ink-lighter mt-1">
            Gunakan panduan visual di bawah ini untuk membedakan karakteristik warna, pola aliran, dan tingkat bahaya perdarahan di lapangan:
          </p>
        </div>
      </div>

      {/* Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {bleedingTypesData.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                isActive
                  ? "bg-red text-white border-red shadow-md scale-[1.02]"
                  : "bg-cream/40 border-ink/8 hover:bg-cream hover:border-ink/20 text-ink"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : item.badgeBahaya
                  }`}
                >
                  {item.id.toUpperCase()}
                </span>
                <span
                  className="w-3.5 h-3.5 rounded-full border border-white/40"
                  style={{ backgroundColor: item.hexColor }}
                />
              </div>
              <h4 className="font-extrabold text-base leading-snug">{item.name}</h4>
              <p
                className={`text-xs mt-1 line-clamp-1 ${
                  isActive ? "text-white/80" : "text-ink-lighter"
                }`}
              >
                {item.aliran}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Type Detail Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-cream/30 rounded-3xl p-6 sm:p-8 border border-ink/8">
        {/* Visual Artwork Showcase — animated SVG vessel illustration */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full rounded-2xl overflow-hidden border border-ink/10 shadow-md bg-white">
            <BloodVesselIllustration
              type={activeType.id}
              className="w-full"
            />
          </div>
          <div className="text-center mt-3 text-xs font-medium text-ink-lighter">
            Model Pembuluh: {activeType.pembuluh}
          </div>
        </div>

        {/* Detailed Characteristics Content */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full border ${activeType.badgeBahaya}`}
            >
              {activeType.urgensi}
            </span>
            <span className="text-xs font-bold text-ink-light bg-white px-3 py-1 rounded-full border border-ink/10">
              {activeType.pembuluh}
            </span>
          </div>

          <h4 className="text-2xl font-extrabold text-ink">{activeType.name}</h4>
          <p className="text-sm text-ink-light leading-relaxed">{activeType.deskripsi}</p>

          {/* Characteristics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-white border border-ink/5">
              <div className="text-[11px] font-bold text-ink-lighter uppercase tracking-wider mb-1">
                Karakteristik Warna Darah
              </div>
              <div className="text-sm font-extrabold flex items-center gap-2">
                <span
                  className="w-3.5 h-3.5 rounded-full inline-block border"
                  style={{ backgroundColor: activeType.hexColor }}
                />
                <span className="text-ink">{activeType.karakteristik}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-ink/5">
              <div className="text-[11px] font-bold text-ink-lighter uppercase tracking-wider mb-1">
                Pola Aliran Darah
              </div>
              <div className="text-sm font-extrabold text-ink leading-snug">
                {activeType.aliran}
              </div>
            </div>
          </div>

          {/* Danger level notice */}
          <div className="p-4 rounded-2xl bg-white border border-ink/10 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red">
                Tingkat Bahaya:
              </div>
              <p className="text-xs sm:text-sm text-ink font-semibold mt-0.5 leading-relaxed">
                {activeType.tingkatBahaya}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-side Summary Table */}
      <div className="mt-8 pt-6 border-t border-ink/10 overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b border-ink/10 text-ink-lighter uppercase font-bold text-[11px]">
              <th className="py-2.5 pr-4">Jenis Perdarahan</th>
              <th className="py-2.5 px-4">Karakteristik Warna</th>
              <th className="py-2.5 px-4">Pola Aliran</th>
              <th className="py-2.5 pl-4">Tingkat Bahaya</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/5 text-ink-light font-medium">
            {bleedingTypesData.map((b) => (
              <tr
                key={b.id}
                onClick={() => setActiveTab(b.id)}
                className={`cursor-pointer transition-colors ${
                  activeTab === b.id ? "bg-red/5 font-bold text-ink" : "hover:bg-cream/50"
                }`}
              >
                <td className="py-3 pr-4 font-bold flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: b.hexColor }}
                  />
                  <span>{b.name}</span>
                </td>
                <td className="py-3 px-4">{b.karakteristik}</td>
                <td className="py-3 px-4">{b.aliran}</td>
                <td className="py-3 pl-4">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs ${b.badgeBahaya}`}>
                    {b.id === "arteri" ? "Paling Parah" : b.id === "vena" ? "Mengancam Nyawa" : "Paling Ringan"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
