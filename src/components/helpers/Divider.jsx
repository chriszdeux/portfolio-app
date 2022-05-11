import React, { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersection'
import { animationsData } from '../../utils/data/animations'

export const Divider = ({values}) => {
  // debugger
  const { sectionRef, isVisible, section } = values
  const { fade_bottom } = animationsData
  return (
    <div className={`divider ${ isVisible ? fade_bottom : '' }`} ref={ sectionRef } >
      <canvas></canvas>
      <h2>{ section }</h2>
      <canvas></canvas>
    </div>
  )
}
