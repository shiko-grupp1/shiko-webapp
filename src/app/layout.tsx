import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "",
  description: "",
};

const archivo = localFont({
  src: [
    {
      path: "./fonts/Archivo-VariableFont.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/Archivo-Italic-VariableFont.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-archivo",
  fallback: ["system-ui", "arial", "sans-serif"],
  display: "swap",
});

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
