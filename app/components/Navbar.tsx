"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ✅ Correct for App Router
import { useState } from "react";

export default function Navbar() {
  const router = usePathname(); // ✅ Get the current route
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  return (
    <nav className="bg-black text-white font-lexend">
      <div className="flex items-center justify-between px-6 py-8">
        {/* Logo */}
        <Image src="/iie-logo.png" alt="IIE Logo" width={100} height={20} />

        {/* Hamburger Icon */}
        <button
          className="block md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links for larger screens */}
        <ul className="hidden lg:flex text-white font-bold gap-10">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Programs", path: "/programs" },
            { name: "Facilities", path: "/facilities" },
            { name: "Mentors", path: "/mentors" },
            { name: "IIC Events", path: "/iie-events" },
            { name: "Insights", path: "/insights" },
            { name: "Apply Now", path: "/apply-now" },
            { name: "Contact Us", path: "/contact-us" },
          ].map((item) => (
            <li
              key={item.name}
              className={`relative py-2 ${
                router === item.path
                  ? "active text-orange-400"
                  : "hover:text-orange-400"
              } group`}
            >
              <Link href={item.path}>{item.name}</Link>
              <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
          
        </ul>
        <Image src="/iie-logo.png" className="hidden md:block" alt="IIE Logo" width={100} height={20} />

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <ul className="flex flex-col text-white font-bold gap-4 px-6 py-4">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Programs", path: "/programs" },
              { name: "Facilities", path: "/facilities" },
              { name: "Mentors", path: "/mentors" },
              { name: "IIC Events", path: "/iie-events" },
              { name: "Insights", path: "/insights" },
              { name: "Apply Now", path: "/apply-now" },
              { name: "Contact Us", path: "/contact-us" },
            ].map((item) => (
              <li
                key={item.name}
                className={`py-2 ${
                  router === item.path
                    ? "active text-orange-400"
                    : "hover:text-orange-400"
                }`}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
            
          </ul>
          
        </div>
      )}
    </nav>
  );
}
