import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <span className="font-serif italic text-2xl font-bold tracking-tighter">RD.</span>
      </div>
      
      <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-widest font-medium text-white/60">
        {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <a href="https://github.com/rajatdagar2005" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/rajat-dagar-822a76291/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:rajat.dagar.official@gmail.com" className="text-white/60 hover:text-white transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </motion.nav>
  );
}
