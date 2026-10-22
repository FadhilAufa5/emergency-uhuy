"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-red text-white shadow-lg shadow-red/25 transition-all duration-300 hover:bg-red-dark hover:shadow-xl hover:shadow-red/30 active:scale-90 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Kembali ke atas"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
