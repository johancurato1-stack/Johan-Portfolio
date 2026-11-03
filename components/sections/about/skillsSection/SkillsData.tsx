//============================================================================
//! TYPES
//============================================================================

export type Skill = {
  icon: "mobile" | "database" | "code" | "tools" | "ai";
  title: string;
  description: string;
  technologies: string[];
};

//============================================================================
//! SKILLS DATA
//============================================================================

export const skills: Skill[] = [
  {
    icon: "mobile",
    title: "Mobile Development",
    description:
      "Building cross-platform mobile applications with clean and intuitive user interfaces.",
    technologies: ["Flutter", "Dart", "Provider"],
  },
  {
    icon: "database",
    title: "Backend & Data",
    description:
      "Integrating and managing application data with scalable and reliable solutions.",
    technologies: ["Supabase", "SQL", "PostgreSQL", "RLS"],
  },
  {
    icon: "code",
    title: "Web Development",
    description:
      "Building modern web applications and responsive user interfaces.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: "tools",
    title: "Tools & Others",
    description: "Tools that support my development workflow.",
    technologies: ["Git", "GitHub", "VS Code", "Figma"],
  },
  {
    icon: "ai",
    title: "AI & Productivity",
    description:
      "Leveraging AI-powered tools to support research, technical problem-solving, code exploration, and development workflows.",
    technologies: ["ChatGPT", "Claude"],
  },
];
