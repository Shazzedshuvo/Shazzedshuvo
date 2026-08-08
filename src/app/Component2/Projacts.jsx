"use client";

import { useRef, useState } from "react";

import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  FaCode,
  FaGlobe,
  FaWordpress,
  FaShopify,
  FaGraduationCap,
} from "react-icons/fa";

import {
  SiWix,
  SiSquarespace,
  SiWebflow,
} from "react-icons/si";

import {
  FiArrowUpRight,
  FiChevronDown,
} from "react-icons/fi";


/* =====================================================
   DEVELOPMENT PROJECTS
===================================================== */

const developmentProjects = [
  {
    title: "TechLearning Portfolio",
    platform: "Next.js",
    category: "Portfolio Website",

    description:
      "A modern and responsive developer portfolio built with Next.js, React and Tailwind CSS, featuring smooth animations, optimized performance and a clean user experience.",

    image: "/333.jpg",

    link: "https://techlearning-website.vercel.app/",

    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],

    keywords: [
      "Portfolio",
      "Responsive",
      "Animation",
      "Performance",
    ],
  },

  {
    title: "ElectroShop E-Commerce",
    platform: "MERN Stack",
    category: "eCommerce",

    description:
      "A full-stack eCommerce platform featuring product filtering, cart functionality, user authentication and a scalable shopping experience.",

    image: "/111.jpg",

    link: "https://elatronix-store420.netlify.app/",

    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
    ],

    keywords: [
      "eCommerce",
      "Authentication",
      "Shopping Cart",
      "Product Filtering",
    ],
  },

  {
    title: "Furniture Shop Website",
    platform: "Next.js",
    category: "eCommerce Website",

    description:
      "A modern and responsive furniture store with polished layouts, interactive elements, smooth transitions and a customer-focused shopping experience.",

    image: "/222.jpg",

    link: "https://rojact-with-next-js1.vercel.app/",

    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],

    keywords: [
      "Furniture",
      "eCommerce",
      "Responsive",
      "Modern UI",
    ],
  },

  {
    title: "Shuvo Portfolio",
    platform: "Next.js",
    category: "Personal Portfolio",

    description:
      "A polished personal portfolio showcasing development skills, professional experience and selected projects using Next.js, Tailwind CSS and Framer Motion.",

    image: "/shuvo.jpg",

    link: "https://portfolio-site-beryl-phi.vercel.app/",

    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],

    keywords: [
      "Portfolio",
      "Dark Mode",
      "Light Mode",
      "Animation",
    ],
  },

  {
    title: "React Blog Project",
    platform: "React",
    category: "Blog Application",

    description:
      "A responsive React-based blog application with a clean reading experience, reusable components and a modern content-focused interface.",

    image: "/2234.png",

    link: "https://react-blog-projact.vercel.app/",

    tech: [
      "React",
      "JavaScript",
      "CSS",
    ],

    keywords: [
      "Blog",
      "Reusable Components",
      "Responsive",
      "Content",
    ],
  },

  {
    title: "AI Hospital Management System",
    platform: "Next.js / Full Stack",
    category: "Management System",

    description:
      "A responsive healthcare management application featuring real-time data views, advanced search, organized patient workflows and a scalable structure prepared for future AI-powered features.",

    image: "/Ai.png",

    link:
      "https://ai-hospital-management-system-alpha.vercel.app/",

    tech: [
      "Next.js",
      "React",
      "Full Stack",
      "API",
    ],

    keywords: [
      "Healthcare",
      "Dashboard",
      "Management",
      "AI Ready",
    ],
  },
];


/* =====================================================
   CMS / WEBSITE PROJECTS
===================================================== */

