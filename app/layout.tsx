import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "E-Art Gallery of Emergency — Pertolongan Pertama untuk Pengemudi Ojek Online",
  description:
    "Ruang edukasi visual bagi mitra pengemudi ojek online untuk memahami pertolongan pertama di jalan raya: penanganan perdarahan kecelakaan, kejang, dan Bantuan Hidup Dasar (BHD).",
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
      className={`${plusJakarta.variable} ${caveat.variable} antialiased`}
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
