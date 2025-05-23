import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from './Header';
import Footer from './Footer';
const projects = [
  {
    title:'Vyapaar-E',
    tech: ['MERN, ML, Web3'],
    repo: 'https://vyapaar-e-frontend.onrender.com',
    description: 'A web3 subscription based web app for small businesses to get financial insights and recommendations.',
  },
  {
    title: 'Pinsights',
    tech: 'Pinterest API, Gemini',
    repo: 'https://pinsights.vercel.app',
    description: 'An app that reviews your Pinterest saves and boards, providing a fun, summarized review of your collections.',
  },
  {
    title: 'ZenZone',
    tech: 'MERN',
    repo: 'https://zen-zone-raga.vercel.app',
    description: 'A mental health app that helps users track sleep and mood patterns over time and suggestions for wellness.',
  },
  {
    title: 'Personal Portfolio Website',
    tech: 'MERN',
    repo: 'https://naziahassan.vercel.app',
    description: 'A responsive portfolio showcasing my skills and projects.',
  },
  {
    title: 'Finance Tracker Platform',
    tech: 'MERN',
    repo: 'https://fin-yojak.vercel.app',
    description: "A CRUD application with analytics tools for tracking an individual's finances.",
  },
  {
    title: 'CO2 Prints',
    tech: 'MERN',
    repo: 'https://github.com/Bluesparx/CarbonPrints',
    description: `A website that calculates an individual's carbon footprint from various sectors such as transport, energy consumption, etc.`,
  },
  {
    title: 'English to Spanish Translator',
    tech: 'ML',
    repo: 'https://colab.research.google.com/drive/1bpsVrvoqeCdhE8VsYd2IqCdUBuHGJvvz?usp=sharing',
    description: 'An ML model built using transformer model architecture which translates English sentences to Spanish.',
  },
  {
    title: 'TourPlanner',
    tech: 'UI/UX',
    repo: 'https://www.figma.com/proto/PEMeNRS6XNhuEUaqQTjytE/TourPlanner?node-id=146-19&node-type=canvas&t=B0emDYyLTOgZ0BNP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A2&show-proto-sidebar=1',
    description: 'A figma design for a travel website for tourists to seamlessly explore locations and connect with local guides.'
  }
];

const Projects = () => {
  const navigate = useNavigate(); 

  return (
    <>
    <Header/>
    <div className="min-h-screen pt-14 py-9  lg:px-40 lg:py-10 sm:px-10">
      <div className='flex flex-row justify-between pb-2'>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">My Projects</h1>
        <button 
          onClick={() => navigate(-1)} // Navigate back
          className="mb-4 px-4 py-2 border-gray-300 dark:bg-gray-400 dark:border-gray-400 text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
        >Back</button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="Gcard dark:bg-coffee drop-shadow-md relative flex items-center justify-center rounded-lg bg-white p-6 shadow">
            <div className="flex flex-col text-start align-top">
              <h2 className="text-xl dark:text-gray-100 font-bold tracking-tight text-gray-800 mb-4">{project.title}</h2>
              <div className='flex flex-row gap-2 text-sm pb-2'>
              <span className="mt-4 inline-block px-2 py-2 font-semibold text-violet-800 bg-violet-300 rounded-xl">
                {project.tech}
              </span>
              <a 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-4 py-2 text-green-800 bg-green-300 rounded-xl hover:bg-green-200 hover:text-green-700 transition"
              >
                Link
              </a>
              </div>
              <p className="text-lg dark:text-gray-100 text-gray-600">{project.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Projects;