const cmsProjects = [
  {
    title: "The Library",
    platform: "Squarespace",
    link: "https://www.thelibrary.company/",
  },

  {
    title: "Percenteum",
    platform: "Wix",
    link: "https://www.percenteum.com/",
  },

  {
    title: "Cena Impact",
    platform: "Squarespace",
    link: "https://www.cenaimpact.com/",
  },

  {
    title: "360 Management",
    platform: "Wix",
    link: "https://www.360management.ch/",
  },

  {
    title: "My Path ABA",
    platform: "Squarespace",
    link: "https://www.mypathaba.com/",
  },

  {
    title: "Talbot Management",
    platform: "Wix",
    link: "https://www.talbotmanagement.info/",
  },

  {
    title: "Agape Love Home Care",
    platform: "Wix",
    link: "https://www.agapelovehc.com/",
  },

  {
    title: "Healthcare Service",
    platform: "Squarespace",
    link: "https://beagle-caper-yknm.squarespace.com/",
  },

  {
    title: "DM Health Partners",
    platform: "Squarespace",
    link: "https://www.dmhealthpartners.com/",
  },

  {
    title: "Construction Website",
    platform: "Squarespace",
    link: "https://beagle-orb-edgl.squarespace.com/",
  },

  {
    title: "Home Fixerz",
    platform: "Squarespace",
    link: "https://www.homefixerz.com/",
  },

  {
    title: "Home Design",
    platform: "Squarespace",
    link:
      "https://elephant-raspberry-j65f.squarespace.com/?password=121",
  },

  {
    title: "Seven Thirty One",
    platform: "Wix",
    link: "https://www.seventhirtyone.love/",
  },

  {
    title: "Culture Kasa",
    platform: "Wix",
    link: "https://culturekasa.wixsite.com/monsite",
  },

  {
    title: "Midgard Metalworks",
    platform: "Wix",
    link: "https://www.midgardmetalworks.net/",
  },

  {
    title: "8 Media",
    platform: "Wix Studio",
    link: "https://yakuptasdemir.wixstudio.com/8-media",
  },

  {
    title: "Angie Marie Photography",
    platform: "Squarespace",
    link: "http://www.angiemariephotography.net/",
  },

  {
    title: "Wedding Website",
    platform: "Squarespace",
    link: "https://indigo-plane-z7d7.squarespace.com/",
  },

  {
    title: "Next Home BA",
    platform: "Squarespace",
    link: "https://www.nexthomeba.com.au/",
  },

  {
    title: "Dynamic Recovery Restore",
    platform: "Wix",
    link: "https://www.dynamicrecoveryrestore.com/",
  },

  {
    title: "Care Alliance Collective",
    platform: "Squarespace",
    link: "https://www.carealliancecollective.com/",
  },

  /* WordPress */

  {
    title: "Motjuan Demo",
    platform: "WordPress",
    link: "https://motjuandemo.wizardswp.com/",
  },

  {
    title: "Diaspora Parcel",
    platform: "WordPress",
    link: "https://diasporaparcel.wizardswp.com/",
  },

  {
    title: "Guidry Law",
    platform: "WordPress",
    link: "https://guidrylaw.wizardswp.com/",
  },

  {
    title: "Peak Laundry",
    platform: "WordPress",
    link: "https://peaklaundry.wizardswp.com/",
  },

  {
    title: "DFCC Church",
    platform: "WordPress",
    link: "https://dfccchurch.wizardswp.com/",
  },

  {
    title: "Ian Siddiqi",
    platform: "WordPress",
    link: "https://iansiddiqi253.svalphawp.com/",
  },

  {
    title: "1920 Lounge",
    platform: "WordPress",
    link: "https://1920lounge.com/home-new/",
  },

  /* Business Websites */

  {
    title: "Nodefeat",
    platform: "Business Website",
    link: "https://www.nodefeat.co/",
  },

  {
    title: "Enter Into Calm",
    platform: "Business Website",
    link: "https://www.enterintocalm.com/",
  },

  {
    title: "Joeys HR Lounge",
    platform: "Business Website",
    link: "https://www.joeyshrlounge.com/",
  },

  {
    title: "Long Dog Lawn Care",
    platform: "Business Website",
    link: "https://www.longdoglawncarenwa.com/",
  },

  {
    title: "Milltown Dental",
    platform: "Business Website",
    link: "https://www.milltowndental.us/",
  },

  {
    title: "VMC Pharmacy",
    platform: "Business Website",
    link: "https://www.vmcpharmacy.com/",
  },

  {
    title: "Repurpose Solar",
    platform: "Business Website",
    link: "https://www.repurposesolar.net/",
  },

  {
    title: "Jesus Saves Restoration",
    platform: "Business Website",
    link: "https://jesussavesrestoration.com/",
  },

  {
    title: "Spurmart",
    platform: "Business Website",
    link: "https://www.spurmart.de/",
  },

  {
    title: "Stain Steamerz",
    platform: "Business Website",
    link: "https://stainsteamerz.com/",
  },

  {
    title: "Next Phase Recovery",
    platform: "Business Website",
    link: "https://nextphaserecovery.org/",
  },

  {
    title: "Clean Dip Pool",
    platform: "Business Website",
    link: "https://cleandippool.com/",
  },

  {
    title: "Moving Force",
    platform: "Business Website",
    link: "https://movingforce.io/",
  },

  {
    title: "Musclinity",
    platform: "Business Website",
    link: "https://musclinity.com/",
  },

  {
    title: "Chaat Corner",
    platform: "Business Website",
    link: "https://chaatcorner.com.au/",
  },

  {
    title: "Deja Brew",
    platform: "Business Website",
    link: "https://dejabrewnh.com/",
  },

  {
    title: "Legg Chiropractic",
    platform: "Business Website",
    link: "https://www.leggchiropractic.com/",
  },

  {
    title: "Clause & Effect Group",
    platform: "Business Website",
    link: "https://www.clauseandeffectgroup.co.uk/",
  },

  {
    title: "LABT",
    platform: "Business Website",
    link: "https://www.labt.company/",
  },

  {
    title: "Haidar Thobes",
    platform: "Business Website",
    link: "https://www.haidarthobes.com/",
  },

  {
    title: "Med Lounge San Ramon",
    platform: "Business Website",
    link: "https://medloungesanramon.com/",
  },

  {
    title: "The Heights District",
    platform: "Business Website",
    link: "https://www.theheightsdistrict.com/",
  },

  {
    title: "SunClick USA",
    platform: "Business Website",
    link: "https://www.sunclickusa.com/",
  },

  {
    title: "Tanweer US",
    platform: "Business Website",
    link: "https://tanweerus.com/",
  },

  {
    title: "Freedmens Financial",
    platform: "Business Website",
    link: "https://freedmensfinancial.com/",
  },

  {
    title: "Elysium Grill",
    platform: "Business Website",
    link: "https://elysiumgrill.com/",
  },

  {
    title: "Curated Quarters",
    platform: "Business Website",
    link: "https://curatedquarters.com/",
  },

  {
    title: "Ideal Land",
    platform: "Business Website",
    link: "https://idealland.com.sg/",
  },

  {
    title: "Adele Hey Art",
    platform: "Business Website",
    link: "https://adeleheyart.com/",
  },

  {
    title: "Celias Reserve",
    platform: "Business Website",
    link: "https://www.celiasreserve.com/home-new",
  },

  {
    title: "Nested Home Watch",
    platform: "Business Website",
    link: "https://www.nestedhomewatch.com/",
  },

  {
    title: "Datanova",
    platform: "Business Website",
    link: "https://datanova.se/",
  },

  {
    title: "FlexFume",
    platform: "Business Website",
    link: "https://flexfume.com",
  },

  /* Kajabi */

  {
    title: "Yannick Magee",
    platform: "Kajabi",
    link: "https://yannick-magee.mykajabi.com/",
  },

  {
    title: "Carol Scott McHale",
    platform: "Kajabi",
    link:
      "https://carol-scott-mchale-scott-mchale.mykajabi.com/",
  },

  {
    title: "Relationship Clarity",
    platform: "Kajabi",
    link:
      "https://calliesorensen.mykajabi.com/relationshipclarity",
  },

  /* Shopify */

  {
    title: "LOVF Store",
    platform: "Shopify",
    link: "https://lovf-2.myshopify.com/",
  },

  /* Webflow */

  {
    title: "Kimonix",
    platform: "Webflow",
    link: "https://kimonix-staging.webflow.io/",
  },

  {
    title: "Sarah",
    platform: "Webflow",
    link: "https://sarah-a5b331.webflow.io/",
  },

  {
    title: "Taylor's Hostel",
    platform: "Webflow",
    link: "https://taylorshostel.webflow.io/",
  },

  {
    title: "Solid Seven",
    platform: "Webflow",
    link: "https://solid-seven.webflow.io/",
  },

  /* More Squarespace */

  {
    title: "Violet Crimson",
    platform: "Squarespace",
    link: "https://violet-crimson-ye9m.squarespace.com/",
  },

  {
    title: "Dog Oval",
    platform: "Squarespace",
    link:
      "https://dog-oval-nfrl.squarespace.com/?password=121",
  },

  /* Other */

  {
    title: "Atalaia Gold",
    platform: "Website",
    link: "https://atalaiagold.com/",
  },

  {
    title: "Afrocentric AI",
    platform: "Website",
    link: "https://afrocentric.ai/",
  },

  {
    title: "Hair Fairy Extensions",
    platform: "Website",
    link: "https://www.hairfairyextensions.com/",
  },

  {
    title: "Neha Within",
    platform: "Website",
    link: "https://www.nehawithin.com/",
  },

  {
    title: "We Are One Clan",
    platform: "Website",
    link: "https://www.weareoneclan.com/",
  },
];


