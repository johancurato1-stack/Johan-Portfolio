/*============================================================================
 //! IMPORTS
============================================================================*/

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/sections/home/homeSection/HeroSection";
import ServicesSection from "../components/sections/home/servicesSection/ServicesSection";
import FeaturedSection from "../components/sections/home/featuredSection/FeaturedSection";

import AboutSection from "../components/sections/about/aboutSection/AboutSection";
import SkillsSection from "../components/sections/about/skillsSection/SkillsSection";

import ExperienceSection from "../components/sections/experience/experienceSection/ExperienceSection";
import ProjectSection from "../components/sections/projects/projectsSection/ProjectSection";

import ContactSection from "../components/sections/contact/contactSection/ContactSection";
import FAQSection from "../components/sections/faq/faqSection/FAQSection";

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
        //! CONTACT SECTION
      ======================================================================*/}

      <ContactSection />

      {/*======================================================================
        //! FAQ SECTION
      ======================================================================*/}

      <FAQSection />

      {/*======================================================================
        //! FOOTER
      ======================================================================*/}

      <Footer />
    </main>
  );
}
