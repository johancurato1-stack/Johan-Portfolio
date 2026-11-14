"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useEffect, useRef } from "react";

import IconContainer from "@/components/ui/IconContainer";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import { beyondData, type Beyond } from "./BeyondData";

//============================================================================
//! BEYOND ICON
//============================================================================

function BeyondIcon({ type }: { type: Beyond["icon"] }) {
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
      {type === "music" && (
        <>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </>
      )}

      {type === "fitness" && (
        <>
          <path d="M6.5 6.5v11" />
          <path d="M3.5 9v6" />
          <path d="M17.5 6.5v11" />
          <path d="M20.5 9v6" />
          <path d="M6.5 12h11" />
        </>
      )}

      {type === "gaming" && (
        <>
          <path d="M6 9h12a4 4 0 0 1 3.8 5l-1 3a2 2 0 0 1-3.3 1l-2.5-2h-6l-2.5 2a2 2 0 0 1-3.3-1l-1-3A4 4 0 0 1 6 9Z" />
          <path d="M8 12v4" />
          <path d="M6 14h4" />
          <path d="M16 13h.01" />
          <path d="M18 15h.01" />
        </>
      )}

      {type === "learning" && (
        <>
          <path d="M12 7v14" />
          <path d="M3 18V5a2 2 0 0 1 2-2h4a3 3 0 0 1 3 3 3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1h-5a3 3 0 0 0-3 2 3 3 0 0 0-3-2H4a1 1 0 0 1-1-1Z" />
        </>
      )}

      {type === "writing" && (
        <>
          <path d="m16 4 4 4" />
          <path d="M4 20l4.5-1 11-11a2.83 2.83 0 0 0-4-4l-11 11L4 20Z" />
        </>
      )}
    </svg>
  );
}

//============================================================================
//! BEYOND CARD
//============================================================================

function BeyondCard({ item }: { item: Beyond }) {
  return (
    <article
      data-scroll-animation-item
      className="group flex min-h-[270px] w-[220px] shrink-0 flex-col rounded-xl border border-[#41444B]/80 bg-[#202226]/60 p-5 transition-colors duration-300 hover:border-[#858991]"
    >
      {/*====================================================================
        //! BEYOND ICON
      ====================================================================*/}

      <IconContainer>
        <BeyondIcon type={item.icon} />
      </IconContainer>

      {/*====================================================================
        //! BEYOND CONTENT
      ====================================================================*/}

      <h3 className="mt-6 min-h-10 text-sm font-medium text-[#F5F5F6]">
        {item.title}
      </h3>

      <p className="mt-3 min-h-[72px] text-xs leading-6 text-[#858991]">
        {item.description}
      </p>
    </article>
  );
}

//============================================================================
//! BEYOND SECTION
//============================================================================

