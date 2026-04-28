import type { Metadata } from "next";
import { SiteBackground } from "@/app/components/SiteBackground";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import {
  IBM_Plex_Mono,
  Orbitron,
} from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-geist-sans",
  weight: ["500", "700", "800"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoe Fisk | Resume",
  description:
    "A custom one-page resume and project site for Zoe Fisk with interactive project cards.",
};

const themeInitScript = `
  (() => {
    try {
      const storageKey = "zf-theme";
      const storedTheme = window.localStorage.getItem(storageKey);
      const theme = storedTheme === "light" ? "light" : "dark";
      document.documentElement.dataset.theme = theme;
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-theme="dark"
      lang="en"
      suppressHydrationWarning
      className={`${orbitron.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteBackground />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
