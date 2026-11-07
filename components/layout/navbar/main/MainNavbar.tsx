"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

//============================================================================
//! NAVIGATION LINKS
//============================================================================

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
];

//============================================================================
//! NAVIGATION SCROLL OFFSETS
//============================================================================

const scrollOffsets: Record<string, number> = {
  home: 64,
  about: 3,
  experience: 3,
  projects: 3,
  contact: 88,
};

//============================================================================
//! NAVBAR
//============================================================================

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const isNavigating = useRef(false);

  //============================================================================
  //! NAVIGATION HANDLER
  //============================================================================

  const handleNavigation = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section || !(sectionId in scrollOffsets)) return;

    isNavigating.current = true;
    setActiveSection(sectionId);

    const targetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      scrollOffsets[sectionId];

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  }, []);

  //============================================================================
  //! UPDATE ACTIVE SECTION
  //============================================================================

  const updateActiveSection = useCallback(() => {
    if (isNavigating.current) return;

    const scrollPosition = window.scrollY + 120;

    const pageBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    const sections = [
      ...navLinks,
      { label: "Contact", href: "#contact", id: "contact" },
    ];

    let currentSection = "home";

    if (pageBottom) {
      currentSection = "contact";
    } else {
      sections.forEach((link) => {
        const section = document.getElementById(link.id);

        if (
          section &&
          section.getBoundingClientRect().top + window.scrollY <= scrollPosition
        ) {
          currentSection = link.id;
        }
      });
    }

    setActiveSection(currentSection);
  }, []);

  //============================================================================
  //! SCROLL-AWARE NAVIGATION
  //============================================================================

  useEffect(() => {
    const handleScrollEnd = () => {
      isNavigating.current = false;
      updateActiveSection();
    };

    const handleExternalNavigation = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      handleNavigation(customEvent.detail);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("scrollend", handleScrollEnd);

    window.addEventListener("portfolio:navigate", handleExternalNavigation);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("scrollend", handleScrollEnd);

      window.removeEventListener(
        "portfolio:navigate",
        handleExternalNavigation,
      );
    };
  }, [handleNavigation, updateActiveSection]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
        {/*==================================================================
          //! NAVBAR GRADIENT
        ==================================================================*/}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-[#151619]/95 via-[#151619]/65 to-transparent"
        />

        <nav className="flex h-16 items-center justify-between px-6 sm:px-8 lg:px-12">
          {/*==================================================================
            //! LOGO
          ==================================================================*/}

          <a
            id="navbar-logo"
            href="#home"
            aria-label="Johan Curato - Home"
            onClick={(event) => {
              event.preventDefault();
              handleNavigation("home");
            }}
            className="relative flex h-14 w-16 shrink-0 items-center justify-center"
          >
            <Image
              src="/images/others/Main%20Logo.png"
              alt="Johan Curato logo"
              width={120}
              height={120}
              priority
              className="h-full w-full scale-125 object-contain"
            />
          </a>

          {/*==================================================================
            //! NAVIGATION AND CONTACT
          ==================================================================*/}

          <div className="ml-auto flex items-center gap-10 lg:gap-12">
            {/*================================================================
              //! NAVIGATION LINKS
            ================================================================*/}

            <div className="hidden items-center gap-10 text-sm md:flex lg:gap-14">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigation(link.id);
                    }}
                    className={`relative py-2 transition-colors duration-300 ${
                      isActive
                        ? "text-[#F5F5F6]"
                        : "text-[#858991] hover:text-[#F5F5F6]"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute inset-x-0 bottom-1 h-[2px] origin-center bg-[#E0E2E6] transition-transform duration-300 ease-in-out ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/*================================================================
              //! CONTACT BUTTON
            ================================================================*/}

            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                handleNavigation("contact");
              }}
              aria-current={activeSection === "contact" ? "page" : undefined}
              className="inline-flex items-center gap-3 rounded-full bg-[#E0E2E6] px-6 py-2.5 text-sm font-medium !text-[#151619] transition-colors hover:bg-white"
            >
              Contact
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>

      {/*====================================================================
        //! NAVBAR SPACING
      ====================================================================*/}

      <div aria-hidden="true" className="h-16" />
    </>
  );
}
