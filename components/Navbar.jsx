"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/**
 * Navbar Component
 * Sticky navigation with glass effect, smooth-scroll anchor links,
 * active section highlighting based on scroll position,
 * and animated mobile hamburger menu.
 */

// Navigation links — anchor IDs matching section IDs on the single page
const navLinks = [
  { name: "Home", path: "#home" },
  { name: "Projects", path: "#projects" },
  { name: "About", path: "#about" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Track scroll position for shadow effect & active section highlighting
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    // Determine which section is currently in view
    const sections = navLinks.map((link) => link.path.replace("#", ""));
    let current = "home";

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Section is considered active when its top is within 150px of viewport top
        if (rect.top <= 150) {
          current = sectionId;
        }
      }
    }
    setActiveSection(`#${current}`);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle smooth scroll to section & close mobile menu
  const scrollToSection = (e, path) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = path.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 64; // 4rem navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-primary/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-border-default"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name — scrolls to top */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            id="navbar-logo"
            className="text-xl font-bold tracking-tight gradient-text hover:opacity-80 transition-opacity cursor-pointer"
          >
            Abdul Moiz
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`relative px-4 py-2 rounded-lg text-lg font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === link.path
                    ? "text-accent-primary bg-accent-primary/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                }`}
              >
                {link.name}
                {/* Active indicator dot */}
                {activeSection === link.path && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-primary" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu-panel"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-bg-primary/95 backdrop-blur-xl border-t border-border-default">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => scrollToSection(e, link.path)}
              id={`mobile-nav-link-${link.name.toLowerCase()}`}
              className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 cursor-pointer ${
                activeSection === link.path
                  ? "text-accent-primary bg-accent-primary/10"
                  : "text-text-secondary hover:text-text-primary hover:bg-white/5"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
