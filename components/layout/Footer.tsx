import Link from "next/link";
import { Plus, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-red text-white">
                <Plus className="w-5 h-5" strokeWidth={3} />
              </div>
              <div>
                <span className="text-base font-bold leading-tight">E-Art Gallery</span>
                <span className="block text-[10px] font-medium text-gray-400 leading-tight -mt-0.5">
                  of Emergency
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Ruang belajar kreatif bagi mitra pengemudi ojek online untuk memahami pertolongan pertama di jalan raya melalui ilustrasi visual yang mudah dipahami.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Beranda" },
                { href: "/materi/perdarahan", label: "Materi" },
                { href: "/lkpd", label: "LKPD" },
                { href: "/evaluasi", label: "Evaluasi" },
                { href: "/tentang", label: "Tentang" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Materi */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Materi
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/materi/perdarahan", label: "Perdarahan" },
                { href: "/materi/kejang", label: "Kejang" },
                { href: "/materi/bhd", label: "Bantuan Hidup Dasar" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Informasi
            </h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-gray-300">Pembuat:</strong> [Nama pembuat / Institusi]
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-gray-300">Sumber Materi:</strong> Disusun berdasarkan
                referensi pertolongan pertama yang dapat diverifikasi dengan tenaga kesehatan.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer + Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-xl p-4 mb-6">
            <p className="text-xs text-gray-400 leading-relaxed text-center">
              ⚕️ Website ini merupakan media edukasi dan <strong className="text-gray-300">bukan pengganti bantuan medis profesional</strong>.
              Semua informasi medis bersifat edukatif dan harus diverifikasi dengan tenaga kesehatan yang kompeten.
              Dalam situasi darurat, segera hubungi layanan darurat <strong className="text-gray-300">119</strong>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © 2026 E-Art Gallery of Emergency. Media Edukasi Digital.
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              &copy; 2026 xyzdto&reg;</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
