import React from 'react'

export const Job = ({job}) => {
  const { job_title, description, start_date, end_date } = job
  return (
    <li className='job'>
      <h3>{ job_title }</h3>
      <p>{ description }</p>
      <div>
        <p>Start date: { start_date }</p>
        <p>End date: { end_date }</p>
      </div>
    </li>
  )
}
