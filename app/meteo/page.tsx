import { Suspense } from 'react';
import Breadcrumb from '../../components/breadcrumb';
import ShowMeteo from '../../components/show-meteo';
import { getForecasts, Weather } from './service/weather-service';
import Loading from './loading';

const breadCrumList = [
    { label: 'Welcome', href: '/welcome' },
    { label: 'Meteo', href: '/meteo' }
];

/**
 * Getted component from https://flowbite.com/docs/components/card/
 */
const Meteo = async () => {

    const weather: Promise<Weather[]> = getForecasts();

    return (
        <section className="flex flex-col items-center py-12 px-4 space-y-6">
            <div className="w-full self-start pl-6">
                <Breadcrumb breadcrumbList={breadCrumList} />
            </div>
            <Suspense fallback={<Loading />}>
                <ShowMeteo meteo={weather} />
            </Suspense>
        </section>
    )
}

export default Meteo