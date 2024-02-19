import React from 'react'
import hardware from '../assets/hardware.jpg';
import software from '../assets/software.jpg';
import { projectNavLinks } from '../constants';

const ProjectInfo = () => {
  return (
    <div>
    <div className="flex items-center justify-around m-10">
        <div className='flex flex-col'>
            <span className='text-[50px]'>
                Total Projects
            </span>
            <span>
                As per the available Data
            </span>
        </div>
        <div className='flex items-center'>
            <div className='flex justify-center items-center gap-5'>
                <div className='border-[2px] border-black rounded-[10px]'>
                    <img src={hardware} className='w-[100px] h-[100px] m-1' />
                </div>
                <div className='flex items-center flex-col font-medium'>
                    <span className='text-[20px]'>
                        Hardware Projects
                    </span>
                    <span className='text-[40px]'>
                        16,580
                    </span>
                </div>
                <div className='border-[2px] border-black rounded-[10px]'>
                    <img src={software} className='w-[100px] h-[100px] m-1' />
                </div>
                <div className='flex items-center flex-col font-medium'>
                    <span className='text-[20px]'>
                        Software Projects
                    </span>
                    <span className='text-[40px]'>
                        16,580
                    </span>
                </div>   
            </div>
        </div>
      </div>
      <div>
      <ul className='list-none sm:flex hidden justify-around items center flex-1 m-3'>
        {projectNavLinks.map((nav,index) =>(
        <li 
        key={nav.id} 
        className={`font-poppins font-normal cursor-pointer text-[16px] ${index===projectNavLinks.length -1 ? 'mr-0':'mr-10'} text-black`}>
          <a href={`#${nav.id}`} className="px-4 py-2 bg-[#bbbbbb] rounded-[100px] hover:bg-[#23a1d1] ">
            {nav.title}
          </a>
        </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default ProjectInfo

