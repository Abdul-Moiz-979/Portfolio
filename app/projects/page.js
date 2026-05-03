import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import projects from "@/data/projects";

/**
 * Projects Page
 * Displays all projects in a responsive card grid layout.
 */

// Page-specific SEO metadata
export const metadata = {
  title: "Projects",
  description:
    "Explore the projects built by Abdul Moiz — from AI-powered applications to full-stack web platforms.",
};

export default function ProjectsPage() {
  return (
    <section id="projects-page" className="py-16 sm:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="animate-fade-up-soft">
          <SectionHeading
            title="My Projects"
            subtitle="A selection of projects I've built, from AI-powered tools to full-stack web applications."
            id="projects-heading"
          />
        </AnimateOnScroll>

        {/* Projects Grid */}
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
  );
}
