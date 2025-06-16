import { Disclosure } from '@headlessui/react';
import Image from 'next/image';

/**
 * Component getted from: https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/navbars
 * @returns 
 */
export const Topbar = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Left section (Logo) */}
                    <div className="flex flex-shrink-0 items-center gap-2">
                        <Image
                            alt="Faro mateo logo"
                            src="/cloudy-day-2.svg"
                            className="h-10 w-auto"
                            width={256}
                            height={256}
                        />
                        <span className="text-xl font-medium text-gray-300">Faro Mateo</span>
                    </div>

                    {/**
                     * Getted search bar from https://flowbite.com/docs/forms/search-input/
                     */}
                    <div className="flex flex-1 justify-center px-4">
                        <form className="w-full max-w-md">
                            <label htmlFor="topbar-search" className="sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="topbar-search"
                                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Search..."
                                    required
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Disclosure>

    )
}

export default Topbar