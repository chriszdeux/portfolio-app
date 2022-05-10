import React, { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersection'
import { animationsData } from '../../utils/data/animations'
import { BottomFade,  } from '../helpers/BottomFade'
import { Divider } from '../helpers/Divider'
import { ListSkills } from './ListSkills'

export const Skills = () => {
  const { fade_in, fade_out } = animationsData
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  return (
    <section id="skills" className={`container ${ isVisible ? fade_in : fade_out }`} style={{
      animationDelay: '.2s'
    }}>
      <div className='skills'  >
        <Divider section="Skills"/>
        <h2>Technologies with which I've worked</h2>
        <div>
          <ListSkills values={ {isVisible, sectionRef} }/>
        </div>
        {/* <figure>
          <img src="https://thumbs.dreamstime.com/b/neoned-lines-futuristic-aesthetics-glowing-neon-futuristic-style-smoked-dark-background-wallpaper-background-blue-navy-neoned-200395120.jpg" alt="" />
          <BottomFade />
      </figure> */}
      </div>
    </section>
  )
}
