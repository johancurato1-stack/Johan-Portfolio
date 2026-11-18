"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { preparePreviousLocation } from "@/lib/navigation/navigationHistory";

//============================================================================
//! NAVBAR
//============================================================================

export default function LegalNavbar() {
  const router = useRouter();

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
            //! BACK BUTTON
          ==================================================================*/}

          <button
            type="button"
            onClick={handleBackNavigation}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#41444B] px-5 py-2.5 text-sm font-medium text-[#B9BEC7] transition-colors duration-300 hover:border-[#B9BEC7] hover:text-[#F5F5F6]"
          >
            <span aria-hidden="true">←</span>
            Back
          </button>
        </nav>
      </header>
    </>
  );
}
