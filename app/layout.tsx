import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { cn } from "@/lib/utils";

// Remove Geist — not used in the design; PlusJakarta is the primary font
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",  // prevent FOIT (flash of invisible text)
  preload: true,
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],  // drop weight 500 — unused
  display: "swap",
  preload: false,  // only used for handwritten accents
});

export const metadata: Metadata = {
  title: "E-Art Gallery of Emergency — Pertolongan Pertama untuk Pengemudi Ojek Online",
  description:
    "Ruang edukasi visual bagi mitra pengemudi ojek online untuk memahami pertolongan pertama di jalan raya: penanganan perdarahan kecelakaan, pertolongan pingsan (sinkop), dan imobilisasi fraktur (patah tulang).",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={cn("antialiased", plusJakarta.variable, caveat.variable)}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-cream text-ink font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
