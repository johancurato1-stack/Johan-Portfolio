export type LookingAhead = {
  icon: "build" | "grow" | "give-back";
  title: string;
  description: string;
};

export const lookingAheadData: LookingAhead[] = [
  {
    icon: "build",
    title: "Build",
    description: "Create meaningful products that solve real problems.",
  },
  {
    icon: "grow",
    title: "Grow",
    description: "Keep improving my skills, mindset, and overall discipline.",
  },
  {
    icon: "give-back",
    title: "Give Back",
    description:
      "Use what I build and learn to create opportunities for others.",
  },
];
