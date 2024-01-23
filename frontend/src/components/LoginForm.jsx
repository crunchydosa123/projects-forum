import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

const LoginForm = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [password, setPassword ] = useState('');

  return (
    <div className='min-h-screen flex items-center justify-center'>
    <form className='bg-yellow-300 p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <input type='text' className='mt-2 p-2 w-full border border-gray-300 rounded' placeholder='username' />
        <input type={passVisible ?  'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mt-2 p-2 w-full border border-gray-300 rounded' placeholder='password' />
        <button type='submit' className='w-full mt-4 botder p-3 bg-red-400 rounded text-white text-bold hover:bg-red-500'>Login</button>
    </form>
    </div>
  )
}

export default LoginForm