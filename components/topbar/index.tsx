import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

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
                            alt="meteo logo"
                            src="/cloudy-day-2.svg"
                            className="h-10 w-auto"
                            width={256}
                            height={256}
                        />
                        <Link href="/welcome">
                            <span className="text-xl font-medium text-gray-300">Faro Meteo</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Disclosure>

    )
}

export default Topbar