import React from 'react'
import { projects } from '../../utils/data/projectsData'
import { Divider } from '../divider/Divider'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <section className='projects'>
     <Divider section="Projects"/>
     <ul className='project__cards'>
       {
      projects.map(project => (
        <ProjectCard project={ project }/>
      ))
       }
     </ul>
   </section>
  )
}
