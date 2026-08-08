"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

import {
  FiArrowUpRight,
  FiDownload,
} from "react-icons/fi";

import Photo from "./Photo";

export default function Home1() {
  const roles = useMemo(
    () => [
      "Web Developer",
      "MERN Stack Developer",
      "Frontend Engineer",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  /* =========================================
     TYPING EFFECT
  ========================================= */

  useEffect(() => {
    const currentRole = roles[index];

    let delay = deleting ? 45 : 90;

    if (!deleting && subIndex === currentRole.length) {
      delay = 1400;
    }

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < currentRole.length) {
        setSubIndex((prev) => prev + 1);
      } else if (!deleting && subIndex === currentRole.length) {
        setDeleting(true);
      } else if (deleting && subIndex > 0) {
        setSubIndex((prev) => prev - 1);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  /* =========================================
     SOCIAL LINKS
  ========================================= */

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/mdshazzed.hossen.98",
      label: "Facebook",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Shazzedshuvo",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/shazzedshuvo/",
      label: "LinkedIn",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com/@dontworry4200",
      label: "YouTube",
    },
    {
      icon: <FaGlobe />,
      href: "/",
      label: "Website",
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-[90px] text-[var(--foreground)]"
    >
      {/* =========================================
          BIG GLOW BALL 01
          Dark = Original
          Light = Soft Pastel
      ========================================= */}

      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[70vw] w-[70vw] rounded-full blur-[100px] animate-pulse md:h-[40vw] md:w-[40vw]"
        style={{
          background: "var(--hero-glow-1)",
          opacity: "var(--hero-glow-opacity)",
        }}
      />

      {/* =========================================
          BIG GLOW BALL 02
      ========================================= */}

      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[70vw] w-[70vw] rounded-full blur-[100px] animate-pulse md:h-[40vw] md:w-[40vw] [animation-delay:500ms]"
        style={{
          background: "var(--hero-glow-2)",
          opacity: "var(--hero-glow-opacity)",
        }}
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-10 lg:px-12">
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-center lg:text-left"
        >
          {/* Availability */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[13px] font-medium text-[var(--muted)] backdrop-blur-xl sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00bf8f] opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00bf8f]" />
            </span>

            Available for new projects
          </motion.div>

          {/* Hello */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.22,
            }}
            className="mb-3 text-lg font-semibold text-[var(--accent)] sm:text-xl"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.28,
            }}
            className="text-[42px] font-bold leading-[1.05] tracking-[-2px] text-[var(--foreground)] sm:text-[56px] md:text-[64px] lg:text-[70px] xl:text-[76px]"
          >
            Shazzed
            <span className="text-[var(--accent)]">
              {" "}
              Shuvo.
            </span>
          </motion.h1>

          {/* Typing Text */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.34,
            }}
            className="mt-5 min-h-[38px] text-xl font-medium text-[var(--muted)] sm:text-2xl"
          >
            I&apos;m a{" "}

            <span className="font-semibold text-[var(--accent)]">
              {roles[index].substring(0, subIndex)}
            </span>

            <span className="typing-cursor ml-1 text-[var(--accent)]">
              |
            </span>
          </motion.div>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className="mx-auto mt-6 max-w-[650px] text-[15px] leading-7 text-[var(--muted)] sm:text-[17px] lg:mx-0"
          >
            I build modern, responsive and high-performance web
            experiences with clean code, thoughtful UI and scalable
            development solutions.
          </motion.p>

          {/* =========================================
              BUTTONS
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.46,
            }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            {/* Project Button */}

            <motion.a
              href="#projects"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center gap-2 rounded-full bg-[#00bf8f] px-6 py-3.5 text-[15px] font-semibold text-[#03100c] shadow-[0_10px_35px_rgba(0,191,143,0.18)] transition-all duration-300 hover:bg-[#13d9a7] hover:shadow-[0_12px_40px_rgba(0,191,143,0.28)]"
            >
              View My Work

              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>

            {/* Resume */}

            <motion.a
              href="/cv2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-[15px] font-semibold text-[var(--foreground)] backdrop-blur-md transition-all duration-300 hover:border-[#00bf8f]/60 hover:bg-[#00bf8f]/10 hover:text-[#00bf8f]"
            >
              <FiDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />

              My Resume
            </motion.a>
          </motion.div>

          {/* =========================================
              SOCIAL ICONS
          ========================================= */}

          <div className="mt-9 flex items-center justify-center gap-3 lg:justify-start">
            {socialLinks.map((social, socialIndex) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                title={social.label}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.52 + socialIndex * 0.08,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-lg text-[var(--muted)] backdrop-blur-md transition-all duration-300 hover:border-[#00bf8f]/60 hover:bg-[#00bf8f]/10 hover:text-[#00bf8f]"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* =========================================
            RIGHT PHOTO
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="relative flex items-center justify-center"
        >
          {/* Photo Soft Glow */}

          <div className="pointer-events-none absolute h-[70%] w-[70%] rounded-full bg-[#00bf8f]/10 blur-[100px]" />

          <div className="relative z-10">
            <Photo />
          </div>
        </motion.div>
      </div>

      {/* =========================================
          TYPING CURSOR
      ========================================= */}

      <style jsx>{`
        .typing-cursor {
          animation: blink 0.8s step-end infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}