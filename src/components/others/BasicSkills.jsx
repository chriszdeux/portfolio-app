import React from 'react'
import { animationsData } from '../../utils/data/animations'
import { basicSkills } from '../../utils/data/skillsData'
import { SkillItem } from './SkillItem'

export const BasicSkills = ({ isVisible }) => {
  const { fade_bottom } = animationsData

  return (
    <div className={`other__list ${ isVisible ? fade_bottom : '' }`} style={{ animationDelay: '1.2s' }}>
      <h3>Basic Skills</h3>
      <ul>
        {
          basicSkills.map(item => (
            <SkillItem item={ item } key={ item.skill }/>
          ))
        }
      </ul>
    </div>
  )
}
