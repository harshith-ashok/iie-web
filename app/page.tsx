export default function Home() {
  return (
    <div className="text-black h-full bg-white">
      {/* Black overlay */}
      <div className="relative bg-[url(https://fab-lab-iie.vercel.app/home-3.jpg)] h-[65%] bg-cover rounded-4xl m-5">
        <div className="absolute inset-0 bg-black opacity-40 rounded-4xl"></div>
        <div className="relative z-10 text-white flex items-center pl-[10%] h-full">
          <div className="flex flex-col gap-5">
            <div className="text-xl md:text-5xl leading-relaxed font-bold font-lexend">
              Innovating today,
              <br /> Empowering startups
            </div>
            <div className="font-lexend">
              Collaborate, create, and innovate in the realm of deep
              technologies. Join us to build the future today.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between p-5  items-center gap-20 bg-blue-50">
        <div>
          <div className="bg-[url(https://fab-lab-iie.vercel.app/_next/image?url=%2Foverview-1.jpg&w=3840&q=75)] bg-cover rounded-xl w-60 md:w-200 md:h-128"></div>
        </div>
        <div className="flex gap-5 flex-col">
          <div className="font-lexend font-bold text-4xl">Overview</div>
          <div className="font-lexend leading-relaxed">
            The Innovation, Incubation, and Entrepreneurship (IIE) Cell is
            dedicated to nurturing entrepreneurial talent and transforming
            innovative ideas into impactful ventures. With a strong focus on
            mentorship, structured programs, and access to essential resources,
            IIE creates an environment where creativity thrives and startups can
            scale into sustainable enterprises. By bridging the gap between
            academia and industry, we provide aspiring entrepreneurs with the
            tools and opportunities needed to bring their visions to life. As a
            key part of a broader innovation ecosystem, IIE collaborates with
            industry leaders, academic experts, and government bodies to foster
            a culture of inclusivity and shared learning. Our initiatives are
            designed to inspire curiosity, encourage collaboration, and
            challenge conventional thinking, equipping individuals with the
            skills and confidence to drive meaningful change. Through this
            approach, we empower the next generation of innovators to build
            solutions that make a lasting impact on society.
          </div>
        </div>
      </div>
      <div className="relative bg-[url(https://fab-lab-iie.vercel.app/_next/image?url=%2Fmission.jpg&w=3840&q=75)] mt-5 h-[75%] bg-cover p-10">
        <div className="absolute inset-0 bg-black opacity-40 "></div>
        <div className="relative z-10 text-white flex flex-col gap-5 p-10 h-full">
          <div className="text-5xl leading-relaxed font-bold font-lexend">
            Misson
          </div>
          <div className="font-lexend">
            To serve as a catalyst for innovation by providing mentorship,
            access to resources, industry exposure, and incubation support. We
            aim to empower individuals to address real-world challenges, build
            sustainable solutions, and lead transformative change in society.
          </div>
          <div className="absolute hidden md:flex inset-x-0 bottom-0 font-lexend p-10 sm:flex-row flex-col   gap-5">
            <a
              href="/apply-now"
              className="p-5 bg-amber-300 text-black rounded-4xl hover:bg-amber-500 transition-all"
            >
              Apply for Incubation
            </a>
            <a
              href="/apply-now"
              className="p-5 bg-amber-300 text-black rounded-4xl hover:bg-amber-500 transition-all"
            >
              Apply for Innovators
            </a>
          </div>
        </div>
      </div>
      <div className="lg:p-20 p-2 font-lexend grid grid-cols-1 lg:grid-cols-5 gap-20 text-center mx-10">
        <div className="bg-green-300 p-10 rounded-xl hover:scale-105 transition-all cursor-pointer flex flex-col gap-2 justify-center items-center">
          <div className="text-xl font-bold">Resource Accessibility</div>
          <div>
            Ensure innovators have access to the latest tools and technologies.
          </div>
        </div>
        <div className="bg-blue-300 p-10 rounded-xl hover:scale-105 transition-all cursor-pointer  flex flex-col gap-2 justify-center items-center">
          <div className="text-xl font-bold">Mentorship</div>
          <div>
            Provide guidance from industry leaders and experienced
            professionals.
          </div>
        </div>
        <div className="bg-red-300 p-10 rounded-xl hover:scale-105 transition-all cursor-pointer  flex flex-col gap-2 justify-center items-center">
          <div className="text-xl font-bold">Collaboration</div>
          <div>
            Foster a community where knowledge and resources are shared.
          </div>
        </div>
        <div className="bg-purple-300 p-10 rounded-xl hover:scale-105 transition-all cursor-pointer  flex flex-col gap-2 justify-center items-center">
          <div className="text-xl font-bold">Skill Development</div>
          <div>
            Equip entrepreneurs with the expertise to navigate the business
            landscape.
          </div>
        </div>
        <div className="bg-gray-300 p-10 rounded-xl hover:scale-105 transition-all cursor-pointer  flex flex-col gap-2 justify-center items-center">
          <div className="text-xl font-bold">Industry Partnerships</div>
          <div>
            Build strong ties with organizations to support innovation and
            growth.
          </div>
        </div>
      </div>
      <div className="relative z-10 text-black text-center flex flex-col gap-5 p-10 bg-white m-5 rounded-xl">
        <div className="text-5xl leading-relaxed font-bold font-lexend">
          Vision
        </div>
        <div className="font-lexend pb-10">
          To create a vibrant ecosystem that nurtures innovation, fosters
          creativity, and promotes entrepreneurial excellence by empowering
          students to transform ideas into impactful solutions.
        </div>
        <div className="lg:px-20 p-2 font-lexend grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="border-green-200 border-2 p-10 rounded-xl hover:scale-105 transition-all cursor-pointer">
            <div className="text-xl font-bold">Nurture Creativity </div>
            <div>
              Establish an environment where innovative ideas are encouraged and
              supported.
            </div>
          </div>
          <div className="border-blue-200 border-2 p-10 rounded-xl hover:scale-105 transition-all cursor-pointer">
            <div className="text-xl font-bold">Empower Innovators</div>
            <div>
              Provide resources and mentorship to turn concepts into impactful
              solutions.
            </div>
          </div>
          <div className="border-red-200 border-2 p-10 rounded-xl hover:scale-105 transition-all cursor-pointer">
            <div className="text-xl font-bold">Societal Impact</div>
            <div>
              Focus on creating sustainable ventures that address real-world
              problems.
            </div>
          </div>
          <div className="border-purple-200 border-2 p-10 rounded-xl hover:scale-105 transition-all cursor-pointer">
            <div className="text-xl font-bold">Economic Growth</div>
            <div>
              Foster entrepreneurship to contribute to global economic
              development.
            </div>
          </div>
          <div className="border-gray-200 border-2 p-10 rounded-xl hover:scale-105 transition-all cursor-pointer">
            <div className="text-xl font-bold">Inclusive Ecosystem</div>
            <div>Build a hub that supports diversity and collaboration.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
