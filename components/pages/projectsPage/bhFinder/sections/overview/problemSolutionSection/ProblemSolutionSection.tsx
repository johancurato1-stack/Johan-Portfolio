"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useRef } from "react";

import IconContainer from "@/components/ui/IconContainer";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import { problemSolutionData } from "./ProblemSolutionData";

//============================================================================
//! ICONS
//============================================================================

type ProblemSolutionIcon =
  | "layers"
  | "home"
  | "info"
  | "clipboard"
  | "sliders"
  | "panels"
  | "message"
  | "messages";

function ProblemSolutionIcon({ name }: { name: ProblemSolutionIcon }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "layers":
      return (
        <svg {...commonProps}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" fill="currentColor" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </svg>
      );

    case "home":
      return (
        <svg {...commonProps}>
          <path d="m3 10 9-7 9 7" fill="currentColor" />
          <path d="M5 9v12h14V9" fill="currentColor" />
          <path d="M9 21v-7h6v7" stroke="#151619" />
        </svg>
      );

    case "info":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" />
          <path d="M12 11v6" stroke="#151619" strokeWidth="2.5" />
          <circle cx="12" cy="7.5" r="1" fill="#151619" stroke="none" />
        </svg>
      );

    case "clipboard":
      return (
        <svg {...commonProps}>
          <rect x="5" y="5" width="14" height="17" rx="2" />
          <path d="M9 5.5V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      );

    case "sliders":
      return (
        <svg {...commonProps}>
          <path d="M4 6h16M4 12h16M4 18h16" />
          <circle cx="8" cy="6" r="1.5" fill="currentColor" />
          <circle cx="16" cy="12" r="1.5" fill="currentColor" />
          <circle cx="10" cy="18" r="1.5" fill="currentColor" />
        </svg>
      );

    case "panels":
      return (
        <svg {...commonProps}>
          <path d="m7 4 13-2v16L7 21V4Z" />
          <path d="m4 7-2 1v13l13-2" />
          <path d="M10 6v13" />
        </svg>
      );

    case "message":
      return (
        <svg {...commonProps}>
          <path
            d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"
            fill="currentColor"
            stroke="none"
          />
          <circle cx="8" cy="12" r="1" fill="#151619" stroke="none" />
          <circle cx="12" cy="12" r="1" fill="#151619" stroke="none" />
          <circle cx="16" cy="12" r="1" fill="#151619" stroke="none" />
        </svg>
      );

    case "messages":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="13" y="3" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="3" y="13" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="13" y="13" width="8" height="8" rx="1" fill="currentColor" />
        </svg>
      );
  }
}

//============================================================================
//! PROBLEM AND SOLUTION SECTION
//============================================================================

export default function ProblemSolutionSection() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0);
  useScrollAnimation(headingRef, 150);
  useScrollAnimation(descriptionRef, 250);
  useScrollAnimation(comparisonRef, 200);

  return (
    <section
      id="problem-solution"
      className="relative px-6 pt-8 pb-16 sm:px-10 sm:pt-10 sm:pb-20 lg:px-12 lg:pt-10 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div>
          <div ref={introductionRef} className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              THE PROBLEM &amp; SOLUTION
            </p>
          </div>

          {/*==================================================================
            //! SECTION HEADING
          ==================================================================*/}

          <h2
            ref={headingRef}
            className="text-4xl leading-[1.12] font-medium tracking-tight text-[#858991] sm:text-5xl"
          >
            The Problem <span className="text-[#F5F5F6]">&amp; Solution</span>
          </h2>

          {/*==================================================================
            //! SECTION DESCRIPTION
          ==================================================================*/}

          <p
            ref={descriptionRef}
            className="mt-5 max-w-lg text-sm leading-7 text-[#858991] sm:text-base"
          >
            Addressing the real challenges students and landlords face in
            finding, listing, and managing boarding houses.
          </p>
        </div>

        {/*====================================================================
          //! PROBLEM AND SOLUTION COMPARISON
        ====================================================================*/}

        <div ref={comparisonRef} className="mt-10">
          {/*==================================================================
            //! COLUMN HEADINGS
          ==================================================================*/}

          <div className="grid grid-cols-[1fr_32px_1fr] items-center gap-3 border-b border-[#41444B] px-1 pb-3 sm:grid-cols-[1fr_44px_1fr] sm:gap-5">
            <p className="text-center text-xs font-semibold text-[#F5F5F6] sm:text-sm">
              The Problem
            </p>

            <div />

            <p className="text-center text-xs font-semibold text-[#F5F5F6] sm:text-sm">
              The Solution
            </p>
          </div>

          {/*==================================================================
            //! COMPARISON ROWS
          ==================================================================*/}

          {problemSolutionData.map((item) => (
            <div
              key={item.problem.title}
              className="grid grid-cols-[1fr_32px_1fr] items-start gap-3 border-b border-[#41444B] py-4 sm:grid-cols-[1fr_44px_1fr] sm:gap-5 sm:py-5"
            >
              {/*============================================================
                //! PROBLEM
              ============================================================*/}

              <div className="flex min-w-0 items-start gap-3 sm:gap-5">
                <IconContainer size="lg" radius="md">
                  <ProblemSolutionIcon
                    name={item.problem.icon as ProblemSolutionIcon}
                  />
                </IconContainer>

                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-[#F5F5F6] sm:text-base">
                    {item.problem.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-[1.5] text-[#858991] sm:text-sm">
                    {item.problem.description}
                  </p>
                </div>
              </div>

              {/*============================================================
                //! DIRECTION ARROW
              ============================================================*/}

              <div className="flex justify-center pt-3 text-[#F5F5F6]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M4 12h16" />
                  <path d="m14 6 6 6-6 6" />
                </svg>
              </div>

              {/*============================================================
                //! SOLUTION
              ============================================================*/}

              <div className="flex min-w-0 items-start gap-3 sm:gap-5">
                <IconContainer size="lg" radius="md">
                  <ProblemSolutionIcon
                    name={item.solution.icon as ProblemSolutionIcon}
                  />
                </IconContainer>

                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-[#F5F5F6] sm:text-base">
                    {item.solution.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-[1.5] text-[#858991] sm:text-sm">
                    {item.solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
