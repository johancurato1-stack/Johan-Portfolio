"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useRef } from "react";

import IconContainer from "@/components/ui/IconContainer";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import { lookingAheadData, type LookingAhead } from "./LookingAheadData";

//============================================================================
//! LOOKING AHEAD ICON
//============================================================================

function LookingAheadIcon({ type }: { type: LookingAhead["icon"] }) {
  const iconProps = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  return (
    <svg {...iconProps}>
      {type === "build" && (
        <>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" fill="currentColor" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </>
      )}

      {type === "grow" && (
        <>
          <path d="M4 19h16" />
          <path d="M6 15v-3" />
          <path d="M11 15V9" />
          <path d="M16 15V5" />
          <path d="m4 9 5-3 4 1 6-4" />
          <path d="M15 3h4v4" />
        </>
      )}

      {type === "give-back" && (
        <>
          <circle cx="12" cy="7" r="3" fill="currentColor" />
          <circle cx="5" cy="9" r="2.5" fill="currentColor" />
          <circle cx="19" cy="9" r="2.5" fill="currentColor" />
          <path d="M5 19v-1a7 7 0 0 1 14 0v1Z" fill="currentColor" />
          <path d="M1 18v-1a4 4 0 0 1 5-3.9" />
          <path d="M23 18v-1a4 4 0 0 0-5-3.9" />
        </>
      )}
    </svg>
  );
}

//============================================================================
//! LOOKING AHEAD CARD
//============================================================================

function LookingAheadCard({ item }: { item: LookingAhead }) {
  return (
    <article
      data-scroll-animation-item
      className="group flex min-h-[155px] flex-col rounded-xl border border-[#41444B]/80 bg-[#202226]/60 p-5 transition-colors duration-300 hover:border-[#858991]"
    >
      {/*====================================================================
        //! LOOKING AHEAD ICON
      ====================================================================*/}

      <IconContainer>
        <LookingAheadIcon type={item.icon} />
      </IconContainer>

      {/*====================================================================
        //! LOOKING AHEAD CONTENT
      ====================================================================*/}

      <h3 className="mt-4 text-sm font-medium text-[#F5F5F6]">{item.title}</h3>

      <p className="mt-2 text-xs leading-5 text-[#858991]">
        {item.description}
      </p>
    </article>
  );
}

//============================================================================
//! LOOKING AHEAD SECTION
//============================================================================

export default function LookingAheadSection() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0);
  useScrollAnimation(cardsRef, 150, 120);

  return (
    <section
      id="looking-ahead"
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
              LOOKING AHEAD
            </p>
          </div>

          <h2 className="text-4xl font-medium tracking-tight text-[#B9BEC7] sm:text-5xl lg:text-6xl">
            What’s Next <span className="text-[#F5F5F6]">for Me</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#858991]">
            A glimpse of where I’m headed, what I’m building toward, and the
            kind of impact I want to create.
          </p>
        </div>

        {/*====================================================================
          //! LOOKING AHEAD CARDS
        ====================================================================*/}

        <div
          ref={cardsRef}
          className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {lookingAheadData.map((item) => (
            <LookingAheadCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
