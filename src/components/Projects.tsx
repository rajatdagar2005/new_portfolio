import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "CardioGuard AI",
    category: "Deep Learning • CNN-BiLSTM",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    description: "Deep learning–based atrial fibrillation detection system using a CNN-BiLSTM architecture trained on the MIT-BIH Atrial Fibrillation Database (PhysioNet).",
    github: "https://github.com/rajatdagar2005/AFib-Detection-from-ECG-Signals-using-CNN-BiLSTM-MIT-BIH-AFDB-"
  },
  {
    title: "NewsSphere",
    category: "Flutter • REST APIs",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    description: "A modern news aggregation application built with Flutter, featuring real-time updates, category filtering, and optimized data fetching.",
    github: "https://github.com/rajatdagar2005/DailyPress"
  },
  {
    title: "GourmetGuide",
    category: "Flutter • Mobile Development",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
    description: "A comprehensive recipe discovery app that allows users to search, filter, and save their favorite dishes using a robust external API.",
    github: "https://github.com/rajatdagar2005/Recipe-Finder-App"
  },
  {
    title: "VisionPro AI",
    category: "Computer Vision • AI",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    description: "An advanced face detection system leveraging computer vision to identify and track facial features in real-time with high precision.",
    github: "https://github.com/rajatdagar2005/FaceDetection"
  },
  {
    title: "SkyCast",
    category: "Flutter • Weather API",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
    description: "A feature-rich weather forecasting app providing accurate real-time data, interactive maps, and localized weather alerts.",
    github: "https://github.com/rajatdagar2005/MyWeatherApp"
  },
  {
    title: "MarketPulse",
    category: "Data Analysis • Python",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    description: "A data-driven analysis tool for identifying customer trends and consumer behavior patterns using Python and advanced statistical models.",
    github: "https://github.com/rajatdagar2005/Customer-Trends-Data-Analysis"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-sm uppercase tracking-[0.5em] text-white/40 font-semibold">
            My Work
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-7xl font-serif font-bold tracking-tighter mb-8"
        >
          Selected <span className="italic text-white/40">Projects</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative"
          >
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass mb-8">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-serif font-bold tracking-tighter mb-4 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 font-light max-w-md leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
