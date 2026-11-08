"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useRef } from "react";

import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import {
  scalabilityFutureData,
  type ScalabilityFutureIcon,
} from "./ScalabilityFutureData";

//============================================================================
//! FEATURE ICONS
//============================================================================

function ScalabilityFutureIcon({ name }: { name: ScalabilityFutureIcon }) {
  const iconProps = {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "performance":
      return (
        <svg {...iconProps} fill="currentColor" stroke="none">
          <rect x="3" y="3" width="18" height="5" rx="1" />
          <rect x="3" y="10" width="18" height="5" rx="1" />
          <rect x="3" y="17" width="18" height="5" rx="1" />
        </svg>
      );

    case "search":
      return (
        <svg {...iconProps}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>
      );

    case "monitoring":
      return (
        <svg {...iconProps} fill="currentColor" stroke="none">
          <rect x="3" y="11" width="5" height="10" rx="0.5" />
          <rect x="10" y="5" width="5" height="16" rx="0.5" />
          <rect x="17" y="2" width="5" height="19" rx="0.5" />
        </svg>
      );

    case "location":
      return (
        <svg {...iconProps} fill="currentColor" stroke="none">
          <path d="M12 2C7 2 3 6 3 11c0 6 9 12 9 12s9-6 9-12c0-5-4-9-9-9Zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
      );

    case "message":
      return (
        <svg {...iconProps} fill="currentColor" stroke="none">
          <path d="M12 3C6.5 3 2 6.6 2 11c0 2.4 1.3 4.5 3.4 6L5 21l4.4-2.2c.8.2 1.7.3 2.6.3 5.5 0 10-3.6 10-8S17.5 3 12 3Z" />
        </svg>
      );

    case "expansion":
      return (
        <svg {...iconProps}>
          <path d="m12 2 9 5-9 5-9-5 9-5Z" />
          <path d="M3 7v10l9 5 9-5V7" />
          <path d="M12 12v10" />
        </svg>
      );
  }
}

//============================================================================
//! FEATURE CARD
//============================================================================

function ScalabilityFutureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ScalabilityFutureIcon;
}) {
  return (
    <div className="flex min-h-[64px] min-w-0 items-center gap-3 rounded-lg border border-[#41444B] bg-[#202226]/60 px-3 py-2.5 transition-colors duration-300 hover:border-[#858991]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#41444B] bg-[#111214] text-[#F5F5F6]">
        <ScalabilityFutureIcon name={icon} />
      </div>

      <div className="min-w-0">
        <h3 className="text-sm font-medium leading-tight text-[#F5F5F6]">
          {title}
        </h3>

        <p className="mt-1 text-[9px] leading-[1.35] text-[#858991]">
          {description}
        </p>
      </div>
    </div>
  );
}

//============================================================================
//! SCALABILITY & FUTURE IMPROVEMENTS SECTION
//============================================================================

export default function ScalabilityFutureSection() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0);
  useScrollAnimation(headingRef, 150);
  useScrollAnimation(descriptionRef, 250);
  useScrollAnimation(cardsRef, 200);

  return (
    <section
      id="scalability-future"
      className="relative px-6 pt-0 pb-16 sm:px-10 sm:pt-0 sm:pb-20 lg:px-12 lg:pt-0 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div>
          <div ref={introductionRef} className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              SCALABILITY &amp; FUTURE IMPROVEMENTS
            </p>
          </div>

          {/*==================================================================
            //! SECTION HEADING
          ==================================================================*/}

          <h2
            ref={headingRef}
            className="text-3xl leading-[1.12] font-medium tracking-tight text-[#858991] sm:text-4xl"
          >
            Scalability{" "}
            <span className="text-[#F5F5F6]">&amp; Future Improvements</span>
          </h2>

          {/*==================================================================
            //! SECTION DESCRIPTION
          ==================================================================*/}

          <p
            ref={descriptionRef}
            className="mt-4 max-w-lg text-sm leading-7 text-[#858991]"
          >
            Planned enhancements to improve performance, coverage, and overall
            user experience.
          </p>
        </div>

        {/*====================================================================
          //! FUTURE IMPROVEMENTS GRID
        ====================================================================*/}

        <div
          ref={cardsRef}
          className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {scalabilityFutureData.map((item) => (
            <ScalabilityFutureCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
