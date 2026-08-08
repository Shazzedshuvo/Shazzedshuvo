"use client";

import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

import {
  FiArrowUpRight,
  FiMail,
} from "react-icons/fi";


/* =====================================================
   MOTION SETTINGS
===================================================== */

const smoothEase = [
  0.16,
  1,
  0.3,
  1,
];


const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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
    x: -35,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};


const fadeRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};


/* =====================================================
   FOOTER
===================================================== */

const Footer = () => {
  const footerRef = useRef(null);


  /* =====================================================
     SCROLL PROGRESS
  ===================================================== */

  const { scrollYProgress } = useScroll({
    target: footerRef,

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
     SOCIAL LINKS
  ===================================================== */

  const socialLinks = [
    {
      name: "Facebook",

      icon: <FaFacebookF />,

      href:
        "https://www.facebook.com/mdshazzed.hossen.98",

      color: "#1877F2",
    },

    {
      name: "GitHub",

      icon: <FaGithub />,

      href:
        "https://github.com/Shazzedshuvo",

      color:
        "var(--foreground)",
    },

    {
      name: "LinkedIn",

      icon: <FaLinkedinIn />,

      href:
        "https://www.linkedin.com/in/shazzedshuvo/",

      color: "#0A66C2",
    },

    {
      name: "YouTube",

      icon: <FaYoutube />,

      href:
        "https://www.youtube.com/@dontworry4200",

      color: "#FF0000",
    },

    {
      name: "Website",

      icon: <FaGlobe />,

      href:
        "https://portfolio-site-beryl-phi.vercel.app/",

      color: "#00bf8f",
    },
  ];


  /* =====================================================
     QUICK LINKS
  ===================================================== */

  const quickLinks = [
    {
      name: "Home",
      href: "#home",
    },

    {
      name: "About",
      href: "#about",
    },

    {
      name: "Skills",
      href: "#skills",
    },

    {
      name: "Projects",
      href: "#projects",
    },

    {
      name: "Experience",
      href: "#experience",
    },

    {
      name: "Contact",
      href: "#contact",
    },
  ];


  return (
    <motion.footer
      ref={footerRef}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 0.8,
        ease: smoothEase,
      }}
      className="relative overflow-hidden border-t border-[var(--border)]"
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
          MOVING BACKGROUND GLOW LEFT
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
            -20,
            0,
          ],

          scale: [
            1,
            1.1,
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
        className="pointer-events-none absolute -left-[220px] bottom-[-250px] h-[500px] w-[500px] rounded-full bg-[#00bf8f]/8 blur-[150px]"
      />


      {/* =================================================
          MOVING BACKGROUND GLOW RIGHT
      ================================================= */}

      <motion.div
        animate={{
          x: [
            0,
            -30,
            0,
          ],

          y: [
            0,
            25,
            0,
          ],

          scale: [
            1,
            1.08,
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
        className="pointer-events-none absolute -right-[220px] top-[-200px] h-[450px] w-[450px] rounded-full bg-[#1cd8d2]/5 blur-[150px]"
      />


      {/* =================================================
          MAIN FOOTER
      ================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">

        <motion.div
          variants={
            containerVariants
          }
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="grid grid-cols-1 gap-12 border-b border-[var(--border)] pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.65fr_0.95fr]"
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <motion.div
            variants={
              fadeLeft
            }
            className="max-w-[520px]"
          >

            {/* LOGO */}

            <motion.a
              href="#home"
              whileHover={{
                x: 3,
              }}
              className="inline-flex items-center text-[29px] font-extrabold tracking-[-1.3px] text-[var(--foreground)] sm:text-[32px]"
            >
              Shazzed

              <span className="text-[#00bf8f]">
                Shuvo.
              </span>
            </motion.a>


            {/* DESCRIPTION */}

            <motion.p
              variants={
                fadeUp
              }
              className="mt-5 max-w-[500px] text-[14px] leading-7 text-[var(--muted)] sm:text-[15px]"
            >
              Web Developer focused
              on creating modern,
              responsive and scalable
              digital experiences
              across custom
              development, eCommerce
              and CMS platforms.
            </motion.p>


            {/* QUOTE */}

            <motion.p
              variants={
                fadeUp
              }
              className="mt-4 text-[13px] font-medium italic leading-6 text-[var(--muted)]"
            >
              &ldquo;Strive for
              progress, not
              perfection.&rdquo;
            </motion.p>


            {/* =================================================
                AVAILABILITY
            ================================================= */}

            <motion.div
              variants={
                fadeUp
              }
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              transition={{
                type:
                  "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="mt-6 flex w-fit items-center gap-3 rounded-full border border-[#00bf8f]/20 bg-[#00bf8f]/[0.07] px-4 py-2.5"
            >

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00bf8f] opacity-50" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00bf8f]" />

              </span>


              <span className="text-[12px] font-semibold text-[#00bf8f]">
                Available for new
                projects
              </span>

            </motion.div>


            {/* =================================================
                SOCIAL ICONS
            ================================================= */}

            <motion.div
              variants={
                containerVariants
              }
              className="mt-7 flex flex-wrap gap-3"
            >

              {socialLinks.map(
                (
                  social,
                  index
                ) => (

                  <motion.a
                    key={
                      social.name
                    }
                    variants={
                      fadeUp
                    }
                    href={
                      social.href
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      social.name
                    }
                    title={
                      social.name
                    }
                    whileHover={{
                      y: -6,
                      scale: 1.1,
                      rotate:
                        index % 2 ===
                        0
                          ? 4
                          : -4,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    transition={{
                      type:
                        "spring",
                      stiffness: 280,
                      damping: 18,
                    }}
                    className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[18px] backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/35 hover:shadow-[0_8px_30px_rgba(0,191,143,0.10)]"
                    style={{
                      color:
                        social.color,
                    }}
                  >

                    {/* ICON GLOW */}

                    <div className="pointer-events-none absolute inset-0 bg-[#00bf8f]/0 transition-colors duration-300 group-hover:bg-[#00bf8f]/5" />


                    <span className="relative z-10">
                      {
                        social.icon
                      }
                    </span>

                  </motion.a>

                )
              )}

            </motion.div>

          </motion.div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <motion.div
            variants={
              fadeUp
            }
          >

            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00bf8f]">
              Navigation
            </p>


            <h3 className="mt-2 text-[18px] font-bold text-[var(--foreground)]">
              Quick Links
            </h3>


            <motion.div
              variants={
                containerVariants
              }
              className="mt-6 flex flex-col gap-3"
            >

              {quickLinks.map(
                (
                  link,
                  index
                ) => (

                  <motion.a
                    key={
                      link.name
                    }
                    variants={
                      fadeUp
                    }
                    href={
                      link.href
                    }
                    whileHover={{
                      x: 7,
                    }}
                    transition={{
                      type:
                        "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="group flex w-fit items-center gap-2 text-[13px] font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[#00bf8f]"
                  >

                    {/* DOT */}

                    <motion.span
                      whileHover={{
                        scale: 1.5,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-[var(--border)] transition-colors duration-300 group-hover:bg-[#00bf8f]"
                    />


                    {link.name}

                  </motion.a>

                )
              )}

            </motion.div>

          </motion.div>


          {/* =================================================
              CONTACT CTA
          ================================================= */}

          <motion.div
            variants={
              fadeRight
            }
            whileHover={{
              y: -7,
              scale: 1.01,
            }}
            transition={{
              type:
                "spring",
              stiffness: 230,
              damping: 22,
            }}
            className="group relative overflow-hidden rounded-[22px] border border-[#00bf8f]/20 bg-[#00bf8f]/[0.055] p-6 transition-colors duration-300 hover:border-[#00bf8f]/40 hover:shadow-[0_25px_70px_rgba(0,191,143,0.07)]"
          >

            {/* TOP LINE */}

            <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#00bf8f] via-[#1cd8d2] to-transparent transition-all duration-500 group-hover:w-full" />


            {/* CTA GLOW */}

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
              className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#00bf8f] blur-[50px]"
            />


            <div className="relative z-10">

              {/* EMAIL ICON */}

              <motion.div
                whileHover={{
                  rotate: 7,
                  scale: 1.1,
                }}
                transition={{
                  type:
                    "spring",
                  stiffness: 280,
                  damping: 18,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-xl text-[#00bf8f]"
              >
                <FiMail />
              </motion.div>


              <motion.p
                variants={
                  fadeUp
                }
                className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#00bf8f]"
              >
                Start a Project
              </motion.p>


              <motion.h3
                variants={
                  fadeUp
                }
                className="mt-2 text-[22px] font-bold leading-tight tracking-[-0.5px] text-[var(--foreground)]"
              >
                Have an idea in
                mind?
              </motion.h3>


              <motion.p
                variants={
                  fadeUp
                }
                className="mt-3 text-[13px] leading-6 text-[var(--muted)]"
              >
                Let&apos;s discuss
                your website,
                application,
                eCommerce store or
                CMS project.
              </motion.p>


              {/* BUTTON */}

              <motion.a
                href="#contact"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type:
                    "spring",
                  stiffness: 280,
                  damping: 20,
                }}
                className="group/button mt-6 inline-flex items-center gap-2 rounded-full bg-[#00bf8f] px-5 py-3 text-[12px] font-bold text-[#04110d] shadow-[0_10px_30px_rgba(0,191,143,0.15)] transition-colors duration-300 hover:bg-[#13d9a7] hover:shadow-[0_14px_38px_rgba(0,191,143,0.22)]"
              >
                Let&apos;s Talk


                <FiArrowUpRight className="text-base transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />

              </motion.a>

            </div>

          </motion.div>

        </motion.div>


        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <motion.div
          variants={
            containerVariants
          }
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="flex flex-col items-center justify-between gap-4 pt-7 sm:flex-row"
        >

          {/* COPYRIGHT */}

          <motion.p
            variants={
              fadeLeft
            }
            className="text-center text-[11px] leading-5 text-[var(--muted)] sm:text-left sm:text-[12px]"
          >
            ©{" "}
            {new Date().getFullYear()}{" "}

            <span className="font-semibold text-[var(--foreground)]">
              Shazzed Shuvo
            </span>

            . All rights reserved.
          </motion.p>


          {/* DESIGNED BY */}

          <motion.div
            variants={
              fadeRight
            }
            whileHover={{
              y: -2,
            }}
            className="flex items-center gap-2 text-[11px] text-[var(--muted)] sm:text-[12px]"
          >

            <span>
              Designed & developed
              with
            </span>


            <motion.span
              animate={{
                opacity: [
                  0.6,
                  1,
                  0.6,
                ],
              }}
              transition={{
                duration: 2,
                repeat:
                  Infinity,
                ease:
                  "easeInOut",
              }}
              className="font-semibold text-[#00bf8f]"
            >
              passion
            </motion.span>


            <motion.span
              animate={{
                rotate: [
                  0,
                  180,
                  360,
                ],
              }}
              transition={{
                duration: 8,
                repeat:
                  Infinity,
                ease:
                  "linear",
              }}
              className="text-[#00bf8f]"
            >
              ✦
            </motion.span>

          </motion.div>

        </motion.div>

      </div>


      {/* =================================================
          BOTTOM GREEN LINE
      ================================================= */}

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
          duration: 1.2,
          ease: smoothEase,
        }}
        style={{
          transformOrigin:
            "center",
        }}
        className="h-px w-full bg-gradient-to-r from-transparent via-[#00bf8f]/60 to-transparent"
      />

    </motion.footer>
  );
};


export default Footer;