import React from 'react'
import { icons } from '../../utils/icons/icons'

export const TechnologiesUsed = ({ project }) => {
  const { technologies, link, repository } = project
  const { github_icon, link_icon } = icons
  return (
    <div className='technologies__links'>
      <ul className='technologies__list'>
        {
          technologies.map(item => (
            <li key={ item.name }>
              { item.name }
            </li>
          ))
        }
      </ul>
      <div className='links'>
        <a href={ link } target="_blank" rel="noopener noreferrer">{ link_icon }</a>
        <a href={ repository } target="_blank" rel="noopener noreferrer">{ github_icon }</a>
      </div>
  </div>
  )
}
