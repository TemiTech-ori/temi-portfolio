import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Temitope Emmanuel | Founder & Digital Solutions Creator",
  description:
    "I'm Ibitoye Temitope Emmanuel, founder of NEXORIA SOLUTIONS. I build digital products, web applications, and AI-powered solutions that solve real problems.",
  keywords: [
    "Temitope Emmanuel",
    "NEXORIA SOLUTIONS",
    "Software Developer",
    "Digital Solutions",
    "AI Solutions",
    "Product Builder",
    "ACADA+",
  ],
  authors: [{ name: "Temitope Emmanuel" }],
  openGraph: {
    title: "Ibitoye Temitope Emmanuel | Founder of NEXORIA SOLUTIONS",
    description:
      "Explore my journey, digital products, and technology projects.",
    siteName: "Temitope Emmanuel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temitope Emmanuel | Founder of NEXORIA SOLUTIONS",
    description:
      "Building meaningful digital products and technology solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}