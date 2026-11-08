"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useRef } from "react";

import IconContainer from "@/components/ui/IconContainer";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import { challengesData } from "./ChallengesSolutionData";

//============================================================================
//! CHALLENGE ICONS
//============================================================================

type ChallengeSolutionIcon =
  "layers" | "shield" | "database" | "message" | "box";

function ChallengeSolutionIcon({ name }: { name: ChallengeSolutionIcon }) {
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

    case "shield":
      return (
        <svg {...commonProps} fill="currentColor" stroke="none">
          <path d="M12 2 3 5v6c0 5.5 3.8 9.5 9 11 5.2-1.5 9-5.5 9-11V5l-9-3Z" />
        </svg>
      );

    case "database":
      return (
        <svg {...commonProps} fill="currentColor" stroke="none">
          <rect x="3" y="3" width="18" height="5" rx="1" />
          <rect x="3" y="10" width="18" height="5" rx="1" />
          <rect x="3" y="17" width="18" height="5" rx="1" />
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
        </svg>
      );

    case "box":
      return (
        <svg {...commonProps}>
          <path d="m12 2 9 5-9 5-9-5 9-5Z" />
          <path d="M3 7v10l9 5 9-5V7" />
          <path d="M12 12v10" />
        </svg>
      );
  }
}

//============================================================================
//! STATUS ICON
//============================================================================

function StatusIcon({ status }: { status: "completed" | "in-development" }) {
  return (
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
        status === "completed"
          ? "border-[#285B36] bg-[#174522] text-[#F5F5F6]"
          : "border-[#72551D] bg-[#554018] text-[#F5F5F6]"
      }`}
      aria-label={status === "completed" ? "Completed" : "In development"}
      title={status === "completed" ? "Completed" : "In development"}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="m5 12 5 5L20 7" />
      </svg>
    </span>
  );
}

//============================================================================
//! CHALLENGES & SOLUTIONS SECTION
//============================================================================

export default function ChallengesSolutionSection() {
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
      id="challenges-solutions"
      className="relative px-6 pt-0 pb-16 sm:px-10 sm:pt-2 sm:pb-20 lg:px-12 lg:pt-2 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div>
          <div ref={introductionRef} className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              CHALLENGES &amp; ENGINEERING DECISIONS
            </p>
          </div>

          {/*==================================================================
            //! SECTION HEADING
          ==================================================================*/}

          <h2
            ref={headingRef}
            className="text-3xl leading-[1.12] font-medium tracking-tight text-[#858991] sm:text-4xl"
          >
            Challenges <span className="text-[#F5F5F6]">&amp; Solutions</span>
          </h2>

          {/*==================================================================
            //! SECTION DESCRIPTION
          ==================================================================*/}

          <p
            ref={descriptionRef}
            className="mt-4 max-w-sm text-sm leading-7 text-[#858991]"
          >
            Key technical challenges I encountered and how I approached them.
          </p>
        </div>

        {/*====================================================================
          //! CHALLENGES AND SOLUTIONS COMPARISON
        ====================================================================*/}

        <div ref={comparisonRef} className="mt-10">
          {/*==================================================================
            //! COLUMN HEADINGS
          ==================================================================*/}

          <div className="grid grid-cols-[1fr_32px_1fr] items-center gap-3 border-b border-[#41444B] px-1 pb-3 sm:grid-cols-[1fr_44px_1fr] sm:gap-5">
            <p className="text-center text-xs font-semibold text-[#F5F5F6] sm:text-sm">
              The Challenge
            </p>

            <div />

            <p className="text-center text-xs font-semibold text-[#F5F5F6] sm:text-sm">
              The Solution
            </p>
          </div>

          {/*==================================================================
            //! COMPARISON ROWS
          ==================================================================*/}

          {challengesData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1fr_32px_1fr] items-start gap-3 border-b border-[#41444B] py-4 sm:grid-cols-[1fr_44px_1fr] sm:gap-5 sm:py-5"
            >
              {/*============================================================
                //! CHALLENGE
              ============================================================*/}

              <div className="flex min-w-0 items-start gap-3 sm:gap-5">
                <IconContainer size="lg" radius="md">
                  <ChallengeSolutionIcon
                    name={item.challenge.icon as ChallengeSolutionIcon}
                  />
                </IconContainer>

                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-[#F5F5F6] sm:text-base">
                    {item.challenge.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-[1.5] text-[#858991] sm:text-sm">
                    {item.challenge.description}
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
                <div className="pt-0.5">
                  <StatusIcon status={item.status} />
                </div>

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
