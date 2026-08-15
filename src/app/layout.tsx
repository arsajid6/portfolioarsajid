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
  title: "Abdul Rehman Sajid | Website Developer & UI/UX Designer",
  description: "Portfolio of Abdul Rehman Sajid. Professional Website Developer, UI/UX Designer, and WordPress expert building modern, responsive business solutions.",
  alternates: {
    canonical: "https://portfolioarsajid.vercel.app/",
  },
  openGraph: {
    title: "Abdul Rehman Sajid | Web Developer & UI/UX Designer",
    description: "Professional Website Developer building modern, responsive, and secure custom web solutions for businesses.",
    url: "https://portfolioarsajid.vercel.app/",
    siteName: "Abdul Rehman Sajid Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman Sajid | Web Developer",
    description: "Professional Website Developer building modern, responsive custom web solutions.",
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
        <div className="fixed inset-0 -z-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
        </div>

        {/* Floating abstract glass shards for luxurious depth */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-[2px] border border-white/[0.02] rounded-3xl transform rotate-12 animate-float-slower" />
          <div className="absolute top-[60%] right-[15%] w-96 h-96 bg-gradient-to-tr from-white/[0.02] to-transparent backdrop-blur-[4px] border border-white/[0.03] rounded-full transform -rotate-12 animate-float-slowest" />
          <div className="absolute -bottom-[10%] left-[30%] w-80 h-80 bg-gradient-to-tl from-[#d4af37]/[0.02] to-transparent backdrop-blur-[1px] border border-[#d4af37]/[0.02] rounded-[4rem] transform rotate-45 animate-float-slow" />
        </div>
        
        <Navbar />
        
        <main className="flex-1 w-full max-w-6xl mx-auto pt-28 pb-12 relative z-10 flex flex-col gap-24 sm:gap-32">
          {children}
        </main>
        
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
