import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');
  return(
    <div className='w-screen h-fit flex'>
      <div id="header" className="w-full h-[100svh] md:flex-row">
        <div id='titlesContainer' className="w-full h-3/5">
          <h1>{t('title')}</h1>
        </div>
        <div className="w-full h-2/5 bg-secondary"></div>
      </div>
    </div>
    
  )
}
