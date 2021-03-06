import React from 'react'
import { aboutMeData } from '../../utils/data/aboutData'
import { animationsData } from '../../utils/data/animations'

export const AboutContent = ({ isVisible }) => {
  const { about_me } = aboutMeData
  const { fade_in } = animationsData
 
  return (
    <div className={`about__me__content `}>
      {/* <h2 className={`${ isVisible ? fade_in : '' }`} style={{ animationDelay: '.5s' }}>This is a title</h2> */}
      {
        about_me.map((text, index) => (
        <p key={ index } className={`${ isVisible ? fade_in : '' }`} style={{ animationDelay: '.8s' }}>
          { text }
        </p>
        ))
      }
    </div>
  )
}
