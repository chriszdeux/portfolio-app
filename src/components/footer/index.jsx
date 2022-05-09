import React from 'react'
import { aboutMeData } from '../../utils/data/aboutData'
import { icons } from '../../utils/icons/icons'
import { FullDivider } from '../helpers/FullDivider'

export const Footer = () => {
  const { contact } = aboutMeData
  return (
    <>
      <FullDivider />
    <section className='footer'>
      <h2>
        This website was made with React 
      </h2>
      <ul className='footer__contact'>
        {
          contact.map(contact => (
            <a href={ contact.link } target="_blank" rel="noreferrer">
              <li>
                { contact.icon }
                {/* <span>{ contact.name }</span> */}
              </li>
            </a>
          ))
        }
      </ul>
      <div>
        {
          icons.react_icon
        }
      </div>
    </section>
          </>
  )
}
