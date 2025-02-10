import React from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";

export default function Content() {
  const t = useTranslations("Landing")
  return (
    <div className="bg-[#171C1F] py-12 px-6 sm:px-8 lg:px-12 h-full w-full flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <div className="space-y-6">
            <h2 className="font-clash text-7xl sm:text-8xl lg:text-9xl text-white font-bold tracking-wide">
              LUMA
            </h2>
            <p className="font-archivo text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-2xl">
              {t("footerSubtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        {/* Divider - Enlarged for each screen size */}
        <div className="w-screen -mx-6 sm:-mx-8 lg:-mx-12 mb-8">
          <div className="w-full h-px bg-gray-800" />
        </div>

        {/* Logo section - Maintained original layout */}
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Imagen alineada a la izquierda */}
          <div className="relative w-12 h-12 sm:w-16 sm:h-16">
            <Image
              src="/astro.png"
              alt="Astro logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Imagen alineada a la derecha */}
          <div className="relative w-12 h-12 sm:w-16 sm:h-16">
            <Image
              src="/luma-icon.svg"
              alt="Luma logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
