import React, { useState, useEffect } from 'react'; 

const CuteAnimal = () => {
    const [animalImage, setAnimalImage] = useState("");
  
    useEffect(() => {
      const fetchAnimalImage = async () => {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        setAnimalImage(data[0].url);
      };
  
      fetchAnimalImage();
      const interval = setInterval(fetchAnimalImage, 10000); // Change image every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="animal-card text-center">
        <h2 className="font-bold text-xl text-gray-800">Meet your friend</h2>
        {animalImage && <img src={animalImage} alt="Cute Animal" className="mt-2 w-64 h-48 object-cover rounded-lg" />}
      </div>
    );
  };
  

export default CuteAnimal;