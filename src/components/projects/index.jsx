import React from 'react'
import { projects } from '../../utils/data/projectsData'
import { Divider } from '../helpers/Divider'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <section className='projects container'>
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
