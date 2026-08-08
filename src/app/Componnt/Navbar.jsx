"use client";

import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  /* =============================
     THEME
  ============================== */

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    const initialTheme = savedTheme || "dark";

    setTheme(initialTheme);

    document.documentElement.setAttribute(
      "data-theme",
      initialTheme
    );

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

    localStorage.setItem(
      "portfolio-theme",
      newTheme
    );
  };

  /* =============================
     SCROLL TO SECTION
  ============================== */

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setMenuOpen(false);
    }
  };

  /* =============================
     ACTIVE SECTION + NAV SCROLL
  ============================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) =>
          document.getElementById(item.id)
        )
        .filter(Boolean);

      sections.forEach((section) => {
        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <= 180 &&
          rect.bottom >= 180
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =============================
     NAVBAR
  ============================== */

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        transition-colors
        duration-300
        ease-in-out

        ${
          scrolled
            ? "border-b border-[var(--border)] bg-[var(--navbar-background)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }
      `}
    >
      <nav
        className="
          mx-auto
          flex
          h-[82px]
          max-w-[1440px]
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* ================= LOGO ================= */}

        <motion.button
          onClick={() =>
            scrollToSection("home")
          }
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center"
        >
          <span
            className="
              text-[22px]
              font-bold
              tracking-[-0.6px]
              text-[var(--foreground)]
              sm:text-[24px]
            "
          >
            Shazzed
            <span className="text-[#00bf8f]">
              Shuvo
            </span>
            <span className="text-[#00bf8f]">
              .
            </span>
          </span>
        </motion.button>

        {/* ================= DESKTOP ================= */}

        <div className="hidden items-center gap-2 lg:flex">
          {/* Navigation Links */}

          <div
            className="
              mr-3
              flex
              items-center
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface)]
              p-1.5
              backdrop-blur-md
            "
          >
            {navItems.map((item) => {
              const isActive =
                activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  className={`
                    relative
                    rounded-full
                    px-4
                    py-2
                    text-[14px]
                    font-medium
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "text-[#00bf8f]"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                    }
                  `}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-[#00bf8f]/10
                      "
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ================= THEME BUTTON ================= */}

          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{
              scale: 1.05,
              rotate: theme === "dark" ? 8 : -8,
            }}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle theme"
            title={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface)]
              text-[19px]
              text-[var(--foreground)]
              transition-all
              duration-300
              hover:border-[#00bf8f]/60
              hover:bg-[#00bf8f]/10
              hover:text-[#00bf8f]
            "
          >
            {mounted &&
              (theme === "dark" ? (
                <FiSun />
              ) : (
                <FiMoon />
              ))}
          </motion.button>

          {/* ================= RESUME ================= */}

          <motion.a
            href="/cv2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-[#00bf8f]
              px-5
              py-3
              text-[14px]
              font-semibold
              text-[#04110d]
              transition-all
              duration-300
              hover:bg-[#13d9a7]
              hover:shadow-[0_8px_30px_rgba(0,191,143,0.20)]
            "
          >
            My Resume

            <FiArrowUpRight
              className="
                text-[17px]
                transition-transform
                duration-300
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </motion.a>
        </div>

        {/* ================= MOBILE BUTTONS ================= */}

        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme Mobile */}

          <motion.button
            type="button"
            onClick={toggleTheme}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle theme"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface)]
              text-[20px]
              text-[var(--foreground)]
              transition-all
              hover:border-[#00bf8f]/50
              hover:text-[#00bf8f]
            "
          >
            {mounted &&
              (theme === "dark" ? (
                <FiSun />
              ) : (
                <FiMoon />
              ))}
          </motion.button>

          {/* Menu */}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface)]
              text-[22px]
              text-[var(--foreground)]
              transition-all
              duration-300
              hover:border-[#00bf8f]/50
              hover:bg-[#00bf8f]/10
              hover:text-[#00bf8f]
            "
          >
            {menuOpen ? (
              <FiX />
            ) : (
              <FiMenu />
            )}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              border-t
              border-[var(--border)]
              bg-[var(--navbar-background)]
              px-5
              pb-6
              pt-4
              backdrop-blur-2xl
              lg:hidden
            "
          >
            <div className="mx-auto max-w-[1440px]">
              {/* Mobile Links */}

              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive =
                    activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() =>
                        scrollToSection(item.id)
                      }
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3.5
                        text-left
                        text-[16px]
                        font-medium
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "bg-[#00bf8f]/10 text-[#00bf8f]"
                            : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                        }
                      `}
                    >
                      {item.label}

                      {isActive && (
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#00bf8f]
                          "
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Theme Info */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  px-4
                  py-3
                "
              >
                <div>
                  <p
                    className="
                      text-sm
                      font-medium
                      text-[var(--foreground)]
                    "
                  >
                    Appearance
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      text-[var(--muted)]
                    "
                  >
                    {theme === "dark"
                      ? "Night mode"
                      : "Day mode"}
                  </p>
                </div>

                <button
                  onClick={toggleTheme}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#00bf8f]/10
                    text-lg
                    text-[#00bf8f]
                  "
                >
                  {theme === "dark" ? (
                    <FiSun />
                  ) : (
                    <FiMoon />
                  )}
                </button>
              </div>

              {/* Resume Mobile */}

              <motion.a
                href="/cv2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#00bf8f]
                  px-5
                  py-3.5
                  text-[15px]
                  font-semibold
                  text-[#04110d]
                "
              >
                View My Resume

                <FiArrowUpRight className="text-lg" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}