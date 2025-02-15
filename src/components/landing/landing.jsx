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
        };
    }, []);


    return (
        <main className="w-screen flex flex-col bg-[#0D0D0D]">
            <HeroSection/>
            <Sections/>
            <Teamsection/>
            <Footer/>
        </main>
    );
};
