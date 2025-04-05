export default function Home() {
  return (
    <div className="text-black h-full bg-white">
      {/* Black overlay */}
      <div className="relative bg-[url(https://fab-lab-iie.vercel.app/home-3.jpg)]  h-[65%] bg-cover rounded-4xl m-5">
        <div className="absolute inset-0 bg-black opacity-40 rounded-4xl"></div>
        <div className="relative z-10 text-white flex items-center pl-[10%] h-full">
          <div className="flex flex-col gap-5">
            <div className="text-5xl leading-relaxed font-bold font-lexend">
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
      <div className="flex flex-col md:flex-row justify-between p-20 gap-20 bg-blue-50">
        <div>
          <div className="bg-[url(https://fab-lab-iie.vercel.app/_next/image?url=%2Foverview-1.jpg&w=3840&q=75)] bg-cover rounded-xl h-60 md:w-200 md:h-128"></div>
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
      <div className="relative bg-[url(https://fab-lab-iie.vercel.app/_next/image?url=%2Fmission.jpg&w=3840&q=75)] my-20 h-[65%] bg-cover rounded-4xl m-5 p-10">
        <div className="absolute inset-0 bg-black opacity-40 rounded-4xl"></div>
        <div className="relative z-10 text-white flex flex-col gap-5 p-10 h-full">
          <div className="text-5xl leading-relaxed font-bold font-lexend">
            Misson
          </div>
          <div>
            To create an ecosystem that sensitizes, engages, and supports
            innovators from ideation to product development, enabling the
            innovation community with access to best-in-class infrastructure,
            mentorship, and funding while protecting the intellectual assets
            evolved from inventive processes.
          </div>
          <div className="absolute inset-x-0 bottom-0 font-lexend p-5 flex gap-10">
            <a href="/apply-now" className="p-5 bg-amber-300 text-black rounded-4xl hover:bg-amber-500 transition-all">Apply for Incubation</a>
            <a href="/apply-now" className="p-5 bg-amber-300 text-black rounded-4xl hover:bg-amber-500 transition-all">Apply for Innovators</a>

          </div>
        </div>
      </div>
    </div>
  );
}
