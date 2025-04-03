"use client"; // Needed for Framer Motion animations in Next.js App Router
import { motion } from "framer-motion";
import '../globals.css';
 // Ensure you have styles imported

export default function Programs() {
  const programs = [
    { 
      title: "Udayam",
      tag : "(Pre-Incubation)", 
      description: "Udayam serves as a foundational platform for nurturing early-stage concepts, delivering targeted support to refine and validate ideas with precision. Participants engage in a structured environment where seasoned mentors—experienced entrepreneurs with proven track records—provide actionable feedback and strategic direction. Access to essential tools, including digital collaboration platforms and market analysis resources, empowers individuals to develop their concepts into clear, executable plans. Networking opportunities with peers and industry professionals further enhance collaboration, enabling participants to build connections that strengthen their entrepreneurial foundation. This program ensures ideas are rigorously shaped for real-world potential.", 
      image: "/images/startup.png" 
    },
    { 
      title: "Prathisthanam", 
      tag : "(Prototype and MVP)",
      description: "Prathisthanam provides critical support for startups transitioning from concept to tangible product, offering a robust framework to build and test prototypes with efficiency. Participants gain access to advanced facilities—featuring 3D printers, laser cutters, and other cutting-edge equipment—paired with technical expertise from specialists who guide the development process. Hands-on workshops focus on rapid prototyping, user testing, and iterative refinement, equipping teams with the skills to create and validate minimum viable products (MVPs) that meet market standards. This program bridges the gap between ideation and execution, ensuring startups emerge with functional, market-ready solutions.", 
      image: "/images/innovation.png" 
    },
    { 
      title: "Digvijyam", 
      tag : "(Incubation)",
      description: "Digvijyam offers a comprehensive incubation experience for startups prepared to scale, delivering the resources and strategic support necessary for sustainable growth. Entrepreneurs benefit from in-depth mentorship by industry leaders who provide tailored strategies for market expansion and operational success. The program facilitates access to funding through expertly curated pitch sessions, connecting participants with investors ready to back high-potential ventures. Exclusive industry partnerships open doors to market opportunities, while ongoing guidance ensures businesses are built for long-term resilience. Digvijyam transforms ambitious startups into competitive, impactful enterprises poised to lead their sectors.", 
      image: "/images/tech_talks.png" 
    },
  ];

  return (
    <div className="programs-container">
      {/* Heading with Animation */}
      <motion.h1
        className="programs-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Programs
      </motion.h1>

      {/* Glassy Subtitle */}
      <motion.p 
        className="subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
       The IIE Centre’s programs are strategically designed to support innovators at every phase of their entrepreneurial journey, providing structured guidance, advanced resources, and expert mentorship to drive success. Each initiative is tailored to transform ideas into viable ventures, ensuring participants are equipped with the tools and insights needed to excel in competitive markets. Below is an overview of our offerings:
      </motion.p>

      {/* Program Cards */}
      <div className="programs-grid">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="program-card"
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={program.image} alt={program.title} className="program-image" />
            <h1 className="program-title">{program.title}</h1>
            <h2 className="tag">{program.tag}</h2>
            <p className="program-description">{program.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
