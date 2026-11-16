/*============================================================================
 //! IMPORTS
============================================================================*/

import type { Metadata } from "next";
import LegalNavbar from "@/components/layout/navbar/legal/LegalNavbar";

//============================================================================
//! PAGE METADATA
//============================================================================

export const metadata: Metadata = {
  title: "Terms of Service | Johan Curato",
  description:
    "Read the terms and conditions governing the use of Johan Curato's portfolio website.",
};

//============================================================================
//! TERMS OF SERVICE PAGE
//============================================================================

export default function TermsOfServicePage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      {/*====================================================================
        //! BOTTOM PAGE GRADIENT
      ====================================================================*/}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-[#151619]/95 via-[#151619]/65 to-transparent"
      />

      <div className="relative z-10">
        {/*==================================================================
          //! NAVBAR
        ==================================================================*/}

        <LegalNavbar />

        <main className="mx-auto w-full max-w-[780px] px-6 pb-24 pt-16 sm:px-8 lg:px-0">
          {/*================================================================
            //! PAGE INTRODUCTION
          ================================================================*/}

          <section className="mb-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#858991]">
              Legal / Terms
            </p>

            <h1 className="text-4xl font-medium tracking-tight text-[#F5F5F6] sm:text-5xl lg:text-[52px]">
              Terms of Service
            </h1>

            <p className="mt-4 text-xs tracking-wide text-[#858991]">
              Last Updated: November 15, 2026
            </p>

            <div className="mt-8 h-px w-full bg-[#41444B]/70" />

            <h2 className="mt-8 text-xl font-medium tracking-tight text-[#B9BEC7] sm:text-2xl">
              A few things to know.
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#858991]">
              These Terms of Service explain the conditions for accessing and
              using my portfolio website. By visiting or using this website, you
              agree to follow these terms.
            </p>
          </section>

          {/*================================================================
            //! TERMS OF SERVICE CONTENT
          ================================================================*/}

          <div className="space-y-10">
            {/*==============================================================
              //! SECTION 01 - ACCEPTANCE OF TERMS
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                01. Acceptance of Terms
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                By accessing this website, you acknowledge that you have read,
                understood, and agreed to these Terms of Service. If you do not
                agree with any part of these terms, please discontinue using the
                website.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 02 - PURPOSE OF THE WEBSITE
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                02. Purpose of This Website
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                This website serves as my personal portfolio. It is intended to
                showcase my background, skills, projects, experience, and other
                professional information.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                Visitors may browse the website, explore the projects presented,
                and use the contact form for professional inquiries,
                collaborations, or other relevant communication.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 03 - INTELLECTUAL PROPERTY
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                03. Intellectual Property
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                Unless otherwise stated, the original content on this website,
                including its design, text, graphics, images, and portfolio
                materials, belongs to Johan Garcia or is used with appropriate
                permission.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                You may view and reference the content for personal,
                informational, and non-commercial purposes. You may not copy,
                reproduce, redistribute, modify, or use my original work for
                commercial purposes without prior permission.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                Third-party names, logos, trademarks, and materials remain the
                property of their respective owners.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 04 - ACCEPTABLE USE
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                04. Acceptable Use
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                When using this website, you agree not to:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#858991]">
                <li>
                  Use the website for unlawful, fraudulent, or harmful
                  activities.
                </li>
                <li>
                  Attempt to gain unauthorized access to the website, its
                  systems, or related services.
                </li>
                <li>
                  Interfere with the website&apos;s functionality, security, or
                  availability.
                </li>
                <li>
                  Submit malicious code, spam, or abusive content through the
                  contact form.
                </li>
                <li>
                  Misuse website content or attempt to misrepresent my work as
                  your own.
                </li>
              </ul>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                I reserve the right to take reasonable steps to protect the
                website against misuse or unauthorized activity.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 05 - CONTACT FORM
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                05. Contact Form
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                The contact form is provided as a way to communicate with me
                regarding inquiries, potential projects, collaborations, and
                professional opportunities.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                By submitting a message, you agree to provide accurate
                information and ensure that your message is lawful, relevant,
                and respectful.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                Repeated submissions are restricted by a 30-minute cooldown
                following a successful submission. This measure helps prevent
                spam and misuse of the contact form.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                Submitting a message does not guarantee a response. I reserve
                the right not to respond to irrelevant, abusive, or unsolicited
                messages.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 06 - THIRD-PARTY SERVICES AND LINKS
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                06. Third-Party Services and Links
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                This website may use third-party services to support certain
                features, including contact form delivery and submission
                management.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                The website may also contain links to external websites,
                platforms, or services for reference or convenience.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                I do not own or control these third-party services and am not
                responsible for their content, availability, policies, or
                practices. Your use of those services is subject to their
                respective terms and conditions.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 07 - WEBSITE AVAILABILITY
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                07. Website Availability
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                I aim to keep this website accessible and functioning properly.
                However, uninterrupted availability cannot be guaranteed.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                The website may occasionally be unavailable due to maintenance,
                updates, technical issues, hosting interruptions, or
                circumstances beyond my control.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 08 - ACCURACY OF INFORMATION
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                08. Accuracy of Information
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                The information presented on this website is provided for
                general informational and portfolio purposes.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                While I make reasonable efforts to keep the content accurate and
                up to date, I do not guarantee that all information, project
                details, descriptions, or other materials will always be
                complete, current, or error-free.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 09 - DISCLAIMER
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                09. Disclaimer
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                This website and its content are provided on an &quot;as
                is&quot; and &quot;as available&quot; basis, without guarantees
                of uninterrupted access, accuracy, or suitability for a
                particular purpose.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                Nothing on this website should be interpreted as a guarantee of
                a particular professional outcome, service, or result.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 10 - LIMITATION OF LIABILITY
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                10. Limitation of Liability
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                To the extent permitted by applicable law, I shall not be held
                liable for damages or losses arising from your use of, or
                inability to use, this website or its content.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                This includes, but is not limited to, indirect, incidental, or
                consequential losses resulting from website interruptions,
                technical issues, reliance on website information, or
                third-party services.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 11 - CHANGES TO THESE TERMS
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                11. Changes to These Terms
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                I reserve the right to update or modify these Terms of Service
                when necessary to reflect changes to the website, its features,
                or applicable requirements.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                Any updates will be published on this page, along with the
                revised &quot;Last Updated&quot; date. Continued use of the
                website after changes are published constitutes acceptance of
                the updated terms, to the extent permitted by applicable law.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 12 - APPLICABLE LAW
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                12. Applicable Law
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                These Terms of Service shall be interpreted in accordance with
                applicable laws. Any disputes relating to the use of this
                website shall be handled by the appropriate legal authorities as
                provided by applicable law.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 13 - CONTACT INFORMATION
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                13. Contact Information
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                If you have any questions or concerns regarding these Terms of
                Service, you may contact me using the details below:
              </p>

              <div className="mt-5 rounded-xl border border-[#41444B]/70 bg-[#111214] px-5 py-5 sm:px-6">
                <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-4 text-sm sm:grid-cols-[120px_1fr]">
                  <span className="text-[#858991]">Developer:</span>
                  <span className="font-medium text-[#F5F5F6]">
                    Johan Garcia
                  </span>

                  <span className="text-[#858991]">Email:</span>
                  <span className="text-[#F5F5F6]">johancurato1@gmail.com</span>

                  <span className="text-[#858991]">Location:</span>
                  <span className="text-[#E0E2E6]">Butuan, Philippines</span>
                </div>
              </div>
            </section>
          </div>

          {/*================================================================
            //! PAGE ENDING
          ================================================================*/}

          <div className="mt-16 h-px w-full bg-[#41444B]/70" />

          <p className="mt-6 text-xs text-[#858991]">
            © 2026 Johan Garcia. All rights reserved.
          </p>
        </main>
      </div>
    </div>
  );
}
