"use client";

import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineExternalLink,
} from "react-icons/hi";

import {
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaServer,
  FaTools,
  FaGithub,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFramer,
  SiWix,
  SiSquarespace,
} from "react-icons/si";

/* =========================================
   ANIMATION VARIANTS
========================================= */

const smoothEase = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

const scaleReveal = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 25,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

/* =========================================
   COMPONENT
========================================= */

const About = () => {
  const sectionRef = useRef(null);

  /* =========================================
     SMOOTH SCROLL PROGRESS
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
     EDUCATION
  ========================================= */

  const education = [
    {
      institute: "Uttara University",
      degree: "B.Sc. in Computer Science",
      duration: "Dec 2025 – Present",
    },

    {
      institute: "Thakurgaon Polytechnic Institute",
      degree: "Diploma in Engineering",
      duration: "2020 – 2024",
    },

    {
      institute: "Panchagarh Technical School and College",
      degree: "Secondary School Certificate (SSC)",
      duration: "2018 – 2020",
    },
  ];

  /* =========================================
     FRONTEND SKILLS
  ========================================= */

  const frontendSkills = [
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },

    {
      name: "React.js",
      icon: <SiReact />,
    },

    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },

    {
      name: "Framer Motion",
      icon: <SiFramer />,
    },

    {
      name: "Redux Toolkit",
      icon: <FaLaptopCode />,
    },

    {
      name: "Shadcn/UI",
      icon: <FaLaptopCode />,
    },

    {
      name: "Responsive Design",
      icon: <FaLaptopCode />,
    },
  ];

  /* =========================================
     BACKEND SKILLS
  ========================================= */

  const backendSkills = [
    {
      name: "Node.js",
      icon: <FaServer />,
    },

    {
      name: "Express.js",
      icon: <FaServer />,
    },

    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },

    {
      name: "Mongoose",
      icon: <SiMongodb />,
    },

    {
      name: "REST API",
      icon: <FaServer />,
    },

    {
      name: "Next.js API",
      icon: <SiNextdotjs />,
    },

    {
      name: "JWT Auth",
      icon: <FaServer />,
    },

    {
      name: "Bcrypt.js",
      icon: <FaServer />,
    },
  ];

  /* =========================================
     CMS SKILLS
  ========================================= */

  const cmsSkills = [
    {
      name: "WordPress",
      icon: <FaWordpress />,
    },

    {
      name: "Shopify",
      icon: <FaShopify />,
    },

    {
      name: "Wix",
      icon: <SiWix />,
    },

    {
      name: "Squarespace",
      icon: <SiSquarespace />,
    },

    {
      name: "Framer",
      icon: <SiFramer />,
    },

    {
      name: "CMS Development",
      icon: <FaTools />,
    },

    {
      name: "Theme Customization",
      icon: <FaTools />,
    },

    {
      name: "eCommerce",
      icon: <FaTools />,
    },
  ];

  /* =========================================
     SKILL GROUPS
  ========================================= */

  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      description:
        "Modern interfaces, responsive layouts and interactive user experiences.",
      skills: frontendSkills,
    },

    {
      number: "02",
      title: "Backend",
      description:
        "APIs, databases, authentication and scalable application architecture.",
      skills: backendSkills,
    },

    {
      number: "03",
      title: "CMS & Platforms",
      description:
        "Business websites, stores and custom platform development.",
      skills: cmsSkills,
    },
  ];

  /* =========================================
     CURRENT EXPERIENCE
  ========================================= */

  const currentExperience = {
    company: "softvence.agency",
    role: "Web Developer",
    duration: "January 2026 – Present",
    experience: "1+ Year Experience",

    description:
      "Working as a Web Developer on modern websites, web applications, eCommerce stores and CMS-based projects. I focus on responsive development, clean UI implementation, performance optimization and scalable digital solutions.",

    skills: [
      "Next.js",
      "React",
      "WordPress",
      "Shopify",
      "Wix",
      "Squarespace",
      "Framer",
    ],
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* =========================================
          SMOOTH SCROLL PROGRESS LINE
      ========================================= */}

      <motion.div
        style={{
          scaleX: smoothScrollProgress,
          transformOrigin: "left",
        }}
        className="absolute left-0 top-0 z-20 h-[2px] w-full bg-gradient-to-r from-[#00bf8f] via-[#1cd8d2] to-[#00bf8f]"
      />

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-[250px] top-[15%] h-[500px] w-[500px] rounded-full bg-[#00bf8f]/5 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-[250px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#1cd8d2]/5 blur-[150px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-14 lg:mb-20"
        >
          <div className="mb-5 flex items-center gap-4">
            <motion.span
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-[13px] font-bold tracking-[0.2em] text-[#00bf8f]"
            >
              01.
            </motion.span>

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 40,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="h-px bg-[#00bf8f]"
            />

            <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              About Me
            </span>
          </div>

          <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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
                duration: 0.8,
                ease: smoothEase,
              }}
              className="max-w-[760px] text-[38px] font-bold leading-[1.08] tracking-[-1.8px] text-[var(--foreground)] sm:text-[50px] lg:text-[62px]"
            >
              I turn ideas into
              <span className="text-[#00bf8f]">
                {" "}
                digital experiences.
              </span>
            </motion.h2>

            <motion.p
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
                duration: 0.8,
                delay: 0.12,
                ease: smoothEase,
              }}
              className="max-w-[540px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px] lg:justify-self-end"
            >
              Full-stack web developer with a strong frontend focus,
              building responsive web applications, eCommerce stores and
              CMS-based websites with clean, scalable code.
            </motion.p>
          </div>
        </motion.div>

        {/* =========================================
            ABOUT + EDUCATION
        ========================================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.35fr]">
          {/* PROFILE CARD */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.35,
            }}
            className="group relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/35 sm:p-8"
          >
            <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] transition-all duration-500 group-hover:w-full" />

            <span className="pointer-events-none absolute -right-3 -top-8 text-[130px] font-black leading-none text-[#00bf8f]/[0.035]">
              01
            </span>

            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-[#00bf8f]/20 bg-[#00bf8f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#00bf8f]">
                Who I Am
              </span>

              <h3 className="mt-6 text-[27px] font-bold leading-[1.25] tracking-[-0.7px] text-[var(--foreground)] sm:text-[34px]">
                Developer focused on clean design and strong development.
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-[var(--muted)]">
                I specialize in Next.js, React, TypeScript and modern
                frontend development while also working with Node.js,
                MongoDB, REST APIs and application authentication.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-[var(--muted)]">
                I also develop and customize websites using WordPress,
                Shopify, Wix, Squarespace and Framer, allowing me to work
                across custom development, CMS and eCommerce projects.
              </p>

              <div className="my-7 h-px bg-[var(--border)]" />

              {/* CONTACT */}

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className="space-y-3"
              >
                <motion.a
                  variants={fadeUp}
                  whileHover={{
                    x: 6,
                  }}
                  href="tel:+8801719052334"
                  className="flex items-center gap-4 rounded-xl p-2"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-xl text-[#00bf8f]">
                    <HiOutlinePhone />
                  </div>

                  <div>
                    <p className="text-xs text-[var(--muted)]">
                      Phone
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-[var(--foreground)]">
                      +880 1719 052 334
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  variants={fadeUp}
                  whileHover={{
                    x: 6,
                  }}
                  href="mailto:shazzedshuvo@gmail.com"
                  className="flex items-center gap-4 rounded-xl p-2"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-xl text-[#00bf8f]">
                    <HiOutlineMail />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-[var(--muted)]">
                      Email
                    </p>

                    <p className="mt-0.5 truncate text-sm font-semibold text-[var(--foreground)]">
                      shazzedshuvo@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    x: 6,
                  }}
                  className="flex items-center gap-4 rounded-xl p-2"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-lg text-[#00bf8f]">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-xs text-[var(--muted)]">
                      Location
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-[var(--foreground)]">
                      Tetulia, Panchagarh
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* GITHUB */}

              <motion.a
                href="https://github.com/Shazzedshuvo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group mt-8 flex w-full items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[#00bf8f]/50 hover:bg-[#00bf8f]/10 hover:text-[#00bf8f]"
              >
                <span className="flex items-center gap-3">
                  <FaGithub className="text-xl" />
                  Explore My GitHub
                </span>

                <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* =========================================
              EDUCATION
          ========================================= */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            whileHover={{
              y: -6,
            }}
            className="group rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/35 sm:p-8 lg:p-10"
          >
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#00bf8f]">
                  My Journey
                </p>

                <h3 className="mt-2 text-[26px] font-bold tracking-[-0.6px] text-[var(--foreground)] sm:text-[32px]">
                  Education
                </h3>
              </div>

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-2xl text-[#00bf8f]"
              >
                <FaGraduationCap />
              </motion.div>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="mt-9"
            >
              {education.map((item, index) => (
                <motion.div
                  key={item.institute}
                  variants={fadeUp}
                  whileHover={{
                    x: 5,
                  }}
                  className="group/item relative flex gap-5 pb-9 last:pb-0"
                >
                  <div className="relative flex w-5 shrink-0 justify-center">
                    <motion.div
                      initial={{
                        scale: 0,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 14,
                      }}
                      className="relative z-10 mt-1 h-4 w-4 rounded-full border-[4px] border-[#00bf8f]/25 bg-[#00bf8f]"
                    />

                    {index !== education.length - 1 && (
                      <motion.div
                        initial={{
                          scaleY: 0,
                        }}
                        whileInView={{
                          scaleY: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.15,
                        }}
                        style={{
                          transformOrigin: "top",
                        }}
                        className="absolute left-1/2 top-5 h-[calc(100%-8px)] w-px -translate-x-1/2 bg-gradient-to-b from-[#00bf8f]/50 to-[var(--border)]"
                      />
                    )}
                  </div>

                  <div className="flex-1 rounded-2xl border border-transparent p-1 transition-all duration-300 group-hover/item:border-[var(--border)] group-hover/item:bg-[var(--surface)] sm:p-3">
                    <span className="inline-flex rounded-full bg-[#00bf8f]/10 px-3 py-1 text-[11px] font-semibold text-[#00bf8f]">
                      {item.duration}
                    </span>

                    <h4 className="mt-3 text-[16px] font-bold leading-6 text-[var(--foreground)] sm:text-[18px]">
                      {item.institute}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                      {item.degree}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================
            SKILLS
        ========================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={stagger}
          className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={scaleReveal}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="group relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/35 sm:p-7"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#00bf8f]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#00bf8f]/10" />

              <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] transition-all duration-500 group-hover:w-full" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold tracking-[0.15em] text-[#00bf8f]">
                      {group.number}
                    </span>

                    <h3 className="mt-2 text-[22px] font-bold tracking-[-0.5px] text-[var(--foreground)]">
                      {group.title}
                    </h3>
                  </div>

                  <HiOutlineExternalLink className="text-xl text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#00bf8f]" />
                </div>

                <p className="mt-3 min-h-[48px] text-[13px] leading-6 text-[var(--muted)]">
                  {group.description}
                </p>

                <div className="my-5 h-px bg-[var(--border)]" />

                <motion.div
                  variants={stagger}
                  className="flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeUp}
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[12px] font-medium text-[var(--muted)] transition-colors duration-300 hover:border-[#00bf8f]/40 hover:bg-[#00bf8f]/10 hover:text-[#00bf8f]"
                    >
                      <span className="text-[#00bf8f]">
                        {skill.icon}
                      </span>

                      {skill.name}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =========================================
            SOFTVENCE EXPERIENCE
        ========================================= */}

        <motion.div
          variants={scaleReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          whileHover={{
            y: -6,
          }}
          className="group relative mt-6 overflow-hidden rounded-[26px] border border-[#00bf8f]/30 bg-[var(--surface)] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#00bf8f]/55 hover:shadow-[0_25px_70px_rgba(0,191,143,0.08)] sm:p-8 lg:p-10"
        >
          {/* animated top line */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: smoothEase,
            }}
            style={{
              transformOrigin: "left",
            }}
            className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-[#00bf8f] via-[#1cd8d2] to-transparent"
          />

          {/* glow */}

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-[100px] -top-[120px] h-[350px] w-[350px] rounded-full bg-[#00bf8f] blur-[120px]"
          />

          <span className="pointer-events-none absolute -right-4 -top-10 text-[160px] font-black leading-none text-[#00bf8f]/[0.035]">
            01
          </span>

          <div className="relative z-10">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-start">
              {/* left */}

              <div className="flex items-start gap-4 sm:gap-5">
                <motion.div
                  whileHover={{
                    rotate: 6,
                    scale: 1.1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#00bf8f]/25 bg-[#00bf8f]/10 text-[23px] text-[#00bf8f] sm:h-16 sm:w-16 sm:text-[27px]"
                >
                  <FiBriefcase />
                </motion.div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#00bf8f]/20 bg-[#00bf8f]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#00bf8f]">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00bf8f] opacity-50" />

                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00bf8f]" />
                      </span>

                      Currently Working
                    </span>

                    <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                      {currentExperience.experience}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[27px] font-bold tracking-[-0.7px] text-[var(--foreground)] sm:text-[34px] lg:text-[38px]">
                    {currentExperience.role}
                  </h3>

                  <p className="mt-2 text-[16px] font-bold text-[#00bf8f] sm:text-[18px]">
                    {currentExperience.company}
                  </p>
                </div>
              </div>

              {/* date */}

              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="flex w-fit items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[12px] font-medium text-[var(--muted)]"
              >
                <FiCalendar className="text-[#00bf8f]" />

                {currentExperience.duration}
              </motion.div>
            </div>

            {/* Description */}

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
                delay: 0.15,
              }}
              className="mt-8 max-w-[1000px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px]"
            >
              {currentExperience.description}
            </motion.p>

            {/* Technologies */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {currentExperience.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={fadeUp}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[12px] font-medium text-[var(--muted)] transition-colors duration-300 hover:border-[#00bf8f]/40 hover:bg-[#00bf8f]/10 hover:text-[#00bf8f]"
                >
                  <FiCheckCircle className="text-[#00bf8f]" />

                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <div className="mt-8 flex items-center justify-between gap-5 border-t border-[var(--border)] pt-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Professional Experience
                </p>

                <p className="mt-1 text-[15px] font-bold text-[#00bf8f]">
                  1+ Year Experience
                </p>
              </div>

              <motion.div
                whileHover={{
                  x: 4,
                  y: -4,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#00bf8f]/25 bg-[#00bf8f]/10 text-xl text-[#00bf8f]"
              >
                <FiArrowUpRight />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            CTA
        ========================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-[#00bf8f]/20 bg-[#00bf8f]/[0.055] p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00bf8f]">
              What I Do
            </p>

            <h3 className="mt-2 text-[20px] font-bold text-[var(--foreground)] sm:text-[24px]">
              Web Apps · eCommerce · CMS · Custom Development
            </h3>
          </div>

          <motion.a
            href="#contact"
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-[#00bf8f] px-6 py-3.5 text-sm font-semibold text-[#04110d] transition-colors hover:bg-[#13d9a7]"
          >
            Let&apos;s Work Together

            <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;