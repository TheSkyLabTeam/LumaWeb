"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations} from "next-intl";

const chartData = [
  { date: "Apr 1", value: 50 },
  { date: "Apr 15", value: 55 },
  { date: "Apr 30", value: 48 },
  { date: "May 17", value: 60 },
];

export default function SolarDashboard() {
  const t = useTranslations("Landing");

  return (
    <div className="min-h-screen bg-[#0F1417] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-clash text-3xl sm:text-4xl lg:text-4xl text-on-background-dark font-semibold mb-4 leading-tight">
              {t("featuresTitle")}
            </h1>
            <p className="font-archivo text-base sm:text-base text-on-surface-variant-dark leading-relaxed">
              {t('featuresDescription')}
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
          <div className="bg-surface-container-low-dark rounded-lg p-6 flex flex-col">
            <h2 className="font-clash text-2xl sm:text-2xl text-on-background-dark font-semibold mb-4">
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
          <div className="bg-surface-container-low-dark rounded-lg p-6 flex flex-col">
            <h2 className="font-clash text-2xl sm:text-xl text-on-background-dark font-semibold mb-4">
              {t("feature2Title")}
            </h2>
            <p className="font-archivo text-base text-on-surface-variant-dark mb-4">
              {t("feature2Description")}
            </p>
            <Link
              href="/temporal-analysis"
              className="font-archivo text-base text-cyan-400 hover:text-cyan-300 transition-colors mt-auto"
            >
                {`${t('feature2Link')} →`}
            </Link>
          </div>

          {/* Feature 3 */}
          <div className="bg-surface-container-low-dark rounded-lg p-6 flex flex-col">
            <h2 className="font-clash text-2xl sm:text-xl text-[#DFE3E7] font-semibold mb-4">
              {t("feature3Title")}
            </h2>
            <p className="font-archivo text-base text-on-surface-variant-dark mb-4 flex-grow">
              {t("feature3Description")}
            </p>
            <Link
              href="/educational-resources"
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
