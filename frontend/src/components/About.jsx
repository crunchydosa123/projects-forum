import React from 'react';
import about from '../assets/about.jpg'; 

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center">
        <div className="w-full h-full md:w-1/2 flex justify-center">
          <img src={about} alt="about" style={{ width: '500px', height: 'auto' }}/>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-center px-10">
          <h1 className="text-4xl font-bold text-gray-800">About Us Example</h1>
          <p className="text-lg text-gray-600 mt-4">About Us sub-title Description</p>
          <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className="text-gray-600 mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded mt-6">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
