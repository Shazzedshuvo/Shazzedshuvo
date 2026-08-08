"use client";

import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  FaBriefcase,
  FaProjectDiagram,
  FaTools,
  FaCode,
} from "react-icons/fa";


/* =========================================
   SMOOTH EASING
========================================= */

const smoothEase = [0.16, 1, 0.3, 1];


/* =========================================
   ANIMATION VARIANTS
========================================= */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};


/* =========================================
   COMPONENT
========================================= */

export const Stars = () => {
  const sectionRef = useRef(null);


  /* =========================================
     SCROLL PROGRESS
  ========================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });


  const smoothScrollProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 90,
      damping: 25,
      mass: 0.3,
    }
  );


  /* =========================================
     STATS
  ========================================= */

  const stats = [
    {
      value: "2+",
      label: "Years of Experience",
      icon: <FaBriefcase />,
    },

    {
      value: "8+",
      label: "Projects Completed",
      icon: <FaProjectDiagram />,
    },

    {
      value: "10+",
      label: "Technologies Mastered",
      icon: <FaTools />,
    },

    {
      value: "500+",
      label: "Code Commits",
      icon: <FaCode />,
    },
  ];


  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
    >
      {/* =========================================
          SCROLL PROGRESS LINE
      ========================================= */}

      <motion.div
        style={{
          scaleX: smoothScrollProgress,
          transformOrigin: "left",
        }}
        className="absolute left-0 top-0 z-20 h-[2px] w-full bg-gradient-to-r from-[#00bf8f] via-[#1cd8d2] to-[#00bf8f]"
      />


      {/* =========================================
          SOFT ANIMATED BACKGROUND GLOW
      ========================================= */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-[220px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#00bf8f]/5 blur-[140px]"
      />


      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-[220px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#1cd8d2]/5 blur-[140px]"
      />


      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}

              whileHover={{
                y: -8,
                scale: 1.02,
              }}

              whileTap={{
                scale: 0.97,
              }}

              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}

              className="group relative overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-5 backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/40 hover:shadow-[0_18px_50px_rgba(0,191,143,0.08)] sm:p-6 lg:p-7"
            >
              {/* =========================================
                  TOP ACCENT LINE
              ========================================= */}

              <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] transition-all duration-500 group-hover:w-full" />


              {/* =========================================
                  SMALL HOVER GLOW
              ========================================= */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#00bf8f]/0 blur-[55px] transition-all duration-500 group-hover:bg-[#00bf8f]/10" />


              {/* =========================================
                  ICON
              ========================================= */}

              <motion.div
                whileHover={{
                  rotate: 5,
                  scale: 1.1,
                }}

                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                }}

                className="relative mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-lg text-[#00bf8f] transition-colors duration-300 group-hover:border-[#00bf8f]/40 group-hover:bg-[#00bf8f]/15 sm:h-12 sm:w-12 sm:text-xl"
              >
                {stat.icon}
              </motion.div>


              {/* =========================================
                  NUMBER
              ========================================= */}

              <motion.h3
                initial={{
                  opacity: 0,
                  y: 15,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.55,
                  delay: 0.1 + index * 0.05,
                  ease: smoothEase,
                }}

                className="relative text-[32px] font-bold leading-none tracking-[-1px] text-[var(--foreground)] sm:text-[38px] lg:text-[42px]"
              >
                {stat.value}
              </motion.h3>


              {/* =========================================
                  LABEL
              ========================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                }}

                whileInView={{
                  opacity: 1,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.5,
                  delay: 0.18 + index * 0.05,
                }}

                className="relative mt-3 text-[13px] font-medium leading-5 text-[var(--muted)] sm:text-[14px] lg:text-[15px]"
              >
                {stat.label}
              </motion.p>


              {/* =========================================
                  BOTTOM ANIMATED DECORATION
              ========================================= */}

              <div className="relative mt-6 h-px w-full overflow-hidden bg-[var(--border)]">
                <motion.div
                  initial={{
                    width: 32,
                  }}

                  whileHover={{
                    width: "100%",
                  }}

                  transition={{
                    duration: 0.5,
                    ease: smoothEase,
                  }}

                  className="h-full bg-[#00bf8f]"
                />
              </div>


              {/* =========================================
                  CARD NUMBER
              ========================================= */}

              <span className="pointer-events-none absolute bottom-3 right-4 text-[10px] font-bold tracking-[0.1em] text-[var(--muted)] opacity-20">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};