import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase-config";


const SignupForm = () => {
    const [passVisible, setPassVisible] = useState(false);
    const [password, setPassword ] = useState('');
    const [email, setEmail] = useState('');
    const [confpassword, setConfPassword ] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          console.log(userCredential);
          const user = userCredential.user;
          localStorage.setItem('token', user.accessToken);
          localStorage.setItem('user', JSON.stringify(user));
          navigate("/");
      } catch (error) {
          console.error(error);
      }
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
    <form onSubmit={handleSubmit} className='bg-yellow-300 p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-4'>Create a new Account</h2>
        <input 
        type='email' 
        className='mt-2 p-2 w-full border border-gray-300 rounded' 
        placeholder='username' 
        required 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        />
        <input type={passVisible ?  'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mt-2 p-2 w-full border border-gray-300 rounded' 
        placeholder='password' 
        required
        />
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
