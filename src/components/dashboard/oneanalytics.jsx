import {useTranslations} from "next-intl";

export default function OneAnalytics(props) {
    const statistics = props.statistics
    const t = useTranslations('AnalyticsComponent');
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 bg-surface dark:bg-surface-container-low-dark p-2">
            <div className="flex flex-col items-center justify-center text-center p-2">
                <p className="text-on-surface dark:text-on-surface-dark text-base md:text-lg lg:text-xl font-clash font-semibold">
                    {statistics.max.toFixed(2)}
                </p>
                <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-xs md:text-sm">
                    {t('max')}
                </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-2">
                <p className="text-on-surface dark:text-on-surface-dark text-base md:text-lg lg:text-xl font-clash font-semibold">
                    {statistics.min.toFixed(2)}
                </p>
                <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-xs md:text-sm">
                    {t('min')}
                </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-2">
                <p className="text-on-surface dark:text-on-surface-dark text-base md:text-lg lg:text-xl font-clash font-semibold">
                    {statistics.avg.toFixed(2)}
                </p>
                <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-xs md:text-sm">
                    {t('avg')}
                </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-2">
                <p className="text-on-surface dark:text-on-surface-dark text-base md:text-lg lg:text-xl font-clash font-semibold">
                    {statistics.stdDev.toFixed(2)}
                </p>
                <p className="text-on-surface-variant dark:text-on-surface-variant-dark font-archivo text-xs md:text-sm">
                    {t('stdDev')}
                </p>
            </div>
        </div>
    )
}

