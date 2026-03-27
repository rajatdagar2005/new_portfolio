import { motion } from 'motion/react';

const experiences = [
  {
    company: "Unlock Velocity",
    role: "Android Developer Intern",
    period: "May 2025 – July 2025",
    location: "On-Site",
    description: [
      "Developed Flutter-based frontend modules and Ktor-powered backend services end-to-end.",
      "Designed and implemented secure RESTful APIs using MongoDB and PostgreSQL.",
      "Applied MVVM architecture and clean coding practices for maintainable systems.",
      "Optimized API response times and improved app performance through efficient data handling.",
      "Collaborated in agile sprints, improving overall delivery efficiency by 25%."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-sm uppercase tracking-[0.5em] text-white/40 font-semibold">
            My Journey
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-7xl font-serif font-bold tracking-tighter mb-8"
        >
          Work <span className="italic text-white/40">Experience</span>
        </motion.h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="glass p-12 rounded-[3rem] relative overflow-hidden group hover:bg-white/5 transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
              <div>
                <h3 className="text-4xl font-serif font-bold tracking-tighter mb-2 group-hover:text-white transition-colors">
                  {exp.company}
                </h3>
                <p className="text-xl text-white/60 font-medium italic">{exp.role}</p>
              </div>
              <div className="text-right lg:text-right">
                <p className="text-sm uppercase tracking-widest text-white/40 font-bold mb-1">{exp.period}</p>
                <p className="text-xs uppercase tracking-widest text-[#ff4e00] font-bold">{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-4">
              {exp.description.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                  className="flex items-start gap-4 text-white/60 font-light leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00] mt-2.5 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ff4e00]/5 rounded-full blur-3xl group-hover:bg-[#ff4e00]/10 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
