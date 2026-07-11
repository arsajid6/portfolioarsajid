"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center items-center text-center px-4 relative py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-3 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
          Bring your business online with a fast and secure website.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto font-light leading-relaxed">
          I provide complete UI/UX, Web Development, and Branding solutions to help your business stand out and succeed in the digital world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a 
            href="#projects"
            className="animate-slow-pulse flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </motion.a>
          
          <motion.a 
            href="#contact"
            className="animate-slow-pulse flex items-center gap-2 px-8 py-4 glass-card rounded-full font-medium text-white hover:bg-white/5 transition-colors border border-white/10"
            style={{ animationDelay: '1s' }}
          >
            Contact Me <Mail className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
