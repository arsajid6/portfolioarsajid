"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[55vh] sm:min-h-[62vh] flex flex-col justify-center items-center text-center px-4 relative pt-2 sm:pt-6 pb-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="mb-6 inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            Full-Stack Web Developer &amp; UI/UX Designer
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.18] sm:leading-[1.15]">
          Custom business websites &amp; <br className="hidden md:block" />
          <span className="bg-gradient-to-br from-[#d4af37] via-white to-gray-400 bg-clip-text text-transparent">
            management systems.
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Hi, I&apos;m <strong className="text-white font-medium">Abdul Rehman Sajid</strong>. I design and build responsive business websites, retail POS &amp; billing solutions, academy portals, and modern e-commerce stores tailored to real operational workflows.
        </p>
        
        {/* High-conversion primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto">
          <a 
            href="#contact"
            className="w-full sm:w-auto flex-1 flex justify-center items-center gap-2 px-8 py-3.5 sm:py-4 bg-[#d4af37] text-black rounded-full font-bold hover:bg-white hover:scale-[1.03] transition-all shadow-[0_0_25px_rgba(212,175,55,0.25)] text-sm sm:text-base"
          >
            Request a Quote <ArrowRight className="w-4 h-4" />
          </a>
          
          <a 
            href="#projects"
            className="w-full sm:w-auto flex-1 flex justify-center items-center gap-2 px-8 py-3.5 sm:py-4 bg-white/5 rounded-full font-medium text-white hover:bg-white/10 transition-all border border-white/10 hover:border-[#d4af37]/40 text-sm sm:text-base backdrop-blur-sm"
          >
            Explore Projects
          </a>
        </div>

        {/* Supplementary WhatsApp consultation touchpoint */}
        <div className="mt-4 flex justify-center items-center">
          <a
            href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20or%20custom%20software%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-[#25D366] transition-colors py-1 group"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span>Prefer instant chat? <span className="underline decoration-[#25D366]/40 underline-offset-4 group-hover:decoration-[#25D366]">Start a WhatsApp consultation</span> &rarr;</span>
          </a>
        </div>

        {/* Core Capabilities Row */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-400 font-medium max-w-3xl mx-auto">
          <span className="text-gray-500 uppercase tracking-wider text-[11px] font-semibold w-full sm:w-auto mb-1 sm:mb-0">Core Focus:</span>
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300 hover:border-[#d4af37]/30 transition-colors">Business Websites</span>
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300 hover:border-[#d4af37]/30 transition-colors">POS &amp; Invoicing</span>
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300 hover:border-[#d4af37]/30 transition-colors">Custom Admin Portals</span>
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300 hover:border-[#d4af37]/30 transition-colors">WordPress &amp; Elementor</span>
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300 hover:border-[#d4af37]/30 transition-colors">E-Commerce Stores</span>
        </div>
      </motion.div>
    </section>
  );
}
