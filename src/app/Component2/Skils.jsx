"use client";

import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
  FaWordpress,
  FaShopify,
  FaTools,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiWix,
  SiSquarespace,
  SiFramer,
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";

const smoothEase = [0.16, 1, 0.3, 1];

/* =========================================
   FRAMER MOTION VARIANTS
========================================= */

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.94,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

const Skills = () => {
  const sectionRef = useRef(null);

  /* =========================================
     SMOOTH SECTION SCROLL PROGRESS
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
     SKILLS
  ========================================= */

  const skills = [
    {
      name: "React",
      icon: <FaReact />,
      color: "#61DAFB",
    },

    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "var(--foreground)",
    },

    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#339933",
    },

    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "var(--foreground)",
    },

    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "#47A248",
    },

    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "#F7DF1E",
    },

    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#3178C6",
    },

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
    },

    {
      name: "Redux Toolkit",
      icon: <SiRedux />,
      color: "#764ABC",
    },

    {
      name: "Framer Motion",
      icon: <TbBrandFramerMotion />,
      color: "#FF0080",
    },

    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "#F05032",
    },

    {
      name: "NPM",
      icon: <FaNpm />,
      color: "#CB3837",
    },

    {
      name: "Shadcn/UI",
      icon: <FaTools />,
      color: "var(--foreground)",
    },

    {
      name: "WordPress",
      icon: <FaWordpress />,
      color: "#21759B",
    },

    {
      name: "Shopify",
      icon: <FaShopify />,
      color: "#7AB55C",
    },

    {
      name: "Wix",
      icon: <SiWix />,
      color: "var(--foreground)",
    },

    {
      name: "Squarespace",
      icon: <SiSquarespace />,
      color: "var(--foreground)",
    },

    {
      name: "Framer",
      icon: <SiFramer />,
      color: "var(--foreground)",
    },

    {
      name: "CMS Development",
      icon: <FaTools />,
      color: "#00bf8f",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
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
          ANIMATED BACKGROUND GLOW
      ========================================= */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-[250px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#00bf8f]/5 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-[250px] bottom-[5%] h-[500px] w-[500px] rounded-full bg-[#1cd8d2]/5 blur-[150px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* =========================================
            HEADING
        ========================================= */}

        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mb-12 text-center"
        >
          <motion.p
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
              ease: smoothEase,
            }}
            className="mb-3 text-[12px] font-bold uppercase tracking-[0.2em] text-[#00bf8f]"
          >
            Technologies I Work With
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: smoothEase,
            }}
            className="text-[36px] font-bold tracking-[-1.2px] text-[var(--foreground)] sm:text-[44px] md:text-[52px]"
          >
            My Skills &{" "}
            <span className="text-[#00bf8f]">
              Tools
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.14,
              ease: smoothEase,
            }}
            className="mx-auto mt-4 max-w-[650px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px]"
          >
            Technologies, frameworks, CMS platforms and
            development tools I use to build modern websites
            and web applications.
          </motion.p>
        </motion.div>

        {/* =========================================
            SKILLS GRID
        ========================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="group relative flex min-h-[145px] flex-col items-center justify-center gap-4 overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-5 text-center backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/45 hover:shadow-[0_18px_50px_rgba(0,191,143,0.10)]"
            >
              {/* Hover Glow */}

              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#00bf8f]/0 blur-[40px] transition-all duration-500 group-hover:bg-[#00bf8f]/15" />

              {/* Animated Top Line */}

              <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] transition-all duration-500 group-hover:w-full" />

              {/* =========================================
                  ORIGINAL BRAND COLOR ICON
              ========================================= */}

              <motion.div
                initial={{
                  rotate: 0,
                }}
                whileHover={{
                  rotate: 5,
                  scale: 1.12,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 16,
                }}
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[30px] transition-colors duration-300 group-hover:border-[#00bf8f]/40 group-hover:shadow-[0_8px_25px_rgba(0,191,143,0.10)]"
                style={{
                  color: skill.color,
                }}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}

              <motion.p
                initial={{
                  opacity: 0.8,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="relative z-10 text-[13px] font-semibold text-[var(--foreground)] sm:text-[14px]"
              >
                {skill.name}
              </motion.p>

              {/* Number */}

              <span className="pointer-events-none absolute bottom-2 right-3 text-[10px] font-bold text-[var(--muted)]/25">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;