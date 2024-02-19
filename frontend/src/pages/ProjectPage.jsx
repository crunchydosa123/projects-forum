import React from 'react'
import ProjectHeader from '../components/ProjectHeader'
import ProjectInfo from '../components/ProjectInfo'
import Projectcard from '../components/Projectcard'
import { projects } from '../constants'

const ProjectPage = () => {
  return (
    <div>
        <div>
            <ProjectHeader />
        </div>
        <div>
            <ProjectInfo />
        </div>
        <div className="grid grid-cols-3 gap-4 justify-between p-[15px]">
        {projects.map((item, index) => (
        <div key={index}>
          <div className="flex justify-center items-center h-full">
          <Projectcard
            key={item.id}
            title={item.title}
            domain={item.domain} 
            lead={item.lead}
            image={item.image}
            />
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ProjectPage
