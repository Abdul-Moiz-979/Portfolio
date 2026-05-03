"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Button from "@/components/Button";

/**
 * Contact Page
 * Contact form with client-side validation and submission.
 * Sends email via the /api/contact route (or EmailJS).
 */

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
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

  // Shared input styles
  const inputStyles =
    "w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-default text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all duration-300";

  return (
    <section id="contact-page" className="py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="animate-fade-up-soft">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible."
            id="contact-heading"
          />
        </AnimateOnScroll>

        {/* Contact Form */}
        <AnimateOnScroll animation="animate-slide-up" delay="delay-200">
          <form
            onSubmit={handleSubmit}
            id="contact-form"
            className="glass-card rounded-2xl p-6 sm:p-8 space-y-6"
          >
            {/* Name field */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-text-secondary mb-2"
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
              />
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-text-secondary mb-2"
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
              />
            </div>

            {/* Message field */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-text-secondary mb-2"
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
                className={`${inputStyles} resize-none`}
              />
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              id="contact-submit"
              className="w-full"
              disabled={isSubmitting}
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
  );
}
