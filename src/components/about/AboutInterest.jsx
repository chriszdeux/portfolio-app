import React from 'react'
import { BottomFade } from '../helpers/BottomFade'
import { TopFade } from '../helpers/TopFade'
import { AboutInterestList } from './AboutInterestList'

export const AboutInterest = () => {
  return (
    <div className='about__interest'>
      <h2>Some things of my interest</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, cumque!
      </p>
      <AboutInterestList />
      {/* <figure>
        <TopFade />
        <img src="https://media.istockphoto.com/photos/focusing-on-the-computer-screen-picture-id1206455860?b=1&k=20&m=1206455860&s=170667a&w=0&h=rSjmdKUnEn1EWN9YdE-6FA9bkHBm7vYiwo1GkNTZNsc=" alt="" />
        <BottomFade />
      </figure> */}
    </div>
  )
}
