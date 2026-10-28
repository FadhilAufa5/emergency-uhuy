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
      "Mengidentifikasi cepat situasi kecelakaan lalu lintas, korban pingsan (sinkop), atau patah tulang (fraktur) di jalan raya.",
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
      "Penekanan langsung pada luka perdarahan, posisi baring dan elevasi tungkai 30 cm saat pingsan, serta imobilisasi bidai pada patah tulang.",
    color: "text-yellow",
    bgColor: "bg-yellow-light",
    borderColor: "border-yellow/40",
  },
  {
    number: "04",
    title: "Tindakan Terlarang yang Berbahaya",
    description:
      "Hindari meluruskan paksa tulang patah, jangan menampar atau memberi minum pada korban yang belum sadar penuh, dan jangan gerakkan leher yang dicurigai cedera.",
    color: "text-green-dark",
    bgColor: "bg-green-light",
    borderColor: "border-green/30",
  },
  {
    number: "05",
    title: "Komunikasi Ambulans 119 & Rujukan IGD",
    description:
      "Menyampaikan lokasi kejadian akurat (share live location/patokan jalan), jumlah korban, dan kondisi kesadaran kepada operator 119/112.",
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
      "Mitra ojek online mampu mengenali tanda-tanda kritis pada korban kecelakaan lalu lintas, gejala sebelum dan saat pingsan, serta tanda fraktur terbuka dan tertutup.",
    icon: "AlertTriangle",
    color: "text-red",
    bgColor: "bg-red-light",
  },
  {
    id: "obj-2",
    title: "Keterampilan Respon Pertama Lapangan",
    description:
      "Mitra ojol mampu menerapkan teknik balut tekan perdarahan, pertolongan pingsan dengan elevasi kaki 30 cm, dan imobilisasi bidai pada patah tulang secara aman.",
    icon: "Heart",
    color: "text-blue",
    bgColor: "bg-blue-light",
  },
  {
    id: "obj-3",
    title: "Komunikasi Cepat & Koordinasi 119",
    description:
      "Mitra ojol mampu menghubungi layanan darurat 119/112 dengan informasi titik lokasi presisi, mengamankan lalu lintas sekitar, dan mendampingi hingga tim medis tiba.",
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
    title: "LKPD 2: Pertolongan Korban Pingsan (Sinkop)",
    description:
      "Studi kasus penanganan korban pingsan akibat keletihan/dehidrasi di jalan raya, elevasi tungkai 30 cm, posisi miring jika muntah, dan pantauan kesadaran.",
    format: "Modul Praktik Driver",
    topic: "Pingsan di Ruang Publik",
    topicColor: "bg-blue/10 text-blue border-blue/20",
    bgColor: "bg-blue-light",
    available: true,
  },
  {
    id: "lkpd-3",
    title: "LKPD 3: Penanganan Fraktur & Patah Tulang Lapangan",
    description:
      "Simulasi penanganan fraktur terbuka dan tertutup akibat kecelakaan motor, teknik imobilisasi bidai, kompres dingin, dan pemeriksaan sirkulasi ujung jari.",
    format: "Modul Praktik Driver",
    topic: "Fraktur & Patah Tulang",
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
    title: "Evaluasi Kasus: Korban Pingsan di Tempat Umum",
    description:
      "Skenario penanganan korban pingsan (sinkop) akibat kelelahan dan dehidrasi, elevasi tungkai 30 cm, dan larangan pemberian minum sebelum sadar penuh.",
    topics: ["Sinkop / Pingsan", "Elevasi Kaki 30 cm", "Pantau Kesadaran"],
    bgColor: "bg-blue-light",
    borderColor: "border-blue/20",
    available: true,
  },
  {
    id: "eval-3",
    title: "Evaluasi Kasus: Fraktur Akibat Kecelakaan Motor",
    description:
      "Skenario korban patah tulang pasca tabrakan motor, perbedaan fraktur terbuka vs tertutup, imobilisasi bidai, dan perlindungan tulang belakang.",
    topics: ["Fraktur Terbuka/Tertutup", "Bidai Imobilisasi", "Panggilan 112/119"],
    bgColor: "bg-green-light",
    borderColor: "border-green/30",
    available: true,
  },
];
