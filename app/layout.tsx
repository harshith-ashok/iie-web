import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar"; // Absolute import


export const metadata: Metadata = {
  title: "IIE Centre",
  description: "Website for the Innovation, Incubation, and Entrepreneurship Club",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white flex flex-col">
        <Navbar />
        <main className="bg-white">{children}</main>
      </body>
    </html>
  );
}
