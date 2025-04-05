import React from "react";
import { Card } from "../components/ui/card";

const Events = () => {
  return (
    <div className="min-h-screen font-lexend">
      {/* Hero Section */}
      <div className="relative bg-black py-16">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 py-8">
          <div className="bg-black text-white text-xl md:text-5xl leading-relaxed font-bold font-lexend text-center mb-6">
              IIC & Events
            </div>
          <div className="w-20 h-1 bg-orange-500 mb-6 mx-auto"></div>
          <p className="text-white max-w-4xl text-lg md:text-xl mx-auto text-center mb-8">
            The Institutions Innovation Council (IIC) at the IIE Centre is a
            dynamic hub dedicated to fostering an entrepreneurial mindset,
            sharpening technical expertise, and expanding professional networks
            among students.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">
              Through a curated portfolio of high-impact events and initiatives,
              we deliver platforms that transcend traditional learning—equipping
              participants with cutting-edge knowledge, hands-on experience, and
              connections to industry trailblazers. Our programs are designed to
              empower students to transform ideas into solutions, collaborate
              seamlessly with peers, and gain actionable insights from leaders
              at the forefront of innovation.
            </p>
            <h2 className="text-2xl font-bold mb-2  text-gray-800">
              Explore our flagship offerings:
            </h2>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
            {/* Event 1 */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="bg-orange-500 h-2"></div>
              <div className="p-6">
                <div className="flex items-start gap-6">
                  <div className="bg-orange-500/10 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-8 w-8 text-orange-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      Internal Smart India Hackathon
                    </h3>
                    <p className="text-gray-700 mb-6">
                      The Internal Smart India Hackathon is a high-stakes,
                      immersive competition that challenges students to engineer
                      innovative solutions for pressing real-world
                      issues—spanning sectors like healthcare, sustainability,
                      and urban development. Held in a fast-paced, collaborative
                      environment, this event sharpens teamwork, critical
                      thinking, and rapid prototyping skills under stringent
                      time constraints.
                    </p>
                    <p className="text-gray-700">
                      Participants dive into complex problem statements,
                      leveraging diverse skill sets to craft actionable
                      prototypes that address tangible challenges, such as
                      optimizing disaster response or streamlining public
                      services. The hackathon provides a hands-on arena where
                      theoretical knowledge meets practical application,
                      equipping students with the resilience and ingenuity to
                      excel in dynamic, solution-driven settings.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Event 2 */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="bg-blue-500 h-2"></div>
              <div className="p-6">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-500/10 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-8 w-8 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800  ">
                      Building Real-Time Apps
                    </h3>
                    <p className="text-gray-700 mb-6">
                      The Building Real-Time Apps workshop is a cutting-edge
                      training program tailored to equip students with the
                      skills to develop dynamic, scalable applications that
                      thrive in today's digital ecosystem. Conducted in a
                      state-of-the-art lab setting, participants master
                      industry-standard tools—Redis for high-speed data
                      management, Socket.io for seamless real-time
                      communication, and React for sleek, responsive interfaces.
                    </p>
                    <p className="text-gray-700">
                      Through intensive, practical sessions, students design and
                      deploy interactive applications, honing their ability to
                      handle live data streams and optimize performance for
                      modern user demands. This workshop delivers a robust skill
                      set for crafting next-generation tech solutions,
                      positioning participants as competitive players in the
                      fast-evolving world of software development.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Event 3 */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="bg-green-500 h-2"></div>
              <div className="p-6">
                <div className="flex items-start gap-6">
                  <div className="bg-green-500/10 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-8 w-8 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      Townhall{" "}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      The Townhall is a vibrant, campus-wide gathering that
                      serves as a nexus for exploration, collaboration, and
                      leadership development. This event connects students with
                      an eclectic array of university clubs—ranging from
                      robotics collectives to sustainability task
                      forces—offering a platform to uncover new passions and
                      forge meaningful relationships with like-minded peers.
                    </p>
                    <p className="text-gray-700">
                      Held in a sleek, open venue, the Townhall facilitates
                      structured networking opportunities, where attendees
                      engage with club leaders, discover interdisciplinary
                      projects, and step into roles that amplify their
                      influence. Designed to strengthen the campus community,
                      this initiative fosters a culture of collaboration and
                      empowers students to take ownership of their personal and
                      professional growth within a supportive, interconnected
                      ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-white text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Ready to Innovate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
            Join our upcoming events and be part of the innovation ecosystem at
            IIE.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
            Register for Events
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Events;
