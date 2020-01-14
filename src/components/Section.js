import React from 'react'
import PropTypes from 'prop-types'
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

Section.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  props: PropTypes.any
}

export default Section
