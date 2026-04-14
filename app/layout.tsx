import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const teamSans = Barlow_Condensed({
  variable: "--font-team-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sports Club UI Template",
  description: "UI-only reusable sports team website template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${teamSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-[color:var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
