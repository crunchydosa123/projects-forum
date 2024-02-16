import React from 'react';
import SearchBar from './SearchBar';
import UserIcons from './UserIcons';
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const { currentUser } = useAuth();

  return (  
    <nav className='bg-gray-800 p-6'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-white font-bold text-2xl'><a href='/'>Projects-Forum</a></div>
        <SearchBar />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{currentUser ? (<p>Logout</p>) : (<p>Login</p>)}</button>
      </div>
    </nav>
  )
}

export default Navbar