/*============================================================================
 //! IMPORTS
============================================================================*/

import { ViewTransition } from "react";

import Navbar from "../components/layout/navbar/main/MainNavbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/pages/mainPage/sections/home/homeSection/HomeSection";
import ServicesSection from "../components/pages/mainPage/sections/home/servicesSection/ServicesSection";
import FeaturedSection from "../components/pages/mainPage/sections/home/featuredSection/FeaturedSection";

import AboutSection from "../components/pages/mainPage/sections/about/aboutSection/AboutSection";
import SkillsSection from "../components/pages/mainPage/sections/about/skillsSection/SkillsSection";

import ExperienceSection from "../components/pages/mainPage/sections/experience/experienceSection/ExperienceSection";
import ProjectSection from "../components/pages/mainPage/sections/projects/projectsSection/ProjectSection";

import ContactSection from "../components/pages/mainPage/sections/contact/contactSection/ContactSection";
import FAQSection from "../components/pages/mainPage/sections/faq/faqSection/FAQSection";

//============================================================================
//! HOME PAGE
//============================================================================

export default function Home() {
  return (
    <ViewTransition>
      <main className="min-h-screen overflow-hidden text-[#F5F5F6]">
        {/*======================================================================
          //! NAVIGATION
        ======================================================================*/}

        <ViewTransition default="none">
          <Navbar />
        </ViewTransition>

        {/*======================================================================
          //! HOME SECTIONS
        ======================================================================*/}

        <HeroSection />
        <ServicesSection />
        <FeaturedSection />

        {/*======================================================================
          //! ABOUT SECTIONS
        ======================================================================*/}

        <AboutSection />
        <SkillsSection />

        {/*======================================================================
          //! EXPERIENCE SECTIONS
        ======================================================================*/}

        <ExperienceSection />

        {/*======================================================================
          //! PROJECTS SECTIONS
        ======================================================================*/}

        <ProjectSection />

        {/*======================================================================
          //! CONTACT SECTIONS
        ======================================================================*/}

        <ContactSection />

        {/*======================================================================
          //! FAQ SECTIONS
        ======================================================================*/}

        <FAQSection />

        {/*======================================================================
          //! FOOTER
        ======================================================================*/}

        <Footer />
      </main>
    </ViewTransition>
  );
}
