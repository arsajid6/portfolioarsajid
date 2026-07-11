"use client";

import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Sparkles } from "lucide-react";

const services = [
  {
    title: "Business Websites & E-Commerce Stores",
    description: "Fast, secure, and beautiful websites designed to turn visitors into paying customers.",
    icon: Globe,
  },
  {
    title: "Custom Management Systems",
    description: "Tailor-made dashboards and systems to help you manage your business operations easily.",
    icon: LayoutDashboard,
  },
  {
    title: "Luxury Branding & Design",
    description: "Premium logos and branding materials that give your business a high-end, professional look.",
    icon: Sparkles,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-10 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full opacity-70 shadow-[0_0_10px_#d4af37]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-500 bg-white/[0.01] backdrop-blur-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            >
              <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:bg-[#d4af37]/20 transition-colors duration-300 shadow-[0_0_15px_rgba(212,175,55,0)] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <service.icon className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
