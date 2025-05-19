import type { Metadata } from "next";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICEBERG - Ace Your CA & CMA Exams",
  description:
    "Get access to top-quality test series, expert counseling, and study materials to ensure your success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    
    >
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {/* Main Layout */}
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
