import React, { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersection'
import { aboutMeData } from '../../utils/data/aboutData'
import { animationsData } from '../../utils/data/animations'
import { Divider } from '../helpers/Divider'
import { Job } from './Job'

export const WorkExperience = () => {
  const section = "Work Experience"
  const { work_experience } = aboutMeData
  const { fade_in, fade_out } = animationsData
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  return (
    <section id="experience" className={ `container ${ isVisible ? fade_in : fade_out }` }  style={{
      animationDelay: '.2s'
    }}>
      <div className='experience' ref={ sectionRef }>
        <Divider section="Work Experience" values={{ sectionRef, isVisible, section }}/>
        <ul className='work__experience'>
          {
            work_experience.map(job => (
              <Job key={ job.job_title } values={{ job, isVisible }}/>
              ))
            }
        </ul>
      </div>

    </section>
  )
}
