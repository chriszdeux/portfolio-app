import React from 'react'

export const TechnologiesUsed = ({ project }) => {
  const { technologies, link, repository } = project
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
        <a href={ link } target="_blank" rel="noopener noreferrer">Live</a>
        <a href={ repository } target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
  </div>
  )
}
