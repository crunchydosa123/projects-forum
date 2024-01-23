import React from 'react'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'
import backgroundImage from './pexels-stephan-seeber-1261728.jpg';

const Loginpage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-cover min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <LoginForm />
    </div>
    </div>
  )
}

export default Loginpage