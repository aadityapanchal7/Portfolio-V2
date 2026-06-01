import type { Metadata } from "next";
import "../styles/globals.css";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import ThemeScript from "./components/theme-script";
import ThemeToggle from "./components/theme-toggle";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aadityapanchal.com"),
  title: "Aaditya Panchal",
  description:
    "Aaditya Panchal — 16-year-old builder & researcher. CTO of Max, founder of Seekir, research at Emory, MIT Critical Data & Dartmouth.",
  keywords: [
    "Aaditya Panchal",
    "Aaditya Panchal portfolio",
    "Aaditya Panchal builder",
    "Aaditya Panchal research",
    "founder",
    "AI research",
    "Max",
    "Seekir",
  ],
  authors: [{ name: "Aaditya Panchal" }],
  alternates: { canonical: "/" },
  icons: { icon: "/assets/favicon.ico" },
  openGraph: {
    title: "Aaditya Panchal",
    description:
      "16-year-old builder & researcher — startups, AI research, and side quests.",
    url: "https://aadityapanchal.com",
    siteName: "Aaditya Panchal",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aaditya Panchal",
    description:
      "16-year-old builder & researcher — startups, AI research, and side quests.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${jetbrains.variable}`}
    >
      <head>
        <ThemeScript />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
