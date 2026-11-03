"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useEffect, type RefObject } from "react";

//============================================================================
//! SCROLL ANIMATION
//============================================================================

export default function useScrollAnimation<T extends HTMLElement>(
  ref: RefObject<T | null>,
  delay: number = 0,
  stagger: number = 0,
) {
  //============================================================================
  //! ANIMATION HANDLER
  //============================================================================

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    let animations: Animation[] = [];
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    //============================================================================
    //! INITIALIZE ANIMATION
    //============================================================================

    const initializeAnimation = () => {
      if (animations.length > 0) return;

      const targets = Array.from(
        element.querySelectorAll<HTMLElement>("[data-scroll-animation-item]"),
      );

      const animatedElements = targets.length > 0 ? targets : [element];

      //============================================================================
      //! INITIAL VIEWPORT CHECK
      //============================================================================

      const rect = element.getBoundingClientRect();

      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = document.documentElement.clientHeight;

      const intersectionWidth = Math.max(
        0,
        Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0),
      );

      const intersectionHeight = Math.max(
        0,
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0),
      );

      const elementArea = rect.width * rect.height;
      const intersectionArea = intersectionWidth * intersectionHeight;

      const initialIntersectionRatio =
        elementArea > 0 ? intersectionArea / elementArea : 0;

      const initiallyVisible = initialIntersectionRatio >= 0.15;

      //============================================================================
      //! CREATE ANIMATIONS
      //============================================================================

      animations = animatedElements.map((target, index) => {
        const animationDelay = delay + index * stagger;

        const animation = target.animate(
          [
            {
              opacity: 0,
              transform: "translateY(24px)",
            },
            {
              opacity: 1,
              transform: "translateY(0px)",
            },
          ],
          {
            duration: 700,
            delay: animationDelay,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "both",
          },
        );

        animation.pause();

        // Start visible elements at their completed animation state.
        animation.currentTime = initiallyVisible ? animationDelay + 700 : 0;

        return animation;
      });

      //============================================================================
      //! VIEWPORT OBSERVER
      //============================================================================

      let isInViewport = initiallyVisible;

      observer = new IntersectionObserver(
        ([entry]) => {
          const intersectionRatio = entry.intersectionRatio;

          //============================================================================
          //! ENTER VIEWPORT
          //============================================================================

          if (!isInViewport && intersectionRatio >= 0.2) {
            isInViewport = true;

            animations.forEach((animation) => {
              animation.playbackRate = 1;
              animation.play();
            });
          }

          //============================================================================
          //! EXIT VIEWPORT
          //============================================================================
          else if (isInViewport && intersectionRatio <= 0.05) {
            isInViewport = false;

            animations.forEach((animation) => {
              animation.reverse();
            });
          }
        },
        {
          threshold: [0.05, 0.2],
        },
      );

      observer.observe(element);
    };

    //============================================================================
    //! PRELOADER CHECK
    //============================================================================

    const preloaderState = document.documentElement.dataset.preloader;

    if (preloaderState === "skip" || preloaderState === "done") {
      initializeAnimation();
    } else {
      mutationObserver = new MutationObserver(() => {
        const state = document.documentElement.dataset.preloader;

        if (state === "skip" || state === "done") {
          initializeAnimation();
          mutationObserver?.disconnect();
        }
      });

      mutationObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-preloader"],
      });
    }

    //============================================================================
    //! CLEANUP
    //============================================================================

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();

      animations.forEach((animation) => animation.cancel());
    };
  }, [ref, delay, stagger]);
}
