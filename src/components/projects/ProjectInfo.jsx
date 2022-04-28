import React from 'react'
import { BottomFade } from '../divider/BottomFade'

export const ProjectInfo = ({ project }) => {
  const { name, cover_image, description, gallery, work_in_progress } = project

  return (
    <>
      <figure className='project__screenshot' >
        <img  src={ cover_image } alt={ name } />
        <BottomFade />
      </figure>
      <div className='project__info'>
        <h2>{ name }</h2>
        <p>{ description }. 
        { work_in_progress && 
        <span>
          (Work in progress)
        </span> }</p>
        {/* <h3 onClick={ handleOpenGallery }>Gallery</h3> */}
      </div>
    </>
  )
}
