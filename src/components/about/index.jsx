import React from 'react'
import { BottomFade } from '../helpers/BottomFade'
import { Divider } from '../helpers/Divider'
import { TopFade } from '../helpers/TopFade'
import { AboutContent } from './AboutContent'
import { AboutMeDisplay } from './AboutMeDisplay'

export const About = () => {
  return (
    <section className='about'>
      <Divider section="About"/>
      <div className='about__me'>
        <AboutContent />
        <AboutMeDisplay />
      </div>
    </section>
  )
}
