/*============================================================================
 //! IMPORTS
============================================================================*/

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

//============================================================================
//! CONTACT SECTION
//============================================================================

export default function ContactSection() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-36 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20 lg:px-12 lg:pt-20 lg:pb-44">
        {/*====================================================================
          //! CONTACT INFORMATION
        ====================================================================*/}

        <ContactInfo />

        {/*====================================================================
          //! CONTACT FORM
        ====================================================================*/}

        <ContactForm />
      </div>
    </section>
  );
}
