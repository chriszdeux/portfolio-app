import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { personal_styles } from '../../utils/styles'
import { ProjectInfo } from './ProjectInfo'
import { ProjectTechnologies } from './ProjectTechnologies'
import { Divider } from '../helpers/Divider'
import { FullDivider } from '../helpers/FullDivider'
import { ProjectDescription } from './ProjectDescription'
import { TechnologiesUsed } from './TechnologiesUsed'
import { animationsData } from '../../utils/data/animations'

export const ProjectCard = ({values}) => {
  const { isVisible, project } = values
  // const {
  //   name, 
  //   cover_image,
  //   link,
  //   repository,
  //   technologies,
  //   description
  // } = project
  const { technologies, name, delay } = project
  const { main_color, secondary_color, background_color,  } = personal_styles
  const { fade_bottom } = animationsData
  return (
    <article className={`project__card ${ fade_bottom}`} style={{ animationDelay: delay }}>
      <h2 className='project--name'>{ name }</h2>
      <ProjectInfo project={ project }/>
      <div className='project__info'>
        <ProjectDescription project={ project }/>
        <TechnologiesUsed project={ project }/>
        {/* <h3 onClick={ handleOpenGallery }>Gallery</h3> */}
      </div>
    </article>
  )
}
