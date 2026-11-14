"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useRef } from "react";

import useScrollAnimation from "@/components/hooks/useScrollAnimation";

/*============================================================================
 //! STORY DATA
============================================================================*/

const storyData = [
  {
    id: 1,
    period: "Early Years",
    title: "A Curious Kid",
    description:
      "I've always been curious about how things work, from games and technology to music and creativity.",
  },
  {
    id: 2,
    period: "A Turning Point",
    title: "Facing Challenges",
    description:
      "I've been through moments of loss, self-doubt, and struggles with motivation, health, and consistency.",
  },
  {
    id: 3,
    period: "Finding Myself",
    title: "Growth and Direction",
    description:
      "I learned to be more disciplined, take care of myself, and focus on what truly matters to me.",
  },
  {
    id: 4,
    period: "Present",
    title: "A Clearer Me",
    description:
      "Today, I'm a BSCS student building BH Finder, growing my skills, and continuously working toward the life I envision.",
  },
];

//============================================================================
//! STORY TIMELINE ENTRY
//============================================================================*/

function StoryEntry({
  period,
  title,
  description,
}: {
  period: string;
  title: string;
  description: string;
}) {
  return (
    <article
      data-scroll-animation-item
      className="relative grid grid-cols-[minmax(100px,0.55fr)_minmax(0,1fr)] items-start gap-x-6 border-b border-[#41444B]/50 py-5 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[minmax(120px,0.55fr)_minmax(0,1fr)] sm:gap-x-8"
    >
      {/*====================================================================
  //! TIMELINE MARKER
====================================================================*/}

      <span className="absolute top-1/2 -left-[27px] h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#F5F5F6] sm:-left-[35px]" />

      {/*====================================================================
        //! STORY PERIOD
      ====================================================================*/}

      <div>
        <span className="inline-flex items-center rounded-full border border-[#41444B] bg-[#202226] px-3 py-1.5 text-xs font-medium text-[#B9BEC7]">
          {period}
        </span>
      </div>

      {/*====================================================================
        //! STORY INFORMATION
      ====================================================================*/}

      <div className="min-w-0">
        <h3 className="text-sm font-medium leading-5 text-[#F5F5F6]">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-[1.6] text-[#858991]">
          {description}
        </p>
      </div>
    </article>
  );
}

//============================================================================
//! STORY SECTION
//============================================================================*/

export default function StorySection() {
  const contentRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================*/

  useScrollAnimation(contentRef, 0, 110);

  return (
    <section
      id="my-story"
      className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"
    >
      <div
        ref={contentRef}
        className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20"
      >
        {/*====================================================================
          //! STORY INTRODUCTION
        ====================================================================*/}

        <div>
          {/*==================================================================
            //! SECTION LABEL
          ==================================================================*/}

          <div
            data-scroll-animation-item
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              MY STORY
            </p>
          </div>

          {/*==================================================================
            //! STORY HEADING
          ==================================================================*/}

          <h2
            data-scroll-animation-item
            className="max-w-xl text-4xl leading-[1.12] font-medium tracking-tight text-[#B9BEC7] sm:text-5xl lg:text-6xl"
          >
            How I <span className="text-[#F5F5F6]">Became</span>
            <span className="block">
              Who I <span className="text-[#F5F5F6]">Am Today</span>
            </span>
          </h2>

          {/*==================================================================
            //! STORY DESCRIPTION
          ==================================================================*/}

          <p
            data-scroll-animation-item
            className="mt-6 max-w-md text-sm leading-7 text-[#858991] sm:text-base"
          >
            My story is a mix of curiosity, challenges, loss, and growth.
            It&apos;s the experiences, people, and lessons along the way that
            shaped my mindset, values, and the person I&apos;m becoming today.
          </p>
        </div>

        {/*====================================================================
          //! STORY TIMELINE
        ====================================================================*/}

        <div className="relative ml-6 pl-6 sm:ml-8 sm:pl-8">
          {/*==================================================================
            //! TIMELINE LINE
          ==================================================================*/}

          <div className="absolute top-2 bottom-2 left-0 w-px bg-[#858991]" />

          {/*==================================================================
            //! STORY ENTRIES
          ==================================================================*/}

          <div>
            {storyData.map((story) => (
              <StoryEntry
                key={story.id}
                period={story.period}
                title={story.title}
                description={story.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
