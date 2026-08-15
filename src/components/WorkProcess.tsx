"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discuss",
    description: "Understand project requirements, business objectives, and target audience."
  },
  {
    num: "02",
    title: "Plan",
    description: "Define site structure, core functionality, and technical approach."
  },
  {
    num: "03",
    title: "Design",
    description: "Create a clear, premium, and user-friendly visual interface."
  },
  {
    num: "04",
    title: "Develop",
    description: "Build and integrate the website using modern web technologies."
  },
  {
    num: "05",
    title: "Test & Launch",
    description: "Rigorously test responsiveness, functionality, and performance before going live."
  }
];

export default function WorkProcess() {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Work Process</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full opacity-70 shadow-[0_0_10px_#d4af37]"></div>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#050505] border-2 border-white/10 flex items-center justify-center text-xl font-bold text-gray-500 mb-6 group-hover:border-[#d4af37] group-hover:text-[#d4af37] transition-all duration-300 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed max-w-[220px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
