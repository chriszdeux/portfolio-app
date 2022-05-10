import React from 'react'

export const HobbieItem = ({ item }) => {
  const { hobbie, icon, color } = item
  return (
    <li>
      <span style={{ color: color }}> { icon }</span> -{ hobbie }
    </li>
  )
}
