import React from 'react';
import { Link } from 'react-router-dom';

const ProjectGrid = () => {
    return (
        <>
        <div className=" Gcard hover:shadow-red-500 hover:bg-opacity-80 drop-shadow-md relative flex items-center text-start rounded-lg bg-white p-6 shadow">
           <Link to="/projects"> 
            <div className="flex flex-col">
              <h2 className="text-xl font-bold tracking-tight text-gray-800 mb-4">Projects</h2>
              <p className="text-lg text-gray-600 mb-4">
                Check out some of my recent projects:
              </p>
            </div>
            </Link>
          </div>
        </>
    )};
    export default ProjectGrid;