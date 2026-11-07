"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useRef } from "react";

import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import BackendSecurityOverview from "./components/BackendSecurityOverview";
import BackendSecurityDiagram from "./components/BackendSecurityDiagram";
import BackendSecurityDetails from "./components/BackendSecurityDetails";

//============================================================================
//! BACKEND & SECURITY SECTION
//============================================================================

export default function BackendSecuritySection() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0);
  useScrollAnimation(contentRef, 150, 120);

  return (
    <section
      id="backend-security"
      className="relative px-6 pt-0 pb-10 sm:px-10 sm:pt-2 lg:px-12 lg:pt-7 lg:pb-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION INTRODUCTION */}
        <div ref={introductionRef}>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              BACKEND & SECURITY
            </p>
          </div>

          <h2 className="text-3xl font-medium tracking-tight text-[#F5F5F6] sm:text-4xl">
            Backend & Security
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-[#858991]">
            Built on Supabase with a secure, role-based backend that handles
            data, authentication, and real-time communication.
          </p>
        </div>

        {/* BACKEND & SECURITY CONTENT */}
        <div
          ref={contentRef}
          className="mt-7 grid gap-8 lg:mt-8 lg:grid-cols-[0.85fr_1.55fr] lg:gap-16"
        >
          {/* LEFT COLUMN */}
          <div className="relative lg:border-r lg:border-[#41444B] lg:pr-12">
            <BackendSecurityOverview />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex min-w-0 flex-col gap-2.5">
            <BackendSecurityDiagram />
            <BackendSecurityDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
