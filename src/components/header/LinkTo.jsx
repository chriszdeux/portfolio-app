import React, { useContext } from 'react'
import { SourceOfTheTruth } from '../../context/context'

export const LinkTo = ({ page }) => {
  const { sideBars, setSideBars } = useContext(SourceOfTheTruth)

  return (
    <a href={ page.route } onClick={() => setSideBars({
      height: page.height_bars,
    })} style={{ textDecoration: 'none', color: '#FAFAFB', textAlign: 'center' }}>
      { page.section }
      </a>
  )
}
