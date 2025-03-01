import DeveloperGrid from "./developergrid";
import { useTranslations} from "next-intl";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP);
const TeamSection = () => {

    const t = useTranslations("Landing");

    useGSAP(() => {
        gsap.to('#teamSectionTitle', {
            text: t('teamTitle'),
            duration: 1,
            scrollTrigger: {
                trigger: '#team-section',
                start: 'top center',
                end: '+=10%',
                toggleActions: 'play none none reset',
                scrub: 4,
                once: true
            }
        })

        gsap.to("#teamDescription", {
            text: t("teamDescription"),
            duration: 1,
            scrollTrigger: {
                trigger: "#team-section",
                start: "top center",
                end: "+=10%",
                toggleActions: "play none none reset",
                scrub: 4,
                once: true
            }
        })
    })

  return (
    <section id={'team-section'} className="w-full bg-surface-container-lowest-dark py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 id={"teamSectionTitle"} className="min-h-10 text-[#DFE3E7] font-clash font-semibold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 uppercase">
          </h2>
          <p id={"teamDescription"} className="text-gray-400 font-archivo text-sm sm:text-base max-w-2xl mx-auto">
          </p>
        </div>
        <DeveloperGrid />
      </div>
    </section>
  );
};

export default TeamSection;
