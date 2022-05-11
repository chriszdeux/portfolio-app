import React from 'react'
import { animationsData } from '../../utils/data/animations'

export const Job = ({values}) => {
  const { isVisible, job } = values
  const { job_title, description, start_date, end_date, delay } = job
  const { fade_bottom } = animationsData
  return (
    <li className={`job ${ isVisible ? fade_bottom : '' }`} style={{ animationDelay: delay }}>
      <h3>{ job_title }</h3>
      <p>{ description }</p>
      <div>
        <p>Start date: { start_date }</p>
        {
          end_date &&
        <p>End date: { end_date }</p>
        }
      </div>
    </li>
  )
}
