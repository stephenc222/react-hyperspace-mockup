import React from 'react'
import DottedLink from './DottedLink'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div>
        <span>© Untitled. All rights reserved</span>
        <span style={{ borderRight: '1px solid rgba(255, 255, 255, 0.15)', paddingLeft: 20, marginRight: 20 }} />
        <span>Design: <DottedLink text='HTML5 UP' style={{ borderBottom: 'dotted 1px rgba(255, 255, 255, 0.15)' }} /></span>
      </div>
    </div>
  )
}

export default Footer
