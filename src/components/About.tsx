import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden glass p-4"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10 pointer-events-none" />
          <img 
            src="https://raw.githubusercontent.com/rajatdagar2005/MyPortfolioAssets/refs/heads/main/WhatsApp%20Image%202025-10-26%20at%2013.29.20_1a7d39ae.jpg" 
            alt="Rajat Dagar"
            className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-12 left-12 z-20">
            <h3 className="text-4xl font-serif font-bold tracking-tighter mb-2">Rajat Dagar</h3>
            <p className="text-sm uppercase tracking-widest text-white/60 font-medium italic">Developer</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="mb-8">
            <span className="text-sm uppercase tracking-[0.5em] text-white/40 font-semibold">
              About Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tighter mb-10 leading-tight">
            Building the <span className="italic text-white/40">future</span> of digital interaction.
          </h2>
          <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
            <p>
              I am a Computer Science student at Jaypee Institute of Information Technology, 
              passionate about creating high-performance mobile and web applications. 
              My journey as a developer is driven by a curiosity for complex systems 
              and a commitment to clean, maintainable code.
            </p>
            <p>
              I believe that great software is not just about code, but about 
              creating an experience that resonates with the user. Every pixel, 
              every animation, and every interaction is an opportunity to tell 
              a story.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-serif font-bold mb-2">B.Tech</h4>
              <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">Computer Science</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif font-bold mb-2">2027</h4>
              <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">Expected Graduation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
