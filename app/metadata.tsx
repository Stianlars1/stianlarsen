import { BASE_URL } from "@/lib/consts";
import { Metadata } from "next";

export const mainPageMeta: Metadata = {
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
  metadataBase: new URL(BASE_URL),

  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Stian Larsen",
    description:
      "Discover Stian Larsen's portfolio: A showcase of Fullstack projects, detailed project insights, CV, and contact information. Dive into his journey in technology and innovation.",
    images: [
      {
        url: "https://www.stianlarsen.com/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Stian Larsen Portfolio",
      },
      {
        url: "https://www.stianlarsen.com/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Stian Larsen Portfolio",
      },
    ],
    siteName: "Stian Larsen",
  },
  twitter: {
    card: "app",
    title: "Stianlarsen.com",
    description:
      "Discover Stian Larsen's portfolio: A showcase of Fullstack projects, detailed project insights, CV, and contact information. Dive into his journey in technology and innovation.",
    siteId: "882276408",
    creator: "@Litehode",
    creatorId: "882276408",
    images: {
      url: "https://stianlarsen.com/stian-emoji.png",
      alt: "Portrait emoji photo of Stian Larsen",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://iphone_url",
        ipad: "https://ipad_url",
      },
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: [{ url: "/icon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },

  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["stian.larsen@mac.com"],
    },
  },
};
