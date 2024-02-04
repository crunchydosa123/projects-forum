import React from 'react';

const TeamDirectory = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mb-4">
      <h5 className="text-center text-xl font-bold text-gray-800">
        Team Directory
      </h5>
      <div className="flex justify-around mt-2">
        <div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <p className="text-center text-gray-600">Name Position</p>
        </div>
        <div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <p className="text-center text-gray-600">Name Position</p>
        </div>
        <div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <p className="text-center text-gray-600">Name Position</p>
        </div>
      </div>
    </div>
  );
};

export default TeamDirectory;
