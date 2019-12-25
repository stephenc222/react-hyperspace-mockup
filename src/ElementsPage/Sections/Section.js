import React from 'react'
import './Section.css'

const Section = ({ header = '', children = '' }) => {
  return (
    <div className='section-container'>
      <h2>{header}</h2>
      <div className='section-content'>
        {children}
      </div>
    </div>
  )
}

export default Section
