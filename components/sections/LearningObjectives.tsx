import { AlertTriangle, Heart, Phone } from "lucide-react";
import { learningObjectives } from "@/data/learning";
import { ScrollReveal, StaggerReveal } from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import BatikBackground from "@/components/ui/BatikBackground";

const iconMap: Record<string, React.ElementType> = {
  AlertTriangle,
  Heart,
  Phone,
};

export default function LearningObjectives() {
  return (
    <section id="tujuan-pembelajaran" className="relative py-20 sm:py-28 overflow-hidden border-b border-ink/5">
      {/* Latar Belakang Batik Nusantara */}
      <BatikBackground
        pattern="kain"
        opacity="opacity-20 sm:opacity-25"
        withOrnaments={true}
        withVignette={true}
        className="z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Kompetensi Driver Siaga"
            title="Keahlian Kunci Driver Ojol"
            highlight="Driver Ojol"
            description="Tiga keterampilan dasar yang dipelajari mitra pengemudi untuk menjadi penolong tangguh dan selamat di jalan raya."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-yellow-light/60 backdrop-blur-xs border border-yellow/20 rounded-xl px-4 py-3 text-center mb-10 max-w-2xl mx-auto shadow-xs">
            <p className="text-xs text-ink-lighter leading-relaxed">
              📌 Tujuan pembelajaran berikut dirancang khusus untuk kesiapsiagaan mitra pengemudi ojek online di aspal jalan raya.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          childSelector=".objective-card"
        >
          {learningObjectives.map((obj) => {
            const IconComp = iconMap[obj.icon] || AlertTriangle;
            return (
              <div
                key={obj.id}
                className="objective-card group bg-white/95 backdrop-blur-xs rounded-2xl border border-gray-200/80 p-6 card-hover shadow-xs"
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${obj.bgColor} mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-xs`}>
                  <IconComp className={`w-5 h-5 ${obj.color}`} />
                </div>
                <h3 className="text-base font-bold text-ink mb-2">
                  {obj.title}
                </h3>
                <p className="text-sm text-ink-lighter leading-relaxed">
                  {obj.description}
                </p>
              </div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
