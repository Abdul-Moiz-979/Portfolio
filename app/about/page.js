import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import skills from "@/data/skills";

/**
 * About Page
 * Introduction, professional background, and categorized skill badges.
 */

// Page-specific SEO metadata
export const metadata = {
  title: "About",
  description:
    "Learn about Abdul Moiz — a Software Engineer and Full Stack Developer with expertise in React, Node.js, and AI/ML.",
};

export default function AboutPage() {
  return (
    <section id="about-page" className="py-16 sm:py-24 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="animate-fade-up-soft">
          <SectionHeading
            title="About Me"
            subtitle="A glimpse into who I am and what I do."
            id="about-heading"
          />
        </AnimateOnScroll>

        {/* ---- Introduction ---- */}
        <AnimateOnScroll animation="animate-slide-up" delay="delay-100">
          <div className="glass-card rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
              {/* Avatar placeholder — gradient circle with initials */}
              <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-accent-primary to-accent-cyan flex items-center justify-center text-white text-xl font-bold">
                AM
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Abdul Moiz
                </h3>
                <p className="text-accent-secondary text-sm">
                  Software Engineer &bull; Full Stack Developer
                </p>
              </div>
            </div>
            <div className="space-y-4 text-text-secondary leading-relaxed">
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
                FastAPI, and even training deep learning models with TensorFlow
                for real-world applications like crop disease detection.
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

        {/* ---- Skills Section ---- */}
        <AnimateOnScroll animation="animate-fade-in" delay="delay-200">
          <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8 text-center">
            Skills & Technologies
          </h3>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((category, index) => (
            <AnimateOnScroll
              key={category.category}
              animation="animate-slide-up"
              delay={`delay-${(index + 1) * 100}`}
            >
              <div className="glass-card rounded-2xl p-5 sm:p-6 h-full">
                {/* Category header with image icon */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={category.image}
                    alt={`${category.category} icon`}
                    width={32}
                    height={32}
                    className="shrink-0"
                  />
                  <h4 className="text-xl font-semibold text-text-primary">
                    {category.category}
                  </h4>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-bg-elevated text-text-secondary border border-border-default hover:border-accent-primary/30 hover:text-accent-secondary transition-all duration-200"
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
  );
}
