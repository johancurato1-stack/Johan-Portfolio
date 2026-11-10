/*============================================================================
 //! FAQ DATA
============================================================================*/

export interface FAQItem {
  question: string;
  answer: string;
}

//============================================================================
//! FAQ ITEMS
//============================================================================

export const faqData: FAQItem[] = [
  {
    question: "What is BH Finder?",
    answer:
      "BH Finder is a boarding house discovery and management platform designed to simplify how students find accommodations and how landlords manage their properties. It provides a centralized platform where tenants can explore boarding houses, view room details, and connect with landlords.",
  },
  {
    question: "Who is BH Finder designed for?",
    answer:
      "BH Finder is primarily designed for two groups: students and individuals looking for boarding house accommodations, and landlords who want a more convenient way to manage their properties. Its initial target market focuses on students around Caraga State University.",
  },
  {
    question: "How does BH Finder simplify the boarding house search process?",
    answer:
      "Tenants can discover properties, apply search filters based on their preferences and budget, explore property and room details, save favorites, and send inquiries to landlords. These features help make the accommodation search process more organized and convenient.",
  },
  {
    question: "What technologies were used to build BH Finder?",
    answer:
      "The tenant and landlord applications are built using Flutter and Dart, while the administrative dashboard uses Flutter Web. Supabase powers the backend services, with PostgreSQL serving as the primary database. The application also follows a repository-based architecture with ViewModels to keep the presentation and data layers separated.",
  },
  {
    question: "How does BH Finder handle authentication and data security?",
    answer:
      "BH Finder uses Supabase Authentication for user authentication and PostgreSQL Row Level Security (RLS) policies to control access to data. These policies help ensure that users can only access information permitted by their roles and authorization rules.",
  },
  {
    question: "Is BH Finder currently available to the public?",
    answer:
      "BH Finder is currently being developed as a project with an initial focus on the Caraga State University community. Its development includes the tenant and landlord applications, as well as a dedicated administrative dashboard.",
  },
  {
    question: "What are the future plans for BH Finder?",
    answer:
      "Future plans include expanding the platform beyond its initial target market, improving existing features, refining the user experience, and introducing additional capabilities that can support more tenants and landlords as the platform grows.",
  },
];
