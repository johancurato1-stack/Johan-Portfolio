"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useRef } from "react";

import IconContainer from "@/components/ui/IconContainer";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import { services } from "./ServicesData";

//============================================================================
//! SERVICE ICON
//============================================================================

function ServiceIcon({ type }: { type: string }) {
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
      {type === "mobile" && (
        <>
          <rect x="6.5" y="2.5" width="11" height="19" rx="2" />
          <path d="M10 18.5h4" />
        </>
      )}

      {type === "database" && (
        <>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </>
      )}

      {type === "code" && (
        <>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 5-4 14" />
        </>
      )}
    </svg>
  );
}

//============================================================================
//! SERVICES SECTION
//============================================================================

export default function ServicesSection() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0);
  useScrollAnimation(cardsRef, 150, 120);

  return (
    <section id="services">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 -mt-3 pb-16 sm:px-10 lg:grid-cols-[0.75fr_1.75fr] lg:items-center lg:gap-12 lg:px-12 lg:pb-20">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div ref={introductionRef}>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              SERVICES
            </p>
          </div>

          <h2 className="text-3xl font-medium tracking-tight text-[#F5F5F6] sm:text-4xl">
            What I Offer
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-[#858991]">
            Practical development services focused on building useful digital
            solutions through modern technologies.
          </p>
        </div>

        {/*====================================================================
          //! SERVICE CARDS
        ====================================================================*/}

        <div
          ref={cardsRef}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => (
            <article
              key={service.title}
              data-scroll-animation-item
              className="group flex min-h-[270px] flex-col rounded-xl border border-[#41444B]/80 bg-[#202226]/60 p-5 transition-colors duration-300 hover:border-[#858991]"
            >
              {/*================================================================
                //! SERVICE ICON
              ================================================================*/}

              <IconContainer>
                <ServiceIcon type={service.icon} />
              </IconContainer>

              {/*================================================================
                //! SERVICE CONTENT
              ================================================================*/}

              <h3 className="mt-6 min-h-10 text-sm font-medium text-[#E0E2E6]">
                {service.title}
              </h3>

              <p className="mt-3 min-h-[72px] text-xs leading-6 text-[#858991]">
                {service.description}
              </p>

              {/*================================================================
                //! SERVICE LINK
              ================================================================*/}

              <a
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm text-[#B9BEC7] transition-colors hover:text-[#F5F5F6]"
              >
                <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
