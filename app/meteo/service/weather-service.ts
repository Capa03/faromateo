
import getAllForecastUrl from "../../../service/server-config";

export enum GLOBAL_LOCAL {
    FARO = 1080500
}

export enum DAY {
    TODAY = 0,
    TOMMORROW = 1
}

interface Ipma {
    owner: string;
    country: string;
    data: Weather[];
    globalIdLocal: number;
    dataUpdate: string;
}

export interface Weather {
    precipitaProb: string;
    tMin: string;
    tMax: string;
    predWindDir: string;
    idWeatherType: number;
    classWindSpeed: number;
    longitude: string;
    forecastDate: string;
    latitude: string;
}

/**
 * 
 * Used documentation: https://nextjs.org/docs/app/getting-started/fetching-data
 * @returns 
 */

async function getAllForecast(globalIdLocal: GLOBAL_LOCAL): Promise<Ipma> {
    // Simulate 3 second delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    const response = await fetch(getAllForecastUrl(globalIdLocal));
    const data = await response.json();
    return data;
}


export async function getForecasts(): Promise<Weather[]> {
    const forecasts = await getAllForecast(GLOBAL_LOCAL.FARO);

    if (!forecasts) {
        throw new Error('No forecast found for today');
    }

    return forecasts.data;
}



