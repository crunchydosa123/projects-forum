import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';


const SearchBar = () => {
  return (
    <div className='flex items-left'>
        <input
        type='text'
        placeholder='Search projects'
        className='p-2 border border-white-300 w-80 rounded-l-md'></input>
        <button className='p-2 bg-blue-500 text-while rounded-r-md'>
            <SearchIcon class="h-6 w-6 text-white-500" />
        </button>
        
    </div>
  )
}

export default SearchBar