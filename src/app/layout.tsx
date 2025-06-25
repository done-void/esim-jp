import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "日本旅行 eSIM ストア",
  description: "日本旅行に便利なeSIMを簡単に購入できるストアです。Airalo公式アフィリエイト対応。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <header className="w-full py-4 px-6 text-right text-sm border-b border-gray-800">
          <nav>
            <Link href="/blog/what-is-esim" className="mr-4 hover:underline">
              日本語
            </Link>
            <Link href="/en/what-is-esim" className="hover:underline">
              English
            </Link>
          </nav>
        </header>

        <main className="px-6 py-6">{children}</main>
      </body>
    </html>
  );
}
