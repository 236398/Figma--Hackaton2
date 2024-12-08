import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "E-Commerce Chair Selling Website",
  description: "Created By S.M.Hasan ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Topbar />
        <Header />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
