"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ✅ Correct for App Router

export default function Navbar() {
  const router = usePathname(); // ✅ Get the current route

  return (
    <nav className="navbar">
      
      {/* 🔵 Top Section: Logos + Title */}
      <div className="top-section">
        
        {/* Left: IIE Logo */}
        <div className="logo left">
          <Image src="/iie-logo.jpg" alt="IIE Logo" width={120} height={50} />
        </div>

        {/* Center: Title */}
        <h1 className="title">INNOVATION, INCUBATION & ENTREPRENEURSHIP</h1>

        {/* Right: SRM Logo */}
        <div className="logo right">
          <Image src="/srm-logo.jpg" alt="SRM Logo" width={150} height={50} />
        </div>

      </div>

      {/* ⚪ Bottom Section: Navigation Bar */}
      <div className="bottom-section">
        <ul className="nav-links">
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
            <li key={item.name} className={router.pathname === item.path ? "active" : ""}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}
