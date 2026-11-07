//============================================================================
//! PRODUCT EXPERIENCE DATA
//============================================================================

export const productExpData = [
  {
    id: "tenant",
    tabLabel: "Tenant App",
    title: "Tenant Application",
    description:
      "Discover boarding houses, explore available rooms, and connect with landlords through a centralized platform designed to make finding suitable student accommodation easier.",
    features: [
      "Search and filter available properties",
      "Explore detailed property and room information",
      "Save favorite boarding houses for later",
      "Send rental inquiries to landlords",
      "Manage personal profiles and preferences",
    ],
    mockups: {
      main: "/images/projectsPage/bhFinder/sections/product/productexpSection/BH%20Finder%20Mobile%20App%20Mockup%204.png",
      secondary:
        "/images/projectsPage/bhFinder/sections/product/productexpSection/BH%20Finder%20Mobile%20App%20Mockup%205.png",
    },
  },
  {
    id: "landlord",
    tabLabel: "Landlord App",
    title: "Landlord Application",
    description:
      "Manage boarding house properties, organize room listings, and handle rental inquiries through a dedicated platform designed to simplify property management for landlords.",
    features: [
      "View the property management dashboard",
      "Create and manage property listings",
      "Add, update, and manage room information",
      "Monitor room availability and property status",
      "Manage tenant inquiries and conversations",
    ],
    mockups: {
      main: "/images/projectsPage/bhFinder/sections/product/productexpSection/BH%20Finder%20Mobile%20App%20Mockup%206.png",
      secondary:
        "/images/projectsPage/bhFinder/sections/product/productexpSection/BH%20Finder%20Mobile%20App%20Mockup%207.png",
    },
  },
  {
    id: "admin",
    tabLabel: "Admin Dashboard",
    title: "Administrative Dashboard",
    description:
      "Oversee the BH Finder platform through a centralized administrative dashboard, providing tools to manage users, review property listings, process verification requests, and monitor platform activity.",
    features: [
      "Monitor platform activity through the dashboard",
      "Manage tenant and user accounts",
      "Review and manage property listings",
      "Manage landlord accounts and verification requests",
      "Handle reports and user feedback",
    ],
    mockups: {
      main: "/images/mainPage/sections/home/featuredSection/BH%20Finder%20Dashboard%20Laptop%20Mockup.png",
    },
  },
] as const;

export type ProductExpId = (typeof productExpData)[number]["id"];
