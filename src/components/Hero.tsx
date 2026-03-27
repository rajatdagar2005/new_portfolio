import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 0.05, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[14vw] font-serif font-black uppercase leading-none tracking-tighter text-center whitespace-nowrap"
        >
          DEVELOPER
        </motion.h1>
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <span className="text-sm uppercase tracking-[0.5em] text-white/40 font-semibold">
            Hello, I am
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="text-7xl md:text-9xl font-serif font-bold tracking-tighter mb-8"
        >
          Rajat <span className="italic text-white/20">Dagar</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12"
        >
          Crafting immersive digital experiences through code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a 
            href="#projects"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full glass hover:bg-white/10 transition-all duration-500 group"
          >
            <span className="text-sm uppercase tracking-widest font-semibold">View Projects</span>
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
              <ArrowDown size={16} />
            </div>
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
