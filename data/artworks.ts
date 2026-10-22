export interface Artwork {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  imagePlaceholder: string;
  accentColor: string;
  bgColor: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    slug: "perdarahan",
    title: "Pertolongan Perdarahan di Jalan",
    description:
      "Tindakan aman balut tekan luka robek kecelakaan lalu lintas menggunakan kain bersih atau perban P3K motor.",
    category: "Perdarahan",
    categoryColor: "bg-red/10 text-red border-red/20",
    imagePlaceholder: "bleeding",
    accentColor: "#F04438",
    bgColor: "bg-red-light",
  },
  {
    id: "2",
    slug: "kejang",
    title: "Mengenali & Menangani Kejang",
    description:
      "Panduan pendampingan saat penumpang atau warga di pangkalan/pinggir jalan mengalami kejang mendadak tanpa panik.",
    category: "Kejang",
    categoryColor: "bg-blue/10 text-blue border-blue/20",
    imagePlaceholder: "seizure",
    accentColor: "#3978F6",
    bgColor: "bg-blue-light",
  },
  {
    id: "3",
    slug: "bhd",
    title: "Bantuan Hidup Dasar (BHD)",
    description:
      "Langkah CPR/RJP darurat saat menemukan korban henti jantung mendadak di jalanan, halte, atau tempat umum.",
    category: "BHD",
    categoryColor: "bg-green/10 text-green-dark border-green/30",
    imagePlaceholder: "cpr",
    accentColor: "#9FE3C2",
    bgColor: "bg-green-light",
  },
];

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  href: string;
}

export const categories: Category[] = [
  {
    id: "tarahu",
    name: "Tarahu",
    description: "Kenali konsep respon darurat dasar bagi pengemudi.",
    icon: "BookOpen",
    color: "text-red",
    bgColor: "bg-red-light",
    borderColor: "border-red/20",
    href: "#capaian-pembelajaran",
  },
  {
    id: "cp",
    name: "Capaian Pembelajaran",
    description: "Kompetensi tanggap darurat jalan raya bagi mitra ojol.",
    icon: "Target",
    color: "text-blue",
    bgColor: "bg-blue-light",
    borderColor: "border-blue/20",
    href: "#capaian-pembelajaran",
  },
  {
    id: "atp",
    name: "Alur Pembelajaran",
    description: "Tahapan belajar terstruktur dari jalan raya ke IGD.",
    icon: "Route",
    color: "text-yellow",
    bgColor: "bg-yellow-light",
    borderColor: "border-yellow/40",
    href: "#alur-pembelajaran",
  },
  {
    id: "materi",
    name: "Materi Driver",
    description: "Panduan lengkap 3 kondisi darurat sering ditemui di jalan.",
    icon: "Layers",
    color: "text-green-dark",
    bgColor: "bg-green-light",
    borderColor: "border-green/30",
    href: "#materi",
  },
  {
    id: "lkpd",
    name: "LKPD Driver",
    description: "Lembar studi kasus lapangan interaktif untuk driver ojol.",
    icon: "FileText",
    color: "text-lavender",
    bgColor: "bg-lavender-light",
    borderColor: "border-lavender/30",
    href: "/lkpd",
  },
  {
    id: "evaluasi",
    name: "Evaluasi Kesiapsiagaan",
    description: "Uji penalaran respon cepat menghadapi insiden jalan.",
    icon: "ClipboardCheck",
    color: "text-ink",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-200",
    href: "/evaluasi",
  },
];
