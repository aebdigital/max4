import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Max4 Autoservis Bratislava",
  description:
    "Autoservis MAX4 v Bratislave pre servis všetkých značiek vozidiel, pneuservis, geometriu, lakovanie, klampiarske práce a nonstop odťah.",
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${anton.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
