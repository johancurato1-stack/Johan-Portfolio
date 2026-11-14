"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import { useRef } from "react";

import Button from "@/components/ui/MainButton";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

//============================================================================
//! ABOUT ME SECTION
//============================================================================

export default function AboutSection() {
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(labelRef, 0);
  useScrollAnimation(headingRef, 120);
  useScrollAnimation(descriptionRef, 250, 120);
  useScrollAnimation(buttonsRef, 400);
  useScrollAnimation(portraitRef, 180, 150);
  useScrollAnimation(detailsRef, 250, 120);

  return (
    <section
      id="about-me"
      className="relative overflow-hidden px-6 pt-32 pb-16 sm:px-10 sm:pt-36 sm:pb-20 lg:px-12 lg:pt-40 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        {/*====================================================================
          //! SECTION LABEL
        ====================================================================*/}

        <div ref={labelRef} className="mb-10 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

          <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
            GET TO KNOW ME
          </p>
        </div>

        {/*====================================================================
          //! ABOUT ME CONTENT
        ====================================================================*/}

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.8fr_0.85fr] lg:gap-10">
          {/*==================================================================
            //! INTRODUCTION
          ==================================================================*/}

          <div className="relative z-10">
            <h1
              ref={headingRef}
              className="text-4xl leading-[1.12] font-medium tracking-tight text-[#F5F5F6] sm:text-5xl lg:text-6xl"
            >
              More than
              <span className="block text-[#B9BEC7]">just a developer.</span>
            </h1>

            <div
              ref={descriptionRef}
              className="mt-6 max-w-lg space-y-5 text-sm leading-7 text-[#858991] sm:text-base"
            >
              <p data-scroll-animation-item>
                I&apos;m Johan Curato, a Computer Science student and aspiring
                developer from the Philippines. I enjoy exploring ideas,
                learning new things, and turning curiosity into something
                meaningful. Beyond building digital experiences, I&apos;m
                someone who values personal growth, creativity, and the
                experiences that shape who I am.
              </p>
            </div>

            {/*================================================================
              //! CALL TO ACTION
            ================================================================*/}

            <div ref={buttonsRef} className="mt-8 flex flex-wrap gap-3">
              <Button href="#my-story" variant="primary">
                Get to Know Me
              </Button>

              <Button href="/#projects" variant="secondary">
                View My Projects
              </Button>
            </div>
          </div>

          {/*==================================================================
            //! PORTRAIT
          ==================================================================*/}

          <div ref={portraitRef} className="mx-auto w-full max-w-[340px]">
            <div
              data-scroll-animation-item
              className="relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <Image
                src="/images/aboutPage/sections/about/aboutSection/About%20Picture%202.png"
                alt="Portrait of Johan Curato"
                fill
                priority
                sizes="(max-width: 1024px) 340px, 30vw"
                className="object-cover"
              />
            </div>
          </div>

          {/*==================================================================
            //! PERSONAL DETAILS
          ==================================================================*/}

          <div ref={detailsRef} className="flex flex-col">
            <div className="border-b border-[#41444B] pb-5">
              <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
                A LITTLE ABOUT ME
              </p>

              <h2 className="mt-3 text-xl font-medium text-[#F5F5F6]">
                The person behind the screen.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-8">
              <div data-scroll-animation-item>
                <p className="text-[10px] tracking-[0.15em] text-[#858991]">
                  LOCATION
                </p>
                <p className="mt-2 text-sm font-medium text-[#F5F5F6]">
                  Philippines
                </p>
              </div>

              <div data-scroll-animation-item>
                <p className="text-[10px] tracking-[0.15em] text-[#858991]">
                  EDUCATION
                </p>
                <p className="mt-2 text-sm font-medium text-[#F5F5F6]">
                  BS Computer Science
                </p>
              </div>

              <div data-scroll-animation-item>
                <p className="text-[10px] tracking-[0.15em] text-[#858991]">
                  ASPIRATION
                </p>
                <p className="mt-2 text-sm font-medium text-[#F5F5F6]">
                  Software Developer
                </p>
              </div>

              <div data-scroll-animation-item>
                <p className="text-[10px] tracking-[0.15em] text-[#858991]">
                  INTERESTS
                </p>
                <p className="mt-2 text-sm font-medium text-[#F5F5F6]">
                  Music &amp; Technology
                </p>
              </div>
            </div>

            <div className="border-t border-[#41444B] pt-5">
              <p className="text-xs leading-6 text-[#858991]">
                Always learning, always creating, and becoming a better version
                of myself along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
