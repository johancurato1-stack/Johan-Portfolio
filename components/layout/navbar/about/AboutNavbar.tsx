"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { preparePreviousLocation } from "@/lib/navigation/navigationHistory";

//============================================================================
//! NAVIGATION LINKS
//============================================================================

const navLinks = [
  { label: "About", href: "#about-me", id: "about-me" },
  { label: "Story", href: "#my-story", id: "my-story" },
  {
    label: "Beyond",
    href: "#beyond-the-screen",
    id: "beyond-the-screen",
  },
  {
    label: "Perspective",
    href: "#my-perspective",
    id: "my-perspective",
  },
  {
    label: "Future",
    href: "#looking-ahead",
    id: "looking-ahead",
  },
];

//============================================================================
//! NAVIGATION SCROLL OFFSETS
//============================================================================

const sectionOffsets: Record<string, number> = {
  "about-me": 88,
  "my-story": 88,
  "beyond-the-screen": 88,
  "my-perspective": 88,
  "looking-ahead": 88,
};

//============================================================================
//! NAVBAR
//============================================================================

export default function AboutNavbar() {
  const router = useRouter();

  const [activeSection, setActiveSection] = useState("about-me");

  const isNavigating = useRef(false);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  //============================================================================
  //! HOME NAVIGATION HANDLER
  //============================================================================

  const handleHomeNavigation = useCallback(() => {
    router.push("/");
  }, [router]);

  //============================================================================
  //! SMART BACK NAVIGATION HANDLER
  //============================================================================

  const handleBackNavigation = useCallback(() => {
    const previousLocation = preparePreviousLocation();

    if (previousLocation) {
      router.push(previousLocation.pathname);
      return;
    }

    //============================================================================
    //! FALLBACK NAVIGATION
    //============================================================================

    router.push("/");
  }, [router]);

  //============================================================================
  //! UPDATE ACTIVE SECTION
  //============================================================================

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 120;

    const pageBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    if (pageBottom) {
      setActiveSection("looking-ahead");
      return;
    }

    let currentSection = "about-me";

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
  //! NAVIGATION HANDLER
  //============================================================================

  const handleNavigation = useCallback(
    (sectionId: string) => {
      const section = document.getElementById(sectionId);

      if (!section) return;

      if (navigationTimer.current) {
        clearTimeout(navigationTimer.current);
        navigationTimer.current = null;
      }

      isNavigating.current = true;
      setActiveSection(sectionId);

      const targetPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        (sectionOffsets[sectionId] ?? 88);

      const destination = Math.max(0, targetPosition);

      if (Math.abs(window.scrollY - destination) < 2) {
        isNavigating.current = false;
        updateActiveSection();
        return;
      }

      window.scrollTo({
        top: destination,
        behavior: "smooth",
      });
    },
    [updateActiveSection],
  );

  //============================================================================
  //! FOOTER NAVIGATION EVENT
  //============================================================================

  useEffect(() => {
    const handleFooterNavigation = (event: Event) => {
      const sectionId = (event as CustomEvent<string>).detail;

      if (typeof sectionId === "string") {
        handleNavigation(sectionId);
      }
    };

    window.addEventListener("portfolio:about-navigate", handleFooterNavigation);

    return () => {
      window.removeEventListener(
        "portfolio:about-navigate",
        handleFooterNavigation,
      );
    };
  }, [handleNavigation]);

  //============================================================================
  //! NAVIGATION COMPLETION
  //============================================================================

  const finishNavigation = useCallback(() => {
    if (navigationTimer.current) {
      clearTimeout(navigationTimer.current);
      navigationTimer.current = null;
    }

    isNavigating.current = false;
    updateActiveSection();
  }, [updateActiveSection]);

  //============================================================================
  //! SCROLL-AWARE NAVIGATION
  //============================================================================

  useEffect(() => {
    const handleScroll = () => {
      if (!isNavigating.current) {
        updateActiveSection();
        return;
      }

      if (navigationTimer.current) {
        clearTimeout(navigationTimer.current);
      }

      navigationTimer.current = setTimeout(() => {
        finishNavigation();
      }, 200);
    };

    const handleScrollEnd = () => {
      if (isNavigating.current) {
        finishNavigation();
      } else {
        updateActiveSection();
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);

      if (navigationTimer.current) {
        clearTimeout(navigationTimer.current);
      }
    };
  }, [finishNavigation, updateActiveSection]);

  return (
    <>
      <header
        style={{ viewTransitionName: "portfolio-navbar" }}
        className="fixed inset-x-0 top-0 z-50 bg-transparent"
      >
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
            href="/"
            aria-label="Johan Garcia - Home"
            onClick={(event) => {
              event.preventDefault();
              handleHomeNavigation();
            }}
            className="relative flex h-14 w-16 shrink-0 items-center justify-center"
          >
            <Image
              src="/images/others/Main%20Logo.png"
              alt="Johan Garcia logo"
              width={120}
              height={120}
              priority
              className="h-full w-full scale-125 object-contain"
            />
          </a>

          {/*==================================================================
            //! NAVIGATION AND BACK BUTTON
          ================================================================*/}

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
                      className={`absolute inset-x-0 bottom-0 h-[3px] rounded-full origin-center bg-[#E0E2E6] transition-transform duration-300 ease-in-out ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/*================================================================
              //! BACK BUTTON
            ================================================================*/}

            <button
              type="button"
              onClick={handleBackNavigation}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#41444B] px-5 py-2.5 text-sm font-medium text-[#B9BEC7] transition-colors duration-300 hover:border-[#B9BEC7] hover:text-[#F5F5F6]"
            >
              <span aria-hidden="true">←</span>
              Back
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
