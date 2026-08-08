"use client";

import {
  useRef,
  useState,
} from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";

import emailjs from "@emailjs/browser";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiArrowUpRight,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";


/* =====================================================
   EMAILJS CONFIG
===================================================== */

const EMAILJS_PUBLIC_KEY =
  "v37X1dqWUizfVgITv";

const ADMIN_SERVICE_ID =
  "service_146x3in";

const ADMIN_TEMPLATE_ID =
  "template_8i5dvqd";

const AUTOREPLY_SERVICE_ID =
  "service_e0ddska";

const AUTOREPLY_TEMPLATE_ID =
  "template_mu8gnxa";


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


const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};


/* =====================================================
   COMPONENT
===================================================== */

const ContactPage = () => {
  const containerRef =
    useRef(null);


  /* =====================================================
     SCROLL PROGRESS
  ===================================================== */

  const { scrollYProgress } =
    useScroll({
      target: containerRef,

      offset: [
        "start end",
        "end start",
      ],
    });


  const smoothScrollProgress =
    useSpring(
      scrollYProgress,
      {
        stiffness: 90,
        damping: 25,
        mass: 0.3,
      }
    );


  /* =====================================================
     MOUSE PARALLAX
  ===================================================== */

  const mouseX =
    useMotionValue(0);

  const mouseY =
    useMotionValue(0);


  const leftX =
    useTransform(
      mouseX,
      [-0.5, 0.5],
      [-8, 8]
    );

  const leftY =
    useTransform(
      mouseY,
      [-0.5, 0.5],
      [-6, 6]
    );


  const rightX =
    useTransform(
      mouseX,
      [-0.5, 0.5],
      [8, -8]
    );

  const rightY =
    useTransform(
      mouseY,
      [-0.5, 0.5],
      [-6, 6]
    );


  /* =====================================================
     FORM STATE
  ===================================================== */

  const [
    formData,
    setFormData,
  ] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });


  const [
    status,
    setStatus,
  ] = useState("idle");


  const [
    statusMessage,
    setStatusMessage,
  ] = useState("");


  /* =====================================================
     MOUSE EFFECT
  ===================================================== */

  const handleMouseMove = (
    e
  ) => {
    const rect =
      containerRef.current?.getBoundingClientRect();


    if (!rect) {
      return;
    }


    const x =
      (
        e.clientX -
        rect.left
      ) /
        rect.width -
      0.5;


    const y =
      (
        e.clientY -
        rect.top
      ) /
        rect.height -
      0.5;


    mouseX.set(x);

    mouseY.set(y);
  };


  const handleMouseLeave =
    () => {
      mouseX.set(0);

      mouseY.set(0);
    };


  /* =====================================================
     FORM CHANGE
  ===================================================== */

  const handleChange = (
    e
  ) => {
    const {
      name,
      value,
    } = e.target;


    setFormData(
      (prev) => ({
        ...prev,

        [name]:
          value,
      })
    );
  };


  /* =====================================================
     EMAIL SUBMIT
  ===================================================== */

  const handleSubmit =
    async (e) => {
      e.preventDefault();


      if (
        status ===
        "sending"
      ) {
        return;
      }


      const firstName =
        formData.first_name.trim();


      const lastName =
        formData.last_name.trim();


      const visitorEmail =
        formData.email
          .trim()
          .toLowerCase();


      const subject =
        formData.subject.trim();


      const message =
        formData.message.trim();


      /* ===============================
         REQUIRED VALIDATION
      =============================== */

      if (
        !firstName ||
        !visitorEmail ||
        !subject ||
        !message
      ) {
        setStatus(
          "error"
        );

        setStatusMessage(
          "Please complete all required fields."
        );

        return;
      }


      /* ===============================
         EMAIL VALIDATION
      =============================== */

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (
        !emailRegex.test(
          visitorEmail
        )
      ) {
        setStatus(
          "error"
        );

        setStatusMessage(
          "Please enter a valid email address."
        );

        return;
      }


      setStatus(
        "sending"
      );

      setStatusMessage(
        ""
      );


      const fullName =
        `${firstName} ${lastName}`.trim();


      /* ===============================
         ADMIN PARAMS
      =============================== */

      const adminParams = {
        first_name:
          firstName,

        last_name:
          lastName,

        from_name:
          fullName,

        name:
          fullName,

        from_email:
          visitorEmail,

        email:
          visitorEmail,

        reply_to:
          visitorEmail,

        to_email:
          "shazzedshuvo@gmail.com",

        subject,

        message,
      };


      /* ===============================
         AUTO REPLY PARAMS
      =============================== */

      const autoReplyParams = {
        first_name:
          firstName,

        last_name:
          lastName,

        from_name:
          fullName,

        name:
          fullName,

        from_email:
          visitorEmail,

        email:
          visitorEmail,

        user_email:
          visitorEmail,

        to_email:
          visitorEmail,

        reply_to:
          "shazzedshuvo@gmail.com",

        subject,

        message,
      };


      try {
        /* =============================
           ADMIN EMAIL
        ============================= */

        console.log(
          "Sending admin notification..."
        );


        const adminResponse =
          await emailjs.send(
            ADMIN_SERVICE_ID,

            ADMIN_TEMPLATE_ID,

            adminParams,

            {
              publicKey:
                EMAILJS_PUBLIC_KEY,
            }
          );


        console.log(
          "ADMIN EMAIL SUCCESS:",
          adminResponse
        );


        /* =============================
           EMAILJS RATE LIMIT GAP
        ============================= */

        await new Promise(
          (resolve) => {
            setTimeout(
              resolve,
              1100
            );
          }
        );


        /* =============================
           AUTO REPLY
        ============================= */

        try {
          console.log(
            "Sending automatic reply..."
          );


          const replyResponse =
            await emailjs.send(
              AUTOREPLY_SERVICE_ID,

              AUTOREPLY_TEMPLATE_ID,

              autoReplyParams,

              {
                publicKey:
                  EMAILJS_PUBLIC_KEY,
              }
            );


          console.log(
            "AUTO REPLY SUCCESS:",
            replyResponse
          );
        } catch (
          replyError
        ) {
          console.error(
            "AUTO REPLY FAILED:",
            replyError
          );


          console.error(
            "Auto reply status:",
            replyError?.status
          );


          console.error(
            "Auto reply text:",
            replyError?.text
          );


          setStatus(
            "success"
          );


          setStatusMessage(
            "Your message was sent successfully. The confirmation email could not be delivered, but I have received your message."
          );


          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            subject: "",
            message: "",
          });


          return;
        }


        /* =============================
           FULL SUCCESS
        ============================= */

        setStatus(
          "success"
        );


        setStatusMessage(
          "Thank you! Your message has been sent successfully. A confirmation email has also been sent to you."
        );


        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (
        adminError
      ) {
        console.error(
          "ADMIN EMAIL FAILED:",
          adminError
        );


        console.error(
          "Status:",
          adminError?.status
        );


        console.error(
          "Text:",
          adminError?.text
        );


        setStatus(
          "error"
        );


        setStatusMessage(
          adminError?.text
            ? `Email error: ${adminError.text}`
            : "Unable to send your message. Please try again."
        );
      }
    };


  return (
    <section
      id="contact"
      ref={containerRef}
      onMouseMove={
        handleMouseMove
      }
      onMouseLeave={
        handleMouseLeave
      }
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
          MOVING BACKGROUND GLOW RIGHT
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
            HEADER
        ================================================= */}

        <motion.div
          variants={
            stagger
          }
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mb-12 lg:mb-16"
        >

          {/* SMALL LABEL */}

          <motion.div
            variants={
              fadeUp
            }
            className="mb-5 flex items-center gap-4"
          >

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
              className="text-[13px] font-bold tracking-[0.2em] text-[#00bf8f]"
            >
              05.
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


            <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Contact
            </span>

          </motion.div>


          {/* HEADING GRID */}

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

            <motion.h2
              variants={
                fadeLeft
              }
              className="max-w-[760px] text-[38px] font-bold leading-[1.08] tracking-[-1.5px] text-[var(--foreground)] sm:text-[48px] lg:text-[58px]"
            >
              Let&apos;s build
              something{" "}

              <span className="text-[#00bf8f]">
                great together.
              </span>
            </motion.h2>


            <motion.p
              variants={
                fadeRight
              }
              className="max-w-[540px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px] lg:justify-self-end"
            >
              Have a project,
              website or web
              application in mind?
              Send me a message
              and I&apos;ll get
              back to you as soon
              as possible.
            </motion.p>

          </div>

        </motion.div>


        {/* =================================================
            CONTACT GRID
        ================================================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.78fr_1.22fr]">

          {/* =================================================
              LEFT CARD
          ================================================= */}

          <motion.div
            style={{
              x: leftX,
              y: leftY,
            }}
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: 0.75,
              ease:
                smoothEase,
            }}
            whileHover={{
              scale: 1.005,
            }}
            className="group relative overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/35 hover:shadow-[0_25px_70px_rgba(0,191,143,0.07)] sm:p-8 lg:p-9"
          >

            {/* TOP LINE */}

            <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] transition-all duration-500 group-hover:w-full" />


            {/* BACKGROUND NUMBER */}

            <span className="pointer-events-none absolute -right-5 -top-10 text-[150px] font-black leading-none text-[#00bf8f]/[0.035]">
              05
            </span>


            {/* GLOW */}

            <motion.div
              animate={{
                scale: [
                  1,
                  1.12,
                  1,
                ],

                opacity: [
                  0.07,
                  0.13,
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
              className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#00bf8f] blur-[80px]"
            />


            <div className="relative z-10">

              {/* ICON */}

              <motion.div
                whileHover={{
                  rotate: 6,
                  scale: 1.1,
                }}
                transition={{
                  type:
                    "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-[23px] text-[#00bf8f]"
              >
                <FiMessageSquare />
              </motion.div>


              {/* TITLE */}

              <motion.h3
                variants={
                  fadeUp
                }
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className="mt-6 text-[27px] font-bold tracking-[-0.6px] text-[var(--foreground)] sm:text-[32px]"
              >
                Contact
                Information
              </motion.h3>


              {/* DESCRIPTION */}

              <motion.p
                variants={
                  fadeUp
                }
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className="mt-3 max-w-[440px] text-[14px] leading-7 text-[var(--muted)] sm:text-[15px]"
              >
                Feel free to reach
                out directly or use
                the contact form.
                I&apos;m always open
                to discussing new
                projects,
                collaborations and
                opportunities.
              </motion.p>


              {/* =================================================
                  CONTACT ITEMS
              ================================================= */}

              <motion.div
                variants={
                  stagger
                }
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className="mt-8 space-y-3"
              >

                {/* PHONE */}

                <motion.a
                  variants={
                    fadeUp
                  }
                  href="tel:+8801719052334"
                  whileHover={{
                    x: 6,
                  }}
                  className="group/item flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-colors duration-300 hover:border-[var(--border)] hover:bg-[var(--surface)]"
                >

                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.08,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-xl text-[#00bf8f]"
                  >
                    <FiPhone />
                  </motion.div>


                  <div>

                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                      Phone
                    </p>

                    <p className="mt-1 text-[14px] font-semibold text-[var(--foreground)]">
                      +880 1719 052 334
                    </p>

                  </div>

                </motion.a>


                {/* EMAIL */}

                <motion.a
                  variants={
                    fadeUp
                  }
                  href="mailto:shazzedshuvo@gmail.com"
                  whileHover={{
                    x: 6,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-colors duration-300 hover:border-[var(--border)] hover:bg-[var(--surface)]"
                >

                  <motion.div
                    whileHover={{
                      rotate: -5,
                      scale: 1.08,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-xl text-[#00bf8f]"
                  >
                    <FiMail />
                  </motion.div>


                  <div className="min-w-0">

                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                      Email
                    </p>

                    <p className="mt-1 truncate text-[14px] font-semibold text-[var(--foreground)]">
                      shazzedshuvo@gmail.com
                    </p>

                  </div>

                </motion.a>


                {/* LOCATION */}

                <motion.div
                  variants={
                    fadeUp
                  }
                  whileHover={{
                    x: 6,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-colors duration-300 hover:border-[var(--border)] hover:bg-[var(--surface)]"
                >

                  <motion.div
                    whileHover={{
                      y: -3,
                      scale: 1.08,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-xl text-[#00bf8f]"
                  >
                    <FiMapPin />
                  </motion.div>


                  <div>

                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                      Location
                    </p>

                    <p className="mt-1 text-[14px] font-semibold leading-6 text-[var(--foreground)]">
                      Tetulia,
                      Panchagarh,
                      Bangladesh
                    </p>

                  </div>

                </motion.div>

              </motion.div>


              {/* =================================================
                  AVAILABILITY
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
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.65,
                  ease:
                    smoothEase,
                }}
                className="mt-8 rounded-2xl border border-[#00bf8f]/20 bg-[#00bf8f]/[0.055] p-5"
              >

                <div className="flex items-center gap-3">

                  <span className="relative flex h-3 w-3">

                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00bf8f] opacity-50" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00bf8f]" />

                  </span>


                  <span className="text-[13px] font-semibold text-[#00bf8f]">
                    Available for
                    new projects
                  </span>

                </div>


                <p className="mt-2 text-[12px] leading-6 text-[var(--muted)]">
                  Usually responds
                  within 24 hours.
                </p>

              </motion.div>

            </div>

          </motion.div>


          {/* =================================================
              RIGHT FORM CARD
          ================================================= */}

          <motion.div
            style={{
              x: rightX,
              y: rightY,
            }}
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: 0.75,
              ease:
                smoothEase,
            }}
            whileHover={{
              scale: 1.002,
            }}
            className="group relative overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/30 hover:shadow-[0_25px_70px_rgba(0,191,143,0.06)] sm:p-8 lg:p-10"
          >

            {/* TOP LINE */}

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


            {/* FORM HEADER */}

            <motion.div
              variants={
                stagger
              }
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="mb-8"
            >

              <motion.p
                variants={
                  fadeUp
                }
                className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#00bf8f]"
              >
                Send a Message
              </motion.p>


              <motion.h3
                variants={
                  fadeUp
                }
                className="mt-2 text-[27px] font-bold tracking-[-0.6px] text-[var(--foreground)] sm:text-[32px]"
              >
                Get In Touch
              </motion.h3>


              <motion.p
                variants={
                  fadeUp
                }
                className="mt-3 text-[14px] leading-6 text-[var(--muted)]"
              >
                Fill out the form
                below and I&apos;ll
                respond as soon as
                possible.
              </motion.p>

            </motion.div>


            {/* =================================================
                FORM
            ================================================= */}

            <motion.form
              variants={
                stagger
              }
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.05,
              }}
              onSubmit={
                handleSubmit
              }
              className="space-y-5"
            >

              {/* =================================================
                  FIRST / LAST NAME
              ================================================= */}

              <motion.div
                variants={
                  fadeUp
                }
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >

                {/* FIRST */}

                <div>

                  <label
                    htmlFor="first_name"
                    className="mb-2 block text-[12px] font-semibold text-[var(--foreground)]"
                  >
                    First Name *
                  </label>


                  <div className="group/input relative">

                    <FiUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] transition-colors duration-300 group-focus-within/input:text-[#00bf8f]" />


                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      value={
                        formData.first_name
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="First name"
                      required
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-11 pr-4 text-[14px] text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-[var(--muted)] focus:border-[#00bf8f]/60 focus:bg-[#00bf8f]/[0.025] focus:ring-2 focus:ring-[#00bf8f]/10"
                    />

                  </div>

                </div>


                {/* LAST */}

                <div>

                  <label
                    htmlFor="last_name"
                    className="mb-2 block text-[12px] font-semibold text-[var(--foreground)]"
                  >
                    Last Name
                  </label>


                  <div className="group/input relative">

                    <FiUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] transition-colors duration-300 group-focus-within/input:text-[#00bf8f]" />


                    <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      value={
                        formData.last_name
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Last name"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-11 pr-4 text-[14px] text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-[var(--muted)] focus:border-[#00bf8f]/60 focus:bg-[#00bf8f]/[0.025] focus:ring-2 focus:ring-[#00bf8f]/10"
                    />

                  </div>

                </div>

              </motion.div>


              {/* =================================================
                  EMAIL
              ================================================= */}

              <motion.div
                variants={
                  fadeUp
                }
              >

                <label
                  htmlFor="email"
                  className="mb-2 block text-[12px] font-semibold text-[var(--foreground)]"
                >
                  Email Address *
                </label>


                <div className="group/input relative">

                  <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] transition-colors duration-300 group-focus-within/input:text-[#00bf8f]" />


                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-11 pr-4 text-[14px] text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-[var(--muted)] focus:border-[#00bf8f]/60 focus:bg-[#00bf8f]/[0.025] focus:ring-2 focus:ring-[#00bf8f]/10"
                  />

                </div>

              </motion.div>


              {/* =================================================
                  SUBJECT
              ================================================= */}

              <motion.div
                variants={
                  fadeUp
                }
              >

                <label
                  htmlFor="subject"
                  className="mb-2 block text-[12px] font-semibold text-[var(--foreground)]"
                >
                  Subject *
                </label>


                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={
                    formData.subject
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Project inquiry"
                  required
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[14px] text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-[var(--muted)] focus:border-[#00bf8f]/60 focus:bg-[#00bf8f]/[0.025] focus:ring-2 focus:ring-[#00bf8f]/10"
                />

              </motion.div>


              {/* =================================================
                  MESSAGE
              ================================================= */}

              <motion.div
                variants={
                  fadeUp
                }
              >

                <label
                  htmlFor="message"
                  className="mb-2 block text-[12px] font-semibold text-[var(--foreground)]"
                >
                  Message *
                </label>


                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  value={
                    formData.message
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[14px] leading-6 text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-[var(--muted)] focus:border-[#00bf8f]/60 focus:bg-[#00bf8f]/[0.025] focus:ring-2 focus:ring-[#00bf8f]/10"
                />

              </motion.div>


              {/* =================================================
                  STATUS
              ================================================= */}

              {statusMessage && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    ease:
                      smoothEase,
                  }}
                  className={`flex items-start gap-3 rounded-xl border p-4 text-[13px] ${
                    status ===
                    "success"
                      ? "border-[#00bf8f]/25 bg-[#00bf8f]/10 text-[#00bf8f]"
                      : "border-red-500/25 bg-red-500/10 text-red-400"
                  }`}
                >

                  {status ===
                  "success" ? (

                    <FiCheckCircle className="mt-0.5 shrink-0 text-lg" />

                  ) : (

                    <FiAlertCircle className="mt-0.5 shrink-0 text-lg" />

                  )}


                  <span>
                    {
                      statusMessage
                    }
                  </span>

                </motion.div>

              )}


              {/* =================================================
                  SUBMIT
              ================================================= */}

              <motion.button
                variants={
                  fadeUp
                }
                type="submit"
                disabled={
                  status ===
                  "sending"
                }
                whileHover={
                  status !==
                  "sending"
                    ? {
                        y: -4,
                        scale:
                          1.01,
                      }
                    : {}
                }
                whileTap={
                  status !==
                  "sending"
                    ? {
                        scale:
                          0.97,
                      }
                    : {}
                }
                transition={{
                  type:
                    "spring",
                  stiffness: 280,
                  damping: 20,
                }}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#00bf8f] px-6 py-4 text-[14px] font-bold text-[#04110d] shadow-[0_12px_35px_rgba(0,191,143,0.16)] transition-colors duration-300 hover:bg-[#13d9a7] hover:shadow-[0_16px_45px_rgba(0,191,143,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
              >

                {status ===
                "sending" ? (
                  <>

                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#04110d]/30 border-t-[#04110d]" />

                    Sending Message...

                  </>
                ) : (
                  <>

                    <FiSend className="text-lg" />

                    Send Message

                    <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

                  </>
                )}

              </motion.button>


              <motion.p
                variants={
                  fadeUp
                }
                className="text-center text-[11px] leading-5 text-[var(--muted)]"
              >
                Your information
                will only be used
                to respond to your
                message.
              </motion.p>

            </motion.form>

          </motion.div>

        </div>

      </div>

    </section>
  );
};


export default ContactPage;