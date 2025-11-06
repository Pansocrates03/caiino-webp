import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SecondaryNavbar from "@/components/SecondaryNavbar";

const inter = Inter({
  variable: "--font-geist-sans", // Keep the same variable name for minimal CSS changes
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono", // Keep the same variable name for minimal CSS changes
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CAIINNO - Centro de Análisis para la Investigación en Innovación, A.C.",
  description: "Think tank mexicano dedicado a la investigación y promoción de la innovación para el desarrollo sostenible y el bienestar social.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <Navbar/>
        <SecondaryNavbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}