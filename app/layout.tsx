import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratyush Vidyarthi | Software Engineer & Computer Science Graduate",
  description:
    "Explore Pratyush Vidyarthi's portfolio featuring full-stack development projects, AI/ML implementations, and professional experience. Learn about cutting-edge software engineering and coding expertise.",
  keywords: [
    "Pratyush Vidyarthi",
    "Software Developer Portfolio",
    "Computer Science Projects",
    "Full-Stack Development",
    "AI/ML Portfolio",
    "React Developer",
    "Next.js Projects",
    "JavaScript Engineer",
    "Software Engineer Portfolio",
    "TypeScript Developer",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo-192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://pratyushv.com",
    title: "Pratyush Vidyarthi | Software Developer Portfolio",
    description:
      "Explore my technical projects, professional journey, and development expertise.",
    siteName: "Pratyush Vidyarthi Portfolio",
    images: [
      {
        url: "https://pratyushv.com/logo-512.png",
        width: 1200,
        height: 630,
        alt: "Pratyush Vidyarthi Portfolio Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
