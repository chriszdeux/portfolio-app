import React, { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersection'
import { animationsData } from '../../utils/data/animations'
import { projects } from '../../utils/data/projectsData'
import { Divider } from '../helpers/Divider'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  const { fade_in, fade_out } = animationsData
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  return (
    <section id="projects" className={`container ${ isVisible ? fade_in : fade_out }`}  style={{
      animationDelay: '.2s'
    }}>
      <div className='projects' >

      <Divider section="Projects"/>
      <ul className='project__cards' ref={ sectionRef }>
        {
        projects.map(project => (
          <ProjectCard key={ project.id } project={ project }/>
          ))
        }
      </ul>
    </div>
   </section>
  )
}
