import React, { useEffect, useState } from 'react';
import { aboutMeData } from '../../utils/data/aboutData';
import { skillsData } from '../../utils/data/skillsData';
import { BottomFade } from '../helpers/BottomFade';
import { RandomSkills } from './RandomSkills';
export const Hero = () => {
  const { contact } = aboutMeData;
  const [first, setfirst] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setfirst(true)
    }, 4000);
  }, [  ])
  return (
    <main className='hero'>
      <div className='hero__content'>
        <h2>Hi, my name is Christian </h2>
        <p>A React Web developer</p>
        <ul className='hero__contact__list'>
          {
            contact.map(contact => (
              <a href={ contact.link } target="_blank" rel="noreferrer">
                <li>
                { contact.icon }
                </li>
              </a>
            ))
          }
        </ul>
      </div>
      <figure className='hero__image'>
        {
          skillsData.map(skill => (
            <RandomSkills skill={ skill }/>
          ))
        }
        {
          first && 
          
          skillsData.map(skill => (
            <RandomSkills skill={ skill }/>
          ))
        }
        <img src="https://thumbs.dreamstime.com/b/neoned-lines-futuristic-aesthetics-glowing-neon-futuristic-style-smoked-dark-background-wallpaper-background-blue-navy-neoned-200395058.jpg" alt="" />
        <BottomFade />
      </figure>
    </main>
  )
}
