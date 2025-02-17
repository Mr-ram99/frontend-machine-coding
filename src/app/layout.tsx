import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`font-medium text-black-87 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-100 ${inter.className}`}
      >
        <Link href="/">
          <button className="p-2 mx-4 mt-4 bg-slate-100">Home</button>
        </Link>
        {children}
      </body>
    </html>
  );
}
