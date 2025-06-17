
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
    try {
        const response = await fetch(getAllForecastUrl(globalIdLocal));
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return await response.json();
    } catch (e) {
        throw new Error(`Failed to load forecast: ${(e as Error).message}`);
    }
}

export async function getForecasts(): Promise<Weather[]> {
    try {
        const forecasts = await getAllForecast(GLOBAL_LOCAL.FARO);
        return forecasts.data;
    } catch (e) {
        throw new Error(`No forecast found for today: ${(e as Error).message}`);
    }

}





