/*============================================================================
 //! IMPORTS
============================================================================*/

import ExperienceTimeline from "./ExperienceTimeline";

//============================================================================
//! EXPERIENCE STATISTICS
//============================================================================

const statistics = [
  {
    value: "2+",
    label: "Major Projects",
  },
  {
    value: "3+",
    label: "Years of Learning",
  },
  {
    value: "5+",
    label: "Core Technologies",
  },
];

//============================================================================
//! EXPERIENCE SECTION
//============================================================================

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative border-y border-[#41444B] bg-[#111214]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
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
                EXPERIENCE
              </p>
            </div>

            <h2 className="max-w-lg text-3xl leading-[1.12] font-medium tracking-tight text-[#858991] sm:text-4xl lg:text-5xl">
              My journey through
              <span className="block text-[#F5F5F6]">
                learning and building.
              </span>
            </h2>
          </div>

          {/*==================================================================
            //! SECTION DESCRIPTION
          ==================================================================*/}

          <p className="max-w-md text-sm leading-7 text-[#858991] lg:ml-auto">
            Through education, personal projects, and continuous learning,
            I&apos;ve developed practical skills and a mindset focused on
            building real solutions.
          </p>
        </div>

        {/*====================================================================
          //! EXPERIENCE STATISTICS
        ====================================================================*/}

        <div className="mt-8 grid grid-cols-3 border-b border-[#41444B] pb-5 sm:mt-10 sm:pb-6">
          {statistics.map((statistic) => (
            <div
              key={statistic.label}
              className="flex flex-col items-center gap-1 text-center"
            >
              <span className="text-3xl font-medium leading-none tracking-tight text-[#F5F5F6] sm:text-4xl">
                {statistic.value}
              </span>

              <span className="text-[10px] font-medium text-[#B9BEC7] sm:text-xs">
                {statistic.label}
              </span>
            </div>
          ))}
        </div>

        {/*====================================================================
          //! EXPERIENCE TIMELINE
        ====================================================================*/}

        <div className="mt-4">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
