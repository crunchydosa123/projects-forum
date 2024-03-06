import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, signInWithGoogle, resetPassword } from '../firebase-config';
import { Auth } from 'firebase/auth';

const LoginForm = () => {
  const auth1 = auth;
  const [passVisible, setPassVisible] = useState(false);
  const [password, setPassword ] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        const user = userCredential.user;
        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate("/dashboard");
    } catch (error) {
        console.error(error);
    }
};

const handleForgotPassword = async (e) => {
  try {
    await resetPassword(email);
    console.log('Password reset email sent successfully!');
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className='min-h-screen flex items-center justify-center'>
    <form onSubmit={handleSubmit} className='bg-yellow-300 p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <input 
        type='email' 
        className='mt-2 p-2 w-full border border-gray-300 rounded' 
        placeholder='username' 
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        type={passVisible ?  'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mt-2 p-2 w-full border border-gray-300 rounded' 
        placeholder='password' 
        />
        <button type='submit' className='w-full mt-4 border p-3 bg-red-400 rounded text-white text-bold hover:bg-red-500'>Login</button>
        <button className='w-full mt-4 border p-3 bg-red-400 rounded text-white text-bold hover:bg-red-500' onClick={signInWithGoogle}>Login In With Google</button>
        <button className='w-full mt-4 border p-3 bg-red-400 rounded text-white text-bold hover:bg-red-500' onClick={handleForgotPassword}>Forgot Password</button>
    </form>
    </div>
  )
}

export default LoginForm
