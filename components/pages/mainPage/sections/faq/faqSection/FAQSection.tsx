"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useRef, useState } from "react";
import Link from "next/link";

import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import { faqData } from "./FAQData";

//============================================================================
//! FAQ SECTION
//============================================================================

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const contactLinkRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(labelRef, 0);
  useScrollAnimation(headingRef, 120);
  useScrollAnimation(descriptionRef, 250);
  useScrollAnimation(contactLinkRef, 350);
  useScrollAnimation(accordionRef, 150, 120);

  //============================================================================
  //! TOGGLE FAQ
  //============================================================================

  const toggleFAQ = (index: number) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="border-t border-[#41444B] bg-[#111214]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-20 pb-28 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:pt-28 lg:pb-36">
        {/*====================================================================
          //! FAQ INTRODUCTION
        ====================================================================*/}

        <div>
          <div ref={labelRef} className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
              GOT QUESTIONS?
            </p>
          </div>

          <h2
            ref={headingRef}
            className="max-w-md text-4xl leading-[1.12] font-medium tracking-tight text-[#F5F5F6] sm:text-5xl lg:text-6xl"
          >
            Frequently Asked
            <span className="block text-[#B9BEC7]">Questions.</span>
          </h2>

          <p
            ref={descriptionRef}
            className="mt-6 max-w-sm text-sm leading-7 text-[#858991] sm:text-base"
          >
            Here are some of the most common questions I get. If you don&apos;t
            find what you&apos;re looking for, feel free to reach out!
          </p>

          {/*================================================================
            //! CONTACT LINK
          ================================================================*/}

          <div ref={contactLinkRef} className="mt-8">
            <Link
              href="#contact"
              onClick={(event) => {
                event.preventDefault();

                window.dispatchEvent(
                  new CustomEvent("portfolio:navigate", {
                    detail: "contact",
                  }),
                );
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#B9BEC7] transition-colors duration-300 hover:text-[#F5F5F6]"
            >
              Get in touch
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/*====================================================================
          //! FAQ ACCORDION
        ====================================================================*/}

        <div ref={accordionRef} className="space-y-3">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                key={index}
                data-scroll-animation-item
                className="group rounded-xl border border-[#41444B]/80 bg-[#202226]/60 p-5 transition-colors duration-300 hover:border-[#858991]"
              >
                {/*================================================================
                  //! FAQ QUESTION
                ================================================================*/}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 text-left"
                >
                  <span
                    className={`text-sm font-medium transition-colors duration-300 sm:text-base ${
                      isOpen
                        ? "text-[#F5F5F6]"
                        : "text-[#E0E2E6] group-hover:text-[#F5F5F6]"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#41444B] text-[#B9BEC7]"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                {/*================================================================
                  //! FAQ ANSWER
                ================================================================*/}

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pt-4 text-sm leading-7 text-[#858991]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
