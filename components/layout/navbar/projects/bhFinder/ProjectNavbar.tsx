"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

//============================================================================
//! NAVIGATION LINKS
//============================================================================

const navLinks = [
  { label: "Overview", href: "#project-overview", id: "project-overview" },
  {
    label: "Product",
    href: "#product-experience",
    id: "product-experience",
  },
  {
    label: "Architecture",
    href: "#system-architecture",
    id: "system-architecture",
  },
  {
    label: "Engineering",
    href: "#database-design",
    id: "database-design",
  },
  { label: "Roadmap", href: "#scalability", id: "scalability" },
];

//============================================================================
//! NAVBAR
//============================================================================

export default function ProjectNavbar() {
  const router = useRouter();

  const [activeSection, setActiveSection] = useState("project-overview");
  const [hasEntryPoint, setHasEntryPoint] = useState(false);

  //============================================================================
  //! CHECK PREVIOUS ENTRY POINT
  //============================================================================

  useEffect(() => {
    const entryPoint = sessionStorage.getItem("bh-finder-entry");

    if (entryPoint === "true") {
      setHasEntryPoint(true);
      sessionStorage.removeItem("bh-finder-entry");
    }
  }, []);

  //============================================================================
  //! BACK NAVIGATION HANDLER
  //============================================================================

  const handleBackNavigation = useCallback(() => {
    if (hasEntryPoint) {
      router.back();
      return;
    }

    router.push("/");
  }, [hasEntryPoint, router]);

  //============================================================================
  //! NAVIGATION HANDLER
  //============================================================================

  const handleNavigation = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const targetPosition =
      section.getBoundingClientRect().top + window.scrollY - 88;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });

    setActiveSection(sectionId);
  }, []);

  //============================================================================
  //! UPDATE ACTIVE SECTION
  //============================================================================

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 120;

    const pageBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    if (pageBottom) {
      setActiveSection("scalability");
      return;
    }

    let currentSection = "project-overview";

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);

      if (
        section &&
        section.getBoundingClientRect().top + window.scrollY <= scrollPosition
      ) {
        currentSection = link.id;
      }
    });

    setActiveSection(currentSection);
  }, []);

  //============================================================================
  //! SCROLL-AWARE NAVIGATION
  //============================================================================

  useEffect(() => {
    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [updateActiveSection]);

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
            href="/#home"
            aria-label="Johan Curato - Home"
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
            //! NAVIGATION AND BACK BUTTON
          ==================================================================*/}

          <div className="ml-auto flex items-center gap-6 lg:gap-10">
            {/*================================================================
              //! NAVIGATION LINKS
            ================================================================*/}

            <div className="hidden items-center gap-7 text-sm md:flex lg:gap-10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
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
              //! BACK TO PROJECTS BUTTON
            ================================================================*/}

            <button
              type="button"
              onClick={handleBackNavigation}
              className="inline-flex items-center gap-2 rounded-full border border-[#41444B] px-5 py-2.5 text-sm font-medium text-[#B9BEC7] transition-colors duration-300 hover:border-[#B9BEC7] hover:text-[#F5F5F6]"
            >
              <span aria-hidden="true">←</span>
              Back to Projects
            </button>
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
