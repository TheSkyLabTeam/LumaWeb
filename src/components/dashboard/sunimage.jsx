import Image from "next/image";
import { ImageIcon } from "@radix-ui/react-icons";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import gsap from "gsap";
import { useRef, useState, useMemo, useEffect } from "react";
import { color } from "framer-motion";

export default function SunImage({ image, description, table, csun }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const infoTextRef = useRef(null); // Referencia específica para esta instancia
  const [isExpanded, setIsExpanded] = useState(false); // Estado para alternar la animación

  const images = useMemo(() => (Array.isArray(image) ? image : [image]), [
    image
  ]);

  const toggleInfo = () => {
    if (infoTextRef.current) {
      if (!isExpanded) {
        // Expandir
        gsap.to(infoTextRef.current, {
          opacity: 1,
          height: "100%"
        });
      } else {
        // Contraer
        gsap.to(infoTextRef.current, {
          opacity: 0,
          height: "0%"
        });
      }
      setIsExpanded(!isExpanded); // Alternar el estado
    }
  };

  let dotColor;

  switch (table) {
    case "eit171":
      dotColor = "blue";
      break;
    case "eit195":
      dotColor = "green";
      break;
    case "eit284":
      dotColor = "yellow";
      break;
    case "eit304":
      dotColor = "red";
      break;
    case "hmiigr":
      dotColor = "orange";
      break;
    case "hmimag":
      dotColor = "gray";
      break;
    default:
      dotColor = "slate";
      break;
  }

  useEffect(
    () => {
      if (images.length > 1) {
        const interval = setInterval(() => {
          setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 600);
        return () => clearInterval(interval); // Limpia el intervalo al desmontar
      }
    },
    [images]
  );

  const currentImage = images[currentImageIndex] || ""; // Imagen actual

  return (
    <div
      className={`
        relative
        ${csun} 
        bg-surface-container 
        dark:bg-secondary-container-dark/40 
        max-w-56 w-56 h-fit md:w-52 xl:w-48 2xl:w-56
        transform translate-y-80 overflow-hidden
      `}
    >
      <div id="imageContainer" className="w-full h-fit relative">
        {image === undefined
          ? <div className="w-56 max-w-56 h-56 max-h-56 md:w-52 md:h-52 md:max-h-52 xl:w-48 xl:h-48 xl:max-h-48 2xl:w-56 2xl:h-56 2xl:max-h-56 relative animate-pulse" />
          : image === ""
            ? <div className="flex flex-col items-center justify-center w-56 max-w-56 h-56 max-h-56 md:w-52 md:h-52 md:max-h-52 xl:w-48 xl:h-48 xl:max-h-48 2xl:w-56 2xl:h-56 2xl:max-h-56 relative bg-surface-container-low text-on-surface/60 dark:bg-surface-container-low-dark dark:text-on-surface-dark/60">
                <ImageIcon className="w-10 h-10" />
                <h4>No image for this date</h4>
              </div>
            : <div>
                <div
                  ref={infoTextRef} // Usa la referencia
                  className="absolute w-56 max-w-56 h-0 p-4 grid place-items-center bg-secondary-container dark:bg-secondary-container-dark opacity-0 overflow-hidden"
                >
                  <p className="fixed font-archivo text-on-secondary-container dark:text-on-secondary-container-dark z-10 p-4">
                    {description}
                  </p>
                  <div
                    className={`absolute w-48 h-48 rounded-full border-8 border-background-dark/20 -z-0`}
                  />
                </div>
                <Image
                  src={currentImage}
                  alt={`${table} image`}
                  width={512}
                  height={512}
                  className="dark:border-secondary-container-dark/30 w-56 max-w-56 h-56 max-h-56 md:w-52 md:h-52 md:max-h-52 xl:w-48 xl:h-48 xl:max-h-48 2xl:w-56 2xl:h-56 2xl:max-h-56 dark:border-2"
                />
                <div
                  className={`w-3 h-3 mx-1 absolute top-2 left-1 grid place-content-center rounded-full bg-${dotColor}-500`}
                >
                  <div
                    className={`w-3 h-3 rounded-full animate-ping bg-${dotColor}-500`}
                  />
                </div>
              </div>}
      </div>
      <div className="w-full px-4 my-2 flex items-center justify-between text-on-surface dark:text-on-surface-dark">
        <div className="flex items-center">
          <p className="font-clash font-semibold">
            {table.toUpperCase()}
          </p>
        </div>
        <InfoCircledIcon
          onClick={toggleInfo}
          className="w-5 h-5 cursor-pointer"
        />
      </div>
    </div>
  );
}
