import React from 'react'

export const ProjectDescription = ({ project }) => {
  // debugger
  const { name, cover_image, description, gallery, work_in_progress } = project

  return (
    <>
      <h2>{ name }</h2>
        <p>{ description }. 
        { work_in_progress && 
        <span>
          (Work in progress)
        </span> }</p>
    </>
  )
}
