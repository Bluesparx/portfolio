import React, {useState, useEffect} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import CuteAnimal from './CuteAnimal';


const SocialButton = ({ iconUrl, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
  >
    <img src={iconUrl} alt={label} className="mr-2 h-7 w-7 bg-gray-200 rounded p-1" />
    {/* {label} */}
  </a>
);


function CardGrid() {
    const [date, setDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [temperature, setTemperature] = useState(null);
    const [weather, setWeather] = useState(null);
    const [icon, setIcon] = useState('');
    
    useEffect(() => {
      const updateTime = () => {
        const now = new Date();
        const dateString = now.toDateString();
        const timeString = now.toLocaleTimeString();
        setDate(dateString);
        setCurrentTime(timeString);
      };
  
      updateTime();
      const timer = setInterval(updateTime, 1000); 
  
      return () => clearInterval(timer);
    }, []);

    useEffect(() => {
      const fetchTemperature = async () => {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=28.7041&lon=77.1025&appid=${apiKey}&units=metric`; 
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data);
          if (data) { 
            setTemperature(data.main.temp);
            setWeather(data.weather[0].description);
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Create the icon URL
            setIcon(iconUrl);
          } else {
            setTemperature('No data found');
            setWeather('No data found')
          }
        } catch (error) {
          console.error('Error fetching the temperature data:', error);
        }
      };
  
      fetchTemperature();
    }, []);


  return (
    <div className="py-4 sm:py-6 lg:py-8">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">

          {/* Intro */}
          <div  className="Gcard drop-shadow-md md:col-span-3 relative flex items-center text-start rounded-lg bg-white p-6 shadow">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-4">
                Hi there!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
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

          {/* About Me */}
          <div className="Gcard drop-shadow-md md:row-span-3 relative flex items-center text-start rounded-lg bg-white p-6 shadow">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold tracking-tight text-gray-800 mb-4">
                About me
              </h2>
              <img src="/me.png" alt='img' style={{ width: '180px', height: '180px', justify:'center', padding: 'auto', borderRadius: '50%', objectFit: 'cover'}} />
              <p className="text-md font-bold text-gray-500 mb-2 pt-4">
                Tech Stack
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {['C++','JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Python', 'MongoDB', 'Tailwind', 'Numpy', 'Pandas', 'Tensorflow'].map((tech) => (
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
        

        
          {/* Resume */}
          <div className="Gcard drop-shadow-md relative flex text-start rounded-lg bg-white p-6 shadow">
            <div className="flex flex-col">
              <h2 className='pb-6 text-xl font-bold tracking-right text-gray-800'>Resume</h2>
              <div className="flex space-x-4">
                <a className="inline-block px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition" href="./NaziaHassan.pdf" target="_blank" rel="noopener noreferrer">View</a>
                <a className="inline-block px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition" href="./NaziaHassan.pdf" download>Download</a>
              </div>
            </div>
          </div>

          {/* contact */}
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


          {/* Projects */}
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

          {/* Experience */}
          <div className=" Gcard drop-shadow-md relative flex  text-start rounded-lg bg-white p-6 shadow">
            <div className="flex flex-col w-full  text-start">
              <h2 className="text-xl font-bold tracking-tight text-gray-800 mb-4">Experience</h2>
              <div className="text-start pb-3">
                <p className='font-bold text-md text-gray-800'>Research Intern</p>
                <a className='text-red-300 text-md' href='https://drdo.gov.in/drdo/'>DRDO</a>
                <p className='text-md text-gray-800'>Jun 2024 - August 2024</p>
              </div>
              <div className="text-start pb-3">
                <p className='font-bold text-md text-gray-800'>Web Development Trainee</p>
                <a className='text-red-300 text-md' href='https://www.anveshanfoundation.org/'>Anveshan foundation</a>
                <p className='text-md text-gray-800'>Jun 2023 - August 2023</p>
              </div>
            </div>
          </div>


          {/* Time */}
          <div className="Gcard drop-shadow-md relative text-start flex rounded-lg bg-white p-6 shadow">
            <div className="flex flex-col px-4 text-start">
              <h2 className="text-xl font-bold tracking-tight text-gray-800 mb-4">Today</h2>
              <p className="text-lg text-gray-900 pb-2">{date}</p>
              <p className="text-md text-gray-900 pb-2">{currentTime}</p>
              <p className="text-sm font-bold text-gray-600 pb-2">New Delhi</p>
              
                <p className="text-md  text-gray-900 pb-2">Temperature: {temperature}°C</p>
                <div className='flex flex-row bg-gray-100 items-center'>
                  {icon && <img style={{ width: '50px', height: '50px' }} src={icon} alt="Weather icon" />} 
                  <p className="text-md text-justify text-gray-900">{weather}</p>
                </div>
              
            </div>
          </div>

          <div className="Gcard drop-shadow-md relative flex  text-start rounded-lg bg-white p-6 shadow">
          <CuteAnimal/>
          </div>



        </div>
      </div>
    </div>
  );
}

export default CardGrid;