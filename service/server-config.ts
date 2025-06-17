
const BASE_URL = "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/";

export default function getAllForecastUrl(globalIdLocal: number): string {
    return `${BASE_URL}${globalIdLocal}.json`
}