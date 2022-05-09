import React from 'react'
import { aboutMeData } from '../../utils/data/aboutData'
import { Divider } from '../helpers/Divider'
import { Job } from './Job'

export const WorkExperience = () => {
  const { work_experience } = aboutMeData
  return (
    <section className='experience container'>
      <Divider section="Work Experience"/>
      <ul className='work__experience'>
        {
          work_experience.map(job => (
            <Job job={ job }/>
          ))
        }
      </ul>
    </section>
  )
}
