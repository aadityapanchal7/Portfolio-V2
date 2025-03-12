import type { Metadata } from "next";
import '../styles/globals.css';
import { Open_Sans } from 'next/font/google';

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaditya Panchal",
  description: "Aaditya Panchal is a Software Engineer in his Sophomore year of high school with a passion for computational biology and web development.",
  keywords: "Aaditya Panchal, portfolio, web developer, projects",
  icons: {
    icon: './assets/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Aaditya Panchal" />
        <meta property="og:description" content="Aaditya Panchal is a Software Engineer in his Sophomore year of high school with a passion for computational biology and web development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aadityapanchal.vercel.app" />
      </head>
      <body
        className={`${opensans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
