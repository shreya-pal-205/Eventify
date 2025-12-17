import { motion } from "framer-motion";

const ModernInfoGraphicsSection = () => {
  return (
    <section className="py-20 px-6 bg-[#F7F7F7] flex flex-col md:flex-row items-center justify-center gap-12 relative overflow-hidden">
      
      {/* Animated Image */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0"
      >
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-yellow-400 via-indigo-500 to-emerald-400 animate-spin-slow"></div>
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&h=400&w=600"
          alt="Events Illustration"
          className="relative w-full h-full object-cover rounded-full shadow-2xl border-8 border-white"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex flex-col gap-6"
      >
        <h2 className="text-4xl font-extrabold text-[#854836]">
          Beautiful & Organized Events
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Eventify allows you to design stunning event pages with images, descriptions, locations, and real-time RSVP tracking. 
          <span className="block mt-2">
            Elevate your event experience with a professional, aesthetic, and interactive platform that keeps your attendees engaged.
          </span>
          <span className="block mt-2">
            Showcase every event detail, highlight key moments, and ensure seamless organization with modern UI and intuitive features.
          </span>
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="self-start bg-gradient-to-r from-yellow-400 via-indigo-500 to-emerald-400 px-6 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition"
        >
          Explore Features
        </motion.button>
      </motion.div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-200/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200/30 rounded-full filter blur-3xl animate-pulse-slow"></div>

    </section>
  );
};

export default ModernInfoGraphicsSection;
