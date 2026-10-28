# 🚨 E-Art Gallery of Emergency
> **Platform Edukasi Seni Visual Kedaruratan Medis & Pertolongan Pertama bagi Mitra Pengemudi Ojek Online di Jalan Raya**

E-Art Gallery of Emergency adalah platform pembelajaran interaktif berbasis web yang memadukan **pendidikan medis pertolongan pertama**, **ilustrasi visual artistik/anatomis interaktif**, serta **sentuhan warisan budaya Nusantara (Batik)**. Platform ini dirancang khusus untuk meningkatkan literasi dan kesiapsiagaan tanggap darurat para mitra pengemudi ojol saat menghadapi kecelakaan lalu lintas atau insiden medis di jalan raya.

---

## 📌 Daftar Isi
1. [Alur Perjalanan Pengguna (User Learning Flow)](#1-alur-perjalanan-pengguna-user-learning-flow)
2. [Alur Tindakan Kedaruratan di Lapangan (Prinsip 3A)](#2-alur-tindakan-kedaruratan-di-lapangan-prinsip-3a)
3. [Arsitektur Aplikasi & Rute Sistem](#3-arsitektur-aplikasi--rute-sistem)
4. [Fitur Unggulan Platform](#4-fitur-unggulan-platform)
5. [Struktur Direktori Proyek](#5-struktur-direktori-proyek)
6. [Teknologi yang Digunakan (Tech Stack)](#6-teknologi-yang-digunakan-tech-stack)
7. [Panduan Instalasi & Menjalankan Aplikasi](#7-panduan-instalasi--menjalankan-aplikasi)

---

## 1. Alur Perjalanan Pengguna (User Learning Flow)

Pengguna (mitra pengemudi/siswa pelatihan) mengikuti 5 fase pembelajaran terstruktur dari pemahaman awal hingga evaluasi kesiapsiagaan:

```mermaid
flowchart TD
    A([🚦 Masuk ke Beranda / Landing Page]) --> B[Memahami Konsep Dasar: Tarahu, CP & ATP]
    B --> C[Eksplorasi Katalog Materi Kedaruratan]
    
    C --> D1[Modul 1: Manajemen Perdarahan]
    C --> D2[Modul 2: Pertolongan Pingsan / Sinkop]
    C --> D3[Modul 3: Penanganan Fraktur / Patah Tulang]
    
    D1 --> E1[Simulasi SVG Anatomis: Arteri, Vena, Kapiler]
    D2 --> E2[Studi Kasus Lapangan: Dehidrasi & Elevasi Tungkai]
    D3 --> E3[Simulasi SVG Anatomis: Fraktur Tertutup vs Terbuka]
    
    E1 --> F[Buka Lembar Kerja Kasus Driver / LKPD]
    E2 --> F
    E3 --> F
    
    F --> G[Menganalisis 3 Kasus Kedaruratan Jalan Raya]
    G --> H[Kuis Evaluasi Kesiapsiagaan Interaktif]
    
    H --> I{Apakah Skor Memenuhi Kriteria?}
    I -- Perlu Penguatan --> J[Review Pembahasan Medis Lengkap]
    J --> C
    I -- Kompeten --> K([🏆 Mitra Driver Siaga Tanggap Darurat Siap Terjun])
```

---

## 2. Alur Tindakan Kedaruratan di Lapangan (Prinsip 3A)

Standar Operasional Prosedur (SOP) medis yang diajarkan pada platform ini mengikuti pedoman BHD dan pertolongan pertama jalan raya:

```mermaid
flowchart TD
    START([⚠️ Terjadi Insiden di Jalan Raya]) --> P3A[Terapkan Prinsip 3A]
    
    subgraph S_PRINSIP ["Prinsip 3A Utama"]
        P3A --> A1[1. Aman Diri: Parkir aman, gunakan sarung tangan/plastik bersih]
        A1 --> A2[2. Aman Lingkungan: Pasang hazard, amankan arus lalu lintas]
        A2 --> A3[3. Aman Korban: Jangan memindahkan korban sembarangan]
    end

    A3 --> CHECK{Identifikasi Kondisi Korban}

    CHECK -- Perdarahan Aktif --> CASE_BLEED[Tindakan Perdarahan]
    CHECK -- Pingsan / Tidak Sadar --> CASE_FAINT[Tindakan Pingsan]
    CHECK -- Dugaan Patah Tulang --> CASE_FRACTURE[Tindakan Fraktur]

    subgraph ACTION_B ["Manajemen Kasus"]
        CASE_BLEED --> B1[Balut tekan langsung dengan kain bersih steril]
        B1 --> B2[Kenali Arteri / Vena / Kapiler - Tinggikan jika memungkinkan]

        CASE_FAINT --> F1[Cek respons & napas - Posisikan telentang datar]
        F1 --> F2[Tinggikan tungkai 30 cm & longgarkan helm/jaket]
        F2 --> F3[PANTANGAN: Jangan beri minum sebelum sadar penuh]

        CASE_FRACTURE --> FR1[Imobilisasi area cidera dengan bidai jika terlatih]
        FR1 --> FR2[PANTANGAN KERAS: Dilarang meluruskan atau memijat tulang]
        FR2 --> FR3[Bila fraktur terbuka: Tutup kassa steril tanpa dorong tulang]
    end

    B2 --> CALL[Hubungi Layanan Darurat 112 / 119]
    F3 --> CALL
    FR3 --> CALL

    CALL --> EVAC([🚑 Rujukan dan Evakuasi Tim Medis IGD])
```

---

## 3. Arsitektur Aplikasi & Rute Sistem

Aplikasi dibangun menggunakan arsitektur modern Next.js App Router dengan pre-rendering statis dan interaktivitas komponen klien:

```mermaid
flowchart LR
    subgraph CLIENT ["Frontend / Client Layer"]
        UI[Antarmuka Next.js React 19]
        LENIS[Lenis Smooth Scroll]
        GSAP[GSAP + ScrollTrigger Animation]
        SVG[Komponen SVG Animasi Medis]
    end

    subgraph APP_ROUTER ["Next.js App Router"]
        R_HOME["/ (Beranda + Nuansa Batik)"]
        R_MATERI["/materi (Katalog Materi)"]
        R_DETAIL["/materi/[slug] (Perdarahan / Pingsan / Fraktur)"]
        R_LKPD["/lkpd (Lembar Kerja Driver)"]
        R_EVAL["/evaluasi (Kuis Interaktif)"]
        R_TENTANG["/tentang (Profil & Pengembang)"]
    end

    subgraph DATA_LAYER ["Data & Aset Statis"]
        D_MAT[data/materials.ts]
        D_ART[data/artworks.ts]
        D_LRN[data/learning.ts]
        P_IMG[public/ - Aset Batik & Ilustrasi]
    end

    UI --> APP_ROUTER
    LENIS -. Menjamin scroll 60 FPS .-> UI
    GSAP -. Scroll Reveal & Trigger .-> UI
    SVG -. Visualisasi Anatomi Interaktif .-> R_DETAIL
    
    APP_ROUTER --> DATA_LAYER
```

---

