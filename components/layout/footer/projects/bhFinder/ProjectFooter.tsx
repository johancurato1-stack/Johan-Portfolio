"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Link from "next/link";
import { useRef } from "react";

import useScrollAnimation from "@/components/hooks/useScrollAnimation";

//============================================================================
//! FOOTER DATA
//============================================================================

const exploreLinks = [
  { label: "Overview", id: "project-overview" },
  { label: "Product", id: "product-experience" },
  { label: "Architecture", id: "system-architecture" },
  { label: "Engineering", id: "challenges-solutions" },
  { label: "Conclusion", id: "conclusion" },
];

const projectLinks = [
  {
    label: "GitHub",
    href: "https://github.com/johancurato1-stack",
  },
];

const rightsLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

//============================================================================
//! PROJECT FOOTER
//============================================================================

export default function ProjectFooter() {
  const contentRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(contentRef, 0, 120);
  useScrollAnimation(bottomRef, 200);

  //============================================================================
  //! NAVIGATION HANDLER
  //============================================================================

  const handleNavigation = (sectionId: string) => {
    window.dispatchEvent(
      new CustomEvent("portfolio:project-navigate", {
        detail: sectionId,
      }),
    );
  };

  //============================================================================
  //! BACK TO TOP HANDLER
  //============================================================================

  const handleBackToTop = () => {
    handleNavigation("project-overview");
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#111214]">
      {/*====================================================================
        //! FOOTER GRADIENT
      ====================================================================*/}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-[#151619]/95 via-[#151619]/65 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-7 sm:px-10 lg:px-12 lg:pt-16">
        {/*====================================================================
          //! FOOTER CONTENT
        ====================================================================*/}

        <div
          ref={contentRef}
          className="flex flex-wrap justify-between gap-x-8 gap-y-8"
        >
          {/*==================================================================
            //! EXPLORE
          ==================================================================*/}

          <div data-scroll-animation-item>
            <h3 className="text-xs font-semibold tracking-[0.12em] text-[#858991]">
              EXPLORE
            </h3>

            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigation(link.id);
                    }}
                    className="text-xs text-[#858991] transition-colors duration-300 hover:text-[#E0E2E6]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*==================================================================
            //! FOLLOW PROJECT
          ==================================================================*/}

          <div data-scroll-animation-item>
            <h3 className="text-xs font-semibold tracking-[0.12em] text-[#858991]">
              FOLLOW PROJECT
            </h3>

            <ul className="mt-4 space-y-2.5">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#858991] transition-colors duration-300 hover:text-[#E0E2E6]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*==================================================================
            //! YOUR RIGHTS
          ==================================================================*/}

          <div data-scroll-animation-item>
            <h3 className="text-xs font-semibold tracking-[0.12em] text-[#858991]">
              YOUR RIGHTS
            </h3>

            <ul className="mt-4 space-y-2.5">
              {rightsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[#858991] transition-colors duration-300 hover:text-[#E0E2E6]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*==================================================================
            //! CONTACT
          ==================================================================*/}

          <div data-scroll-animation-item>
            <h3 className="text-xs font-semibold tracking-[0.12em] text-[#858991]">
              CONTACT
            </h3>

            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();

                    sessionStorage.setItem(
                      "portfolio:pending-navigation",
                      "contact",
                    );

                    window.location.href = "/";
                  }}
                  className="text-xs text-[#858991] transition-colors duration-300 hover:text-[#E0E2E6]"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/*====================================================================
          //! FOOTER BOTTOM
        ====================================================================*/}

        <div
          ref={bottomRef}
          className="mt-12 flex items-center justify-between gap-6"
        >
          {/*==================================================================
            //! COPYRIGHT
          ==================================================================*/}

          <p className="text-xs text-[#858991]">
            © 2026 Johan Curato. All rights reserved.
          </p>

          {/*==================================================================
            //! BACK TO TOP
          ==================================================================*/}

          <button
            type="button"
            onClick={handleBackToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#41444B] text-[#B9BEC7] transition-colors duration-300 hover:border-[#858991] hover:text-[#F5F5F6]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
