// here we put stuff that will show in all the pages like nav and footer

import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
