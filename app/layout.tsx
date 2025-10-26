import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "P Venkat Rao Legal Associates | Property & NRI Legal Services",
  description:
    "Trusted experts in Property Documentation, Registration, Title Verification, and NRI Legal Services. Providing professional, transparent, and reliable legal solutions for real estate matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={``}
      >
        <Banner/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