export default function BeyondSection() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const secondSetRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0);
  useScrollAnimation(cardsRef, 150, 120);

  //============================================================================
  //! SMART AUTO SCROLL
  //============================================================================

  useEffect(() => {
    const container = cardsRef.current;
    const firstSet = firstSetRef.current;
    const secondSet = secondSetRef.current;

    if (!container || !firstSet || !secondSet) return;

    const interactionDelay = 5000;
    const scrollSpeed = 30;
    const wheelSmoothness = 0.12;

    let position = 0;
    let targetPosition = 0;
    let lastInteraction = 0;
    let previousFrameTime = 0;
    let animationFrame = 0;
    let isWheelAnimating = false;
    let isTouching = false;

    //======================================================================
    //! LOOP DISTANCE
    //======================================================================

    const getLoopDistance = () => {
      return (
        secondSet.getBoundingClientRect().left -
        firstSet.getBoundingClientRect().left
      );
    };

    //======================================================================
    //! NORMALIZE POSITION
    //======================================================================

    const normalizePosition = (value: number, loopDistance: number) => {
      return ((value % loopDistance) + loopDistance) % loopDistance;
    };

    //======================================================================
    //! USER INTERACTION
    //======================================================================

    const registerInteraction = () => {
      lastInteraction = Date.now();
    };

    //======================================================================
    //! MOUSE WHEEL
    //======================================================================

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const scrollAmount =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (!isWheelAnimating) {
        targetPosition = position;
      }

      targetPosition += scrollAmount;

      isWheelAnimating = true;
      registerInteraction();
    };

    //======================================================================
    //! TOUCH INTERACTION
    //======================================================================

    const handleTouchStart = () => {
      isTouching = true;
      registerInteraction();
    };

    const handleTouchEnd = () => {
      isTouching = false;

      const loopDistance = getLoopDistance();

      if (loopDistance <= 0) return;

      position = container.scrollLeft;
      targetPosition = position;

      container.scrollLeft = normalizePosition(position, loopDistance);

      position = container.scrollLeft;
      targetPosition = position;

      registerInteraction();
    };

    //======================================================================
    //! POINTER INTERACTION
    //======================================================================

    const handlePointerDown = () => {
      registerInteraction();
    };

    const handlePointerUp = () => {
      registerInteraction();
    };

    //======================================================================
    //! AUTO SCROLL + MANUAL SCROLL ANIMATION
    //======================================================================

    const animate = (timestamp: number) => {
      const loopDistance = getLoopDistance();

      if (loopDistance > 0 && !isTouching) {
        const deltaTime = previousFrameTime
          ? Math.min(timestamp - previousFrameTime, 32)
          : 16;

        const isIdle = Date.now() - lastInteraction >= interactionDelay;

        if (isWheelAnimating) {
          const difference = targetPosition - position;

          if (Math.abs(difference) < 0.5) {
            position = targetPosition;
            isWheelAnimating = false;
          } else {
            position += difference * wheelSmoothness;
          }
        } else if (isIdle) {
          position += (scrollSpeed * deltaTime) / 1000;
        }

        container.scrollLeft = normalizePosition(position, loopDistance);
      }

      previousFrameTime = timestamp;
      animationFrame = requestAnimationFrame(animate);
    };

    //======================================================================
    //! INITIAL POSITION
    //======================================================================

    const initialLoopDistance = getLoopDistance();

    if (initialLoopDistance > 0) {
      position = initialLoopDistance;
      targetPosition = initialLoopDistance;
      container.scrollLeft = normalizePosition(position, initialLoopDistance);
    }

    //======================================================================
    //! EVENT LISTENERS
    //======================================================================

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchcancel", handleTouchEnd);
    container.addEventListener("pointerdown", handlePointerDown);
    container.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("pointercancel", handlePointerUp);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchEnd);
      container.removeEventListener("pointerdown", handlePointerDown);
      container.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  return (
    <section
      id="beyond-the-screen"
      className="relative overflow-hidden border-y border-[#41444B] bg-[#111214] px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.75fr] lg:items-center lg:gap-12">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div ref={introductionRef}>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              BEYOND THE SCREEN
            </p>
          </div>

          <h2 className="text-3xl font-medium tracking-tight text-[#F5F5F6] sm:text-4xl">
            The Things That Keep Me Grounded
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-[#858991]">
            Outside of development, there are other interests and passions that
            keep me creative, motivated, and balanced.
          </p>
        </div>

        {/*====================================================================
          //! BEYOND CARDS
        ====================================================================*/}

        <div className="relative min-w-0">
          <div
            ref={cardsRef}
            className="flex overflow-x-auto overscroll-x-contain pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div ref={firstSetRef} className="flex shrink-0 gap-4 pr-4">
              {beyondData.map((item) => (
                <BeyondCard key={item.title} item={item} />
              ))}
            </div>

            <div
              ref={secondSetRef}
              className="flex shrink-0 gap-4 pr-4"
              aria-hidden="true"
            >
              {beyondData.map((item, index) => (
                <BeyondCard
                  key={`${item.title}-duplicate-${index}`}
                  item={item}
                />
              ))}
            </div>
          </div>

          {/*==================================================================
            //! LEFT GRADIENT
          ==================================================================*/}

          <div className="pointer-events-none absolute top-0 bottom-3 left-0 z-10 w-8 bg-gradient-to-r from-[#151619] to-transparent sm:w-12" />

          {/*==================================================================
            //! RIGHT GRADIENT
          ==================================================================*/}

          <div className="pointer-events-none absolute top-0 right-0 bottom-3 z-10 w-8 bg-gradient-to-l from-[#151619] to-transparent sm:w-12" />
        </div>
      </div>
    </section>
  );
}
