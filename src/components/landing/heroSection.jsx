"use client";

import { useTranslations } from "next-intl";
import "@/components/landing/landingStyles.css";
import { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { LandingNav } from "./landingnav";
gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const t = useTranslations("Landing");

  useEffect(() => {
    // Labels animations
    gsap.to("#lumaFeaturesLabel", {
      text:
        "UNA NUEVA FORMA DE ESTUDIAR LA ACTIVIDAD SOLAR. \n IMAGENES DE ALTA CALIDAD \n +10 AÑOS EN DATOS \n DAHSBOARD INTUITIVA.",
      duration: 1
    });

    gsap.to("#astroFacilities", {
      text:
        "PRODUCT CREATED IN THE FACILITIES \n OF THE UTB’S ASTRONOMY AND DATA \n SCIENCE RESEARCH SEEDBED.",
      duration: 1
    });

    // Circles animations
    [...Array(6)].forEach((_, index) => {
      gsap.to(`#circle-${index}`, {
        x: -100 + index * 20, // Posición final
        duration: 0.6,
        ease: "back.inOut(1.7)"
      });
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
        <LandingNav />
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
              <div className="relative w-16 h-16 mb-2">
                {[...Array(6)].map((_, index) =>
                  <div
                    key={index}
                    id={`circle-${index}`}
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
