import React from 'react';
import CommentIcon from '@mui/icons-material/Comment';

const LatestComments = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mb-4">
      <h5 className="flex items-center text-xl font-bold text-gray-800">
        <CommentIcon className="mr-2" />
        Latest Comments
      </h5>
      <div className="mt-2">
        <div className="flex items-start">
          <div className="w-10 h-10 bg-gray-200 rounded mr-2"></div>
          <div className="flex-1">
            <span className="text-gray-600">Name:</span>
            <p className="text-gray-600 border border-gray-200 p-2 rounded">Comment:</p>
          </div>
        </div>
        <div className="flex items-start mt-2">
          <div className="w-10 h-10 bg-gray-200 rounded mr-2"></div>
          <div className="flex-1">
            <span className="text-gray-600">Name:</span>
            <p className="text-gray-600 border border-gray-200 p-2 rounded">Comment:</p>
          </div>
        </div>
        <div className="flex items-start mt-2">
          <div className="w-10 h-10 bg-gray-200 rounded mr-2"></div>
          <div className="flex-1">
            <span className="text-gray-600">Name:</span>
            <p className="text-gray-600 border border-gray-200 p-2 rounded">Comment:</p>
          </div>
        </div>
        <div className="flex items-start mt-2">
          <div className="w-10 h-10 bg-gray-200 rounded mr-2"></div>
          <div className="flex-1">
            <span className="text-gray-600">Name:</span>
            <p className="text-gray-600 border border-gray-200 p-2 rounded">Comment:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestComments;
