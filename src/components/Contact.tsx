import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="mb-8">
            <span className="text-sm uppercase tracking-[0.5em] text-white/40 font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-12 leading-tight">
            Let's build <span className="italic text-white/40">something</span> extraordinary.
          </h2>
          
          <div className="space-y-12">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-1">Email Me</p>
                <a href="mailto:rajat.dagar.official@gmail.com" className="text-2xl font-serif font-bold tracking-tighter hover:text-white/60 transition-colors">rajat.dagar.official@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-1">Call Me</p>
                <a href="tel:+919999173835" className="text-2xl font-serif font-bold tracking-tighter hover:text-white/60 transition-colors">+91 99991 73835</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-1">Location</p>
                <p className="text-2xl font-serif font-bold tracking-tighter">Faridabad , Haryana, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="glass p-12 rounded-3xl"
        >
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 font-semibold">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-serif font-bold tracking-tighter focus:border-white transition-colors outline-none"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 font-semibold">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-serif font-bold tracking-tighter focus:border-white transition-colors outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 font-semibold">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-serif font-bold tracking-tighter focus:border-white transition-colors outline-none resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button className="w-full py-6 rounded-full bg-white text-black text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-4 hover:bg-white/90 transition-all duration-500 group">
              Send Message
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
