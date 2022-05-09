import React from 'react'
import { icons } from '../../utils/icons/icons'

export const ProjectTechnologies = ({project}) => {
  const { technologies, link, repository } = project
  const { live_icon, github_icon } = icons
  return (
    <div className='project__technologies'>
      <ul className='technologies__list'>
        {
          technologies.map(item => (
            <li key={ item.name }>
              <span style={{ color: `${item.color}` }}> { item.icon } </span>
              { item.name }
            </li>
          ))
        }
      </ul>
    </div>
  )
}
