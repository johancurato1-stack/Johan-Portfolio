/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";

//============================================================================
//! NAVBAR
//============================================================================

export default function Navbar() {
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
            href="#home"
            aria-label="Johan Curato - Home"
            className="relative flex h-14 w-16 shrink-0 items-center justify-center"
          >
            <Image
              src="/images/Main%20Logo.png"
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
              <a
                href="#home"
                aria-current="page"
                className="relative py-2 text-[#F5F5F6] transition-colors hover:text-white"
              >
                Home
                <span className="absolute inset-x-0 bottom-1 h-[2px] bg-[#E0E2E6]" />
              </a>

              <a
                href="#about"
                className="py-2 text-[#858991] transition-colors hover:text-[#F5F5F6]"
              >
                About
              </a>

              <a
                href="#projects"
                className="py-2 text-[#858991] transition-colors hover:text-[#F5F5F6]"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="py-2 text-[#858991] transition-colors hover:text-[#F5F5F6]"
              >
                Contact
              </a>
            </div>

            {/*================================================================
              //! CONTACT BUTTON
            ================================================================*/}

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#E0E2E6] px-6 py-2.5 text-sm font-medium !text-[#151619] transition-colors hover:bg-white"
            >
              Let&apos;s talk
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
