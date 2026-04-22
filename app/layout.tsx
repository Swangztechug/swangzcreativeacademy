import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RevealInit } from "@/components/RevealInit";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Swangz Creative Academy — Create boldly",
    template: "%s | Swangz Creative Academy",
  },
  description:
    "Hands-on courses for design, motion, photo/video, and storytelling—guided by working creatives.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning className={`${inter.className} bg-white text-zinc-900 antialiased`}>
        {children}
        <SiteFooter />
        <RevealInit />
      </body>
    </html>
  );
}
