"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="#" className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 relative pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="mb-6 inline-block">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
            Website Developer & UI/UX Designer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Building modern, responsive <br className="hidden md:block" />
          <span className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">custom web solutions.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          I design and develop professional business websites, e-commerce stores, and custom web applications optimized for usability and performance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact"
            className="w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Let&apos;s Work Together <ArrowRight className="w-4 h-4" />
          </a>
          
          <a 
            href="#projects"
            className="w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-4 bg-white/5 rounded-full font-medium text-white hover:bg-white/10 transition-all border border-white/10 hover:border-white/30"
          >
            View My Work
          </a>
        </div>
      </motion.div>
    </section>
  );
}
