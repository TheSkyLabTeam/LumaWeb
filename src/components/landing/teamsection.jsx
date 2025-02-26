import DeveloperGrid from "./developergrid";
import { useTranslations} from "next-intl";

const TeamSection = () => {

    const t = useTranslations("Landing");
  return (
    <section id={'team-section'} className="w-full bg-[#0F1417] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#DFE3E7] font-clash font-semibold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
            {t("teamTitle")}
          </h2>
          <p className="text-gray-400 font-archivo text-sm sm:text-base max-w-2xl mx-auto">
            {t("teamDescription")}
          </p>
        </div>
        <DeveloperGrid />
      </div>
    </section>
  );
};

export default TeamSection;
