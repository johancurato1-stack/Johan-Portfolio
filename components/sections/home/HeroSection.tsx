/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import Button from "@/components/ui/Button";

//============================================================================
//! HERO SECTION
//============================================================================

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-1 pb-8 sm:px-10 sm:pt-5 sm:pb-8 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:px-12 lg:pt-8 lg:pb-12">
        {/*====================================================================
          //! HERO CONTENT
        ====================================================================*/}

        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              HELLO, I&apos;M JOHAN CURATO
            </p>
          </div>

          <h1 className="max-w-2xl text-4xl font-medium leading-[1.12] tracking-tight text-[#F5F5F6] sm:text-5xl lg:text-6xl">
            Building ideas into
            <span className="block text-[#B9BEC7]">functional digital</span>
            experiences.
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#858991] sm:text-base">
            I&apos;m a developer focused on building practical digital solutions
            through thoughtful interfaces, reliable backend systems, and
            continuous learning.
          </p>

          {/*==================================================================
            //! CALL TO ACTION
          ==================================================================*/}

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary">
              Explore my Work
            </Button>

            <Button
              href="https://github.com/johancurato1-stack"
              variant="secondary"
              external
            >
              View GitHub
            </Button>
          </div>
        </div>

        {/*====================================================================
          //! HERO PROFILE
        ====================================================================*/}

        <div className="relative mx-auto flex h-[420px] w-full max-w-xl items-end justify-center sm:h-[520px] lg:h-[640px]">
          <Image
            src="/images/Hero%20Profile.png"
            alt="Portrait of Johan Curato"
            width={1000}
            height={1200}
            priority
            className="h-full w-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
