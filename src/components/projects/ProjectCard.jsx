import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { personal_styles } from '../../utils/styles'
import { ProjectInfo } from './ProjectInfo'
import { ProjectTechnologies } from './ProjectTechnologies'

export const ProjectCard = ({project}) => {
  // const {
  //   name, 
  //   cover_image,
  //   link,
  //   repository,
  //   technologies,
  //   description
  // } = project
  const { main_color, secondary_color, background_color } = personal_styles
  return (
    <article className='project__card'>
      <ProjectInfo project={ project }/>
      <ProjectTechnologies project={ project }/>
    </article>
  )
}
