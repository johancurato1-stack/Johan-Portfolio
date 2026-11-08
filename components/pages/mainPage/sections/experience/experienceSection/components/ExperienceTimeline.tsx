/*============================================================================
 //! IMPORTS
============================================================================*/

import IconContainer from "@/components/ui/IconContainer";

import { experienceData, type Experience } from "../ExperienceData";

//============================================================================
//! EXPERIENCE ICON
//============================================================================

function ExperienceIcon({ type }: { type: Experience["icon"] }) {
  const iconProps = {
    width: 26,
    height: 26,
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
      {type === "code" && (
        <>
          <path d="m8 5-6 7 6 7" />
          <path d="m16 5 6 7-6 7" />
          <path d="m14 3-4 18" />
        </>
      )}

      {type === "mobile" && (
        <>
          <rect x="6.5" y="2.5" width="11" height="19" rx="1" />
          <path d="M10 18.5h4" />
        </>
      )}

      {type === "graduation" && (
        <>
          <path d="m2 10 10-5 10 5-10 5-10-5Z" fill="currentColor" />
          <path d="M6 12v5c3.5 3 8.5 3 12 0v-5" />
          <path d="M22 10v6" />
        </>
      )}
    </svg>
  );
}

//============================================================================
//! EXPERIENCE ENTRY
//============================================================================

function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <article
      data-scroll-animation-item
      className="relative grid min-h-[112px] grid-cols-[52px_minmax(0,1fr)] items-center gap-x-6 border-b border-[#41444B]/50 py-5 sm:min-h-[120px] sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-x-7 lg:grid-cols-[52px_minmax(0,1fr)_minmax(180px,0.55fr)] lg:gap-x-9"
    >
      {/*====================================================================
        //! TIMELINE MARKER
      ====================================================================*/}

      <span className="absolute top-1/2 left-[-43px] h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#F5F5F6] sm:left-[-51px]" />

      {/*====================================================================
        //! EXPERIENCE ICON
      ====================================================================*/}

      <IconContainer size="lg" radius="md" className="text-[#F5F5F6]">
        <ExperienceIcon type={experience.icon} />
      </IconContainer>

      {/*====================================================================
        //! EXPERIENCE INFORMATION
      ====================================================================*/}

      <div className="min-w-0">
        <p className="text-[10px] font-medium tracking-wide text-[#858991]">
          {experience.period}
        </p>

        <h3 className="mt-1 text-sm font-medium leading-5 text-[#F5F5F6]">
          {experience.title}
        </h3>

        <p className="mt-0.5 text-xs leading-4 text-[#858991]">
          {experience.role}
        </p>
      </div>

      {/*====================================================================
        //! EXPERIENCE DESCRIPTION
      ====================================================================*/}

      <p className="col-start-2 mt-4 max-w-sm text-xs leading-[1.6] text-[#858991] lg:col-start-3 lg:mt-0">
        {experience.description}
      </p>
    </article>
  );
}

//============================================================================
//! EXPERIENCE TIMELINE
//============================================================================

export default function ExperienceTimeline() {
  return (
    <div className="relative pl-12 sm:pl-14">
      {/*====================================================================
        //! TIMELINE LINE
      ====================================================================*/}

      <div className="absolute top-5 bottom-5 left-[7.5px] w-px bg-[#858991]" />

      {/*====================================================================
        //! EXPERIENCE ENTRIES
      ====================================================================*/}

      <div>
        {experienceData.map((experience) => (
          <ExperienceEntry key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
