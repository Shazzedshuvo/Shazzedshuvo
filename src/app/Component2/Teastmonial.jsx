"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

import { SiFiverr } from "react-icons/si";

import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
} from "react-icons/fi";


/* =====================================================
   REAL FIVERR REVIEWS
===================================================== */

const testimonials = [
  {
    name: "muradkalam",

    role: "Fiverr Client",

    rating: 5,

    message:
      "He was a wonderful guide creating a website. Very kind. Very patient. He clearly knows how to design a website. I was really happy with it. I would highly recommend him. He even gave me advice after our time was done.",

    image: null,

    tags: [
      "Level of cooperation",
      "Deep understanding",
      "Politeness",
    ],
  },

  {
    name: "danielleis",

    role: "Fiverr Client",

    rating: 5,

    message:
      "Great working with Shuvo and his team again.",

    image: null,

    tags: [
      "Quick responsiveness",
      "Level of cooperation",
      "Went above and beyond",
    ],
  },

  {
    name: "smurphypower",

    role: "Fiverr Client",

    rating: 5,

    message:
      "Great work. I look forward to working with you again!",

    image: null,

    tags: [
      "Quick responsiveness",
      "Level of cooperation",
      "Deep understanding",
    ],
  },

  {
    name: "emilyrowton1",

    role: "Fiverr Client",

    rating: 5,

    message:
      "The developer was incredibly easy to communicate with and to interact with. He was responsive, professional, and understood the requirements of the project. He was patient and kind as well. I will definitely utilize his services again in the future.",

    image: null,

    tags: [
      "Politeness",
      "Went above and beyond",
      "Proactive communication",
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
      duration: 0.7,
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
      delayChildren: 0.04,
    },
  },
};


/* =====================================================
   COMPONENT
===================================================== */

