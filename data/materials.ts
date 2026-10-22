export interface MaterialDetail {
  slug: string;
  orderNumber: number;
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
    note?: string;
  };
  tanda: {
    title: string;
    items: string[];
    note?: string;
  };
  langkah: {
    title: string;
    steps: {
      number: number;
      title: string;
      description: string;
    }[];
    criticalInstruction?: string;
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
    slug: "kejang",
    orderNumber: 1,
    title: "Materi 1 — Kejang",
    subtitle: "Mengenal Kejang & 7 Langkah Pertolongan Awal",
    description:
      "Kejang merupakan kondisi ketika terjadi aktivitas listrik abnormal di otak yang dapat menyebabkan gerakan tubuh tidak terkendali dan/atau perubahan kesadaran.",
    category: "Materi 1 — Kejang",
    categoryColor: "bg-blue/10 text-blue border-blue/20",
    accentColor: "#3978F6",
    bgColor: "bg-blue-light",
    iconBg: "bg-blue/10",
    heroImage: "seizure",
    pengertian: {
      title: "1. Mengenal Kejang",
      content:
        "Kejang merupakan kondisi ketika terjadi aktivitas listrik abnormal di otak yang dapat menyebabkan gerakan tubuh tidak terkendali dan/atau perubahan kesadaran.",
      note: "Setelah kejang reda, korban dapat tampak lemas atau bingung. Hal ini merupakan fase pemulihan normal yang membutuhkan pendampingan tenang.",
    },
    tanda: {
      title: "Tanda yang Dapat Ditemukan",
      items: [
        "Tubuh kaku atau bergetar.",
        "Gerakan tubuh tidak terkendali.",
        "Tatapan kosong atau mata berbalik.",
        "Tidak merespons.",
      ],
      note: "Setelah kejang korban dapat tampak lemas atau bingung.",
    },
    langkah: {
      title: "2. Pertolongan Awal Jika Menemukan Seseorang Mengalami Kejang",
      steps: [
        {
          number: 1,
          title: "Langkah 1: Perhatikan Waktu",
          description:
            "Tetap tenang dan perhatikan waktu dimulainya kejang.",
        },
        {
          number: 2,
          title: "Langkah 2: Amankan Area",
          description:
            "Amankan area sekitar dengan menjauhkan benda-benda tajam, keras, atau berbahaya (seperti pisau, pecahan kaca, atau kendaraan).",
        },
        {
          number: 3,
          title: "Langkah 3: Alasi Kepala",
          description:
            "Beri alas pada kepala penderita menggunakan benda lembut seperti bantal, jaket, atau handuk agar kepala tidak terbentur lantai.",
        },
        {
          number: 4,
          title: "Langkah 4: Dilarang Sumpal Mulut",
          description:
            "Jangan memasukkan benda, makanan, minuman, atau jari ke dalam mulut korban.",
        },
        {
          number: 5,
          title: "Langkah 5: Longgarkan Pakaian",
          description:
            "Longgarkan pakaian yang ketat, terutama di bagian leher, dada, atau ikat pinggang agar penderita bisa bernapas lebih lega.",
        },
        {
          number: 6,
          title: "Langkah 6: Miringkan Tubuh",
          description:
            "Miringkan tubuh penderita (ke sisi kanan atau kiri) secara perlahan, terutama setelah kejang mulai mereda atau jika ada muntah, untuk mencegah air liur atau muntahan masuk ke saluran pernapasan.",
        },
        {
          number: 7,
          title: "Langkah 7: Dampingi Hingga Sadar",
          description:
            "Dampingi penderita terus-menerus sampai kejang benar-benar berhenti dan ia sadar penuh.",
        },
      ],
      criticalInstruction:
        "Catat lama kejang dan laporkan durasi kejadian kepada petugas medis atau dokter.",
    },
    hindari: {
      title: "Tindakan yang Berbahaya & Harus Dihindari",
      items: [
        "Jangan memasukkan benda, makanan, minuman, sendok, atau jari ke dalam mulut korban.",
        "Jangan menahan tubuh korban agar tidak bergerak atau menduduki tangan dan kakinya saat kejang berlangsung.",
        "Jangan menyiram air dingin atau menampar wajah korban yang sedang kejang.",
        "Jangan memberikan obat tablet atau air minum sebelum korban sadar 100% dan dapat menelan normal.",
        "Jangan meninggalkan korban sendirian di lokasi sampai kejang benar-benar reda dan kondisinya stabil.",
      ],
    },
    kapanDarurat: {
      title: "Kapan Wajib Segera Hubungi 112 atau 119?",
      content:
        "Segera panggil bantuan medis darurat (112 / 119) jika ditemukan kondisi berikut:",
      items: [
        "Kejang berlangsung lebih dari 5 menit (status epileptikus).",
        "Kejang berulang kembali sebelum korban sempat sadar.",
        "Korban mengalami kesulitan bernapas setelah kejang berhenti.",
        "Kejang terjadi di dalam air atau korban terbentur keras hingga cedera.",
        "Korban sedang hamil atau tidak memiliki riwayat kejang sebelumnya.",
      ],
    },
    ringkasan:
      "Kejang adalah gangguan akibat aktivitas listrik abnormal di otak. Langkah utama penolong: tetap tenang, perhatikan waktu, amankan area dari benda berbahaya, alasi kepala dengan jaket/benda lembut, dilarang menyumpal mulut, longgarkan pakaian leher, miringkan tubuh saat mereda agar saluran napas bebas, dampingi sampai sadar penuh, dan selalu catat lama kejang.",
    relatedSlugs: ["perdarahan", "bhd"],
  },
  {
    slug: "perdarahan",
    orderNumber: 2,
    title: "Materi 2 — Perdarahan",
    subtitle: "Mengenal Jenis Perdarahan & 9 Langkah Pertolongan Awal",
    description:
      "Perdarahan merupakan keluarnya darah dari pembuluh darah akibat cedera atau kondisi tertentu, dengan perbedaan karakteristik pada arteri, vena, dan kapiler.",
    category: "Materi 2 — Perdarahan",
    categoryColor: "bg-red/10 text-red border-red/20",
    accentColor: "#F04438",
    bgColor: "bg-red-light",
    iconBg: "bg-red/10",
    heroImage: "bleeding",
    pengertian: {
      title: "1. Mengenal Perdarahan",
      content:
        "Perdarahan merupakan keluarnya darah dari pembuluh darah akibat cedera atau kondisi tertentu. Dalam website ditampilkan ilustrasi untuk membantu pengguna mengenali karakteristik, pola aliran, dan tingkat bahaya perdarahan arteri, vena, serta kapiler.",
    },
    tanda: {
      title: "Karakteristik Tiga Jenis Perdarahan",
      items: [
        "Perdarahan arteri: Darah berwarna merah cerah, memancar atau menyembur keluar mengikuti detak jantung. Tingkat bahaya paling parah dan sulit dikendalikan karena tekanan darah tinggi.",
        "Perdarahan vena: Darah berwarna merah tua atau gelap, mengalir secara stabil dan terus-menerus (tidak menyembur). Bisa mengancam nyawa jika pembuluh besar rusak, tetapi umumnya lebih mudah dikendalikan daripada arteri.",
        "Perdarahan kapiler: Darah berwarna merah, merembes secara perlahan dari permukaan kulit (seperti pada luka lecet). Paling ringan, mudah dihentikan, dan sering kali terasa lebih nyeri.",
        "Tanda syok: Korban tampak lemas, pucat, dingin berkeringat, dan napas tersengal-sengal.",
      ],
      note: "Pengenalan jenis perdarahan sangat penting untuk menentukan kecepatan respons penolong di lokasi.",
    },
    langkah: {
      title: "2. Pertolongan Awal Jika Menemukan Seseorang Mengalami Perdarahan",
      steps: [
        {
          number: 1,
          title: "Langkah 1: Tenang & Proteksi Diri",
          description:
            "Tetap tenang dan pastikan lokasi aman bagi penolong dan korban. Jika ada, gunakan sarung tangan atau plastik bersih sebagai pelindung dari darah.",
        },
        {
          number: 2,
          title: "Langkah 2: Hubungi Layanan Darurat",
          description:
            "Minta orang sekitar menghubungi layanan darurat (112 atau 119), terutama jika darah memancar, perdarahan banyak, atau korban tampak lemas dan pucat.",
        },
        {
          number: 3,
          title: "Langkah 3: Posisikan Korban",
          description:
            "Baringkan atau dudukkan korban agar nyaman dan tidak terjatuh.",
        },
        {
          number: 4,
          title: "Langkah 4: Tekan Langsung (Direct Pressure)",
          description:
            "Tekan langsung luka menggunakan kain bersih, kassa, atau handuk dengan tekanan kuat dan terus-menerus.",
        },
        {
          number: 5,
          title: "Langkah 5: Tambahkan Lapisan Baru",
          description:
            "Jika kain basah oleh darah, jangan dilepas. Tambahkan lapisan kain baru di atasnya dan tetap tekan.",
        },
        {
          number: 6,
          title: "Langkah 6: Tinggikan Bagian Cedera",
          description:
            "Jika luka berada di lengan atau tungkai dan tidak dicurigai patah tulang, tinggikan bagian tubuh yang terluka lebih tinggi dari jantung.",
        },
        {
          number: 7,
          title: "Langkah 7: Balut Luka Rapi & Pas",
          description:
            "Setelah perdarahan berkurang, balut luka dengan perban atau kain yang cukup kencang, tetapi tidak sampai menghambat aliran darah (jari tetap hangat dan berwarna merah muda).",
        },
        {
          number: 8,
          title: "Langkah 8: Jaga Benda Menancap",
          description:
            "Jangan mencabut benda yang tertancap pada luka. Tekan di sekitar benda tersebut dan stabilkan agar tidak bergerak.",
        },
        {
          number: 9,
          title: "Langkah 9: Jaga Kehangatan & Pantau",
          description:
            "Jaga korban tetap hangat dengan selimut atau jaket, dan pantau kesadaran serta napasnya sampai bantuan medis datang.",
        },
      ],
      criticalInstruction:
        "Segera cari pertolongan medis jika perdarahan tidak berhenti setelah ditekan sekitar 10 menit.",
    },
    hindari: {
      title: "Tindakan yang Berbahaya & Harus Dihindari",
      items: [
        "Jangan mencabut benda yang tertancap pada luka (stabilkan posisi benda dan tekan tepinya).",
        "Jangan melepas lapisan kain pertama saat darah menembus (cukup timpa dengan kain baru di atasnya).",
        "Jangan mengikat perban terlalu kencang hingga memutus sirkulasi darah (pastikan ujung jari tetap hangat).",
        "Jangan mengoleskan bensin, minyak, alkohol murni, atau bubuk kopi ke luka terbuka.",
        "Jangan memberi makan atau minum kepada korban yang lemas, pucat, atau diduga syok.",
      ],
    },
    kapanDarurat: {
      title: "Kapan Wajib Segera Hubungi 112 atau 119?",
      content:
        "Segera cari pertolongan medis dan hubungi 112 / 119 jika:",
      items: [
        "Perdarahan tidak berhenti setelah ditekan kuat secara terus-menerus selama sekitar 10 menit.",
        "Darah menyembur atau memancar deras mengikuti denyut jantung (perdarahan arteri).",
        "Korban tampak sangat lemas, pucat, pusing berat, atau kehilangan kesadaran.",
        "Luka sangat dalam, melibatkan serpihan besar tertancap, atau terdapat dugaan patah tulang.",
      ],
    },
    ringkasan:
      "Perdarahan adalah keluarnya darah dari pembuluh darah akibat cedera. Kenali 3 jenisnya: arteri (memancar merah cerah, paling parah), vena (mengalir stabil merah tua), dan kapiler (merembes merah pada luka lecet). Lakukan 9 langkah pertolongan: aman diri dengan sarung tangan, panggil 112/119, baringkan korban, tekan langsung luka secara kuat, jangan cabut kain pertama, tinggikan jika aman, balut pas, stabilkan benda menancap, jaga kehangatan, dan evaluasi dalam 10 menit.",
    relatedSlugs: ["kejang", "bhd"],
  },
  {
    slug: "bhd",
    orderNumber: 3,
    title: "Materi 3 — Bantuan Hidup Dasar (BHD)",
    subtitle: "Mengenal BHD & 9 Langkah Resusitasi Jantung Paru",
    description:
      "Bantuan Hidup Dasar merupakan serangkaian tindakan awal untuk mempertahankan kehidupan seseorang ketika terjadi kegawatdaruratan, terutama ketika korban tidak responsif dan tidak bernapas normal.",
    category: "Materi 3 — BHD",
    categoryColor: "bg-green/10 text-green-dark border-green/30",
    accentColor: "#6EE7A8",
    bgColor: "bg-green-light",
    iconBg: "bg-green/10",
    heroImage: "cpr",
    pengertian: {
      title: "1. Mengenal BHD",
      content:
        "Bantuan Hidup Dasar merupakan serangkaian tindakan awal untuk mempertahankan kehidupan seseorang ketika terjadi kegawatdaruratan, terutama ketika korban tidak responsif dan tidak bernapas normal.",
      note: "Setiap menit penundaan BHD menurunkan peluang keberhasilan korban bertahan hidup hingga 10%. Inisiasi cepat penolong sangat menentukan keselamatan otak.",
    },
    tanda: {
      title: "Tanda yang Perlu Dikenali",
      items: [
        "Korban tidak responsif (tidak bereaksi saat dipanggil atau ditepuk bahunya).",
        "Tidak bernapas atau napas tidak normal (megap-megap).",
        "Dada tidak tampak naik turun.",
      ],
      note: "Jika Anda menemukan korban dengan tanda-tanda di atas, segera curigai henti jantung/napas darurat dan mulai rantai keselamatan hidup.",
    },
    langkah: {
      title:
        "2. Pertolongan Awal Jika Menemukan Korban Tidak Responsif dan Tidak Bernapas Normal",
      steps: [
        {
          number: 1,
          title: "Langkah 1: Pastikan Keadaan Aman",
          description:
            "Pastikan keadaan aman bagi diri sendiri, korban, dan lingkungan sekitar (misalnya jauhkan dari lalu lintas).",
        },
        {
          number: 2,
          title: "Langkah 2: Periksa Respons Korban",
          description:
            "Periksa respons korban dengan menepuk bahunya dan memanggil dengan keras.",
        },
        {
          number: 3,
          title: "Langkah 3: Minta Bantuan & Panggil 112/119",
          description:
            "Jika korban tidak merespons, minta bantuan orang sekitar untuk menghubungi layanan darurat (112 atau 119) dan mencari AED jika tersedia.",
        },
        {
          number: 4,
          title: "Langkah 4: Periksa Napas Singkat",
          description:
            "Periksa napas dengan melihat gerakan dada selama maksimal 10 detik. Jika tidak bernapas atau napas tidak normal, segera mulai tindakan.",
        },
        {
          number: 5,
          title: "Langkah 5: Posisikan Korban di Permukaan Keras",
          description:
            "Baringkan korban telentang pada permukaan yang datar dan keras.",
        },
        {
          number: 6,
          title: "Langkah 6: Lakukan Kompresi Dada",
          description:
            "Lakukan kompresi dada dengan meletakkan tumit tangan di tengah dada (separuh bawah tulang dada), tekan dengan kecepatan 100-120 kali per menit dan kedalaman sekitar 5-6 cm. Biarkan dada mengembang penuh di antara tekanan.",
        },
        {
          number: 7,
          title: "Langkah 7: Bantuan Ventilasi (Bagi yang Terlatih)",
          description:
            "Jika terlatih, berikan 2 napas buatan setelah 30 kali kompresi (30 : 2). Jika tidak terlatih, lakukan kompresi dada saja tanpa berhenti.",
        },
        {
          number: 8,
          title: "Langkah 8: Gunakan AED Segera",
          description:
            "Gunakan AED segera setelah tersedia dan ikuti petunjuk suaranya.",
        },
        {
          number: 9,
          title: "Langkah 9: Lanjutkan Kompresi Berkesinambungan",
          description:
            "Lanjutkan sampai korban bergerak atau bernapas normal, petugas medis tiba, atau penolong kelelahan.",
        },
      ],
      criticalInstruction:
        "Catat waktu mulai tindakan dan laporkan kepada petugas medis saat serah terima penanganan.",
    },
    hindari: {
      title: "Tindakan yang Berbahaya & Harus Dihindari",
      items: [
        "Jangan buang waktu lebih dari 10 detik mencari denyut nadi jika Anda bukan tenaga medis terlatih.",
        "Jangan melakukan kompresi di permukaan lunak (seperti kasur pegas); korban harus di atas lantai atau permukaan keras.",
        "Jangan menghentikan kompresi lebih dari 10 detik kecuali saat AED menganalisis irama atau memberikan ventilasi terukur.",
        "Jangan menyentuh tubuh korban saat alat AED sedang menganalisis ritme jantung atau memberi kejutan listrik.",
        "Jangan menunda menghubungi 112/119 sebelum memulai tindakan.",
      ],
    },
    kapanDarurat: {
      title: "Hubungi Layanan Darurat Segera",
      content:
        "Ketika menemukan orang kolaps di tempat umum:",
      items: [
        "Langsung hubungi 112 atau 119 bebas pulsa.",
        "Sampaikan lokasi dengan jelas, sebutkan patokan jalan spesifik.",
        "Informasikan bahwa korban tidak sadar dan tidak bernapas normal.",
        "Minta orang lain di sekitar untuk mengambil perangkat AED terdekat.",
      ],
    },
    ringkasan:
      "Bantuan Hidup Dasar (BHD) adalah serangkaian tindakan awal mempertahankan kehidupan saat korban tidak responsif dan tidak bernapas normal (atau megap-megap). Lakukan 9 langkah pertolongan: pastikan aman, cek respons, telepon 112/119 & cari AED, cek napas <10 detik, baringkan di permukaan datar keras, lakukan kompresi 100-120x/menit kedalaman 5-6 cm (30:2 jika terlatih atau kompresi saja jika awam), ikuti instruksi AED, lanjutkan tanpa henti hingga tim medis tiba, dan selalu catat waktu mulai tindakan untuk dilaporkan.",
    relatedSlugs: ["kejang", "perdarahan"],
  },
];
