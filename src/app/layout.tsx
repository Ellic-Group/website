import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ellic Group | Global Technology, Digital Commerce & African Cinema Ventures",
  description: "Ellic is a modern technology venture group architecting the next era of African streaming media (Vinylflix), decentralized restaurant commerce (UloDine), and AST-grounded developer intelligence (Keel).",
  keywords: [
    "Ellic",
    "Ellic Group",
    "Ellic Limited",
    "Vinylflix",
    "UloDine",
    "Keel",
    "African Cinema",
    "Restaurant SaaS",
    "AI Agents"
  ],
  authors: [{ name: "Ellic Group" }],
  openGraph: {
    title: "Ellic Group | Building Transformative Ventures & Infrastructure",
    description: "Explore Ellic's portfolio of industry-defining platforms: Vinylflix 4K Streaming, UloDine Restaurant OS, and Keel Codebase AI.",
    url: "https://ellic.group",
    siteName: "Ellic Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ellic Group | Global Technology & Media Ecosystem",
    description: "Architecting modern cinema, commerce, and intelligent systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-100 selection:bg-[#FFAF00] selection:text-black">
        <Navbar />
        <main className="flex-grow pt-24 sm:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
