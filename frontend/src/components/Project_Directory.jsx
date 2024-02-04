import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';

const Project_Directory = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mb-4">
      <h5 className="flex items-center text-xl font-bold text-gray-800">
        <FolderIcon className="mr-2" />
        Project Directory
      </h5>
      <div className="mt-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
          Explore project details
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
          Discover new opportunities
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
          Enhance features
        </button>
      </div>
      <div className="mt-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
          Explore tools
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
          Stay ahead with market research
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
          Create project
        </button>
      </div>
    </div>
  );
};

export default Project_Directory;
