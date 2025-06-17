import Link from 'next/link';
import React from 'react'

/**
 * Getted from https://flowbite.com/docs/typography/headings/
 * @returns 
 */

const Welcome = () => {
    return (
        <section className="text-center py-12 px-4 space-y-4">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Welcome to Faro Meteo
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Stay updated with the latest temperature trends and real-time weather insights from Faro city.
            </p>

            <Link
                href="/meteo"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
                See weather
                <svg
                    className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </Link>
        </section>
    );
}

export default Welcome