'use client'
import Image from 'next/image';
import { use, useState } from 'react';
import { DAY, Weather } from '../../app/meteo/service/weather-service';


const descriptionCodes: Map<number, string> = new Map([
    [-99, "--"],
    [0, "No information"],
    [1, "Clear sky"],
    [2, "Partly cloudy"],
    [3, "Sunny intervals"],
    [4, "Cloudy"],
    [5, "Cloudy (High cloud)"],
    [6, "Showers/rain"],
    [7, "Light showers/rain"],
    [8, "Heavy showers/rain"],
    [9, "Rain/showers"],
    [10, "Light rain"],
    [11, "Heavy rain/showers"],
    [12, "Intermittent rain"],
    [13, "Intermittent light rain"],
    [14, "Intermittent heavy rain"],
    [15, "Drizzle"],
    [16, "Mist"],
    [17, "Fog"],
    [18, "Snow"],
    [19, "Thunderstorms"],
    [20, "Showers and thunderstorms"],
    [21, "Hail"],
    [22, "Frost"],
    [23, "Rain and thunderstorms"],
    [24, "Convective clouds"],
    [25, "Partly cloudy"],
    [26, "Fog"],
    [27, "Cloudy"],
    [28, "Snow showers"],
    [29, "Rain and snow"],
    [30, "Rain and snow"]
]);

function getForecast(forecasts: Weather[], date?: string): Weather | undefined {
    const targetDate = date ?? new Date().toISOString().split("T")[0];
    return forecasts.find(f => f.forecastDate === targetDate);
}


const ShowMeteo = ({ meteo }: { meteo: Promise<Weather[]> }) => {
    const weather: Weather[] = use(meteo);
    const forecast = getForecast(weather) ?? weather[DAY.TODAY];
    const [selected, setSelected] = useState<Weather>(forecast);

    const smallCards = [
        selected,
        ...weather.filter(w => w.forecastDate !== selected.forecastDate)
    ].slice(0, 6);

    if (!selected) {
        return <div className="text-red-600">No forecast available for today.</div>;
    }

    return (
        <div className="w-full flex flex-col items-center space-y-4">
            <div className="w-full max-w-2xl flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row dark:border-gray-700 dark:bg-gray-800">
                <Image
                    alt="Faro meteo logo"
                    src={`/icons/w_ic_d_${selected.idWeatherType}.svg`}
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg hidden md:block"
                    width={256}
                    height={256}
                />
                <div className="flex flex-col justify-between p-4 leading-normal text-left w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Weather in <span className="text-blue-600 dark:text-blue-400">Faro</span>
                    </h5>
                    <p className="mb-1 text-lg font-medium text-gray-800 dark:text-gray-300">
                        Date: <span className="font-semibold">
                            {new Date(selected.forecastDate).toLocaleDateString('pt-PT', {
                                weekday: 'short',
                                day: '2-digit',
                                month: 'short',
                            })}
                        </span>
                    </p>
                    <p className="mb-1 text-lg font-medium text-gray-800 dark:text-gray-300">
                        Max Temperature: <span className="font-semibold">{selected.tMax}°C</span>
                    </p>
                    <p className="mb-1 text-lg font-medium text-gray-800 dark:text-gray-300">
                        Min Temperature: <span className="font-semibold">{selected.tMin}°C</span>
                    </p>
                    <p className="mb-1 text-lg font-medium text-gray-800 dark:text-gray-300">
                        Precipitation: <span className="font-semibold">{selected.precipitaProb}%</span>
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-400">
                        {descriptionCodes.get(selected.idWeatherType)}
                    </p>
                </div>
            </div>
            <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-4 ml-35">
                {smallCards
                    .filter(day => day.forecastDate !== selected.forecastDate)
                    .map((day, index) => (
                        <button
                            key={index}
                            onClick={() => setSelected(day)}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 text-center hover:shadow-md transition cursor-pointer"
                        >
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                {new Date(day.forecastDate).toLocaleDateString('pt-PT', {
                                    weekday: 'short',
                                    day: '2-digit',
                                    month: 'short',
                                })}
                            </p>
                            <Image
                                alt={`Weather icon for ${day.forecastDate}`}
                                src={`/icons/w_ic_d_${day.idWeatherType}.svg`}
                                width={64}
                                height={64}
                                className="mx-auto my-2"
                            />
                            <p className="text-sm text-gray-800 dark:text-gray-200">
                                <span className="font-semibold">{day.tMax}°C</span> / <span>{day.tMin}°C</span>
                            </p>
                        </button>
                    ))}
            </div>
        </div>
    )
}

export default ShowMeteo