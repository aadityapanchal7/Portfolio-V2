import type { Metadata } from "next";
import "../styles/globals.css";
import { Geist } from "next/font/google";
import ThemeScript from "./components/theme-script";
import ThemeToggle from "./components/theme-toggle";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aadityapanchal.com"),
  title: "Aaditya Panchal",
  description:
    "Aaditya Panchal — 17-year-old builder & researcher. CTO of Superpower, co-founder of Seekir, research at Emory, MIT Critical Data & Dartmouth Health.",
  keywords: [
    "Aaditya Panchal",
    "Aaditya Panchal portfolio",
    "Aaditya Panchal builder",
    "Aaditya Panchal research",
    "co-founder",
    "AI research",
    "Superpower",
    "Seekir",
  ],
  authors: [{ name: "Aaditya Panchal" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aaditya Panchal",
    description:
      "17-year-old builder & researcher — startups, AI research, and side quests.",
    url: "https://aadityapanchal.com",
    siteName: "Aaditya Panchal",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aaditya Panchal",
    description:
      "17-year-old builder & researcher — startups, AI research, and side quests.",
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
      className={geist.variable}
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
