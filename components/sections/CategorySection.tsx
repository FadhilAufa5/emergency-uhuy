import Link from "next/link";
import {
  BookOpen,
  Target,
  Route,
  Layers,
  FileText,
  ClipboardCheck,
} from "lucide-react";
import { categories } from "@/data/artworks";
import { ScrollReveal, StaggerReveal } from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Target,
  Route,
  Layers,
  FileText,
  ClipboardCheck,
};

export default function CategorySection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Kategori"
            title="Jelajahi Galeri"
            highlight="Galeri"
            description="Temukan berbagai bagian pembelajaran yang tersedia dalam galeri edukasi ini."
          />
        </ScrollReveal>

        <StaggerReveal
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          childSelector=".category-card"
        >
          {categories.map((cat) => {
            const IconComp = iconMap[cat.icon] || BookOpen;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className={`category-card group flex flex-col items-center text-center p-5 rounded-2xl border ${cat.borderColor} ${cat.bgColor} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 mb-3 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <IconComp className={`w-5 h-5 ${cat.color}`} />
                </div>
                <h3 className="text-sm font-bold text-ink leading-snug">{cat.name}</h3>
                <p className="mt-1 text-[11px] text-ink-lighter leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </Link>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
