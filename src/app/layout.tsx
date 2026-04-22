import type { Metadata } from "next";
import { Archivo } from "next/font/google";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
