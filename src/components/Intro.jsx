import React from 'react';
import '../App.css';

const SocialButton = ({ iconUrl, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex lg:ml-3 ml-1 items-center justify-center bg-gray-100 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10"
  >
    <img src={iconUrl} alt="Social icon" className="h-6 w-6" />
  </a>
);


const Intro = ()=> {
    

  return (
          <div  className="Gcard drop-shadow-md md:col-span-3 relative flex items-center text-start rounded-lg bg-white p-6 sm:p-4shadow px-1">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-4 mx-2">
                Hi there!
              </h2>
              <p className="text-lg text-gray-700 mb-6 mx-2">
                I'm <span className="font-bold text-red-400">Nazia Hassan</span>, a pre-final year CSE student at IGDTUW with a passion for web development. Currently learning full-stack MERN development, I also dabble in UI/UX design. Let's talk over coffee—about my cat :)
              </p>
              <div className="flex flex-row gap-3">
                <SocialButton iconUrl="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/dark/github.svg" href="https://github.com/Bluesparx" label="GitHub" />
                <SocialButton iconUrl="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/dark/linkedin.svg" href="https://www.linkedin.com/in/naziahassan004" label="LinkedIn" />
                <SocialButton iconUrl="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/dark/twitter-x.svg" href="https://x.com/oknaziaa" label="X" />
                <SocialButton iconUrl="https://raw.githubusercontent.com/CLorant/readme-social-icons/main/large/dark/pinterest.svg" href="https://www.pinterest.com/bluesparxx/" label="Pinterest"/>
                <SocialButton iconUrl="./leetcode.svg" href="https://leetcode.com/u/Naziaa/" label="Leetcode"/>
              </div>
            </div>
          </div>
  );
}

export default Intro;