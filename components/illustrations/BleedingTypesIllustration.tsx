"use client";

import { useState } from "react";
import { Droplet, Activity, AlertTriangle, ShieldAlert, HeartCrack, Sparkles } from "lucide-react";

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
        {/* SVG Visual Diagram */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full h-64 rounded-2xl bg-white border border-ink/10 p-4 flex items-center justify-center relative overflow-hidden shadow-inner">
            {activeTab === "arteri" && (
              <svg viewBox="0 0 300 220" className="w-full h-full" fill="none">
                <rect width="300" height="220" rx="16" fill="#FEE4E2" opacity="0.4" />
                {/* Vessel */}
                <path d="M40 160 Q120 150 160 145" stroke="#F04438" strokeWidth="18" strokeLinecap="round" />
                <path d="M160 145 Q200 140 260 135" stroke="#F04438" strokeWidth="18" strokeLinecap="round" strokeDasharray="6 6" opacity="0.4" />
                {/* Spurting Arc 1 */}
                <path d="M155 140 Q180 40 250 80" stroke="#F04438" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M155 140 Q160 20 220 50" stroke="#FF5C4D" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                {/* Spurting Arc 2 */}
                <path d="M158 142 Q140 30 190 70" stroke="#F04438" strokeWidth="5" strokeLinecap="round" fill="none" />
                {/* Spurting Droplets in rhythm */}
                <circle cx="255" cy="85" r="7" fill="#F04438" />
                <circle cx="225" cy="52" r="6" fill="#FF5C4D" />
                <circle cx="195" cy="73" r="5.5" fill="#F04438" />
                <circle cx="270" cy="110" r="4" fill="#F04438" />
                <circle cx="240" cy="95" r="3.5" fill="#FF5C4D" />
                {/* Pulse waves */}
                <path d="M60 40 L80 40 L90 20 L100 55 L110 35 L120 40 L140 40" stroke="#F04438" strokeWidth="2.5" strokeLinecap="round" />
                <text x="60" y="70" fontSize="11" fill="#F04438" fontWeight="bold">Detak Jantung: Memancar Tinggi</text>
                {/* Badge text */}
                <g transform="translate(18, 185)">
                  <rect width="115" height="22" rx="6" fill="#F04438" />
                  <text x="57" y="15" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">Merah Cerah (Arteri)</text>
                </g>
              </svg>
            )}

            {activeTab === "vena" && (
              <svg viewBox="0 0 300 220" className="w-full h-full" fill="none">
                <rect width="300" height="220" rx="16" fill="#FEE4E2" opacity="0.3" />
                {/* Vessel */}
                <path d="M40 160 Q120 150 160 145" stroke="#991B1B" strokeWidth="18" strokeLinecap="round" />
                <path d="M160 145 Q200 140 260 135" stroke="#991B1B" strokeWidth="18" strokeLinecap="round" strokeDasharray="6 6" opacity="0.4" />
                {/* Steady flow pool and downward pour */}
                <path d="M152 142 C150 165 170 190 220 195 C260 198 280 185 270 170 C250 150 200 155 160 142 Z" fill="#991B1B" opacity="0.85" />
                <path d="M150 140 Q170 160 210 165" stroke="#7F1D1D" strokeWidth="8" strokeLinecap="round" />
                <path d="M155 142 Q185 170 240 175" stroke="#991B1B" strokeWidth="6" strokeLinecap="round" />
                {/* Steady flow waves */}
                <path d="M60 40 Q85 30 110 40 T160 40" stroke="#991B1B" strokeWidth="3" fill="none" />
                <text x="60" y="65" fontSize="11" fill="#991B1B" fontWeight="bold">Aliran Stabil & Terus-Menerus</text>
                {/* Badge text */}
                <g transform="translate(18, 185)">
                  <rect width="125" height="22" rx="6" fill="#991B1B" />
                  <text x="62" y="15" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">Merah Tua/Gelap (Vena)</text>
                </g>
              </svg>
            )}

            {activeTab === "kapiler" && (
              <svg viewBox="0 0 300 220" className="w-full h-full" fill="none">
                <rect width="300" height="220" rx="16" fill="#FFF8F0" />
                {/* Skin layer */}
                <path d="M30 150 Q150 140 270 150" stroke="#FBBF94" strokeWidth="22" strokeLinecap="round" />
                {/* Abrasion / Grazed area */}
                <ellipse cx="150" cy="140" rx="65" ry="14" fill="#FCA5A5" opacity="0.6" />
                {/* Oozing beads */}
                <circle cx="120" cy="136" r="5" fill="#DC2626" />
                <circle cx="138" cy="133" r="6.5" fill="#EF4444" />
                <circle cx="155" cy="138" r="5" fill="#DC2626" />
                <circle cx="170" cy="134" r="5.5" fill="#EF4444" />
                <circle cx="185" cy="138" r="4" fill="#DC2626" />
                <circle cx="145" cy="143" r="4" fill="#EF4444" />
                {/* Gentle trickle */}
                <path d="M138 139 Q140 155 142 165" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
                <text x="60" y="55" fontSize="11" fill="#DC2626" fontWeight="bold">Merembes Perlahan dari Permukaan Kulit</text>
                {/* Badge text */}
                <g transform="translate(18, 185)">
                  <rect width="135" height="22" rx="6" fill="#DC2626" />
                  <text x="67" y="15" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">Merah / Luka Lecet (Kapiler)</text>
                </g>
              </svg>
            )}
          </div>
          <div className="text-center mt-3 text-xs font-mono text-ink-lighter">
            Model Visual Pembuluh: {activeType.pembuluh}
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
