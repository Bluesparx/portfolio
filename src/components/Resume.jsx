import React from 'react'

const Resume = () => {
    return (
        <>
            <div className="Gcard drop-shadow-md relative flex text-start rounded-lg bg-white p-6 shadow">
                <div className="flex flex-col">
                    <h2 className='pb-6 text-xl font-bold tracking-right text-gray-800'>Resume</h2>
                    <div className="flex space-x-4">
                        <a className="inline-block px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition" href="./NaziaHassan.pdf" target="_blank" rel="noopener noreferrer">View</a>
                        <a className="inline-block px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition" href="./NaziaHassan.pdf" download>Download</a>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Resume