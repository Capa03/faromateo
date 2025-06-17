import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from './loading';
import { getForecasts, Weather } from './service/weather-service';

/* Lazy Loading: https://nextjs.org/docs/app/guides/lazy-loading*/
const BreadcrumbComponent = dynamic(() => import('../../components/breadcrumb'));
const ShowMeteoComponent = dynamic(() => import('../../components/show-meteo'));

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
        <section className="flex flex-col items-center py-4 px-4 space-y-2">
            <div className="w-full self-start flex flex-col items-center">
                <BreadcrumbComponent breadcrumbList={breadCrumList} />
            </div>
            <Suspense fallback={<Loading />}>
                <ShowMeteoComponent meteo={weather} />
            </Suspense>
        </section>
    )
}

export default Meteo