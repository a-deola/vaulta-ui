import Navbar from "../custom/Navbar";
import { HeroCarousel } from "../shared/HeroCarousel";
const HeroSection = () => {
  return (
    <section className="flex flex-col w-full">
      <Navbar />
      <HeroCarousel />
    </section>
  );
};

export default HeroSection;
