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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300 font-light leading-relaxed text-lg"
          >
            <p>
              Hi, I&apos;m <strong className="text-white font-medium">Abdul Rehman Sajid</strong>, a professional Website Developer and UI/UX Designer dedicated to building high-quality digital experiences.
            </p>
            <p>
              My expertise lies in developing modern, responsive, and secure custom web solutions that help businesses establish a strong online presence. Whether it&apos;s a sleek corporate website, an e-commerce store, or a custom management dashboard, I focus on delivering products that are visually striking and highly functional.
            </p>
            <p>
              I bridge the gap between design and development, ensuring that every interface is not only beautiful but also intuitive, accessible, and optimized for performance across all devices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <Code className="w-8 h-8 text-[#d4af37] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Web Development</h3>
              <p className="text-sm text-gray-400">Custom websites built with Next.js, React, and modern web technologies.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <Layout className="w-8 h-8 text-[#d4af37] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">UI/UX Design</h3>
              <p className="text-sm text-gray-400">User-centric interfaces focused on usability, clarity, and a smooth user experience.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl sm:col-span-2">
              <User className="w-8 h-8 text-[#d4af37] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Full-Stack Capability</h3>
              <p className="text-sm text-gray-400">From frontend interfaces to backend logic with Node.js and WordPress CMS integration, ensuring complete end-to-end solutions.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
