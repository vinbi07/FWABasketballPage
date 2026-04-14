import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { THEME_STORAGE_KEY } from "@/lib/theme/themeStorage";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const teamSans = Barlow_Condensed({
  variable: "--font-team-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fort Worth-Arlington Pilots",
  description:
    "Official home of the Fort Worth-Arlington Pilots with roster profiles, schedule updates, stats, and team news.",
  icons: {
    icon: "/logos/AWFPLogo.png",
    shortcut: "/logos/AWFPLogo.png",
    apple: "/logos/AWFPLogo.png",
  },
};

const themeInitScript = `(() => {
  try {
    const root = document.documentElement;
    const stored = window.localStorage.getItem("${THEME_STORAGE_KEY}");
    const mode = stored === "light" || stored === "dark"
      ? stored
      : null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = mode ?? (prefersDark ? "dark" : "light");
    root.setAttribute("data-theme", resolved);
    root.style.colorScheme = resolved;
  } catch {
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.style.colorScheme = "light";
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${teamSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col text-[color:var(--foreground)]">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
