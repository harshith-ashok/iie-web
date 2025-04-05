import type { Metadata } from "next";
// import { Geist, Geist_Mono, Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";  // Absolute import
 // Ensure Navbar.tsx exists in /app/components
// const lexend = Lexend_Deca({
//   variable: "--font-lexend-sans",
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: "IIE Website",
  description: "Website for the Innovation, Incubation, and Entrepreneurship Club",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white`}>
        <Navbar />
        <main className="bg-white h-screen">{children}</main>
      </body>
    </html>
  );
}
