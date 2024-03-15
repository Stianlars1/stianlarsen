import type { Metadata } from "next";
import { roboto_mono } from "./fonts";

import { Footer } from "@/components/main/footer/footer";
import { Navbar } from "@/components/main/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto_mono.className}`}>
        <Head>
          <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicons/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/favicons/android-chrome-512x512.png"
          />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta
            name="msapplication-square150x150logo"
            content="/favicons/mstile-150x150.png"
          />
        </Head>
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
