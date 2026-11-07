/*============================================================================
 //! ARCHITECTURE DIAGRAM DATA
============================================================================*/

//============================================================================
//! CLIENT APPLICATIONS
//============================================================================

export const clientApplications = [
  {
    id: "tenant",
    name: "Tenant App",
    platform: "Flutter",
    description: "Student accommodation discovery",
    label: "For students",
    image:
      "/images/projectsPage/bhFinder/sections/architecture/AppArchSection/BH%20Finder%20Mobile%20App%20Mockup%20(Cropped%202).png",
  },
  {
    id: "landlord",
    name: "Landlord App",
    platform: "Flutter",
    description: "Property management",
    label: "For property owners",
    image:
      "/images/projectsPage/bhFinder/sections/architecture/AppArchSection/BH%20Finder%20Mobile%20App%20Mockup%20(Cropped%201).png",
  },
  {
    id: "admin",
    name: "Admin Dashboard",
    platform: "Flutter Web",
    description: "Platform administration",
    label: "For administrators",
    image:
      "/images/projectsPage/bhFinder/sections/architecture/AppArchSection/BH%20Finder%20Dashboard%20Laptop%20Mockup%20(Cropped).png",
  },
] as const;

//============================================================================
//! PRESENTATION LAYER
//============================================================================

export const presentationComponents = [
  {
    id: "ui",
    title: "UI Screens",
    description: "Screens, widgets, and user interface",
    icon: "window",
  },
  {
    id: "viewmodel",
    title: "ViewModel",
    description: "Manages state and coordinates UI logic",
    icon: "layers",
  },
] as const;

//============================================================================
//! APPLICATION LAYER
//============================================================================

export const applicationComponents = [
  {
    id: "use-cases",
    title: "Use Cases",
    description: "Feature-specific application logic",
    icon: "settings",
  },
  {
    id: "business-rules",
    title: "Business Rules",
    description: "Validation, policies, and workflows",
    icon: "workflow",
  },
] as const;

//============================================================================
//! DATA LAYER
//============================================================================

export const dataRepositories = [
  "AuthRepository",
  "PropertyRepository",
  "RoomRepository",
  "StorageRepository",
  "ProfileRepository",
] as const;

//============================================================================
//! BACKEND SERVICES
//============================================================================

export const backendServices = [
  "Authentication",
  "PostgreSQL Database",
  "File Storage (Image, Files)",
  "Realtime (Chat & Updates)",
  "Row Level Security (RLS)",
] as const;
