/*============================================================================
 //! TYPES
============================================================================*/

export type Beyond = {
  icon: "music" | "fitness" | "gaming" | "learning" | "writing";
  title: string;
  description: string;
};

//============================================================================
//! BEYOND DATA
//============================================================================

export const beyondData: Beyond[] = [
  {
    icon: "music",
    title: "Music",
    description:
      "A creative outlet where I express myself, unwind, and feel alive.",
  },
  {
    icon: "fitness",
    title: "Fitness",
    description: "Helps me stay disciplined, healthy, and mentally strong.",
  },
  {
    icon: "gaming",
    title: "Gaming",
    description: "A way to relax, recharge, and enjoy great stories.",
  },
  {
    icon: "learning",
    title: "Learning",
    description:
      "I'm always curious, exploring new skills, ideas, and perspectives.",
  },
  {
    icon: "writing",
    title: "Writing",
    description: "A way to express my thoughts and find comfort in writing.",
  },
];
