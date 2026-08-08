"use client";

import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";


/* =====================================================
   EXPERIENCE DATA
===================================================== */

const experiences = [
  {
    role: "Web Developer",
    company: "softvence.agency",
    duration: "January 2026 – Present",
    experience: "1+ Year Experience",
    featured: true,

    description:
      "Working as a Web Developer on modern websites, web applications, eCommerce stores and CMS-based projects. I focus on responsive development, clean UI implementation, performance optimization and scalable solutions across different platforms.",

    skills: [
      "Next.js",
      "React",
      "Shopify",
      "WordPress",
      "Wix",
      "Squarespace",
      "Framer",
    ],
  },

  {
    role: "Frontend Developer",
    company: "bdcalling academy",
    duration: "June 2025 – Present",

    description:
      "Developed responsive web applications using React, Next.js and Tailwind CSS while focusing on modern UI/UX, performance and reusable frontend architecture.",

    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },

  {
    role: "MERN Stack Developer",
    company: "bdcalling academy",
    duration: "June 2025 – December 2025",

    description:
      "Built full-stack applications using MongoDB, Express.js, React and Node.js, including REST APIs, authentication and database integration.",

    skills: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
    ],
  },

  {
    role: "Intern",
    company: "bdcalling academy",
    duration: "June 2024 – December 2024",

    description:
      "Assisted with web development projects, responsive layouts and UI improvements while gaining hands-on experience with modern web technologies.",

    skills: [
      "Frontend",
      "Responsive Design",
      "UI/UX",
    ],
  },
];


/* =====================================================
   MOTION SETTINGS
===================================================== */

const smoothEase = [
  0.16,
  1,
  0.3,
  1,
];


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};


const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};


const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};


const scaleReveal = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

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
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};


/* =====================================================
   COMPONENT
===================================================== */