const Testimonial = () => {
  const sectionRef = useRef(null);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [visibleCount, setVisibleCount] =
    useState(3);

  const [isPaused, setIsPaused] =
    useState(false);


  /* =====================================================
     SCROLL PROGRESS
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
     RESPONSIVE CARD COUNT
  ===================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (
        window.innerWidth < 1100
      ) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };


    handleResize();


    window.addEventListener(
      "resize",
      handleResize
    );


    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);


  /* =====================================================
     AUTO SLIDER
  ===================================================== */

  useEffect(() => {
    if (isPaused) {
      return;
    }


    const interval =
      setInterval(() => {
        setCurrentIndex(
          (prev) =>
            (prev + 1) %
            testimonials.length
        );
      }, 5000);


    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);


  /* =====================================================
     NEXT
  ===================================================== */

  const nextSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev + 1) %
        testimonials.length
    );
  };


  /* =====================================================
     PREVIOUS
  ===================================================== */

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (
          prev -
          1 +
          testimonials.length
        ) %
        testimonials.length
    );
  };


  /* =====================================================
     VISIBLE REVIEWS
  ===================================================== */

  const visibleTestimonials = [];


  for (
    let i = 0;
    i < visibleCount;
    i++
  ) {
    const index =
      (
        currentIndex +
        i
      ) %
      testimonials.length;


    visibleTestimonials.push({
      ...testimonials[index],

      originalIndex: index,
    });
  }


  return (
    <section
      ref={sectionRef}
      id="testimonials"
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
          BACKGROUND GLOW LEFT
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
            1.08,
            1,
          ],
        }}

        transition={{
          duration: 11,

          repeat: Infinity,

          ease:
            "easeInOut",
        }}

        className="pointer-events-none absolute -left-[250px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#00bf8f]/5 blur-[150px]"
      />


      {/* =================================================
          BACKGROUND GLOW RIGHT
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

          repeat: Infinity,

          ease:
            "easeInOut",
        }}

        className="pointer-events-none absolute -right-[250px] bottom-[5%] h-[500px] w-[500px] rounded-full bg-[#1cd8d2]/5 blur-[150px]"
      />


      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          variants={stagger}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.15,
          }}

          className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
        >

          {/* LEFT */}

          <motion.div
            variants={fadeLeft}
          >

            {/* SMALL LABEL */}

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
                04.
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
                  delay: 0.1,
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
                  delay: 0.15,
                }}

                className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]"
              >
                Client Feedback
              </motion.span>

            </div>


            {/* HEADING */}

            <motion.h2
              variants={fadeUp}

              className="text-[38px] font-bold leading-tight tracking-[-1.5px] text-[var(--foreground)] sm:text-[48px] lg:text-[58px]"
            >
              What My{" "}

              <span className="text-[#00bf8f]">
                Clients Say
              </span>
            </motion.h2>


            {/* DESCRIPTION */}

            <motion.p
              variants={fadeUp}

              className="mt-4 max-w-[650px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px]"
            >
              Real feedback from clients I&apos;ve
              worked with through Fiverr, reflecting
              communication, collaboration and quality
              of delivery.
            </motion.p>

          </motion.div>


          {/* =================================================
              FIVERR RATING
          ================================================= */}

          <motion.div
            variants={fadeRight}

            whileHover={{
              y: -5,
              scale: 1.02,
            }}

            whileTap={{
              scale: 0.98,
            }}

            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}

            className="group relative flex w-fit items-center gap-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 backdrop-blur-xl transition-colors duration-300 hover:border-[#1DBF73]/40"
          >

            {/* GLOW */}

            <div className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-[#1DBF73]/0 blur-[35px] transition-all duration-500 group-hover:bg-[#1DBF73]/15" />


            {/* ICON */}

            <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.08,
              }}

              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1DBF73]/10 text-[25px] text-[#1DBF73]"
            >
              <SiFiverr />
            </motion.div>


            <div className="relative z-10">

              {/* STARS */}

              <motion.div
                variants={stagger}

                className="flex items-center gap-1"
              >

                {[...Array(5)].map(
                  (_, index) => (

                    <motion.div
                      key={index}

                      variants={fadeUp}

                      whileHover={{
                        y: -2,
                        scale: 1.12,
                      }}
                    >
                      <FaStar className="text-[14px] text-[#FFB800]" />
                    </motion.div>

                  )
                )}

              </motion.div>


              <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
                5.0 Fiverr Reviews
              </p>

            </div>

          </motion.div>

        </motion.div>


        {/* =================================================
            SLIDER
        ================================================= */}

        <div
          onMouseEnter={() =>
            setIsPaused(true)
          }

          onMouseLeave={() =>
            setIsPaused(false)
          }

          className="relative"
        >

          <AnimatePresence
            mode="popLayout"
          >

            <motion.div
              key={currentIndex}

              initial={{
                opacity: 0,
                x: 45,
                scale: 0.99,
              }}

              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                x: -45,
                scale: 0.99,
              }}

              transition={{
                duration: 0.55,
                ease: smoothEase,
              }}

              className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
            >

              {visibleTestimonials.map(
                (
                  testimonial,
                  index
                ) => (

                  <motion.article
                    key={`${testimonial.name}-${testimonial.originalIndex}`}

                    initial={{
                      opacity: 0,
                      y: 35,
                      scale: 0.96,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}

                    transition={{
                      duration: 0.6,

                      delay:
                        index *
                        0.08,

                      ease:
                        smoothEase,
                    }}

                    whileHover={{
                      y: -8,
                      scale: 1.01,
                    }}

                    whileTap={{
                      scale: 0.99,
                    }}

                    className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/40 hover:shadow-[0_25px_65px_rgba(0,191,143,0.07)] sm:p-7"
                  >

                    {/* =========================================
                        TOP LINE
                    ========================================= */}

                    <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] transition-all duration-500 group-hover:w-full" />


                    {/* =========================================
                        HOVER GLOW
                    ========================================= */}

                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00bf8f]/0 blur-[60px] transition-all duration-500 group-hover:bg-[#00bf8f]/10" />


                    <div className="relative z-10 flex h-full flex-col">

                      {/* =====================================
                          OPTIONAL SCREENSHOT
                      ===================================== */}

                      {testimonial.image && (

                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.97,
                          }}

                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}

                          className="mb-6 overflow-hidden rounded-2xl border border-[var(--border)]"
                        >

                          <motion.img
                            src={
                              testimonial.image
                            }

                            alt={`${testimonial.name} Fiverr review`}

                            whileHover={{
                              scale: 1.035,
                            }}

                            transition={{
                              duration: 0.55,
                              ease: smoothEase,
                            }}

                            className="h-[190px] w-full object-cover object-top"
                          />

                        </motion.div>

                      )}


                      {/* =====================================
                          QUOTE + FIVERR
                      ===================================== */}

                      <div className="flex items-start justify-between gap-5">

                        <motion.div
                          whileHover={{
                            rotate: -6,
                            scale: 1.1,
                          }}

                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 18,
                          }}

                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-lg text-[#00bf8f]"
                        >
                          <FaQuoteLeft />
                        </motion.div>


                        <motion.div
                          whileHover={{
                            y: -2,
                          }}

                          className="flex items-center gap-2 rounded-full border border-[#1DBF73]/20 bg-[#1DBF73]/10 px-3 py-1.5"
                        >
                          <SiFiverr className="text-[#1DBF73]" />

                          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1DBF73]">
                            Fiverr
                          </span>
                        </motion.div>

                      </div>


                      {/* =====================================
                          STARS
                      ===================================== */}

                      <motion.div
                        variants={stagger}

                        initial="hidden"

                        animate="visible"

                        className="mt-6 flex items-center gap-1"
                      >

                        {[
                          ...Array(
                            testimonial.rating
                          ),
                        ].map(
                          (
                            _,
                            starIndex
                          ) => (

                            <motion.div
                              key={
                                starIndex
                              }

                              variants={
                                fadeUp
                              }

                              whileHover={{
                                y: -2,
                                scale: 1.12,
                              }}
                            >

                              <FaStar className="text-[15px] text-[#FFB800]" />

                            </motion.div>

                          )
                        )}


                        <span className="ml-2 text-[13px] font-bold text-[var(--foreground)]">
                          {
                            testimonial.rating
                          }
                          .0
                        </span>

                      </motion.div>


                      {/* =====================================
                          REVIEW
                      ===================================== */}

                      <motion.blockquote
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}

                        animate={{
                          opacity: 1,
                          y: 0,
                        }}

                        transition={{
                          duration: 0.6,
                          delay: 0.14,
                          ease: smoothEase,
                        }}

                        className="mt-5 flex-1 text-[14px] leading-7 text-[var(--muted)] sm:text-[15px]"
                      >
                        &ldquo;
                        {
                          testimonial.message
                        }
                        &rdquo;
                      </motion.blockquote>


                      {/* =====================================
                          TAGS
                      ===================================== */}

                      <motion.div
                        variants={stagger}

                        initial="hidden"

                        animate="visible"

                        className="mt-6 flex flex-wrap gap-2"
                      >

                        {testimonial.tags.map(
                          (
                            tag
                          ) => (

                            <motion.span
                              key={
                                tag
                              }

                              variants={
                                fadeUp
                              }

                              whileHover={{
                                y: -2,
                                scale: 1.03,
                              }}

                              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-medium text-[var(--muted)] transition-colors duration-300 hover:border-[#00bf8f]/35 hover:bg-[#00bf8f]/10 hover:text-[#00bf8f]"
                            >
                              {
                                tag
                              }
                            </motion.span>

                          )
                        )}

                      </motion.div>


                      {/* DIVIDER */}

                      <div className="my-6 h-px bg-[var(--border)]" />


                      {/* =====================================
                          CLIENT
                      ===================================== */}

                      <div className="flex items-center justify-between gap-4">

                        <div className="flex items-center gap-3">

                          {/* AVATAR */}

                          <motion.div
                            whileHover={{
                              rotate: 5,
                              scale: 1.08,
                            }}

                            transition={{
                              type: "spring",
                              stiffness: 250,
                              damping: 18,
                            }}

                            className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#00bf8f] to-[#1cd8d2] text-sm font-bold uppercase text-[#04110d]"
                          >
                            {testimonial.name.slice(
                              0,
                              2
                            )}
                          </motion.div>


                          <div>

                            <h3 className="text-[14px] font-bold text-[var(--foreground)] sm:text-[15px]">
                              {
                                testimonial.name
                              }
                            </h3>


                            <p className="mt-0.5 text-xs text-[var(--muted)]">
                              {
                                testimonial.role
                              }
                            </p>

                          </div>

                        </div>


                        <motion.div
                          whileHover={{
                            x: 3,
                            y: -3,
                          }}
                        >
                          <FiExternalLink className="text-lg text-[var(--muted)] transition-colors duration-300 group-hover:text-[#00bf8f]" />
                        </motion.div>

                      </div>

                    </div>

                  </motion.article>

                )
              )}

            </motion.div>

          </AnimatePresence>


          {/* =================================================
              SLIDER CONTROLS
          ================================================= */}

          <motion.div
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
              duration: 0.65,
              delay: 0.1,
              ease: smoothEase,
            }}

            className="mt-8 flex flex-col items-center justify-between gap-5 sm:flex-row"
          >

            {/* =============================================
                DOTS
            ============================================= */}

            <div className="flex items-center gap-2">

              {testimonials.map(
                (_, index) => (

                  <motion.button
                    key={index}

                    type="button"

                    onClick={() =>
                      setCurrentIndex(
                        index
                      )
                    }

                    whileHover={{
                      scale: 1.08,
                    }}

                    whileTap={{
                      scale: 0.9,
                    }}

                    aria-label={`Go to review ${
                      index + 1
                    }`}

                    className="relative h-3 w-8 overflow-hidden rounded-full bg-[var(--border)]"
                  >

                    {currentIndex ===
                      index && (

                      <motion.span
                        layoutId="testimonial-dot"

                        className="absolute inset-0 rounded-full bg-[#00bf8f]"

                        transition={{
                          type: "spring",
                          stiffness: 320,
                          damping: 25,
                        }}
                      />

                    )}

                  </motion.button>

                )
              )}

            </div>


            {/* =============================================
                ARROWS
            ============================================= */}

            <div className="flex items-center gap-3">

              {/* PREV */}

              <motion.button
                type="button"

                onClick={
                  prevSlide
                }

                whileHover={{
                  x: -3,
                  scale: 1.06,
                }}

                whileTap={{
                  scale: 0.9,
                }}

                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}

                aria-label="Previous testimonial"

                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-xl text-[var(--foreground)] backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/50 hover:bg-[#00bf8f]/10 hover:text-[#00bf8f]"
              >
                <FiChevronLeft />
              </motion.button>


              {/* NEXT */}

              <motion.button
                type="button"

                onClick={
                  nextSlide
                }

                whileHover={{
                  x: 3,
                  scale: 1.06,
                }}

                whileTap={{
                  scale: 0.9,
                }}

                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}

                aria-label="Next testimonial"

                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00bf8f] text-xl text-[#04110d] shadow-[0_10px_30px_rgba(0,191,143,0.18)] transition-colors duration-300 hover:bg-[#13d9a7] hover:shadow-[0_14px_38px_rgba(0,191,143,0.25)]"
              >
                <FiChevronRight />
              </motion.button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};


export default Testimonial;