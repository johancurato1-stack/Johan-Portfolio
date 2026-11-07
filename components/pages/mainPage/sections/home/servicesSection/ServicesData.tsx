//============================================================================
//! TYPES
//============================================================================

export type Service = {
  icon: "mobile" | "database" | "code";
  title: string;
  description: string;
  href: string;
};

//============================================================================
//! SERVICES DATA
//============================================================================

export const services: Service[] = [
  {
    icon: "mobile",
    title: "Mobile App Development",
    description:
      "Building practical mobile applications with clean interfaces and intuitive user experiences.",
    href: "/services/mobile-app-development",
  },
  {
    icon: "database",
    title: "Backend & Data",
    description:
      "Integrating applications with reliable databases, authentication systems, and backend services.",
    href: "/services/backend-and-data",
  },
  {
    icon: "code",
    title: "Web Development",
    description:
      "Building modern, responsive web applications with thoughtful layouts and maintainable code.",
    href: "/services/web-development",
  },
];
