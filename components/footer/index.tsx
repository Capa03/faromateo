export const Footer = () => {
    return (
        <div className='bg-gray-800 text-gray-400'>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-300">© 2025 Faro Mateo</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-sm hover:text-white transition">
                            Privacy
                        </a>
                        <a href="#" className="text-sm hover:text-white transition">
                            Terms
                        </a>
                        <a href="#" className="text-sm hover:text-white transition">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer