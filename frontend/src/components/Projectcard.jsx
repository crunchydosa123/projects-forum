import React from 'react'
import machine from '../assets/machinelearning.jpg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { projects } from '../constants';

const Projectcard = ({domain,title,lead,image}) => {
  return (
    <div className='w-[300px] h-[350px] m-[7px] bg-blue-200 rounded-3xl'>
        <div className=' flex flex-col items-center p-2'>
            <div className='flex items-center rounded-[100px] bg-[#bbbbbb] p-2 mb-[20px]'>
                <span className='text-[20px] font-semibold'>{domain}</span>
            </div>
            <div className='p-3 flex flex-col items-center'>
                <img src={image} className='w-[120px] h-[120px] rounded-full border-4 border-black' />
                <span className='text-[25px] font-bold'>{title}</span>
                <span className='text-[15px] font-bold'>{lead}</span>
            </div>
            <div className='flex items-center justify-around w-full m-2'>
                <button><LocalPhoneIcon fontSize='large' /></button>
                <button><CameraAltIcon fontSize='large' /></button>
                <button><MoreHorizIcon fontSize='large' /></button>
            </div>
        </div>
    </div>
  )
}

export default Projectcard
