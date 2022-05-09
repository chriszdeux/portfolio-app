import React from 'react'
import { Divider } from '../helpers/Divider'
import { AboutContent } from './AboutContent'
import { AboutInterest } from './AboutInterest'
import { AboutMeDisplay } from './AboutMeDisplay'

export const About = () => {
  return (
    <section className='about container'>
      <Divider section="About"/>
      <div className='about__me'>
        <AboutContent />
        {/* <AboutMeDisplay /> */}
      </div>
      {/* <AboutInterest /> */}
    </section>
  )
}
