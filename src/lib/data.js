export async function fetchSunSpotData(originalDate, nextMonthDate, dateDiff) {
    try {
        return await fetch(`https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/daily-sunspot-number@datastro/records?where=year_month_day%20%3E%3D%20%27${originalDate}%27%20AND%20year_month_day%20%3C%3D%20%27${nextMonthDate}%27&order_by=year_month_day%20ASC&limit=${dateDiff}`);
    } catch (error) {
        console.error('Failed to fetch sunspot data', error);
        throw new Error('Failed to fetch sunspot data');
    }
}
