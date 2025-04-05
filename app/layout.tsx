import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar"; // Absolute import
import Footer from "./components/Footer"; // Absolute import


export const metadata: Metadata = {
  title: "IIE Centre",
  description: "Website for the Innovation, Incubation, and Entrepreneurship Club",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
