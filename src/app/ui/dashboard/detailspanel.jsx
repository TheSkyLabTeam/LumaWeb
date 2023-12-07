import {useTranslations} from 'next-intl';

export function DetailsPanel(){
    const t = useTranslations('Dash');
    return(
        <div className="w-full h-96 mt-4 flex flex-col p-2 border-2 border-surface rounded-md">
            <div className="w-full h-1/3">
                <div className='flex flex-row'>
                    <h4 className="text-xl text-secondary" style={{fontFamily: 'clash'}}>{t('titleDetails')}</h4>
                    <div className='pl-2 flex gap-4'>
                        <button className='buttonData'>{t("buttonOverview")}</button>
                        <button className='buttonData'>{t("buttonDetails")}</button>
                    </div>
                </div>
                <div className='border-1 border-surface'>

                </div>
            </div>
            <div className="w-full h-2/3"></div>
        </div>
    )
}
