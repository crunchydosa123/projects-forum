import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import UserIcons from './UserIcons';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth'; // Corrected import statement
import { auth } from '../firebase-config';
//import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const user = useContext(UserContext)
  const navigate = useNavigate();
  //const { currentUser } = useAuth();
  const goToLogin = () =>{
    navigate('/login');
  }

  const handleSignOut = () => {
      signOut(auth).then(() => { // Corrected signOut call with the auth object
        // Sign-out successful.
        console.log("User signed out");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };

  return (  
    <nav className='bg-gray-800 p-6'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-white font-bold text-2xl'><a href='/'>Projects-Forum</a></div>
        <SearchBar />
        {user ? <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={ handleSignOut }>Logout</button> :
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>}
        
      </div>
    </nav>
  );
}

export default Navbar;
