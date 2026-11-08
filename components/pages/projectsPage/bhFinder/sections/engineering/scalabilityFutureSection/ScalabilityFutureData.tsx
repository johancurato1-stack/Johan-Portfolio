/*============================================================================
 //! SCALABILITY AND FUTURE IMPROVEMENTS DATA
============================================================================*/

export type ScalabilityFutureIcon =
  | "performance"
  | "search"
  | "monitoring"
  | "location"
  | "message"
  | "expansion";

export const scalabilityFutureData = [
  {
    id: "performance",
    title: "Performance",
    description:
      "Optimize database queries, add indexes, and improve data retrieval.",
    icon: "performance",
  },
  {
    id: "search-discovery",
    title: "Search & Discovery",
    description: "Implement advanced filtering, sorting, and full-text search.",
    icon: "search",
  },
  {
    id: "monitoring",
    title: "Monitoring",
    description:
      "Add analytics and performance monitoring for system insights.",
    icon: "monitoring",
  },
  {
    id: "broader-coverage",
    title: "Broader Coverage",
    description: "Expand beyond CSU to support more schools and locations.",
    icon: "location",
  },
  {
    id: "messaging-system",
    title: "Messaging System",
    description:
      "Finalize and enhance the real-time chat and inquiry features.",
    icon: "message",
  },
  {
    id: "feature-expansion",
    title: "Feature Expansion",
    description: "Add notifications, reviews, and ratings in future versions.",
    icon: "expansion",
  },
] as const;
