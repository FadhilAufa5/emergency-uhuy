import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { artworks } from "@/data/artworks";
import { MedicalIllustration } from "@/components/illustrations/MedicalIllustration";
import { ScrollReveal, StaggerReveal } from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedArtwork() {
  return (
    <section id="galeri" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Galeri Pilihan"
            title="Karya Edukasi Pilihan"
            highlight="Pilihan"
            description="Eksplorasi ilustrasi artistik yang dirancang untuk mempermudah pemahaman tentang pertolongan pertama."
          />
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" childSelector=".artwork-card">
          {artworks.map((artwork, index) => (
            <article
              key={artwork.id}
              className={`artwork-card group relative bg-white rounded-2xl border border-gray-200/60 overflow-hidden card-hover ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image area */}
              <div className={`relative aspect-[4/3] overflow-hidden ${artwork.bgColor}`}>
                <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
                  <MedicalIllustration
                    type={artwork.imagePlaceholder as "bleeding" | "seizure" | "cpr"}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${artwork.categoryColor}`}>
                    {artwork.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-ink group-hover:text-red transition-colors duration-300 leading-snug">
                  {artwork.title}
                </h3>
                <p className="mt-2 text-sm text-ink-lighter leading-relaxed line-clamp-2">
                  {artwork.description}
                </p>
                <Link
                  href={`/materi/${artwork.slug}`}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-red hover:text-red-dark transition-colors group/link"
                >
                  Lihat Karya
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
