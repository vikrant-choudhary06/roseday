import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import MessageSection from "./components/MessageSection";
import QuoteSection from "./components/QuoteSection";
import FinalHeroSection from "./components/FinalHeroSection";
import Footer from "./components/Footer";
import RosePetals from "./components/RosePetals";

const App = () => {
  return (
    <div className="min-h-screen bg-rose-50 text-rose-900">
      <RosePetals />
      <HeroSection />
      <GallerySection />
      <MessageSection />
      <FinalHeroSection />
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default App;
