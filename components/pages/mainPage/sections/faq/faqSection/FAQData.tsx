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
    question: "What technologies do you primarily work with?",
    answer:
      "I primarily work with Flutter and Dart for mobile development, Supabase and PostgreSQL for backend and database solutions, and Next.js, TypeScript, and Tailwind CSS for web development. I'm also continuously exploring new tools and technologies to expand my skill set.",
  },
  {
    question: "What types of projects do you build?",
    answer:
      "I focus on building practical digital solutions, including mobile applications, web applications, backend systems, and user-friendly interfaces. I enjoy working across different parts of a project, from designing the interface to implementing its underlying functionality.",
  },
  {
    question: "Are you available for freelance work or collaborations?",
    answer:
      "I'm open to learning opportunities, collaborations, and projects that allow me to grow as a developer. Feel free to reach out so we can discuss potential opportunities.",
  },
  {
    question: "How can someone contact you?",
    answer:
      "You can reach me through the Contact section of this portfolio or send me an email directly. I'll be happy to hear about your questions, ideas, or potential collaborations.",
  },
  {
    question: "Can I see the source code of your projects?",
    answer:
      "Yes! You can explore my public repositories through my GitHub profile. Some projects may have limited source-code availability depending on their development status or other considerations.",
  },
];
