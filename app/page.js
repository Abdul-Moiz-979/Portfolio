"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Button from "@/components/Button";
import projects from "@/data/projects";
import skills from "@/data/skills";

/**
 * Home Page — Single-page portfolio
 * All sections (Hero, Projects, About, Contact) are combined into
 * one scrollable page. Navbar links scroll to each section via anchor IDs.
 */
export default function HomePage() {
  // ─── Contact Form State ───
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles =
    "w-full px-4 py-3 [@media(max-height:700px)]:py-2 rounded-xl bg-bg-elevated border border-border-default text-text-primary placeholder-text-muted text-base focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all duration-300";

  return (
    <>
      {/* ================================================================
          SECTION 1 — HERO
          ================================================================ */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-4rem)] [@media(max-height:700px)]:min-h-[500px] flex items-center justify-center overflow-hidden px-0"
      >
        {/* Decorative Background Gradient Orbs */}
        <div className="gradient-orb w-[500px] h-[500px] bg-accent-primary/20 top-[-10%] left-[-10%] animate-pulse-glow" />
        <div className="gradient-orb w-[400px] h-[400px] bg-accent-cyan/15 bottom-[-5%] right-[-5%] animate-pulse-glow delay-300" />
        <div className="gradient-orb w-[300px] h-[300px] bg-accent-blue/10 top-[40%] right-[20%] animate-float" />

        {/* ── Profile Photo (top-right on sm+; inline on mobile) ── */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10 animate-scale-in group hidden sm:block">
          <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-accent-primary/50 shadow-lg shadow-accent-glow transition-all duration-500 hover:scale-105 hover:border-accent-cyan hover:shadow-cyan-500/25 [@media(max-height:700px)]:w-40 [@media(max-height:700px)]:h-40">
            <Image
              src="/images/Me.jpeg"
              alt="Abdul Moiz — Software Engineer"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center md:pr-48 lg:pr-64 xl:pr-0">
          <div className="sm:hidden mb-6 flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent-primary/50 shadow-lg shadow-accent-glow">
              <Image
                src="/images/Me.jpeg"
                alt="Abdul Moiz — Software Engineer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Name with Robust Animation */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl [@media(max-height:700px)]:text-5xl font-bold tracking-tight mb-4 leading-tight">
            <span className="inline-block animate-slide-right mr-2 sm:mr-3">
              Hi, I&apos;m
            </span>
            <span className="inline-block gradient-text animate-gradient animate-fade-up-soft delay-300">
              Abdul Moiz
            </span>
          </h1>

          {/* Title & Role with Typing Animation */}
          <div className="flex justify-center mb-2">
            <p className="animate-typing text-xl sm:text-2xl md:text-3xl [@media(max-height:700px)]:text-xl text-text-secondary font-light">
              Software Engineer
            </p>
          </div>
          <p className="animate-slide-up delay-500 text-lg sm:text-xl [@media(max-height:700px)]:text-base text-text-muted mb-8 [@media(max-height:700px)]:mb-4">
            Full Stack Developer
          </p>

          {/* Professional summary */}
          <p className="animate-slide-up delay-700 text-text-secondary text-base sm:text-lg [@media(max-height:700px)]:text-sm leading-relaxed max-w-xl mx-auto mb-10 [@media(max-height:700px)]:mb-6">
            I build modern, performant web applications and AI-powered
            solutions. Passionate about clean code, beautiful interfaces, and
            solving real-world problems through technology.
          </p>

          {/* CTA Buttons — scroll to sections */}
          <div className="animate-slide-up delay-700 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              id="cta-view-projects"
              className="[@media(max-height:700px)]:py-3 [@media(max-height:700px)]:px-6 [@media(max-height:700px)]:text-sm"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              View Projects
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="lg"
              id="cta-contact-me"
              className="[@media(max-height:700px)]:py-3 [@media(max-height:700px)]:px-6 [@media(max-height:700px)]:text-sm"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block [@media(max-height:700px)]:hidden">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-primary transition-colors duration-300"
          >
            <span className="text-xs uppercase tracking-widest font-medium">
              Scroll
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </a>
        </div>
      </section>

      {/* ================================================================
          SECTION 2 — PROJECTS
          ================================================================ */}
      <section id="projects" className="py-16 sm:py-24 lg:py-28 [@media(max-height:700px)]:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="animate-fade-up-soft">
            <SectionHeading
              title="My Projects"
              subtitle="A selection of projects I've built, from AI-powered tools to full-stack web applications."
              id="projects-heading"
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimateOnScroll
                key={project.id}
                animation="animate-fade-up-soft"
                delay={`delay-${(index % 3) * 100 + 100}`}
              >
                <ProjectCard project={project} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3 — ABOUT
          ================================================================ */}
      <section id="about" className="py-16 sm:py-24 lg:py-28 [@media(max-height:700px)]:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="animate-fade-up-soft">
            <SectionHeading
              title="About Me"
              subtitle="A glimpse into who I am and what I do."
              id="about-heading"
              className="[@media(max-height:700px)]:mb-8"
            />
          </AnimateOnScroll>

          {/* Introduction Card */}
          <AnimateOnScroll animation="animate-slide-up" delay="delay-100">
            <div className="glass-card rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 [@media(max-height:700px)]:mb-6 [@media(max-height:700px)]:p-5">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6 [@media(max-height:700px)]:mb-4">
                {/* Avatar with real photo */}
                <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-accent-primary/40 [@media(max-height:700px)]:w-16 [@media(max-height:700px)]:h-16">
                  <Image
                    src="/images/Me.jpeg"
                    alt="Abdul Moiz"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-text-primary [@media(max-height:700px)]:text-lg">
                    Abdul Moiz
                  </h3>
                  <p className="text-accent-secondary text-base [@media(max-height:700px)]:text-xs">
                    Software Engineer &bull; Full Stack Developer
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-text-secondary leading-relaxed [@media(max-height:700px)]:space-y-2 [@media(max-height:700px)]:text-xs">
                <p>
                  I&apos;m a passionate Software Engineer who loves building
                  things that live on the internet. With a strong foundation in
                  both frontend and backend technologies, I create seamless,
                  performant, and visually stunning web applications.
                </p>
                <p>
                  My journey in software development has led me to work with a
                  diverse set of technologies — from crafting beautiful UIs with
                  React and Next.js to building robust backends with Node.js and
                  FastAPI, and even training deep learning models with
                  TensorFlow for real-world applications like crop disease
                  detection.
                </p>
                <p>
                  I believe in writing clean, maintainable code and continuously
                  learning to stay at the cutting edge of technology. When
                  I&apos;m not coding, you&apos;ll find me exploring new
                  frameworks, contributing to open source, or diving into AI
                  research.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Skills */}
          <AnimateOnScroll animation="animate-fade-in" delay="delay-200">
            <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8 text-center [@media(max-height:700px)]:text-2xl [@media(max-height:700px)]:mb-6">
              Skills &amp; Technologies
            </h3>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skills.map((category, index) => (
              <AnimateOnScroll
                key={category.category}
                animation="animate-slide-up"
                delay={`delay-${(index + 1) * 100}`}
              >
                <div className="glass-card rounded-2xl p-5 sm:p-6 h-full [@media(max-height:700px)]:p-4">
                  <div className="flex items-center gap-3 mb-4 [@media(max-height:700px)]:mb-2">
                    <Image
                      src={category.image}
                      alt={`${category.category} icon`}
                      width={32}
                      height={32}
                      className="shrink-0 [@media(max-height:700px)]:w-6 [@media(max-height:700px)]:h-6"
                    />
                    <h4 className="text-xl font-semibold text-text-primary [@media(max-height:700px)]:text-lg">
                      {category.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-bg-elevated text-text-secondary border border-border-default hover:border-accent-primary/50 hover:text-accent-secondary hover:shadow-[0_0_10px_rgba(124,58,237,0.2)] hover:-translate-y-0.5 transition-all duration-300 [@media(max-height:700px)]:text-xs [@media(max-height:700px)]:px-2 [@media(max-height:700px)]:py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4 — CONTACT
          ================================================================ */}
      <section id="contact" className="py-16 sm:py-24 lg:py-28 [@media(max-height:700px)]:py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="animate-fade-up-soft">
            <SectionHeading
              title="Get In Touch"
              subtitle="Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible."
              id="contact-heading"
              className="[@media(max-height:700px)]:mb-8"
            />
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-up" delay="delay-200">
            <form
              onSubmit={handleSubmit}
              id="contact-form"
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 [@media(max-height:700px)]:p-5 [@media(max-height:700px)]:space-y-3"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-text-secondary mb-2 [@media(max-height:700px)]:mb-1 [@media(max-height:700px)]:text-xs"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputStyles}
                  suppressHydrationWarning
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-text-secondary mb-2 [@media(max-height:700px)]:mb-1 [@media(max-height:700px)]:text-xs"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={inputStyles}
                  suppressHydrationWarning
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-text-secondary mb-2 [@media(max-height:700px)]:mb-1 [@media(max-height:700px)]:text-xs"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                  className={`${inputStyles} resize-none [@media(max-height:700px)]:h-32`}
                  suppressHydrationWarning
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                id="contact-submit"
                className="w-full [@media(max-height:700px)]:py-3"
                disabled={isSubmitting}
                suppressHydrationWarning
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" className="opacity-25" />
                      <path
                        d="M4 12a8 8 0 018-8"
                        className="opacity-75"
                        strokeLinecap="round"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </>
                )}
              </Button>

              {/* Status messages */}
              {status === "success" && (
                <div
                  id="contact-success"
                  className="animate-slide-up flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div
                  id="contact-error"
                  className="animate-slide-up flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
