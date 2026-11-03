"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

//============================================================================
//! PRELOADER
//============================================================================

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const logoRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const informationRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! LOADING SCREEN
  //============================================================================

  useEffect(() => {
    if (document.documentElement.dataset.preloader === "skip") {
      setIsVisible(false);
      return;
    }

    const logo = logoRef.current;
    const background = backgroundRef.current;
    const information = informationRef.current;

    if (!logo || !background || !information) return;

    let currentProgress = 0;
    let transitionTimeout: ReturnType<typeof setTimeout>;
    let breathingAnimation: Animation | null = null;

    const startTransition = async () => {
      const navbarLogo = document.getElementById("navbar-logo");

      if (!navbarLogo) {
        document.documentElement.dataset.preloader = "done";
        setIsVisible(false);
        return;
      }

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      //============================================================================
      //! LOADING INFORMATION FADE
      //============================================================================

      const informationAnimation = information.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        {
          duration: reducedMotion ? 0 : 450,
          easing: "ease-out",
          fill: "forwards",
        },
      );

      await informationAnimation.finished;

      //============================================================================
      //! LOGO BREATHING EFFECT
      //============================================================================

      if (!reducedMotion) {
        breathingAnimation = logo.animate(
          [
            { transform: "scale(1)" },
            { transform: "scale(1.12)" },
            { transform: "scale(1)" },
          ],
          {
            duration: 900,
            iterations: 1,
            easing: "ease-in-out",
            fill: "forwards",
          },
        );

        await breathingAnimation.finished;
      }

      //============================================================================
      //! LOGO TRAVEL TRANSITION
      //============================================================================

      const start = logo.getBoundingClientRect();
      const target = navbarLogo.getBoundingClientRect();

      const deltaX =
        target.left + target.width / 2 - (start.left + start.width / 2);

      const deltaY =
        target.top + target.height / 2 - (start.top + start.height / 2);

      const scaleX = target.width / start.width;
      const scaleY = target.height / start.height;

      const duration = reducedMotion ? 0 : 1100;

      const logoAnimation = logo.animate(
        [
          {
            transform: "translate(0px, 0px) scale(1)",
          },
          {
            transform: `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`,
          },
        ],
        {
          duration,
          easing: "cubic-bezier(0.76, 0, 0.24, 1)",
          fill: "forwards",
        },
      );

      const backgroundAnimation = background.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        {
          duration,
          easing: "cubic-bezier(0.76, 0, 0.24, 1)",
          fill: "forwards",
        },
      );

      await Promise.all([logoAnimation.finished, backgroundAnimation.finished]);

      document.documentElement.dataset.preloader = "done";
      setIsVisible(false);
    };

    //============================================================================
    //! LOADING PROGRESS
    //============================================================================

    const progressInterval = setInterval(() => {
      currentProgress += 1;

      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(progressInterval);

        transitionTimeout = setTimeout(() => {
          startTransition();
        }, 300);
      }
    }, 18);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(transitionTimeout);
      breathingAnimation?.cancel();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="portfolio-preloader"
      className="pointer-events-auto fixed inset-0 z-[100] flex items-center justify-center"
    >
      {/*====================================================================
        //! BACKGROUND
      ====================================================================*/}

      <div ref={backgroundRef} className="absolute inset-0 bg-[#111214]" />

      {/*====================================================================
        //! CENTERED LOADING CONTENT
      ====================================================================*/}

      <div className="relative z-[101] flex flex-col items-center">
        {/*==================================================================
          //! TRAVELING LOGO
        ==================================================================*/}

        <div
          ref={logoRef}
          className="relative flex h-20 w-24 shrink-0 items-center justify-center"
        >
          <Image
            src="/images/others/Main%20Logo.png"
            alt="Johan Curato"
            width={180}
            height={180}
            priority
            className="h-full w-full scale-125 object-contain"
          />
        </div>

        {/*==================================================================
          //! LOADING INFORMATION
        ==================================================================*/}

        <div
          ref={informationRef}
          className="mt-6 flex w-64 flex-col items-center"
        >
          {/*================================================================
            //! LOADING BAR
          ================================================================*/}

          <div className="h-[3px] w-full overflow-hidden bg-[#202226]">
            <div
              className="h-full bg-[#E0E2E6] transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/*================================================================
            //! LOADING TEXT
          ================================================================*/}

          <div className="mt-4 flex w-full items-center justify-between">
            <p className="text-xs text-[#858991]">
              Building digital experiences.
            </p>

            <span className="text-xs tabular-nums text-[#B9BEC7]">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
