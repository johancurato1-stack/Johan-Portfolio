"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useRef } from "react";

import IconContainer from "@/components/ui/IconContainer";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import { architectureHighlights } from "./SystemArchitectureData";

import ArchitectureDiagram from "./components/ArchitectureDiagram/ArchitectureDiagram";
import ArchitectureDetails from "./components/ArchitectureDetails/ArchitectureDetails";

//============================================================================
//! ARCHITECTURE HIGHLIGHT ICON
//============================================================================

function ArchitectureHighlightIcon({ type }: { type: string }) {
  const iconProps = {
    width: 22,
    height: 22,
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
      {type === "layers" && (
        <>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </>
      )}

      {type === "code" && (
        <>
          <path d="m8 5-6 7 6 7" />
          <path d="m16 5 6 7-6 7" />
          <path d="m14 3-4 18" />
        </>
      )}

      {type === "shield" && (
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      )}
    </svg>
  );
}

//============================================================================
//! SYSTEM ARCHITECTURE SECTION
//============================================================================

export default function SystemArchitectureSection() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0, 110);
  useScrollAnimation(highlightsRef, 0, 110);

  return (
    <section
      id="system-architecture"
      className="relative px-6 pt-8 pb-10 sm:px-10 sm:pt-12 lg:px-12 lg:pt-16 lg:pb-12"
    >
      <div className="mx-auto max-w-7xl">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div ref={introductionRef}>
          <div
            data-scroll-animation-item
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              SYSTEM ARCHITECTURE
            </p>
          </div>

          {/*==================================================================
            //! SECTION HEADING
          ==================================================================*/}

          <h2
            data-scroll-animation-item
            className="text-3xl font-medium tracking-tight text-[#858991] sm:text-4xl"
          >
            Application <span className="text-[#F5F5F6]">Architecture</span>
          </h2>

          {/*==================================================================
            //! SECTION DESCRIPTION
          ==================================================================*/}

          <p
            data-scroll-animation-item
            className="mt-4 max-w-lg text-sm leading-7 text-[#858991]"
          >
            The overall structure and flow of BH Finder, from the client
            applications to the backend services and database, following a
            clean, layered architecture with the Repository Pattern.
          </p>
        </div>

        {/*====================================================================
          //! ARCHITECTURE HIGHLIGHTS
        ====================================================================*/}

        <div
          ref={highlightsRef}
          className="mt-7 grid gap-3 border-b border-[#41444B] pb-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {architectureHighlights.map((highlight) => (
            <article
              key={highlight.id}
              data-scroll-animation-item
              className="flex min-h-[76px] items-center gap-3 rounded-lg border border-[#41444B]/70 bg-[#202226]/50 px-3 py-3 transition-colors duration-300 hover:border-[#858991]"
            >
              {/*============================================================
                //! HIGHLIGHT ICON
              ============================================================*/}

              <IconContainer>
                <ArchitectureHighlightIcon type={highlight.icon} />
              </IconContainer>

              {/*============================================================
                //! HIGHLIGHT INFORMATION
              ============================================================*/}

              <div className="min-w-0">
                <h3 className="text-sm font-medium text-[#F5F5F6]">
                  {highlight.title}
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-[#858991]">
                  {highlight.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/*====================================================================
          //! MAIN ARCHITECTURE DIAGRAM
        ====================================================================*/}

        <ArchitectureDiagram />

        {/*====================================================================
          //! ARCHITECTURE DETAILS
        ====================================================================*/}

        <div className="relative -top-3">
          <ArchitectureDetails />
        </div>
      </div>
    </section>
  );
}
