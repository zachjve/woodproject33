import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://woodproject33.example"),
  title: "Projet Bois 33 — Menuiserie & Design sur mesure",
  description:
    "Menuiserie artisanale en Gironde : dressings, cuisines, escaliers, terrasses, aménagements intérieurs & extérieurs. Devis précis + plan 3D.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Projet Bois 33 / woodproject33",
    description:
      "Menuiserie artisanale : agencement, mobilier sur mesure, terrasses, escaliers, vans & bateaux.",
    url: "https://woodproject33.example",
    siteName: "Projet Bois 33",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Projet Bois 33 - Menuiserie artisanale",
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
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-900 selection:bg-amber-200 selection:text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
