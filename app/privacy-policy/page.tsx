/*============================================================================
 //! IMPORTS
============================================================================*/

import type { Metadata } from "next";
import LegalNavbar from "@/components/layout/navbar/legal/LegalNavbar";

//============================================================================
//! PAGE METADATA
//============================================================================

export const metadata: Metadata = {
  title: "Privacy Policy | Johan Curato",
  description:
    "Learn how Johan Curato's portfolio handles personal information and protects visitor privacy.",
};

//============================================================================
//! PRIVACY POLICY PAGE
//============================================================================

export default function PrivacyPolicyPage() {
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
              Legal / Privacy
            </p>

            <h1 className="text-4xl font-medium tracking-tight text-[#F5F5F6] sm:text-5xl lg:text-[52px]">
              Privacy Policy
            </h1>

            <p className="mt-4 text-xs tracking-wide text-[#858991]">
              Last Updated: November 15, 2026
            </p>

            <div className="mt-8 h-px w-full bg-[#41444B]/70" />

            <h2 className="mt-8 text-xl font-medium tracking-tight text-[#B9BEC7] sm:text-2xl">
              Your privacy matters.
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#858991]">
              This Privacy Policy explains how information is collected, used,
              and protected when you visit my portfolio website or use its
              contact form.
            </p>
          </section>

          {/*================================================================
            //! PRIVACY POLICY CONTENT
          ================================================================*/}

          <div className="space-y-10">
            {/*==============================================================
              //! SECTION 01 - INTRODUCTION
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                01. Introduction
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                Welcome to the portfolio website of Johan Garcia (&quot;I,&quot;
                &quot;me,&quot; or &quot;my&quot;). Your privacy is important to
                me, and this Privacy Policy explains how information is handled
                when you visit this website or use its contact form.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 02 - INFORMATION COLLECTED
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                02. Information I Collect
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                This portfolio does not require visitors to create accounts or
                provide personal information to browse its pages.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                However, when you use the contact form, I collect the following
                information:
              </p>

              <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 text-[#858991]">
                <li>
                  <span className="font-medium text-[#B9BEC7]">Name:</span> To
                  identify who is contacting me.
                </li>
                <li>
                  <span className="font-medium text-[#B9BEC7]">
                    Email Address:
                  </span>{" "}
                  To respond to your inquiry.
                </li>
                <li>
                  <span className="font-medium text-[#B9BEC7]">Subject:</span>{" "}
                  To understand the purpose of your message.
                </li>
                <li>
                  <span className="font-medium text-[#B9BEC7]">Message:</span>{" "}
                  To read and respond to your inquiry.
                </li>
              </ul>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                Please avoid including sensitive personal information in your
                messages.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 03 - USE OF INFORMATION
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                03. How Your Information Is Used
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                Information submitted through the contact form is used solely
                to:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#858991]">
                <li>Receive and review inquiries.</li>
                <li>Respond to messages and questions.</li>
                <li>
                  Communicate about potential projects, collaborations, or
                  professional opportunities.
                </li>
                <li>Prevent repeated submissions within a limited period.</li>
              </ul>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                Your information is not intentionally used for advertising,
                marketing campaigns, or unrelated purposes.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 04 - THIRD-PARTY SERVICES
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                04. Third-Party Services
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                This website uses third-party services to provide its contact
                form functionality.
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="mb-1 text-sm font-medium text-[#B9BEC7]">
                    Resend
                  </h4>

                  <p className="text-sm leading-7 text-[#858991]">
                    Resend is used to process and deliver messages submitted
                    through the contact form to my designated email inbox.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 text-sm font-medium text-[#B9BEC7]">
                    Upstash Redis
                  </h4>

                  <p className="text-sm leading-7 text-[#858991]">
                    Upstash Redis is used to manage the contact form&apos;s
                    submission cooldown. A hashed version of the sender&apos;s
                    email address is stored temporarily to enforce a 30-minute
                    restriction after a successful submission.
                  </p>
                </div>
              </div>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                These services process information as necessary to provide their
                respective functionality and are subject to their own privacy
                policies.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 05 - COOKIES
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                05. Cookies and Local Storage
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                This website uses a session cookie to remember whether the
                introductory preloader has already appeared during your current
                browsing session.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                This cookie helps prevent the preloader from appearing
                repeatedly when navigating the website. The website does not
                currently use this cookie for advertising or behavioral
                tracking.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 06 - DATA RETENTION
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                06. Data Retention
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                Messages successfully submitted through the contact form may
                remain in my designated email inbox until they are no longer
                needed.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                The temporary cooldown record associated with a successfully
                submitted email address expires automatically after 30 minutes.
                Information processed by third-party providers may be retained
                according to their respective data retention policies.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 07 - DATA SHARING
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                07. Data Sharing
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                I do not sell, rent, or trade personal information submitted
                through this website.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                Information may be processed by the third-party service
                providers identified in this policy when necessary to operate
                the contact form. Information may also be disclosed when
                required by applicable law or a valid legal request.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 08 - DATA SECURITY
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                08. Data Security
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                Reasonable measures are taken to protect information submitted
                through this website. However, no method of transmitting or
                storing information over the internet can be guaranteed to be
                completely secure.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                Please avoid submitting confidential or highly sensitive
                information through the contact form.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 09 - EXTERNAL LINKS
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                09. External Links
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                This website may contain links to external websites, platforms,
                or services. I am not responsible for the privacy practices,
                content, or security of third-party websites. Visitors are
                encouraged to review their respective privacy policies.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 10 - PRIVACY RIGHTS
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                10. Your Privacy Rights
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                Depending on your location and applicable privacy laws, you may
                have rights concerning your personal information, including the
                right to request access, correction, or deletion.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                For privacy-related questions or requests, you may contact me
                using the email address provided below.
              </p>
            </section>

            {/*==============================================================
              //! SECTION 11 - POLICY CHANGES
            ==============================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                11. Changes to This Privacy Policy
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                This Privacy Policy may be updated when website features,
                services, or data practices change.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#858991]">
                Any updates will be reflected on this page, along with the
                revised &quot;Last Updated&quot; date.
              </p>
            </section>

            {/*================================================================
  //! SECTION 12 - CONTACT INFORMATION
================================================================*/}

            <section>
              <h3 className="mb-3 text-base font-medium text-[#E0E2E6]">
                12. Contact Information
              </h3>

              <p className="text-sm leading-7 text-[#858991]">
                For questions, concerns, or requests regarding this Privacy
                Policy, you may contact me using the details below:
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
