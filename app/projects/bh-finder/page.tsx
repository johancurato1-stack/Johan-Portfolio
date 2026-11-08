/*============================================================================
 //! IMPORTS
============================================================================*/

import { ViewTransition } from "react";

import ProjectNavbar from "@/components/layout/navbar/projects/bhFinder/ProjectNavbar";

import IntroSection from "@/components/pages/projectsPage/bhFinder/sections/overview/introSection/IntroSection";
import ProblemSolutionSection from "@/components/pages/projectsPage/bhFinder/sections/overview/problemSolutionSection/ProblemSolutionSection";

import ProductExpSection from "@/components/pages/projectsPage/bhFinder/sections/product/productExpSection/ProductExpSection";

import SystemArchitectureSection from "@/components/pages/projectsPage/bhFinder/sections/architecture/systemArchSection/SystemArchitectureSection";
import DatabaseDesignSection from "@/components/pages/projectsPage/bhFinder/sections/architecture/dataDesignSection/DatabaseDesignSection";
import BackendSecuritySection from "@/components/pages/projectsPage/bhFinder/sections/architecture/backendSecuritySection/BackendSecuritySection";

import ChallengesSolutionSection from "@/components/pages/projectsPage/bhFinder/sections/engineering/challengesSolutionSection/ChallengesSolutionSection";

import ScalabilityFutureSection from "@/components/pages/projectsPage/bhFinder/sections/engineering/scalabilityFutureSection/ScalabilityFutureSection";
import ConclusionSection from "@/components/pages/projectsPage/bhFinder/sections/conclusion/conclusionSection/ConclusionSection";

//============================================================================
//! BH FINDER PROJECT PAGE
//============================================================================

export default function BHFinderPage() {
  return (
    <ViewTransition>
      <main className="min-h-screen overflow-hidden text-[#F5F5F6]">
        {/*======================================================================
          //! NAVIGATION
        ======================================================================*/}

        <ViewTransition default="none">
          <ProjectNavbar />
        </ViewTransition>

        {/*======================================================================
          //! OVERVIEW SECTIONS
        ======================================================================*/}

        <IntroSection />
        <ProblemSolutionSection />

        {/*======================================================================
          //! PRODUCT SECTIONS
        ======================================================================*/}

        <ProductExpSection />

        {/*======================================================================
          //! ARCHITECTURE SECTIONS
        ======================================================================*/}

        <SystemArchitectureSection />
        <DatabaseDesignSection />
        <BackendSecuritySection />

        {/*======================================================================
          //! ENGINEERING SECTIONS
        ======================================================================*/}

        <ChallengesSolutionSection />
        <ScalabilityFutureSection />

        {/*======================================================================
          //! CONCLUSION SECTIONS
        ======================================================================*/}

        <ConclusionSection />

        {/*======================================================================
          //! PROJECT SECTIONS
        ======================================================================*/}
      </main>
    </ViewTransition>
  );
}
