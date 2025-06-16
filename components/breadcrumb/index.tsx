import Link from 'next/link';
import React from 'react'


/**
 * 
 * Searched in: https://dev.to/elhamnajeebullah/react-typescript-what-is-reactfc-and-why-should-i-use-it-4029
 */

interface Breadcrumb {
    label: string,
    href?: string
}

interface Props {
    breadcrumbList: Breadcrumb[]
}

const Breadcrumb: React.FC<Props> = ({ breadcrumbList }) => {
    return (
        <nav className="w-full max-w-xl py-2 text-gray-700" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center space-x-2 rtl:space-x-reverse">
                {breadcrumbList.map((item, index) => {
                    const isLast = index === breadcrumbList.length - 1;
                    return (
                        <li key={index} className="flex items-center space-x-2">
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {item.label}
                                </span>
                            )}
                            {!isLast && (
                                <span className="text-gray-400">›</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumb