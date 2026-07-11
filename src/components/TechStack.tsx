"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", color: "hover:text-white hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]" },
  { name: "React", color: "hover:text-[#61DAFB] hover:border-[#61DAFB]/50 hover:shadow-[0_0_15px_rgba(97,218,251,0.3)]" },
  { name: "Node.js", color: "hover:text-[#339933] hover:border-[#339933]/50 hover:shadow-[0_0_15px_rgba(51,153,51,0.3)]" },
  { name: "Go", color: "hover:text-[#00ADD8] hover:border-[#00ADD8]/50 hover:shadow-[0_0_15px_rgba(0,173,216,0.3)]" },
  { name: "Laravel", color: "hover:text-[#FF2D20] hover:border-[#FF2D20]/50 hover:shadow-[0_0_15px_rgba(255,45,32,0.3)]" },
  { name: "WordPress", color: "hover:text-[#21759B] hover:border-[#21759B]/50 hover:shadow-[0_0_15px_rgba(33,117,155,0.3)]" },
  { name: "MySQL", color: "hover:text-[#4479A1] hover:border-[#4479A1]/50 hover:shadow-[0_0_15px_rgba(68,121,161,0.3)]" },
  { name: "XAMPP", color: "hover:text-[#FB7A24] hover:border-[#FB7A24]/50 hover:shadow-[0_0_15px_rgba(251,122,36,0.3)]" },
  { name: "Browser APIs / Extensions", color: "hover:text-[#F3DF49] hover:border-[#F3DF49]/50 hover:shadow-[0_0_15px_rgba(243,223,73,0.3)]" }
];

export default function TechStack() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-widest uppercase text-gray-500 mb-5"
        >
          Powered by modern technologies
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`glass-card px-5 py-2 rounded-full text-sm md:text-base font-medium text-gray-300 cursor-default transition-all duration-300 border border-white/5 ${tech.color}`}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
