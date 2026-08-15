"use client";

import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Sparkles, ShoppingCart, Layout, MonitorSmartphone } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "Modern, fast, and responsive websites tailored for businesses and professionals to establish a strong digital presence.",
    icon: MonitorSmartphone,
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress websites utilizing professional themes, plugins, and Elementor for easy content management.",
    icon: Globe,
  },
  {
    title: "E-Commerce Development",
    description: "Modern online stores with clean user experiences, secure checkout, and responsive product layouts.",
    icon: ShoppingCart,
  },
  {
    title: "UI/UX Design",
    description: "User-friendly interfaces focused on usability, clarity, and maximizing conversion rates for your target audience.",
    icon: Layout,
  },
  {
    title: "Custom Web Applications",
    description: "Complex business dashboards, management systems, and tailored web solutions for unique operational needs.",
    icon: LayoutDashboard,
  },
  {
    title: "Branding & Logo Design",
    description: "Professional visual identity, typography, and logo design to give your business a cohesive, premium look.",
    icon: Sparkles,
  }
];

export default function Services() {
  return (
    <section id="services" className="px-4 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full opacity-70 shadow-[0_0_10px_#d4af37]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl flex flex-col transition-all duration-500 bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-[#d4af37]/30 hover:bg-white/[0.04]"
            >
              <div className="p-3 rounded-xl bg-white/5 w-fit mb-6 group-hover:bg-[#d4af37]/10 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
