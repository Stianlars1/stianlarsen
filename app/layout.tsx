import type { Metadata } from "next";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { ThemeProvider } from "./components/theme-provider";
import { roboto_mono } from "./fonts";
import "./globals.css";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],

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
    <html lang="en">
      <body className={`${roboto_mono.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className={`max-w-5xl mx-auto px-5`}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
