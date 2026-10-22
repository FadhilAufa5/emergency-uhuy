import { BookOpen, FileCheck, Bike } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CapaianPembelajaran() {
  return (
    <section id="capaian-pembelajaran" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Standar Kesiapsiagaan Driver"
            title="Capaian Pembelajaran (CP) Mitra Ojol"
            highlight="Mitra Ojol"
            description="Kompetensi tanggap darurat yang diharapkan dikuasai oleh mitra pengemudi ojek online sebagai garda penolong pertama di jalan raya."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm">
              {/* Header */}
              <div className="bg-blue/5 border-b border-blue/10 px-6 sm:px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue/10">
                    <Bike className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ink">
                      Capaian Pembelajaran Driver Siaga
                    </h3>
                    <p className="text-xs text-ink-lighter mt-0.5">
                      Kedaruratan Jalan Raya — Pertolongan Pertama untuk Mitra Pengemudi
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 sm:px-8 py-6 space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-cream/50">
                  <FileCheck className="w-5 h-5 text-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-ink leading-relaxed">
                      <em className="text-ink-lighter">
                        [Standar Pelatihan — Capaian Pembelajaran ini disusun sebagai pedoman kompetensi pertolongan pertama lapangan bagi mitra pengemudi ojek online dan dapat diselaraskan dengan kurikulum pelatihan resmi instansi terkait.]
                      </em>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-100">
                  <p className="text-sm text-ink leading-relaxed">
                    Mitra pengemudi ojek online mampu mengenali situasi gawat darurat di jalan raya, menerapkan prinsip 3A (Aman Diri, Aman Lalu Lintas, Aman Korban), memberikan balut tekan efektif pada perdarahan kecelakaan, mengamankan posisi penumpang atau warga saat kejang tanpa mitos berbahaya, serta melakukan kompresi dada BHD/RJP darurat sembari menghubungkan lokasi kejadian secara akurat kepada ambulans 119.
                  </p>
                </div>

                <div className="bg-yellow-light/50 rounded-xl px-4 py-3">
                  <p className="text-xs text-ink-lighter leading-relaxed">
                    📌 Catatan: Capaian Pembelajaran di atas dirancang khusus untuk konteks respon darurat di jalanan, halte, pangkalan, dan ruang publik yang sering dilalui pengemudi ojek online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
