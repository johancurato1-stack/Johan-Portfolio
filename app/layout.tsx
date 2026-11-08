import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";

import "../styles/globals.css";
import Preloader from "@/components/layout/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//============================================================================
//! SITE METADATA
//============================================================================

export const metadata: Metadata = {
  title: "Johan Curato | Full-Stack Developer",
  description:
    "Johan Curato's developer portfolio, showcasing projects, technical skills, and experience building useful digital products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <style>
          {`
            html[data-preloader="skip"] #portfolio-preloader {
              display: none !important;
            }

            html[data-preloader="show"] #navbar-logo img {
              visibility: hidden;
            }
          `}
        </style>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const sessionKey = "portfolio-preloader-shown";

                const hasShown = document.cookie
                  .split(";")
                  .some((cookie) => cookie.trim().startsWith(sessionKey + "="));

                if (hasShown) {
                  document.documentElement.dataset.preloader = "skip";
                } else {
                  document.cookie = sessionKey + "=1; path=/; SameSite=Lax";
                  document.documentElement.dataset.preloader = "show";
                }
              } catch {
                document.documentElement.dataset.preloader = "show";
              }
            `,
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
