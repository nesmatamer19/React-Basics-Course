import React from 'react'

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100">
            <div className="text-center px-6">
                <h1 className="text-9xl font-bold text-red-600">404</h1>
                <h2 className="text-4xl font-bold text-gray-800 mt-4">Page Not Found</h2>
                <p className="text-gray-600 text-lg mt-2">Sorry, the page you're looking for doesn't exist.</p>

                <div className="mt-8">
                    <a
                        href="/"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                    >
                        Go Back Home
                    </a>
                </div>

                <div className="mt-12">
                    <svg
                        className="w-64 h-64 mx-auto text-red-300 opacity-50"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path fillRule="evenodd" d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zm-2-7a1 1 0 11-2 0 1 1 0 012 0zM14 15H4v2h10v-2z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
