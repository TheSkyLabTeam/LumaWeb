import HeroSection from "@/components/landing/heroSection";
import Sections from "@/components/landing/sections";
import Footer from "@/components/footer/Footer1";
import Teamsection from "./teamsection";

export const Landing = () => {
  return (
    <main className="w-screen flex flex-col bg-[#0D0D0D]">
      <HeroSection />
      <Sections />
      <Teamsection />
      <Footer />
    </main>
  );
};
