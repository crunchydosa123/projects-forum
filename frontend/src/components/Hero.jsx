import React from 'react';
import hero from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center ">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div><h1 className="text-4xl font-bold text-gray-800">Collaborate and Create</h1></div>
          <div><p className="text-lg text-gray-600 mt-4">Description</p></div>
          <div><button className="bg-blue-600 text-white px-6 py-3 rounded mt-6">Get Started</button></div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src={hero} alt="hero" className="w-full h-full object-cover"/>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-bold text-gray-800 ">Features</h2>
        <p className="text-lg text-gray-600 mt-4">Description</p>
        <div className='flex justify-center px-20 py-10'>
          {[1, 2, 3, 4].map(feature => (
            <div key={feature} className="flex flex-col items-center justify-between mr-10 ml-10">
              <div className="w-16 h-16 bg-gray-200 rounded ml-1"></div>
              <div>
                <div><h3 className="text-xl font-semibold text-gray-800">Feature {feature}</h3></div>
                <div><p className="text-gray-600 mt-2">Description</p></div>
              </div>
            </div> 
          ))}
          </div>
      </div>
    </div>
  );
};

export default Hero;
