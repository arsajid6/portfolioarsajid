"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 relative pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="mb-6 inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            Full-Stack Web Developer &amp; UI/UX Designer
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.15]">
          Custom business websites &amp; <br className="hidden md:block" />
          <span className="bg-gradient-to-br from-[#d4af37] via-white to-gray-400 bg-clip-text text-transparent">
            management systems.
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Hi, I&apos;m <strong className="text-white font-medium">Abdul Rehman Sajid</strong>. I design and build responsive business websites, retail POS &amp; billing solutions, academy portals, and modern e-commerce stores tailored to real operational workflows.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a 
            href="#contact"
            className="w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-4 bg-[#d4af37] text-black rounded-full font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(212,175,55,0.25)]"
          >
            Request a Quote <ArrowRight className="w-4 h-4" />
          </a>
          
          <a 
            href="#projects"
            className="w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-4 bg-white/5 rounded-full font-medium text-white hover:bg-white/10 transition-all border border-white/10 hover:border-white/30"
          >
            Explore Projects
          </a>

          <a
            href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20or%20custom%20software%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex justify-center items-center gap-2 px-7 py-4 bg-[#25D366]/10 text-[#25D366] rounded-full font-medium hover:bg-[#25D366]/20 transition-all border border-[#25D366]/30"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>

        {/* Core Capabilities Row */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 font-medium">
          <span className="text-gray-500 uppercase tracking-wider text-[11px] font-semibold mr-1">Core Focus:</span>
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300">Business Websites</span>
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300">POS &amp; Invoicing</span>
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300">Custom Admin Portals</span>
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300">WordPress &amp; Elementor</span>
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300">E-Commerce Stores</span>
        </div>
      </motion.div>
    </section>
  );
}
