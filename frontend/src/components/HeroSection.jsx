import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://eventsmanagementkerala.com/wp-content/uploads/2023/02/blog-2.27e5a04.webp'), 
                          url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-2xl p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFB22C] mb-4">
          Create & Manage Events Seamlessly
        </h1>
        <p className="text-[#F7F7F7] mb-6 text-lg">
          Weddings, birthdays, corporate meetups — manage everything in one place with ease and style.
        </p>
        <Link
          to="/events"
          className="bg-[#FFB22C] px-6 py-3 rounded text-black font-semibold"
        >
          Explore Events
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
