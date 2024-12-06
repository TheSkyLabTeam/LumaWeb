import { BentoSection } from "@/components/landing/BentoSection/bentoSection";
import HeroSection from "@/components/landing/heroSection";

export const Landing = () => {
  return (
    <main className="w-screen flex flex-col bg-[#0D0D0D]">
     <HeroSection />
     <BentoSection />
    </main>
  )
}
