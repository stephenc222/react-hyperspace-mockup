import React from 'react'
import Header from 'components/Header'
import './Section.css'

const Section = ({ header = '', children = '', ...props }) => {
  return (
    <div className='section-container'>
      <Header priority='2'>{header}</Header>
      <div className='section-content'>
        {
          children.length && typeof children !== 'string'
            ? children.map(child => React.cloneElement(child, { ...props }))
            : React.cloneElement(children, { ...props })
        }
      </div>
    </div>
  )
}

export default Section
