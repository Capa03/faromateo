import React from 'react'

/**
 * Component getted from: https://flowbite.com/docs/components/skeleton/
 * @returns 
 */
export default function Loading() {
    return (
        <div className="w-full max-w-2xl flex flex-col items-center space-y-4 animate-pulse">
            <div className="w-full flex flex-col md:flex-row bg-gray-200 dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="hidden md:block w-48 h-96 bg-gray-300 dark:bg-gray-600 rounded-l-lg" />
                <div className="flex flex-col justify-between p-4 w-full space-y-4">
                    <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-2/3" /> 
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-1/2" /> 
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-1/3" />
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-1/3" /> 
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-1/4" /> 
                    <div className="h-12 bg-gray-300 dark:bg-gray-600 rounded w-full" /> 
                </div>
            </div>

            <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-sm p-4 flex flex-col items-center space-y-3 cursor-pointer"
                    >
                        <div className="h-5 w-20 rounded bg-gray-300 dark:bg-gray-600" /> 
                        <div className="h-16 w-16 rounded bg-gray-300 dark:bg-gray-600" /> 
                        <div className="h-5 w-14 rounded bg-gray-300 dark:bg-gray-600" /> 
                    </div>
                ))}
            </div>
        </div>
    );
}

