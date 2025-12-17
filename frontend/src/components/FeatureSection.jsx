import { Shield, BarChart} from "lucide-react";

const features = [
  {
    title: "Secure Authentication",
    description: "Keep your events and attendees data safe with robust login and permission control.",
    icon: Shield,
    color: "bg-yellow-500/20 text-yellow-500",
  },
  {
    title: "Real-time RSVP Control",
    description: "Track attendees in real-time and prevent overbooking for every event.",
    icon: Shield,
    color: "bg-indigo-500/20 text-indigo-500",
  },
  {
    title: "Beautiful Event Dashboard",
    description: "Manage all your events visually with a sleek, intuitive dashboard.",
    icon: BarChart,
    color: "bg-emerald-500/20 text-emerald-500",
  },
];

const StylishFeatureSection = () => {
  return (
    <section className="py-20 px-6 bg-[#F7F7F7] text-center">
      <h2 className="text-4xl font-extrabold text-[#854836] mb-4">Why Eventify?</h2>
      <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
        Eventify helps you organize, manage, and track events effortlessly. From small gatherings to large-scale events, our platform keeps everything neat, secure, and visually stunning.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full ${feature.color} text-2xl md:mr-6 mb-2 md:mb-0`}
              >
                <Icon className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-[#854836] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StylishFeatureSection;
