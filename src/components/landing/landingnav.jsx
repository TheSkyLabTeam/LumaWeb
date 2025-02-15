import { useRef } from "react";
import { Link } from "@/navigation";
import { Button } from "../ui/button";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import {useTranslations} from "next-intl";
gsap.registerPlugin([TextPlugin, useGSAP]);

export const LandingNav = () => {
  const t = useTranslations("Landing");
  const container = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();

    // Links animations
    [...Array(3)].forEach((_, index) => {
      gsap.to(`#navLink-${index}`, {
        y: 0,
        duration: 0.6 + index * 0.3,
        ease: "back.inOut(1.7)"
      });
    });

    tl
      .to("#lumaBrandContainer", {
        x: 0,
        duration: 0.6,
        ease: "back.inOut(1.7)"
      })
      .to(
        "#getStartedContainer",
        {
          x: 0,
          duration: 0.6,
          ease: "back.inOut(1.7)"
        },
        "-=0.4" // Animación simultánea con un pequeño solapamiento
      );
  });

  return (
    <nav
      ref={container}
      className="flex p-4 md:p-6 flex-row justify-between items-center"
    >
      <div id="lumaBrandContainer" className="-translate-x-32">
        <Link href={"/"}>
          <Image
            width={32}
            height={32}
            className="w-8 h-auto"
            src="/images/LumaIcon.svg"
            alt="Luma Icon"
          />
        </Link>
      </div>
      <div
        id="linksContainer"
        className="hidden md:flex flex-row font-archivo font-normal gap-8"
      >
        {[
          [t('headerWorkLink'), "/"],
          [t('headerTeamLink'), "/"],
        ].map(([text, href], index) =>
          <Link
            className="-translate-y-32"
            id={`navLink-${index}`}
            key={index}
            href={href}
          >
            {text}
          </Link>
        )}
      </div>
      <div id="getStartedContainer" className="translate-x-36">
        <Link href={"/dashboard"}>
          <Button className="border rounded-none bg-[#A0FFFF] hover:bg-white">
            <p className="font-archivo font-semibold text-black">Get started</p>
          </Button>
        </Link>
      </div>
    </nav>
  );
};
