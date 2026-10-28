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
    relatedSlugs: ["pingsan", "fraktur"],
  },
  {
    slug: "pingsan",
    orderNumber: 3,
    title: "Materi 3 — Pingsan (Sinkop)",
    subtitle: "Mengenal Pingsan & 9 Langkah Pertolongan Awal",
    description:
      "Sinkop merupakan kehilangan kesadaran sementara akibat penurunan perfusi serebral global yang bersifat reversibel dan umumnya pulih spontan. (Susyanti, Gustina, & dkk, 2026)",
    category: "Materi 3 — Pingsan",
    categoryColor: "bg-blue/10 text-blue border-blue/20",
    accentColor: "#3978F6",
    bgColor: "bg-blue-light",
    iconBg: "bg-blue/10",
    heroImage: "pingsan",
    pengertian: {
      title: "1. Mengenal Pingsan",
      content:
        "Sinkop merupakan kehilangan kesadaran sementara akibat penurunan perfusi serebral global yang bersifat reversibel dan umumnya pulih spontan. (Susyanti, Gustina, & dkk, 2026)",
      note: "Pemicu umum: Berdiri terlalu lama, keletihan, dehidrasi, beraktivitas terlalu berat. Kondisi lain: Gula darah rendah, perdarahan, atau gangguan jantung. Tingkat bahaya: Umumnya ringan, tetapi dapat berbahaya jika korban terjatuh dan terbentur kepala atau memiliki penyakit jantung.",
    },
    tanda: {
      title: "Tanda Sebelum & Saat Pingsan",
      items: [
        "Tanda Sebelum Pingsan (Gejala): Mengantuk, menguap, terlihat pucat, pusing, pandangan kabur atau berkunang-kunang, tubuh terasa lemah.",
        "Tanda Saat Pingsan (Kesadaran): Tidak sadar sesaat dan tidak merespons saat dipanggil.",
        "Napas & Nadi: Korban masih bernapas, nadi teraba lemah.",
        "Durasi: Umumnya sadar kembali dalam waktu singkat (kurang dari 1 menit).",
      ],
      note: "Perhatikan durasi! Pingsan umumnya pulih spontan kurang dari 1 menit. Jika korban tak sadar lebih dari 1 menit, waspadai kondisi darurat yang lebih serius.",
    },
    langkah: {
      title: "2. Pertolongan Awal Jika Menemukan Seseorang Pingsan",
      steps: [
        {
          number: 1,
          title: "Langkah 1: Tetap Tenang & Amankan Lokasi",
          description:
            "Tetap tenang dan pastikan lokasi aman bagi penolong dan korban (misalnya jauhkan dari lalu lintas).",
        },
        {
          number: 2,
          title: "Langkah 2: Periksa Respons & Napas (Maks 10 Detik)",
          description:
            "Periksa respons korban dengan menepuk bahunya dan memanggil dengan keras, lalu periksa napas maksimal 10 detik. Jika korban tidak bernapas atau napas tidak normal, segera lakukan Bantuan Hidup Dasar (BHD).",
        },
        {
          number: 3,
          title: "Langkah 3: Hubungi Layanan Darurat 112 / 119",
          description:
            "Minta orang sekitar menghubungi layanan darurat (112 atau 119) jika korban tidak sadar lebih dari 1 menit, mengalami cedera, atau tampak sakit berat.",
        },
        {
          number: 4,
          title: "Langkah 4: Baringkan & Tinggikan Tungkai ±30 cm",
          description:
            "Baringkan korban telentang pada permukaan datar, lalu tinggikan kedua tungkai sekitar 30 cm (lebih tinggi dari jantung) jika tidak ada dugaan cedera tulang.",
        },
        {
          number: 5,
          title: "Langkah 5: Longgarkan Pakaian & Beri Udara Segar",
          description:
            "Longgarkan pakaian yang ketat (kerah, ikat pinggang) dan pastikan korban mendapat udara segar. Beri ruang dan jangan biarkan korban dikerumuni.",
        },
        {
          number: 6,
          title: "Langkah 6: Miringkan Tubuh Jika Muntah",
          description:
            "Jika korban muntah atau tetap tidak sadar tetapi bernapas normal, miringkan tubuhnya agar muntahan tidak masuk ke saluran pernapasan.",
        },
        {
          number: 7,
          title: "Langkah 7: Dilarang Menampar / Mengguyur Air",
          description:
            "Jangan menampar, mengguyur dengan air, atau memberi makan dan minum selama korban belum sadar penuh.",
        },
        {
          number: 8,
          title: "Langkah 8: Bantu Duduk Perlahan & Minum Manis",
          description:
            "Setelah korban sadar, bantu duduk perlahan, lalu berikan air minum atau minuman manis sedikit demi sedikit. Jangan langsung membantunya berdiri atau berkendara.",
        },
        {
          number: 9,
          title: "Langkah 9: Periksa Luka Jatuh & Pantau Napas",
          description:
            "Periksa apakah ada luka akibat terjatuh, serta pantau kesadaran dan napas sampai bantuan medis datang.",
        },
      ],
      criticalInstruction:
        "Segera cari pertolongan medis jika pingsan lebih dari 1 menit, terjadi berulang, atau disertai nyeri dada, sesak napas, kejang, kelumpuhan, cedera kepala, atau korban sedang hamil, lansia, atau memiliki penyakit jantung dan diabetes.",
    },
    hindari: {
      title: "Tindakan yang Berbahaya & Harus Dihindari",
      items: [
        "Jangan menampar, memukul wajah, atau mengguyur air ke kepala dan tubuh korban.",
        "Jangan memberi makan atau minum selama korban belum sadar penuh (risiko tersedak dan aspirasi paru).",
        "Jangan langsung memaksa korban berdiri atau mengemudikan kendaraan sesaat setelah sadar.",
        "Jangan meninggikan tungkai jika ada dugaan patah tulang paha, panggul, atau cedera leher/tulang belakang.",
        "Jangan biarkan kerumunan warga mengelilingi korban sehingga menghambat sirkulasi udara segar.",
      ],
    },
    kapanDarurat: {
      title: "Kapan Wajib Segera Hubungi 112 / 119 & Cari Bantuan Medis?",
      content:
        "Segera cari pertolongan medis dan hubungi 112 / 119 jika:",
      items: [
        "Pingsan berlangsung lebih dari 1 menit atau terjadi berulang kali.",
        "Disertai keluhan nyeri dada, sesak napas, atau jantung berdebar kencang.",
        "Disertai kejang, kelumpuhan, atau kesulitan berbicara.",
        "Korban mengalami cedera kepala akibat terbentur saat terjatuh.",
        "Korban sedang hamil, lansia, atau memiliki riwayat penyakit jantung dan diabetes.",
      ],
    },
    ringkasan:
      "Sinkop (pingsan) adalah kehilangan kesadaran sementara akibat penurunan perfusi serebral global yang bersifat reversibel dan pulih spontan. 9 langkah pertolongan: amankan lokasi (3A), cek respons & napas <10 detik (bila tidak bernapas segera BHD), panggil 112/119 jika >1 menit, baringkan datar & tinggikan tungkai 30 cm, longgarkan pakaian & beri udara segar, miringkan jika muntah, jangan tampar/guyur air, bantu duduk perlahan dan beri minum manis setelah sadar penuh, serta cek luka akibat terjatuh.",
    relatedSlugs: ["perdarahan", "fraktur"],
  },
  {
    slug: "fraktur",
    orderNumber: 4,
    title: "Materi 4 — Fraktur (Patah Tulang)",
    subtitle: "Mengenal Fraktur Terbuka & Tertutup Serta 9 Langkah Pertolongan Awal",
    description:
      "Fraktur dapat diartikan sebagai retak atau patah pada tulang yang berfungsi sebagai penopang tubuh manusia dan tempat melekatnya otot. (Qasanah, Winarto, & dkk, 2023)",
    category: "Materi 4 — Fraktur",
    categoryColor: "bg-yellow/10 text-yellow-dark border-yellow/40",
    accentColor: "#FFD166",
    bgColor: "bg-yellow-light",
    iconBg: "bg-yellow/10",
    heroImage: "fraktur",
    pengertian: {
      title: "1. Mengenal Fraktur",
      content:
        "Fraktur dapat diartikan sebagai retak atau patah pada tulang. Tulang merupakan suatu komponen tubuh yang sangat penting, karena memiliki fungsi sebagai tempat melekatnya otot, penopang tubuh manusia supaya dapat bergerak secara maksimal (Qasanah, Winarto, & dkk, 2023). Fraktur terbagi menjadi fraktur terbuka dan fraktur tertutup. Dalam website ditampilkan ilustrasi untuk membantu pengguna mengenali karakteristik masing-masing jenis fraktur.",
      note: "Fraktur terbuka memiliki tingkat bahaya lebih berat karena risiko perdarahan banyak dan infeksi tinggi, sehingga membutuhkan pertolongan medis segera.",
    },
    tanda: {
      title: "Karakteristik Fraktur Tertutup & Terbuka",
      items: [
        "Fraktur tertutup: Tidak ada fragmen tulang yang menembus kulit dan karena itu lokasi fraktur tidak terkontaminasi oleh lingkungan kulit luar.",
        "Tanda fraktur tertutup: Nyeri hebat, bengkak, memar, bentuk anggota tubuh tampak berubah, dan sulit digerakkan.",
        "Tingkat bahaya fraktur tertutup: Risiko infeksi lebih rendah, tetapi tetap membutuhkan penanganan medis karena dapat merusak pembuluh darah dan saraf.",
        "Fraktur terbuka: Fraktur dimana relasi melalui kondisi eksternal terjadi pada kulit.",
        "Tanda fraktur terbuka: Perdarahan, nyeri hebat, bengkak, dan bentuk anggota tubuh berubah.",
        "Tingkat bahaya fraktur terbuka: Lebih berat karena risiko perdarahan banyak dan infeksi tinggi, sehingga membutuhkan pertolongan medis segera.",
      ],
      note: "Penanganan fraktur di jalan raya berfokus pada imobilisasi dan pencegahan cedera sekunder tanpa mencoba mengembalikan posisi tulang.",
    },
    langkah: {
      title: "2. Pertolongan Awal Jika Menemukan Seseorang yang Dicurigai Mengalami Patah Tulang",
      steps: [
        {
          number: 1,
          title: "Langkah 1: Tenang & Amankan Lokasi",
          description:
            "Tetap tenang dan pastikan lokasi aman bagi penolong dan korban. Jangan memindahkan korban kecuali ada bahaya langsung (misalnya lalu lintas atau api).",
        },
        {
          number: 2,
          title: "Langkah 2: Hubungi Layanan Darurat 112 / 119",
          description:
            "Minta orang sekitar menghubungi layanan darurat (112 atau 119), terutama pada fraktur terbuka, perdarahan banyak, atau dugaan cedera kepala, leher, tulang belakang, panggul, atau paha.",
        },
        {
          number: 3,
          title: "Langkah 3: Diamkan Bagian Cedera",
          description:
            "Minta korban tetap diam dan jangan menggerakkan bagian yang cedera. Jangan mencoba meluruskan tulang atau memasukkan kembali tulang yang menonjol.",
        },
        {
          number: 4,
          title: "Langkah 4: Waspada Cedera Leher & Jangan Lepas Helm",
          description:
            "Jika dicurigai cedera leher atau tulang belakang (misalnya jatuh dari motor, nyeri leher atau punggung, kesemutan), jangan gerakkan korban. Jangan melepas helm kecuali menghalangi jalan napas.",
        },
        {
          number: 5,
          title: "Langkah 5: Tutup Luka Fraktur Terbuka",
          description:
            "Fraktur terbuka: Tutup luka dengan kain bersih atau kassa. Jika berdarah, tekan lembut di sekitar luka tanpa menekan ujung tulang yang menonjol.",
        },
        {
          number: 6,
          title: "Langkah 6: Kompres Dingin Fraktur Tertutup",
          description:
            "Fraktur tertutup: Kompres dingin dengan es yang dibungkus kain pada area yang bengkak selama sekitar 20 menit. Jangan menempelkan es langsung ke kulit.",
        },
        {
          number: 7,
          title: "Langkah 7: Pasang Bidai Imobilisasi (Jika Terlatih)",
          description:
            "Jika terlatih dan bantuan lama datang, imobilisasi bagian yang cedera dengan bidai (papan, kayu, atau karton) yang mencakup sendi di atas dan di bawah patahan, lalu ikat tidak terlalu kencang.",
        },
        {
          number: 8,
          title: "Langkah 8: Periksa Sirkulasi Ujung Jari",
          description:
            "Periksa ujung anggota gerak di bawah bidai atau balutan: pastikan jari tetap hangat, berwarna merah muda, dan masih dapat merasakan sentuhan.",
        },
        {
          number: 9,
          title: "Langkah 9: Jaga Kehangatan & Pantau Tanda Vital",
          description:
            "Jaga korban tetap hangat, jangan beri makan atau minum, serta pantau kesadaran dan napasnya sampai bantuan medis datang.",
        },
      ],
      criticalInstruction:
        "Segera cari pertolongan medis pada semua dugaan patah tulang, terutama jika ujung tulang terlihat, perdarahan banyak, atau bagian tubuh di bawah cedera tampak pucat, dingin, kebiruan, atau mati rasa.",
    },
    hindari: {
      title: "Tindakan yang Berbahaya & Harus Dihindari",
      items: [
        "Jangan mencoba meluruskan tulang atau memasukkan kembali tulang yang menonjol ke dalam kulit.",
        "Jangan memindahkan atau menggerakkan korban jika dicurigai cedera leher atau tulang belakang.",
        "Jangan melepas helm korban kecelakaan motor kecuali menghalangi jalan napas.",
        "Jangan menempelkan es batu langsung ke permukaan kulit tanpa lapisan kain.",
        "Jangan mengikat bidai terlalu kencang sehingga menghambat aliran darah (cek kehangatan jari).",
        "Jangan memberi makan atau minum kepada korban yang dicurigai memerlukan pembiusan/operasi darurat.",
      ],
    },
    kapanDarurat: {
      title: "Kapan Wajib Segera Hubungi 112 / 119 & Bantuan Medis?",
      content:
        "Segera cari pertolongan medis pada semua dugaan patah tulang, terutama jika:",
      items: [
        "Ujung tulang terlihat menonjol keluar menembus kulit (fraktur terbuka).",
        "Terjadi perdarahan banyak dan aktif di sekitar area patahan.",
        "Bagian tubuh di bawah cedera tampak pucat, dingin, kebiruan, atau mati rasa.",
        "Dugaan cedera pada leher, tulang punggung, panggul, atau tulang paha (femur).",
        "Korban mengalami penurunan kesadaran atau tanda-tanda syok berat.",
      ],
    },
    ringkasan:
      "Fraktur adalah retak atau patah pada tulang penopang tubuh. Kenali 2 jenisnya: fraktur tertutup (kulit utuh, risiko infeksi rendah) dan fraktur terbuka (relasi eksternal kulit, risiko perdarahan & infeksi tinggi). 9 langkah pertolongan: amankan lokasi tanpa memindahkan korban, panggil 112/119, instruksikan diam tanpa meluruskan tulang, proteksi leher & jangan lepas helm sembarangan, tutup luka fraktur terbuka dengan kain bersih tanpa menekan tulang, kompres es berbalut kain 20 menit pada fraktur tertutup, pasang bidai melewati dua sendi bila terlatih, pastikan jari tetap hangat dan berasa, serta jaga kehangatan tubuh sampai ambulans tiba.",
    relatedSlugs: ["perdarahan", "pingsan"],
  },
];
