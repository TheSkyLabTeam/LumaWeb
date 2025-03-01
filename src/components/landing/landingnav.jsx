import { useRef } from "react";
import { Link, useRouter, usePathname } from "@/navigation";
import { Button } from "../ui/button";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
gsap.registerPlugin([TextPlugin, useGSAP]);

export const LandingNav = () => {
  const t = useTranslations("Landing");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const container = useRef();

  const switchLanguage = (locale) => {
    router.replace(pathname, { locale });
  };

  // Función para manejar el scroll suave a secciones
  const scrollToSection = (sectionId, e) => {
    e.preventDefault();

    // Solo ejecutar en la página principal
    if (pathname !== '/') {
      router.push('/');
      // Espera a que la navegación se complete antes de intentar desplazarse
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <div id="lumaBrandContainer" className="flex flex-row items-center -translate-x-32">
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
            // Ahora cada link tiene un ID de sección asociado
            [t('headerWorkLink'), "#feature-section"],
            [t('headerTeamLink'), "#team-section"],
            [t('headerCredits'), "/credits"], // Este mantiene la navegación normal
          ].map(([text, href], index) =>
              href.startsWith('#') ? (
                  <a
                      className="-translate-y-32"
                      id={`navLink-${index}`}
                      key={index}
                      href={href}
                      onClick={(e) => scrollToSection(href.substring(1), e)}
                  >
                    {text}
                  </a>
              ) : (
                  <Link
                      className="-translate-y-32"
                      id={`navLink-${index}`}
                      key={index}
                      href={href}
                  >
                    {text}
                  </Link>
              )
          )}
        </div>
        <div id="getStartedContainer" className="flex flex-row items-center gap-6 translate-x-52">
          <div className="font-archivo flex gap-1 cursor-pointer">
          <span
              onClick={() => switchLanguage("es")}
              className={currentLocale === "es" ? "font-extrabold" : "hover:text-gray-400"}
          >
            ES
          </span>
            <span>/</span>
            <span
                onClick={() => switchLanguage("en")}
                className={currentLocale === "en" ? "font-extrabold" : "hover:text-gray-400"}
            >
            EN
          </span>
          </div>
          <Link href={"/dashboard"}>
            <Button className="border rounded-none bg-[#A0FFFF] hover:bg-white">
              <p className="font-archivo font-semibold text-black">{t('headerCta')}</p>
            </Button>
          </Link>
        </div>
      </nav>
  );
};