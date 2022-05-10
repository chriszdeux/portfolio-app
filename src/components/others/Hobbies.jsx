import React from 'react'
import { animationsData } from '../../utils/data/animations'
import { hobbies } from '../../utils/data/skillsData'
import { HobbieItem } from './HobbieItem'

export const Hobbies = ({ isVisible }) => {
  const { fade_bottom } = animationsData

  return (
    <div className={`other__list ${ isVisible ? fade_bottom : '' }`} style={{ animationDelay: '1.5s' }}>
      <h3>Hobbies</h3>
      <ul>
        {
          hobbies.map(item => (
            <HobbieItem item={ item } key={ item.hobbie }/>
          ))
        }
      </ul>
    </div>
  )
}
