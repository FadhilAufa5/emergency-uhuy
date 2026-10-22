export interface LearningStep {
  number: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const learningSteps: LearningStep[] = [
  {
    number: "01",
    title: "Mengenali Kondisi Darurat di Jalan Raya",
    description:
      "Mengidentifikasi cepat situasi kecelakaan lalu lintas, penumpang kejang, atau korban kolaps di jalan raya.",
    color: "text-red",
    bgColor: "bg-red-light",
    borderColor: "border-red/20",
  },
  {
    number: "02",
    title: "Menerapkan Prinsip 3A (Aman Diri, Jalan, Korban)",
    description:
      "Memarkir motor di tempat aman, pasang tanda segitiga/hazard, dan pastikan keselamatan diri sebelum mendekati korban.",
    color: "text-blue",
    bgColor: "bg-blue-light",
    borderColor: "border-blue/20",
  },
  {
    number: "03",
    title: "Pertolongan Pertama Cepat & Tepat",
    description:
      "Penekanan langsung pada luka perdarahan, pengamanan posisi korban kejang, dan kompresi dada RJP bila tidak bernapas.",
    color: "text-yellow",
    bgColor: "bg-yellow-light",
    borderColor: "border-yellow/40",
  },
  {
    number: "04",
    title: "Tindakan Terlarang yang Berbahaya",
    description:
      "Hindari membuka paksa helm korban kecelakaan tanpa indikasi jalan napas, jangan beri minum saat pingsan, dan jangan tahan tubuh yang kejang.",
    color: "text-green-dark",
    bgColor: "bg-green-light",
    borderColor: "border-green/30",
  },
  {
    number: "05",
    title: "Komunikasi Ambulans 119 & Rujukan IGD",
    description:
      "Menyampaikan lokasi kejadian akurat (share live location/patokan jalan), jumlah korban, dan kondisi kesadaran kepada operator 119.",
    color: "text-lavender",
    bgColor: "bg-lavender-light",
    borderColor: "border-lavender/30",
  },
];

export interface LearningObjective {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

export const learningObjectives: LearningObjective[] = [
  {
    id: "obj-1",
    title: "Deteksi Dini Insiden Jalan Raya",
    description:
      "Mitra ojek online mampu mengenali tanda-tanda kondisi kritis pada korban kecelakaan lalu lintas, penumpang yang mengalami kejang, dan orang kolaps tidak sadarkan diri.",
    icon: "AlertTriangle",
    color: "text-red",
    bgColor: "bg-red-light",
  },
  {
    id: "obj-2",
    title: "Keterampilan Respon Pertama Lapangan",
    description:
      "Mitra ojol mampu menerapkan teknik balut tekan perdarahan dengan perlengkapan P3K motor, posisi pemulihan kejang, dan resusitasi jantung paru (RJP) dasar secara aman.",
    icon: "Heart",
    color: "text-blue",
    bgColor: "bg-blue-light",
  },
  {
    id: "obj-3",
    title: "Komunikasi Cepat & Koordinasi 119",
    description:
      "Mitra ojol mampu menghubungi layanan darurat 119/112 dengan informasi titik lokasi yang presisi, mengamankan lalu lintas sekitar, dan mendampingi hingga tim medis tiba.",
    icon: "Phone",
    color: "text-green-dark",
    bgColor: "bg-green-light",
  },
];

export interface LKPDItem {
  id: string;
  title: string;
  description: string;
  format: string;
  topic: string;
  topicColor: string;
  bgColor: string;
  available: boolean;
}

export const lkpdItems: LKPDItem[] = [
  {
    id: "lkpd-1",
    title: "LKPD 1: Penanganan Perdarahan Kecelakaan Jalan",
    description:
      "Panduan studi kasus penanganan luka robek pengendara di aspal, teknik direct pressure, dan pencegahan syok hipovolemik.",
    format: "Modul Praktik Driver",
    topic: "Perdarahan Jalan Raya",
    topicColor: "bg-red/10 text-red border-red/20",
    bgColor: "bg-red-light",
    available: true,
  },
  {
    id: "lkpd-2",
    title: "LKPD 2: Proteksi Penumpang & Warga Mengalami Kejang",
    description:
      "Studi kasus pendampingan aman saat penumpang atau pengguna jalan mengalami kejang mendadak di pangkalan atau tepi jalan.",
    format: "Modul Praktik Driver",
    topic: "Kejang di Ruang Publik",
    topicColor: "bg-blue/10 text-blue border-blue/20",
    bgColor: "bg-blue-light",
    available: true,
  },
  {
    id: "lkpd-3",
    title: "LKPD 3: Rantai BHD & CPR untuk Driver Ojol",
    description:
      "Simulasi rantai keselamatan hidup saat menemukan korban kolaps mendadak tanpa napas di pangkalan, SPBU, atau bahu jalan.",
    format: "Modul Praktik Driver",
    topic: "BHD & RJP Jalan Raya",
    topicColor: "bg-green/10 text-green-dark border-green/30",
    bgColor: "bg-green-light",
    available: true,
  },
];

export interface EvaluasiItem {
  id: string;
  title: string;
  description: string;
  topics: string[];
  bgColor: string;
  borderColor: string;
  available: boolean;
}

export const evaluasiItems: EvaluasiItem[] = [
  {
    id: "eval-1",
    title: "Evaluasi Kasus: Perdarahan di Jalan Raya",
    description:
      "Skenario kecelakaan sepeda motor dengan luka robek berdarah aktif dan langkah balut tekan darurat.",
    topics: ["Luka Kecelakaan", "Balut Tekan", "Aman Lalu Lintas"],
    bgColor: "bg-red-light",
    borderColor: "border-red/20",
    available: true,
  },
  {
    id: "eval-2",
    title: "Evaluasi Kasus: Penumpang Kejang Mendadak",
    description:
      "Skenario penumpang ojol kejang saat perjalanan atau di pangkalan, pengamanan jalan napas, dan recovery position.",
    topics: ["Kejang Penumpang", "Posisi Miring Mantap", "Cegah Trauma"],
    bgColor: "bg-blue-light",
    borderColor: "border-blue/20",
    available: true,
  },
  {
    id: "eval-3",
    title: "Evaluasi Kasus: Henti Jantung di Tempat Umum",
    description:
      "Skenario korban henti jantung di SPBU/rest area, panggilan 119, dan pelaksanaan kompresi dada tanpa henti.",
    topics: ["Kolaps Mendadak", "Kompresi 100-120x", "Panggilan 119"],
    bgColor: "bg-green-light",
    borderColor: "border-green/30",
    available: true,
  },
];
