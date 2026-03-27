/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative bg-[#0a0502] text-white selection:bg-[#ff4e00] selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#ff4e00] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Custom Cursor */}
      <motion.div 
        className="custom-cursor hidden md:block"
        animate={{ x: mousePos.x - 10, y: mousePos.y - 10 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div 
        className="custom-cursor-dot hidden md:block"
        animate={{ x: mousePos.x - 2, y: mousePos.y - 2 }}
        transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.1 }}
      />

      {/* Atmospheric Background */}
      <div className="atmosphere" />

      {/* Content */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-white/20 font-semibold mb-4">
            Designed & Built by Rajat Dagar
          </p>
          <p className="text-xs text-white/10">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
