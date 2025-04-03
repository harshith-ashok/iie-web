"use client";
import React from "react";
import Navbar from "../components/Navbar"; // ✅ Adjusted import path


const AboutUsPage = () => {
  return (
    <div className="pb-80 pt-20 flex flex-col gap-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-4xl font-bold text-center">
          Empowering Innovation and Entrepreneurship
        </div>
        <div className="pt-10 text-xl text-center px-5">
          At the IIE Cell, we bridge academia, industry, and government to
          nurture talent, foster innovation, and transform ideas into impactful
          ventures.
        </div>
      </div>
      <div className="  bg-lightgrey rounded-3xl m-5 flex flex-col md:flex-row gap-10 justify-between">
        <ul className="list-disc align-left flex flex-col gap-4 p-10">
          <li className="text-blue font-bold text-md">
            Comprehensive Mentorship
          </li>
          Expert guidance to turn your ideas into sustainable ventures.
          <li className="text-blue font-bold text-md">Access to Resources</li>
          Leverage our ecosystem to gain tools, funding, and opportunities.
          <li className="text-blue font-bold text-md">
            Collaborative Community
          </li>
          Join a vibrant network of students, mentors, and industry experts.
        </ul>
        <div className="px-[20%] m-10 bg-darkgrey rounded-xl"></div>
      </div>
      <div className="flex flex-col items-center px-20 py-40 bg-[#1b3620]  bg-[url(https://fab-lab-iie.vercel.app/banner.jpg)] gap-4">
        <div className="font-bold text-4xl pb-10">Who We Are</div>
        <div className="text-lg">
          At the Innovation, Incubation, and Entrepreneurship (IIE) Cell, we are
          a passionate, student-driven initiative committed to nurturing
          innovative minds and entrepreneurial spirits. Our mission is to
          transform ideas into impactful ventures through mentorship, structured
          programs, and access to vital resources.
        </div>
        <div className="text-lg">
          Rooted in the inspiration drawn from global innovation hubs, we aim to
          bridge the academic and industrial worlds, fostering an environment
          where creativity thrives, ideas flourish, and startups grow into
          sustainable enterprises.
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
