import React, { useContext, useEffect, useState } from 'react'
import { SourceOfTheTruth } from '../../context/context'
import { animationsData } from '../../utils/data/animations';

export const SideNeon = () => {
  const { sideBars, setSideBars } = useContext(SourceOfTheTruth);
  const { fade_bottom, fade_top } = animationsData
  const { height } = sideBars
  const [handleBars, setHandleBars] = useState({
    left: null,
    right: null
  })
  const [animation, setAnimation] = useState(false)
  const { left, right } = handleBars
  useEffect(() => {
    setAnimation(true)
    setHandleBars({

    left: <canvas className={`left ${ animation ? fade_bottom : ''}`} style={{ height: height }}></canvas>,
    right: <canvas className={ `right ${ animation ? fade_top : ''}` } style={{ height: height }}></canvas>
    }
    )

    const time = setTimeout(() => {
      setAnimation(false)
    }, 1000);

    return () => {
      clearInterval(time)
    }
  }, [ sideBars ])
  return (
    <div className='side__bars'>
      { left !== null && left }
      { right !== null && right }
      
    </div>
  )
}
