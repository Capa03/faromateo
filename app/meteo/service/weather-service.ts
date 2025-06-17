
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

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getAllForecast(globalIdLocal: GLOBAL_LOCAL): Promise<Ipma> {
  try {
    await delay(1500); // 1.5 seconds delay

    const response = await fetch(getAllForecastUrl(globalIdLocal));
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (exeption) {
    throw new Error(`Failed to load forecast: ${(exeption as Error).message}`);
  }
}

export async function getForecasts(): Promise<Weather[]> {
    const forecasts = await getAllForecast(GLOBAL_LOCAL.FARO);
    if (!forecasts) {
        throw new Error('No forecast found for today');
    }

    return forecasts.data;
}





