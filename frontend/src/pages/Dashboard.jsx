import React from 'react'
import Sidebar from '../components/Sidebar'
import Dash_home from '../components/Dash_home'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className="flex">
      <div className="flex-1">
        <Sidebar /> 
      </div>
      <div className="flex-auto">
        <Dash_home /> 
      </div>
    </div>
    </>
  )
}

export default Dashboard
