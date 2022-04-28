import React from 'react'
import { aboutMeData } from '../../utils/data/aboutData'

export const AboutInterestList = () => {
  const { hobbies } = aboutMeData
  return (
    <ul className='about__interest__list'>
      {
        hobbies.map( hobbie => (
          <li>
            { hobbie.hobbie } 

            {
              hobbie.list_hobbie && 
              hobbie.list_hobbie.map(list => (
                <span>/ { list }</span>
              ))
            }
          </li>
        ) )
      }
    </ul>
  )
}
