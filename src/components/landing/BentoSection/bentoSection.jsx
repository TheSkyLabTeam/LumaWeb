"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { FloatingImagesContainer } from "./floatingImagesContainer";
gsap.registerPlugin(ScrollTrigger);

export const BentoSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".featuresSection",
        start: "top 70%"
      }
    });

    tl
      .to("#visualizationContainer", {
        y: 0,
        duration: 1,
        ease: "power4.out"
      })
      .to(
        "#spectralContainer",
        {
          x: 0,
          duration: 1,
          ease: "power4.out"
        },
        "-=0.8"
      )
      .to(
        "#extraFeatureOneContainer",
        {
          x: 0,
          duration: 1,
          ease: "power4.out"
        },
        "-=0.8"
      )
      .to(
        "#extraFeatureTwoContainer",
        {
          x: 0,
          duration: 1,
          ease: "power4.out"
        },
        "-=0.8"
      )
      .to(
        "#extraFeatureThreeContainer",
        {
          x: 0,
          duration: 1,
          ease: "power4.out"
        },
        "-=0.8"
      )
      .to(
        "#accesibilityContainer",
        {
          y: 0,
          duration: 0.8,
          ease: "power4.out"
        },
        "-=0.8"
      )
      .to(
        "#extraFeatureFourContainer",
        {
          y: 0,
          duration: 0.8,
          ease: "power4.out"
        },
        "-=0.6"
      );
  }, []);

  return (
    <div className="featuresSection w-screen h-screen flex flex-col justify-center items-center py-8 px-28 gap-6">
      <div className="relative w-full h-[45%] flex flex-row gap-6">
        <div className="relative flex w-[70%] h-full  rounded-br-[3rem] overflow-hidden">
          <div
            id="visualizationContainer"
            className="absolute w-full h-full bg-[#161211] border border-[#5D3F3A] rounded-br-[3rem] transform -translate-y-96"
          >
            <FloatingImagesContainer />
          </div>
        </div>
        <div className="relative flex w-[30%] h-full overflow-hidden">
          <div
            id="spectralContainer"
            className="absolute w-full h-full rounded-bl-[3rem] bg-[#161211] border border-[#5D3F3A] translate-x-96"
          />
        </div>
      </div>
      <div className="w-full h-[55%] flex flex-row gap-6">
        <div className="w-[35%] h-full overflow-hidden">
          <div
            id="accesibilityContainer"
            className="w-full h-full bg-[#161211] border border-[#5D3F3A] rounded-tr-[3rem] translate-y-96"
          >
            Accesibilidad
          </div>
        </div>
        <div className="w-[25%] h-full overflow-hidden">
          <div
            id="extraFeatureFourContainer"
            className="bg-[#161211] border border-[#5D3F3A] w-full h-full rounded-t-[3rem] translate-y-96"
          >
            feature
          </div>
        </div>
        <div className="w-[40%] h-full gap-6 flex flex-col">
          <div className="relative w-full h-full overflow-hidden">
            <div
              id="extraFeatureOneContainer"
              className="absolute w-full h-full bg-[#161211] border border-[#5D3F3A] rounded-tl-[3rem] translate-x-[35rem]"
            >
              Extra feature one
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden">
            <div
              id="extraFeatureTwoContainer"
              className="absolute w-full h-full bg-[#161211] border border-[#5D3F3A] rounded-tl-[3rem] translate-x-[35rem]"
            >
              Extra feature two
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden">
            <div
              id="extraFeatureThreeContainer"
              className="absolute w-full h-full bg-[#161211] border border-[#5D3F3A] rounded-tl-[3rem] translate-x-[35rem]"
            >
              Extra feature three
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
