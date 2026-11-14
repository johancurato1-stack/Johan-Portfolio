/*============================================================================
 //! IMPORTS
============================================================================*/

"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Button from "@/components/ui/MainButton";

//============================================================================
//! TYPES
//============================================================================

type FormField = "name" | "email" | "subject" | "message";

type FormErrors = Partial<Record<FormField, string>>;

type FormStatus = "idle" | "sending" | "success" | "error" | "cooldown";

//============================================================================
//! CONTACT FORM
//============================================================================

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [feedback, setFeedback] = useState("");

  const successTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cooldownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const inputStyles =
    "w-full rounded-md border border-[#41444B] bg-[#202226] px-4 py-2.5 text-sm text-[#F5F5F6] outline-none transition-colors duration-300 placeholder:text-[#858991] focus:border-[#858991]";

  //==========================================================================
  //! CLEAN UP TIMERS
  //==========================================================================

  useEffect(() => {
    return () => {
      if (successTimer.current) clearTimeout(successTimer.current);
      if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
    };
  }, []);

  //==========================================================================
  //! VALIDATE FORM
  //==========================================================================

  const validateForm = (formData: FormData): FormErrors => {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const validationErrors: FormErrors = {};

    if (!name) {
      validationErrors.name = "Please enter your name.";
    } else if (name.length > 100) {
      validationErrors.name = "Name cannot exceed 100 characters.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      validationErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(email) || email.length > 254) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!subject) {
      validationErrors.subject = "Please enter a subject.";
    } else if (subject.length > 150) {
      validationErrors.subject = "Subject cannot exceed 150 characters.";
    }

    if (!message) {
      validationErrors.message = "Please enter your message.";
    } else if (message.length > 5000) {
      validationErrors.message = "Message cannot exceed 5,000 characters.";
    }

    return validationErrors;
  };

  //==========================================================================
  //! CLEAR FIELD ERROR
  //==========================================================================

  const clearFieldError = (field: FormField) => {
    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));
  };

  //==========================================================================
  //! HANDLE FORM SUBMISSION
  //==========================================================================

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "sending" || status === "cooldown") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validateForm(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (successTimer.current) {
      clearTimeout(successTimer.current);
      successTimer.current = null;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const data: {
        message?: string;
        error?: string;
        code?: string;
        retryAfter?: number;
      } = await response.json();

      //====================================================================
      //! HANDLE COOLDOWN
      //====================================================================

      if (response.status === 429 && data.code === "COOLDOWN_ACTIVE") {
        setStatus("cooldown");

        setFeedback("Already sent a message. Try again later.");

        if (cooldownTimer.current) {
          clearTimeout(cooldownTimer.current);
        }

        cooldownTimer.current = setTimeout(() => {
          setStatus("idle");
          setFeedback("");
          cooldownTimer.current = null;
        }, 3000);

        return;
      }

      //====================================================================
      //! HANDLE SUBMISSION FAILURE
      //====================================================================

      if (!response.ok) {
        throw new Error("Message unsuccessful. Try again later.");
      }

      //====================================================================
      //! HANDLE SUCCESS
      //====================================================================

      setStatus("success");
      setFeedback("Message Sent!");

      setErrors({});
      form.reset();

      successTimer.current = setTimeout(() => {
        setStatus("idle");
        setFeedback("");
        successTimer.current = null;
      }, 2500);
    } catch {
      setStatus("error");
      setFeedback("Message Unsuccessful. Try again later.");

      successTimer.current = setTimeout(() => {
        setStatus("idle");
        setFeedback("");
        successTimer.current = null;
      }, 3000);
    }
  };

  //==========================================================================
  //! BUTTON CONTENT
  //==========================================================================

  const buttonText = {
    idle: "Send Message",
    sending: "Sending...",
    success: "Message Sent!",
    error: feedback || "Message Unsuccessful. Try again later.",
    cooldown: "Already sent a message. Try again later.",
  };

  const showIcon = status === "idle";

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

      <form className="space-y-4" noValidate onSubmit={handleSubmit}>
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
            maxLength={100}
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            onChange={() => clearFieldError("name")}
            className={`${inputStyles} ${
              errors.name ? "border-red-400 focus:border-red-400" : ""
            }`}
          />

          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-red-400">
              {errors.name}
            </p>
          )}
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
            maxLength={254}
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            onChange={() => clearFieldError("email")}
            className={`${inputStyles} ${
              errors.email ? "border-red-400 focus:border-red-400" : ""
            }`}
          />

          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-red-400">
              {errors.email}
            </p>
          )}
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
            maxLength={150}
            required
            aria-invalid={!!errors.subject}
            aria-describedby={
              errors.subject ? "contact-subject-error" : undefined
            }
            onChange={() => clearFieldError("subject")}
            className={`${inputStyles} ${
              errors.subject ? "border-red-400 focus:border-red-400" : ""
            }`}
          />

          {errors.subject && (
            <p
              id="contact-subject-error"
              className="mt-1.5 text-xs text-red-400"
            >
              {errors.subject}
            </p>
          )}
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
            maxLength={5000}
            required
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            onChange={() => clearFieldError("message")}
            className={`${inputStyles} resize-none skills-scrollbar ${
              errors.message ? "border-red-400 focus:border-red-400" : ""
            }`}
          />

          {errors.message && (
            <p
              id="contact-message-error"
              className="mt-1.5 text-xs text-red-400"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/*==================================================================
          //! SEND BUTTON
        ==================================================================*/}

        <Button
          type="submit"
          disabled={
            status === "sending" || status === "cooldown" || status === "error"
          }
          className={`w-full justify-center ${
            status === "error" ? "!cursor-not-allowed" : ""
          }`}
        >
          <span
            className={`inline-flex items-center justify-center gap-3 transition-opacity duration-500 ${
              showIcon ? "opacity-100" : "opacity-100"
            }`}
          >
            {showIcon && (
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
            )}

            <span>{buttonText[status]}</span>
          </span>
        </Button>
      </form>
    </div>
  );
}
