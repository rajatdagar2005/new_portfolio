import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "StockPulse",
    category: "React • Node.js • PostgreSQL • JWT • REST API • Full Stack",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    description: "A full-stack inventory intelligence platform for small businesses that analyzes sales history, current stock, safety stock, and supplier lead time to identify low-stock and dead-stock products and generate data-driven reorder recommendations. Includes multi-tenant authentication, supplier management, sales tracking, purchase orders, and transactional inventory updates.",
    github: "https://github.com/rajatdagar2005/stockpulse"
  },
  {
  title: "SocketCore",
  category: "Python • HTTP • Socket Programming • REST API • Multithreading",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
  description: "A custom HTTP server and REST API built from scratch using Python socket programming and multithreading. Implements HTTP request parsing, modular routing, concurrent client handling, and RESTful user management endpoints without relying on high-level web server frameworks.",
  github: "https://github.com/rajatdagar2005/custom-HTTP-server-and-Rest-API"
  },
  {
    title: "LinkForge",
    category: "Node.js • React • MongoDB • REST API • Full Stack",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
    description: "A full-stack URL shortening platform built with React and Node.js. Provides short-link generation, URL redirection, persistent storage with MongoDB Atlas, and a responsive interface for efficiently managing and sharing shortened URLs.",
    github: "https://github.com/rajatdagar2005/URL-Shortner"
  },
  {
    title: "SpendSense AI",
    category: "Kotlin • Jetpack Compose • AI Integration • Expense Tracking",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
    description: "An AI-powered personal finance management app built with Jetpack Compose. Features expense tracking, spending analytics, category-wise insights, interactive charts, and AI-generated financial recommendations to help users manage their finances effectively.",
    github: "https://github.com/rajatdagar2005/SpendSenseAi"
  },

  {
    title: "CardioGuard AI",
    category: "Deep Learning • CNN-BiLSTM • Healthcare AI • Signal Processing",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    description: "An intelligent healthcare system for detecting atrial fibrillation from ECG signals using a hybrid CNN-BiLSTM architecture. Trained on the MIT-BIH AFDB dataset (PhysioNet), the model captures both spatial and temporal patterns, achieving high accuracy in real-time cardiac anomaly detection.",
    github: "https://github.com/rajatdagar2005/AFib-Detection-from-ECG-Signals-using-CNN-BiLSTM-MIT-BIH-AFDB-"
  },

  {
    title: "GraphLink",
    category: "Java • Data Structures & Algorithms • Graph Theory • Visualization",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    description: "A graph visualization and analysis platform designed to demonstrate graph algorithms interactively. Supports graph creation, traversal, shortest path computation, and network analysis, providing an intuitive way to understand complex graph structures.",
    github: "https://github.com/rajatdagar2005/GraphLink"
  },

  {
    title: "NewsSphere",
    category: "Flutter • REST APIs • State Management • Real-Time Data",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    description: "A scalable news aggregation app built using Flutter that delivers real-time news updates from multiple sources via REST APIs. Features category-based filtering, optimized API calls, and a responsive UI for seamless cross-device performance.",
    github: "https://github.com/rajatdagar2005/DailyPress"
  },

  {
    title: "VisionPro AI",
    category: "Kotlin • Computer Vision • ML Kit • Real-Time Detection",
    image: "https://images.unsplash.com/photo-1753952253421-3f4bcdd697ee?q=80&w=2070&auto=format&fit=crop",
    description: "A real-time face detection and tracking system built using Kotlin and ML Kit. Capable of identifying facial features with high precision, optimized for performance on mobile devices using efficient vision processing techniques.",
    github: "https://github.com/rajatdagar2005/FaceDetection"
  },

  {
    title: "SkyCast",
    category: "Kotlin • Weather API • Location Services • Android Development",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
    description: "A modern weather forecasting app that provides real-time weather updates using API integration and location services. Includes dynamic UI updates, detailed forecasts, and location-based alerts for enhanced user experience.",
    github: "https://github.com/rajatdagar2005/MyWeatherApp"
  },

  {
    title: "GourmetGuide",
    category: "Flutter • API Integration • UI/UX • Mobile App Development",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
    description: "A feature-rich recipe discovery application that integrates external APIs to provide dynamic food recommendations. Includes advanced search, filtering, and bookmarking functionality with a clean and intuitive user interface.",
    github: "https://github.com/rajatdagar2005/Recipe-Finder-App"
  },

  {
    title: "MarketPulse",
    category: "Python • Data Analysis • Machine Learning • Data Visualization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    description: "A data analytics project focused on extracting actionable insights from customer datasets using Python. Implements statistical analysis, data preprocessing, and visualization techniques to identify trends and support data-driven decision making.",
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
