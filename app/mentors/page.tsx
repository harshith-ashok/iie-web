"use client";
import { Card } from "../components/ui/card";
import { cn } from "../../app/lib/utils";
import MentorCard from "../components/MentorCard";

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: "XYZ",
      title: "Tech Innovation Expert",
      expertise: "AI & Machine Learning",
      image: "/lovable-uploads/aac456fb-1e48-49c2-8b26-b9c38e6d8f9b.png",
      background: "bg-gradient-to-br from-amber-500/10 to-orange-600/20",
    },
    {
      id: 2,
      name: "ABC",
      title: "Startup Strategy Advisor",
      expertise: "Business Development & Marketing",
      image: "/lovable-uploads/ab186aa5-7e47-4acb-951c-1911181e55a5.png",
      background: "bg-gradient-to-br from-amber-500/10 to-orange-600/20",
    },
    {
      id: 3,
      name: "YSC",
      title: "Investment Specialist",
      expertise: "Venture Capital & Funding",
      image: "/placeholder.svg",
      background: "bg-gradient-to-br from-amber-500/10 to-orange-600/20",
    },
    {
      id: 4,
      name: "VVS",
      title: "Product Development Lead",
      expertise: "UX Design & Product Strategy",
      image: "/placeholder.svg",
      background: "bg-gradient-to-br from-amber-500/10 to-orange-600/20",
    },
    {
      id: 5,
      name: "IUY",
      title: "Growth Strategist",
      expertise: "Market Expansion & Scaling",
      image: "/placeholder.svg",
      background: "bg-gradient-to-br from-amber-500/10 to-orange-600/20",
    },
    {
      id: 6,
      name: "JAI",
      title: "Tech Industry Veteran",
      expertise: "Software Architecture & Engineering",
      image: "/placeholder.svg",
      background: "bg-gradient-to-br from-amber-500/10 to-orange-600/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-black text-white">
        <div className="container mx-auto py-28 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            Our Mentors
          </h1>
          <div className="w-20 h-1 bg-orange-500 mb-6 mx-auto"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center">
            Our mentors are seasoned professionals from diverse industries,
            offering invaluable guidance to help startups navigate challenges
            and succeed.
          </p>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>

      {/* Mentorship Benefits */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Why Our Mentors Make a Difference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-none shadow-md flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2  text-black">
                Industry Experience
              </h3>
              <p className="text-gray-600">
                Access to professionals with decades of experience across
                technology, business, and innovation sectors.
              </p>
            </Card>

            <Card className="p-6 border-none shadow-md flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2  text-black">
                Strategic Guidance
              </h3>
              <p className="text-gray-600">
                Personalized advice to overcome challenges and identify
                opportunities for growth and innovation.
              </p>
            </Card>

            <Card className="p-6 border-none shadow-md flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2  text-black">
                Network Access
              </h3>
              <p className="text-gray-600">
                Connect with influential industry leaders and potential
                partners, investors, and collaborators.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
