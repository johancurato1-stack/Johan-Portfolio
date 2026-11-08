/*============================================================================
 //! CHALLENGES AND SOLUTIONS DATA
============================================================================*/

export type ChallengesSolutionStatus = "completed" | "in-development";

export const challengesData = [
  {
    id: "architecture",
    challenge: {
      title: "Maintaining a clean and scalable architecture",
      description:
        "As BH Finder grew, managing UI components, application logic, and backend operations became increasingly complex. Directly mixing responsibilities would make the application harder to maintain and extend.",
      icon: "layers",
    },
    solution: {
      title: "Repository pattern implementation",
      description:
        "Implemented the Repository Pattern with ViewModels to separate presentation, business logic, and data operations. Introduced repository interfaces with Mock and Supabase implementations, allowing backend operations to change without modifying the UI.",
      icon: "check",
    },
    status: "completed",
  },
  {
    id: "data-security",
    challenge: {
      title: "Securing data across multiple user roles",
      description:
        "BH Finder supports tenants, landlords, and administrators, each with different permissions. Users must only be able to access and manage data they're authorized to interact with.",
      icon: "shield",
    },
    solution: {
      title: "Row Level Security (RLS) implementation",
      description:
        "Implemented Supabase Row Level Security (RLS), role-based access policies, and reusable PostgreSQL helper functions such as is_admin(), is_property_owner(), and is_room_owner() to enforce access restrictions.",
      icon: "check",
    },
    status: "completed",
  },
  {
    id: "relational-data",
    challenge: {
      title: "Managing relational property and room data",
      description:
        "A property can contain multiple rooms and images, while tenants, landlords, and administrators interact with different parts of the same data. Maintaining these relationships consistently requires careful database design.",
      icon: "database",
    },
    solution: {
      title: "Relational PostgreSQL schema",
      description:
        "Designed a relational PostgreSQL schema with separate tables for properties, rooms, property images, room images, profiles, and other application entities. Used foreign keys, constraints, and structured repositories to organize data operations.",
      icon: "check",
    },
    status: "completed",
  },
  {
    id: "messaging",
    challenge: {
      title: "Building a unified messaging and inquiry system",
      description:
        "Creating communication between tenants and landlords introduced complex requirements, including pending conversations, access permissions, inquiry handling, and conversation states.",
      icon: "message",
    },
    solution: {
      title: "Shared chat architecture implementation",
      description:
        "Developed a shared chat architecture with dedicated Chat and Inquiry repositories. Introduced access states, pending-user tracking, acceptance and blocking operations, cooldown handling, and inquiry snapshots to preserve the original room and property details. (In Development)",
      icon: "check",
    },
    status: "in-development",
  },
  {
    id: "multi-application",
    challenge: {
      title: "Supporting multiple applications with a consistent backend",
      description:
        "BH Finder consists of separate Tenant, Landlord, and Admin applications. Each has different workflows, but they need to work with consistent data and business rules.",
      icon: "box",
    },
    solution: {
      title: "Application by user role separation",
      description:
        "Separated the Tenant, Landlord, and Admin applications according to their respective user roles while maintaining consistent architectural conventions. The Tenant and Landlord apps use a shared Supabase backend, while the Admin Panel currently uses mock repositories and ViewModels as its frontend development foundation.",
      icon: "check",
    },
    status: "completed",
  },
] as const satisfies {
  id: string;
  challenge: {
    title: string;
    description: string;
    icon: string;
  };
  solution: {
    title: string;
    description: string;
    icon: string;
  };
  status: ChallengesSolutionStatus;
}[];
