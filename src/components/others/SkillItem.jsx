import React from 'react'

export const SkillItem = ({ item }) => {
  const { skill, icon, color } = item
  return (
    <li>
      <span style={{ color: color }}>{ icon }</span> -{ skill }
    </li>
  )
}
