import React from 'react'
import Project_Directory from './Project_Directory'
import UrgentTasks from './UrgentTasks'
import LatestComments from './LatestComments'
import ProjectTimeline from './ProjectTimeline'
import TeamDirectory from './TeamDirectory'

const Dash_home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-4">
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
