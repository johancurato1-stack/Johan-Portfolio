import { createHash } from "crypto";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

//============================================================================
//! SERVICE CONFIGURATION
//============================================================================

const resend = new Resend(process.env.RESEND_API_KEY);
const redis = Redis.fromEnv();

const recipientEmail = "johancurato1@gmail.com";
const senderEmail = "Johan Garcia Portfolio <onboarding@resend.dev>";

const COOLDOWN_SECONDS = 30 * 60;
const PENDING_SECONDS = 120;

//============================================================================
//! CONTACT FORM API
//============================================================================

export async function POST(request: Request) {
  let pendingKey: string | null = null;

  try {
    //======================================================================
    //! CHECK API CONFIGURATION
    //======================================================================

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.UPSTASH_REDIS_REST_URL ||
      !process.env.UPSTASH_REDIS_REST_TOKEN
    ) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    //======================================================================
    //! READ FORM DATA
    //======================================================================

    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return Response.json(
        { error: "Invalid form submission." },
        { status: 400 },
      );
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    //======================================================================
    //! VALIDATE REQUIRED FIELDS
    //======================================================================

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    //======================================================================
    //! VALIDATE FIELD LENGTHS
    //======================================================================

    if (
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 150 ||
      message.length > 5000
    ) {
      return Response.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 },
      );
    }

    //======================================================================
    //! VALIDATE EMAIL
    //======================================================================

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    //======================================================================
    //! VALIDATE TEXT CONTENT
    //======================================================================

    if (/[\r\n]/.test(name) || /[\r\n]/.test(subject) || /[\r\n]/.test(email)) {
      return Response.json(
        { error: "Invalid characters found in your submission." },
        { status: 400 },
      );
    }

    //======================================================================
    //! GENERATE PRIVATE COOLDOWN KEY
    //======================================================================

    const emailHash = createHash("sha256").update(email).digest("hex");

    const cooldownKey = `contact:cooldown:${emailHash}`;
    pendingKey = `contact:pending:${emailHash}`;

    //======================================================================
    //! CHECK EXISTING COOLDOWN
    //======================================================================

    const existingCooldown = await redis.get(cooldownKey);

    if (existingCooldown) {
      const remainingSeconds = await redis.ttl(cooldownKey);

      return Response.json(
        {
          error: "Already sent a message. Please try again later.",
          code: "COOLDOWN_ACTIVE",
          retryAfter: remainingSeconds,
        },
        { status: 429 },
      );
    }

    //======================================================================
    //! PREVENT DUPLICATE SUBMISSIONS
    //======================================================================

    const lock = await redis.set(pendingKey, "1", {
      nx: true,
      ex: PENDING_SECONDS,
    });

    if (!lock) {
      return Response.json(
        {
          error: "Your message is already being processed. Please wait.",
          code: "SUBMISSION_PENDING",
        },
        { status: 409 },
      );
    }

    //======================================================================
    //! SEND EMAIL
    //======================================================================

    const { error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `Portfolio Inquiry: ${subject}`,
      text: `
New message from your portfolio contact form.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      await redis.del(pendingKey);
      pendingKey = null;

      return Response.json(
        {
          error: "Message unsuccessful. Please try again later.",
          code: "EMAIL_SEND_FAILED",
        },
        { status: 500 },
      );
    }

    //======================================================================
    //! START 30-MINUTE COOLDOWN
    //======================================================================

    await redis.set(cooldownKey, "1", {
      ex: COOLDOWN_SECONDS,
    });

    //======================================================================
    //! RELEASE PENDING LOCK
    //======================================================================

    await redis.del(pendingKey);
    pendingKey = null;

    //======================================================================
    //! SUCCESS RESPONSE
    //======================================================================

    return Response.json(
      {
        message: "Message sent successfully!",
        code: "MESSAGE_SENT",
      },
      { status: 200 },
    );
  } catch {
    //======================================================================
    //! RELEASE PENDING LOCK AFTER FAILURE
    //======================================================================

    if (pendingKey) {
      try {
        await redis.del(pendingKey);
      } catch {}
    }

    return Response.json(
      {
        error: "Something went wrong. Please try again later.",
        code: "SERVER_ERROR",
      },
      { status: 500 },
    );
  }
}
