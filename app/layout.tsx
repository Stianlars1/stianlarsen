import type { Metadata } from "next";
import { roboto_mono } from "./fonts";

import { Footer } from "@/components/main/footer/footer";
import { Navbar } from "@/components/main/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import "./layout.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Stian Larsen | Fullstack Developer | Portfolio",
  description:
    "Discover Stian Larsen's portfolio: A showcase of Fullstack projects, detailed project insights, CV, and contact information. Dive into his journey in technology and innovation.",
  keywords: [
    "Fullstack Developer",
    "Computer Engineer",
    "Software Developer",
    "Web Developer",
    "web design",
    "sanity.io",
    "blog",
    "webperf",
    "React",
    "Stian Larsen",
    "homepage",
    "web design",
    "web developer",
    "webdesign",
    "responsive web design",
    "web development",
  ],
  creator: "Stian Larsen",
  publisher: "Stian Larsen",

  openGraph: {
    type: "website",
    url: "https://www.stianlarsen.com",
    title: "Stian Larsen | Fullstack Developer | Portfolio",
    description:
      "Explore Stian Larsen's Fullstack Development portfolio, a blend of front-end and back-end projects demonstrating expertise in web development and computer engineering. Showcasing professional achievements and innovative personal work, it's a window into his skills and passion for technology.",
    images: [
      {
        url: "https://www.stianlarsen.com/favicons/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Stian Larsen Portfolio",
      },
    ],
    siteName: "StianLarsen",
  },

  alternates: {
    canonical: "https://www.stianlarsen.com",
  },

  icons: {
    icon: "/favicons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto_mono.className}`}>
        <Providers>
          <Navbar />
          <main className="px-[20px]">{children}</main>
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
