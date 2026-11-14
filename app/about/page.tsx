/*============================================================================
 //! IMPORTS
============================================================================*/

import { ViewTransition } from "react";

import AboutNavbar from "@/components/layout/navbar/about/AboutNavbar";
import AboutFooter from "@/components/layout/footer/about/AboutFooter";

import AboutMeSection from "@/components/pages/aboutPage/sections/about/aboutSection/AboutSection";
import StorySection from "@/components/pages/aboutPage/sections/story/storySection/StorySection";
import BeyondSection from "@/components/pages/aboutPage/sections/beyond/beyondSection/BeyondSection";
import PerspectiveSection from "@/components/pages/aboutPage/sections/perspective/perspectiveSection/PerspectiveSection";
import LookingAheadSection from "@/components/pages/aboutPage/sections/future/futureSection/lookingAheadSection/LookingAheadSection";
import FAQSection from "@/components/pages/aboutPage/sections/faq/faqSection/FAQSection";

//============================================================================
//! ABOUT PAGE
//============================================================================

export default function About() {
  return (
    <ViewTransition>
      <main className="min-h-screen overflow-hidden text-[#F5F5F6]">
        {/*====================================================================
          //! NAVIGATION
        ====================================================================*/}

        <ViewTransition default="none">
          <AboutNavbar />
        </ViewTransition>

        {/*====================================================================
          //! ABOUT SECTIONS
        ====================================================================*/}

        <AboutMeSection />

        {/*====================================================================
          //! STORY SECTIONS
        ====================================================================*/}

        <StorySection />

        {/*====================================================================
          //! BEYOND SECTIONS
        ====================================================================*/}

        <BeyondSection />

        {/*====================================================================
          //! PERSPECTIVE SECTIONS
        ====================================================================*/}

        <PerspectiveSection />

        {/*====================================================================
          //! FUTURE SECTIONS
        ====================================================================*/}

        <LookingAheadSection />

        {/*====================================================================
          //! FAQ SECTIONS
        ====================================================================*/}

        <FAQSection />

        {/*====================================================================
          //! FOOTER
        ====================================================================*/}

        <AboutFooter />
      </main>
    </ViewTransition>
  );
}
