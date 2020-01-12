import React from 'react'
import Header from 'components/Header'
import './Section.css'

const Section = ({ header = '', children = '' }) => {
  return (
    <div className='section-container'>
      <Header priority='2'>{header}</Header>
      <div className='section-content'>
        {children}
      </div>
    </div>
  )
}

export default Section
