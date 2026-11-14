export type Perspective = {
  icon: "growth" | "people" | "balance" | "discipline" | "purpose";
  title: string;
  description: string;
};

export const perspectiveData: Perspective[] = [
  {
    icon: "growth",
    title: "Growth",
    description: "Always aim to be a better version of myself.",
  },
  {
    icon: "people",
    title: "People",
    description:
      "Value and take care of the people who stay, support, and grow with me.",
  },
  {
    icon: "balance",
    title: "Balance",
    description: "Make time for productivity, health, relationships, and rest.",
  },
  {
    icon: "discipline",
    title: "Discipline",
    description: "Consistency in small actions leads to meaningful progress.",
  },
  {
    icon: "purpose",
    title: "Purpose",
    description:
      "Do meaningful work, create a positive impact, and build a life I'm proud of.",
  },
];
