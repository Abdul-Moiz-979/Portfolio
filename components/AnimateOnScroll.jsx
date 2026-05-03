"use client";

import { useEffect, useRef, useState } from "react";

/**
 * AnimateOnScroll Component
 * Wraps children and triggers animation when element enters the viewport.
 *
 * @param {string} animation - CSS animation class to apply (e.g. "animate-slide-up")
 * @param {string} delay - Animation delay class (e.g. "delay-200")
 * @param {number} threshold - IntersectionObserver threshold (0-1), default 0.1
 */
export default function AnimateOnScroll({
  children,
  animation = "animate-slide-up",
  delay = "",
  threshold = 0.1,
  className = "",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once visible, stay visible (don't re-animate on scroll back)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `${animation} ${delay}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
