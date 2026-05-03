/**
 * Skills Data
 * Organized by category with image icons.
 * Edit to add or modify your skill set.
 */

import frontendIcon from "@/images/frontend.png";
import backendIcon from "@/images/backend.png";
import aiMlIcon from "@/images/AI-ML.png";
import databaseIcon from "@/images/database.png";
import toolsIcon from "@/images/tool.png";

const skills = [
  {
    category: "Frontend",
    image: frontendIcon,
    items: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    image: backendIcon,
    items: ["Node.js", "Express", "FastAPI", "Python", "REST APIs"],
  },
  {
    category: "AI / Machine Learning",
    image: aiMlIcon,
    items: ["TensorFlow", "Deep Learning", "Computer Vision"],
  },
  {
    category: "Database",
    image: databaseIcon,
    items: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools & Technologies",
    image: toolsIcon,
    items: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
  },
];

export default skills;
