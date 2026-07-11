import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Rehman Sajid - Portfolio",
  description: "Web Development, UI/UX, and Branding solutions by Abdul Rehman Sajid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col relative text-gray-100 selection:bg-[#d4af37]/30 selection:text-white">
        {/* Subtle background glow effects */}
        <div className="fixed inset-0 -z-20 pointer-events-none bg-[#050505]">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
        </div>

        {/* Floating abstract glass shards for luxurious depth */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Shard 1 */}
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-[2px] border border-white/[0.02] rounded-3xl transform rotate-12 animate-float-slower" />
          {/* Shard 2 */}
          <div className="absolute top-[60%] right-[15%] w-96 h-96 bg-gradient-to-tr from-white/[0.02] to-transparent backdrop-blur-[4px] border border-white/[0.03] rounded-full transform -rotate-12 animate-float-slowest" />
          {/* Shard 3 */}
          <div className="absolute -bottom-[10%] left-[30%] w-80 h-80 bg-gradient-to-tl from-[#d4af37]/[0.02] to-transparent backdrop-blur-[1px] border border-[#d4af37]/[0.02] rounded-[4rem] transform rotate-45 animate-float-slow" />
        </div>
        
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 relative z-10">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
