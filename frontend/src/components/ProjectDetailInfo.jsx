import React from 'react'
import software from '../assets/software.jpg'

const ProjectDetailInfo = () => {
  return (
    <div>
      <div className='flex items-center justify-center m-[50px] gap-10'>
            <div className='border-[2px] border-black rounded-full'>
                <img src={software} className='w-[300px] h-[300px] m-1 rounded-full' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <span className='text-[50px]  mb-3'>Project Title</span>
                <span className='text-[30px] mb-3 font-bold'>Project Domain</span>
                <div className='flex items-center justify-center w-full text-[19px] font-semibold gap-[10px]'>
                <div className='flex flex-col items-center '>
                        <span>Journal</span>
                        <span>Project Leader</span>
                    </div>
                    
                </div>
                <div className='flex flex-row items-center justify-center mt-2'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                        Contact Details
                    </button>
                </div>
                    
            </div>

      </div>
    </div>
  )
}

export default ProjectDetailInfo
