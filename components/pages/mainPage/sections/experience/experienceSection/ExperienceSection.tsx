"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useRef } from "react";

import ExperienceTimeline from "./components/ExperienceTimeline";
import { experienceStatistics } from "./ExperienceData";

import useScrollAnimation from "@/components/hooks/useScrollAnimation";

//============================================================================
//! EXPERIENCE SECTION
//============================================================================

export default function ExperienceSection() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statisticsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0);
  useScrollAnimation(headingRef, 120);
  useScrollAnimation(descriptionRef, 250);
  useScrollAnimation(statisticsRef, 100, 120);
  useScrollAnimation(timelineRef, 150, 150);

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
            <div ref={introductionRef} className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

              <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
                EXPERIENCE
              </p>
            </div>

            <h2
              ref={headingRef}
              className="max-w-lg text-3xl leading-[1.12] font-medium tracking-tight text-[#F5F5F6] sm:text-4xl lg:text-5xl"
            >
              My journey through
              <span className="block">learning and building.</span>
            </h2>
          </div>

          {/*==================================================================
            //! SECTION DESCRIPTION
          ==================================================================*/}

          <p
            ref={descriptionRef}
            className="max-w-md text-sm leading-7 text-[#858991] lg:ml-auto"
          >
            Through education, personal projects, and continuous learning,
            I&apos;ve developed practical skills and a mindset focused on
            building real solutions.
          </p>
        </div>

        {/*====================================================================
          //! EXPERIENCE STATISTICS
        ====================================================================*/}

        <div
          ref={statisticsRef}
          className="mt-8 grid grid-cols-3 border-b border-[#41444B] pb-5 sm:mt-10 sm:pb-6"
        >
          {experienceStatistics.map((statistic) => (
            <div
              key={statistic.label}
              data-scroll-animation-item
              className="flex flex-col items-center gap-1 text-center"
            >
              <span className="text-3xl font-medium leading-none tracking-tight text-[#F5F5F6] sm:text-4xl">
                {statistic.value}
              </span>

              <span className="text-[10px] font-medium text-[#858991] sm:text-xs">
                {statistic.label}
              </span>
            </div>
          ))}
        </div>

        {/*====================================================================
          //! EXPERIENCE TIMELINE
        ====================================================================*/}

        <div ref={timelineRef} className="mt-4">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
