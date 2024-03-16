import type { Metadata } from "next";
import { roboto_mono } from "./fonts";

import { Footer } from "@/components/main/footer/footer";
import { Navbar } from "@/components/main/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import "./layout.css";
import { mainPageMeta } from "./metadata";
import { Providers } from "./providers";

export const metadata: Metadata = mainPageMeta;

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
