import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Users, Globe, Sparkles } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Smart Event Management",
    desc: "Create, update and manage events effortlessly with scheduling, images, locations and capacity controls.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "Join meaningful events, connect with like-minded people and grow your professional or social network.",
  },
  {
    icon: Globe,
    title: "Accessible Anywhere",
    desc: "Fully responsive design ensuring seamless experience across mobile, tablet and desktop devices.",
  },
  {
    icon: Sparkles,
    title: "Modern & Secure",
    desc: "Built using modern web technologies with authentication, authorization and secure data handling.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white">
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-[#FFB22C] to-[#FFD56B] bg-clip-text text-transparent">
              Eventify
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Eventify is a next-generation event management and networking
            platform crafted to bring people together through impactful,
            well-organized, and memorable experiences.
          </p>
        </div>

        {/* GLOW EFFECT */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[500px] h-[500px] bg-[#FFB22C]/20 blur-[140px] rounded-full"></div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 px-6 bg-[#F7F7F7] text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Connecting People. Creating Experiences.
            </h2>

            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold">Eventify</span>, we believe
              events are more than just gatherings. They are opportunities to
              build relationships, share ideas, celebrate milestones and create
              lasting memories.
            </p>

            <p className="text-gray-700 leading-relaxed">
              From corporate alumni meetups and professional workshops to
              cultural ceremonies and social celebrations, Eventify provides a
              complete solution to organize and participate in events with ease.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Designed with simplicity, scalability and security at its core,
              Eventify ensures a smooth experience for both organizers and
              attendees.
            </p>
          </div>

          {/* GLASS FEATURE CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FFB22C]/20">
                      <Icon className="text-[#FFB22C]" />
                    </div>

                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER QUOTE */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            More Than Events. A Platform for Moments.
          </h3>

          <p className="text-gray-400 text-lg">
            Eventify is where ideas meet people, plans turn into experiences,
            and moments become memories.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
