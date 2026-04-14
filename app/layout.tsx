import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const teamSans = Barlow_Condensed({
  variable: "--font-team-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fort Worth-Arlington Pilots",
  description: "Official home of the Fort Worth-Arlington Pilots with roster profiles, schedule updates, stats, and team news.",
  icons: {
    icon: "/logos/AWFPLogo.png",
    shortcut: "/logos/AWFPLogo.png",
    apple: "/logos/AWFPLogo.png",
  },
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
