
import {useTranslations} from 'next-intl';
import { DatePicker } from '@/app/ui/dashboard/datepicker';
import { AccordionImages } from '@/app/ui/dashboard/accordionimages';
import { DetailsPanel } from '@/app/ui/dashboard/detailspanel';

const page = () => {
  const t = useTranslations('Dash');
  return (
    <div className='w-full h-screen flex flex-col md:p-2'>
        <div id="nav" className="w-full h-fit flex flex-col mb-4 md:flex-row md:justify-between">
            <div id="titleContainer">
                <h1 id='titleOneDate' className='text-3xl text-on-background'>{t('title')}</h1>
            </div>
            <div id="dateContainer" className='mt-4'>
                <DatePicker />
            </div>
        </div>
        <AccordionImages title={t('titleImages')}/>
        <DetailsPanel />
    </div>
  )
}

export default page