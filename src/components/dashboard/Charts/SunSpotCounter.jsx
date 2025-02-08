import {useEffect, useState} from "react";

export default function SunSpotCounter({date}) {
    const [sunSpotData, setSunSpotData] = useState(null);
    const [loading, setLoading] = useState(true);

    function addOneMonth(dateString) {
        let date = new Date(dateString);
        date.setMonth(date.getMonth() + 1);
        return date.toISOString().split("T")[0]; // Formato "YYYY-MM-DD"
    }

    function getDateDifference(startDate, endDate) {
        let start = new Date(startDate);
        let end = new Date(endDate);
        // Diferencia en días
        return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    }

    let originalDate = date;
    let nextMonthDate = addOneMonth(originalDate);
    let dateDiff = getDateDifference(originalDate, nextMonthDate);

    useEffect(() => {
        async function fetchSunSpotData() {
            try {
                let response = await fetch(`https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/daily-sunspot-number@datastro/records?where=year_month_day%20%3E%3D%20%27${originalDate}%27%20AND%20year_month_day%20%3C%3D%20%27${originalDate}%27&order_by=year_month_day%20ASC&limit=${1}`);
                let data = await response.json();
                setSunSpotData(data.results[0]);
            } catch (error) {
                console.error('Failed to fetch sunspot data', error);
                throw new Error('Failed to fetch sunspot data');
            } finally {
                setLoading(false)
            }
        }
        fetchSunSpotData();
    }, [originalDate, nextMonthDate, dateDiff]);
    if (loading) return <div>Cargando... </div>



    return (
        <div
            id={'sunSpotInfoContainer'}
            className={`flex flex-col h-[40svh] md:h-[30svh] lg:h-[63vh] bg-surface-container dark:bg-surface-container-dark`}
        >
            <div className={`w-full h-[15%] flex p-3`}>
                <h2 className={`font-clash font-semibold text-lg text-on-background dark:text-on-background-dark`}>Informacion
                    de manchas solares</h2>
            </div>
            <div className={`w-full h-[70%] flex flex-col justify-center items-center`}>
                <h3 className={`text-8xl font-clash font-semibold text-on-background dark:text-on-background-dark`}>{sunSpotData.column_5}</h3>
                <p className={`font-archivo text-base text-on-surface-variant dark:text-on-surface-variant-dark`}>Conteno
                    total de manchas solares</p>
            </div>
            <div
                className={`w-full h-fit xl:h-[15%] flex flex-row bg-surface-container dark:bg-surface-container-low-dark p-2 gap-2`}>
                <div className={`w-1/2 h-full flex flex-col text-center justify-center items-center`}>
                    <p className={`text-base font-clash font-semibold text-on-background dark:text-on-background-dark`}>{sunSpotData.column_6}</p>
                    <p className={`text-sm font-archivo text-on-surface-variant dark:text-on-surface-variant-dark`}>Desviacion
                        estandar</p>
                </div>
                <div className={`w-1/2 h-full flex flex-col text-center justify-center items-center`}>
                    <p className={`text-base font-clash font-semibold text-on-background dark:text-on-background-dark`}>{sunSpotData.column_7}</p>
                    <p className={`text-sm font-archivo text-on-surface-variant dark:text-on-surface-variant-dark`}>No. de observaciones</p>
                </div>
            </div>
        </div>
    )
}