import React, { useContext } from 'react'
import Project_Directory from './Project_Directory'
import UrgentTasks from './UrgentTasks'
import LatestComments from './LatestComments'
import ProjectTimeline from './ProjectTimeline'
import TeamDirectory from './TeamDirectory'
import { UserContext } from '../contexts/AuthContext'

const Dash_home = () => {
  const user = useContext(UserContext);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-4">
        <div className='text-black font-bold text-2xl'>Welcome, { user ? user.email : "(please sign in)" }</div>
        <ProjectTimeline /> 
        <UrgentTasks /> 
      </div>
      <div className="mt-8">
        <Project_Directory /> 
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <LatestComments /> 
        <TeamDirectory /> 
      </div>
    </div>
  )
}

export default Dash_home
