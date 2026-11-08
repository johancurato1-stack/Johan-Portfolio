/*============================================================================
 //! IMPORTS
============================================================================*/

"use client";

import { useRef } from "react";

import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

//============================================================================
//! CONTACT SECTION
//============================================================================

export default function ContactSection() {
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(contactInfoRef, 0);
  useScrollAnimation(contactFormRef, 180);

  return (
    <section id="contact" className="relative">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-36 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20 lg:px-12 lg:pt-20 lg:pb-44">
        {/*====================================================================
          //! CONTACT INFORMATION
        ====================================================================*/}

        <div ref={contactInfoRef}>
          <ContactInfo />
        </div>

        {/*====================================================================
          //! CONTACT FORM
        ====================================================================*/}

        <div ref={contactFormRef}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
