import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import AuthProvider from "./components/Auth/AuthProvider";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${archivo.className}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
