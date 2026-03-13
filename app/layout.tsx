import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import { CookieConsent } from "@/components/cookie-consent";
import { SmoothScroll } from "@/components/smooth-scroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.max4.sk"),
  title: "Max4 Autoservis Bratislava",
  description:
    "Autoservis MAX4 v Bratislave pre servis všetkých značiek vozidiel, pneuservis, geometriu, lakovanie, klampiarske práce a nonstop odťah.",
  keywords: [
    "autoservis Bratislava",
    "Max4 Bratislava",
    "pneuservis Bratislava",
    "geometria kolies Bratislava",
    "odťahová služba Bratislava",
    "lakovanie vozidiel Bratislava",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Max4 Autoservis Bratislava",
    description:
      "Autoservis MAX4 v Bratislave pre servis všetkých značiek vozidiel, pneuservis, geometriu, lakovanie, klampiarske práce a nonstop odťah.",
    url: "https://www.max4.sk/",
    siteName: "Max4 Autoservis Bratislava",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/images/max4/hero.webp",
        alt: "Max4 Autoservis Bratislava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Max4 Autoservis Bratislava",
    description:
      "Autoservis MAX4 v Bratislave pre servis všetkých značiek vozidiel, pneuservis, geometriu, lakovanie, klampiarske práce a nonstop odťah.",
    images: ["/images/max4/hero.webp"],
  },
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
      <body className={`${anton.variable} ${montserrat.variable}`}>
        {children}
        <SmoothScroll />
        <CookieConsent />
      </body>
    </html>
  );
}
