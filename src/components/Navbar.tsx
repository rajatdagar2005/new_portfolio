// import { motion } from 'motion/react';
// import { Github, Linkedin, Mail } from 'lucide-react';

// export default function Navbar() {
//   return (
//     <motion.nav 
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center"
//     >
//       <div className="flex items-center gap-2">
//         <span className="font-serif italic text-2xl font-bold tracking-tighter">RD.</span>
//       </div>
      
//       <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-widest font-medium text-white/60">
//         {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
//           <a 
//             key={item} 
//             href={`#${item.toLowerCase()}`}
//             className="hover:text-white transition-colors duration-300"
//           >
//             {item}
//           </a>
//         ))}
//       </div>

//       <div className="flex items-center gap-6">
//         <a href="https://github.com/rajatdagar2005" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
//           <Github size={20} />
//         </a>
//         <a href="https://www.linkedin.com/in/rajat-dagar-822a76291/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
//           <Linkedin size={20} />
//         </a>
//         <a href="mailto:rajat.dagar.official@gmail.com" className="text-white/60 hover:text-white transition-colors">
//           <Mail size={20} />
//         </a>
//       </div>
//     </motion.nav>
//   );
// }

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
      <div className="font-serif font-bold text-xl">
        RD.
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

        {/* Codolio */}
        <a
          href="https://codolio.com/profile/RAJATDAGAR"
          target="_blank"
          rel="noreferrer"
          aria-label="Codolio"
          className="text-white/60 hover:text-white transition-colors duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10
              10-4.477 10-10S17.523 2 12 2Zm0 3.2
              a6.8 6.8 0 1 1 0 13.6A6.8 6.8 0 0 1 12 5.2Zm0 2.4
              a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Z"
            />
          </svg>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/rajatdagar_05/"
          target="_blank"
          rel="noreferrer"
          aria-label="LeetCode"
          className="text-white/60 hover:text-white transition-colors duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.483 0a1.2 1.2 0 0 0-.86.36L2.84 10.143
             a3.8 3.8 0 0 0 0 5.37l5.65 5.65a3.8 3.8 0 0 0
              5.37 0l2.1-2.1-1.7-1.7-2.1 2.1a1.4 1.4 0 0 1-1.97
              0l-5.65-5.65a1.4 1.4 0 0 1 0-1.97l9.78-9.78
             a1.2 1.2 0 0 0-.83-2.06Z" />
            <path d="M15.3 8.1a1.2 1.2 0 0 0 0 2.4h6.5a1.2
              1.2 0 1 0 0-2.4h-6.5Z" />
            <path d="M12.1 4.4a1.2 1.2 0 0 0-.85.35L8.8 7.2
             a1.2 1.2 0 1 0 1.7 1.7l2.45-2.45a1.2 1.2 0 0 0
             -.85-2.05Z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rajatdagar2005"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-white/60 hover:text-white transition-colors duration-300"
        >
          <Github size={20} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rajat-dagar-822a76291/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-white/60 hover:text-white transition-colors duration-300"
        >
          <Linkedin size={20} />
        </a>

        {/* Email */}
        <a
          href="mailto:rajat.dagar.official@gmail.com"
          aria-label="Email"
          className="text-white/60 hover:text-white transition-colors duration-300"
        >
          <Mail size={20} />
        </a>

      </div>
    </motion.nav>
  );
}
