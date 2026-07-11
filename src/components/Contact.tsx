"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, XCircle } from "lucide-react";

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
        setTimeout(() => setStatus("idle"), 5000); // Reset form state after 5 seconds
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
    <section id="contact" className="py-10 px-4 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full opacity-70 shadow-[0_0_10px_#d4af37]"></div>
          <p className="mt-6 text-gray-400 font-light max-w-lg mx-auto">
            Ready to start your next project? Drop me a message and let's discuss how I can help bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 md:p-10 rounded-2xl relative"
        >
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-gray-400 ml-1">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/60 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-gray-400 ml-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/60 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-gray-400 ml-1">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={5}
                className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/60 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 mt-2 bg-white text-black rounded-xl font-semibold flex items-center justify-center gap-2 border border-transparent transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:backdrop-blur-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <span className="animate-pulse">Sending Message...</span>
              ) : (
                <>Send Message <Send className="w-4 h-4" /></>
              )}
            </button>

            {/* Success and Error States */}
            {status === "success" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-400">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
                <XCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
