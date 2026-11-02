/*============================================================================
 //! IMPORTS
============================================================================*/

import Button from "@/components/ui/MainButton";

//============================================================================
//! CONTACT FORM
//============================================================================

export default function ContactForm() {
  const inputStyles =
    "w-full rounded-md border border-[#41444B] bg-[#202226] px-4 py-2.5 text-sm text-[#F5F5F6] outline-none transition-colors duration-300 placeholder:text-[#858991] focus:border-[#858991]";

  return (
    <div className="rounded-xl border border-[#41444B]/80 bg-[#202226]/60 p-5 sm:p-6">
      {/*====================================================================
        //! FORM INTRODUCTION
      ====================================================================*/}

      <div className="mb-6">
        <h3 className="text-lg font-medium tracking-tight text-[#F5F5F6]">
          Send me a message
        </h3>

        <p className="mt-2 text-xs leading-6 text-[#858991]">
          Fill out the form below and I&apos;ll get back to you as soon as
          possible.
        </p>
      </div>

      {/*====================================================================
        //! CONTACT FORM FIELDS
      ====================================================================*/}

      <form className="space-y-4">
        {/*==================================================================
          //! NAME
        ==================================================================*/}

        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-xs font-medium text-[#B9BEC7]"
          >
            Name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            required
            className={inputStyles}
          />
        </div>

        {/*==================================================================
          //! EMAIL
        ==================================================================*/}

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-xs font-medium text-[#B9BEC7]"
          >
            Email
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
            required
            className={inputStyles}
          />
        </div>

        {/*==================================================================
          //! SUBJECT
        ==================================================================*/}

        <div>
          <label
            htmlFor="contact-subject"
            className="mb-2 block text-xs font-medium text-[#B9BEC7]"
          >
            Subject
          </label>

          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="What is this regarding?"
            required
            className={inputStyles}
          />
        </div>

        {/*==================================================================
          //! MESSAGE
        ==================================================================*/}

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-xs font-medium text-[#B9BEC7]"
          >
            Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="Tell me about your project or inquiry..."
            required
            className={`${inputStyles} resize-none skills-scrollbar`}
          />
        </div>

        {/*==================================================================
          //! SEND BUTTON
        ==================================================================*/}

        <Button type="button" className="w-full justify-center">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
          Send Message
        </Button>
      </form>
    </div>
  );
}
