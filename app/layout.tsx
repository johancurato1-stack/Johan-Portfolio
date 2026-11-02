import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
