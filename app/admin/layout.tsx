import type { Metadata } from "next";

import { roboto_mono } from "@/app/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Stian Larsen | Admin",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto_mono.className}`}>
        <main className="px-[20px]">{children}</main>
      </body>
    </html>
  );
}
