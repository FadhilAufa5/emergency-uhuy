"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Plus,
  Home,
  BookOpen,
  FileText,
  ClipboardCheck,
  Info,
  PhoneCall,
  ArrowRight,
  Shield,
  Bike,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/materi", label: "Materi", icon: BookOpen },
  { href: "/lkpd", label: "LKPD", icon: FileText },
  { href: "/evaluasi", label: "Evaluasi", icon: ClipboardCheck },
  { href: "/tentang", label: "Tentang", icon: Info },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(32,35,44,0.06)] border-b border-gray-200/70 py-2.5 sm:py-3"
            : "bg-cream/80 backdrop-blur-md border-b border-ink/5 py-3 sm:py-4"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo — Always shows text on mobile and desktop */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
              aria-label="E-Art Gallery of Emergency — Beranda"
            >
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-red to-red-dark text-white shadow-md shadow-red/25 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Plus className="w-5 h-5 sm:w-5.5 sm:h-5.5" strokeWidth={3} />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-dark opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm sm:text-base font-extrabold text-ink tracking-tight group-hover:text-red transition-colors leading-tight">
                    E-Art Gallery
                  </span>
                  <span className="hidden xs:inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-red/10 text-red border border-red/20 leading-none">
                    Ojol
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-red leading-tight -mt-0.5 flex items-center gap-1">
                  <span className="hidden sm:inline">Emergency •</span>
                  <span>Driver Siaga</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-cream/60 p-1.5 rounded-full border border-ink/5">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href));
                const IconComp = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-white text-red shadow-sm border border-red/10"
                        : "text-ink-light hover:text-ink hover:bg-white/70"
                    }`}
                  >
                    <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-red" : "text-ink-lighter"}`} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Action: Emergency 119 + CTA + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Emergency Hotline 119 Quick Call Chip */}
              <a
                href="tel:119"
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-red-light/80 border border-red/30 text-red hover:bg-red hover:text-white transition-all text-xs font-bold shadow-xs active:scale-95 group/call"
                title="Panggilan Darurat Medis Bebas Pulsa 119"
              >
                <PhoneCall className="w-3.5 h-3.5 animate-pulse text-red group-hover/call:text-white transition-colors" />
                <span className="text-[11px] sm:text-xs">119</span>
                <span className="hidden md:inline text-[10px] opacity-80 font-normal">Darurat</span>
              </a>

              {/* Desktop CTA */}
              <Link
                href="/materi"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red to-red-dark rounded-full hover:brightness-105 transition-all shadow-md shadow-red/20 hover:shadow-lg hover:shadow-red/30 active:scale-95"
              >
                <span>Mulai Belajar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-ink/10 text-ink hover:bg-gray-50 active:scale-95 transition-all shadow-xs"
                aria-label={isMobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X className="w-5 h-5 text-red" /> : <Menu className="w-5 h-5 text-ink" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden animate-fadeIn">
          {/* Backdrop blur */}
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="absolute top-18 right-3 left-3 sm:right-6 sm:left-6 max-w-lg mx-auto bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/80 p-5 sm:p-6 animate-slideDown overflow-hidden">
            {/* Header info in mobile menu */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-red text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  <Plus className="w-4 h-4" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-ink">E-Art Gallery of Emergency</div>
                  <div className="text-[10px] text-ink-lighter flex items-center gap-1">
                    <Bike className="w-3 h-3 text-red inline" />
                    Panduan Pertolongan Pertama Driver Ojol
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-1.5 rounded-lg text-ink-lighter hover:text-ink hover:bg-gray-100 transition-colors"
                aria-label="Tutup menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav links with icons */}
            <nav className="flex flex-col gap-1.5 py-4">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href));
                const IconComp = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-red-light/50 text-red border border-red/20 shadow-xs"
                        : "text-ink hover:bg-cream/80 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                          isActive ? "bg-red text-white" : "bg-cream text-ink-light"
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span>{link.label}</span>
                    </div>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-red" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-ink-lighter" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Emergency Hotline 119 in Mobile Menu */}
            <div className="pt-3 pb-4 border-t border-gray-100">
              <a
                href="tel:119"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-red-dark via-red to-red-dark text-white shadow-md shadow-red/20 hover:brightness-105 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5 text-white animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">Panggilan Darurat Medis 119</div>
                    <div className="text-[10px] text-white/80 leading-tight">Bebas Pulsa • Ambulans Kemenkes</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-white text-red font-extrabold text-xs">
                  PANGGIL
                </span>
              </a>
            </div>

            {/* Primary Action Button */}
            <div className="pt-1">
              <Link
                href="/materi"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-5 text-sm font-bold text-white bg-ink rounded-2xl hover:bg-ink-light transition-all shadow-md active:scale-98"
              >
                <span>Mulai Belajar Modul Driver</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
