"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#d4af37]/20 bg-[#050505]/90 backdrop-blur-xl relative z-20 mt-10">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center text-center gap-6">
        
        {/* Top: Brand Logo */}
        <div>
          <Image 
            src="/ars-logo.png" 
            alt="A.R. Sajid - Website Developer" 
            width={450} 
            height={150} 
            className="h-32 md:h-36 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-lg"
            priority
          />
        </div>
        
        {/* Middle: Centered Contact Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 w-full">
          <a href="mailto:arsajid6@gmail.com" className="flex items-center gap-2.5 group">
            <div className="p-2 bg-white/5 rounded-full group-hover:bg-[#d4af37]/20 transition-all border border-transparent group-hover:border-[#d4af37]/30">
              <Mail className="w-4 h-4 text-[#d4af37]" />
            </div>
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors tracking-wide">arsajid6@gmail.com</span>
          </a>
          
          <a href="https://wa.me/923234416045" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 group">
            <div className="p-2 bg-white/5 rounded-full group-hover:bg-[#d4af37]/20 transition-all border border-transparent group-hover:border-[#d4af37]/30">
              <Phone className="w-4 h-4 text-[#d4af37]" />
            </div>
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors tracking-wide">+92 323 4416045</span>
          </a>
          
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/5 rounded-full">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
            </div>
            <span className="text-sm text-gray-300 tracking-wide">Lahore, Pakistan</span>
          </div>
        </div>

        {/* Bottom: Subtle Divider & Credit */}
        <div className="w-full max-w-sm border-t border-white/10 mt-2 pt-5">
          <div className="flex flex-col items-center gap-1.5">
            <p className="text-xs text-white/40 tracking-widest font-light uppercase">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
            <p className="text-[11px] text-[#d4af37]/60 font-light tracking-wide">
              Designed & Developed by Abdul Rehman Sajid
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
