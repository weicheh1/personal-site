import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://weichehsu.com"),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.bio.join(" "),
  keywords: [
    "Wei-Che Hsu",
    "Arizona State University",
    "Industrial Engineering",
    "simulation-optimization",
    "stochastic modeling",
    "high-dimensional data analysis",
  ],
  authors: [{ name: siteConfig.name, url: "https://weichehsu.com" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://weichehsu.com",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.bio[0],
    images: [
      {
        url: "/profile.png",
        width: 192,
        height: 192,
        alt: `${siteConfig.name} profile photo`,
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
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-14 sm:px-8 sm:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
