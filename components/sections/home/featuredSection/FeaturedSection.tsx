"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import { useRef } from "react";

import Button from "@/components/ui/MainButton";
import TechPill from "@/components/ui/TechPill";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

//============================================================================
//! FEATURED SECTION
//============================================================================

export default function FeaturedSection() {
  const projectInfoRef = useRef<HTMLDivElement>(null);
  const mockupsRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(projectInfoRef, 0);
  useScrollAnimation(mockupsRef, 150, 180);

  return (
    <section
      id="featured-project"
      className="border-y border-[#41444B] bg-[#111214] px-6 py-6 sm:px-10 lg:px-12 lg:py-8"
    >
      <div className="mx-auto max-w-7xl">
        {/*====================================================================
          //! FEATURED PROJECT CONTENT
        ====================================================================*/}

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/*==================================================================
            //! PROJECT INFORMATION
          ==================================================================*/}

          <div ref={projectInfoRef}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

              <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
                FEATURED PROJECT
              </p>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-[#F5F5F6] sm:text-4xl">
              BH Finder
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#A5A8B0]">
              A boarding-house finder application designed to help students
              discover and explore available accommodations. Built with a
              Flutter mobile application, Supabase backend, and an accompanying
              administrative dashboard.
            </p>

            {/*================================================================
              //! TECHNOLOGY PILLS
            ================================================================*/}

            <div className="mt-7 flex flex-wrap gap-2">
              <TechPill label="Flutter" />
              <TechPill label="Dart" />
              <TechPill label="Supabase" />
              <TechPill label="PostgreSQL" />
            </div>

            {/*================================================================
              //! PROJECT LINK
            ================================================================*/}

            <div className="mt-9">
              <Button href="/projects/bh-finder" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          {/*==================================================================
            //! PROJECT MOCKUPS
          ==================================================================*/}

          <div
            ref={mockupsRef}
            className="relative mx-auto flex min-h-[340px] w-full max-w-2xl items-center justify-center sm:min-h-[440px]"
          >
            {/*================================================================
              //! DASHBOARD LAPTOP MOCKUP
            ================================================================*/}

            <div className="ml-auto w-[85%]">
              <Image
                data-scroll-animation-item
                src="/images/home/featuredSection/BH%20Finder%20Dashboard%20Laptop%20Mockup.png"
                alt="BH Finder administrative dashboard displayed on a laptop"
                width={1600}
                height={1000}
                className="h-auto w-full object-contain"
                priority={false}
              />
            </div>

            {/*================================================================
              //! MOBILE APP MOCKUP
            ================================================================*/}

            <div className="absolute left-0 top-[55%] z-10 w-[34%] max-w-[230px] -translate-y-1/2">
              <Image
                data-scroll-animation-item
                src="/images/home/featuredSection/BH%20Finder%20Mobile%20App%20Mockup.png"
                alt="BH Finder mobile application mockup"
                width={700}
                height={1200}
                className="h-auto w-full object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
