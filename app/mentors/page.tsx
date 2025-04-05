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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Our Mentors</h1>
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
              <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mb-4"></div>
              <h3 className="text-xl font-semibold mb-2  text-black">
                Industry Experience
              </h3>
              <p className="text-gray-600">
                Access to professionals with decades of experience across
                technology, business, and innovation sectors.
              </p>
            </Card>

            <Card className="p-6 border-none shadow-md flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mb-4"></div>
              <h3 className="text-xl font-semibold mb-2  text-black">Strategic Guidance</h3>
              <p className="text-gray-600">
                Personalized advice to overcome challenges and identify
                opportunities for growth and innovation.
              </p>
            </Card>

            <Card className="p-6 border-none shadow-md flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mb-4"></div>
              <h3 className="text-xl font-semibold mb-2  text-black">Network Access</h3>
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
