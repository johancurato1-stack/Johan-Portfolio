/*============================================================================
 //! PROJECT DATA
============================================================================*/

//============================================================================
//! PROJECT TYPES
//============================================================================

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: (
    "Mobile" | "Web" | "Full-stack" | "Backend" | "UI/UX" | "Other"
  )[];
  technologies: string[];
  href: string;
  featured?: boolean;
}

//============================================================================
//! PROJECT ENTRIES
//============================================================================

export const projectData: Project[] = [
  {
    id: 1,
    title: "BH Finder",
    description:
      "A boarding-house finder application designed to help students discover and explore available accommodations.",
    image: "/images/projects/projectsSection/BH Finder Preview.png",
    categories: ["Mobile", "Web", "Full-stack", "Backend"],
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    href: "/projects/bh-finder",
    featured: true,
  },
];
