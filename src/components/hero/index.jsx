import React from 'react';
import { aboutMeData } from '../../utils/data/aboutData';
import { BottomFade } from '../helpers/BottomFade';
export const Hero = () => {
  const { contact } = aboutMeData
  return (
    <section className='hero'>
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
        <img src="https://thumbs.dreamstime.com/b/neoned-lines-futuristic-aesthetics-glowing-neon-futuristic-style-smoked-dark-background-wallpaper-background-blue-navy-neoned-200395058.jpg" alt="" />
        <BottomFade />
      </figure>
    </section>
  )
}
