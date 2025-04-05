"use client";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="h-screen">
      <div className="relative bg-black py-16">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 py-8">
          <div className="bg-black text-white text-xl md:text-5xl leading-relaxed font-bold font-lexend text-center mb-6">
              About Us
            </div>
          <div className="w-20 h-1 bg-orange-500 mb-6 mx-auto"></div>
          
        </div>
      </div>
      <div className="relative bg-[url(https://fab-lab-iie.vercel.app/banner.jpg)] h-[50%] bg-cover rounded-4xl m-5">
        <div className="absolute inset-0 bg-black opacity-50 rounded-4xl"></div>
        <div className="relative z-10 text-white flex items-center justify-center h-full">
          <div className="flex flex-col gap-5">
            <div className="font-lexend p-10 flex flex-col gap-15">
              <div className="text-4xl font-bold">Who We Are</div>
              At the Innovation, Incubation, and Entrepreneurship (IIE) Cell, we
              are a passionate, student-driven initiative committed to nurturing
              innovative minds and entrepreneurial spirits. Our mission is to
              transform ideas into impactful ventures through mentorship,
              structured programs, and access to vital resources. Rooted in the
              inspiration drawn from global innovation hubs, we aim to bridge
              the academic and industrial worlds, fostering an environment where
              creativity thrives, ideas flourish, and startups grow into
              sustainable enterprises.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
