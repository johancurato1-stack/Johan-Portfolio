"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/MainButton";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

//============================================================================
//! CONCLUSION SECTION
//============================================================================

export default function ConclusionSection() {
  const router = useRouter();

  const introductionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(introductionRef, 0);
  useScrollAnimation(headingRef, 150);
  useScrollAnimation(imageRef, 200);
  useScrollAnimation(contentRef, 250);

  //============================================================================
  //! EXPLORE OTHER PROJECTS NAVIGATION
  //============================================================================

  const handleExploreProjects = () => {
    sessionStorage.setItem("portfolio:pending-navigation", "projects");

    router.push("/");
  };

  return (
    <section
      id="conclusion"
      className="relative border-t border-[#41444B] bg-[#111214] px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div ref={introductionRef} className="mb-7 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

          <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
            CONCLUSION
          </p>
        </div>

        {/*====================================================================
          //! CONCLUSION CONTENT
        ====================================================================*/}

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
          {/*==================================================================
            //! MOBILE APP MOCKUP
          ==================================================================*/}

          <div ref={imageRef} className="flex items-center justify-center">
            <Image
              src="/images/projectsPage/bhFinder/sections/roadmap/conclusionSection/BH%20Finder%20Mobile%20App%20Mockup%208.png"
              alt="BH Finder mobile application mockup"
              width={800}
              height={900}
              className="h-auto w-full max-w-[340px] rotate-[-16deg] object-contain"
            />
          </div>

          {/*==================================================================
            //! PROJECT OUTCOME AND REFLECTION
          ==================================================================*/}

          <div ref={contentRef}>
            <h2
              ref={headingRef}
              className="text-3xl leading-[1.12] font-medium tracking-tight text-[#858991] sm:text-4xl"
            >
              Project Outcome{" "}
              <span className="text-[#F5F5F6]">&amp; Reflection</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#858991]">
              BH Finder is a real-world full-stack project that allowed me to
              apply my skills in mobile development, backend design, and system
              architecture. It&apos;s still in development with the messaging
              system as the last major core feature, but it already demonstrates
              a complete scalable foundation for a boarding house platform.
            </p>

            {/*================================================================
              //! KEY TAKEAWAYS
            ================================================================*/}

            <div className="mt-8">
              <h3 className="text-sm font-medium text-[#F5F5F6]">
                Key Takeaways
              </h3>

              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3 text-sm leading-6 text-[#858991]">
                  <span className="mt-0.5 text-[#B9BEC7]">✓</span>
                  <span>
                    Designed and built a multi-role application (tenant,
                    landlord, admin)
                  </span>
                </li>

                <li className="flex items-start gap-3 text-sm leading-6 text-[#858991]">
                  <span className="mt-0.5 text-[#B9BEC7]">✓</span>
                  <span>
                    Applied a clean and maintainable architecture (Repository
                    Pattern)
                  </span>
                </li>

                <li className="flex items-start gap-3 text-sm leading-6 text-[#858991]">
                  <span className="mt-0.5 text-[#B9BEC7]">✓</span>
                  <span>
                    Implemented secure and role-based backend using Supabase
                  </span>
                </li>

                <li className="flex items-start gap-3 text-sm leading-6 text-[#858991]">
                  <span className="mt-0.5 text-[#B9BEC7]">✓</span>
                  <span>
                    Gained deeper experience in database design and complex
                    features like messaging and inquiries
                  </span>
                </li>
              </ul>
            </div>

            {/*================================================================
              //! PROJECT ACTIONS
            ================================================================*/}

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                href="https://github.com/johancurato1-stack"
                variant="primary"
                external
              >
                View Repository
              </Button>

              <Button
                href="/"
                variant="secondary"
                onClick={handleExploreProjects}
              >
                Explore Other Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
