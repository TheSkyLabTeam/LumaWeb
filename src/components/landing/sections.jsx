"use client";

import Image from "next/image";
import {Link} from "@/navigation"
import {useTranslations} from "next-intl";
import gsap from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect} from "react";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function SolarDashboard() {
    const t = useTranslations("Landing");

    useEffect(() => {
        // Animación de la línea decorativa
        gsap.to("#featuresDecorativeLine", {
            width: "100%",
            duration: 1,
            scrollTrigger: {
                trigger: "#feature-section",
                start: "top center",
                end: "+=30%",
                toggleActions: "play none none reset",
                scrub: 5,
                once: true
            }
        });

        // Timeline para el título y descripción
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#feature-section",
                start: "top center",
                end: "+=30%",
                toggleActions: "play none none reset",
                once: true,
            },
        });

        // Features Title animation
        tl
            .to("#featuresTitle", {
                text: t("featuresTitle"),
                duration: 1
            })
            .to("#featuresDescription", {
                text: t("featuresDescription"),
                duration: 1
            });

        // Animación para que cada feature aparezca desde abajo
        gsap.utils.toArray(".feature-card").forEach((card, i) => {
            gsap.fromTo(card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    delay: 0.2 * i, // Añade un retraso secuencial para cada tarjeta
                    ease: "back.inOut(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                        toggleActions: "play none none none",
                        once: true
                    }
                }
            );
        });
    }, [t]); // Añadido t como dependencia

    return (
        <div id={'feature-section'} className="min-h-screen bg-surface-container-lowest-dark p-4 sm:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={'space-y-4'}>
                        <h1 id={'featuresTitle'}
                            className="min-h-32 font-clash text-3xl sm:text-4xl lg:text-4xl text-on-background-dark font-semibold leading-tight uppercase">
                        </h1>
                        <div
                            id={'featuresDecorativeLine'}
                            className={'w-0 h-3 bg-gradient-to-r from-cyan-400 to-'}/>
                        <p id={'featuresDescription'}
                           className="min-h-24 font-archivo text-sm sm:text-base text-on-surface-variant-dark leading-relaxed">
                        </p>
                    </div>
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px]">
                        <Image
                            src="/images/landing.png"
                            alt="Dashboard Preview"
                            layout="fill"
                            objectFit={"contain"}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {/* Feature 1 */}
                    <div className="feature-card bg-surface-container-low-dark p-6 flex flex-col">
                        <h2 className="font-clash text-2xl sm:text-2xl text-on-background-dark font-semibold mb-4 uppercase">
                            {t("feature1Title")}
                        </h2>
                        <p className="font-archivo text-base text-on-surface-variant-dark mb-4 flex-grow">
                            {t("feature1Description")}
                        </p>
                        <Link
                            href="https://soho.nascom.nasa.gov/"
                            target={"_blank"}
                            className="font-archivo text-base text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            {`${t('feature1Link')} →`}
                        </Link>
                    </div>

                    {/* Feature 2 - Temporal Analysis */}
                    <div className="feature-card bg-surface-container-low-dark p-6 flex flex-col">
                        <h2 className="font-clash text-2xl sm:text-xl text-on-background-dark font-semibold mb-4 uppercase">
                            {t("feature2Title")}
                        </h2>
                        <p className="font-archivo text-base text-on-surface-variant-dark mb-4">
                            {t("feature2Description")}
                        </p>
                        <Link
                            href="/dashboard/daterange"
                            className="font-archivo text-base text-cyan-400 hover:text-cyan-300 transition-colors mt-auto"
                        >
                            {`${t('feature2Link')} →`}
                        </Link>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-card bg-surface-container-low-dark p-6 flex flex-col">
                        <h2 className="font-clash text-2xl sm:text-xl text-[#DFE3E7] font-semibold mb-4 uppercase">
                            {t("feature3Title")}
                        </h2>
                        <p className="font-archivo text-base text-on-surface-variant-dark mb-4 flex-grow">
                            {t("feature3Description")}
                        </p>
                        <Link
                            href="/dashboard"
                            className="font-archivo text-base text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            {`${t('feature3Link')} →`}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}