// here we put stuff that will show in all the pages like nav and footer

import "./globals.css";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
