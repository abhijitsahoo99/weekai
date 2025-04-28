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
  title: "WEEKAI",
  description: "Get more done every week",
  openGraph: {
    title: "WEEKAI",
    description: "Get more done every week",
    images: [
      {
        url: "/heroelonweek.png",
        width: 1200,
        height: 630,
        alt: "WEEKAI - Get more done every week",
      },
    ],
    type: "website",
    siteName: "WEEKAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEEKAI",
    description: "Get more done every week",
    images: ["/heroelonweek.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
