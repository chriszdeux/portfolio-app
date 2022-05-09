import React from 'react'
import { aboutMeData } from '../../utils/data/aboutData'

export const AboutContent = () => {
  const { about_me } = aboutMeData
  return (
    <div className='about__me__content'>
      <h2>This is a title</h2>
      <p>
        { about_me }
      </p>
    </div>
  )
}
