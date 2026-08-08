"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    let animationFrame;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Main dot follows instantly
      dot.style.transform = `translate3d(
        ${mouseX - 4}px,
        ${mouseY - 4}px,
        0
      )`;
    };

    const animateRing = () => {
      // Smooth trailing effect
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;

      ring.style.transform = `translate3d(
        ${ringX - 18}px,
        ${ringY - 18}px,
        0
      )`;

      animationFrame = requestAnimationFrame(animateRing);
    };

    const handleMouseOver = (e) => {
      const interactive = e.target.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor-hover]"
      );

      if (interactive) {
        ring.classList.add("custom-cursor-hover");
        dot.classList.add("custom-cursor-dot-hover");
      }
    };

    const handleMouseOut = (e) => {
      const interactive = e.target.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor-hover]"
      );

      if (interactive) {
        ring.classList.remove("custom-cursor-hover");
        dot.classList.remove("custom-cursor-dot-hover");
      }
    };

    const handleMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    animateRing();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Small center dot */}
      <div
        ref={dotRef}
        className="
          custom-cursor-dot
          pointer-events-none
          fixed left-0 top-0
          z-[99999]
          hidden
          h-2 w-2
          rounded-full
          bg-[#00bf8f]
          md:block
        "
      />

      {/* Outer circle */}
      <div
        ref={ringRef}
        className="
          custom-cursor-ring
          pointer-events-none
          fixed left-0 top-0
          z-[99998]
          hidden
          h-9 w-9
          rounded-full
          border border-[#00bf8f]/60
          bg-[#00bf8f]/[0.04]
          md:block
        "
      />
    </>
  );
}