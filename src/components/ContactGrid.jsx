import React from 'react'
import { Link } from 'react-router-dom';

const ContactGrid = () => {
    return (
        <>
        <div className=" Gcard hover:shadow-red-500 hover:bg-opacity-80 drop-shadow-md relative flex text-start rounded-lg bg-white p-6 shadow">
          <Link to='./contact'>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold tracking-tight text-gray-800 mb-4">Contact me</h2>
              <p className="text-lg text-gray-600 mb-4">
                Feel free to reach out!
              </p>
            </div>
          </Link>
          </div>
        </>
    )};
export default ContactGrid;