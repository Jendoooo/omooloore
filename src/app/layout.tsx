import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hon. Ayeola Hammed Ademola | Ọmọ Olóore",
  description: "A timeless legacy of progress, achievement, and compassionate leadership. Discover the vision of Ọmọ Olóore.",
  keywords: ["Omoloore", "Ọmọ Olóore", "Ayeola Hammed Ademola", "Lekki LCDA", "Leadership", "APC", "Nigeria"],
  openGraph: {
    title: "Hon. Ayeola Hammed Ademola | Ọmọ Olóore",
    description: "A Beacon of Progress and Achievement",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} scroll-smooth`}>
      <body className="antialiased bg-[var(--color-platinum)] text-[var(--color-ink)] selection:bg-[var(--color-wealth-gold)] selection:text-white relative">
        {/* Subtle noise texture overlay for premium feel */}
        <div className="noise-overlay" />

        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
