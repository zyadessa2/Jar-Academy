import type { Metadata } from "next";
import { Cairo, Montserrat } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "700", "900"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jar Academy",
  description: "Study Smarter. Understand Faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="font-sans min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
