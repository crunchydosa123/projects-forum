import React from 'react';
import SearchBar from './SearchBar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

const ProjectHeader = () => {
  return (
    <div className='flex items-center gap-[10px] p-5 bg-black justify-around'>
        <div className='text-white'>
                LOGO
            </div>
        <div >
            <SearchBar /> 
        </div>
        <div className='flex items-center justify-center gap-[20px]'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create project
        </button>
        <Button >
            Home
        </Button>
        <Button>
            DashBoard
        </Button>
        <Button >
            <AccountCircleIcon className="text-white-500 w-[20px] h-[20px]"  />
        </Button>
        </div>

    </div>
  )
};

export default ProjectHeader;