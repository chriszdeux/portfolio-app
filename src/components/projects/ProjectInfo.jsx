import React from 'react'
import { BottomFade } from '../helpers/BottomFade'
import { RightFade } from '../helpers/RightFade'
import { ProjectDescription } from './ProjectDescription'
import { TechnologiesUsed } from './TechnologiesUsed'

export const ProjectInfo = ({ project }) => {
  const { name, cover_image, description, gallery, work_in_progress } = project
  const { technologies, link, repository } = project

  return (
      <figure className='project__screenshot' >
        <img  src={ cover_image } alt={ name } />
        <BottomFade />
        <RightFade />
      </figure>
  )
}
