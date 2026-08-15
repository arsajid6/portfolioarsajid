"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Layout, Zap, Users } from "lucide-react";

const benefits = [
  {
    title: "Responsive Design",
    description: "Websites that adapt perfectly to desktop, tablet, and mobile screens for a seamless experience.",
    icon: MonitorSmartphone,
  },
  {
    title: "Clean & Modern UI",
    description: "Professional interfaces designed around usability, clarity, and a consistent user experience.",
    icon: Layout,
  },
  {
    title: "Performance Focus",
    description: "Fast, optimized, and efficient code to ensure quick load times and smooth user interaction.",
    icon: Zap,
  },
  {
    title: "Client-Focused",
    description: "Solutions built strictly around your actual project requirements and business goals.",
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
