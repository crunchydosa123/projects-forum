import React from 'react'
import ProjectHeader from '../components/ProjectHeader'
import ProjectDetailInfo from '../components/ProjectDetailInfo'
import ProjectDetails from '../components/ProjectDetails'

const ProjectDetailPage = () => {
  return (
    <div>
      <div>
        <ProjectHeader />
      </div>
      <div>
        <ProjectDetailInfo />
      </div>
      <div>
        <ProjectDetails />
      </div>
    </div>
  )
}

export default ProjectDetailPage
