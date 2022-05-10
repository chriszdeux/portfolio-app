import React, { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersection'
import { animationsData } from '../../utils/data/animations'
import { Divider } from '../helpers/Divider'
import { BasicSkills } from './BasicSkills'
import { Hobbies } from './Hobbies'
import { SoftSkills } from './SoftSkills'

export const Others = () => {
  const { fade_in } = animationsData
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  return (
    <section id="others" className={`container ${ isVisible ?  fade_in : '' }`}>
      <div className='others' ref={ sectionRef }>
        <Divider section="Others"/>
        <div className='others__list'  style={{ animationDelay: '.5s' }}>
          <SoftSkills isVisible={ isVisible }/>
          <BasicSkills isVisible={ isVisible }/>
          <Hobbies isVisible={ isVisible }/>
        </div>
      </div>
    </section>
  )
}
