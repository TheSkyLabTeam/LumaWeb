"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

export const FloatingImagesContainer = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
        requestAnimationFrameId = requestAnimationFrame(animate)
    }
  }

  const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` });
    gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if(xForce != 0 || yForce != 0) {
        requestAnimationFrame(animate);
    } else {
        cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
    }

  }

  return (
    <div onMouseMove={(e) => {manageMouseMove(e)}} className="relative w-full h-full overflow-hidden">
        <div ref={plane1} className="absolute w-full h-full brightness-75">
            <Image
                width={256}
                height={256}
                src="/images/sunGallery/eit171.jpg"
                alt="sun171"
                objectFit="contain"
                className="w-36 h-36 -translate-y-6 -translate-x-6"
            />
            <Image
                width={256}
                height={256}
                src="/images/sunGallery/eit195.jpg"
                alt="sun195"
                objectFit="contain"
                className="w-36 h-36 -translate-y-[120%] translate-x-[620%]"
            />
        </div>

        {/* Plane 2 container - eit304 and eit284 */}
        <div ref={plane2} className="absolute w-full h-full brightness-75">
            <Image
                width={256}
                height={256}
                src="/images/sunGallery/eit304.jpg"
                alt="sun304"
                objectFit="contain"
                className="w-36 h-36 translate-y-[2vw] translate-x-[25vw]"
            />
            <Image
                width={256}
                height={256}
                src="/images/sunGallery/eit284.jpg"
                alt="sun284"
                objectFit="contain"
                className="w-36 h-36 translate-y-[3vw] translate-x-[8vw]"
            />
        </div>

        {/* Plane 3 container - igr and mag */}
        <div ref={plane3} className="absolute w-full h-full brightness-75">
            <Image
                width={256}
                height={256}
                src="/images/sunGallery/igr.jpg"
                alt="igr"
                objectFit="contain"
                className="w-36 h-36 translate-y-[12vw] translate-x-[52vw]"
            />
            <Image
                width={256}
                height={256}
                src="/images/sunGallery/mag.jpg"
                alt="mag"
                objectFit="contain"
                className="w-36 h-36 translate-y-[4vw] translate-x-[34vw]"
            />
        </div>
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mix-blend-difference">
        <h1 className="font-clash font-semibold text-white text-2xl">
          Visualizacion en tiempo real
        </h1>
        <p className="font-archivo font-normal text-white/60 text-base md:text-lg text-center md:max-w-[40vw]">
          Accede a imágenes solares de alta resolución y datos en tiempo real
          capturados por observatorios espaciales como SOHO.
        </p>
      </div>
    </div>
  );
};
