import React from 'react'
import { BottomFade,  } from '../helpers/BottomFade'
import { Divider } from '../helpers/Divider'
import { ListSkills } from './ListSkills'

export const Skills = () => {
  return (
    <section className='skills container'>
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
