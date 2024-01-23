import React from 'react';
import SearchBar from './SearchBar';
import UserIcons from './UserIcons';

const Navbar = () => {
  return (  
    <nav className='bg-gray-800 p-6'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-white font-bold text-2xl'><a href='/'>Projects-Forum</a></div>
        <SearchBar />
        <UserIcons />
      </div>
    </nav>
  )
}

export default Navbar