/*============================================================================
 //! IMPORTS
============================================================================*/

import TechPill from "@/components/ui/TechPill";

//============================================================================
//! SKILLS DATA
//============================================================================

const skills = [
  {
    icon: "mobile",
    title: "Mobile Development",
    description:
      "Building cross-platform mobile applications with clean and intuitive user interfaces.",
    technologies: ["Flutter", "Dart", "Provider"],
  },
  {
    icon: "database",
    title: "Backend & Data",
    description:
      "Integrating and managing application data with scalable and reliable solutions.",
    technologies: ["Supabase", "SQL", "PostgreSQL", "RLS"],
  },
  {
    icon: "code",
    title: "Web Development",
    description:
      "Building modern web applications and responsive user interfaces.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: "tools",
    title: "Tools & Others",
    description: "Tools that support my development workflow.",
    technologies: ["Git", "GitHub", "VS Code", "Figma"],
  },
  {
    icon: "ai",
    title: "AI & Productivity",
    description:
      "Leveraging AI-powered tools to support research, technical problem-solving, code exploration, and development workflows.",
    technologies: ["ChatGPT", "Claude"],
  },
];

//============================================================================
//! SKILL ICON
//============================================================================

function SkillIcon({ type }: { type: string }) {
  const iconProps = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  return (
    <svg {...iconProps}>
      {type === "mobile" && (
        <>
          <rect x="6.5" y="2.5" width="11" height="19" rx="1" />
          <path d="M10 18.5h4" />
        </>
      )}

      {type === "database" && (
        <>
          <rect x="3" y="3" width="18" height="5" rx="1" fill="currentColor" />
          <rect x="3" y="10" width="18" height="5" rx="1" fill="currentColor" />
          <rect x="3" y="17" width="18" height="5" rx="1" fill="currentColor" />
        </>
      )}

      {type === "code" && (
        <>
          <path d="m8 5-6 7 6 7" />
          <path d="m16 5 6 7-6 7" />
          <path d="m14 3-4 18" />
        </>
      )}

      {type === "tools" && (
        <>
          <path d="M14.5 6.5a5 5 0 0 0-6.8 6.8L3 18a2.1 2.1 0 0 0 3 3l4.7-4.7a5 5 0 0 0 6.8-6.8l-3 3-3-3 3-3Z" />
          <path d="m14 14 6.5 6.5" />
          <path d="m18 17 3-3" />
        </>
      )}

      {type === "ai" && (
        <>
          <path d="M12 3a3 3 0 0 0-5.8 1.2A4 4 0 0 0 4 11a4 4 0 0 0 2.2 7.2A3 3 0 0 0 12 19Z" />
          <path d="M12 3a3 3 0 0 1 5.8 1.2A4 4 0 0 1 20 11a4 4 0 0 1-2.2 7.2A3 3 0 0 1 12 19Z" />
          <path d="M12 3v18" />
          <path d="M8 9h1" />
          <path d="M15 8h1" />
          <path d="M8 15h1" />
          <path d="M15 14h1" />
        </>
      )}
    </svg>
  );
}

//============================================================================
//! SKILLS SECTION
//============================================================================

export default function SkillsSection() {
  return (
    <section id="skills" className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-4 pb-16 sm:px-10 lg:px-12 lg:pt-8 lg:pb-20">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-16">
          {/*==================================================================
            //! SECTION HEADING
          ==================================================================*/}

          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

              <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
                SKILLS
              </p>
            </div>

            <h2 className="max-w-lg text-3xl leading-[1.12] font-medium tracking-tight text-[#858991] sm:text-4xl">
              Technical <span className="text-[#F5F5F6]">skills</span>
              <span className="block">
                that I use to <span className="text-[#F5F5F6]">build</span>
              </span>
              <span className="block text-[#F5F5F6]">real solutions.</span>
            </h2>
          </div>

          {/*==================================================================
            //! SECTION DESCRIPTION
          ==================================================================*/}

          <p className="max-w-md text-sm leading-7 text-[#858991] lg:ml-auto">
            A growing set of tools and technologies that help me turn ideas into
            practical applications. I&apos;m continuously learning and exploring
            new technologies.
          </p>
        </div>

        {/*====================================================================
          //! SKILL CARDS
        ====================================================================*/}

        <div className="mt-8 space-y-3">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="group flex min-h-[120px] flex-col gap-5 rounded-xl border border-[#41444B]/80 bg-[#202226]/60 p-5 transition-colors duration-300 hover:border-[#858991] sm:flex-row sm:items-center sm:gap-6"
            >
              {/*============================================================
                //! SKILL ICON
              ============================================================*/}

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#41444B] bg-[#151619] text-[#F5F5F6]">
                <SkillIcon type={skill.icon} />
              </div>

              {/*============================================================
                //! SKILL INFORMATION
              ============================================================*/}

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium text-[#E0E2E6]">
                  {skill.title}
                </h3>

                <p className="mt-2 max-w-md text-xs leading-5 text-[#858991]">
                  {skill.description}
                </p>
              </div>

              {/*============================================================
                //! TECHNOLOGY PILLS
              ============================================================*/}

              <div className="flex w-full shrink-0 flex-wrap items-center gap-2 sm:w-[210px]">
                {skill.technologies.map((technology) => (
                  <TechPill key={technology} label={technology} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
