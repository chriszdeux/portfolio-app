import React, { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersection'
import { animationsData } from '../../utils/data/animations'

export const Divider = ({section}) => {
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const { fade_bottom } = animationsData
  return (
    <div className={`divider ${ isVisible ? fade_bottom : '' }`} ref={ sectionRef } >
      <canvas></canvas>
      <h2>{ section }</h2>
      <canvas></canvas>
    </div>
  )
}
