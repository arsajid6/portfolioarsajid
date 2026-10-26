import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolioarsajid.vercel.app"),
  title: "Abdul Rehman Sajid | Full-Stack Web Developer & UI/UX Designer",
  description: "Portfolio of Abdul Rehman Sajid — Full-Stack Web Developer & UI/UX Designer specializing in custom business websites, management systems, POS billing platforms, and WordPress solutions.",
  alternates: {
    canonical: "https://portfolioarsajid.vercel.app/",
  },
  openGraph: {
    title: "Abdul Rehman Sajid | Full-Stack Web Developer",
    description: "Professional Full-Stack Web Developer specializing in custom business websites, management systems, POS billing platforms, and WordPress solutions.",
    url: "https://portfolioarsajid.vercel.app/",
    siteName: "Abdul Rehman Sajid Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdul Rehman Sajid — Full-Stack Web Developer & UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman Sajid | Full-Stack Web Developer",
    description: "Professional Full-Stack Web Developer specializing in custom business websites, management systems, POS billing platforms, and WordPress solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col relative text-gray-100 selection:bg-[#d4af37]/30 selection:text-white bg-[#050505] overflow-x-hidden">
        {/* Subtle background glow effects */}
        <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
        </div>

        {/* Ambient atmospheric glows for luxurious depth */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[18%] left-[5%] w-96 h-96 bg-[#d4af37]/[0.03] rounded-full blur-[140px]" />
          <div className="absolute top-[55%] right-[8%] w-[32rem] h-[32rem] bg-white/[0.02] rounded-full blur-[160px]" />
          <div className="absolute bottom-[5%] left-[25%] w-96 h-96 bg-[#d4af37]/[0.025] rounded-full blur-[140px]" />
        </div>
        
        <Navbar />
        
        <main className="flex-1 w-full max-w-6xl mx-auto pt-28 pb-12 relative z-10 flex flex-col gap-24 sm:gap-32 overflow-x-clip">
          {children}
        </main>
        
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
