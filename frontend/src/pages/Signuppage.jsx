import React from 'react'
import SignupForm from '../components/SignupForm'
import Navbar from '../components/Navbar'
import backgroundImage from './pexels-stephan-seeber-1261728.jpg';

const Signuppage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-cover min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <SignupForm />
    </div>
    </div>
  )
}

export default Signuppage