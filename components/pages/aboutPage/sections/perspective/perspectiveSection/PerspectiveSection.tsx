"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useRef } from "react";

import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import { perspectiveData, type Perspective } from "./PerspectiveData";

//============================================================================
//! PERSPECTIVE ICON
//============================================================================

function PerspectiveIcon({ type }: { type: Perspective["icon"] }) {
  const iconProps = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  return (
    <svg {...iconProps}>
      {type === "growth" && (
        <>
          <path d="M4 19h16" />
          <path d="M6 15v-3" />
          <path d="M11 15V9" />
          <path d="M16 15V5" />
          <path d="m4 9 5-3 4 1 6-4" />
          <path d="M15 3h4v4" />
        </>
      )}

      {type === "people" && (
        <>
          <circle cx="12" cy="7" r="2.5" />
          <circle cx="5" cy="9" r="2" />
          <circle cx="19" cy="9" r="2" />
          <path d="M7 19v-1.5a5 5 0 0 1 10 0V19Z" />
          <path d="M2 18v-1a3.5 3.5 0 0 1 5-3.2" />
          <path d="M22 18v-1a3.5 3.5 0 0 0-5-3.2" />
        </>
      )}

      {type === "balance" && (
        <>
          <path d="M12 3v18" />
          <path d="M5 6h14" />
          <path d="m5 6-3 7h6Z" />
          <path d="m19 6-3 7h6Z" />
          <path d="M8 21h8" />
        </>
      )}

      {type === "discipline" && (
        <path
          d="M13.5 2 6 13h5l-.5 9L18 10h-5Z"
          fill="currentColor"
          stroke="none"
        />
      )}

      {type === "purpose" && (
        <path
          d="M20.8 8.8c0 4.2-8.8 11-8.8 11s-8.8-6.8-8.8-11A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"
          fill="currentColor"
          stroke="none"
        />
      )}
    </svg>
  );
}

//============================================================================
//! PERSPECTIVE CARD
//============================================================================

function PerspectiveCard({ item }: { item: Perspective }) {
  return (
    <article
      data-scroll-animation-item
      className="flex min-w-0 flex-col border-l border-[#858991] px-5 py-1 last:border-r sm:px-6"
    >
      {/*====================================================================
        //! PERSPECTIVE ICON
      ====================================================================*/}

      <div className="flex h-8 items-center text-[#F5F5F6]">
        <PerspectiveIcon type={item.icon} />
      </div>

      {/*====================================================================
        //! PERSPECTIVE CONTENT
      ====================================================================*/}

      <h3 className="mt-3 text-sm font-medium text-[#F5F5F6]">{item.title}</h3>

      <p className="mt-1.5 text-xs leading-[1.3] text-[#858991]">
        {item.description}
      </p>
    </article>
  );
}

//============================================================================
//! PERSPECTIVE SECTION
//============================================================================

export default function PerspectiveSection() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0);
  useScrollAnimation(valuesRef, 150, 120);

  return (
    <section
      id="my-perspective"
      className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div ref={introductionRef} className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              MY PERSPECTIVE
            </p>
          </div>

          <h2 className="text-4xl font-medium tracking-tight text-[#B9BEC7] sm:text-5xl lg:text-6xl">
            What I <span className="text-[#F5F5F6]">Believe In</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#858991]">
            A few core values and principles that guide my decisions, habits,
            relationships, and the way I approach life.
          </p>
        </div>

        {/*====================================================================
          //! PERSPECTIVE VALUES
        ====================================================================*/}

        <div
          ref={valuesRef}
          className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5"
        >
          {perspectiveData.map((item) => (
            <PerspectiveCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
