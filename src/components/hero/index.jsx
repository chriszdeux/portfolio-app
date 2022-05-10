import React, { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersection';
import { aboutMeData } from '../../utils/data/aboutData';
import { animationsData } from '../../utils/data/animations';

export const Hero = () => {
  const { contact } = aboutMeData;
  const { fade_in, fade_out, fade_left, fade_right, fade_bottom } = animationsData
  const [first, setfirst] = useState(false)
  // const [handleAnimation, setHandleAnimation] = useState(fade_in)
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  useEffect(() => {
    setTimeout(() => {
      setfirst(true)
    }, 4000);
  }, [  ])
  return (
    <main id="main" className={`hero container ${ isVisible ? fade_in : fade_out }`} 

      style={{
        animationDelay: '.2s'
      }}
      >
      <div className='hero__content'  ref={ sectionRef }>
        <h3 className={ `${ isVisible ? fade_left : ''} ` } style={{
          animationDelay: '.2s'
        }}>Hi, my name is</h3>
        <h2 className={ `${ isVisible ? fade_right  : ''}` } style={{
          animationDelay: '.4s'
        }}>Christian Meza</h2>
        <p className={ `${ isVisible ? fade_left  : ''}` } style={{
          animationDelay: '.6s'
        }}>I'm a frontend developer currently focusing on React, <span className={ `${ isVisible ? fade_in  : ''}`} style={{
          animationDelay: '2s'
        }}>I love bringing new projects to life.</span></p>
        <ul className={`hero__contact__list ${ isVisible ? fade_bottom : ''}`} style={{
          animationDelay: '2.5s'
        }}>
          {
            contact.map(contact => (
              <a key={ contact.name } href={ contact.link } target="_blank" rel="noreferrer">
                <li>
                { contact.icon }
                </li>
              </a>
            ))
          }
        </ul>
      </div>
      
      {/* <figure className='hero__image'>
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
      </figure> */}
    </main>

  )
}
