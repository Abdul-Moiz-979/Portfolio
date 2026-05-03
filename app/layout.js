import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Root Layout
 * Wraps all pages with Navbar, Footer, and global styles.
 * Uses Inter font from Google Fonts for a clean, modern look.
 */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Global SEO metadata
export const metadata = {
  title: {
    default: "Abdul Moiz — Software Engineer & Full Stack Developer",
    template: "%s | Abdul Moiz",
  },
  description:
    "Personal portfolio of Abdul Moiz — a Software Engineer and Full Stack Developer specializing in React, Next.js, Node.js, and AI/ML.",
  keywords: [
    "Abdul Moiz",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Abdul Moiz" }],
  openGraph: {
    title: "Abdul Moiz — Software Engineer",
    description:
      "Personal portfolio of Abdul Moiz — Full Stack Developer & Software Engineer.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary font-sans antialiased">
        {/* Navbar persists across all pages */}
        <Navbar />

        {/* Main content area — padded for fixed navbar */}
        <main className="flex-grow pt-16">{children}</main>

        {/* Footer persists across all pages */}
        <Footer />
      </body>
    </html>
  );
}
