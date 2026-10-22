export interface MaterialDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  categoryColor: string;
  accentColor: string;
  bgColor: string;
  iconBg: string;
  heroImage: string;
  pengertian: {
    title: string;
    content: string;
  };
  tanda: {
    title: string;
    items: string[];
  };
  langkah: {
    title: string;
    steps: {
      number: number;
      title: string;
      description: string;
    }[];
  };
  hindari: {
    title: string;
    items: string[];
  };
  kapanDarurat: {
    title: string;
    content: string;
    items: string[];
  };
  ringkasan: string;
  relatedSlugs: string[];
}

export const materials: MaterialDetail[] = [
  {
    slug: "perdarahan",
    title: "Perdarahan",
    subtitle: "Pertolongan Perdarahan Kecelakaan Jalan Raya",
    description:
      "Panduan praktis bagi pengemudi ojol menangani luka terbuka di aspal, teknik direct pressure, dan pencegahan syok sebelum bantuan ambulans tiba.",
    category: "Perdarahan Jalan",
    categoryColor: "bg-red/10 text-red border-red/20",
    accentColor: "#F04438",
    bgColor: "bg-red-light",
    iconBg: "bg-red/10",
    heroImage: "bleeding",
    pengertian: {
      title: "Apa Itu Perdarahan Akibat Kecelakaan?",
      content:
        "Perdarahan adalah keluarnya darah dari pembuluh darah akibat benturan, gesekan aspal, atau trauma benda tajam saat kecelakaan lalu lintas. Perdarahan dapat berupa luka robek luar (eksternal) yang tampak jelas, maupun perdarahan dalam (internal) yang ditandai dengan memar luas dan syok lemas. Sebagai penolong pertama di jalanan, tindakan cepat driver ojol dalam 5 menit pertama sangat krusial menghentikan kehilangan darah.",
    },
    tanda: {
      title: "Tanda Bahaya yang Perlu Diwaspadai Driver",
      items: [
        "Darah merah terang memancar berdenyut (perdarahan arteri) atau mengalir deras terus-menerus.",
        "Pakaian korban basah kuyup oleh genangan darah.",
        "Kulit korban terasa dingin, basah berkeringat, dan tampak pucat pasi.",
        "Korban mengeluh sangat haus, pusing melayang, atau napas tersengal-sengal.",
        "Denyut nadi teraba sangat cepat namun lemah.",
        "Korban mulai kehilangan kesadaran atau tidak merespons panggilan.",
      ],
    },
    langkah: {
      title: "Langkah Pertolongan Driver di Lokasi Kejadian",
      steps: [
        {
          number: 1,
          title: "Amankan Diri & Arus Lalu Lintas (3A)",
          description:
            "Tepikan motor di bahu jalan aman, nyalakan lampu hazard, dan pasang tanda agar kendaraan lain melambat. Gunakan sarung tangan atau plastik bersih sebelum menyentuh luka.",
        },
        {
          number: 2,
          title: "Tekan Luka Langsung (Direct Pressure)",
          description:
            "Gunakan kain kasa steril atau kain bersih tebal dari kotak P3K motor. Tekan tepat di atas pusat luka dengan telapak tangan secara mantap dan terus-menerus.",
        },
        {
          number: 3,
          title: "Pertahankan Tekanan & Tambah Lapisan",
          description:
            "Jangan pernah mencabut kain pertama meski darah merembes tembus. Tambahkan lapisan kain bersih baru di atasnya dan pertahankan penekanan kuat.",
        },
        {
          number: 4,
          title: "Tinggikan Area Cedera & Cegah Syok",
          description:
            "Bila tidak ada patah tulang, posisikan anggota tubuh yang berdarah lebih tinggi dari jantung. Selimuti korban dengan jaket driver agar tetap hangat.",
        },
        {
          number: 5,
          title: "Hubungi Layanan Darurat 119",
          description:
            "Segera telepon 119 atau 112. Sebutkan patokan jalan spesifik, arah jalur kendaraan, jumlah korban, dan kondisinya.",
        },
      ],
    },
    hindari: {
      title: "Tindakan Berbahaya yang Harus Dihindari",
      items: [
        "Jangan mencabut serpihan kaca, logam, atau benda yang menancap dalam di tubuh korban.",
        "Jangan membuka paksa helm korban jika ada kecurigaan cedera leher/tulang belakang, kecuali jalan napas tersumbat total.",
        "Jangan memasang ikatan torniket sembarangan menggunakan tali/kawat tanpa pelatihan medis khusus.",
        "Jangan memberikan minum air putih atau kopi pada korban kecelakaan yang lemas atau syok.",
        "Jangan membersihkan luka terbuka dalam dengan bensin, alkohol murni, atau bubuk kopi.",
      ],
    },
    kapanDarurat: {
      title: "Kapan Wajib Segera Menghubungi 119?",
      content: "Segera panggil ambulans darurat (119) dan bawa ke IGD jika:",
      items: [
        "Darah terus mengalir deras setelah ditekan kuat selama 10 menit.",
        "Korban mengantuk berat, meracau, atau kehilangan kesadaran.",
        "Terdapat dugaan patah tulang terbuka (tulang menonjol keluar).",
        "Kecelakaan melibatkan benturan kepala, dada, atau perut berkecepatan tinggi.",
        "Korban adalah anak-anak, lansia, atau ibu hamil.",
      ],
    },
    ringkasan:
      "Saat menghadapi korban kecelakaan di jalan raya, prioritas pertama driver adalah mengamankan arus lalu lintas (Aman Diri). Hentikan perdarahan dengan menekan luka langsung menggunakan kain bersih tanpa henti. Selimuti korban untuk mencegah syok dan hubungi ambulans 119. Informasi ini bersifat panduan edukatif kesiapsiagaan driver ojol.",
    relatedSlugs: ["kejang", "bhd"],
  },
  {
    slug: "kejang",
    title: "Kejang",
    subtitle: "Pendampingan Aman Penumpang & Warga Saat Kejang",
    description:
      "Panduan bagi mitra ojol saat penumpang di motor atau warga di pangkalan/pinggir jalan mengalami kejang mendadak tanpa panik.",
    category: "Kejang di Jalan",
    categoryColor: "bg-blue/10 text-blue border-blue/20",
    accentColor: "#3978F6",
    bgColor: "bg-blue-light",
    iconBg: "bg-blue/10",
    heroImage: "seizure",
    pengertian: {
      title: "Mengenali Kejang di Ruang Publik",
      content:
        "Kejang adalah gangguan aktivitas listrik mendadak di otak yang menyebabkan perubahan perilaku, kehilangan kesadaran, dan gerakan menyentak tidak terkontrol pada otot tubuh. Kondisi ini bisa dialami oleh penumpang yang sedang dijemput, rekan sesama driver di pangkalan, atau warga di pinggir jalan. Kunci utama pertolongan driver bukanlah menghentikan kejangnya, melainkan melindungi korban dari cedera fisik benturan aspal hingga kejang selesai dengan sendirinya.",
    },
    tanda: {
      title: "Tanda-Tanda Kejang yang Terlihat",
      items: [
        "Korban tiba-tiba jatuh terkulai lemas atau kaku di tempat.",
        "Tubuh, tangan, dan kaki kelojotan atau menyentak ritmis di aspal/lantai.",
        "Mata mendelik ke atas atau tatapan kosong tidak merespons panggilan.",
        "Mulut mengeluarkan busa liur dan rahang mengatup rapat.",
        "Napas terdengar berat, mendengkur, atau bibir sempat membiru.",
        "Setelah kejang berhenti, korban tampak linglung, bingung, atau mengantuk berat.",
      ],
    },
    langkah: {
      title: "Langkah Pertolongan Driver yang Benar",
      steps: [
        {
          number: 1,
          title: "Tepikan Kendaraan & Amankan Area",
          description:
            "Jika kejang terjadi saat berhenti, topang korban dengan tenang. Singkirkan sepeda motor, helm, batu tajam, dan kerumunan yang menghalangi udara segar.",
        },
        {
          number: 2,
          title: "Lindungi Kepala Korban",
          description:
            "Lipat jaket driver Anda atau kain tebal, lalu letakkan lembut di bawah kepala korban agar tidak terbentur keras ke aspal saat menyentak.",
        },
        {
          number: 3,
          title: "Longgarkan Pakaian Ketat",
          description:
            "Buka kancing kerah jaket atau longgarkan tali helm/baju di area leher agar pernapasan korban tidak tercekik.",
        },
        {
          number: 4,
          title: "Miringkan Tubuh Setelah Kejang Mereda",
          description:
            "Segera posisikan korban dalam Posisi Miring Mantap (Recovery Position) agar lidah tidak menyumbat tenggorokan dan air liur mengalir keluar.",
        },
        {
          number: 5,
          title: "Dampingi dengan Tenang & Catat Waktu",
          description:
            "Tetap bersama korban hingga ia sadar penuh. Catat berapa menit kejang berlangsung dan tenangkan korban saat ia mulai tersadar.",
        },
      ],
    },
    hindari: {
      title: "Mitos & Tindakan Terlarang",
      items: [
        "JANGAN memasukkan sendok, gagang kunci, atau jari ke dalam mulut korban (berbahaya, gigi bisa patah dan menyumbat saluran napas).",
        "JANGAN menyiramkan air dingin atau mencekoki kopi ke mulut korban yang sedang kejang.",
        "JANGAN menahan paksa atau menduduki tangan dan kaki korban yang sedang menyentak.",
        "JANGAN memberi makanan, minuman, atau obat tablet sebelum korban sadar 100%.",
        "JANGAN membiarkan korban telentang saat mulutnya penuh cairan liur atau muntahan.",
      ],
    },
    kapanDarurat: {
      title: "Kapan Wajib Memanggil Ambulans 119?",
      content: "Segera hubungi 119 atau bawa ke IGD terdekat jika:",
      items: [
        "Kejang berlangsung lebih dari 5 menit tanpa jeda.",
        "Kejang berulang kembali sebelum korban sempat sadar.",
        "Korban mengalami sesak napas berat atau tidak sadar lebih dari 15 menit.",
        "Kejang terjadi setelah kepala korban terbentur keras dalam kecelakaan.",
        "Korban sedang hamil atau memiliki riwayat penyakit berat.",
      ],
    },
    ringkasan:
      "Saat penumpang atau warga kejang, tugas driver adalah menjadi pelindung: alasi kepala dengan jaket, jauhkan benda keras, dan JANGAN masukkan benda apa pun ke mulutnya. Miringkan tubuh korban setelah kejang usai agar napasnya lapang. Informasi ini merupakan panduan praktis kesiapsiagaan mitra ojol.",
    relatedSlugs: ["perdarahan", "bhd"],
  },
  {
    slug: "bhd",
    title: "Bantuan Hidup Dasar (BHD)",
    subtitle: "RJP & Penyelamatan Henti Jantung di Tempat Umum",
    description:
      "Tindakan cepat resusitasi jantung paru (Hands-Only CPR) saat menemukan korban kolaps tak bernapas di pangkalan, SPBU, atau jalanan.",
    category: "BHD Jalanan",
    categoryColor: "bg-green/10 text-green-dark border-green/30",
    accentColor: "#6EE7A8",
    bgColor: "bg-green-light",
    iconBg: "bg-green/10",
    heroImage: "cpr",
    pengertian: {
      title: "Apa Itu BHD bagi Pengemudi Ojek Online?",
      content:
        "Bantuan Hidup Dasar (BHD) adalah serangkaian pertolongan darurat tanpa alat medis rumit yang dilakukan untuk menyelamatkan nyawa seseorang yang mengalami henti jantung mendadak (sudden cardiac arrest). Setiap 1 menit tanpa pertolongan, peluang bertahan hidup korban menurun hingga 10%. Dengan keberadaan driver ojol yang tersebar luas di seluruh penjuru kota, penguasaan teknik BHD menjadikan mitra ojol sebagai garda penyelamat paling krusial sebelum tim ambulans tiba di lokasi.",
    },
    tanda: {
      title: "Cara Mengenali Korban Henti Jantung",
      items: [
        "Korban tiba-tiba roboh pingsan dan tidak bergerak sama sekali.",
        "Tidak ada respons saat pundaknya ditepuk kencang dan dipanggil namanya.",
        "Korban tidak bernapas atau hanya bernapas megap-megap tidak wajar (gasping).",
        "Wajah dan bibir mulai tampak pucat pasi atau kebiruan.",
        "Tubuh terkulai lemas tanpa ada tanda-tanda kehidupan aktif.",
      ],
    },
    langkah: {
      title: "Urutan Tindakan BHD Cepat untuk Driver",
      steps: [
        {
          number: 1,
          title: "Pastikan Keamanan Area",
          description:
            "Pastikan Anda dan korban aman dari arus lalu lintas kendaraan bermotor di jalan raya atau SPBU.",
        },
        {
          number: 2,
          title: "Cek Kesadaran Korban",
          description:
            "Tepuk kedua bahu korban dengan mantap dan bersuara lantang: 'Pak/Bu, apakah Anda dengar saya?'.",
        },
        {
          number: 3,
          title: "Minta Bantuan & Telepon 119",
          description:
            "Jika tidak merespons, tunjuk rekan sekitar secara spesifik: 'Pak, tolong telepon 119 ambulans sekarang, katakan ada korban tidak bernapas!'.",
        },
        {
          number: 4,
          title: "Cek Napas Singkat (<10 Detik)",
          description:
            "Lihat gerakan dadanya. Bila dada tidak naik-turun atau hanya napas megap-megap, segera mulai kompresi dada.",
        },
        {
          number: 5,
          title: "Lakukan Kompresi Dada (Hands-Only CPR)",
          description:
            "Letakkan tumit tangan di tengah dada. Tekan sedalam 5-6 cm dengan kecepatan 100-120 kompresi per menit secara ritmis dan konsisten.",
        },
        {
          number: 6,
          title: "Lanjutkan Bergantian",
          description:
            "Kompresi tanpa henti. Ajak rekan driver lain bergantian setiap 2 menit agar kualitas kompresi tetap kuat hingga ambulans 119 datang.",
        },
      ],
    },
    hindari: {
      title: "Hal yang Harus Dihindari",
      items: [
        "Jangan buang waktu lebih dari 10 detik mencari denyut nadi jika Anda tidak terlatih medis; langsung mulai kompresi.",
        "Jangan memindahkan korban kecuali berada dalam ancaman bahaya fisik langsung (api, ledakan).",
        "Jangan menghentikan kompresi dada lebih dari 10 detik.",
        "Jangan ragu atau takut melakukan kompresi—melakukan kompresi dada jauh lebih baik daripada tidak berbuat apa-apa.",
        "Jangan membiarkan kerumunan warga menutupi sirkulasi udara korban.",
      ],
    },
    kapanDarurat: {
      title: "Setiap Menit Adalah Emas",
      content: "Ingat prinsip penyelamatan rantai hidup (Chain of Survival):",
      items: [
        "Deteksi dini dan segera telepon 119 saat menemukan korban kolaps.",
        "Kompresi dada berkualitas mengalirkan darah beroksigen ke otak korban.",
        "Bila ada alat AED (Automated External Defibrillator) di stasiun/mall terdekat, segera ambil dan ikuti panduan suaranya.",
        "Tetap berikan bantuan hingga tenaga medis profesional SPGDT 119 tiba mengambil alih.",
        "Ikuti pelatihan praktik resmi BHD bersama organisasi medis untuk mengasah memori otot tangan Anda.",
      ],
    },
    ringkasan:
      "Bantuan Hidup Dasar (BHD) adalah keterampilan penyelamat nyawa paling berharga di jalan raya. Keberanian driver ojol mengenali henti napas, memanggil bantuan 119, dan melakukan kompresi dada yang kuat serta berkesinambungan dapat menyelamatkan nyawa sesama warga. Materi ini merupakan panduan dasar edukasi publik.",
    relatedSlugs: ["perdarahan", "kejang"],
  },
];
