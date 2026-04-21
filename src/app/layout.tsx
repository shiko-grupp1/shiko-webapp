import type { Metadata } from "next";
import { Archivo } from "next/font/google";

import "./globals.css";
import "../assets/scss/main.scss";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "700"],
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
