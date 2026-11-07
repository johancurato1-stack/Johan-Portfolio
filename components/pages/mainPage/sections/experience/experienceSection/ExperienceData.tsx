/*============================================================================
 //! EXPERIENCE DATA
============================================================================*/

export interface Experience {
  id: number;
  period: string;
  title: string;
  role: string;
  description: string;
  icon: "code" | "mobile" | "graduation";
}

//============================================================================
//! EXPERIENCE ENTRIES
//============================================================================

export const experienceData: Experience[] = [
  {
    id: 1,
    period: "2024 - Present",
    title: "Independent Developer",
    role: "Self-Learning",
    description:
      "Continuously learning modern technologies through personal projects, experimentation, and hands-on development.",
    icon: "code",
  },
  {
    id: 2,
    period: "2026 - Present",
    title: "BH Finder",
    role: "Full-Stack Developer",
    description:
      "Designed and developed a boarding-house finder application with mobile and web platforms, integrating Supabase for backend services.",
    icon: "mobile",
  },
  {
    id: 3,
    period: "2026 - Present",
    title: "BS Computer Science",
    role: "Caraga State University",
    description:
      "Currently pursuing a BSCS degree while actively building projects and expanding my knowledge in software development.",
    icon: "graduation",
  },
  {
    id: 4,
    period: "2026 - Present",
    title: "BH Finder Admin Dashboard",
    role: "Flutter Web Developer",
    description:
      "Developed a web-based administration dashboard for managing users, properties, landlord verification, reports, and feedback.",
    icon: "mobile",
  },
  {
    id: 5,
    period: "2026 - Present",
    title: "Personal Portfolio",
    role: "Frontend Developer",
    description:
      "Designing and developing a personal portfolio using modern web technologies to showcase projects, skills, and development experience.",
    icon: "code",
  },
];

//============================================================================
//! EXPERIENCE STATISTICS
//============================================================================

export const experienceStatistics = [
  {
    value: "1+",
    label: "Major Projects",
  },
  {
    value: "3+",
    label: "Years of Learning",
  },
  {
    value: "5+",
    label: "Core Technologies",
  },
];
