import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import "./header.css";
import "./page.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raxis株式会社",
  description: "Raxis株式会社のホームページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
