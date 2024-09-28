import React from 'react'

const About = () => {
    return (
        <>
            <div className="Gcard drop-shadow-md md:row-span-3 relative flex items-center text-start rounded-lg bg-white p-6 shadow">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl font-bold tracking-tight text-gray-800 mb-4">
                        About me
                    </h2>
                    <img src="/me.png" alt='img' style={{ width: '180px', height: '180px', justify: 'center', padding: 'auto', borderRadius: '50%', objectFit: 'cover' }} />
                    <p className="text-md font-bold text-gray-500 mb-2 pt-4">
                        Tech Stack
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                        {['C++', 'JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Python', 'MongoDB', 'Tailwind', 'Numpy', 'Pandas', 'Tensorflow'].map((tech) => (
                            <div key={tech} className="flex items-center justify-center bg-gray-100 rounded-md p-2">
                                <span className="text-sm font-medium text-gray-800">{tech}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-gray-500 pt-6">
                        Beyond coding, I'm an avid reader and a badminton player. I also like to crochet and bake!
                    </p>
                </div>
            </div>
        </>
    )
};

export default About