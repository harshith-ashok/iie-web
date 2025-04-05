"use client"; // Needed for Framer Motion animations in Next.js App Router
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import '../globals.css'; // Ensure styles are imported

export default function Facilities() {
  const facilities = [
    { 
      title: "FAB LAB", 
      description: "Enter a dynamic, high-tech workshop where advanced manufacturing redefines possibility. This expansive facility hums with the latest 3D printers, rapidly layering materials to produce detailed prototypes with pinpoint accuracy. Laser cutters operate with seamless precision, effortlessly shaping metal, wood, or acrylic into components that match your exact specifications. CNC machines stand ready, transforming raw blocks into polished, functional designs with automated efficiency. Equipped with an array of professional-grade tools—from soldering stations to digital oscilloscopes—this lab is a haven for creators, offering everything needed to bring visionary concepts to life in a single, streamlined space.", 
      image: "/images/coworking.png" 
    },
    { 
      title: "Mobility Centre", 
      description: "Step into a cutting-edge testing hub dedicated to the future of transportation and mobility solutions. Here, autonomous drones glide through controlled airspace, their sensors and algorithms fine-tuned in real time under bright, focused lighting. Smart transit pods move silently across a precision-engineered track, showcasing the next wave of urban mobility with zero-emission efficiency. Innovators have access to advanced diagnostic tools and simulation platforms, enabling rapid iteration and optimization of systems—whether it’s a delivery drone or a connected vehicle ecosystem. This sleek, purpose-built environment is where mobility concepts are tested, refined, and propelled toward real-world impact.", 
      image: "/images/lab.png" 
    },
    { 
      title: "Design Thinking Lab", 
      description: "Discover a modern, light-filled workspace crafted to spark creativity and solve complex challenges. Expansive whiteboards line the walls, serving as canvases for brainstorming sessions where ideas flow freely in bold marker strokes. Teams collaborate around ergonomic tables, surrounded by a cascade of colorful sticky notes that map out strategies and insights. With access to digital collaboration tools and a curated library of design resources, this lab fosters an agile, iterative approach to problem-solving. It’s an inviting, professional setting where diverse perspectives converge, fueled by coffee and a shared drive to craft elegant, human-centered solutions.", 
      image: "/images/mentorship.png" 
    },
    
  ];

  return (
    <>
      {/* Include Navbar */}


      <div className="facilities-container">
        {/* Heading Animation */}
        <motion.h1
          className="facilities-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Facilities
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p 
          className="facilities-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the state-of-the-art facilities designed to support startups and entrepreneurs.
        </motion.p>

        {/* Facility Cards */}
        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="facility-card"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={facility.image} alt={facility.title} className="facility-image" />
              <h2 className="facility-title">{facility.title}</h2>
              <p className="facility-description">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
