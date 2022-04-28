import React from 'react'
import { skillsData } from '../../utils/data/skillsData'
import { BottomFade } from '../divider/BottomFade'
import { Divider } from '../divider/Divider'
import { ListSkills } from './ListSkills'

export const Skills = () => {
  return (
    <section className='skills'>
      <Divider section="My Skills"/>
      <div>
        <ListSkills />
        <figure>
          <img src="https://thumbs.dreamstime.com/b/neoned-lines-futuristic-aesthetics-glowing-neon-futuristic-style-smoked-dark-background-wallpaper-background-blue-navy-neoned-200395120.jpg" alt="" />
          <BottomFade />
      </figure>

      </div>
    </section>
  )
}
