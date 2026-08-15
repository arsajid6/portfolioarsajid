"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend Development",
    skills: ["Next.js", "React", "JavaScript", "Tailwind CSS", "HTML5"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "PHP", "Laravel", "Go"]
  },
  {
    title: "Web & App Development",
    skills: ["Web Applications", "Management Systems", "Mobile App Development", "Browser Extensions"]
  },
  {
    title: "Design & CMS",
    skills: ["UI/UX Design", "Figma", "WordPress", "Elementor", "MySQL"]
  }
];

export default function TechStack() {
  return (
    <section id="skills" className="px-4 scroll-mt-28">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Technologies</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full opacity-70 shadow-[0_0_10px_#d4af37]"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-5">{category.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 font-medium tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
