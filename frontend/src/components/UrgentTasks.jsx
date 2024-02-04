import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';

const UrgentTasks = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mb-4">
      <h5 className="flex items-center text-xl font-bold text-gray-800">
        <AssignmentIcon className="mr-2" />
        Urgent Tasks
      </h5>
      <div className="mt-2">
        <div className="flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
          <span className="ml-2 text-gray-600">Task 1 Today</span>
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
          <span className="ml-2 text-gray-600">Task 2 Today</span>
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
          <span className="ml-2 text-gray-600">Task 3 Today</span>
        </div>
      </div>
    </div>
  );
};

export default UrgentTasks;
