import React from 'react'

const Resume = () => {
    return (
        <>
            <div className="Gcard drop-shadow-md relative flex text-start rounded-lg dark:bg-coffee bg-white p-6 shadow">
                <div className="flex flex-col">
                    <h2 className='pb-6 text-xl font-bold tracking-right dark:text-gray-100 text-gray-800'>Resume</h2>
                    <div className="flex space-x-4">
                    <a
                        href="/NaziaHassan.pdf"
                        target="_blank"
                        rel="noopener noreferrer" // this is used for view only feature
                        className="inline-block px-4 py-2 bg-gray-100 rounded-lg dark:bg-opacity-75 dark:text-gray-950 dark:bg-gray-300 hover:dark:bg-opacity-100 hover:bg-gray-200 transition"
                    >
                        View
                    </a>
                    <a
                        href="/NaziaHassan.pdf" 
                        download
                        className="inline-block px-4 py-2 bg-gray-100 rounded-lg dark:bg-opacity-75 dark:text-gray-950 dark:bg-gray-300 hover:dark:bg-opacity-100 hover:bg-gray-200 transition"
                    >
                        Download
                    </a>   
                    </div>
                </div>
            </div>
        </>
    )
};
export default Resume