/* =====================================================
   PLATFORM ICON
===================================================== */

const getPlatformIcon = (platform) => {
  const name = platform.toLowerCase();

  if (name.includes("wordpress")) {
    return <FaWordpress />;
  }

  if (name.includes("shopify")) {
    return <FaShopify />;
  }

  if (name.includes("wix")) {
    return <SiWix />;
  }

  if (name.includes("squarespace")) {
    return <SiSquarespace />;
  }

  if (name.includes("webflow")) {
    return <SiWebflow />;
  }

  if (name.includes("kajabi")) {
    return <FaGraduationCap />;
  }

  if (
    name.includes("next") ||
    name.includes("react") ||
    name.includes("mern") ||
    name.includes("full stack")
  ) {
    return <FaCode />;
  }

  return <FaGlobe />;
};


/* =====================================================
   MOTION
===================================================== */

const smoothEase = [0.16, 1, 0.3, 1];


const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
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


/* =====================================================
   COMPONENT
===================================================== */

const Projects = () => {
  const sectionRef = useRef(null);

  const [activeTab, setActiveTab] =
    useState("development");

  const [devVisible, setDevVisible] =
    useState(6);

  const [cmsVisible, setCmsVisible] =
    useState(6);

  const [techVisible, setTechVisible] =
    useState(6);


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
     ACTIVE PROJECTS
  ===================================================== */

  let activeProjects = developmentProjects;

  let visibleCount = devVisible;


  if (activeTab === "cms") {
    activeProjects = cmsProjects;

    visibleCount = cmsVisible;
  }


  if (activeTab === "tech") {
    activeProjects = developmentProjects;

    visibleCount = techVisible;
  }


  const visibleProjects =
    activeProjects.slice(
      0,
      visibleCount
    );


  /* =====================================================
     LOAD MORE
  ===================================================== */

  const handleLoadMore = () => {
    if (activeTab === "development") {
      setDevVisible((prev) => prev + 6);
    }

    if (activeTab === "cms") {
      setCmsVisible((prev) => prev + 6);
    }

    if (activeTab === "tech") {
      setTechVisible((prev) => prev + 6);
    }
  };


  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >

      {/* =================================================
          SCROLL PROGRESS
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
          BACKGROUND GLOW 01
      ================================================= */}

      <motion.div
        animate={{
          x: [0, 30, 0],

          y: [0, -25, 0],

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
        className="pointer-events-none absolute -left-[250px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#00bf8f]/5 blur-[150px]"
      />


      {/* =================================================
          BACKGROUND GLOW 02
      ================================================= */}

      <motion.div
        animate={{
          x: [0, -30, 0],

          y: [0, 25, 0],

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
        className="pointer-events-none absolute -right-[250px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#1cd8d2]/5 blur-[150px]"
      />


      {/* =================================================
          CONTAINER
      ================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,

            y: 35,
          }}

          whileInView={{
            opacity: 1,

            y: 0,
          }}

          viewport={{
            once: true,

            amount: 0.2,
          }}

          transition={{
            duration: 0.75,

            ease:
              smoothEase,
          }}

          className="mb-12"
        >

          {/* MINI HEADING */}

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

              className="text-[13px] font-bold tracking-[0.2em] text-[#00bf8f]"
            >
              02.
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


            <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Selected Work
            </span>

          </div>


          {/* HEADER CONTENT */}

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div>

              <h2 className="text-[38px] font-bold tracking-[-1.5px] text-[var(--foreground)] sm:text-[48px] lg:text-[58px]">
                My{" "}

                <span className="text-[#00bf8f]">
                  Projects
                </span>
              </h2>


              <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px]">
                Explore my custom development projects,
                CMS websites, platforms, technologies and
                project-specific keywords.
              </p>

            </div>


            {/* =================================================
                TABS
            ================================================= */}

            <div className="flex w-full overflow-x-auto rounded-full border border-[var(--border)] bg-[var(--surface)] p-1.5 backdrop-blur-xl lg:w-auto">

              {/* DEVELOPMENT */}

              <button
                type="button"

                onClick={() =>
                  setActiveTab(
                    "development"
                  )
                }

                className={`relative flex-1 whitespace-nowrap rounded-full px-4 py-2.5 text-[12px] font-semibold sm:px-5 sm:text-[13px] lg:flex-none ${
                  activeTab ===
                  "development"
                    ? "text-[#04110d]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >

                {activeTab ===
                  "development" && (

                  <motion.span
                    layoutId="project-tab"

                    className="absolute inset-0 rounded-full bg-[#00bf8f]"

                    transition={{
                      type:
                        "spring",

                      stiffness:
                        350,

                      damping:
                        30,
                    }}
                  />

                )}


                <span className="relative z-10">
                  Development
                </span>

              </button>


              {/* CMS */}

              <button
                type="button"

                onClick={() =>
                  setActiveTab(
                    "cms"
                  )
                }

                className={`relative flex-1 whitespace-nowrap rounded-full px-4 py-2.5 text-[12px] font-semibold sm:px-5 sm:text-[13px] lg:flex-none ${
                  activeTab ===
                  "cms"
                    ? "text-[#04110d]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >

                {activeTab ===
                  "cms" && (

                  <motion.span
                    layoutId="project-tab"

                    className="absolute inset-0 rounded-full bg-[#00bf8f]"

                    transition={{
                      type:
                        "spring",

                      stiffness:
                        350,

                      damping:
                        30,
                    }}
                  />

                )}


                <span className="relative z-10">
                  CMS & Websites
                </span>

              </button>


              {/* TECH */}

              <button
                type="button"

                onClick={() =>
                  setActiveTab(
                    "tech"
                  )
                }

                className={`relative flex-1 whitespace-nowrap rounded-full px-4 py-2.5 text-[12px] font-semibold sm:px-5 sm:text-[13px] lg:flex-none ${
                  activeTab ===
                  "tech"
                    ? "text-[#04110d]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >

                {activeTab ===
                  "tech" && (

                  <motion.span
                    layoutId="project-tab"

                    className="absolute inset-0 rounded-full bg-[#00bf8f]"

                    transition={{
                      type:
                        "spring",

                      stiffness:
                        350,

                      damping:
                        30,
                    }}
                  />

                )}


                <span className="relative z-10">
                  Tech & Keywords
                </span>

              </button>

            </div>

          </div>

        </motion.div>


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeTab}

            variants={
              containerVariants
            }

            initial="hidden"

            animate="visible"

            exit={{
              opacity: 0,

              y: 15,
            }}

            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >

            {visibleProjects.map(
              (
                project,
                index
              ) => {

                /* =============================================
                   DEVELOPMENT
                ============================================= */

                if (
                  activeTab ===
                  "development"
                ) {

                  return (
                    <motion.a
                      key={`${project.title}-${index}`}

                      href={
                        project.link
                      }

                      target="_blank"

                      rel="noopener noreferrer"

                      variants={
                        cardVariants
                      }

                      whileHover={{
                        y: -9,

                        scale:
                          1.01,
                      }}

                      whileTap={{
                        scale:
                          0.98,
                      }}

                      className="group relative overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/40 hover:shadow-[0_20px_60px_rgba(0,191,143,0.08)]"
                    >

                      {/* IMAGE */}

                      <div className="relative h-[220px] overflow-hidden sm:h-[240px]">

                        <motion.img
                          src={
                            project.image
                          }

                          alt={
                            project.title
                          }

                          whileHover={{
                            scale:
                              1.07,
                          }}

                          transition={{
                            duration:
                              0.7,

                            ease:
                              smoothEase,
                          }}

                          className="h-full w-full object-cover"
                        />


                        <div className="absolute inset-0 bg-gradient-to-t from-[#070a0d]/80 via-[#070a0d]/10 to-transparent" />


                        {/* PLATFORM */}

                        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">

                          <span className="text-[#00bf8f]">
                            {getPlatformIcon(
                              project.platform
                            )}
                          </span>

                          {
                            project.platform
                          }

                        </div>


                        {/* ARROW */}

                        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#00bf8f] group-hover:text-[#04110d]">

                          <FiArrowUpRight />

                        </div>

                      </div>


                      {/* CONTENT */}

                      <div className="p-6">

                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#00bf8f]">
                          {
                            project.category
                          }
                        </span>


                        <h3 className="mt-2 text-[20px] font-bold tracking-[-0.4px] text-[var(--foreground)] transition-colors duration-300 group-hover:text-[#00bf8f]">
                          {
                            project.title
                          }
                        </h3>


                        <p className="mt-3 text-[14px] leading-6 text-[var(--muted)]">
                          {
                            project.description
                          }
                        </p>


                        {/* TECH PREVIEW */}

                        <div className="mt-5 flex flex-wrap gap-2">

                          {project.tech
                            .slice(
                              0,
                              3
                            )
                            .map(
                              (
                                tech
                              ) => (

                                <span
                                  key={
                                    tech
                                  }

                                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[10px] font-medium text-[var(--muted)]"
                                >
                                  {
                                    tech
                                  }
                                </span>

                              )
                            )}

                        </div>


                        <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">

                          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00bf8f]">
                            View Project
                          </span>


                          <FiArrowUpRight className="text-lg text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#00bf8f]" />

                        </div>

                      </div>

                    </motion.a>
                  );
                }


                /* =============================================
                   TECH & KEYWORDS
                ============================================= */

                if (
                  activeTab ===
                  "tech"
                ) {

                  return (
                    <motion.div
                      key={`${project.title}-tech`}

                      variants={
                        cardVariants
                      }

                      whileHover={{
                        y: -8,

                        scale:
                          1.01,
                      }}

                      className="group relative overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/40 hover:shadow-[0_20px_60px_rgba(0,191,143,0.07)]"
                    >

                      {/* TOP LINE */}

                      <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] transition-all duration-500 group-hover:w-full" />


                      {/* GLOW */}

                      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00bf8f]/0 blur-[60px] transition-all duration-500 group-hover:bg-[#00bf8f]/10" />


                      <div className="relative z-10">

                        {/* HEADER */}

                        <div className="flex items-start justify-between gap-5">

                          <motion.div
                            whileHover={{
                              rotate:
                                5,

                              scale:
                                1.08,
                            }}

                            className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-[23px] text-[#00bf8f]"
                          >
                            {getPlatformIcon(
                              project.platform
                            )}
                          </motion.div>


                          <motion.a
                            href={
                              project.link
                            }

                            target="_blank"

                            rel="noopener noreferrer"

                            whileHover={{
                              y: -3,

                              x: 3,
                            }}

                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[#00bf8f]/50 hover:bg-[#00bf8f] hover:text-[#04110d]"
                          >
                            <FiArrowUpRight />
                          </motion.a>

                        </div>


                        {/* CATEGORY */}

                        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#00bf8f]">
                          {
                            project.category
                          }
                        </p>


                        {/* TITLE */}

                        <h3 className="mt-2 text-[21px] font-bold tracking-[-0.4px] text-[var(--foreground)]">
                          {
                            project.title
                          }
                        </h3>


                        {/* PLATFORM */}

                        <p className="mt-2 text-[13px] text-[var(--muted)]">
                          {
                            project.platform
                          }
                        </p>


                        {/* TECH STACK */}

                        <div className="mt-6">

                          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--foreground)]">
                            Tech Stack
                          </p>


                          <div className="flex flex-wrap gap-2">

                            {project.tech.map(
                              (
                                tech
                              ) => (

                                <motion.span
                                  key={
                                    tech
                                  }

                                  whileHover={{
                                    y: -2,

                                    scale:
                                      1.03,
                                  }}

                                  className="rounded-lg border border-[#00bf8f]/20 bg-[#00bf8f]/10 px-3 py-2 text-[11px] font-semibold text-[#00bf8f]"
                                >
                                  {
                                    tech
                                  }
                                </motion.span>

                              )
                            )}

                          </div>

                        </div>


                        {/* KEYWORDS */}

                        <div className="mt-6 border-t border-[var(--border)] pt-5">

                          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--foreground)]">
                            Keywords
                          </p>


                          <div className="flex flex-wrap gap-2">

                            {project.keywords.map(
                              (
                                keyword
                              ) => (

                                <motion.span
                                  key={
                                    keyword
                                  }

                                  whileHover={{
                                    y: -2,

                                    scale:
                                      1.03,
                                  }}

                                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-medium text-[var(--muted)] hover:border-[#00bf8f]/35 hover:text-[#00bf8f]"
                                >
                                  #
                                  {
                                    keyword
                                  }
                                </motion.span>

                              )
                            )}

                          </div>

                        </div>


                        {/* VIEW */}

                        <div className="mt-6 border-t border-[var(--border)] pt-5">

                          <a
                            href={
                              project.link
                            }

                            target="_blank"

                            rel="noopener noreferrer"

                            className="group/link flex items-center justify-between text-xs font-semibold text-[#00bf8f]"
                          >

                            Live Project

                            <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />

                          </a>

                        </div>

                      </div>

                    </motion.div>
                  );
                }


                /* =============================================
                   CMS CARD
                ============================================= */

                return (
                  <motion.a
                    key={`${project.title}-${index}`}

                    href={
                      project.link
                    }

                    target="_blank"

                    rel="noopener noreferrer"

                    variants={
                      cardVariants
                    }

                    whileHover={{
                      y: -8,

                      scale:
                        1.01,
                    }}

                    whileTap={{
                      scale:
                        0.98,
                    }}

                    className="group relative overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#00bf8f]/40 hover:shadow-[0_20px_50px_rgba(0,191,143,0.07)]"
                  >

                    {/* GLOW */}

                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00bf8f]/0 blur-[60px] transition-all duration-500 group-hover:bg-[#00bf8f]/12" />


                    {/* TOP LINE */}

                    <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] transition-all duration-500 group-hover:w-full" />


                    <div className="relative z-10">

                      {/* HEADER */}

                      <div className="flex items-start justify-between gap-5">

                        <motion.div
                          whileHover={{
                            rotate:
                              5,

                            scale:
                              1.08,
                          }}

                          className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-[#00bf8f]/20 bg-[#00bf8f]/10 text-[23px] text-[#00bf8f]"
                        >
                          {getPlatformIcon(
                            project.platform
                          )}
                        </motion.div>


                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-300 group-hover:border-[#00bf8f]/40 group-hover:bg-[#00bf8f] group-hover:text-[#04110d]">

                          <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

                        </div>

                      </div>


                      {/* PLATFORM */}

                      <span className="mt-7 inline-flex rounded-full border border-[#00bf8f]/20 bg-[#00bf8f]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#00bf8f]">
                        {
                          project.platform
                        }
                      </span>


                      {/* TITLE */}

                      <h3 className="mt-4 text-[20px] font-bold tracking-[-0.4px] text-[var(--foreground)] transition-colors duration-300 group-hover:text-[#00bf8f]">
                        {
                          project.title
                        }
                      </h3>


                      {/* DOMAIN */}

                      <p className="mt-2 truncate text-[13px] text-[var(--muted)]">
                        {project.link
                          .replace(
                            /^https?:\/\//,
                            ""
                          )
                          .replace(
                            /\/$/,
                            ""
                          )}
                      </p>


                      {/* FOOTER */}

                      <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-4">

                        <span className="text-xs font-semibold text-[var(--muted)]">
                          Live Website
                        </span>


                        <span className="text-xs font-semibold text-[#00bf8f]">
                          Visit Site
                        </span>

                      </div>

                    </div>

                  </motion.a>
                );
              }
            )}

          </motion.div>

        </AnimatePresence>


        {/* =================================================
            LOAD MORE
        ================================================= */}

        {visibleCount <
          activeProjects.length && (

          <motion.div
            initial={{
              opacity: 0,

              y: 20,
            }}

            animate={{
              opacity: 1,

              y: 0,
            }}

            className="mt-10 flex justify-center"
          >

            <motion.button
              type="button"

              onClick={
                handleLoadMore
              }

              whileHover={{
                y: -4,

                scale:
                  1.02,
              }}

              whileTap={{
                scale:
                  0.96,
              }}

              className="group flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-3.5 text-[14px] font-semibold text-[var(--foreground)] backdrop-blur-xl hover:border-[#00bf8f]/50 hover:bg-[#00bf8f]/10 hover:text-[#00bf8f]"
            >

              Load More Projects


              <FiChevronDown className="text-lg transition-transform duration-300 group-hover:translate-y-1" />

            </motion.button>

          </motion.div>

        )}


        {/* =================================================
            COUNT
        ================================================= */}

        <motion.div
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
            duration: 0.6,
          }}

          className="mt-6 text-center text-xs text-[var(--muted)]"
        >

          Showing{" "}

          <span className="font-semibold text-[#00bf8f]">
            {Math.min(
              visibleCount,
              activeProjects.length
            )}
          </span>

          {" "}of{" "}

          <span className="font-semibold text-[var(--foreground)]">
            {
              activeProjects.length
            }
          </span>

          {" "}projects

        </motion.div>

      </div>

    </section>
  );
};


export default Projects;