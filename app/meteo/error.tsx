'use client'

import { useEffect } from 'react'


/**
 * 
 * https://nextjs.org/docs/14/app/building-your-application/routing/error-handling
 * @returns 
 */
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error.message)
    }, [error])

    return (
        <section className="text-center py-12 px-4">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Something went wrong!
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                { error.message }
            </p>
            <button
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </section>
    )
}