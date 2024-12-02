import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import "@/components/landing/landingStyles.css";
import { Button } from "../ui/button";

const HeroSection = () => {
  const t = useTranslations("Landing");
  return (
    <header className="relative w-full h-[100svh] flex overflow-hidden">
      <div className="block z-10 w-full h-full mix-blend-exclusion antialiased text-[#A0FFFF]">
        <nav className="flex p-6 flex-row justify-between items-center">
          <div id="lumaBrandContainer">
            <Link href={'/dashboard'}>
              <img className="w-8 h-auto" src="/images/LumaIcon.svg" alt="Luma Icon" />
            </Link>
          </div>
          <div id="linksContainer" className="flex flex-row font-archivo font-normal  gap-6">
            <Link href={'/'}>HOW IT WORKS</Link>
            <Link href={'/'}>TEAM</Link>
            <Link href={'/'}>CONTACT</Link>
          </div>
          <div id="getStartedContainer">
            <Button className="border rounded-xl">
              <p className="font-archivo font-semibold">Get started</p>
            </Button>
          </div>
        </nav>
        <h1 className="absolute text-[20vw] font-clash font-semibold
            top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          LUMA
        </h1>
        <div className="absolute bottom-6 flex flex-row w-full justify-between items-end px-6">
          <div>
            <p className="font-archivo font-light text-[0.75vw] max-w-[20vw] leading-3">
              UNA NUEVA FORMA DE ESTUDIAR LA ACTIVIDAD SOLAR. <br /> IMAGENES DE
              ALTA CALIDAD <br /> +10 AÑOS EN DATOS <br /> DAHSBOARD INTUITIVA
            </p>
          </div>
          <div>
            <img
              src="/images/labelFacilities.svg"
              alt="Created at the AstroUTB facilities"
            />
          </div>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bgSunVideo.mp4" type="video/mp4" />
      </video>
    </header>
  );
};

export default HeroSection;
