import React from "react";

import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@/context/User.context";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Ali Reza",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans text-accents-6`}
      >
        <UserProvider>
          <div className="grid-line" />
          <main>{children}</main>
          <Toaster />
        </UserProvider>
      </body>
    </html>
  );
}
