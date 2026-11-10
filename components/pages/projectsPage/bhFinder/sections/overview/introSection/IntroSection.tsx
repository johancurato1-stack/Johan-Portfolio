"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import { useRef } from "react";

import TechPill from "@/components/ui/TechPill";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import { introProjectMetadata, introTechStack } from "./IntroData";

//============================================================================
//! PROJECT INTRODUCTION
//============================================================================

export default function IntroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(contentRef, 0, 110);

  return (
    <section
      id="project-overview"
      className="relative overflow-hidden px-6 pt-1 pb-8 sm:px-10 sm:pt-5 sm:pb-8 lg:px-12 lg:pt-8 lg:pb-12"
    >
      <div ref={contentRef} className="mx-auto max-w-7xl">
        {/*====================================================================
          //! MAIN INTRODUCTION CONTENT
        ====================================================================*/}

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          {/*==================================================================
            //! PROJECT INFORMATION
          ==================================================================*/}

          <div className="relative z-10">
            {/*================================================================
              //! PROJECT LABEL
            ================================================================*/}

            <div
              data-scroll-animation-item
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

              <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
                PROJECT CASE STUDY
              </p>
            </div>

            {/*================================================================
              //! PROJECT HEADING
            ================================================================*/}

            <div data-scroll-animation-item>
              <p className="text-xs font-medium tracking-wide text-[#B9BEC7]">
                MOBILE APPLICATION
              </p>

              <h1 className="mt-1 text-4xl leading-[1.12] font-medium tracking-tight text-[#F5F5F6] sm:text-5xl lg:text-6xl">
                BH Finder
              </h1>

              <p className="mt-1 max-w-lg text-xl leading-[1.2] font-medium text-[#B9BEC7] sm:text-2xl">
                Finding a place to call home,
                <span className="block">made easier.</span>
              </p>
            </div>

            {/*================================================================
              //! PROJECT DESCRIPTION
            ================================================================*/}

            <p
              data-scroll-animation-item
              className="mt-6 max-w-lg text-sm leading-7 text-[#858991] sm:text-base"
            >
              A boarding house discovery and management
              <br className="hidden sm:block" />
              platform designed to simplify how students find
              <br className="hidden sm:block" />
              accommodations and how landlords manage their
              <br className="hidden sm:block" />
              properties.
            </p>

            {/*================================================================
              //! TECHNOLOGY STACK
            ================================================================*/}

            <div
              data-scroll-animation-item
              className="mt-7 flex flex-wrap gap-2"
            >
              {introTechStack.map((technology) => (
                <TechPill key={technology} label={technology} />
              ))}
            </div>
          </div>

          {/*==================================================================
            //! PROJECT MOCKUPS
          ==================================================================*/}

          <div className="relative mx-auto flex h-[430px] w-full max-w-[520px] items-center justify-center sm:h-[500px] lg:h-[480px]">
            {/*================================================================
              //! WHITE IPHONE MOCKUP
            ================================================================*/}

            <div
              data-scroll-animation-item
              className="absolute right-[4%] top-[9%] z-0 h-[84%] w-[51%]"
            >
              <Image
                src="/images/projectsPage/bhFinder/sections/overview/introSection/BH%20Finder%20Mobile%20App%20Mockup%203.png"
                alt="BH Finder boarding house details displayed on a white iPhone"
                fill
                priority
                sizes="(max-width: 640px) 240px, 280px"
                className="object-contain"
              />
            </div>

            {/*================================================================
              //! BLACK IPHONE MOCKUP
            ================================================================*/}

            <div
              data-scroll-animation-item
              className="absolute left-[5%] top-0 z-10 h-full w-[62%]"
            >
              <Image
                src="/images/projectsPage/bhFinder/sections/overview/introSection/BH%20Finder%20Mobile%20App%20Mockup%202.png"
                alt="BH Finder home screen displayed on a black iPhone"
                fill
                priority
                sizes="(max-width: 640px) 290px, 320px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/*====================================================================
          //! PROJECT METADATA
        ====================================================================*/}

        <div className="mt-8 grid grid-cols-2 border-y border-[#41444B] sm:grid-cols-4">
          {introProjectMetadata.map((item, index) => (
            <div
              key={item.label}
              data-scroll-animation-item
              className={`flex min-h-[76px] items-center gap-3 py-4 ${
                index % 2 === 0 ? "pl-1" : "pl-5"
              } ${index < 2 ? "border-b border-[#41444B] sm:border-b-0" : ""} ${
                index % 2 === 1 ? "sm:border-l sm:border-[#41444B]" : ""
              } ${index >= 2 ? "sm:border-l sm:border-[#41444B]" : ""} sm:px-5`}
            >
              {/*============================================================
                //! METADATA ICON
              ============================================================*/}

              <div className="shrink-0 text-[#F5F5F6]">
                {item.icon === "user" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5Z" />
                  </svg>
                )}

                {item.icon === "smartphone" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <rect x="6" y="2" width="12" height="20" rx="1" />
                    <path d="M11 18h2" />
                  </svg>
                )}

                {item.icon === "server" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <rect x="2" y="3" width="20" height="5" rx="1" />
                    <rect x="2" y="10" width="20" height="5" rx="1" />
                    <rect x="2" y="17" width="20" height="5" rx="1" />
                  </svg>
                )}

                {item.icon === "layers" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path d="m12 2 10 5-10 5L2 7l10-5Zm-8.5 9.5L12 16l8.5-4.5L22 13l-10 5-10-5 1.5-1.5Zm0 6L12 22l8.5-4.5L22 19l-10 5-10-5 1.5-1.5Z" />
                  </svg>
                )}
              </div>

              {/*============================================================
                //! METADATA INFORMATION
              ============================================================*/}

              <div className="min-w-0">
                <p className="text-xs font-medium text-[#858991]">
                  {item.label}
                </p>

                <p className="mt-0.5 truncate text-xs text-[#F5F5F6] sm:text-sm">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
