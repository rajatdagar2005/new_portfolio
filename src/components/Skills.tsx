// import { motion } from "motion/react";

// const skills = [
//   {
//     name: "Java",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/openjdk",
//   },
//   {
//     name: "Kotlin",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/kotlin",
//   },
//   {
//     name: "C++",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/cplusplus",
//   },
//   {
//     name: "Python",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/python",
//   },
//   {
//     name: "Flutter",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/flutter",
//   },
//   {
//     name: "Jetpack Compose",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/jetpackcompose",
//   },
//   {
//     name: "Ktor",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/ktor",
//   },
//   {
//     name: "JavaScript",
//     level: "Intermediate",
//     logo: "https://cdn.simpleicons.org/javascript",
//   },
//   {
//     name: "React",
//     level: "Intermediate",
//     logo: "https://cdn.simpleicons.org/react",
//   },
//   {
//     name: "Node.js",
//     level: "Intermediate",
//     logo: "https://cdn.simpleicons.org/nodedotjs",
//   },
//   {
//     name: "MongoDB",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/mongodb",
//   },
//   {
//     name: "PostgreSQL",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/postgresql",
//   },
//   {
//     name: "MySQL",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/mysql",
//   },
//   {
//     name: "Firebase",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/firebase",
//   },
//   {
//     name: "Git",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/git",
//   },
//   {
//     name: "REST APIs",
//     level: "Advanced",
//     logo: "https://cdn.simpleicons.org/fastapi",
//   },
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden"
//     >
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#ff4e00]/5 rounded-full blur-3xl -z-10" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff4e00]/10 rounded-full blur-3xl -z-10" />

//       {/* Section Heading */}
//       <div className="mb-20 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-8"
//         >
//           <span className="text-sm uppercase tracking-[0.5em] text-white/40 font-semibold">
//             My Expertise
//           </span>
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="text-6xl md:text-7xl font-serif font-bold tracking-tighter mb-8"
//         >
//           Technical{" "}
//           <span className="italic text-white/40">Skills</span>
//         </motion.h2>
//       </div>

//       {/* Skills Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
//         {skills.map((skill, index) => {
//           const percentage =
//             skill.level === "Advanced"
//               ? "80%"
//               : skill.level === "Intermediate"
//               ? "65%"
//               : "50%";

//           return (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.8,
//                 delay: index * 0.07,
//                 ease: [0.215, 0.61, 0.355, 1],
//               }}
//               whileHover={{
//                 y: -10,
//                 scale: 1.02,
//                 transition: { duration: 0.3 },
//               }}
//               className="group relative glass p-7 md:p-8 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 border border-white/5 hover:border-[#ff4e00]/30 transition-all duration-500"
//             >
//               {/* Hover Glow */}
//               <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#ff4e00]/0 to-transparent group-hover:from-[#ff4e00]/5 transition-all duration-500 -z-10" />

//               {/* Real Technology Logo */}
//               <motion.div
//                 animate={{
//                   y: [0, -6, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: index * 0.15,
//                 }}
//                 className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-2"
//               >
//                 <img
//                   src={skill.logo}
//                   alt={`${skill.name} logo`}
//                   className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
//                   loading="lazy"
//                 />
//               </motion.div>

//               {/* Skill Name */}
//               <h3 className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-center group-hover:text-white transition-colors">
//                 {skill.name}
//               </h3>

//               {/* Level */}
//               <div className="w-full mt-2">
//                 <div className="flex items-center justify-between mb-3">
//                   <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-hover:text-white/50 transition-colors">
//                     {skill.level}
//                   </p>

//                   <span className="text-[9px] text-white/20 font-mono">
//                     {percentage}
//                   </span>
//                 </div>

//                 {/* Progress Bar */}
//                 <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: percentage }}
//                     viewport={{ once: true }}
//                     transition={{
//                       duration: 1.5,
//                       delay: 0.5 + index * 0.07,
//                       ease: "circOut",
//                     }}
//                     className="h-full bg-gradient-to-r from-white/20 to-[#ff4e00]/60"
//                   />
//                 </div>
//               </div>

//               {/* Corner Accent */}
//               <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/5 group-hover:bg-[#ff4e00]/40 transition-colors duration-500" />
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


import { motion } from "motion/react";

const skills = [
  {
    name: "Java",
    logo: "https://cdn.simpleicons.org/openjdk",
  },
  {
    name: "Kotlin",
    logo: "https://cdn.simpleicons.org/kotlin",
  },
  {
    name: "C++",
    logo: "https://cdn.simpleicons.org/cplusplus",
  },
  {
    name: "Python",
    logo: "https://cdn.simpleicons.org/python",
  },
  {
    name: "Flutter",
    logo: "https://cdn.simpleicons.org/flutter",
  },
  {
    name: "Jetpack Compose",
    logo: "https://cdn.simpleicons.org/jetpackcompose",
  },
  {
    name: "Ktor",
    logo: "https://cdn.simpleicons.org/ktor",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.simpleicons.org/javascript",
  },
  {
    name: "React",
    logo: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Node.js",
    logo: "https://cdn.simpleicons.org/nodedotjs",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.simpleicons.org/mongodb",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.simpleicons.org/postgresql",
  },
  {
    name: "MySQL",
    logo: "https://cdn.simpleicons.org/mysql",
  },
  {
    name: "Firebase",
    logo: "https://cdn.simpleicons.org/firebase",
  },
  {
    name: "Git",
    logo: "https://cdn.simpleicons.org/git",
  },
  {
    name: "REST APIs",
    logo: "https://cdn.simpleicons.org/fastapi",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#ff4e00]/5 rounded-full blur-3xl -z-10" />

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff4e00]/10 rounded-full blur-3xl -z-10" />

      {/* Section Heading */}
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
          Technical{" "}
          <span className="italic text-white/40">Skills</span>
        </motion.h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.07,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="group relative glass p-8 rounded-[2.5rem] flex flex-col items-center justify-center gap-6 border border-white/5 hover:border-[#ff4e00]/30 transition-all duration-500 min-h-[210px]"
          >
            {/* Animated Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#ff4e00]/0 to-transparent group-hover:from-[#ff4e00]/5 transition-all duration-500 -z-10" />

            {/* Technology Logo */}
            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
              className="w-16 h-16 md:w-[72px] md:h-[72px] flex items-center justify-center"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
            </motion.div>

            {/* Skill Name */}
            <h3 className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-center text-white/80 group-hover:text-white transition-colors duration-500">
              {skill.name}
            </h3>

            {/* Bottom Accent */}
            <motion.div
              className="h-[1px] bg-[#ff4e00]/50"
              initial={{ width: 24, opacity: 0.3 }}
              whileHover={{ width: 56, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Corner Accent */}
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/5 group-hover:bg-[#ff4e00]/50 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
