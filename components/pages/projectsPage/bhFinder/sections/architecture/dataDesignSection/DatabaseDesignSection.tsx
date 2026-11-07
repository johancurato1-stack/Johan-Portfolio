"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useRef } from "react";

import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import DatabaseSchemaViewer from "./components/DatabaseSchemaViewer";

//============================================================================
//! DATABASE DESIGN SECTION
//============================================================================

export default function DatabaseDesignSection() {
  const introductionRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0);

  return (
    <section
      id="database-design"
      className="relative px-6 pt-0 pb-10 sm:px-10 sm:pt-2 lg:px-12 lg:pt-2 lg:pb-12"
    >
      <div className="mx-auto max-w-7xl">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div ref={introductionRef}>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              DATABASE DESIGN
            </p>
          </div>

          {/*==================================================================
            //! SECTION HEADING
          ==================================================================*/}

          <h2 className="text-3xl font-medium tracking-tight text-[#858991] sm:text-4xl">
            Database <span className="text-[#F5F5F6]">Design</span>
          </h2>

          {/*==================================================================
            //! SECTION DESCRIPTION
          ==================================================================*/}

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#858991]">
            A relational PostgreSQL database designed to support property
            management, user roles, and real-time communication.
          </p>
        </div>

        {/*====================================================================
          //! DATABASE SCHEMA VIEWER
        ====================================================================*/}

        <div className="mt-7 aspect-[2.18/1] min-h-[248px] w-full overflow-hidden rounded-lg border border-[#41444B]/70 bg-[#111214] shadow-[inset_0_0_24px_rgba(0,0,0,0.35)]">
          <DatabaseSchemaViewer />
        </div>
      </div>
    </section>
  );
}
