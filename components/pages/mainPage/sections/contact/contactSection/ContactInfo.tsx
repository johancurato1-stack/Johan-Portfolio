/*============================================================================
 //! IMPORTS
============================================================================*/

import IconContainer from "@/components/ui/IconContainer";

import ContactIcon from "./ContactIcon";
import { contactDetails, socialLinks } from "./ContactData";

//============================================================================
//! CONTACT INFO
//============================================================================

export default function ContactInfo() {
  return (
    <div>
      {/*====================================================================
        //! SECTION INTRODUCTION
      ====================================================================*/}

      <div className="mb-10">
        <div className="mb-7 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

          <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
            CONTACT
          </p>
        </div>

        <h2 className="max-w-lg text-3xl leading-[1.12] font-medium tracking-tight text-[#858991] sm:text-4xl lg:text-5xl">
          Let&apos;s work
          <span className="block text-[#F5F5F6]">together.</span>
        </h2>

        <p className="mt-5 max-w-md text-sm leading-7 text-[#858991]">
          Have a project in mind or just want to connect? Feel free to reach
          out. I&apos;m always open to discussing new ideas and opportunities.
        </p>
      </div>

      {/*====================================================================
        //! CONTACT DETAILS
      ====================================================================*/}

      <div className="space-y-5">
        {contactDetails.map((detail) => (
          <div key={detail.id} className="flex items-center gap-4">
            <IconContainer>
              <ContactIcon type={detail.icon} />
            </IconContainer>

            <div>
              <p className="text-[10px] font-medium tracking-wide text-[#858991]">
                {detail.label}
              </p>

              <p className="mt-1 text-sm text-[#B9BEC7]">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/*====================================================================
        //! SOCIAL LINKS
      ====================================================================*/}

      <div className="mt-10 pt-6">
        <p className="mb-4 text-[10px] font-medium tracking-[0.15em] text-[#858991]">
          FIND ME ON
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <IconContainer
              key={social.id}
              href={social.href}
              label={`Visit my ${social.label} profile`}
              external
            >
              <ContactIcon type={social.icon} />
            </IconContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
