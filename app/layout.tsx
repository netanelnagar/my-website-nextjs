import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../pages/Navbar";
import { Toaster } from "../components/ui/toaster";
import { Toaster as Sonner } from "../components/ui/sonner";
import Footer from "../pages/Footer";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://netanelnagar.com"
  ),
  title: {
    default: "Home · Netanel Nagar",
    template: "%s | Netanel Nagar",
  },
  description:
    "Portfolio of Netanel Nagar, a full stack developer helping businesses get online and grow fast. Explore projects, resume, contact details, and services.",
  openGraph: {
    title: "Netanel Nagar · Full Stack Developer",
    description:
      "Portfolio of Netanel Nagar, a full stack developer helping businesses get online and grow fast. Explore projects, resume, contact details, and services.",
    url: "/",
    siteName: "Netanel Nagar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netanel Nagar · Full Stack Developer",
    description:
      "Portfolio of Netanel Nagar, a full stack developer helping businesses get online and grow fast. Explore projects, resume, contact details, and services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <div className="h-dvh overflow-y-auto flex flex-col">
          <Navbar />
          <Toaster />
          <Sonner />
          <main className="grow flex flex-col">{children}</main>
          <Footer />
          <a
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="fixed bottom-14 right-6 lg:bottom-14 lg:right-12 z-50 p-3 lg:p-4 rounded-full bg-linear-to-r from-primary to-secondary text-white shadow-lg hover:scale-105 transition-transform"
          >
            <FaWhatsapp className="w-6 h-6 lg:w-8 lg:h-8" />
          </a>
        </div>
      </body>
    </html>
  );
}
