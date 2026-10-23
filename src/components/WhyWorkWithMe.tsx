"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Layout, Zap, Users } from "lucide-react";

const benefits = [
  {
    title: "End-to-End Execution",
    description: "From interface design and responsive layouts to database setup, backend logic, and live deployment — handled cohesively without multiple handoffs.",
    icon: MonitorSmartphone,
  },
  {
    title: "Built for Real Workflows",
    description: "Engineered around how your business actually operates: quote calculators, barcode billing, academy schedules, invoice generation, and expense tracking.",
    icon: Layout,
  },
  {
    title: "Easy Self-Management",
    description: "Intuitive admin portals and WordPress Elementor setup so you can update rates, text, services, and content yourself without ongoing developer costs.",
    icon: Zap,
  },
  {
    title: "Direct & Clear Communication",
    description: "Work directly with the developer building your project. Direct access, clear milestone progress updates, and reliable post-launch assistance.",
    icon: Users,
  }
];

export default function WhyWorkWithMe() {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Work With Me</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full opacity-70 shadow-[0_0_10px_#d4af37]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-white/10 transition-colors"
            >
              <div className="p-3 bg-white/5 rounded-xl shrink-0">
                <benefit.icon className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
