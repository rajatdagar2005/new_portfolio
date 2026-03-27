import { motion } from 'motion/react';

const skills = [
  { name: "Flutter", level: "Expert", icon: "📱", color: "#02569B" },
  { name: "Kotlin", level: "Advanced", icon: "🎯", color: "#7F52FF" },
  { name: "Java", level: "Advanced", icon: "☕", color: "#007396" },
  { name: "Python", level: "Advanced", icon: "🐍", color: "#3776AB" },
  { name: "C++", level: "Expert", icon: "💻", color: "#00599C" },
  { name: "Ktor", level: "Advanced", icon: "🚀", color: "#000000" },
  { name: "MongoDB", level: "Advanced", icon: "🍃", color: "#47A248" },
  { name: "PostgreSQL", level: "Advanced", icon: "🐘", color: "#336791" },
  { name: "REST APIs", level: "Expert", icon: "🔗", color: "#000000" },
  { name: "Git", level: "Expert", icon: "🌿", color: "#F05032" },
  { name: "Jetpack Compose", level: "Advanced", icon: "🎨", color: "#4285F4" },
  { name: "Data Structures", level: "Expert", icon: "📊", color: "#000000" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#ff4e00]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff4e00]/10 rounded-full blur-3xl -z-10" />

      <div className="mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-sm uppercase tracking-[0.5em] text-white/40 font-semibold">
            My Expertise
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-7xl font-serif font-bold tracking-tighter mb-8"
        >
          Technical <span className="italic text-white/40">Skills</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="group relative glass p-8 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 border-white/5 hover:border-[#ff4e00]/30 transition-colors duration-500"
          >
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#ff4e00]/0 to-[#ff4e00]/0 group-hover:from-[#ff4e00]/5 group-hover:to-transparent transition-all duration-500 -z-10" />
            
            {/* Floating Icon Animation */}
            <motion.div 
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.2
              }}
              className="text-4xl mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-500"
            >
              {skill.icon}
            </motion.div>

            <h3 className="text-2xl font-serif font-bold tracking-tighter group-hover:text-white transition-colors">
              {skill.name}
            </h3>
            
            <div className="w-full mt-2">
              <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-3 group-hover:text-white/50 transition-colors">
                {skill.level}
              </p>
              {/* Animated Progress Bar */}
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ 
                    width: skill.level === "Expert" ? "100%" : skill.level === "Advanced" ? "80%" : "60%" 
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + (index * 0.1), ease: "circOut" }}
                  className="h-full bg-gradient-to-right from-white/20 to-[#ff4e00]/60"
                />
              </div>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/5 group-hover:bg-[#ff4e00]/40 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
