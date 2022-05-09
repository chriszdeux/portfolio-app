import React from 'react'
import { skillsData } from '../../utils/data/skillsData'

export const ListSkills = () => {
  return (
    <ul className='skill__list'>
        {
          skillsData.map(skill => (
            <li 
              // style={{ color: `${ skill.color }` }}
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
