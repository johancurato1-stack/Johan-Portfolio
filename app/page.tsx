/*============================================================================
 //! IMPORTS
============================================================================*/

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/home/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import FeaturedSection from "@/components/sections/home/FeaturedSection";

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
        //! FOOTER
      ======================================================================*/}

      <Footer />
    </main>
  );
}
