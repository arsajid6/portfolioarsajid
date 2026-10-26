"use client";

import { motion } from "framer-motion";
import { User, Code, Layout } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-4 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full opacity-70 shadow-[0_0_10px_#d4af37]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300 font-light leading-relaxed text-lg"
          >
            <p>
              I partner with businesses, educational institutions, retail shops, and startups to build dependable digital platforms that solve real operational challenges.
            </p>
            <p>
              Whether you need an authoritative corporate presence, a customized WordPress website you can easily update yourself, or a full-stack web application with barcode billing, customer quotation pipelines, and role-based staff portals — I handle the complete lifecycle from interface design to secure deployment.
            </p>
            <p>
              Every solution is engineered around clean code, mobile responsiveness, fast performance, and an intuitive experience for both your clients and your internal team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="p-6 bg-white/[0.02] border border-white/10 hover:border-[#d4af37]/30 hover:bg-white/[0.04] rounded-2xl transition-all">
              <Code className="w-8 h-8 text-[#d4af37] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Business Websites</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Professional, responsive corporate websites and landing pages built to establish trust and make it easy for potential clients to inquire.</p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/10 hover:border-[#d4af37]/30 hover:bg-white/[0.04] rounded-2xl transition-all">
              <Layout className="w-8 h-8 text-[#d4af37] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">WordPress &amp; Elementor</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Custom business websites designed for effortless self-management so you can edit text, services, and rates without code.</p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/10 hover:border-[#d4af37]/30 hover:bg-white/[0.04] rounded-2xl sm:col-span-2 transition-all">
              <User className="w-8 h-8 text-[#d4af37] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">POS, Invoicing &amp; Custom Management</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Full-stack operational software — from barcode billing counters and quote-to-invoice pipelines to multi-role academy management portals using PHP, Laravel, Supabase, and MySQL.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
