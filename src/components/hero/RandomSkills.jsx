import React, { useEffect, useState } from 'react'

export const RandomSkills = ({skill}) => {
  const [positionY, setPositionY] = useState({})

  const handlePosition = () => {
    const y_pos = Math.floor(Math.random() * 100) - 1
    return y_pos
  }
  // debugger
  useEffect(() => {
    setPositionY( {
      ...skill,
      pos_y: handlePosition(),
    } )
  }, [ skill ])
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPositionY( {
  //       ...skill,
  //       pos_y: handlePosition(),
  //     } )
  //   }, 11500);
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [  ])
  // debugger
  return (
    <div className='random--icon' style={{  
      top: `${positionY.pos_y}%`,
      animationDelay: `${positionY.delay}`,
      color: positionY.color           
    }}>
      { positionY.icon }
      { positionY.icon }
      <div>
        
      </div>
    </div>
  )
}
