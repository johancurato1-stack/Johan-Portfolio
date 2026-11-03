"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import { useRef } from "react";

import Button from "@/components/ui/MainButton";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

//============================================================================
//! ABOUT SECTION
//============================================================================

export default function AboutSection() {
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(labelRef, 0);
  useScrollAnimation(headingRef, 120);
  useScrollAnimation(descriptionRef, 250, 120);
  useScrollAnimation(buttonRef, 450);
  useScrollAnimation(portraitRef, 180, 150);

  return (
    <section id="about" className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-16 pb-8 sm:px-10 sm:pt-16 sm:pb-8 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:px-12 lg:pt-20 lg:pb-12">
        {/*====================================================================
          //! ABOUT CONTENT
        ====================================================================*/}

        <div className="relative z-10">
          {/*==================================================================
            //! SECTION LABEL
          ==================================================================*/}

          <div ref={labelRef} className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              ABOUT ME
            </p>
          </div>

          {/*==================================================================
            //! ABOUT HEADING
          ==================================================================*/}

          <h2
            ref={headingRef}
            className="max-w-2xl text-4xl leading-[1.12] font-medium tracking-tight text-[#858991] sm:text-5xl lg:text-6xl"
          >
            Turning <span className="text-[#F5F5F6]">Ideas</span>
            <span className="block">
              into real <span className="text-[#F5F5F6]">solutions.</span>
            </span>
          </h2>

          {/*==================================================================
            //! ABOUT DESCRIPTION
          ==================================================================*/}

          <div
            ref={descriptionRef}
            className="mt-6 max-w-lg space-y-5 text-sm leading-7 text-[#858991] sm:text-base"
          >
            <p data-scroll-animation-item>
              I&apos;m Johan Curato, a developer based in the Philippines,
              currently pursuing a BS Computer Science degree at Caraga State
              University. I enjoy building practical applications, intuitive
              interfaces, and reliable data-driven solutions.
            </p>

            <p data-scroll-animation-item>
              Through personal projects like BH Finder, I&apos;ve developed my
              skills in mobile development, backend integration, and modern web
              technologies. I&apos;m always eager to learn and take on new
              challenges.
            </p>
          </div>

          {/*==================================================================
            //! CALL TO ACTION
          ==================================================================*/}

          <div ref={buttonRef} className="mt-8">
            <Button href="/about" variant="primary">
              More About Me
            </Button>
          </div>
        </div>

        {/*====================================================================
          //! ABOUT PORTRAIT
        ====================================================================*/}

        <div className="flex items-center justify-center border-[#41444B] lg:border-l lg:pl-16">
          <div ref={portraitRef} className="w-full max-w-[320px]">
            {/*================================================================
              //! PORTRAIT IMAGE
            ================================================================*/}

            <div
              data-scroll-animation-item
              className="overflow-hidden rounded-lg"
            >
              <Image
                src="/images/about/aboutSection/About%20Picture.png"
                alt="Johan Curato playing guitar"
                width={544}
                height={756}
                className="h-auto w-full object-cover"
                priority={false}
              />
            </div>

            {/*================================================================
              //! PERSONAL QUOTE
            ================================================================*/}

            <div
              data-scroll-animation-item
              className="mt-4 rounded-lg border border-[#41444B] px-8 py-6"
            >
              <span className="block text-3xl leading-none text-[#F5F5F6]">
                “
              </span>

              <p className="mt-2 text-xs leading-[1.35] font-medium text-[#F5F5F6]">
                I believe in continuous learning and building solutions that
                create real value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
