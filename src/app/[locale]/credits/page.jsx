import {useTranslations} from "next-intl";

export default function CreditsPage() {
    const t = useTranslations("CreditsPage");
    return (
        <div className="w-svw h-svh bg-background dark:bg-background-dark relative flex justify-center items-center">
            <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover z-0 saturate-0 brightness-50"
            >
                <source src="/videos/bgSunVideo.mp4" type="video/mp4"/>
            </video>
            <div className="max-w-3xl mx-auto px-6 relative">
                <h1 className="text-4xl mb-3 text-cyan-300 font-clash font-semibold uppercase">{t('title')}</h1>

                <div className="space-y-6 text-justify font-normal font-archivo text-white uppercase leading-tight">
                    <p>
                        {t('paragraph1')}
                    </p>

                    <p>
                        {t('paragraph2')}
                    </p>

                    <p>
                        {t('paragraph3')}
                    </p>

                    <div className=" text-center text-sm text-cyan-300 font-archivo">
                        {t('footer')}
                    </div>
                </div>
            </div>
        </div>
    )
}

