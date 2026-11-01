/*============================================================================
 //! IMPORTS
============================================================================*/

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/home/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import FeaturedSection from "@/components/sections/home/FeaturedSection";

import AboutSection from "@/components/sections/about/AboutSection";
import SkillsSection from "@/components/sections/about/SkillsSection";

import ExperienceSection from "@/components/sections/experience/ExperienceSection";
import ProjectSection from "@/components/sections/projects/ProjectSection";

//============================================================================
//! HOME PAGE
//============================================================================

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-[#F5F5F6]">
      {/*======================================================================
        //! NAVIGATION
      ======================================================================*/}

      <Navbar />

      {/*======================================================================
        //! HOME SECTIONS
      ======================================================================*/}

      <HeroSection />
      <ServicesSection />
      <FeaturedSection />

      {/*======================================================================
        //! ABOUT SECTION
      ======================================================================*/}

      <AboutSection />
      <SkillsSection />

      {/*======================================================================
        //! EXPERIENCE SECTION
      ======================================================================*/}

      <ExperienceSection />

      {/*======================================================================
        //! PROJECTS SECTION
      ======================================================================*/}

      <ProjectSection />

      {/*======================================================================
        //! FOOTER
      ======================================================================*/}

      <Footer />
    </main>
  );
}
