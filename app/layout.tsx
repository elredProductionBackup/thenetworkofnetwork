import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "500"],
  style: ["normal"],
  variable: "--font-newsreader",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thenetworkof.network"),

  title: "The Network | Building Connections",
  description:
    "We operate and build high-performance networks to help businesses grow and connect globally.",

  openGraph: {
    title: "The Network | Building Connections",
    description:
      "We operate and build high-performance networks to help businesses grow and connect globally.",
    url: "https://thenetworkof.network",
    siteName: "We Operate the Networks",
    images: [
      {
        url: "https://the-networks-gold.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Network | Building Connections",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Network | Building Connections",
    description:
      "We operate and build high-performance networks to help businesses grow and connect globally.",
    images: [
      "https://thenetworkof.network/images/og-image.webp",
    ],
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
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#131314]">
        <main className="remove-mobile-screen flex-1 flex-col ">
          {children}
        </main>
        <main className="mobile-screen flex-1  w-[100%] items-center text-[20px] text-center justify-center">
          Mobile Screen
          Under Development
        </main>
      </body>
    </html>
  );
}