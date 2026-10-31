import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BatikLogoLoop from "@/components/sections/BatikLogoLoop";
import AboutVideoSection from "@/components/sections/AboutVideoSection";
import FeaturedArtwork from "@/components/sections/FeaturedArtwork";
import CategorySection from "@/components/sections/CategorySection";
import CapaianPembelajaran from "@/components/sections/CapaianPembelajaran";
import LearningTimeline from "@/components/sections/LearningTimeline";
import LearningObjectives from "@/components/sections/LearningObjectives";
import MaterialSection from "@/components/sections/MaterialSection";
import LkpdPreviewSection from "@/components/sections/LkpdPreviewSection";
import EvaluasiPreviewSection from "@/components/sections/EvaluasiPreviewSection";
import CallToAction from "@/components/sections/CallToAction";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-cream selection:bg-red selection:text-white">
        <Navbar />
        <main>
          {/* 1. Hero Section dengan Latar Batik & Ilustrasi Driver */}
          <HeroSection />

          {/* 2. LogoLoop Motif Batik Nusantara (Tepat di tengah-tengah Hero & Video About) */}
          <BatikLogoLoop />

          {/* 3. Section Video & About Me */}
          <AboutVideoSection />

          {/* 4. Galeri Pilihan dengan Latar Batik Nusantara */}
          <FeaturedArtwork />

          {/* 5. Kategori Kasus Kedaruratan Jalan */}
          <CategorySection />

          {/* 6. Capaian Pembelajaran Driver Siaga dengan Latar Batik Flora */}
          <CapaianPembelajaran />

          {/* 7. Alur Pembelajaran Bertahap */}
          <LearningTimeline />

          {/* 8. Tujuan Pembelajaran Kunci dengan Latar Batik Gurdo */}
          <LearningObjectives />

          {/* 9. Modul Materi Interaktif */}
          <MaterialSection />

          {/* 10. Lembar Studi Kasus Lapangan (LKPD) dengan Latar Batik */}
          <LkpdPreviewSection />

          {/* 11. Preview Evaluasi Kuis Interaktif */}
          <EvaluasiPreviewSection />

          {/* 12. Aksi Tanggap Darurat & Kontak Cepat */}
          <CallToAction />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </SmoothScroll>
  );
}
