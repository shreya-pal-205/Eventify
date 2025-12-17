import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import EventCardsSection from "@/components/EventCardsSection";
import InfoGraphicsSection from "@/components/InfoGraphicsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="bg-[#F7F7F7]">
      {/* <Navbar /> */}
      <HeroSection />
      <FeatureSection />
      <EventCardsSection />
      <InfoGraphicsSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
