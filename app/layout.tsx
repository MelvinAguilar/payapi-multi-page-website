import type { Metadata } from "next";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";

import "./globals.css";
import { DM_Serif_Display, Public_Sans } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif-display",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "PayAPI multi-page website",
  generator: "Next.js",
  applicationName: "PayAPI multi-page website",
  description: "PayAPI multi-page website solution for FrontendMentor.io",
  keywords: "nextjs, typescript, tailwindcss, Frontend-Mentor, Melvin",
  creator: "Melvin Aguilar",
  colorScheme: "dark light",
  themeColor: "#EDF3F8",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`relative overflow-x-hidden ${dmSerifDisplay.variable} ${publicSans.variable}`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
