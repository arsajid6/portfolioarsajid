"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, XCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "5ac3cbe3-cc07-4a8d-9d96-39570247d211";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const payload = JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: payload
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="px-4 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Build Something Great</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full opacity-70 shadow-[0_0_10px_#d4af37]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                Whether you have a project in mind, need a consultation, or just want to discuss how I can help bring your vision to life, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:arsajid6@gmail.com" className="flex items-center gap-5 group">
                <div className="p-4 bg-white/5 rounded-xl group-hover:bg-[#d4af37]/10 transition-colors border border-white/5 group-hover:border-[#d4af37]/30 shadow-inner">
                  <Mail className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white font-medium text-lg group-hover:text-[#d4af37] transition-colors">arsajid6@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/923234416045" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="p-4 bg-white/5 rounded-xl group-hover:bg-[#d4af37]/10 transition-colors border border-white/5 group-hover:border-[#d4af37]/30 shadow-inner">
                  <Phone className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">WhatsApp / Phone</p>
                  <p className="text-white font-medium text-lg group-hover:text-[#d4af37] transition-colors">+92 323 4416045</p>
                </div>
              </a>

              <div className="flex items-center gap-5 group cursor-default">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                  <MapPin className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-medium text-lg">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d4af37]/60 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d4af37]/60 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d4af37]/60 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 mt-2 bg-[#d4af37] text-[#050505] rounded-xl font-bold flex items-center justify-center gap-2 border border-transparent transition-all duration-300 hover:bg-white hover:scale-[1.02] shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <span className="animate-pulse tracking-wide">Sending Message...</span>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>

              {status === "success" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 p-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl flex items-center gap-3 text-[#25D366]">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
                  <XCircle className="w-6 h-6 shrink-0" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
