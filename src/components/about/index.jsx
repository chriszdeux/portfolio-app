import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersection';
import { animationsData } from '../../utils/data/animations';
import { BottomFade } from '../helpers/BottomFade';
import { Divider } from '../helpers/Divider';
import { AboutContent } from './AboutContent';
const image = 'https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/portafolio%2Fchris-profile.png?alt=media&token=e601bc73-d448-4276-92b4-fc83035db67e';
export const About = () => {
  const { fade_in, fade_out } = animationsData
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  return (
    <section id="about" className={`container ${ isVisible ? fade_in : fade_out } `} style={{
      animationDelay: '.2s'
    }}>
      <div className='about' ref={ sectionRef }>
        <Divider section="About"/>
        <div className='about__me'>
          <figure>
            <img src={ image } alt="Christian meza" />
            <BottomFade />
          </figure>
          <AboutContent isVisible={ isVisible }/>
          {/* <AboutMeDisplay /> */}
        </div>       
      </div>
      {/* <AboutInterest /> */}
    </section>
  )
}
