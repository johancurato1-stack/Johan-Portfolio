"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { consumePendingRestoration } from "@/lib/navigation/navigationHistory";

//============================================================================
//! NAVIGATION RESTORATION
//============================================================================

export default function NavigationRestoration() {
  const pathname = usePathname();

  //============================================================================
  //! RESTORE PREVIOUS SCROLL POSITION
  //============================================================================

  useEffect(() => {
    let firstFrame: number | null = null;
    let secondFrame: number | null = null;

    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        const scrollPosition = consumePendingRestoration(pathname);

        if (scrollPosition === null) return;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      });
    });

    return () => {
      if (firstFrame !== null) {
        cancelAnimationFrame(firstFrame);
      }

      if (secondFrame !== null) {
        cancelAnimationFrame(secondFrame);
      }
    };
  }, [pathname]);

  return null;
}
