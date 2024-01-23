import React, {useState} from 'react'


const SignupForm = () => {
    const [passVisible, setPassVisible] = useState(false);
    const [password, setPassword ] = useState('');
    const [confpassword, setConfPassword ] = useState('');

  return (
    <div className='min-h-screen flex items-center justify-center'>
    <form className='bg-yellow-300 p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-4'>Create a new Account</h2>
        <input type='text' className='mt-2 p-2 w-full border border-gray-300 rounded' placeholder='username' />
        <input type={passVisible ?  'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mt-2 p-2 w-full border border-gray-300 rounded' placeholder='password' />
        <input type={passVisible ?  'text' : 'password'}
        value={confpassword}
        onChange={(e) => setConfPassword(e.target.value)}
        className='mt-2 p-2 w-full border border-gray-300 rounded' placeholder='confirm password' />
        <button type='submit' className='w-full text-bold mt-4 botder p-3 bg-blue-500 rounded text-white text-bold hover:bg-blue-600'>Sign me up</button>
    </form>
    </div>
  )
}

export default SignupForm