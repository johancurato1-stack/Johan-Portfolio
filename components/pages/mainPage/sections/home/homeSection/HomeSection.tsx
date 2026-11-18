"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Button from "@/components/ui/MainButton";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

//============================================================================
//! HERO SECTION
//============================================================================

export default function HeroSection() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const phrases = ["HELLO, I'M JOHAN GARCIA", "ASPIRING SOFTWARE ENGINEER"];

  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0);
  useScrollAnimation(headingRef, 150);
  useScrollAnimation(descriptionRef, 350);
  useScrollAnimation(buttonsRef, 450);
  useScrollAnimation(profileRef, 200);

  //============================================================================
  //! TYPEWRITER ANIMATION
  //============================================================================

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText === currentPhrase) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((previous) => (previous + 1) % phrases.length);
      }, 400);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayedText((previous) =>
            isDeleting
              ? previous.slice(0, -1)
              : currentPhrase.slice(0, previous.length + 1),
          );
        },
        isDeleting ? 40 : 85,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phraseIndex]);

  //============================================================================
  //! RENDER
  //============================================================================

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-1 pb-8 sm:px-10 sm:pt-5 sm:pb-8 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:px-12 lg:pt-8 lg:pb-12">
        {/*====================================================================
          //! HERO CONTENT
        ====================================================================*/}

        <div className="relative z-10">
          <div ref={introductionRef} className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p
              aria-label={phrases[phraseIndex]}
              className="text-[10px] font-medium tracking-[0.2em] text-[#858991]"
            >
              <span aria-hidden="true">{displayedText}</span>
              <span
                aria-hidden="true"
                className="ml-0.5 inline-block h-[10px] w-px translate-y-[1px] animate-pulse bg-[#B9BEC7]"
              />
            </p>
          </div>

          <h1
            ref={headingRef}
            className="max-w-2xl text-4xl font-medium leading-[1.12] tracking-tight text-[#F5F5F6] sm:text-5xl lg:text-6xl"
          >
            Building ideas into
            <span className="block text-[#B9BEC7]">functional digital</span>
            experiences.
          </h1>

          <p
            ref={descriptionRef}
            className="mt-6 max-w-lg text-sm leading-7 text-[#858991] sm:text-base"
          >
            I&apos;m a developer focused on building practical digital solutions
            through thoughtful interfaces, reliable backend systems, and
            continuous learning.
          </p>

          {/*==================================================================
            //! CALL TO ACTION
          ==================================================================*/}

          <div ref={buttonsRef} className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#projects"
              variant="primary"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("portfolio:navigate", {
                    detail: "projects",
                  }),
                );
              }}
            >
              Explore my Work
            </Button>

            <Button
              href="https://github.com/johancurato1-stack"
              variant="secondary"
              external
            >
              View GitHub
            </Button>
          </div>
        </div>

        {/*====================================================================
          //! HERO PROFILE
        ====================================================================*/}

        <div
          ref={profileRef}
          className="relative mx-auto flex h-[420px] w-full max-w-xl items-end justify-center sm:h-[520px] lg:h-[640px]"
        >
          <Image
            src="/images/mainPage/sections/home/homeSection/Hero%20Profile.png"
            alt="Portrait of Garcia"
            width={1000}
            height={1200}
            priority
            className="h-full w-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
