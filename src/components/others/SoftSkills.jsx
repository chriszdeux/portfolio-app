import React from 'react'
import { animationsData } from '../../utils/data/animations'
import { softSkillsData } from '../../utils/data/skillsData'
import { SkillItem } from './SkillItem'

export const SoftSkills = ({ isVisible }) => {
  const { fade_bottom } = animationsData
  return (
    <div className={`other__list ${ isVisible ? fade_bottom : '' }`} style={{ animationDelay: '.8s' }}>
      <h3>SoftSkills</h3>
      <ul>
        {
          softSkillsData.map(item => (
            <SkillItem item={ item } key={ item.skill }/>
          ))
        }
      </ul>
    </div>
  )
}
