import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Sidebar from "./components/sidebar/SideBar";
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
      <body className={`${archivo.className} layout`}>
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
