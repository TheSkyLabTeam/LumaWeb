"use client"
import HeroSection from "@/components/landing/heroSection";
import Sections from "@/components/landing/sections";
import Footer from "@/components/footer/Footer1";
import Teamsection from "./teamsection";
import Lenis from 'lenis'
import {useEffect, useRef} from "react";

export const Landing = () => {
    const lenis = useRef(null);

    useEffect(() => {
        // Añadir estilos para ocultar la barra de scroll
        document.documentElement.style.scrollbarWidth = 'none'; // Firefox
        document.documentElement.style.msOverflowStyle = 'none'; // IE/Edge
        document.body.style.overflow = 'auto'; // Mantener scroll funcionando

        // Crear y añadir estilos para WebKit (Chrome, Safari)
        const style = document.createElement('style');
        style.textContent = `
            ::-webkit-scrollbar {
                display: none;
            }
            body {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
        `;
        document.head.appendChild(style);

        // Initialize Lenis
        lenis.current = new Lenis({
            duration: 0.6, // Control the duration of the scroll
            easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
            smooth: true,
            smoothTouch: true, // Enable smooth scrolling on touch devices
        });

        const animate = (time) => {
            lenis.current.raf(time);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        // Cleanup on unmount
        return () => {
            lenis.current.destroy();
            document.body.style.overflow = '';
            document.documentElement.style.scrollbarWidth = '';
            document.documentElement.style.msOverflowStyle = '';
            document.head.removeChild(style);
        };
    }, []);

    return (
        <main className="w-screen flex flex-col bg-[#0D0D0D]">
            <HeroSection/>
            <Sections id="work-section"/>
            <Teamsection id="team-section"/>
            <Footer/>
        </main>
    );
};