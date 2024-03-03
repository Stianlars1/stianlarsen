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
    "Explore Stian Larsen's Fullstack Development portfolio, a blend of front-end and back-end projects demonstrating expertise in web development and computer engineering. Showcasing professional achievements and innovative personal work, it's a window into his skills and passion for technology.",
  keywords: [
    "Fullstack Developer",
    "Computer Engineer",
    "Software Developer",
    "Web Developer",
    "Programmer",
    "Coding Portfolio",
    "Development Projects",
  ],

  openGraph: {
    type: "website",
    url: "https://www.stianlarsen.com",
    title: "Stian Larsen | Fullstack Developer | Portfolio",
    description:
      "Explore Stian Larsen's Fullstack Development portfolio, a blend of front-end and back-end projects demonstrating expertise in web development and computer engineering. Showcasing professional achievements and innovative personal work, it's a window into his skills and passion for technology.",
    images: [
      {
        url: "https://www.stianlarsen.com/og-image.jpg",
        width: 1200,
        height: 630,
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
