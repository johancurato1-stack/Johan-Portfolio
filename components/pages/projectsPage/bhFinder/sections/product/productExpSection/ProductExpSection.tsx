"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import { useRef, useState } from "react";

import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import ExperienceTabs from "./components/ExperienceTabs";
import { productExpData, type ProductExpId } from "./ProductExpData";

//============================================================================
//! PRODUCT EXPERIENCE SECTION
//============================================================================

export default function ProductExpSection() {
  const [activeTab, setActiveTab] = useState<ProductExpId>("tenant");

  const introductionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeExperience =
    productExpData.find((experience) => experience.id === activeTab) ??
    productExpData[0];

  const isAdmin = activeExperience.id === "admin";

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0);
  useScrollAnimation(headingRef, 150);
  useScrollAnimation(descriptionRef, 250);
  useScrollAnimation(tabsRef, 200);
  useScrollAnimation(contentRef, 200);

  return (
    <section
      id="product-experience"
      className="relative overflow-hidden border-y border-[#41444B] bg-[#111214] px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div>
          <div ref={introductionRef} className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              PRODUCT EXPERIENCE
            </p>
          </div>

          {/*==================================================================
            //! SECTION HEADING
          ==================================================================*/}

          <h2
            ref={headingRef}
            className="text-4xl leading-[1.12] font-medium tracking-tight text-[#858991] sm:text-5xl"
          >
            Three Connected <span className="text-[#F5F5F6]">Experiences</span>
          </h2>

          {/*==================================================================
            //! SECTION DESCRIPTION
          ==================================================================*/}

          <p
            ref={descriptionRef}
            className="mt-5 max-w-lg text-sm leading-7 text-[#858991] sm:text-base"
          >
            A unified platform with tailored features
            <br className="hidden sm:block" />
            for students, landlords, and administrators.
          </p>
        </div>

        {/*====================================================================
          //! EXPERIENCE TABS
        ====================================================================*/}

        <div
          ref={tabsRef}
          className="mt-8 flex items-center gap-3 sm:gap-4 lg:mt-7"
        >
          <div className="h-px min-w-0 flex-1 bg-[#41444B]" />

          <ExperienceTabs activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="h-px min-w-0 flex-1 bg-[#41444B]" />
        </div>

        {/*====================================================================
          //! EXPERIENCE CONTENT
        ====================================================================*/}

        <div
          key={activeExperience.id}
          ref={contentRef}
          className="mt-8 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
          style={{
            animation: "productExperienceFade 450ms ease-out",
          }}
        >
          {/*==================================================================
            //! EXPERIENCE INFORMATION
          ==================================================================*/}

          <div className="relative z-10 lg:pl-8">
            <h3 className="text-3xl font-medium tracking-tight text-[#F5F5F6] sm:text-4xl">
              {activeExperience.title}
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#858991]">
              {activeExperience.description}
            </p>

            {/*================================================================
              //! FEATURE LIST
            ================================================================*/}

            <ul className="mt-7 space-y-3.5">
              {activeExperience.features.map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#41444B] bg-[#202226] text-[#F5F5F6]">
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

                  <span className="text-sm text-[#F5F5F6]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/*==================================================================
            //! EXPERIENCE MOCKUPS
          ==================================================================*/}

          <div className="relative mx-auto flex h-[390px] w-full max-w-[560px] items-center justify-center sm:h-[470px] lg:h-[500px]">
            {isAdmin ? (
              /*============================================================
                //! ADMIN DASHBOARD MOCKUP
              ============================================================*/

              <div className="relative h-[85%] w-full">
                <Image
                  src={activeExperience.mockups.main}
                  alt="BH Finder administrative dashboard displayed on a laptop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 600px"
                  className="object-contain"
                />
              </div>
            ) : (
              <>
                {/*========================================================
                  //! SECONDARY MOBILE MOCKUP
                ========================================================*/}

                <div className="absolute right-[3%] top-[13%] z-0 h-[80%] w-[48%] rotate-[7deg] transition-transform duration-500">
                  <Image
                    src={activeExperience.mockups.secondary}
                    alt={`${activeExperience.tabLabel} secondary application screen`}
                    fill
                    priority
                    sizes="(max-width: 640px) 220px, 270px"
                    className="object-contain"
                  />
                </div>

                {/*========================================================
                  //! MAIN MOBILE MOCKUP
                ========================================================*/}

                <div className="absolute left-[8%] top-0 z-10 h-full w-[56%] -rotate-[7deg] transition-transform duration-500">
                  <Image
                    src={activeExperience.mockups.main}
                    alt={`${activeExperience.tabLabel} main application screen`}
                    fill
                    priority
                    sizes="(max-width: 640px) 270px, 330px"
                    className="object-contain"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/*====================================================================
        //! EXPERIENCE TRANSITION ANIMATION
      ====================================================================*/}

      <style jsx>{`
        @keyframes productExperienceFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
