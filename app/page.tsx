import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
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
          <HeroSection />
          <FeaturedArtwork />
          <CategorySection />
          <CapaianPembelajaran />
          <LearningTimeline />
          <LearningObjectives />
          <MaterialSection />
          <LkpdPreviewSection />
          <EvaluasiPreviewSection />
          <CallToAction />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </SmoothScroll>
  );
}
