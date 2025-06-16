import React from 'react'
import Image from 'next/image'
import Breadcrumb from '../../components/breadcrumb'

const breadCrumList = [
    { label: 'Welcome', href: '/welcome' },
    { label: 'Meteo', href: '/meteo' }
];

/**
 * Getted component from https://flowbite.com/docs/components/card/
 */
const Mateo = () => {
    return (
        <section className="flex flex-col items-center py-12 px-4 space-y-6">
            <Breadcrumb breadcrumbList={ breadCrumList } />
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image
                    alt="Faro mateo logo"
                    src="/cloudy-day-2.svg"
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg hidden md:block"
                    width={256}
                    height={256}
                />
                <div className="flex flex-col justify-between p-4 leading-normal text-left">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Weather in <span className="text-blue-600 dark:text-blue-400">Faro</span>
                    </h5>
                    <p className="mb-1 text-lg font-medium text-gray-800 dark:text-gray-300">
                        Temperature: <span className="font-semibold">18°C</span>
                    </p>
                    <p className="mb-1 text-lg font-medium text-gray-800 dark:text-gray-300">
                        Humidity: <span className="font-semibold">72%</span>
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-400">
                        Is a cloudy day with a light breeze  perfect for a walk in the park.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Mateo