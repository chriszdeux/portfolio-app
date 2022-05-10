import React from 'react'
import { animationsData } from '../../utils/data/animations'
import { skillsData } from '../../utils/data/skillsData'

export const ListSkills = ({ values }) => {
  const { sectionRef, isVisible } = values
  const { fade_in, fade_out } = animationsData
  return (
    <ul className={`skill__list `} ref={ sectionRef }>
        {
          skillsData.map(skill => (
            <li key={ skill.id }
              // style={{ color: `${ skill.color }` }}
              className={` ${ isVisible ? fade_in : '' } `}
              style={{
                animationDelay: `${ skill.delay }`
              }}
              >
                { skill.name }
                <span style={{ color: `${ skill.color }` }}>
                  { skill.icon }
                </span>
                {/* 
              <h3>{ skill.name }</h3> */}
            </li>
          ))
        }
      </ul>
  )
}
