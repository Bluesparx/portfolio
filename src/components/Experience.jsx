import React from 'react'

const Experience = () => {
    return (
        <>
        <div className=" Gcard dark:bg-coffee drop-shadow-md relative flex  text-start rounded-lg bg-white p-6 shadow">
            <div className="flex flex-col w-full  text-start">
              <h2 className="text-xl dark:text-gray-100 font-bold tracking-tight text-gray-800 mb-4">Experience</h2>
              <div className="text-start pb-5">
                <p className='font-bold text-md dark:text-gray-100 text-gray-800'>Research Intern</p>
                <a className='text-red-300 text-md' href='https://drdo.gov.in/drdo/'>DRDO</a>
                <p className='text-md dark:text-gray-200 text-gray-800'>Jun 2024 - August 2024</p>
              </div>
              <div className="text-start pb-3">
                <p className='font-bold dark:text-gray-100 text-md text-gray-800'>Web Development Trainee</p>
                <a className='text-red-300 text-md' href='https://www.anveshanfoundation.org/'>Anveshan foundation</a>
                <p className='text-md dark:text-gray-200 text-gray-800'>Jun 2023 - August 2023</p>
              </div>
            </div>
          </div>
        </>
    )};

export default Experience