"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import "@/components/landing/landingStyles.css";
import { Button } from "../ui/button";
import { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const t = useTranslations("Landing");

  useEffect(() => {
    const timeline = gsap.timeline();

    // Labels animations
    gsap.to("#lumaFeaturesLabel", {
      text:
        "UNA NUEVA FORMA DE ESTUDIAR LA ACTIVIDAD SOLAR. \n IMAGENES DE ALTA CALIDAD \n +10 AÑOS EN DATOS \n DAHSBOARD INTUITIVA.",
      duration: 2
    });

    gsap.to("#astroFacilities", {
      text:
        "PRODUCT CREATED IN THE FACILITIES \n OF THE UTB’S ASTRONOMY AND DATA \n SCIENCE RESEARCH SEEDBED.",
      duration: 2
    });

    ["L", "U", "M", "A"].forEach((letter, index) => {
      gsap.to(`#letter-${letter}`, {
        y: 0, // Posición final (restablecida)
        duration: 0.6 + index * 0.3,
        ease: "back.inOut(1.7)"
      });
    });
  }, []);

  return (
    <header className="relative w-full h-[100svh] flex overflow-hidden">
      <div className="block z-10 w-full h-full mix-blend-exclusion antialiased text-[#A0FFFF]">
        <nav className="flex p-6 flex-row justify-between items-center">
          <div id="lumaBrandContainer">
            <Link href={"/"}>
              <img
                className="w-8 h-auto"
                src="/images/LumaIcon.svg"
                alt="Luma Icon"
              />
            </Link>
          </div>
          <div
            id="linksContainer"
            className="flex flex-row font-archivo font-normal gap-6"
          >
            <Link href={"/"}>HOW IT WORKS</Link>
            <Link href={"/"}>TEAM</Link>
            <Link href={"/"}>CONTACT</Link>
          </div>
          <div id="getStartedContainer">
            <Button className="border rounded-none">
              <p className="font-archivo font-semibold">Get started</p>
            </Button>
          </div>
        </nav>
        <div className="absolute flex flex-row items-center text-[20vw] font-clash font-semibold
             top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden h-[1em]">
          {"LUMA".split("").map((letter, index) =>
            <p
              id={`letter-${letter}`}
              key={index}
              className="transform translate-y-[100%]"
            >
              {letter}
            </p>
          )}
        </div>

        <div className="absolute bottom-6 flex flex-row w-full justify-between items-end px-6">
          <div>
            <p
              id="lumaFeaturesLabel"
              className="font-archivo font-light text-xs max-w-[20vw] leading-3"
            />
          </div>
          <div>
            <div className="flex w-full justify-end items-baseline">
              <p className="font-archivo font-light text-xs italic">2024.</p>
              <div className="relative w-16 h-16">
                {[...Array(6)].map((_, index) =>
                  <div
                    key={index}
                    className="absolute top-0 left-0 w-16 h-16 bg-none border-white border-2 rounded-full"
                  />
                )}
              </div>
            </div>
            <p
              id="astroFacilities"
              className="text-end font-archivo font-light text-xs max-w-[20vw] leading-3"
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