const Experience = () => {
  const sectionRef = useRef(null);


  /* =====================================================
     SMOOTH SCROLL PROGRESS
  ===================================================== */

  const { scrollYProgress } = useScroll({
    target: sectionRef,

    offset: [
      "start end",
      "end start",
    ],
  });


  const smoothScrollProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 90,
      damping: 25,
      mass: 0.3,
    }
  );


  /* =====================================================
     EXPERIENCE FILTER
  ===================================================== */

  const featuredExperience =
    experiences.find(
      (item) =>
        item.featured
    );


  const previousExperiences =
    experiences.filter(
      (item) =>
        !item.featured
    );


  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >

      {/* =================================================
          SCROLL PROGRESS LINE
      ================================================= */}

      <motion.div
        style={{
          scaleX:
            smoothScrollProgress,

          transformOrigin:
            "left",
        }}
        className="absolute left-0 top-0 z-30 h-[2px] w-full bg-gradient-to-r from-[#00bf8f] via-[#1cd8d2] to-[#00bf8f]"
      />


      {/* =================================================
          ANIMATED BACKGROUND GLOW LEFT
      ================================================= */}

      <motion.div
        animate={{
          x: [
            0,
            30,
            0,
          ],

          y: [
            0,
            -25,
            0,
          ],

          scale: [
            1,
            1.08,
            1,
          ],
        }}

        transition={{
          duration: 11,

          repeat:
            Infinity,

          ease:
            "easeInOut",
        }}

        className="pointer-events-none absolute -left-[250px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#00bf8f]/5 blur-[150px]"
      />


      {/* =================================================
          ANIMATED BACKGROUND GLOW RIGHT
      ================================================= */}

      <motion.div
        animate={{
          x: [
            0,
            -25,
            0,
          ],

          y: [
            0,
            25,
            0,
          ],

          scale: [
            1,
            1.06,
            1,
          ],
        }}

        transition={{
          duration: 13,

          repeat:
            Infinity,

          ease:
            "easeInOut",
        }}

        className="pointer-events-none absolute -right-[250px] bottom-[5%] h-[500px] w-[500px] rounded-full bg-[#1cd8d2]/5 blur-[150px]"
      />


      {/* =================================================
          CONTAINER
      ================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          variants={
            fadeUp
          }

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}

          className="mb-12 lg:mb-16"
        >

          {/* SMALL TITLE */}

          <div className="mb-5 flex items-center gap-4">

            <motion.span
              initial={{
                opacity: 0,
                x: -15,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.5,
              }}

              className="text-[13px] font-bold tracking-[0.2em] text-[#00bf8f]"
            >
              03.
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
                delay: 0.12,
              }}

              className="h-px bg-[#00bf8f]"
            />


            <motion.span
              initial={{
                opacity: 0,
                x: 10,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.5,
                delay: 0.18,
              }}

              className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]"
            >
              Career Journey
            </motion.span>

          </div>


          {/* MAIN HEADING */}

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

            <motion.h2
              variants={
                fadeLeft
              }

              className="text-[38px] font-bold leading-[1.08] tracking-[-1.5px] text-[var(--foreground)] sm:text-[48px] lg:text-[58px]"
            >
              My Professional{" "}

              <span className="text-[#00bf8f]">
                Experience
              </span>
            </motion.h2>


            <motion.p
              variants={
                fadeRight
              }

              className="max-w-[550px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px] lg:justify-self-end"
            >
              My journey through web development,
              frontend engineering, full-stack development
              and modern website platforms.
            </motion.p>

          </div>

        </motion.div>


        {/* =================================================
            FEATURED EXPERIENCE
        ================================================= */}

        {featuredExperience && (

          <motion.div
            variants={
              scaleReveal
            }

            initial="hidden"

            whileInView="visible"

            viewport={{
              once: true,
              amount: 0.15,
            }}

            whileHover={{
              y: -7,
              scale: 1.005,
            }}

            transition={{
              type:
                "spring",

              stiffness:
                220,

              damping:
                22,
            }}

            className="group relative mb-10 overflow-hidden rounded-[26px] border border-[#00bf8f]/30 bg-[var(--surface)] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/55 hover:shadow-[0_30px_80px_rgba(0,191,143,0.08)] sm:p-8 lg:p-10"
          >

            {/* =============================================
                ANIMATED TOP LINE
            ============================================= */}

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
                ease:
                  smoothEase,
              }}

              style={{
                transformOrigin:
                  "left",
              }}

              className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-[#00bf8f] via-[#1cd8d2] to-transparent"
            />


            {/* =============================================
                FEATURED GLOW
            ============================================= */}

            <motion.div
              animate={{
                scale: [
                  1,
                  1.15,
                  1,
                ],

                opacity: [
                  0.07,
                  0.14,
                  0.07,
                ],
              }}

              transition={{
                duration: 7,

                repeat:
                  Infinity,

                ease:
                  "easeInOut",
              }}

              className="pointer-events-none absolute -right-[80px] -top-[100px] h-[300px] w-[300px] rounded-full bg-[#00bf8f] blur-[110px]"
            />


            {/* =============================================
                BACKGROUND NUMBER
            ============================================= */}

            <span className="pointer-events-none absolute -right-3 -top-10 text-[160px] font-black leading-none text-[#00bf8f]/[0.035]">
              01
            </span>


            <div className="relative z-10">

              {/* ===========================================
                  TOP
              =========================================== */}

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">

                <div className="flex items-start gap-4 sm:gap-5">

                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      rotate: 7,
                      scale: 1.1,
                    }}

                    transition={{
                      type:
                        "spring",

                      stiffness:
                        280,

                      damping:
                        17,
                    }}

                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#00bf8f]/25 bg-[#00bf8f]/10 text-[24px] text-[#00bf8f] sm:h-16 sm:w-16 sm:text-[28px]"
                  >
                    <FiBriefcase />
                  </motion.div>


                  <div>

                    {/* BADGES */}

                    <div className="mb-2 flex flex-wrap items-center gap-2">

                      {/* CURRENT */}

                      <span className="inline-flex items-center gap-2 rounded-full border border-[#00bf8f]/20 bg-[#00bf8f]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#00bf8f]">

                        <span className="relative flex h-2 w-2">

                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00bf8f] opacity-50" />

                          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00bf8f]" />

                        </span>

                        Currently Working

                      </span>


                      {/* EXPERIENCE */}

                      <motion.span
                        whileHover={{
                          y: -2,
                        }}

                        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]"
                      >
                        {
                          featuredExperience.experience
                        }
                      </motion.span>

                    </div>


                    {/* ROLE */}

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
                        duration: 0.6,
                        delay: 0.15,
                        ease:
                          smoothEase,
                      }}

                      className="text-[27px] font-bold tracking-[-0.7px] text-[var(--foreground)] sm:text-[34px]"
                    >
                      {
                        featuredExperience.role
                      }
                    </motion.h3>


                    {/* COMPANY */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}

                      viewport={{
                        once: true,
                      }}

                      transition={{
                        duration: 0.5,
                        delay: 0.22,
                      }}

                      className="mt-2 text-[16px] font-semibold text-[#00bf8f] sm:text-[18px]"
                    >
                      {
                        featuredExperience.company
                      }
                    </motion.p>

                  </div>

                </div>


                {/* ===========================================
                    DATE
                =========================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  whileHover={{
                    y: -3,
                  }}

                  transition={{
                    duration: 0.6,
                    ease:
                      smoothEase,
                  }}

                  className="flex w-fit items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[12px] font-medium text-[var(--muted)]"
                >
                  <FiCalendar className="text-[#00bf8f]" />

                  {
                    featuredExperience.duration
                  }
                </motion.div>

              </div>


              {/* ===========================================
                  DESCRIPTION
              =========================================== */}

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
                  ease:
                    smoothEase,
                }}

                className="mt-8 max-w-[950px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px]"
              >
                {
                  featuredExperience.description
                }
              </motion.p>


              {/* ===========================================
                  SKILLS
              =========================================== */}

              <motion.div
                variants={
                  stagger
                }

                initial="hidden"

                whileInView="visible"

                viewport={{
                  once: true,
                }}

                className="mt-7 flex flex-wrap gap-2"
              >

                {featuredExperience.skills.map(
                  (
                    skill
                  ) => (

                    <motion.span
                      key={
                        skill
                      }

                      variants={
                        fadeUp
                      }

                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}

                      className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[12px] font-medium text-[var(--muted)] transition-colors duration-300 hover:border-[#00bf8f]/40 hover:bg-[#00bf8f]/10 hover:text-[#00bf8f]"
                    >

                      <FiCheckCircle className="text-[#00bf8f]" />

                      {
                        skill
                      }

                    </motion.span>

                  )
                )}

              </motion.div>


              {/* ===========================================
                  BOTTOM
              =========================================== */}

              <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center">

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
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

        )}


        {/* =================================================
            PREVIOUS EXPERIENCE
        ================================================= */}

        <motion.div
          variants={
            stagger
          }

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.08,
          }}

          className="relative"
        >

          {/* =============================================
              DESKTOP TIMELINE
          ============================================= */}

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
              duration: 1.2,
              ease:
                smoothEase,
            }}

            style={{
              transformOrigin:
                "top",
            }}

            className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-gradient-to-b from-[#00bf8f]/60 via-[var(--border)] to-transparent md:block"
          />


          <div className="space-y-5">

            {previousExperiences.map(
              (
                experience,
                index
              ) => (

                <motion.div
                  key={`${experience.company}-${experience.role}`}

                  variants={
                    fadeUp
                  }

                  whileHover={{
                    x: 6,
                  }}

                  transition={{
                    type:
                      "spring",

                    stiffness:
                      250,

                    damping:
                      22,
                  }}

                  className="group relative md:pl-[70px]"
                >

                  {/* =========================================
                      TIMELINE DOT
                  ========================================= */}

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
                      type:
                        "spring",

                      stiffness:
                        250,

                      damping:
                        15,

                      delay:
                        index *
                        0.08,
                    }}

                    className="absolute left-[15px] top-8 z-10 hidden h-[17px] w-[17px] rounded-full border-[4px] border-[#00bf8f]/25 bg-[#00bf8f] md:block"
                  />


                  {/* =========================================
                      CARD
                  ========================================= */}

                  <motion.div
                    whileHover={{
                      y: -3,
                    }}

                    className="relative overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/35 hover:shadow-[0_20px_50px_rgba(0,191,143,0.06)] sm:p-7 lg:p-8"
                  >

                    {/* TOP LINE */}

                    <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] transition-all duration-500 group-hover:w-full" />


                    {/* HOVER GLOW */}

                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00bf8f]/0 blur-[60px] transition-all duration-500 group-hover:bg-[#00bf8f]/10" />


                    <div className="relative z-10">

                      {/* TOP */}

                      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                        <div>

                          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#00bf8f]">
                            Experience{" "}
                            {String(
                              index +
                                2
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>


                          <h3 className="mt-2 text-[21px] font-bold tracking-[-0.4px] text-[var(--foreground)] sm:text-[24px]">
                            {
                              experience.role
                            }
                          </h3>


                          <p className="mt-1 text-[14px] font-semibold text-[#00bf8f]">
                            {
                              experience.company
                            }
                          </p>

                        </div>


                        {/* DATE */}

                        <motion.div
                          whileHover={{
                            y: -3,
                          }}

                          className="flex w-fit items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[11px] font-medium text-[var(--muted)]"
                        >

                          <FiCalendar className="text-[#00bf8f]" />

                          {
                            experience.duration
                          }

                        </motion.div>

                      </div>


                      {/* DESCRIPTION */}

                      <p className="mt-5 max-w-[950px] text-[14px] leading-7 text-[var(--muted)] sm:text-[15px]">
                        {
                          experience.description
                        }
                      </p>


                      {/* SKILLS */}

                      <motion.div
                        variants={
                          stagger
                        }

                        className="mt-5 flex flex-wrap gap-2"
                      >

                        {experience.skills.map(
                          (
                            skill
                          ) => (

                            <motion.span
                              key={
                                skill
                              }

                              variants={
                                fadeUp
                              }

                              whileHover={{
                                y: -2,
                                scale:
                                  1.03,
                              }}

                              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[11px] font-medium text-[var(--muted)] transition-colors duration-300 hover:border-[#00bf8f]/40 hover:bg-[#00bf8f]/10 hover:text-[#00bf8f]"
                            >
                              {
                                skill
                              }
                            </motion.span>

                          )
                        )}

                      </motion.div>

                    </div>

                  </motion.div>

                </motion.div>

              )
            )}

          </div>

        </motion.div>

      </div>

    </section>
  );
};


export default Experience;