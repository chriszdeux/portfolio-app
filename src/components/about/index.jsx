import React from 'react'
import { aboutMeData } from '../../utils/data/aboutData'
import { BottomFade } from '../helpers/BottomFade'
import { Divider } from '../helpers/Divider'
import { TopFade } from '../helpers/TopFade'
import { AboutContent } from './AboutContent'
import { AboutInterest } from './AboutInterest'
import { AboutMeDisplay } from './AboutMeDisplay'

export const About = () => {
  const { hobbies } = aboutMeData
  return (
    <section className='about'>
      <Divider section="About"/>
      <div className='about__me'>
        <AboutContent />
        <AboutMeDisplay />
      </div>
      <AboutInterest />
    </section>
  )
}
