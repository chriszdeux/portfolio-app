import React, { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersection'
import { animationsData } from '../../utils/data/animations'
import { Divider } from '../helpers/Divider'
import { AboutContent } from './AboutContent'
import { AboutInterest } from './AboutInterest'
import { AboutMeDisplay } from './AboutMeDisplay'

export const About = () => {
  const { fade_in, fade_out } = animationsData
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  return (
    <section id="about" className={`container ${ isVisible ? fade_in : fade_out } `} style={{
      animationDelay: '.2s'
    }}>
      <div className='about' ref={ sectionRef }>
        <Divider section="About"/>
        <div className='about__me'>
          <AboutContent isVisible={ isVisible }/>
          {/* <AboutMeDisplay /> */}
        </div>
      </div>
      {/* <AboutInterest /> */}
    </section>
  )
}
